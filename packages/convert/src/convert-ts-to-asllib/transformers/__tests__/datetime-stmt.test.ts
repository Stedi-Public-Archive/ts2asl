import { testTransform } from "../../__tests__/test-transform";

describe("when evaluating new Date()", () => {
  it("then call gets replaced with jsonPath expression", () => {
    const code = `
      const dateTime = new Date().toISOString();
      `;
    const result = testTransform(code);
    expect(result).toMatchInlineSnapshot(`"const dateTime = asl.jsonPath(\\"$$.State.EnteredTime\\");"`);
  });
});
