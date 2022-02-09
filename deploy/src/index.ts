import { Converted, Converter } from "../../convert/src/convert"
import * as ts from "typescript";
import { readFileSync } from "fs";
import * as path from "path";
import { performPackage } from "./package";
import { writeTempFile } from "./temp-files";

export const deploy = (filepath: string, options: DeployOptions) => {

}

export const convert = (filepath: string, options: PackageOptions): Converted => {
  const sourceFile = ts.createSourceFile(filepath, readFileSync(filepath).toString(), ts.ScriptTarget.ES2021);
  if (options.tempPath === undefined) {
    options.tempPath = path.join(path.dirname(filepath), ".cloudscript");
  }
  const converter = new Converter(sourceFile, process.cwd());
  const converted = converter.convert();
  return converted;
}

export const packageConverted = async (converted: Converted, sourceFile: string, options: PackageOptions): Promise<IPackage> => {
  const result = { Resources: {} } as IPackage;

  for (const sm of converted.stateMachines) {
    const resource = {
      Type: "AWS::StepFunctions::StateMachine",
      Properties: {
        StateMachineName: { "Fn:Sub": "${programName}-" + sm.name },
        Definition: sm.asl,
        RoleArn: options.executionRoleArn,
        StateMachineType: options.stateMachineType ?? "EXPRESS"
      }
    } as IResource;
    result.Resources[sm.name] = resource;
  }

  if (converted.lambdas.length > 0) {
    const zip = await performPackage(sourceFile, "deploy/node_modules/.bin/esbuild");
    const localPath = writeTempFile(".zip", zip);
    for (const lambda of converted.lambdas) {
      const resource = {
        Type: "AWS::Lambda::Function",
        Properties: {
          FunctionName: { "Fn:Sub": "${programName}-" + lambda.name },
          Role: options.executionRoleArn,
          Runtime: "nodejs14.x",
          Handler: "index." + lambda.name,
          Timeout: 30,
          MemorySize: 1024,
          Code: "file:" + localPath
        }
      } as IResource;
      result.Resources[lambda.name] = resource;
    }
  }
  return result;
}

interface DeployOptions {

}

interface PackageOptions {
  executionRoleArn: string | { ref: string };
  tempPath?: string;
  templateFilePath?: string;
  bucketName?: string;
  stateMachineType?: "EXPRESS" | "STANDARD"
}

export interface IPackage {
  Resources: Record<string, IResource>;
}

export interface IResource {
  Type: string;
  Properties?: Record<string, unknown>;
}