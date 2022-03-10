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
        "StartAt": "Initialize",
        "States": Object {
          "2: Assign result": Object {
            "Comment": "source: result = 0",
            "Next": "3: While (result === 0)",
            "Result": 0,
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "3: While (result === 0)": Object {
            "Branches": Array [
              Object {
                "StartAt": "_WhileCondition",
                "States": Object {
                  "6: isDone()": Object {
                    "Catch": Array [],
                    "Comment": "source: isDone()",
                    "HeartbeatSeconds": undefined,
                    "Next": "_WhileExit",
                    "Resource": "typescript:isDone",
                    "ResultPath": "$.vars.result",
                    "Retry": Array [],
                    "TimeoutSeconds": undefined,
                    "Type": "Task",
                  },
                  "Wait": Object {
                    "Comment": undefined,
                    "Next": "6: isDone()",
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
            "Parameters": Object {
              "vars": Object {
                "result.$": "$.vars.result",
              },
            },
            "Type": "Parallel",
          },
          "Initialize": Object {
            "Next": "2: Assign result",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
