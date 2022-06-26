import { runConvertForTest } from "../utility";
describe("when converting map", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("map");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign entries": Object {
            "Comment": "source: getEntries()",
            "HeartbeatSeconds": undefined,
            "Next": "Map",
            "Resource": "[!lambda[getEntries]arn]",
            "ResultPath": "$.vars.entries",
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
          "Initialize": Object {
            "Next": "Assign entries",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Map": Object {
            "Comment": undefined,
            "End": true,
            "ItemsPath": "$.vars.entries",
            "Iterator": Object {
              "StartAt": "PutItem",
              "States": Object {
                "Empty Catch": Object {
                  "End": true,
                  "Type": "Pass",
                },
                "PutItem": Object {
                  "Catch": Array [
                    Object {
                      "ErrorEquals": Array [
                        "DynamoDb.ConditionalCheckFailedException",
                      ],
                      "Next": "Empty Catch",
                      "ResultPath": null,
                    },
                  ],
                  "Comment": undefined,
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "Parameters": Object {
                    "ConditionExpression": "attribute_not_exists(:sk)",
                    "Item": Object {
                      "pk": Object {
                        "S": "pk",
                      },
                      "sk": Object {
                        "S.$": "States.Format('sk#{}', $.vars.entry)",
                      },
                      "status": Object {
                        "S": "available",
                      },
                    },
                    "TableName": "[!parameter[tableName]]",
                  },
                  "Resource": "arn:aws:states:::aws-sdk:dynamodb:putItem",
                  "ResultPath": null,
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Parameters": Object {
              "vars": Object {
                "entry.$": "$$.Map.Item.Value",
              },
            },
            "ResultPath": null,
            "Type": "Map",
          },
        },
      }
    `);
  });
});
