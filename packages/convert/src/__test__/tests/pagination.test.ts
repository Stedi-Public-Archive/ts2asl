import { runConvertForTest } from "../utility";
describe("when converting pagination", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("pagination");
  });
  it("then listUsers can be converted to asl", async () => {
    expect(converted.listUsers.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Add AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID": Object {
            "Comment": undefined,
            "InputPath": "$$.Execution.Id",
            "Next": "doSomething(user)",
            "ResultPath": "$.tmp.result.AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID",
            "Type": "Pass",
          },
          "Assign marker": Object {
            "Comment": "source: marker: string | undefined",
            "InputPath": "$._undefined",
            "Next": "Assign response",
            "ResultPath": "$.vars.marker",
            "Type": "Pass",
          },
          "Assign marker_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.var",
            "Next": "Do While Condition",
            "ResultPath": "$.vars.marker",
            "Type": "Pass",
          },
          "Assign response": Object {
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Foreach Initialize",
            "Parameters": Object {
              "Marker.$": "$.vars.marker",
              "PathPrefix": "/path",
            },
            "Resource": "arn:aws:states:::aws-sdk:iam:listUsers",
            "ResultPath": "$.vars.response",
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Conditional False": Object {
            "InputPath": "$._undefined",
            "Next": "Assign marker_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.response.Marker",
            "Next": "Assign marker_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Create Copy": Object {
            "InputPath": "$.foreach.currentItem",
            "Next": "Add AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID",
            "ResultPath": "$.tmp.result",
            "Type": "Pass",
          },
          "Do While Condition": Object {
            "Choices": Array [
              Object {
                "Next": "Assign response",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars.marker",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.marker",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.vars.marker",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.vars.marker",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.vars.marker",
                    },
                  ],
                },
              },
            ],
            "Default": "Empty Default Choice",
            "Type": "Choice",
          },
          "Empty Default Choice": Object {
            "End": true,
            "ResultPath": null,
            "Type": "Pass",
          },
          "Eval Conditional": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True",
                "Not": Object {
                  "BooleanEquals": false,
                  "Variable": "$.vars.response.IsTruncated",
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False",
            "Type": "Choice",
          },
          "Foreach CheckDone": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "Create Copy",
                "Variable": "$.foreach.items[0]",
              },
            ],
            "Default": "Foreach Exit",
            "Type": "Choice",
          },
          "Foreach Exit": Object {
            "Next": "Eval Conditional",
            "Result": Object {},
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Initialize": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.vars.response.Users[0]",
              "items.$": "$.vars.response.Users",
            },
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Next": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.foreach.items[1]",
              "items.$": "$.foreach.items[1:]",
            },
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign marker",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "doSomething(user)": Object {
            "Comment": "source: doSomething(user)",
            "Next": "Foreach Next",
            "Parameters": Object {
              "Input.$": "$.tmp.result",
              "StateMachineArn": "[!state-machine[doSomething]arn]",
            },
            "Resource": "arn:aws:states:::states:startExecution",
            "ResultPath": null,
            "Retry": Array [
              Object {
                "BackoffRate": 2,
                "ErrorEquals": Array [
                  "Lambda.ServiceException",
                  "Lambda.AWSLambdaException",
                  "Lambda.SdkClientException",
                ],
                "IntervalSeconds": 2,
                "MaxAttempts": 6,
              },
            ],
            "Type": "Task",
          },
        },
      }
    `);
  });
  it("then doSomething can be converted to asl", async () => {
    expect(converted.doSomething.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Log (input)",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Log (input)": Object {
            "Comment": "source: console.log(input)",
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
