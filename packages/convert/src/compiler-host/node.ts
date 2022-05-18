
import { readFileSync } from "fs";
import path from "path";
import ts from "typescript";

export const createCompilerHostFromFile = (filePath: string, rootDirectory: string = process.cwd()) => {
  const tsconfigPath = path.join(rootDirectory, "tsconfig.json");
  let compilerOptions = { strict: false, target: ts.ScriptTarget.Latest, allowJs: true, module: ts.ModuleKind.Node12 } as ts.CompilerOptions;
  const fullFilePath = path.join(rootDirectory, filePath)
  const contents = readFileSync(fullFilePath).toString("utf-8");
  const sourceFile = ts.createSourceFile(filePath, contents, ts.ScriptTarget.ES2015);
  const host = ts.createCompilerHost(compilerOptions);
  const oldGetSourceFile = host.getSourceFile;
  host.getSourceFile = (filename: string, languageVersion: ts.ScriptTarget) => {
    const result = [sourceFile].find(x => x.fileName === filename) ?? oldGetSourceFile(filename, languageVersion);
    if (result === undefined) {
      console.log(`${filename} not found`);
    }
    return result;
  };
  host.getCurrentDirectory = () => rootDirectory;
  const program = ts.createProgram([filePath], compilerOptions, host);
  const typeChecker = program.getTypeChecker();
  return { sourceFile, typeChecker, program };
}

export const createCompilerHostFromSource = (source: string) => {
  let compilerOptions = { strict: false, target: ts.ScriptTarget.Latest, allowJs: true, module: ts.ModuleKind.Node12 } as ts.CompilerOptions;
  const contents = source;
  const sourceFile = ts.createSourceFile("ad-hoc.ts", contents, ts.ScriptTarget.ES2015);
  const host = ts.createCompilerHost(compilerOptions);
  const aslLibContents = readFileSync("resources/asl.d.ts").toString("utf-8");
  const aslLibSource = ts.createSourceFile("asl-lib.ts", aslLibContents, ts.ScriptTarget.Latest)

  const oldGetSourceFile = host.getSourceFile;
  host.getSourceFile = (filename: string, languageVersion: ts.ScriptTarget) => {
    const result = [sourceFile, aslLibSource].find(x => x.fileName === filename) ?? oldGetSourceFile(filename, languageVersion);
    if (result === undefined) {
      console.log(`${filename} not found`);
    }
    return result;
  };
  host.resolveModuleNames = (moduleNames: string[]): (ts.ResolvedModule | undefined)[] => {
    return moduleNames.map(x => (x === "@ts2asl/asl-lib") ? { resolvedFileName: "asl-lib.ts" } : undefined);
  };
  host.getCurrentDirectory = () => "/";
  const program = ts.createProgram(["ad-hoc.ts"], compilerOptions, host);
  const typeChecker = program.getTypeChecker();
  return { sourceFile, typeChecker, program };
}

