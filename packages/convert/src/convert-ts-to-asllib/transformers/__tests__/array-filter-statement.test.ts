import { testTransform } from "../../__tests__/test-transform";
import { arrayFilterTransformer } from "../array-filter-statement";

describe("when converting array filter statements", () => {
  it("statement becomes json path", () => {
    expect(
      testTransform(
        "const x = items.filter(x=>x.valid === true);",
        arrayFilterTransformer({})
      )
    ).toMatchInlineSnapshot(
      `"const x = asl.jsonPathFilter(items, (x) => x.valid === true);"`
    );
  });

  it("property access expression gets coerced to binary expression", () => {
    expect(
      testTransform(
        "const x = items.filter(x=>x.valid);",
        arrayFilterTransformer({})
      )
    ).toMatchInlineSnapshot(
      `"const x = asl.jsonPathFilter(items, (x) => x.valid);"`
    );
  });

  it("unary prefix expression gets coerced to binary expression", () => {
    expect(
      testTransform(
        "const x = items.filter(x=>!x.valid);",
        arrayFilterTransformer({})
      )
    ).toMatchInlineSnapshot(
      `"const x = asl.jsonPathFilter(items, (x) => !x.valid);"`
    );
  });

  it("double pipe prefix expression gets coerced to binary expression", () => {
    expect(
      testTransform(
        "const x = items.filter(x=>!!x.valid);",
        arrayFilterTransformer({})
      )
    ).toMatchInlineSnapshot(
      `"const x = asl.jsonPathFilter(items, (x) => !!x.valid);"`
    );
  });

  it("property access expression gets coerced to binary expression", () => {
    expect(
      testTransform(
        "const x = items.filter(x=>x.valid);",
        arrayFilterTransformer({})
      )
    ).toMatchInlineSnapshot(
      `"const x = asl.jsonPathFilter(items, (x) => x.valid);"`
    );
  });
});
