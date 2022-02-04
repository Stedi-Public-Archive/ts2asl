import * as ts from 'typescript';

export const testTransform = (source: string, transformers: ts.TransformerFactory<ts.SourceFile>[] | ts.TransformerFactory<ts.SourceFile>) => {

  const printer: ts.Printer = ts.createPrinter();


  const sourceFile: ts.SourceFile = ts.createSourceFile(
    'test.ts', source, ts.ScriptTarget.ES2015, true, ts.ScriptKind.TS
  );

  // Options may be passed to transform
  const result: ts.TransformationResult<ts.SourceFile> = ts.transform<ts.SourceFile>(
    sourceFile, Array.isArray(transformers) ? transformers : [transformers]
  );

  const transformedSourceFile: ts.SourceFile = result.transformed[0];

  const resultPrinted = printer.printFile(transformedSourceFile);

  result.dispose();

  return resultPrinted.trim();
}

describe("dummy", () => {

  it("test", () => { }
  )
})