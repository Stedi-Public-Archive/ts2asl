import { testTransform } from "../../__tests__/test-transform";
import { callStatementTransformer } from "../call-statement";

describe("when converting call statements", () => {
  it("statement becomes invoke", () => {
    expect(testTransform("SayHello(arg);", callStatementTransformer))
      .toMatchInlineSnapshot(`
      "ASL.Task({
          TypescriptInvoke: SayHello,
          InputPath: \\"$.arg\\"
      });"
    `);
  });
  it("call statement without args is supported", () => {
    expect(testTransform("SayHello();", callStatementTransformer))
      .toMatchInlineSnapshot(`
      "ASL.Task({
          TypescriptInvoke: SayHello
      });"
    `);
  });
  it("call statement with await is supported", () => {
    expect(testTransform("await SayHello();", callStatementTransformer))
      .toMatchInlineSnapshot(`
      "await ASL.Task({
          TypescriptInvoke: SayHello
      });"
    `);
  });
  it("call statement inside variable assignment is supported", () => {
    expect(
      testTransform("const z = await SayHello();", callStatementTransformer)
    ).toMatchInlineSnapshot(`
      "const z = await ASL.Task({
          TypescriptInvoke: SayHello
      });"
    `);
  });
  it("call statement to ASL is untouched", () => {
    expect(
      testTransform("ASL.Parallel();", callStatementTransformer)
    ).toMatchInlineSnapshot(`"ASL.Parallel();"`);
  });
});
