import * as ts from 'typescript';
import { createCompilerHostFromSource } from '../../compiler-host/node';
import { createTransformers } from '../transformers';

export const testTransform = (source: string, transformers?: ts.TransformerFactory<ts.SourceFile>[] | ts.TransformerFactory<ts.SourceFile>) => {

  const printer: ts.Printer = ts.createPrinter();


  const host = createCompilerHostFromSource(source);

  const transforms = transformers ? Array.isArray(transformers) ? transformers : [transformers] : createTransformers({}, host);

  const result: ts.TransformationResult<ts.SourceFile> = ts.transform<ts.SourceFile>(
    host.sourceFile, transforms
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