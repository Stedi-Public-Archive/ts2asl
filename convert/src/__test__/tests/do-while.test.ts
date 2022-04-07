import { runConvertForTest } from "../utility";
describe("when converting do-while", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("do-while");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Empty Default Choice": Object {
            "End": true,
            "ResultPath": null,
            "Type": "Pass",
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
            "Next": "Wait",
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
            "Next": "_DoWhileCondition",
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
          "_DoWhileCondition": Object {
            "Choices": Array [
              Object {
                "Next": "Wait",
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
            ],
            "Default": "Empty Default Choice",
            "Type": "Choice",
          },
        },
      }
    `);
  });
});
