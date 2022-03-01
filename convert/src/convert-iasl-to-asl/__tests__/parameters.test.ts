import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";
import { transformers } from "../../convert-ts-to-asllib/transformers";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";

describe("when converting input parameter reference to asl", () => {
  it("then input parameter is identifier", () => {
    const code = `
    asl.pass({parameters: input})`;
    const iasl = testConvertToIntermediaryAst(code, "input");
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Pass",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
