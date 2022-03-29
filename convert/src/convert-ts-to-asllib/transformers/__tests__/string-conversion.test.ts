import { testTransform } from "../../__tests__/test-transform";
import { ifStatementTransformer } from "../if-statement";
import { stringConversionTransformer } from "../string-conversion";
import { throwStatementTransformer } from "../throw-statement";

describe("when converting string to number", () => {
  it("then call gets transformed to stringToJson", () => {
    expect(
      testTransform("const x = asl.states.stringToNumber('42');", [
        stringConversionTransformer
      ])
    ).toMatchInlineSnapshot(`"const x = asl.states.stringToJson('42');"`);
  });
});

describe("when converting string to boolean", () => {
  it("then call gets transformed to stringToJson", () => {
    expect(
      testTransform("const x = asl.states.stringToBoolean('true');", [
        stringConversionTransformer
      ])
    ).toMatchInlineSnapshot(`"const x = asl.states.stringToJson('true');"`);
  });
});
