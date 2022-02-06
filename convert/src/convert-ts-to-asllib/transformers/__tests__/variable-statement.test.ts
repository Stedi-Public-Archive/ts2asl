import { testTransform } from "../../__tests__/test-transform";
import { variableStatementTransformer } from "../variable-statement";

describe("when converting variable statements", () => {
  it("then string literal gets converted to Pass state", () => {
    expect(testTransform("let abc = 'hello';", variableStatementTransformer))
      .toMatchInlineSnapshot(`
      "let abc = asl.pass({
          parameters: () => 'hello',
          comment: \\"abc = 'hello'\\"
      });"
    `);
  });
  it("then numeric literal gets converted to Pass state", () => {
    expect(testTransform("let abc  = 43;", variableStatementTransformer))
      .toMatchInlineSnapshot(`
      "let abc = asl.pass({
          parameters: () => 43,
          comment: \\"abc  = 43\\"
      });"
    `);
  });

  it("then object literal gets converted to Pass state", () => {
    expect(
      testTransform(
        "let abc = {number: 43; text: 'hello'};",
        variableStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "let abc = asl.pass({
          parameters: () => ({ number: 43, text: 'hello' }),
          comment: \\"abc = {number: 43; text: 'hello'}\\"
      });"
    `);
  });
  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
