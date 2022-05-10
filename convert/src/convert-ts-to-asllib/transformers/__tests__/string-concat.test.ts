import { testTransform } from "../../__tests__/test-transform";
import { literalExpressionTransformer } from "../resolve-literal-expressions";

describe("when converting string concatenation", () => {
  it("then expression becomes format function", () => {
    expect(
      testTransform("const a = 'hello ' + you;", literalExpressionTransformer)
    ).toMatchInlineSnapshot(
      `"const a = asl.states.format(\\"hello {}\\", you);"`
    );
  });
  it("then expression becomes format function 2", () => {
    expect(
      testTransform(
        "const a = greeting + ' world!';",
        literalExpressionTransformer
      )
    ).toMatchInlineSnapshot(
      `"const a = asl.states.format(\\"{} world!\\", greeting);"`
    );
  });

  it("then expression becomes format function 3", () => {
    expect(
      testTransform(
        "const a = greeting + ` world!`;",
        literalExpressionTransformer
      )
    ).toMatchInlineSnapshot(
      `"const a = asl.states.format(\\"{} world!\\", greeting);"`
    );
  });

  it("then expression becomes format function 4", () => {
    expect(
      testTransform(
        "const a = context.something.greeting + ` world!`;",
        literalExpressionTransformer
      )
    ).toMatchInlineSnapshot(
      `"const a = asl.states.format(\\"{} world!\\", context.something.greeting);"`
    );
  });
});
