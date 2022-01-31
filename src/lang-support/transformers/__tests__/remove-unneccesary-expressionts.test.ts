import { testTransform } from "../../__tests__/test-transform";
import { callStatementTransformer } from "../call-statement";
import { removeUnnecessaryExpressionsTransformer } from "../remove-unneccesary-expressionts";

describe("when converting call statements", () => {
  it("statement becomes invoke", () => {
    expect(
      testTransform(
        `
    for (const item of ((scan.Items || []) as unknown as Item[])) {
      for (const threshold of thresholds) {
      }
    }
    `,
        removeUnnecessaryExpressionsTransformer
      )
    ).toMatchInlineSnapshot(`
      "for (const item of (scan.Items)) {
          for (const threshold of thresholds) {
          }
      }"
    `);
  });
});
