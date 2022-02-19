import { runConvertForTest } from "./utility";

describe("when converting example", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("example");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "import * as asl from \\"@cloudscript/asl-lib\\"

      export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
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
          let lastEvaluatedKey: any | undefined = asl.pass({
              parameters: () => undefined,
              comment: \\"lastEvaluatedKey: any | undefined = undefined\\"
          }); //$.variables.lastEvaluatedKey
          asl.typescriptDoWhile({
              condition: () => lastEvaluatedKey,
              block: async () => {
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
                                      condition: () => (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))
                                          || (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S)),
                                      then: async () => {
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
      });

      interface Item {
        pk: { S: string };
        sk: { S: string };
        total: { N: string };
        lastSentOnValue: { N: string };
        beginDate: { S: string };
        lastBeginDateValue: { S: string };
      }"
    `);
  });
  it("then can be converted to iasl", async () => {
    expect(converted.iasl).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": Object {
          "_syntaxKind": "identifier",
          "identifier": "_context",
        },
        "inputArgumentName": Object {
          "_syntaxKind": "identifier",
          "identifier": "_input",
        },
        "scope": "state-machine1",
        "statements": Array [
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
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
              "source": "thresholds = [
          {
            \\"metric\\": \\"mappings.requests\\",
            \\"ceiling\\": 100
          },
          {
            \\"metric\\": \\"mappings.requests\\",
            \\"ceiling\\": 1000
          }
        ]",
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
              "parameters": Object {
                "_syntaxKind": "literal",
                "type": "null",
                "value": null,
              },
              "source": "lastEvaluatedKey: any | undefined = undefined",
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
              "_syntaxKind": "binary-expression",
              "operator": "is-present",
              "rhs": Object {
                "_syntaxKind": "identifier",
                "identifier": "lastEvaluatedKey",
                "type": "unknown",
              },
            },
            "while": Object {
              "_syntaxKind": "function",
              "scope": "ts-do-while2",
              "statements": Array [
                Object {
                  "_syntaxKind": "variable-assignment",
                  "expression": Object {
                    "_syntaxKind": "asl-task-state",
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
                    "source": undefined,
                  },
                  "name": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "scan",
                    "type": "object",
                  },
                },
                Object {
                  "_syntaxKind": "asl-map-state",
                  "catch": Array [],
                  "items": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "scan.Items",
                    "type": "object",
                  },
                  "iterator": Object {
                    "_syntaxKind": "function",
                    "inputArgumentName": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "item",
                    },
                    "scope": "asl-map-state3",
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
                          "_syntaxKind": "function",
                          "inputArgumentName": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "threshold",
                          },
                          "scope": "asl-map-state4",
                          "statements": Array [
                            Object {
                              "_syntaxKind": "variable-assignment",
                              "expression": Object {
                                "_syntaxKind": "asl-pass-state",
                                "parameters": Object {
                                  "_syntaxKind": "asl-intrinsic-function",
                                  "arguments": Array [
                                    Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "item.lastSentOnValue.N",
                                      "type": "string",
                                    },
                                  ],
                                  "function": "asl.states.stringToJson",
                                },
                                "source": "numericLastSentOnValue = asl.states.stringToJson(item.lastSentOnValue.N) as number",
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
                                "parameters": Object {
                                  "_syntaxKind": "asl-intrinsic-function",
                                  "arguments": Array [
                                    Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "item.total.N",
                                      "type": "string",
                                    },
                                  ],
                                  "function": "asl.states.stringToJson",
                                },
                                "source": "numericTotal = asl.states.stringToJson(item.total.N) as number",
                              },
                              "name": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "numericTotal",
                                "type": "numeric",
                              },
                            },
                            Object {
                              "_syntaxKind": "if",
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
                                          "type": "string",
                                        },
                                        "operator": "eq",
                                        "rhs": Object {
                                          "_syntaxKind": "identifier",
                                          "identifier": "threshold.metric",
                                          "type": "string",
                                        },
                                      },
                                      "operator": "and",
                                      "rhs": Object {
                                        "_syntaxKind": "binary-expression",
                                        "lhs": Object {
                                          "_syntaxKind": "identifier",
                                          "identifier": "threshold.ceiling",
                                          "type": "numeric",
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
                                        "type": "numeric",
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
                                          "type": "string",
                                        },
                                      },
                                    },
                                    "operator": "or",
                                    "rhs": Object {
                                      "_syntaxKind": "binary-expression",
                                      "lhs": Object {
                                        "_syntaxKind": "identifier",
                                        "identifier": "item.beginDate.S",
                                        "type": "string",
                                      },
                                      "operator": "eq",
                                      "rhs": Object {
                                        "_syntaxKind": "identifier",
                                        "identifier": "item.lastBeginDateValue.S",
                                        "type": "string",
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
                                        "type": "string",
                                      },
                                      "operator": "eq",
                                      "rhs": Object {
                                        "_syntaxKind": "identifier",
                                        "identifier": "threshold.metric",
                                        "type": "string",
                                      },
                                    },
                                    "operator": "and",
                                    "rhs": Object {
                                      "_syntaxKind": "binary-expression",
                                      "lhs": Object {
                                        "_syntaxKind": "identifier",
                                        "identifier": "threshold.ceiling",
                                        "type": "numeric",
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
                                          "type": "string",
                                        },
                                      },
                                    },
                                    "operator": "or",
                                    "rhs": Object {
                                      "_syntaxKind": "binary-expression",
                                      "lhs": Object {
                                        "_syntaxKind": "identifier",
                                        "identifier": "item.beginDate.S",
                                        "type": "string",
                                      },
                                      "operator": "eq",
                                      "rhs": Object {
                                        "_syntaxKind": "identifier",
                                        "identifier": "item.lastBeginDateValue.S",
                                        "type": "string",
                                      },
                                    },
                                  },
                                },
                              },
                              "source": "if ((item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))
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
                              "then": Object {
                                "_syntaxKind": "function",
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
                                                          "type": "object",
                                                        },
                                                        "threshold": Object {
                                                          "_syntaxKind": "identifier",
                                                          "identifier": "threshold",
                                                          "type": "object",
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
                                                  "type": "string",
                                                },
                                              },
                                            },
                                            ":newLastSentOnValue": Object {
                                              "_syntaxKind": "literal-object",
                                              "properties": Object {
                                                "N": Object {
                                                  "_syntaxKind": "identifier",
                                                  "identifier": "item.total.N",
                                                  "type": "string",
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
                                              "type": "object",
                                            },
                                            "sk": Object {
                                              "_syntaxKind": "identifier",
                                              "identifier": "item.sk",
                                              "type": "object",
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
                    "type": "object",
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
        ],
      }
    `);
  });
  it("then can be converted to asl", async () => {
    expect(converted.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Assign thresholds",
        "States": Object {
          "Assign lastEvaluatedKey": Object {
            "Comment": "lastEvaluatedKey: any | undefined = undefined",
            "Next": "DoWhile",
            "Result": null,
            "ResultPath": "$.lastEvaluatedKey",
            "Type": "Pass",
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
                "Parameters": Object {
                  "lastEvaluatedKey.$": "$.lastEvaluatedKey",
                  "thresholds.$": "$.thresholds",
                },
                "StartAt": "Assign scan",
                "States": Object {
                  "Assign lastEvaluatedKey_1": Object {
                    "Comment": undefined,
                    "InputPath": "scan.LastEvaluatedKey",
                    "Next": "_WhileCondition",
                    "ResultPath": "$.lastEvaluatedKey",
                    "Type": "Pass",
                  },
                  "Assign scan": Object {
                    "Catch": undefined,
                    "Comment": undefined,
                    "HeartbeatSeconds": undefined,
                    "Next": "Map_1",
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
                  "Map_1": Object {
                    "Comment": undefined,
                    "ItemsPath": "$.scan.Items",
                    "Iterator": Object {
                      "StartAt": "Map",
                      "States": Object {
                        "Map": Object {
                          "Comment": undefined,
                          "End": true,
                          "ItemsPath": "$.thresholds",
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
                                "Next": "If",
                                "Parameters": "States.StringToJson($.item.total.N)",
                                "ResultPath": "$.numericTotal",
                                "Type": "Pass",
                              },
                              "Empty Default Choice": Object {
                                "End": true,
                                "Type": "Pass",
                              },
                              "If": Object {
                                "Choices": Array [
                                  Object {
                                    "Next": "Task",
                                    "Or": Array [
                                      Object {
                                        "And": Array [
                                          Object {
                                            "And": Array [
                                              Object {
                                                "And": Array [
                                                  Object {
                                                    "StringEqualsPath": "$.threshold.metric",
                                                    "Variable": "$.item.sk.S",
                                                  },
                                                  Object {
                                                    "NumericLessThanEqualsPath": "$.numericTotal",
                                                    "Variable": "$.threshold.ceiling",
                                                  },
                                                ],
                                              },
                                              Object {
                                                "NumericGreaterThanPath": "$.numericLastSentOnValue",
                                                "Variable": "$.threshold.ceiling",
                                              },
                                            ],
                                          },
                                          Object {
                                            "Or": Array [
                                              Object {
                                                "IsPresent": false,
                                                "Variable": "item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "StringEqualsPath": "$.item.lastBeginDateValue.S",
                                                "Variable": "$.item.beginDate.S",
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
                                                "StringEqualsPath": "$.threshold.metric",
                                                "Variable": "$.item.sk.S",
                                              },
                                              Object {
                                                "NumericLessThanEqualsPath": "$.numericTotal",
                                                "Variable": "$.threshold.ceiling",
                                              },
                                            ],
                                          },
                                          Object {
                                            "Or": Array [
                                              Object {
                                                "IsPresent": false,
                                                "Variable": "item.lastBeginDateValue.S",
                                              },
                                              Object {
                                                "StringEqualsPath": "$.item.lastBeginDateValue.S",
                                                "Variable": "$.item.beginDate.S",
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                                "Comment": "if ((item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))
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
                                "Default": "Empty Default Choice",
                                "Type": "Choice",
                              },
                              "Task": Object {
                                "Catch": undefined,
                                "Comment": undefined,
                                "HeartbeatSeconds": undefined,
                                "Next": "Task_1",
                                "Parameters": Object {
                                  "Entries": Array [
                                    Object {
                                      "Detail": "States.JsonToString({
        \\"account_id.$\\": \\"$.item.pk\\",
        \\"threshold.$\\": \\"$.threshold\\"
      })",
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
                              "Task_1": Object {
                                "Catch": undefined,
                                "Comment": undefined,
                                "End": true,
                                "HeartbeatSeconds": undefined,
                                "Parameters": Object {
                                  "ConditionExpression": "lastSentOnValue < :newLastSentOnValue OR lastBeginDateValue <> :newLastBeginDateValue",
                                  "ExpressionAttributeValues": Object {
                                    ":newLastBeginDateValue": Object {
                                      "S.$": "$.item.beginDate.S",
                                    },
                                    ":newLastSentOnValue": Object {
                                      "N.$": "$.item.total.N",
                                    },
                                  },
                                  "Key": Object {
                                    "pk.$": "$.item.pk",
                                    "sk.$": "$.item.sk",
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
                          "MaxConcurrency": undefined,
                          "Parameters": Object {
                            "item.$": "$.item",
                            "threshold.$": "$$.Map.Item.Value",
                            "thresholds.$": "$.thresholds",
                          },
                          "Type": "Map",
                        },
                      },
                    },
                    "MaxConcurrency": undefined,
                    "Next": "Assign lastEvaluatedKey_1",
                    "Parameters": Object {
                      "item.$": "$$.Map.Item.Value",
                      "scan.$": "$.scan",
                      "thresholds.$": "$.thresholds",
                    },
                    "Type": "Map",
                  },
                  "_WhileCondition": Object {
                    "Choices": Array [
                      Object {
                        "IsPresent": true,
                        "Next": "Assign scan",
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
        },
      }
    `);
  });
});
