import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";
import { createTransformers } from "../../convert-ts-to-asllib/transformers";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";

describe("when transpiling simple statements", () => {
  it("then assignment ends up in result path", () => {
    const transformed = testTransform(
      `
    let result = 0;
    while(result === 0) {
      asl.wait({seconds : 2});
      result = isDone();
    }
    `
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl, { skipVersionComment: true });
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": "source: result = 0",
            "Next": "While Condition",
            "Result": 0,
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": "source: isDone()",
            "HeartbeatSeconds": undefined,
            "Next": "While Condition",
            "Resource": "[!lambda[isDone]arn]",
            "ResultPath": "$.vars.result",
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Initialize": Object {
            "Next": "Assign result",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Wait": Object {
            "Comment": undefined,
            "Next": "Assign result_1",
            "Seconds": 2,
            "Type": "Wait",
          },
          "While Condition": Object {
            "Choices": Array [
              Object {
                "Next": "Wait",
                "NumericEquals": 0,
                "Variable": "$.vars.result",
              },
            ],
            "Default": "While Exit",
            "Type": "Choice",
          },
          "While Exit": Object {
            "End": true,
            "ResultPath": null,
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
