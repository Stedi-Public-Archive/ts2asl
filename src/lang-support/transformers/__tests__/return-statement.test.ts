import { testTransform } from "../../__tests__/test-transform";
import { ifStatementTransformer } from "../if-statement";
import { returnStatementTransformer } from "../return-statement";

describe("when converting return statements", () => {
  it("then return statement will become ASL.Succeed", () => {
    expect(
      testTransform("return;", returnStatementTransformer)
    ).toMatchInlineSnapshot(`"ASL.Succeed();"`);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
