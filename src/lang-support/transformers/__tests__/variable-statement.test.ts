import { testTransform } from "../../__tests__/test-transform";
import { variableStatementTransformer } from "../variable-statement";

describe("when converting variable statements", () => {
  it("then string literal gets converted to Pass state", () => {
    expect(
      testTransform("let abc = 'hello';", variableStatementTransformer)
    ).toMatchInlineSnapshot(`"let abc = ASL.Pass({ Result: 'hello' });"`);
  });
  it("then numeric literal gets converted to Pass state", () => {
    expect(
      testTransform("let abc  = 43;", variableStatementTransformer)
    ).toMatchInlineSnapshot(`"let abc = ASL.Pass({ Result: 43 });"`);
  });

  it("then object literal gets converted to Pass state", () => {
    expect(
      testTransform(
        "let abc = {number: 43; text: 'hello'};",
        variableStatementTransformer
      )
    ).toMatchInlineSnapshot(
      `"let abc = ASL.Pass({ Result: { number: 43, text: 'hello' } });"`
    );
  });
  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
