import * as ts from 'typescript';
import { convertToIntermediaryAsl } from '..';
import { createCompilerHost } from '../../compiler-host';

export const testConvertToIntermediaryAst = (source: string) => {

  const sourceFile: ts.SourceFile = ts.createSourceFile(
    'test.ts', source, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS
  );

  const host = createCompilerHost(sourceFile);

  return convertToIntermediaryAsl(sourceFile, host.typeChecker);
}

describe("dummy", () => {
  it("test", () => { })
})