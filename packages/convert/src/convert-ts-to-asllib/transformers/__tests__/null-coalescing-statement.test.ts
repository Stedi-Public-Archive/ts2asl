import { testTransform } from "../../__tests__/test-transform";
import { nullCoalescingStatementTransformer } from "../null-coalescing-statement";

describe("when converting null coalescing expression", () => {
  it("then result is a conditional", () => {
    expect(
      testTransform(`const x = y ?? z`, nullCoalescingStatementTransformer({}))
    ).toMatchInlineSnapshot(`"const x = y ? y : z;"`);
  });

  it("then literals can be used in lhs", () => {
    expect(
      testTransform(
        `const x = false ?? z`,
        nullCoalescingStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`"const x = false ? false : z;"`);
  });

  it("then expressions can be nested in lhs", () => {
    expect(
      testTransform(
        `const x = false ?? false ?? false ?? z`,
        nullCoalescingStatementTransformer({})
      )
    ).toMatchInlineSnapshot(
      `"const x = ((false ? false : false) ? false ? false : false : false) ? (false ? false : false) ? false ? false : false : false : z;"`
    );
  });
});
