import * as ts from 'typescript';
import { convertToIntermediaryAst } from '..';

export const testConvertToIntermediaryAst = (source: string) => {

  const printer: ts.Printer = ts.createPrinter();


  const sourceFile: ts.SourceFile = ts.createSourceFile(
    'test.ts', source, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS
  );

  return convertToIntermediaryAst(sourceFile);
}

describe("dummy", () => {
  it("test", () => { })
})