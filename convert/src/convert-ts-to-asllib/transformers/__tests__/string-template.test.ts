import { testTransform } from "../../__tests__/test-transform";
import { deployTimeStatementTransformer } from "../deploy-time-replacements";
import { literalExpressionTransformer } from "../resolve-literal-expressions";
import { stringTemplateTransformer } from "../string-template";

describe("when converting string templates", () => {
  it("then string template without expressions can be resolved", () => {
    expect(
      testTransform("const a = `val`;", stringTemplateTransformer)
    ).toMatchInlineSnapshot(`"const a = \\"val\\";"`);
  });

  it("then contained expressions will be resolved", () => {
    expect(
      testTransform("const a = `1+1 = ${1+1}`;", [
        stringTemplateTransformer,
        literalExpressionTransformer
      ])
    ).toMatchInlineSnapshot(
      `"const a = asl.states.format(\\"1+1 = {}\\", 2);"`
    );
  });

  it("then contained deploy expression will be resolved", () => {
    expect(
      testTransform("const a = `hello ${asl.deploy.getParameter('world')}!`;", [
        stringTemplateTransformer,
        literalExpressionTransformer,
        deployTimeStatementTransformer
      ])
    ).toMatchInlineSnapshot(
      `"const a = asl.states.format(\\"hello {}!\\", \\"[!parameter[world]]\\");"`
    );
  });
});
