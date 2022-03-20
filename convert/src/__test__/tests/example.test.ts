import { runConvertForTest } from "../utility";
describe("when converting example", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("example");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign lastEvaluatedKey": Object {
            "Comment": "source: lastEvaluatedKey: any | undefined = undefined",
            "Next": "Do While (lastEvaluatedKey)",
            "Result": null,
            "ResultPath": "$.vars.lastEvaluatedKey",
            "Type": "Pass",
          },
          "Assign thresholds": Object {
            "Comment": "source: thresholds = [ { \\"metric\\": \\"mappings.requests\\" ...",
            "Next": "Assign lastEvaluatedKey",
            "Result": Array [
              Object {
                "ceiling": 100,
                "metric": "mappings.requests",
              },
              Object {
                "ceiling": 1000,
                "metric": "mappings.requests",
              },
            ],
            "ResultPath": "$.vars.thresholds",
            "Type": "Pass",
          },
          "Do While (lastEvaluatedKey)": Object {
            "Branches": Array [
              Object {
                "StartAt": "Scan",
                "States": Object {
                  "Assign lastEvaluatedKey_1": Object {
                    "Comment": undefined,
                    "InputPath": "$.vars.scan.LastEvaluatedKey",
                    "Next": "_WhileCondition",
                    "ResultPath": "$.vars.lastEvaluatedKey",
                    "Type": "Pass",
                  },
                  "For item Of scan.Items": Object {
                    "Comment": undefined,
                    "ItemsPath": "$.vars.scan.Items",
                    "Iterator": Object {
                      "StartAt": "For threshold Of thresholds",
                      "States": Object {
                        "For threshold Of thresholds": Object {
                          "Comment": undefined,
                          "End": true,
                          "ItemsPath": "$.vars.thresholds",
                          "Iterator": Object {
                            "StartAt": "Assign numericLastSentOnValue",
                            "States": Object {
                              "Assign numericLastSentOnValue": Object {
                                "Comment": "source: result of an expression cannot be placed in In ...",
                                "Next": "Assign numericLastSentOnValue_1",
                                "Parameters": Object {
                                  "value.$": "States.StringToJson($.vars.item.lastSentOnValue.N)",
                                },
                                "ResultPath": "$.lastResult",
                                "Type": "Pass",
                              },
                              "Assign numericLastSentOnValue_1": Object {
                                "Comment": undefined,
                                "InputPath": "$.lastResult.value",
                                "Next": "Assign numericTotal",
                                "ResultPath": "$.vars.numericLastSentOnValue",
                                "Type": "Pass",
                              },
                              "Assign numericTotal": Object {
                                "Comment": "source: result of an expression cannot be placed in In ...",
                                "Next": "Assign numericTotal_1",
                                "Parameters": Object {
                                  "value.$": "States.StringToJson($.vars.item.total.N)",
                                },
                                "ResultPath": "$.lastResult",
                                "Type": "Pass",
                              },
                              "Assign numericTotal_1": Object {
                                "Comment": undefined,
                                "InputPath": "$.lastResult.value",
                                "Next": "If ((item.sk.S === thresh ...",
                                "ResultPath": "$.vars.numericTotal",
                                "Type": "Pass",
                              },
                              "Empty Default Choice": Object {
                                "End": true,
                                "Type": "Pass",
                              },
                              "If ((item.sk.S === thresh ...": Object {
                                "Choices": Array [
                                  Object {
                                    "Next": "Then",
                                    "Or": Array [
                                      Object {
                                        "And": Array [
                                          Object {
                                            "And": Array [
                                              Object {
                                                "And": Array [
                                                  Object {
                                                    "StringEqualsPath": "$.vars.threshold.metric",
                                                    "Variable": "$.vars.item.sk.S",
                                                  },
                                                  Object {
                                                    "NumericLessThanEqualsPath": "$.vars.numericTotal",
                                                    "Variable": "$.vars.threshold.ceiling",
                                                  },
                                                ],
                                              },
                                              Object {
                                                "NumericGreaterThanPath": "$.vars.numericLastSentOnValue",
                                                "Variable": "$.vars.threshold.ceiling",
                                              },
                                            ],
                                          },
                                          Object {
                                            "Or": Array [
                                              Object {
                                                "IsPresent": false,
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "IsNull": true,
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "BooleanEquals": false,
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "StringEquals": "",
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "StringEquals": "false",
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "StringEquals": "0",
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "NumericEquals": 0,
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "StringEqualsPath": "$.vars.item.lastBeginDateValue.S",
                                                "Variable": "$.vars.item.beginDate.S",
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                      Object {
                                        "And": Array [
                                          Object {
                                            "And": Array [
                                              Object {
                                                "StringEqualsPath": "$.vars.threshold.metric",
                                                "Variable": "$.vars.item.sk.S",
                                              },
                                              Object {
                                                "NumericLessThanEqualsPath": "$.vars.numericTotal",
                                                "Variable": "$.vars.threshold.ceiling",
                                              },
                                            ],
                                          },
                                          Object {
                                            "Or": Array [
                                              Object {
                                                "IsPresent": false,
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "IsNull": true,
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "BooleanEquals": false,
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "StringEquals": "",
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "StringEquals": "false",
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "StringEquals": "0",
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "NumericEquals": 0,
                                                "Variable": "$.vars.item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "StringEqualsPath": "$.vars.item.lastBeginDateValue.S",
                                                "Variable": "$.vars.item.beginDate.S",
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                                "Comment": undefined,
                                "Default": "Empty Default Choice",
                                "Type": "Choice",
                              },
                              "Then": Object {
                                "Branches": Array [
                                  Object {
                                    "StartAt": "Assign detail",
                                    "States": Object {
                                      "Assign detail": Object {
                                        "Comment": "source: detail = { account_id: item.pk, threshold: thr ...",
                                        "Next": "PutEvents",
                                        "Parameters": Object {
                                          "account_id.$": "$.vars.item.pk",
                                          "threshold.$": "$.vars.threshold",
                                        },
                                        "ResultPath": "$.vars.detail",
                                        "Type": "Pass",
                                      },
                                      "PutEvents": Object {
                                        "Catch": undefined,
                                        "Comment": undefined,
                                        "HeartbeatSeconds": undefined,
                                        "Next": "UpdateItem",
                                        "Parameters": Object {
                                          "Entries": Array [
                                            Object {
                                              "Detail.$": "States.JsonToString($.vars.detail)",
                                              "DetailType": "xxx.detail.type",
                                              "EventBusName": "default",
                                              "Source": "zzz.my.source",
                                            },
                                          ],
                                        },
                                        "Resource": "arn:aws:states:::aws-sdk:eventbridge:putEvents",
                                        "Retry": undefined,
                                        "TimeoutSeconds": undefined,
                                        "Type": "Task",
                                      },
                                      "UpdateItem": Object {
                                        "Catch": undefined,
                                        "Comment": undefined,
                                        "End": true,
                                        "HeartbeatSeconds": undefined,
                                        "Parameters": Object {
                                          "ConditionExpression": "lastSentOnValue < :newLastSentOnValue OR lastBeginDateValue <> :newLastBeginDateValue",
                                          "ExpressionAttributeValues": Object {
                                            ":newLastBeginDateValue": Object {
                                              "S.$": "$.vars.item.beginDate.S",
                                            },
                                            ":newLastSentOnValue": Object {
                                              "N.$": "$.vars.item.total.N",
                                            },
                                          },
                                          "Key": Object {
                                            "pk.$": "$.vars.item.pk",
                                            "sk.$": "$.vars.item.sk",
                                          },
                                          "TableName": "MyStorage",
                                          "UpdateExpression": "SET lastSentOnValue = :newLastSentOnValue, lastBeginDateValue = :newLastBeginDateValue",
                                        },
                                        "Resource": "arn:aws:states:::aws-sdk:dynamodb:updateItem",
                                        "Retry": undefined,
                                        "TimeoutSeconds": undefined,
                                        "Type": "Task",
                                      },
                                    },
                                  },
                                ],
                                "End": true,
                                "Parameters": Object {
                                  "vars": Object {
                                    "item.$": "$.vars.item",
                                    "threshold.$": "$.vars.threshold",
                                  },
                                },
                                "ResultPath": "$.lastResult",
                                "Type": "Parallel",
                              },
                            },
                          },
                          "MaxConcurrency": undefined,
                          "Parameters": Object {
                            "vars": Object {
                              "item.$": "$.vars.item",
                              "threshold.$": "$$.Map.Item.Value",
                            },
                          },
                          "ResultPath": "$.tmp.lastResult",
                          "Type": "Map",
                        },
                      },
                    },
                    "MaxConcurrency": undefined,
                    "Next": "Assign lastEvaluatedKey_1",
                    "Parameters": Object {
                      "vars": Object {
                        "item.$": "$$.Map.Item.Value",
                        "thresholds.$": "$.vars.thresholds",
                      },
                    },
                    "ResultPath": "$.tmp.lastResult",
                    "Type": "Map",
                  },
                  "Scan": Object {
                    "Catch": undefined,
                    "Comment": undefined,
                    "HeartbeatSeconds": undefined,
                    "Next": "For item Of scan.Items",
                    "Parameters": Object {
                      "ExclusiveStartKey.$": "$.vars.lastEvaluatedKey",
                      "Limit": 1,
                      "TableName": "MyStorage",
                    },
                    "Resource": "arn:aws:states:::aws-sdk:dynamodb:scan",
                    "ResultPath": "$.vars.scan",
                    "Retry": undefined,
                    "TimeoutSeconds": undefined,
                    "Type": "Task",
                  },
                  "_WhileCondition": Object {
                    "Choices": Array [
                      Object {
                        "Next": "Scan",
                        "Not": Object {
                          "Or": Array [
                            Object {
                              "IsPresent": false,
                              "Variable": "$.vars.lastEvaluatedKey",
                            },
                            Object {
                              "IsNull": true,
                              "Variable": "$.vars.lastEvaluatedKey",
                            },
                            Object {
                              "BooleanEquals": false,
                              "Variable": "$.vars.lastEvaluatedKey",
                            },
                            Object {
                              "StringEquals": "",
                              "Variable": "$.vars.lastEvaluatedKey",
                            },
                            Object {
                              "StringEquals": "false",
                              "Variable": "$.vars.lastEvaluatedKey",
                            },
                            Object {
                              "StringEquals": "0",
                              "Variable": "$.vars.lastEvaluatedKey",
                            },
                            Object {
                              "NumericEquals": 0,
                              "Variable": "$.vars.lastEvaluatedKey",
                            },
                          ],
                        },
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
                "lastEvaluatedKey.$": "$.vars.lastEvaluatedKey",
                "thresholds.$": "$.vars.thresholds",
              },
            },
            "Type": "Parallel",
          },
          "Initialize": Object {
            "Next": "Assign thresholds",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
