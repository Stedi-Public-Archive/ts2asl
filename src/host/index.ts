import ts from "typescript"
import ast from "asl-types"

export const hostFromString = (code: string): Host => {
  return {
    sourceFile: ts.createSourceFile('input.ts', code, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS)
  }
}



export interface Host {
  sourceFile: ts.SourceFile;
  transformedSource?: ts.SourceFile;
  stateMachine?: ast.StateMachine;
}