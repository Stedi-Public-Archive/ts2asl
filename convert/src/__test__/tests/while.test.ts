import { runConvertForTest } from "../utility";
describe("when converting while", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("while");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Break": Object {
            "Comment": undefined,
            "Next": "_WhileExit",
            "ResultPath": null,
            "Type": "Pass",
          },
          "If (result.Authorized)": Object {
            "Choices": Array [
              Object {
                "Next": "Break",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars.result.Authorized",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.result.Authorized",
                    },
                    Object {
                      "BooleanEquals": false,
                      "Variable": "$.vars.result.Authorized",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.vars.result.Authorized",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.vars.result.Authorized",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.vars.result.Authorized",
                    },
                    Object {
                      "NumericEquals": 0,
                      "Variable": "$.vars.result.Authorized",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (result.Authorized) { break; }",
            "Default": "Wait",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Task",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Task": Object {
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "_WhileCondition",
            "Parameters": Object {},
            "Resource": "check-password",
            "ResultPath": "$.vars.result",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Task_1": Object {
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "_WhileCondition",
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
            "End": true,
            "ResultPath": null,
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
