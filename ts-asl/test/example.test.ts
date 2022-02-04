import { Converter } from "../src";

describe("when converting example (native)", () => {
  let converted;

  beforeAll(() => {
    const converter = Converter.FromFile("test/resources/example.ts");
    converted = converter.convert();
  });

  it("then can be converted to iasl", async () => {
    expect(converted.iasl).toMatchInlineSnapshot(`
      Array [
        Object {
          "_syntaxKind": "variable-assignment",
          "expression": Object {
            "_syntaxKind": "asl-pass-state",
            "comment": "thresholds = [
          {
            \\"metric\\": \\"mappings.requests\\",
            \\"ceiling\\": 100
          },
          {
            \\"metric\\": \\"mappings.requests\\",
            \\"ceiling\\": 1000
          }
        ]",
            "parameters": Object {
              "_syntaxKind": "literal-array",
              "elements": Array [
                Object {
                  "_syntaxKind": "literal-object",
                  "properties": Object {
                    "ceiling": Object {
                      "_syntaxKind": "literal",
                      "type": "numeric",
                      "value": 100,
                    },
                    "metric": Object {
                      "_syntaxKind": "literal",
                      "type": "string",
                      "value": "mappings.requests",
                    },
                  },
                },
                Object {
                  "_syntaxKind": "literal-object",
                  "properties": Object {
                    "ceiling": Object {
                      "_syntaxKind": "literal",
                      "type": "numeric",
                      "value": 1000,
                    },
                    "metric": Object {
                      "_syntaxKind": "literal",
                      "type": "string",
                      "value": "mappings.requests",
                    },
                  },
                },
              ],
            },
          },
          "name": Object {
            "_syntaxKind": "identifier",
            "identifier": "thresholds",
            "type": "object",
          },
        },
        Object {
          "_syntaxKind": "variable-assignment",
          "expression": Object {
            "_syntaxKind": "asl-pass-state",
            "comment": "lastEvaluatedKey: any | undefined = undefined",
            "parameters": Object {
              "_syntaxKind": "literal",
              "type": "null",
              "value": null,
            },
          },
          "name": Object {
            "_syntaxKind": "identifier",
            "identifier": "lastEvaluatedKey",
            "type": "unknown",
          },
        },
        Object {
          "_syntaxKind": "do-while",
          "condition": Object {
            "operator": "is-present",
            "rhs": Object {
              "_syntaxKind": "identifier",
              "identifier": "lastEvaluatedKey",
              "type": "unknown",
            },
          },
          "while": Object {
            "statements": Array [
              Object {
                "_syntaxKind": "variable-assignment",
                "expression": Object {
                  "_syntaxKind": "asl-task-state",
                  "comment": undefined,
                  "parameters": Object {
                    "_syntaxKind": "literal-object",
                    "properties": Object {
                      "ExclusiveStartKey": Object {
                        "_syntaxKind": "identifier",
                        "identifier": "lastEvaluatedKey",
                        "type": "unknown",
                      },
                      "Limit": Object {
                        "_syntaxKind": "literal",
                        "type": "numeric",
                        "value": 1,
                      },
                      "TableName": Object {
                        "_syntaxKind": "literal",
                        "type": "string",
                        "value": "MyStorage",
                      },
                    },
                  },
                  "resource": "arn:aws:states:::aws-sdk:dynamodb:scan",
                },
                "name": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "scan",
                  "type": "unknown",
                },
              },
              Object {
                "_syntaxKind": "asl-map-state",
                "catch": Array [],
                "items": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "scan.Items",
                },
                "iterator": Object {
                  "statements": Array [
                    Object {
                      "_syntaxKind": "asl-map-state",
                      "catch": Array [],
                      "items": Object {
                        "_syntaxKind": "identifier",
                        "identifier": "thresholds",
                        "type": "object",
                      },
                      "iterator": Object {
                        "statements": Array [
                          Object {
                            "_syntaxKind": "variable-assignment",
                            "expression": Object {
                              "_syntaxKind": "asl-pass-state",
                              "comment": "numericLastSentOnValue = asl.states.stringToJson(item.lastSentOnValue.N) as number",
                              "parameters": Object {
                                "_syntaxKind": "asl-intrinsic-function",
                                "arguments": Array [
                                  Object {
                                    "_syntaxKind": "identifier",
                                    "identifier": "item.lastSentOnValue.N",
                                  },
                                ],
                                "function": "asl.states.stringToJson",
                              },
                            },
                            "name": Object {
                              "_syntaxKind": "identifier",
                              "identifier": "numericLastSentOnValue",
                              "type": "numeric",
                            },
                          },
                          Object {
                            "_syntaxKind": "variable-assignment",
                            "expression": Object {
                              "_syntaxKind": "asl-pass-state",
                              "comment": "numericTotal = asl.states.stringToJson(item.total.N) as number",
                              "parameters": Object {
                                "_syntaxKind": "asl-intrinsic-function",
                                "arguments": Array [
                                  Object {
                                    "_syntaxKind": "identifier",
                                    "identifier": "item.total.N",
                                  },
                                ],
                                "function": "asl.states.stringToJson",
                              },
                            },
                            "name": Object {
                              "_syntaxKind": "identifier",
                              "identifier": "numericTotal",
                              "type": "numeric",
                            },
                          },
                          Object {
                            "_syntaxKind": "if",
                            "comment": "if ((item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))
                || (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))) {

                await asl.nativeEventBridgePutEvents({
                  Entries: [
                    {
                      Detail: asl.states.jsonToString({
                        account_id: item.pk,
                        threshold: threshold
                      }),
                      DetailType: \\"xxx.detail.type\\",
                      EventBusName: \\"default\\",
                      Source: \\"zzz.my.source\\"
                    }
                  ]
                });
                await asl.nativeDynamoDBUpdateItem({
                  TableName: \\"MyStorage\\",
                  Key: {
                    pk: item.pk,
                    sk: item.sk
                  },
                  ConditionExpression: \\"lastSentOnValue < :newLastSentOnValue OR lastBeginDateValue <> :newLastBeginDateValue\\",
                  UpdateExpression: \\"SET lastSentOnValue = :newLastSentOnValue, lastBeginDateValue = :newLastBeginDateValue\\",
                  ExpressionAttributeValues: {
                    \\":newLastSentOnValue\\": {
                      N: item.total.N as any
                    },
                    \\":newLastBeginDateValue\\": {
                      S: item.beginDate.S
                    }
                  }
                });
              }",
                            "condition": Object {
                              "_syntaxKind": "binary-expression",
                              "lhs": Object {
                                "_syntaxKind": "binary-expression",
                                "lhs": Object {
                                  "_syntaxKind": "binary-expression",
                                  "lhs": Object {
                                    "_syntaxKind": "binary-expression",
                                    "lhs": Object {
                                      "_syntaxKind": "binary-expression",
                                      "lhs": Object {
                                        "_syntaxKind": "identifier",
                                        "identifier": "item.sk.S",
                                      },
                                      "operator": "eq",
                                      "rhs": Object {
                                        "_syntaxKind": "identifier",
                                        "identifier": "threshold.metric",
                                      },
                                    },
                                    "operator": "and",
                                    "rhs": Object {
                                      "_syntaxKind": "binary-expression",
                                      "lhs": Object {
                                        "_syntaxKind": "identifier",
                                        "identifier": "threshold.ceiling",
                                      },
                                      "operator": "lte",
                                      "rhs": Object {
                                        "_syntaxKind": "identifier",
                                        "identifier": "numericTotal",
                                        "type": "numeric",
                                      },
                                    },
                                  },
                                  "operator": "and",
                                  "rhs": Object {
                                    "_syntaxKind": "binary-expression",
                                    "lhs": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "threshold.ceiling",
                                    },
                                    "operator": "gt",
                                    "rhs": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "numericLastSentOnValue",
                                      "type": "numeric",
                                    },
                                  },
                                },
                                "operator": "and",
                                "rhs": Object {
                                  "_syntaxKind": "binary-expression",
                                  "lhs": Object {
                                    "_syntaxKind": "binary-expression",
                                    "operator": "not",
                                    "rhs": Object {
                                      "_syntaxKind": "binary-expression",
                                      "operator": "is-present",
                                      "rhs": Object {
                                        "_syntaxKind": "identifier",
                                        "identifier": "item.lastBeginDateValue.S",
                                      },
                                    },
                                  },
                                  "operator": "or",
                                  "rhs": Object {
                                    "_syntaxKind": "binary-expression",
                                    "lhs": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "item.beginDate.S",
                                    },
                                    "operator": "eq",
                                    "rhs": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "item.lastBeginDateValue.S",
                                    },
                                  },
                                },
                              },
                              "operator": "or",
                              "rhs": Object {
                                "_syntaxKind": "binary-expression",
                                "lhs": Object {
                                  "_syntaxKind": "binary-expression",
                                  "lhs": Object {
                                    "_syntaxKind": "binary-expression",
                                    "lhs": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "item.sk.S",
                                    },
                                    "operator": "eq",
                                    "rhs": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "threshold.metric",
                                    },
                                  },
                                  "operator": "and",
                                  "rhs": Object {
                                    "_syntaxKind": "binary-expression",
                                    "lhs": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "threshold.ceiling",
                                    },
                                    "operator": "lte",
                                    "rhs": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "numericTotal",
                                      "type": "numeric",
                                    },
                                  },
                                },
                                "operator": "and",
                                "rhs": Object {
                                  "_syntaxKind": "binary-expression",
                                  "lhs": Object {
                                    "_syntaxKind": "binary-expression",
                                    "operator": "not",
                                    "rhs": Object {
                                      "_syntaxKind": "binary-expression",
                                      "operator": "is-present",
                                      "rhs": Object {
                                        "_syntaxKind": "identifier",
                                        "identifier": "item.lastBeginDateValue.S",
                                      },
                                    },
                                  },
                                  "operator": "or",
                                  "rhs": Object {
                                    "_syntaxKind": "binary-expression",
                                    "lhs": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "item.beginDate.S",
                                    },
                                    "operator": "eq",
                                    "rhs": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "item.lastBeginDateValue.S",
                                    },
                                  },
                                },
                              },
                            },
                            "then": Object {
                              "statements": Array [
                                Object {
                                  "_syntaxKind": "asl-task-state",
                                  "parameters": Object {
                                    "_syntaxKind": "literal-object",
                                    "properties": Object {
                                      "Entries": Object {
                                        "_syntaxKind": "literal-array",
                                        "elements": Array [
                                          Object {
                                            "_syntaxKind": "literal-object",
                                            "properties": Object {
                                              "Detail": Object {
                                                "_syntaxKind": "asl-intrinsic-function",
                                                "arguments": Array [
                                                  Object {
                                                    "_syntaxKind": "literal-object",
                                                    "properties": Object {
                                                      "account_id": Object {
                                                        "_syntaxKind": "identifier",
                                                        "identifier": "item.pk",
                                                      },
                                                      "threshold": Object {
                                                        "_syntaxKind": "identifier",
                                                        "identifier": "threshold",
                                                        "type": "unknown",
                                                      },
                                                    },
                                                  },
                                                ],
                                                "function": "asl.states.jsonToString",
                                              },
                                              "DetailType": Object {
                                                "_syntaxKind": "literal",
                                                "type": "string",
                                                "value": "xxx.detail.type",
                                              },
                                              "EventBusName": Object {
                                                "_syntaxKind": "literal",
                                                "type": "string",
                                                "value": "default",
                                              },
                                              "Source": Object {
                                                "_syntaxKind": "literal",
                                                "type": "string",
                                                "value": "zzz.my.source",
                                              },
                                            },
                                          },
                                        ],
                                      },
                                    },
                                  },
                                  "resource": "arn:aws:states:::aws-sdk:eventbridge:putEvents",
                                },
                                Object {
                                  "_syntaxKind": "asl-task-state",
                                  "parameters": Object {
                                    "_syntaxKind": "literal-object",
                                    "properties": Object {
                                      "ConditionExpression": Object {
                                        "_syntaxKind": "literal",
                                        "type": "string",
                                        "value": "lastSentOnValue < :newLastSentOnValue OR lastBeginDateValue <> :newLastBeginDateValue",
                                      },
                                      "ExpressionAttributeValues": Object {
                                        "_syntaxKind": "literal-object",
                                        "properties": Object {
                                          ":newLastBeginDateValue": Object {
                                            "_syntaxKind": "literal-object",
                                            "properties": Object {
                                              "S": Object {
                                                "_syntaxKind": "identifier",
                                                "identifier": "item.beginDate.S",
                                              },
                                            },
                                          },
                                          ":newLastSentOnValue": Object {
                                            "_syntaxKind": "literal-object",
                                            "properties": Object {
                                              "N": Object {
                                                "_syntaxKind": "identifier",
                                                "identifier": "item.total.N",
                                              },
                                            },
                                          },
                                        },
                                      },
                                      "Key": Object {
                                        "_syntaxKind": "literal-object",
                                        "properties": Object {
                                          "pk": Object {
                                            "_syntaxKind": "identifier",
                                            "identifier": "item.pk",
                                          },
                                          "sk": Object {
                                            "_syntaxKind": "identifier",
                                            "identifier": "item.sk",
                                          },
                                        },
                                      },
                                      "TableName": Object {
                                        "_syntaxKind": "literal",
                                        "type": "string",
                                        "value": "MyStorage",
                                      },
                                      "UpdateExpression": Object {
                                        "_syntaxKind": "literal",
                                        "type": "string",
                                        "value": "SET lastSentOnValue = :newLastSentOnValue, lastBeginDateValue = :newLastBeginDateValue",
                                      },
                                    },
                                  },
                                  "resource": "arn:aws:states:::aws-sdk:dynamodb:updateItem",
                                },
                              ],
                            },
                          },
                        ],
                      },
                      "retry": Array [],
                    },
                  ],
                },
                "retry": Array [],
              },
              Object {
                "_syntaxKind": "variable-assignment",
                "expression": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "scan.LastEvaluatedKey",
                },
                "name": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "lastEvaluatedKey",
                  "type": "unknown",
                },
              },
            ],
          },
        },
      ]
    `);
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "{
          let thresholds = asl.pass({
              parameters: () => [
                  {
                      \\"metric\\": \\"mappings.requests\\",
                      \\"ceiling\\": 100
                  },
                  {
                      \\"metric\\": \\"mappings.requests\\",
                      \\"ceiling\\": 1000
                  }
              ],
              comment: \\"thresholds = [\\\\n    {\\\\n      \\\\\\"metric\\\\\\": \\\\\\"mappings.requests\\\\\\",\\\\n      \\\\\\"ceiling\\\\\\": 100\\\\n    },\\\\n    {\\\\n      \\\\\\"metric\\\\\\": \\\\\\"mappings.requests\\\\\\",\\\\n      \\\\\\"ceiling\\\\\\": 1000\\\\n    }\\\\n  ]\\"
          });
          let lastEvaluatedKey = asl.pass({
              parameters: () => undefined,
              comment: \\"lastEvaluatedKey: any | undefined = undefined\\"
          });
          asl.typescriptDoWhile({
              condition: () => lastEvaluatedKey,
              block: () => {
                  let scan = await asl.nativeDynamoDBScan({ TableName: \\"MyStorage\\", Limit: 1, ExclusiveStartKey: lastEvaluatedKey });
                  asl.map({
                      items: () => (scan.Items as unknown as Item[]),
                      iterator: item => {
                          asl.map({
                              items: () => thresholds,
                              iterator: threshold => {
                                  let numericLastSentOnValue = asl.pass({
                                      parameters: () => asl.states.stringToJson(item.lastSentOnValue.N) as number,
                                      comment: \\"numericLastSentOnValue = asl.states.stringToJson(item.lastSentOnValue.N) as number\\"
                                  });
                                  let numericTotal = asl.pass({
                                      parameters: () => asl.states.stringToJson(item.total.N) as number,
                                      comment: \\"numericTotal = asl.states.stringToJson(item.total.N) as number\\"
                                  });
                                  asl.typescriptIf({
                                      when: () => (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))
                                          || (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S)),
                                      then: () => {
                                          await asl.nativeEventBridgePutEvents({
                                              Entries: [
                                                  {
                                                      Detail: asl.states.jsonToString({
                                                          account_id: item.pk,
                                                          threshold: threshold
                                                      }),
                                                      DetailType: \\"xxx.detail.type\\",
                                                      EventBusName: \\"default\\",
                                                      Source: \\"zzz.my.source\\"
                                                  }
                                              ]
                                          });
                                          await asl.nativeDynamoDBUpdateItem({
                                              TableName: \\"MyStorage\\",
                                              Key: {
                                                  pk: item.pk,
                                                  sk: item.sk
                                              },
                                              ConditionExpression: \\"lastSentOnValue < :newLastSentOnValue OR lastBeginDateValue <> :newLastBeginDateValue\\",
                                              UpdateExpression: \\"SET lastSentOnValue = :newLastSentOnValue, lastBeginDateValue = :newLastBeginDateValue\\",
                                              ExpressionAttributeValues: {
                                                  \\":newLastSentOnValue\\": {
                                                      N: item.total.N as any
                                                  },
                                                  \\":newLastBeginDateValue\\": {
                                                      S: item.beginDate.S
                                                  }
                                              }
                                          });
                                      },
                                      comment: \\"if ((item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))\\\\n          || (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))) {\\\\n\\\\n          await asl.nativeEventBridgePutEvents({\\\\n            Entries: [\\\\n              {\\\\n                Detail: asl.states.jsonToString({\\\\n                  account_id: item.pk,\\\\n                  threshold: threshold\\\\n                }),\\\\n                DetailType: \\\\\\"xxx.detail.type\\\\\\",\\\\n                EventBusName: \\\\\\"default\\\\\\",\\\\n                Source: \\\\\\"zzz.my.source\\\\\\"\\\\n              }\\\\n            ]\\\\n          });\\\\n          await asl.nativeDynamoDBUpdateItem({\\\\n            TableName: \\\\\\"MyStorage\\\\\\",\\\\n            Key: {\\\\n              pk: item.pk,\\\\n              sk: item.sk\\\\n            },\\\\n            ConditionExpression: \\\\\\"lastSentOnValue < :newLastSentOnValue OR lastBeginDateValue <> :newLastBeginDateValue\\\\\\",\\\\n            UpdateExpression: \\\\\\"SET lastSentOnValue = :newLastSentOnValue, lastBeginDateValue = :newLastBeginDateValue\\\\\\",\\\\n            ExpressionAttributeValues: {\\\\n              \\\\\\":newLastSentOnValue\\\\\\": {\\\\n                N: item.total.N as any\\\\n              },\\\\n              \\\\\\":newLastBeginDateValue\\\\\\": {\\\\n                S: item.beginDate.S\\\\n              }\\\\n            }\\\\n          });\\\\n        }\\"
                                  })
                              }
                          })
                      }
                  })
                  lastEvaluatedKey = scan.LastEvaluatedKey;
              }
          })
      }"
    `);
  });
  it("then can be converted to asl", async () => {
    expect(converted.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Assign thresholds",
        "States": Object {
          "Assign lastEvaluatedKey": Object {
            "Comment": "lastEvaluatedKey: any | undefined = undefined",
            "Next": "Assign scan",
            "Result": null,
            "ResultPath": "$.lastEvaluatedKey",
            "Type": "Pass",
          },
          "Assign lastEvaluatedKey_1": Object {
            "Comment": undefined,
            "InputPath": "scan.LastEvaluatedKey",
            "Next": "DoWhile",
            "ResultPath": "$.lastEvaluatedKey",
            "Type": "Pass",
          },
          "Assign scan": Object {
            "Catch": undefined,
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Map",
            "Parameters": Object {
              "ExclusiveStartKey.$": "$.lastEvaluatedKey",
              "Limit": 1,
              "TableName": "MyStorage",
            },
            "Resource": "arn:aws:states:::aws-sdk:dynamodb:scan",
            "ResultPath": "$.scan",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Assign thresholds": Object {
            "Comment": "thresholds = [
          {
            \\"metric\\": \\"mappings.requests\\",
            \\"ceiling\\": 100
          },
          {
            \\"metric\\": \\"mappings.requests\\",
            \\"ceiling\\": 1000
          }
        ]",
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
            "ResultPath": "$.thresholds",
            "Type": "Pass",
          },
          "DoWhile": Object {
            "Branches": Array [
              Object {
                "StartAt": "_WhileCondition",
                "States": Object {
                  "_WhileCondition": Object {
                    "Choices": Array [
                      Object {
                        "IsPresent": true,
                        "Next": "XXXX",
                        "Variable": "lastEvaluatedKey",
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
            "Type": "Parallel",
          },
          "Map": Object {
            "Comment": undefined,
            "ItemsPath": "scan.Items",
            "Iterator": Object {
              "StartAt": "Map",
              "States": Object {
                "Map": Object {
                  "Comment": undefined,
                  "End": true,
                  "ItemsPath": "thresholds",
                  "Iterator": Object {
                    "StartAt": "Assign numericLastSentOnValue",
                    "States": Object {
                      "Assign numericLastSentOnValue": Object {
                        "Comment": "numericLastSentOnValue = asl.states.stringToJson(item.lastSentOnValue.N) as number",
                        "Next": "Assign numericTotal",
                        "Parameters": "States.StringToJson($.item.lastSentOnValue.N)",
                        "ResultPath": "$.numericLastSentOnValue",
                        "Type": "Pass",
                      },
                      "Assign numericTotal": Object {
                        "Comment": "numericTotal = asl.states.stringToJson(item.total.N) as number",
                        "End": true,
                        "Parameters": "States.StringToJson($.item.total.N)",
                        "ResultPath": "$.numericTotal",
                        "Type": "Pass",
                      },
                    },
                  },
                  "MaxConcurrency": undefined,
                  "Type": "Map",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Assign lastEvaluatedKey_1",
            "Type": "Map",
          },
        },
      }
    `);
  });
});
