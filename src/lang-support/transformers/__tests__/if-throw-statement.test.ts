import { testTransform } from "../../__tests__/test-transform";
import { ifStatementTransformer } from "../if-statement";
import { throwStatementTransformer } from "../throw-statement";

describe("when converting if with throw statements", () => {
  it("then both get converted", () => {
    expect(
      testTransform("if (optIn === false) throw new NotOptedInError('oops');", [
        ifStatementTransformer,
        throwStatementTransformer
      ])
    ).toMatchInlineSnapshot(`
      "ASL.Choice({
          Choices: [
              {
                  Variable: optIn,
                  StringEquals: false,
                  NextInvoke: () => { ASL.Fail({ Error: 'NotOptedInError', Cause: 'oops' }) }
              }
          ]
      });"
    `);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
