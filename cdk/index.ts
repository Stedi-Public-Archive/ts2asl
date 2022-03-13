import { CfnStateMachine, CfnStateMachineProps } from "@aws-cdk/aws-stepfunctions";
import { Runtime } from "@aws-cdk/aws-lambda";
import { Construct } from "@aws-cdk/core";
import { Converter, ConverterOptions } from "@ts2asl/convert"
import { createCompilerHostFromFile } from "@ts2asl/convert"
import { NodejsFunction, NodejsFunctionProps } from "@aws-cdk/aws-lambda-nodejs";
import { StateMachine, Task, Map, Parallel } from "asl-types";
import * as asl from "@ts2asl/asl-lib";

export interface TypescriptStateMachineProps {
  defaultStepFunctionProps: Omit<CfnStateMachineProps, "stateMachineName" | "definition" | "definitionS3Location" | "definitionString">;
  stepFunctionProps?: Record<string, Omit<CfnStateMachineProps, "stateMachineName" | "definition" | "definitionS3Location" | "definitionString">>;
  defaultFunctionProps?: Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">;
  functionProps?: Record<string, Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">>;
  programName: string;
  sourceFile: string;
  conversionOptions?: ConverterOptions;
  cwd?: string; // current working directory, used to resolve dependencies and tsconfig.json. default is process.cwd();
  parameters?: Record<string, unknown>;
}

export class TypescriptStateMachine extends Construct {
  constructor(scope: Construct, id: string, props: TypescriptStateMachineProps) {

    //sourceFile, cwd & diagnostics are converted to a definitionString.
    const { sourceFile, cwd } = props;

    for (const [key, val] of Object.entries(props.parameters ?? {})) {
      asl.deploy.setParameter(key, val);
    }

    const compilerHost = createCompilerHostFromFile(sourceFile, cwd);
    const converter = new Converter(compilerHost);
    const options = props.conversionOptions ?? {};
    options.getParameter = options.getParameter ?? asl.deploy.getParameter;
    const converted = converter.convert(options);

    super(scope, id)

    const arnDict: Record<string, string> = {};

    for (const lambda of converted.lambdas) {
      const entry = sourceFile;
      const handler = lambda.name;
      const fnProps = props.functionProps?.[lambda.name] ?? {};
      const fn = new NodejsFunction(scope, lambda.name, {
        ...props.defaultFunctionProps,
        ...fnProps,
        functionName: `${props.programName}_${lambda.name}`,
        entry,
        handler,
        runtime: Runtime.NODEJS_14_X
      });
      arnDict["lambda:" + lambda.name] = fn.functionArn;
    }

    const stateMachines: CfnStateMachine[] = [];

    for (const step of converted.stateMachines) {
      const sfnProps = props.stepFunctionProps?.[step.name] ?? {};
      const sm = new CfnStateMachine(scope, `${id}_${step.name}`, {
        ...props.defaultStepFunctionProps,
        ...sfnProps,
        definition: step.asl!,
        stateMachineName: `${props.programName}_${step.name}`
      });
      arnDict["statemachine:" + step.name] = sm.attrArn;
      stateMachines.push(sm);
    }

    for (const sm of stateMachines) {
      const replaced = replaceArns(sm.definition as StateMachine, arnDict);
      sm.definitionString = JSON.stringify(replaced, null, 2);
      delete sm.definition;
    }
  }
}


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
}