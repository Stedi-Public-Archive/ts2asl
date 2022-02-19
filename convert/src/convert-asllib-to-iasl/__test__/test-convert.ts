import * as ts from 'typescript';
import { convertToIntermediaryAsl } from '..';
import { createCompilerHostFromSource } from '../../compiler-host';

export const testConvertToIntermediaryAst = (source: string) => {

  const host = createCompilerHostFromSource(source);

  return convertToIntermediaryAsl(host.sourceFile, { typeChecker: host.typeChecker });
}

describe("dummy", () => {
  it("test", () => { })
})