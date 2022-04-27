import ts from "typescript";
import { ICompilerHost } from "../compiler-host";
import { ConverterOptions } from "../convert";

import { createTransformers } from "./transformers";


export const transformBody = (body: ts.ConciseBody, host: ICompilerHost, converterOptions: ConverterOptions = {}) => {
  return ts.transform<ts.ConciseBody>(body, createTransformers(converterOptions, host)).transformed[0];
}
