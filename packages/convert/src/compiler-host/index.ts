import * as ts from "typescript";

export interface ICompilerHost {
  sourceFile: ts.SourceFile;
  typeChecker: ts.TypeChecker;
  program: ts.Program;
}