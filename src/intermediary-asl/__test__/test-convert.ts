import * as ts from 'typescript';
import { convertToIntermediaryAsl } from '..';

export const testConvertToIntermediaryAst = (source: string) => {

  const printer: ts.Printer = ts.createPrinter();


  const sourceFile: ts.SourceFile = ts.createSourceFile(
    'test.ts', source, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS
  );

  return convertToIntermediaryAsl(sourceFile);
}

describe("dummy", () => {
  it("test", () => { })
})