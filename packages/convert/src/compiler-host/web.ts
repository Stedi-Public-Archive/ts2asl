

import ts, { getDefaultLibFileName }  from "typescript";
import * as lib from "../resources/asl-lib"


export const createCompilerHostFromSourceForWeb = (source: string) => {
  let compilerOptions = { strict: false, target: ts.ScriptTarget.Latest, allowJs: true, module: ts.ModuleKind.Node12 } as ts.CompilerOptions;
  const contents = source;
  const sourceFile = ts.createSourceFile("ad-hoc.ts", contents, ts.ScriptTarget.ES2015);
  const aslLibSource = ts.createSourceFile("asl-lib.ts", lib.libraryDefinitionAsString, ts.ScriptTarget.Latest)
  const host: ts.CompilerHost = {
    getSourceFile: function (fileName: string, languageVersion: ts.ScriptTarget, onError?: (message: string) => void, shouldCreateNewSourceFile?: boolean): ts.SourceFile | undefined {
      const result = [sourceFile, aslLibSource].find(x => x.fileName === fileName);

      return result;
    },
    resolveModuleNames: (moduleNames: string[]): (ts.ResolvedModule | undefined)[] => {
      return moduleNames.map(x => (x === "@ts2asl/asl-lib") ? { resolvedFileName: "asl-lib.ts" } : undefined);
    },
    getDefaultLibFileName: function (options: ts.CompilerOptions): string {
      return getDefaultLibFileName(options)
    },
    writeFile: function (fileName: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void, sourceFiles?: readonly ts.SourceFile[]): void {

    },
    getCurrentDirectory: function (): string {
      return "/"
    },
    getCanonicalFileName: function (fileName: string): string {
      return fileName;
    },
    useCaseSensitiveFileNames: function (): boolean {
      return true;
    },
    getNewLine: function (): string {
      return "\n";
    },
    fileExists: function (fileName: string): boolean {
      return [sourceFile, aslLibSource].find(x => x.fileName === fileName) !== undefined;
    },
    readFile: function (fileName: string): string | undefined {
      const file = [sourceFile, aslLibSource].find(x => x.fileName === fileName);
      return file?.getFullText();
    }
  };
  host.getCurrentDirectory = () => "/";

  const program = ts.createProgram(["ad-hoc.ts"], compilerOptions, host);
  const typeChecker = program.getTypeChecker();
  return { sourceFile, typeChecker, program };
}
