import { runConvertForTest } from "../utility";
describe("when converting kyc", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("kyc");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign checksPassed": Object {
            "Comment": "source: checksPassed = true",
            "Next": "If (checksPassed)",
            "Result": true,
            "ResultPath": "$.vars.checksPassed",
            "Type": "Pass",
          },
          "Assign result": Object {
            "Branches": Array [
              Object {
                "StartAt": "performIdentifyCheck()",
                "States": Object {
                  "Pass": Object {
                    "Comment": undefined,
                    "End": true,
                    "InputPath": "$.vars.return_var",
                    "Type": "Pass",
                  },
                  "performIdentifyCheck()": Object {
                    "Catch": undefined,
                    "Comment": "source: performIdentifyCheck()",
                    "HeartbeatSeconds": undefined,
                    "Next": "Pass",
                    "Resource": "lambda:performIdentifyCheck",
                    "ResultPath": "$.vars.return_var",
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
                    "TimeoutSeconds": undefined,
                    "Type": "Task",
                  },
                },
              },
              Object {
                "StartAt": "Pass_1",
                "States": Object {
                  "Pass_1": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": Object {
                      "agencyChecked": true,
                    },
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Catch": undefined,
            "Comment": undefined,
            "Next": "PutEvents",
            "ResultPath": "$.vars.result",
            "Retry": undefined,
            "Type": "Parallel",
          },
          "If (checksPassed)": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "PutEvents_1",
                "Variable": "$.vars.checksPassed",
              },
            ],
            "Comment": "source: if (checksPassed) { //no-op update risk profil ...",
            "Default": "PutEvents_2",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign result",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "PutEvents": Object {
            "Catch": undefined,
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Assign checksPassed",
            "Parameters": Object {
              "Entries": Array [
                Object {
                  "Detail.$": "States.JsonToString($.vars.result)",
                  "DetailType": "Identity check completed",
                  "EventBusName": "eventbusname",
                  "Source": "com.aws.kyc",
                },
              ],
            },
            "Resource": "arn:aws:states:::aws-sdk:eventbridge:putEvents",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "PutEvents_1": Object {
            "Catch": undefined,
            "Comment": undefined,
            "End": true,
            "HeartbeatSeconds": undefined,
            "Parameters": Object {
              "Entries": Array [
                Object {
                  "Detail.$": "States.JsonToString($.vars.result)",
                  "DetailType": "AccountApproved",
                  "EventBusName": "eventbusname",
                  "Source": "com.aws.kyc",
                },
              ],
            },
            "Resource": "arn:aws:states:::aws-sdk:eventbridge:putEvents",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "PutEvents_2": Object {
            "Catch": undefined,
            "Comment": undefined,
            "End": true,
            "HeartbeatSeconds": undefined,
            "Parameters": Object {
              "Entries": Array [
                Object {
                  "Detail.$": "States.JsonToString($.vars.result)",
                  "DetailType": "AccountDeclined",
                  "EventBusName": "eventbusname",
                  "Source": "com.aws.kyc",
                },
              ],
            },
            "Resource": "arn:aws:states:::aws-sdk:eventbridge:putEvents",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
        },
      }
    `);
  });
});