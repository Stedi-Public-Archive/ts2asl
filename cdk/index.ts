import { CfnStateMachine, CfnStateMachineProps } from "@aws-cdk/aws-stepfunctions";
import { Runtime } from "@aws-cdk/aws-lambda";
import { Construct } from "@aws-cdk/core";
import { Converter } from "@ts2asl/convert"
import { createCompilerHostFromFile } from "@ts2asl/convert"
import { NodejsFunction, NodejsFunctionProps } from "@aws-cdk/aws-lambda-nodejs";
import { StateMachine, Task, Map, Parallel } from "asl-types";

export interface TypescriptStateMachineProps {
  defaultStepFunctionProps: Omit<CfnStateMachineProps, "stateMachineName" | "definition" | "definitionS3Location" | "definitionString">;
  defaultFunctionProps: Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">;
  programName: string;
  sourceFile: string;
  cwd?: string; // current working directory, used to resolve dependencies and tsconfig.json. default is process.cwd();
  diagnostics?: true; // when true additional diagnostics are printed
}

export class TypescriptStateMachine extends Construct {
  constructor(scope: Construct, id: string, props: TypescriptStateMachineProps) {

    //sourceFile, cwd & diagnostics are converted to a definitionString.
    const { sourceFile, cwd, diagnostics } = props;

    const compilerHost = createCompilerHostFromFile(sourceFile, cwd);
    const converter = new Converter(compilerHost);
    const converted = converter.convert(diagnostics);

    super(scope, id)

    const typescriptDict: Record<string, string> = {};

    for (const lambda of converted.lambdas) {
      const entry = sourceFile;
      const handler = lambda.name;
      const fn = new NodejsFunction(scope, lambda.name, {
        ...props.defaultFunctionProps,
        functionName: `${props.programName}_${lambda.name}`,
        entry,
        handler,
        runtime: Runtime.NODEJS_14_X
      });
      typescriptDict["typescript:" + lambda.name] = fn.functionArn;
    }

    for (const step of converted.stateMachines) {

      const replaced = replaceFunctionArns(step.asl!, typescriptDict);

      new CfnStateMachine(scope, `${id}_${step.name}`, {
        ...props.defaultStepFunctionProps,
        definitionString: JSON.stringify(replaced, null, 2),
        stateMachineName: `${props.programName}_${step.name}`
      })
    }
  }
}


const replaceFunctionArns = (statemachine: StateMachine, typescriptDict: Record<string, string>) => {
  for (const state of Object.values(statemachine.States)) {

    if (state.Type === "Map") {
      replaceFunctionArns((state as Map).Iterator, typescriptDict);
    }
    if (state.Type === "Parallel") {
      for (const branch of (state as Parallel).Branches) {
        replaceFunctionArns(branch, typescriptDict);
      }
    }
    if (state.Type === "Task") {
      const task = state as Task;
      if (typescriptDict[task.Resource as string]) {
        task.Resource = typescriptDict[task.Resource as string];
      }
    }
  }
  return statemachine;
}