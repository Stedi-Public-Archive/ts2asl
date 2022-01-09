import * as ts from 'typescript';
import { transpile } from '..';

export const testTranspile = (source: string) => {

  const printer: ts.Printer = ts.createPrinter();


  const sourceFile: ts.SourceFile = ts.createSourceFile(
    'test.ts', source, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS
  );

  return transpile(sourceFile);
}

describe("dummy", () => {
  it("test", () => { })
})