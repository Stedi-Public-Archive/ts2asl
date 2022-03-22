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
          "Assign allAccountIds": Object {
            "Comment": "source: allAccountIds = []",
            "Next": "Map",
            "Result": Array [],
            "ResultPath": "$.vars.allAccountIds",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign allAccountIds",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Map": Object {
            "Comment": undefined,
            "End": true,
            "ItemsPath": "$.vars.allAccountIds",
            "Iterator": Object {
              "StartAt": "PutItem",
              "States": Object {
                "Empty": Object {
                  "Type": "Succeed",
                },
                "PutItem": Object {
                  "Catch": Array [
                    Object {
                      "ErrorEquals": Array [
                        "DynamoDb.ConditionalCheckFailedException",
                      ],
                      "Next": "Empty",
                    },
                  ],
                  "Comment": undefined,
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "Parameters": Object {
                    "ConditionExpression": "attribute_not_exists(:sk)",
                    "Item": Object {
                      "pk": Object {
                        "S": "assingments",
                      },
                      "sk": Object {
                        "S.$": "States.Format('acc#{}', $.vars.accountId)",
                      },
                      "status": Object {
                        "S": "available",
                      },
                    },
                    "TableName": "assignmentsTableName",
                  },
                  "Resource": "arn:aws:states:::aws-sdk:dynamodb:putItem",
                  "Retry": undefined,
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Parameters": Object {
              "vars": Object {
                "accountId.$": "$$.Map.Item.Value",
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
