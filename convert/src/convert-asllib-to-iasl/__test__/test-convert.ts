import { convertToIntermediaryAsl } from '..';
import { createCompilerHostFromSource } from '../../compiler-host/node';
import { ConverterOptions } from '../../convert';

export const testConvertToIntermediaryAst = (source: string, inputArgumentName: string | undefined = undefined, converterOptions: ConverterOptions = { skipCheckCallables: true }) => {

  const host = createCompilerHostFromSource(source);

  return convertToIntermediaryAsl(host.sourceFile, { converterOptions: converterOptions, typeChecker: host.typeChecker, inputArgumentName });
}

describe("dummy", () => {
  it("test", () => { })
})