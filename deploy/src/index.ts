import { createCompilerHost } from "../../convert/src/compiler-host"
import { Converter } from "../../convert/src/convert"
import * as ts from "typescript";
import { readFileSync, writeFileSync } from "fs";
import * as path from "path";

export const deploy = (filepath: string, options: DeployOptions) => {

}

export const packageProgram = (filepath: string, options: PackageOptions): IPackage => {
  const result = { Resources: {} } as IPackage;
  const sourceFile = ts.createSourceFile(filepath, readFileSync(filepath).toString(), ts.ScriptTarget.ES2021);

  const converter = new Converter(sourceFile, process.cwd());
  const converted = converter.convert();
  for (const sm of converted.stateMachines) {
    const resource = {
      Type: "AWS::StepFunctions::StateMachine",
      Properties: {
        StateMachineName: sm.name,
        Definition: sm.asl,
        RoleArn: options.executionRoleArn,
        StateMachineType: options.stateMachineType ?? "EXPRESS"
      }
    } as IResource;
    result.Resources[sm.name] = resource;
  }
  return result;
}

interface DeployOptions {

}

interface PackageOptions {
  executionRoleArn: string | { ref: string };
  templateFilePath: string;
  bucketName: string;
  stateMachineType?: "EXPRESS" | "STANDARD"
}

export interface IPackage {
  Resources: Record<string, IResource>;
}

export interface IResource {
  Type: string;
  Properties?: Record<string, unknown>;
}