import ts from "typescript";

import { transformers } from "./transformers";

export const transformCode = (source: string) => {
  const sourceFile: ts.SourceFile = ts.createSourceFile(
    'test.ts', source, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS
  );
  return transformAst(sourceFile);
}

export const transformAst = (sourceFile: ts.SourceFile) => {
  return ts.transform<ts.SourceFile>(sourceFile, transformers).transformed[0];
}
