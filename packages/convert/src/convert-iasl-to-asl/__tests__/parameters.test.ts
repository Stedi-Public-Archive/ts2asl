import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";

describe("when converting input parameter reference to asl", () => {
  it("then input parameter is identifier", () => {
    const code = `
    asl.pass({parameters: input})`;
    const iasl = testConvertToIntermediaryAst(code, "input");
    const result = convert(iasl, { skipVersionComment: true });
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Pass",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars",
            "ResultPath": null,
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
