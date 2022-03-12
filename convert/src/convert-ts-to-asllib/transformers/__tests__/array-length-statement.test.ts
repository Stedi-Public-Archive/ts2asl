import { testTransform } from "../../__tests__/test-transform";
import { arrayLengthTransformer } from "../array-length-statement";

describe("when converting array length statements", () => {
  it("statement becomes json path", () => {
    expect(
      testTransform("const x = items.length;", arrayLengthTransformer({}))
    ).toMatchInlineSnapshot(`"const x = asl.jsonPathLength(items);"`);
  });
});
