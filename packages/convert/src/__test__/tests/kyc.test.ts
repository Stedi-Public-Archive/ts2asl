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
                "StartAt": "Assign",
                "States": Object {
                  "Assign": Object {
                    "Comment": "source: performIdentifyCheck()",
                    "HeartbeatSeconds": undefined,
                    "Next": "Return",
                    "Resource": "[!lambda[performIdentifyCheck]arn]",
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
                  "Return": Object {
                    "Comment": undefined,
                    "End": true,
                    "InputPath": "$.vars.return_var",
                    "Type": "Pass",
                  },
                },
              },
              Object {
                "StartAt": "Return { agencyChecked: t ...",
                "States": Object {
                  "Return { agencyChecked: t ...": Object {
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
            "Comment": "source: Promise.all([ performIdentifyCheck(), Promise. ...",
            "Next": "PutEvents",
            "ResultPath": "$.vars.result",
            "Type": "Parallel",
          },
          "If (checksPassed)": Object {
            "Choices": Array [
              Object {
                "Next": "PutEvents_1",
                "Not": Object {
                  "BooleanEquals": false,
                  "Variable": "$.vars.checksPassed",
                },
              },
            ],
            "Comment": "source: if (checksPassed) { //no-op update risk profil ...",
            "Default": "PutEvents_2",
            "Type": "Choice",
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
          "PutEvents": Object {
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
            "ResultPath": null,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "PutEvents_1": Object {
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
            "ResultPath": null,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "PutEvents_2": Object {
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
            "ResultPath": null,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
        },
      }
    `);
  });
});
