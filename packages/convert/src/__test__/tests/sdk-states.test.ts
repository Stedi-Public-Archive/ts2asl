import { runConvertForTest } from "../utility";
describe("when converting sdk-states", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("sdk-states");
  });
  it("then dynamoDBPutItemIfNotExists can be converted to asl", async () => {
    expect(converted.dynamoDBPutItemIfNotExists.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Empty Catch": Object {
            "End": true,
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "PutItem",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
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
              "ConditionExpression": "attribute_not_exists(pk)",
              "Item": Object {
                "number": Object {
                  "N": "42",
                },
                "pk": Object {
                  "S": "pk-value",
                },
                "sk": Object {
                  "S": "sk-value",
                },
                "string": Object {
                  "S": "value",
                },
              },
              "TableName": "[!parameter[assignmentsTableName]]",
            },
            "Resource": "arn:aws:states:::aws-sdk:dynamodb:putItem",
            "ResultPath": null,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
        },
      }
    `);
  });
  it("then countDynamoDBItems can be converted to asl", async () => {
    expect(converted.countDynamoDBItems.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Return result.Count",
            "Parameters": Object {
              "ExpressionAttributeNames": Object {
                "#pk": "gsi1pk",
              },
              "ExpressionAttributeValues": Object {
                ":val": Object {
                  "S": "test",
                },
              },
              "IndexName": "GSI1",
              "KeyConditionExpression": "#pk = :val",
              "Select": "COUNT",
              "TableName": "[!parameter[tableName]]",
            },
            "Resource": "arn:aws:states:::aws-sdk:dynamodb:query",
            "ResultPath": "$.vars.result",
            "TimeoutSeconds": undefined,
            "Type": "Task",
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
          "Return result.Count": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.result.Count",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then cloudWatchPutMetricData can be converted to asl", async () => {
    expect(converted.cloudWatchPutMetricData.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign value": Object {
            "Comment": "source: value = 42",
            "Next": "Publish Metric Data",
            "Result": 42,
            "ResultPath": "$.vars.value",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign value",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Publish Metric Data": Object {
            "Comment": undefined,
            "End": true,
            "HeartbeatSeconds": undefined,
            "Parameters": Object {
              "MetricData": Array [
                Object {
                  "MetricName": "ExampleMetric",
                  "Value.$": "$.vars.value",
                },
              ],
              "Namespace": "ExampleNamespace",
            },
            "Resource": "arn:aws:states:::aws-sdk:cloudwatch:putMetricData",
            "ResultPath": null,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
        },
      }
    `);
  });
});
