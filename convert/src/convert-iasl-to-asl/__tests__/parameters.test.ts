import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";

describe("when converting input parameter reference to asl", () => {
  it("then input parameter is identifier", () => {
    const code = `
    asl.pass({parameters: input})`;
    const iasl = testConvertToIntermediaryAst(code, "input");
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.28.",
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
            "ResultPath": "$.tmp.lastResult",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
