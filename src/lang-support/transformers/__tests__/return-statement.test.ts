import { testTransform } from "../../__tests__/test-transform";
import { callStatementTransformer } from "../call-statement";
import { ifStatementTransformer } from "../if-statement";
import { returnStatementTransformer } from "../return-statement";

describe("when converting return statements", () => {
  it("then return statement will become ASL.Succeed", () => {
    expect(testTransform("return;", returnStatementTransformer))
      .toMatchInlineSnapshot(`
      "asl.succeed({
          comment: \\"return;\\"
      })"
    `);
  });

  it("then return statement can return literal", () => {
    expect(testTransform("return 12;", returnStatementTransformer))
      .toMatchInlineSnapshot(`
      "asl.succeed({
          result: () => 12,
          comment: \\"return 12;\\"
      })"
    `);
  });

  it("then return statement can return identifier", () => {
    expect(testTransform("return result;", returnStatementTransformer))
      .toMatchInlineSnapshot(`
      "asl.succeed({
          result: () => result,
          comment: \\"return result;\\"
      })"
    `);
  });

  it("then return statement can return property access expression", () => {
    expect(testTransform("return result.val;", returnStatementTransformer))
      .toMatchInlineSnapshot(`
      "asl.succeed({
          result: () => result.val,
          comment: \\"return result.val;\\"
      })"
    `);
  });

  it("then return statement can return call statement", () => {
    expect(
      testTransform("return xxx();", [
        returnStatementTransformer,
        callStatementTransformer
      ])
    ).toMatchInlineSnapshot(`
      "asl.succeed({
          result: () => asl.typescriptInvoke({
              target: xxx,
              comment: \\"xxx()\\"
          }),
          comment: \\"return xxx();\\"
      })"
    `);
  });
});
