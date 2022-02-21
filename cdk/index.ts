import { CfnStateMachine, CfnStateMachineProps } from "@aws-cdk/aws-stepfunctions";
import { Runtime } from "@aws-cdk/aws-lambda";
import { Construct } from "@aws-cdk/core";
import { createCompilerHostFromFile } from "@cloudscript/convert/lib/compiler-host/node"
import { Converter } from "@cloudscript/convert/lib/convert/index"
import { NodejsFunction, NodejsFunctionProps } from "@aws-cdk/aws-lambda-nodejs";
import { State, StateMachine, Task } from "asl-types";

export interface CloudScriptProps {
  defaultStepFunctionProps: Omit<CfnStateMachineProps, "stateMachineName" | "definition" | "definitionS3Location" | "definitionString">;
  defaultFunctionProps: Omit<NodejsFunctionProps, "functionName" | "entry" | "handler" | "runtime">;
  programName: string;
  sourceFile: string;
  cwd?: string; // current working directory, used to resolve dependencies and tsconfig.json. default is process.cwd();
  diagnostics?: true; // when true additional diagnostics are printed
}

export class CloudScript extends Construct {
  constructor(scope: Construct, id: string, props: CloudScriptProps) {

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
    if (state.Type === "Task") {
      const task = state as Task;
      if (typescriptDict[task.Resource as string]) {
        task.Resource = typescriptDict[task.Resource as string];
      }
    }
  }
  return statemachine;
}