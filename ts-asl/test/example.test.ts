import { writeFileSync } from "fs";
import { Converter } from "../src";

describe("when converting example (native)", () => {
  let converted;

  beforeAll(() => {
    const converter = Converter.FromFile("test/resources/example.ts");
    converted = converter.convert();
    writeFileSync(
      "test/resources/example-asllib.ts",
      converted.transformedCode
    );
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "import * as asl from \\"asl-lib\\";
      export const main = asl.deploy.asStateMachine(async () => {
          let thresholds = [
              {
                  \\"metric\\": \\"mappings.requests\\",
                  \\"ceiling\\": 100
              },
              {
                  \\"metric\\": \\"mappings.requests\\",
                  \\"ceiling\\": 1000
              }
          ];
          let lastEvaluatedKey: any | undefined = undefined;
          do {
              let scan = await asl.nativeDynamoDBScan({ TableName: \\"MyStorage\\", Limit: 1, ExclusiveStartKey: lastEvaluatedKey });
              for (const item of ((scan.Items || []) as unknown as Item[])) {
                  for (const threshold of thresholds) {
                      let numericLastSentOnValue = asl.states.stringToJson(item.lastSentOnValue.N) as number;
                      let numericTotal = asl.states.stringToJson(item.total.N) as number;
                      if ((item.sk.S === threshold.metric && threshold.ceiling <= numericTotal && threshold.ceiling > numericLastSentOnValue && (!item.lastBeginDateValue.S || item.beginDate.S === item.lastBeginDateValue.S))
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
                      }
                  }
              }
              lastEvaluatedKey = scan.LastEvaluatedKey;
          } while (lastEvaluatedKey);
      });
      interface Item {
          pk: {
              S: string;
          };
          sk: {
              S: string;
          };
          total: {
              N: string;
          };
          lastSentOnValue: {
              N: string;
          };
          beginDate: {
              S: string;
          };
          lastBeginDateValue: {
              S: string;
          };
      }
      "
    `);
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
