import { writeFileSync } from "fs";
import { Converter } from "@cloudscript/convert/lib/convert"
import { createCompilerHostFromFile } from "@cloudscript/convert/lib/compiler-host";

describe("when converting example", () => {
  let converted;

  beforeAll(() => {
    const host = createCompilerHostFromFile(
      "__test__/examples/runner-simplewait.ts"
    );
    const converter = new Converter(host);
    converted = converter
      .convert(true)
      .stateMachines.find(x => x.name === "main");
    writeFileSync(
      "__test__/examples/output/example-asllib.ts",
      converted.transformedCode
    );
    writeFileSync(
      "__test__/examples/output/example-i-asl.json",
      JSON.stringify(converted.iasl, function (this: any, key: string, val: any) { return key === "parentScope" ? undefined : val }, 2)
    );
    writeFileSync(
      "__test__/examples/output/example-asl.json",
      JSON.stringify(converted.asl, null, 2)
    );
  });

  it("then can be converted to asllib", async () => {
    expect(converted.iasl).toMatchInlineSnapshot();
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(``);
  });

  it("then can be converted to asl", async () => {
    expect(converted.asl).toMatchInlineSnapshot(``);
  });
});
