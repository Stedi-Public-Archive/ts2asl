import ts from "typescript";
import { ConverterOptions } from "../convert";

import { createTransformers } from "./transformers";

export const transformCode = (source: string) => {
  const sourceFile: ts.SourceFile = ts.createSourceFile(
    'test.ts', source, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS
  );
  return transformAst(sourceFile);
}

export const transformAst = (sourceFile: ts.SourceFile, converterOptions: ConverterOptions = {}) => {
  return ts.transform<ts.SourceFile>(sourceFile, createTransformers(converterOptions)).transformed[0];
}

export const transformBody = (body: ts.ConciseBody, converterOptions: ConverterOptions = {}) => {
  return ts.transform<ts.ConciseBody>(body, createTransformers(converterOptions)).transformed[0];
}
