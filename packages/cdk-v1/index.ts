import * as sfn from "@aws-cdk/aws-stepfunctions";
import { Runtime } from "@aws-cdk/aws-lambda";
import { Construct } from "@aws-cdk/core";
import { Converter, ConverterOptions, createCompilerHostFromSource } from "@ts2asl/convert";
import { createCompilerHostFromFile } from "@ts2asl/convert";
import { NodejsFunction, NodejsFunctionProps } from "@aws-cdk/aws-lambda-nodejs";
import { StateMachine, Task, Map, Parallel } from "asl-types";
import * as fs from "fs";
import { ensureBundleTsConfig } from "./util";

export interface TypescriptStateMachineProps {
  defaultStepFunctionProps: Omit<sfn.StateMachineProps, "stateMachineName" | "definition">;
  stepFunctionProps?: Record<string, Omit<sfn.StateMachineProps, "stateMachineName" | "definition">>;
  defaultFunctionProps?: Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">;
  functionProps?: Record<string, Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">>;
  programName: string;
  sourceFile: string;
  conversionOptions?: ConverterOptions & { emitStateLanguageFiles?: true; };
  cwd?: string; // current working directory, used to resolve dependencies and tsconfig.json. default is process.cwd();
  parameters?: Record<string, string>;
}

export class TypescriptStateMachine extends Construct {
  functions: Record<string, NodejsFunction>;
  stateMachines: Record<string, sfn.StateMachine>;

  constructor(scope: Construct, id: string, props: TypescriptStateMachineProps) {


    //sourceFile, cwd & diagnostics are converted to a definitionString.
    const { sourceFile, cwd } = props;
    const compilerHost = createCompilerHostFromFile(sourceFile, cwd);
    const converter = new Converter(compilerHost);
    const options = props.conversionOptions ?? {};
    const converted = converter.convert(options);

    super(scope, id);

    const arnDict: Record<string, string> = {};
    const foundLambdaNames: string[] = [];
    this.functions = {};
    for (const lambda of converted.lambdas) {
      const logicalId = `${id}${lambda.name.substring(0, 1).toUpperCase()}${lambda.name.substring(1)}`;
      const entry = sourceFile;
      const handler = lambda.name;
      const fnProps = props.functionProps?.[lambda.name] ?? {};
      const userProps = {
        ...props.defaultFunctionProps,
        ...fnProps,
      };
      const bundling = { ... (userProps.bundling ?? {}), tsconfig: ensureBundleTsConfig() };
      const fn = new NodejsFunction(scope, logicalId, {
        runtime: Runtime.NODEJS_14_X,
        ...userProps,
        bundling,
        entry,
        handler,
      });
      arnDict["lambda:" + lambda.name] = fn.functionArn;
      this.functions[lambda.name] = fn;
      foundLambdaNames.push(lambda.name);
    }
    const expectedLambdaNames = Object.keys(props.functionProps ?? {});
    const missingLambdas = expectedLambdaNames.filter(name => !foundLambdaNames.includes(name));
    if (missingLambdas.length) {
      throw new Error(`CDK Configuration expected to find the following lambdas that weren't part of the source: ${missingLambdas.join(", ")}`);
    }
    const stateMachines: sfn.StateMachine[] = [];

    this.stateMachines = {};
    const foundStateMachineNames: string[] = [];
    for (const step of converted.stateMachines) {
      const logicalId = `${id}${step.name.substring(0, 1).toUpperCase()}${step.name.substring(1)}`;
      const sfnProps = props.stepFunctionProps?.[step.name] ?? {};
      const sm = new sfn.StateMachine(scope, logicalId, {
        ...props.defaultStepFunctionProps,
        ...sfnProps,
        definition: new sfn.Succeed(this, logicalId + "-empty-success"),
      });
      const underlyingResource = sm.node.findChild("Resource") as sfn.CfnStateMachine;
      underlyingResource.addMetadata("ts2asl:sourceFunctionName", step.name);
      underlyingResource.definition = step.asl!;
      arnDict["statemachine:" + step.name] = sm.stateMachineArn;
      stateMachines.push(sm);
      this.stateMachines[step.name] = sm;
      foundStateMachineNames.push(step.name);
    }
    const expectedStateMachineNames = Object.keys(props.stepFunctionProps ?? {});
    const missingStateMachines = expectedStateMachineNames.filter(name => !foundStateMachineNames.includes(name));
    if (missingStateMachines.length) {
      throw new Error(`CDK Configuration expected to find the following state machines that weren't part of the source: ${missingStateMachines.join(", ")}`);
    }

    for (const sm of stateMachines) {
      const underlyingResource = sm.node.findChild("Resource") as sfn.CfnStateMachine;
      const replaced = replaceArns(underlyingResource.definition as StateMachine, arnDict);
      const stringified = JSON.stringify(replaced, null, 2);
      underlyingResource.definitionString = replaceExpressions(stringified, props.parameters ?? {}, this.stateMachines as any, this.functions);
      delete underlyingResource.definition;
      sm.node.findChild("Resource");

      if (props.conversionOptions?.emitStateLanguageFiles) {
        const fnName = underlyingResource.getMetadata("ts2asl:sourceFunctionName");
        const filename = sourceFile.replace(".ts", "." + fnName + ".json");
        const definitionWithReplacedTokens = underlyingResource.definitionString.replace(/\${Token\[TOKEN.\d+\]}/g, "${Token[CDK.REF.REPLACED]}")
        fs.writeFileSync(filename, definitionWithReplacedTokens);
      }
    }
  }
}

const replaceExpressions = (input: string, parameters: Record<string, string>, satemachines: Record<string, sfn.StateMachine>, functions: Record<string, NodejsFunction>): string => {

  const replaced1 = input.replace(/\[!(lambda|state-machine)\[(\w*)\](name|arn)\]/g, (val: string, type: string, name: string, attrib: string) => {
    // const type = groups[0];
    // const name = groups[1];
    // const attrib = groups[2];
    switch (type) {
      case "lambda":
        const lambda = functions[name];
        if (!lambda) throw Error(`cannot replace expression. lambda called '${name}' not found, complete expression ${val}`);
        switch (attrib) {
          case "arn":
            return lambda.functionArn;
          case "name":
            return lambda.functionName;
          default:
            throw Error(`cannot replace expression. unknown attribute '${attrib}', complete expression ${val}`);
        }
      case "state-machine":
        const statemachine = satemachines[name];
        if (!statemachine) throw Error(`cannot replace expression. state-machine called '${name}' not found, complete expression ${val}`);
        switch (attrib) {
          case "arn":
            return statemachine.stateMachineArn;
          case "name":
            return statemachine.stateMachineName;
          default:
            throw Error(`cannot replace expression. unknown attribute '${attrib}', complete expression ${val}`);
        }

      default:
        throw Error(`cannot replace expression of type ${type}, complete expression ${val}`);
    }
  });

  const replaced2 = replaced1.replace(/\[!parameter\[(\w*)\]]/g, (_val: string, paramName: string) => {
    if (parameters[paramName] === undefined) {
      throw new Error(`Unable to resolve parameter ${paramName}`);
    }
    return parameters[paramName];
  });
  return replaced2;
};

const replaceArns = (statemachine: StateMachine, arnDict: Record<string, string>) => {
  for (const state of Object.values(statemachine.States)) {

    if (state.Type === "Map") {
      replaceArns((state as Map).Iterator, arnDict);
    }
    if (state.Type === "Parallel") {
      for (const branch of (state as Parallel).Branches) {
        replaceArns(branch, arnDict);
      }
    }
    if (state.Type === "Task") {
      const task = state as Task;
      if (arnDict[task.Resource as string]) {
        task.Resource = arnDict[task.Resource as string];
      } else if (task.Resource === "arn:aws:states:::aws-sdk:sfn:startExecution") {
        if (task.Parameters && task.Parameters.StateMachineArn) {
          if (arnDict[task.Parameters.StateMachineArn as string]) {
            task.Parameters.StateMachineArn = arnDict[task.Parameters.StateMachineArn as string];
          }
        }
      }
    }
  }
  return statemachine;
};