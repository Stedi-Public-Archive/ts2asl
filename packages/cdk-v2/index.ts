import { Construct } from 'constructs';
import * as fs from "fs";
import { ensureBundleTsConfig } from "./util";
import { Converter, ConverterOptions } from "@ts2asl/convert";
import { createCompilerHostFromFile } from "@ts2asl/convert";
import { StateMachine, Task, Map, Parallel } from "asl-types";
import * as node from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as sfn from 'aws-cdk-lib/aws-stepfunctions';
import { resolvePermissionsIamFast } from './iamfast/resolve-permissions';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import * as path from 'path';


export type StateMachineConversationOptions = { autoGenerateIamPolicy?: true; emitStateLanguageFiles?: true; emitIamPolicies?: true;}
export type StateMachineProps = Omit<sfn.StateMachineProps, "stateMachineName" | "definition"> & { conversionOptions? : StateMachineConversationOptions };
export type NodejsFunctionProps = Omit<node.NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">;

export interface TypescriptStateMachineProps {
  defaultStepFunctionProps: StateMachineProps;
  stepFunctionProps?: Record<string, StateMachineProps>;
  defaultFunctionProps?: NodejsFunctionProps;
  functionProps?: Record<string, NodejsFunctionProps>;
  programName?: string;
  sourceFile: string;
  conversionOptions?: ConverterOptions;
  cwd?: string; // current working directory, used to resolve dependencies and tsconfig.json. default is process.cwd();
  parameters?: Record<string, string>;
}
export class TypescriptStateMachine extends Construct {
  functions: Record<string, node.NodejsFunction>;
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
    for (const convertedLambda of converted.lambdas) {
      const lambdaName = convertedLambda.name;
      const logicalId = `${id}${lambdaName.substring(0, 1).toUpperCase()}${lambdaName.substring(1)}`;
      const entry = sourceFile;
      const handler = lambdaName;
      const fnProps = props.functionProps?.[lambdaName] ?? {};
      const userProps = {
        ...props.defaultFunctionProps,
        ...fnProps,
      };
      const bundling = { ... (userProps.bundling ?? {}), tsconfig: ensureBundleTsConfig() };
      const fn = new node.NodejsFunction(scope, logicalId, {
        runtime: lambda.Runtime.NODEJS_14_X,
        ...userProps,
        bundling,
        entry,
        handler,
      });
      arnDict["lambda:" + lambdaName] = fn.functionArn;
      this.functions[lambdaName] = fn;
      foundLambdaNames.push(lambdaName);
    }
    const expectedLambdaNames = Object.keys(props.functionProps ?? {});
    const missingLambdas = expectedLambdaNames.filter(name => !foundLambdaNames.includes(name));
    if (missingLambdas.length) {
      throw new Error(`CDK Configuration expected to find the following lambdas that weren't part of the source: ${missingLambdas.join(", ")}`);
    }
    const stateMachines: sfn.StateMachine[] = [];

    this.stateMachines = {};
    const foundStateMachineNames: string[] = [];
    const conversionOptionsByName : Record<string, StateMachineConversationOptions> = {};
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
      conversionOptionsByName[step.name] = { ... (props.defaultStepFunctionProps?.conversionOptions || {}), ...(sfnProps.conversionOptions || {})};
      foundStateMachineNames.push(step.name);
    }
    const expectedStateMachineNames = Object.keys(props.stepFunctionProps ?? {});
    const missingStateMachines = expectedStateMachineNames.filter(name => !foundStateMachineNames.includes(name));
    if (missingStateMachines.length) {
      throw new Error(`CDK Configuration expected to find the following state machines that weren't part of the source: ${missingStateMachines.join(", ")}`);
    }

    const postProcess = (input: string) => replaceExpressions(input, props.parameters ?? {}, this.stateMachines as any, this.functions);;
    for (const sm of stateMachines) {
      const underlyingResource = sm.node.findChild("Resource") as sfn.CfnStateMachine;
      const replaced = replaceArns(underlyingResource.definition as StateMachine, arnDict);
      const stringified = JSON.stringify(replaced, null, 2);
      underlyingResource.definitionString = replaceExpressions(stringified, props.parameters ?? {}, this.stateMachines as any, this.functions);
      delete underlyingResource.definition;
      const fnName = underlyingResource.getMetadata("ts2asl:sourceFunctionName");


      const conversionOptions = conversionOptionsByName[fnName];
      const getPath = (prefix: string) => {
        const p = path.dirname(sourceFile);
        const pout =path.join(p, "ts2asl.out");
        if (!fs.existsSync(pout)) fs.mkdirSync(pout);
        const f = path.basename(sourceFile, ".ts");
        return path.join(pout, `${f}.${prefix}.json`);
      }
      const removeCdktokens = (input: string) => {
        return input.replace(/\${Token\[(TOKEN|AWS.AccountId|AWS.Region).\d+\]}/g, "${Token[CDK.REF.REPLACED]}");
      }
      if (conversionOptions.autoGenerateIamPolicy === true) {
        const policyDocument = resolvePermissionsIamFast(scope, stringified, postProcess);
        for(const statement of policyDocument.Statement) {
          const cdkStatement = PolicyStatement.fromJson(statement);
          sm.role.addToPrincipalPolicy(cdkStatement);
        }
        if (conversionOptions.emitIamPolicies) {
          const filename = getPath("iam");
          const banner = `generated using IAMFast (https://github.com/iann0036/iamfast) and @ts2asl/cdk-typescript-statemachine, version: ${require("../package.json").version}}`;
          const policyDocumentAsString = JSON.stringify({"//": banner, ...policyDocument}, null, 2);
          const policyDocumentWithReplacedTokens = removeCdktokens(policyDocumentAsString);
          fs.writeFileSync(filename, policyDocumentWithReplacedTokens);
        }
      }
      if (conversionOptions.emitStateLanguageFiles) {
        const filename = getPath("asl");
        const definitionWithReplacedTokens = removeCdktokens(underlyingResource.definitionString);;
        fs.writeFileSync(filename, definitionWithReplacedTokens);
      }
    }
  }
}

const replaceExpressions = (input: string, parameters: Record<string, string>, satemachines: Record<string, sfn.StateMachine>, functions: Record<string, node.NodejsFunction>): string => {

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

//todo: can this go?
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