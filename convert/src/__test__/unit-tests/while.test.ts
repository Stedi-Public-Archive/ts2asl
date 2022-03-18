import { runConvertForTest } from "../utility";
describe("when converting while", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("while");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Task",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Task": Object {
            "Catch": undefined,
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "While (true)",
            "Parameters": Object {},
            "Resource": "check-password",
            "ResultPath": "$.vars.result",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "While (true)": Object {
            "Branches": Array [
              Object {
                "StartAt": "_WhileCondition",
                "States": Object {
                  "Break": Object {
                    "Comment": undefined,
                    "Next": "Wait",
                    "Type": "Succeed",
                  },
                  "If (result.Authorized)": Object {
                    "Choices": Array [
                      Object {
                        "IsPresent": true,
                        "Next": "Break",
                        "Variable": "$.vars.result.Authorized",
                      },
                    ],
                    "Comment": "source: if (result.Authorized) { break; }",
                    "Default": "Wait",
                    "Type": "Choice",
                  },
                  "Task_1": Object {
                    "Catch": undefined,
                    "Comment": undefined,
                    "HeartbeatSeconds": undefined,
                    "Next": "_WhileExit",
                    "Parameters": Object {},
                    "Resource": "check-password",
                    "ResultPath": "$.vars.result",
                    "Retry": undefined,
                    "TimeoutSeconds": undefined,
                    "Type": "Task",
                  },
                  "Wait": Object {
                    "Comment": undefined,
                    "Next": "Task_1",
                    "Seconds": 1,
                    "Type": "Wait",
                  },
                  "_WhileCondition": Object {
                    "Choices": Array [
                      Object {
                        "IsNull": false,
                        "Next": "If (result.Authorized)",
                        "Variable": "$",
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
        },
      }
    `);
  });
});
