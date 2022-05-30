

import ts  from "typescript";
import * as lib from "../resources/asl-lib"

export const createCompilerHostFromSourceForWeb = (source: string) => {
  let compilerOptions = { strict: false, target: ts.ScriptTarget.Latest, allowJs: true, module: ts.ModuleKind.Node12 } as ts.CompilerOptions;
  const contents = source;
  const sourceFile = ts.createSourceFile("ad-hoc.ts", contents, ts.ScriptTarget.ES2015);
  const host = ts.createCompilerHost(compilerOptions);
  const aslLibSource = ts.createSourceFile("asl-lib.ts", lib.libraryDefinitionAsString, ts.ScriptTarget.Latest)

  const oldGetSourceFile = host.getSourceFile;
  host.useCaseSensitiveFileNames = () => true;
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