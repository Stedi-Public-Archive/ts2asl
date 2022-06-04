
import { existsSync, readFileSync } from "fs";
import path from "path";
import ts from "typescript";
import * as lib from "../resources/asl-lib"

export const createCompilerHostFromFile = (filePath: string, rootDirectory: string = process.cwd()) => {
  let compilerOptions = { strict: false, target: ts.ScriptTarget.Latest, allowJs: true, module: ts.ModuleKind.Node12 } as ts.CompilerOptions;
  const fullfilePath = path.resolve(rootDirectory, filePath);
  const servicesHost: ts.LanguageServiceHost = {
    getScriptFileNames: () => [fullfilePath],
    getScriptVersion: () => "1",
    getScriptSnapshot: fileName => {
      if (!existsSync(fileName)) {
        return undefined;
      }

      return ts.ScriptSnapshot.fromString(readFileSync(fileName).toString());
    },
    getCurrentDirectory: () => rootDirectory,
    getCompilationSettings: () => compilerOptions,
    getDefaultLibFileName: options => ts.getDefaultLibFilePath(options),
    fileExists: ts.sys.fileExists,
    readFile: ts.sys.readFile,
    readDirectory: ts.sys.readDirectory,
    directoryExists: ts.sys.directoryExists,
    getDirectories: ts.sys.getDirectories,
  };

  const services = ts.createLanguageService(servicesHost, ts.createDocumentRegistry());
  const program = services.getProgram()!;
  const sourceFile = program.getSourceFile(fullfilePath)!;
  const typeChecker = program.getTypeChecker();
  return {  sourceFile, typeChecker, program };
}

export const createCompilerHostFromSource = (source: string) => {
  let compilerOptions = { strict: false, target: ts.ScriptTarget.Latest, allowJs: true, module: ts.ModuleKind.Node12 } as ts.CompilerOptions;
  const contents = source;
  const sourceFile = ts.createSourceFile("ad-hoc.ts", contents, ts.ScriptTarget.ES2015);
  const host = ts.createCompilerHost(compilerOptions);
  const aslLibSource = ts.createSourceFile("asl-lib.ts", lib.libraryDefinitionAsString, ts.ScriptTarget.Latest)

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

