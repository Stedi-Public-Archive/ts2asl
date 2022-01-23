import { testTransform } from "../../__tests__/test-transform";
import { callStatementTransformer } from "../call-statement";
import { ifStatementTransformer } from "../if-statement";
import { returnStatementTransformer } from "../return-statement";

describe("when converting return statements", () => {
  it("then return statement will become ASL.Succeed", () => {
    expect(
      testTransform("return;", returnStatementTransformer)
    ).toMatchInlineSnapshot(`"ASL.Succeed();"`);
  });

  it("then return statement can return literal", () => {
    expect(testTransform("return 12;", returnStatementTransformer))
      .toMatchInlineSnapshot(`
      "ASL.Multiple([
          ASL.Pass({ Result: 12, ResultPath: \\"$\\" }),
          ASL.Succeed({})
      ]);"
    `);
  });

  it("then return statement can return identifier", () => {
    expect(testTransform("return result;", returnStatementTransformer))
      .toMatchInlineSnapshot(`
      "ASL.Multiple([
          ASL.Pass({ Result: result, ResultPath: \\"$\\" }),
          ASL.Succeed({})
      ]);"
    `);
  });

  it("then return statement can return property access expression", () => {
    expect(testTransform("return result.val;", returnStatementTransformer))
      .toMatchInlineSnapshot(`
      "ASL.Multiple([
          ASL.Pass({ Result: result.val, ResultPath: \\"$\\" }),
          ASL.Succeed({})
      ]);"
    `);
  });

  it("then return statement can return call statement", () => {
    expect(
      testTransform("return xxx();", [
        returnStatementTransformer,
        callStatementTransformer
      ])
    ).toMatchInlineSnapshot(`
      "ASL.Multiple([
          ASL.Pass({ Result: ASL.Task({
                  TypescriptInvoke: xxx
              }), ResultPath: \\"$\\" }),
          ASL.Succeed({})
      ]);"
    `);
  });
});
