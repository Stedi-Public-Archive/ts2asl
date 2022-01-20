import { testTransform } from "../../__tests__/test-transform";
import { callStatementTransformer } from "../call-statement";

describe("when converting call statements", () => {
  it("statement becomes invoke", () => {
    expect(testTransform("SayHello(arg);", callStatementTransformer))
      .toMatchInlineSnapshot(`
      "ASL.Task({
          TypescriptInvoke: SayHello,
          Input: arg
      });"
    `);
  });
  it("statement becomes invoke on property access expression", () => {
    expect(testTransform("SayHello(arg.xxx);", callStatementTransformer))
      .toMatchInlineSnapshot(`
      "ASL.Task({
          TypescriptInvoke: SayHello,
          Input: arg.xxx
      });"
    `);
  });
  it("statement becomes invoke on literal", () => {
    expect(testTransform("SayHello(43);", callStatementTransformer))
      .toMatchInlineSnapshot(`
      "ASL.Task({
          TypescriptInvoke: SayHello,
          Input: 43
      });"
    `);
  });
  it("statement becomes invoke on literal object expression", () => {
    expect(testTransform("SayHello({ number: 43 });", callStatementTransformer))
      .toMatchInlineSnapshot(`
      "ASL.Task({
          TypescriptInvoke: SayHello,
          Input: { number: 43 }
      });"
    `);
  });
  it("statement becomes invoke on bool literal", () => {
    expect(testTransform("SayHello(true);", callStatementTransformer))
      .toMatchInlineSnapshot(`
      "ASL.Task({
          TypescriptInvoke: SayHello,
          Input: true
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
