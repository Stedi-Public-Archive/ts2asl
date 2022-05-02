import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";
import { ensureNamedPropertiesTransformer } from "../ensure-named-properties";
import { removeUnnecessaryExpressionsTransformer } from "../../convert-ts-to-asllib/transformers/remove-unneccesary-expressionts";

describe("when converting unnamed properties", () => {
  it("statement becomes invoke", () => {
    expect(
      testTransform(`
          const x = {a, b, c, d:e};
    `, ensureNamedPropertiesTransformer)
    ).toMatchInlineSnapshot(`"const x = { a: a, b: b, c: c, d: e };"`);
  });
});
