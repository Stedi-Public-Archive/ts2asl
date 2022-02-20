import { CfnStateMachine, CfnStateMachineProps } from "@aws-cdk/aws-stepfunctions";
import { Construct } from "@aws-cdk/core";
import { createCompilerHostFromFile } from "@cloudscript/convert/lib/compiler-host/node"
import { Converter } from "@cloudscript/convert/lib/convert"


export interface CloudScriptProps extends Omit<CfnStateMachineProps, "definition" | "definitionS3Location" | "definitionString"> {
  sourceFile: string;
  cwd?: string; // current working directory, used to resolve dependencies and tsconfig.json. default is process.cwd();
  diagnostics?: true; // when true additional diagnostics are printed
}

export class CloudScript extends CfnStateMachine {
  constructor(scope: Construct, id: string, props: CloudScriptProps) {

    //sourceFile, cwd & diagnostics are converted to a definitionString.
    const { sourceFile, cwd, diagnostics, ...stateMachineProps } = props;

    const compilerHost = createCompilerHostFromFile(sourceFile, cwd);
    const converter = new Converter(compilerHost);
    const converted = converter.convert(diagnostics);
    const main = converted.stateMachines.find(x => x.name === "main");
    if (!main) throw new Error("source file did not declare a statemachine called main. try: `export const main = asl.deploy.asStateMachine(() => {});`")

    const definitionString = JSON.stringify(main.asl, null, 2);
    super(scope, id, { ...stateMachineProps, definitionString })
  }
}