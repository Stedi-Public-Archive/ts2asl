import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";
import { transformers } from "../../convert-ts-to-asllib/transformers";
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
    `,
      transformers
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize Vars",
        "States": Object {
          "Assign result": Object {
            "Comment": "result = 0",
            "Next": "While",
            "Result": 0,
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Initialize Vars": Object {
            "Next": "Assign result",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "While": Object {
            "Branches": Array [
              Object {
                "Parameters": Object {
                  "vars": Object {
                    "result.$": "$.vars.result",
                  },
                },
                "StartAt": "_WhileCondition",
                "States": Object {
                  "Assign result_1": Object {
                    "Catch": undefined,
                    "Comment": "isDone()",
                    "HeartbeatSeconds": undefined,
                    "Next": "_WhileExit",
                    "Resource": "arn:aws:lambda:us-east-1:123123123123:function:my-program-isDone",
                    "ResultPath": "$.vars.result",
                    "Retry": undefined,
                    "TimeoutSeconds": undefined,
                    "Type": "Task",
                  },
                  "Wait": Object {
                    "Comment": undefined,
                    "Next": "Assign result_1",
                    "Seconds": 2,
                    "Type": "Wait",
                  },
                  "_WhileCondition": Object {
                    "Choices": Array [
                      Object {
                        "Next": "Wait",
                        "NumericEquals": 0,
                        "Variable": "$.vars.result",
                      },
                    ],
                    "Default": "_WhileExit",
                    "Type": "Choice",
                  },
                  "_WhileExit": Object {
                    "Type": "Succeed",
                  },
                },
              },
            ],
            "Comment": undefined,
            "End": true,
            "Type": "Parallel",
          },
        },
      }
    `);
  });
});
