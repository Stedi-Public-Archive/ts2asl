import { runConvertForTest } from "./utility";

describe("when converting example", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("kyc");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "// https://asl.stedi.com/?share=eJyNVNtuGzcQ_ZlF0YKIYK6v0VNWsnyJbUWxbDdOIQPU7sgitCIVkitF6BTIP_Spv5cv6ZCrta52CwPe0cyZw7kcsqnHY1AOE3al9Iw96sKwZmGdHoNhv149Nn9jE6NTsJalWllpnWV6wARTxbhPELLTCi4zYpJuztIhpCPL3FA4yoYUMqCMDFJppVbMaSYmxDr1XgWzJYNQGbNOGMcoGZhW7_pamEyq56qKGnZ9PHHY9Ie8nOndDuym924-AewII_IccmzDd4eXa1VSV-NJDg4yvAVb5K4LOaROG6w4AiNktQijP_Z6tQ03imdQ6RqI92prTqzaa4sxVDSrvhdAkmXG97iBWbixYYSioqsmFaWGiYlF_BX3g8hlRsMpI79Ufvbzx9_VDDY3WKOZUWY5kcWnI9wQo63-WyrDJLTLLKSFCZPNQfha4Y3IelUz6YZkOZKHyEs4ocsxrhTqRVH29yyksiSTvFLkiOSr2AQ0bbNGda6v4NWld4o-UQwZTAnAZkNQGzJmQ2FZH8i_TLoTduSnQpeFOhFG1cXM1m1QYL1eD1y2PilcK1hBgGPKNJbG5YykFZ6CEzL3m16YQamvlhmIGoUNcon-bNIv0vSq9y_sluVQUo3KqY3mKT6AkYM5M9KO_AUayByobmfm2DJGm9a3QuR2cXVqyfU1XiqqciryLtBtz0hyIh3pweCWAHgjvifOwXhCHe0iboo8LXK_Ur-mSlM_f_xjSxwtqQ_-Kks11fkUMjKYpIv5TCsXqZPToLyoVj4fXoHUebJ4KbTxD0guFfw_V6kVelxEmuqCdmvgWwHWvxta0pjKj78dRoo-ld_QmsSpFjO5nwRxrjXYXmFbnJLR9gbCX5KdwV0s_8W8eBqz3c51va4_nuuNLoX7NmO3SFOgFzrb3cL2ga-e85Kzk-iMRL48Lvx84hjT38r_p6doL1j7eIDRIUZHeIwn-B4TjBrYxFNs4Rme4wVe9vAjfohivPLIa6S8GzzCNn7Cdxw7-Blvyej1ekiYrsfcecz9KuahwhDqdx_9QtFH_IqciuAY8ZhO4PvID5AfIj9Cfoz8BPl75InPIbOBvOlBp_iBt3rIzzCm6DnGCfILjBsexi89N_-4ejS_8tnXFLwJwTYF-SfkHU_22Ye5r82DutTC0hV7151nvUf-QJ9QOP8SyCn0SK6v3hXvvdVMzLebiePtZpqhmdPQTMvD4v1AfvAm-eEO8qNt8rNAfh7ILwJ57DceH_c83Fsn5P0XRI01NA

      import * as asl from \\"@ts2asl/asl-lib\\"


      export const main = asl.deploy.asStateMachine(async () =>{
          const result = asl.parallel({
              branches: [
                  () => { let _var = asl.typescriptInvoke({
                      name: \\"performIdentifyCheck()\\",
                      resource: performIdentifyCheck,
                      comment: \\"performIdentifyCheck()\\"
                  }); return _var; },
                  () => { return { agencyChecked: true }; }
              ]
          });
          asl.nativeEventBridgePutEvents({
              parameters: {
                  Entries: [
                      {
                          Detail: asl.states.jsonToString(result),
                          DetailType: \\"Identity check completed\\",
                          EventBusName: \\"eventbusname\\",
                          Source: \\"com.aws.kyc\\"
                      }
                  ]
              }
          });
          const checksPassed = asl.pass({
              name: \\"Assign checksPassed\\",
              parameters: () => true,
              comment: \\"checksPassed = true\\"
          });
          asl.typescriptIf({
              name: \\"If (checksPassed)\\",
              condition: () => checksPassed,
              then: async () => {
                  //no-op update risk profile
                  asl.nativeEventBridgePutEvents({
                      parameters: {
                          Entries: [
                              {
                                  Detail: asl.states.jsonToString(result),
                                  DetailType: \\"AccountApproved\\",
                                  EventBusName: \\"eventbusname\\",
                                  Source: \\"com.aws.kyc\\"
                              }
                          ]
                      }
                  });
              },
              else: async () => {
                  asl.nativeEventBridgePutEvents({
                      parameters: {
                          Entries: [
                              {
                                  Detail: asl.states.jsonToString(result),
                                  DetailType: \\"AccountDeclined\\",
                                  EventBusName: \\"eventbusname\\",
                                  Source: \\"com.aws.kyc\\"
                              }
                          ]
                      }
                  });
              }
          })
      });



      const performIdentifyCheck = asl.deploy.asLambda(async () => {
        return { identityChecked: true, customerName: \\"name\\", customerAddress: \\"address\\" };
      })
      "
    `);
  });
  it("then can be converted to iasl", async () => {
    expect(converted.iasl).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-parallel-state",
              "branches": Array [
                Object {
                  "_syntaxKind": "function",
                  "statements": Array [
                    Object {
                      "_syntaxKind": "variable-assignment",
                      "expression": Object {
                        "_syntaxKind": "asl-task-state",
                        "catch": undefined,
                        "parameters": undefined,
                        "resource": "lambda:performIdentifyCheck",
                        "retry": Array [
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
                        "source": "performIdentifyCheck()",
                        "stateName": "performIdentifyCheck()",
                      },
                      "name": Object {
                        "_syntaxKind": "identifier",
                        "identifier": "_var",
                        "type": "unknown",
                      },
                      "stateName": "Assign ???",
                    },
                    Object {
                      "_syntaxKind": "return",
                      "expression": Object {
                        "_syntaxKind": "identifier",
                        "identifier": "_var",
                        "type": "unknown",
                      },
                      "stateName": "Return ???",
                    },
                  ],
                },
                Object {
                  "_syntaxKind": "function",
                  "statements": Array [
                    Object {
                      "_syntaxKind": "return",
                      "expression": Object {
                        "_syntaxKind": "literal-object",
                        "properties": Object {
                          "agencyChecked": Object {
                            "_syntaxKind": "literal",
                            "type": "boolean",
                            "value": true,
                          },
                        },
                      },
                      "stateName": "Return { agencyChecked: t ...",
                    },
                  ],
                },
              ],
              "catch": undefined,
              "retry": undefined,
              "source": undefined,
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "result",
              "type": "object",
            },
            "stateName": "Assign result",
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
                              "identifier": "result",
                              "type": "object",
                            },
                          ],
                          "function": "asl.states.jsonToString",
                        },
                        "DetailType": Object {
                          "_syntaxKind": "literal",
                          "type": "string",
                          "value": "Identity check completed",
                        },
                        "EventBusName": Object {
                          "_syntaxKind": "literal",
                          "type": "string",
                          "value": "eventbusname",
                        },
                        "Source": Object {
                          "_syntaxKind": "literal",
                          "type": "string",
                          "value": "com.aws.kyc",
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
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal",
                "type": "boolean",
                "value": true,
              },
              "source": "checksPassed = true",
              "stateName": "Assign checksPassed",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "checksPassed",
              "type": "unknown",
            },
            "stateName": "Assign checksPassed",
          },
          Object {
            "_syntaxKind": "if",
            "condition": Object {
              "_syntaxKind": "binary-expression",
              "operator": "is-present",
              "rhs": Object {
                "_syntaxKind": "identifier",
                "identifier": "checksPassed",
                "type": "unknown",
              },
            },
            "else": Object {
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
                                    "_syntaxKind": "identifier",
                                    "identifier": "result",
                                    "type": "object",
                                  },
                                ],
                                "function": "asl.states.jsonToString",
                              },
                              "DetailType": Object {
                                "_syntaxKind": "literal",
                                "type": "string",
                                "value": "AccountDeclined",
                              },
                              "EventBusName": Object {
                                "_syntaxKind": "literal",
                                "type": "string",
                                "value": "eventbusname",
                              },
                              "Source": Object {
                                "_syntaxKind": "literal",
                                "type": "string",
                                "value": "com.aws.kyc",
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
              ],
            },
            "stateName": "If (checksPassed)",
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
                                    "_syntaxKind": "identifier",
                                    "identifier": "result",
                                    "type": "object",
                                  },
                                ],
                                "function": "asl.states.jsonToString",
                              },
                              "DetailType": Object {
                                "_syntaxKind": "literal",
                                "type": "string",
                                "value": "AccountApproved",
                              },
                              "EventBusName": Object {
                                "_syntaxKind": "literal",
                                "type": "string",
                                "value": "eventbusname",
                              },
                              "Source": Object {
                                "_syntaxKind": "literal",
                                "type": "string",
                                "value": "com.aws.kyc",
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
                "StartAt": "performIdentifyCheck()",
                "States": Object {
                  "Pass": Object {
                    "End": true,
                    "InputPath": "$.vars._var",
                    "Type": "Pass",
                  },
                  "performIdentifyCheck()": Object {
                    "Catch": undefined,
                    "Comment": "source: performIdentifyCheck()",
                    "HeartbeatSeconds": undefined,
                    "Next": "Pass",
                    "Resource": "lambda:performIdentifyCheck",
                    "ResultPath": "$.vars._var",
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
              Object {
                "StartAt": "Pass_1",
                "States": Object {
                  "Pass_1": Object {
                    "End": true,
                    "Result": Object {
                      "agencyChecked": true,
                    },
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Catch": undefined,
            "Comment": undefined,
            "Next": "PutEvents",
            "ResultPath": "$.vars.result",
            "Retry": undefined,
            "Type": "Parallel",
          },
          "If (checksPassed)": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "PutEvents_1",
                "Variable": "$.vars.checksPassed",
              },
            ],
            "Comment": undefined,
            "Default": "PutEvents_1",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign result",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "PutEvents": Object {
            "Catch": undefined,
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
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "PutEvents_1": Object {
            "Catch": undefined,
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
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
        },
      }
    `);
  });
});
