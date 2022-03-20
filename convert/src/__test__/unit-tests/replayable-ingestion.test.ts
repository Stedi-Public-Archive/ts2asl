import { runConvertForTest } from "../utility";
describe("when converting replayable-ingestion", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("replayable-ingestion");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "replayPrefixer(input)",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Map": Object {
            "Comment": undefined,
            "End": true,
            "ItemsPath": "$.vars.result",
            "Iterator": Object {
              "StartAt": "Assign Sfn_input",
              "States": Object {
                "Assign Sfn_input": Object {
                  "Comment": undefined,
                  "Next": "replayWorker({ prefix })",
                  "Parameters": Object {
                    "AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID.$": "$$.Execution.Id",
                    "prefix.$": "$.vars.prefix",
                  },
                  "ResultPath": "$.tmp.sfn_input",
                  "Type": "Pass",
                },
                "replayWorker({ prefix })": Object {
                  "Catch": undefined,
                  "Comment": "source: replayWorker({ prefix })",
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "Parameters": Object {
                    "Input.$": "States.JsonToString($.tmp.sfn_input)",
                    "StateMachineArn": "statemachine:replayWorker",
                  },
                  "Resource": "arn:aws:states:::aws-sdk:sfn:startExecution",
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
            "MaxConcurrency": 5,
            "ResultPath": "$.tmp.lastResult",
            "Type": "Map",
          },
          "replayPrefixer(input)": Object {
            "Catch": undefined,
            "Comment": "source: replayPrefixer(input)",
            "HeartbeatSeconds": undefined,
            "InputPath": "$.vars",
            "Next": "Map",
            "Resource": "lambda:replayPrefixer",
            "ResultPath": "$.vars.result",
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
      }
    `);
  });
  it("then replayWorker can be converted to asl", async () => {
    expect(converted.replayWorker.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign itemsWithKeys": Object {
            "Comment": undefined,
            "InputPath": "$.vars.objects.Contents[?(@.Key)]",
            "Next": "Assign keys",
            "ResultPath": "$.vars.itemsWithKeys",
            "Type": "Pass",
          },
          "Assign keys": Object {
            "Comment": undefined,
            "InputPath": "$.vars.itemsWithKeys..Key",
            "Next": "Map",
            "ResultPath": "$.vars.keys",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "ListObjectsV2",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "ListObjectsV2": Object {
            "Catch": undefined,
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Assign itemsWithKeys",
            "Parameters": Object {
              "Bucket": "preprod-metrics-bucket-us-east-1",
              "Prefix.$": "$.vars.prefix",
            },
            "Resource": "arn:aws:states:::aws-sdk:s3:listObjectsV2",
            "ResultPath": "$.vars.objects",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Map": Object {
            "Comment": undefined,
            "End": true,
            "ItemsPath": "$.vars.keys",
            "Iterator": Object {
              "StartAt": "Assign message",
              "States": Object {
                "Assign message": Object {
                  "Comment": "source: message = { Records: [ { replay: true, eventSo ...",
                  "Next": "Publish",
                  "Parameters": Object {
                    "Records": Array [
                      Object {
                        "awsRegion": "us-east-1",
                        "eventName": "ObjectCreated:Put",
                        "eventSource": "aws:s3",
                        "replay": true,
                        "s3": Object {
                          "bucket": Object {
                            "arn": "arn:aws:s3:::preprod-metrics-bucket-us-east-1",
                            "name": "preprod-metrics-bucket-us-east-1",
                          },
                          "object": Object {
                            "key.$": "$.vars.key",
                          },
                          "s3SchemaVersion": "1.0",
                        },
                      },
                    ],
                  },
                  "ResultPath": "$.vars.message",
                  "Type": "Pass",
                },
                "Publish": Object {
                  "Catch": undefined,
                  "Comment": undefined,
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "Parameters": Object {
                    "Message.$": "States.JsonToString($.vars.message)",
                    "Subject": "Ingestion Replay S3",
                    "TopicArn": "arn:aws:sns:us-east-1:400780617693:CentralizedMetricsStream-preprod-CentralizedMetricsStreamTopic48052E47-1X7SNV6Y357H6",
                  },
                  "Resource": "arn:aws:states:::aws-sdk:sns:publish",
                  "Retry": undefined,
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": 5,
            "Parameters": Object {
              "vars": Object {
                "key.$": "$$.Map.Item.Value",
              },
            },
            "ResultPath": "$.tmp.lastResult",
            "Type": "Map",
          },
        },
      }
    `);
  });
});
