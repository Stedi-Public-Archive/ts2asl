import { runConvertForTest } from "./utility";

describe("when converting example", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("example");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.main.transformedCode).toMatchInlineSnapshot(`
      "import * as asl from \\"@ts2asl/asl-lib\\"

      export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
          let thresholds = asl.pass({
              name: \\"Assign thresholds\\",
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
              name: \\"Assign lastEvaluatedKey\\",
              parameters: () => undefined,
              comment: \\"lastEvaluatedKey: any | undefined = undefined\\"
          }); //$.variables.lastEvaluatedKey
          asl.typescriptDoWhile({
              name: \\"Do While (lastEvaluatedKey)\\",
              condition: () => lastEvaluatedKey,
              block: async () => {
                  let scan = await asl.nativeDynamoDBScan({ parameters: { TableName: \\"MyStorage\\", Limit: 1, ExclusiveStartKey: lastEvaluatedKey } });
                  asl.map({
                      name: \\"For item Of scan.Items\\",
                      items: () => scan.Items,
                      iterator: item => {
                          asl.map({
                              name: \\"For threshold Of thresholds\\",
                              items: () => thresholds,
                              iterator: threshold => {
                                  let numericLastSentOnValue = asl.states.stringToJson(item.lastSentOnValue.N);
                                  let numericTotal = asl.states.stringToJson(item.total.N);
                                  asl.typescriptIf({
                                      name: \\"If ((item.sk.S === thresh ...\\",
                                      condition: () => (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))
                                          || (item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S)),
                                      then: async () => {
                                          const detail = asl.pass({
                                              name: \\"Assign detail\\",
                                              parameters: () => ({
                                                  account_id: item.pk,
                                                  threshold: threshold
                                              }),
                                              comment: \\"detail = {\\\\n            account_id: item.pk,\\\\n            threshold: threshold\\\\n          }\\"
                                          });
                                          await asl.nativeEventBridgePutEvents({
                                              parameters: {
                                                  Entries: [
                                                      {
                                                          Detail: asl.states.jsonToString(detail),
                                                          DetailType: \\"xxx.detail.type\\",
                                                          EventBusName: \\"default\\",
                                                          Source: \\"zzz.my.source\\"
                                                      }
                                                  ]
                                              }
                                          });
                                          await asl.nativeDynamoDBUpdateItem({
                                              parameters: {
                                                  TableName: \\"MyStorage\\",
                                                  Key: {
                                                      pk: item.pk,
                                                      sk: item.sk
                                                  },
                                                  ConditionExpression: \\"lastSentOnValue < :newLastSentOnValue OR lastBeginDateValue <> :newLastBeginDateValue\\",
                                                  UpdateExpression: \\"SET lastSentOnValue = :newLastSentOnValue, lastBeginDateValue = :newLastBeginDateValue\\",
                                                  ExpressionAttributeValues: {
                                                      \\":newLastSentOnValue\\": {
                                                          N: item.total.N
                                                      },
                                                      \\":newLastBeginDateValue\\": {
                                                          S: item.beginDate.S
                                                      }
                                                  }
                                              }
                                          });
                                      }
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
    expect(converted.main.iasl).toMatchInlineSnapshot(`
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
              "stateName": "Assign thresholds",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "thresholds",
              "type": "object",
            },
            "stateName": "Assign thresholds",
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
              "stateName": "Assign lastEvaluatedKey",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "lastEvaluatedKey",
              "type": "unknown",
            },
            "stateName": "Assign lastEvaluatedKey",
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
            "stateName": "Do While (lastEvaluatedKey)",
            "while": Object {
              "_syntaxKind": "function",
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
                    "stateName": "Scan",
                  },
                  "name": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "scan",
                    "type": "object",
                  },
                  "stateName": "Assign scan",
                },
                Object {
                  "_syntaxKind": "asl-map-state",
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
                    "statements": Array [
                      Object {
                        "_syntaxKind": "asl-map-state",
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
                          "statements": Array [
                            Object {
                              "_syntaxKind": "variable-assignment",
                              "expression": Object {
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
                              "name": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "numericLastSentOnValue",
                                "type": "numeric",
                              },
                              "stateName": "Assign numericLastSentOnValue",
                            },
                            Object {
                              "_syntaxKind": "variable-assignment",
                              "expression": Object {
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
                              "name": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "numericTotal",
                                "type": "numeric",
                              },
                              "stateName": "Assign numericTotal",
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
                              "stateName": "If ((item.sk.S === thresh ...",
                              "then": Object {
                                "_syntaxKind": "function",
                                "statements": Array [
                                  Object {
                                    "_syntaxKind": "variable-assignment",
                                    "expression": Object {
                                      "_syntaxKind": "asl-pass-state",
                                      "parameters": Object {
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
                                      "source": "detail = {
                  account_id: item.pk,
                  threshold: threshold
                }",
                                      "stateName": "Assign detail",
                                    },
                                    "name": Object {
                                      "_syntaxKind": "identifier",
                                      "identifier": "detail",
                                      "type": "object",
                                    },
                                    "stateName": "Assign detail",
                                  },
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
                                                      "_syntaxKind": "identifier",
                                                      "identifier": "detail",
                                                      "type": "object",
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
                                    "stateName": "PutEvents",
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
                                    "stateName": "UpdateItem",
                                  },
                                ],
                              },
                            },
                          ],
                        },
                        "stateName": "For threshold Of thresholds",
                      },
                    ],
                  },
                  "stateName": "For item Of scan.Items",
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
                  "stateName": "Assign lastEvaluatedKey",
                },
              ],
            },
          },
        ],
      }
    `);
  });
  it("then can be converted to asl", async () => {
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
                                "Comment": undefined,
                                "InputPath": "States.StringToJson($.vars.item.lastSentOnValue.N)",
                                "Next": "Assign numericTotal",
                                "ResultPath": "$.vars.numericLastSentOnValue",
                                "Type": "Pass",
                              },
                              "Assign numericTotal": Object {
                                "Comment": undefined,
                                "InputPath": "States.StringToJson($.vars.item.total.N)",
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
                        "IsPresent": true,
                        "Next": "Scan",
                        "Variable": "$.vars.lastEvaluatedKey",
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
