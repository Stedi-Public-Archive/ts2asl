import { testTransform } from "../../__tests__/test-transform";
import { callStatementTransformer } from "../call-statement";
import { ifStatementTransformer } from "../if-statement";
import { returnStatementTransformer } from "../return-statement";

describe("when converting return statements", () => {
  it("then return statement will become ASL.Succeed", () => {
    expect(
      testTransform("return;", returnStatementTransformer)
    ).toMatchInlineSnapshot(`"return;"`);
  });

  it("then return statement can return literal", () => {
    expect(
      testTransform("return 12;", returnStatementTransformer)
    ).toMatchInlineSnapshot(`"return 12;"`);
  });

  it("then return statement can return identifier", () => {
    expect(
      testTransform("return result;", returnStatementTransformer)
    ).toMatchInlineSnapshot(`"return result;"`);
  });

  it("then return statement can return property access expression", () => {
    expect(
      testTransform("return result.val;", returnStatementTransformer)
    ).toMatchInlineSnapshot(`"return result.val;"`);
  });

  it("then return statement can return call statement", () => {
    expect(
      testTransform("return xxx();", [
        returnStatementTransformer,
        callStatementTransformer
      ])
    ).toMatchInlineSnapshot(`
      "return asl.typescriptInvoke({
          name: \\"xxx()\\",
          target: xxx,
          comment: \\"xxx()\\"
      });"
    `);
  });
});
