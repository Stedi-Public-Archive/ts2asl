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
        removeUnnecessaryExpressionsTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "for (const item of scan.Items) {
          for (const threshold of thresholds) {
          }
      }"
    `);
  });
});

describe("when converting promise.resolve", () => {
  it("statement is removed", () => {
    expect(
      testTransform(
        `
    const x = Promise.resolve(y);
    `,
        removeUnnecessaryExpressionsTransformer({})
      )
    ).toMatchInlineSnapshot(`"const x = y;"`);
  });
});

describe("when converting promise.resolve inside promise.all", () => {
  it("statement is removed", () => {
    expect(
      testTransform(
        `
        const result = await Promise.all([
          Promise.resolve({identityChecked: true, customerName: "name", customerAddress: "address"}),
          Promise.resolve({agencyChecked: true}),
        ])
        
        
    `,
        removeUnnecessaryExpressionsTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "const result = await Promise.all([
          { identityChecked: true, customerName: \\"name\\", customerAddress: \\"address\\" },
          { agencyChecked: true },
      ]);"
    `);
  });
});
