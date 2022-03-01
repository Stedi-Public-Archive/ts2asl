import * as ts from 'typescript';
import { convertToIntermediaryAsl } from '..';
import { createCompilerHostFromSource } from '../../compiler-host/node';

export const testConvertToIntermediaryAst = (source: string, inputArgumentName?: string) => {

  const host = createCompilerHostFromSource(source);

  return convertToIntermediaryAsl(host.sourceFile, { typeChecker: host.typeChecker, inputArgumentName });
}

describe("dummy", () => {
  it("test", () => { })
})