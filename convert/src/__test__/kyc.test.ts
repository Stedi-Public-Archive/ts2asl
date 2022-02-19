import { runConvertForTest } from "./utility";

describe("when converting example", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("kyc");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "// https://asl.stedi.com/?share=eJyNVNtuGzcQ_ZlF0YKIYK6v0VNWsnyJbUWxbDdOIQPU7sgitCIVkitF6BTIP_Spv5cv6ZCrta52CwPe0cyZw7kcsqnHY1AOE3al9Iw96sKwZmGdHoNhv149Nn9jE6NTsJalWllpnWV6wARTxbhPELLTCi4zYpJuztIhpCPL3FA4yoYUMqCMDFJppVbMaSYmxDr1XgWzJYNQGbNOGMcoGZhW7_pamEyq56qKGnZ9PHHY9Ie8nOndDuym924-AewII_IccmzDd4eXa1VSV-NJDg4yvAVb5K4LOaROG6w4AiNktQijP_Z6tQ03imdQ6RqI92prTqzaa4sxVDSrvhdAkmXG97iBWbixYYSioqsmFaWGiYlF_BX3g8hlRsMpI79Ufvbzx9_VDDY3WKOZUWY5kcWnI9wQo63-WyrDJLTLLKSFCZPNQfha4Y3IelUz6YZkOZKHyEs4ocsxrhTqRVH29yyksiSTvFLkiOSr2AQ0bbNGda6v4NWld4o-UQwZTAnAZkNQGzJmQ2FZH8i_TLoTduSnQpeFOhFG1cXM1m1QYL1eD1y2PilcK1hBgGPKNJbG5YykFZ6CEzL3m16YQamvlhmIGoUNcon-bNIv0vSq9y_sluVQUo3KqY3mKT6AkYM5M9KO_AUayByobmfm2DJGm9a3QuR2cXVqyfU1XiqqciryLtBtz0hyIh3pweCWAHgjvifOwXhCHe0iboo8LXK_Ur-mSlM_f_xjSxwtqQ_-Kks11fkUMjKYpIv5TCsXqZPToLyoVj4fXoHUebJ4KbTxD0guFfw_V6kVelxEmuqCdmvgWwHWvxta0pjKj78dRoo-ld_QmsSpFjO5nwRxrjXYXmFbnJLR9gbCX5KdwV0s_8W8eBqz3c51va4_nuuNLoX7NmO3SFOgFzrb3cL2ga-e85Kzk-iMRL48Lvx84hjT38r_p6doL1j7eIDRIUZHeIwn-B4TjBrYxFNs4Rme4wVe9vAjfohivPLIa6S8GzzCNn7Cdxw7-Blvyej1ekiYrsfcecz9KuahwhDqdx_9QtFH_IqciuAY8ZhO4PvID5AfIj9Cfoz8BPl75InPIbOBvOlBp_iBt3rIzzCm6DnGCfILjBsexi89N_-4ejS_8tnXFLwJwTYF-SfkHU_22Ye5r82DutTC0hV7151nvUf-QJ9QOP8SyCn0SK6v3hXvvdVMzLebiePtZpqhmdPQTMvD4v1AfvAm-eEO8qNt8rNAfh7ILwJ57DceH_c83Fsn5P0XRI01NA

      import * as asl from \\"@cloudscript/asl-lib\\"

      export const main = asl.deploy.asStateMachine(async () =>{
          const result = await asl.parallel({
              branches: [
                  () => { asl.typescriptInvoke({
                      target: performIdentifyCheck,
                      comment: \\"performIdentifyCheck()\\"
                  }) },
                  () => { return { agencyChecked: true }; }
              ]
          });
          await asl.nativeEventBridgePutEvents({
              Entries: [
                  {
                      Detail: asl.states.jsonToString(result),
                      DetailType: \\"Identity check completed\\",
                      EventBusName: \\"eventbusname\\",
                      Source: \\"com.aws.kyc\\"
                  }
              ]
          });
          const checksPassed = asl.pass({
              parameters: () => true,
              comment: \\"checksPassed = true\\"
          });
          asl.typescriptIf({
              condition: () => checksPassed,
              then: async () => {
                  //no-op update risk profile
                  await asl.nativeEventBridgePutEvents({
                      Entries: [
                          {
                              Detail: asl.states.jsonToString(result),
                              DetailType: \\"AccountApproved\\",
                              EventBusName: \\"eventbusname\\",
                              Source: \\"com.aws.kyc\\"
                          }
                      ]
                  });
              },
              else: async () => {
                  await asl.nativeEventBridgePutEvents({
                      Entries: [
                          {
                              Detail: asl.states.jsonToString(result),
                              DetailType: \\"AccountDeclined\\",
                              EventBusName: \\"eventbusname\\",
                              Source: \\"com.aws.kyc\\"
                          }
                      ]
                  });
              },
              comment: \\"if (checksPassed) {\\\\n    //no-op update risk profile\\\\n    await asl.nativeEventBridgePutEvents({\\\\n      Entries: [\\\\n        {\\\\n          Detail: asl.states.jsonToString(result),\\\\n          DetailType: \\\\\\"AccountApproved\\\\\\",\\\\n          EventBusName: \\\\\\"eventbusname\\\\\\",\\\\n          Source: \\\\\\"com.aws.kyc\\\\\\"\\\\n        }\\\\n      ]\\\\n    });\\\\n  } else {\\\\n    await asl.nativeEventBridgePutEvents({\\\\n      Entries: [\\\\n        {\\\\n          Detail: asl.states.jsonToString(result),\\\\n          DetailType: \\\\\\"AccountDeclined\\\\\\",\\\\n          EventBusName: \\\\\\"eventbusname\\\\\\",\\\\n          Source: \\\\\\"com.aws.kyc\\\\\\"\\\\n        }\\\\n      ]\\\\n    });\\\\n  }\\"
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
        "scope": Object {
          "accessed": Array [
            "result",
            "checksPassed",
          ],
          "childScopes": Array [
            Object {
              "accessed": Array [],
              "childScopes": Array [
                Object {
                  "accessed": Array [],
                  "childScopes": Array [],
                  "enclosed": Array [],
                  "parentScope": [Circular],
                },
              ],
              "enclosed": Array [],
              "parentScope": [Circular],
            },
            Object {
              "accessed": Array [],
              "childScopes": Array [
                Object {
                  "accessed": Array [],
                  "childScopes": Array [],
                  "enclosed": Array [],
                  "parentScope": [Circular],
                },
              ],
              "enclosed": Array [],
              "parentScope": [Circular],
            },
            Object {
              "accessed": Array [],
              "childScopes": Array [],
              "enclosed": Array [],
              "parentScope": [Circular],
            },
            Object {
              "accessed": Array [],
              "childScopes": Array [],
              "enclosed": Array [],
              "parentScope": [Circular],
            },
          ],
          "enclosed": Array [],
          "parentScope": Object {
            "accessed": Array [],
            "childScopes": Array [
              [Circular],
            ],
            "enclosed": Array [],
            "parentScope": undefined,
          },
        },
        "statements": Array [
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-parallel-state",
              "branches": Array [
                Object {
                  "_syntaxKind": "function",
                  "scope": Object {
                    "accessed": Array [],
                    "childScopes": Array [
                      Object {
                        "accessed": Array [],
                        "childScopes": Array [],
                        "enclosed": Array [],
                        "parentScope": [Circular],
                      },
                    ],
                    "enclosed": Array [],
                    "parentScope": Object {
                      "accessed": Array [
                        "result",
                        "checksPassed",
                      ],
                      "childScopes": Array [
                        [Circular],
                        Object {
                          "accessed": Array [],
                          "childScopes": Array [
                            Object {
                              "accessed": Array [],
                              "childScopes": Array [],
                              "enclosed": Array [],
                              "parentScope": [Circular],
                            },
                          ],
                          "enclosed": Array [],
                          "parentScope": [Circular],
                        },
                        Object {
                          "accessed": Array [],
                          "childScopes": Array [],
                          "enclosed": Array [],
                          "parentScope": [Circular],
                        },
                        Object {
                          "accessed": Array [],
                          "childScopes": Array [],
                          "enclosed": Array [],
                          "parentScope": [Circular],
                        },
                      ],
                      "enclosed": Array [],
                      "parentScope": Object {
                        "accessed": Array [],
                        "childScopes": Array [
                          [Circular],
                        ],
                        "enclosed": Array [],
                        "parentScope": undefined,
                      },
                    },
                  },
                  "statements": Array [
                    Object {
                      "_syntaxKind": "asl-task-state",
                      "resource": "arn:aws:lambda:us-east-1:123123123123:function:my-program-performIdentifyCheck",
                      "source": "performIdentifyCheck()",
                    },
                  ],
                },
                Object {
                  "_syntaxKind": "function",
                  "scope": Object {
                    "accessed": Array [],
                    "childScopes": Array [
                      Object {
                        "accessed": Array [],
                        "childScopes": Array [],
                        "enclosed": Array [],
                        "parentScope": [Circular],
                      },
                    ],
                    "enclosed": Array [],
                    "parentScope": Object {
                      "accessed": Array [
                        "result",
                        "checksPassed",
                      ],
                      "childScopes": Array [
                        Object {
                          "accessed": Array [],
                          "childScopes": Array [
                            Object {
                              "accessed": Array [],
                              "childScopes": Array [],
                              "enclosed": Array [],
                              "parentScope": [Circular],
                            },
                          ],
                          "enclosed": Array [],
                          "parentScope": [Circular],
                        },
                        [Circular],
                        Object {
                          "accessed": Array [],
                          "childScopes": Array [],
                          "enclosed": Array [],
                          "parentScope": [Circular],
                        },
                        Object {
                          "accessed": Array [],
                          "childScopes": Array [],
                          "enclosed": Array [],
                          "parentScope": [Circular],
                        },
                      ],
                      "enclosed": Array [],
                      "parentScope": Object {
                        "accessed": Array [],
                        "childScopes": Array [
                          [Circular],
                        ],
                        "enclosed": Array [],
                        "parentScope": undefined,
                      },
                    },
                  },
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
                    },
                  ],
                },
              ],
              "catch": Array [],
              "retry": Array [],
              "source": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "result",
              "type": "object",
            },
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
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "checksPassed",
              "type": "unknown",
            },
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
              "scope": Object {
                "accessed": Array [],
                "childScopes": Array [],
                "enclosed": Array [],
                "parentScope": Object {
                  "accessed": Array [
                    "result",
                    "checksPassed",
                  ],
                  "childScopes": Array [
                    Object {
                      "accessed": Array [],
                      "childScopes": Array [
                        Object {
                          "accessed": Array [],
                          "childScopes": Array [],
                          "enclosed": Array [],
                          "parentScope": [Circular],
                        },
                      ],
                      "enclosed": Array [],
                      "parentScope": [Circular],
                    },
                    Object {
                      "accessed": Array [],
                      "childScopes": Array [
                        Object {
                          "accessed": Array [],
                          "childScopes": Array [],
                          "enclosed": Array [],
                          "parentScope": [Circular],
                        },
                      ],
                      "enclosed": Array [],
                      "parentScope": [Circular],
                    },
                    Object {
                      "accessed": Array [],
                      "childScopes": Array [],
                      "enclosed": Array [],
                      "parentScope": [Circular],
                    },
                    [Circular],
                  ],
                  "enclosed": Array [],
                  "parentScope": Object {
                    "accessed": Array [],
                    "childScopes": Array [
                      [Circular],
                    ],
                    "enclosed": Array [],
                    "parentScope": undefined,
                  },
                },
              },
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
                },
              ],
            },
            "source": "if (checksPassed) {
          //no-op update risk profile
          await asl.nativeEventBridgePutEvents({
            Entries: [
              {
                Detail: asl.states.jsonToString(result),
                DetailType: \\"AccountApproved\\",
                EventBusName: \\"eventbusname\\",
                Source: \\"com.aws.kyc\\"
              }
            ]
          });
        } else {
          await asl.nativeEventBridgePutEvents({
            Entries: [
              {
                Detail: asl.states.jsonToString(result),
                DetailType: \\"AccountDeclined\\",
                EventBusName: \\"eventbusname\\",
                Source: \\"com.aws.kyc\\"
              }
            ]
          });
        }",
            "then": Object {
              "_syntaxKind": "function",
              "scope": Object {
                "accessed": Array [],
                "childScopes": Array [],
                "enclosed": Array [],
                "parentScope": Object {
                  "accessed": Array [
                    "result",
                    "checksPassed",
                  ],
                  "childScopes": Array [
                    Object {
                      "accessed": Array [],
                      "childScopes": Array [
                        Object {
                          "accessed": Array [],
                          "childScopes": Array [],
                          "enclosed": Array [],
                          "parentScope": [Circular],
                        },
                      ],
                      "enclosed": Array [],
                      "parentScope": [Circular],
                    },
                    Object {
                      "accessed": Array [],
                      "childScopes": Array [
                        Object {
                          "accessed": Array [],
                          "childScopes": Array [],
                          "enclosed": Array [],
                          "parentScope": [Circular],
                        },
                      ],
                      "enclosed": Array [],
                      "parentScope": [Circular],
                    },
                    [Circular],
                    Object {
                      "accessed": Array [],
                      "childScopes": Array [],
                      "enclosed": Array [],
                      "parentScope": [Circular],
                    },
                  ],
                  "enclosed": Array [],
                  "parentScope": Object {
                    "accessed": Array [],
                    "childScopes": Array [
                      [Circular],
                    ],
                    "enclosed": Array [],
                    "parentScope": undefined,
                  },
                },
              },
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
        "StartAt": "Assign result",
        "States": Object {
          "Assign checksPassed": Object {
            "Comment": "checksPassed = true",
            "Next": "If",
            "Result": true,
            "ResultPath": "$.checksPassed",
            "Type": "Pass",
          },
          "Assign result": Object {
            "Branches": Array [
              Object {
                "StartAt": "Task",
                "States": Object {
                  "Task": Object {
                    "Catch": undefined,
                    "Comment": "performIdentifyCheck()",
                    "End": true,
                    "HeartbeatSeconds": undefined,
                    "Resource": "arn:aws:lambda:us-east-1:123123123123:function:my-program-performIdentifyCheck",
                    "Retry": undefined,
                    "TimeoutSeconds": undefined,
                    "Type": "Task",
                  },
                },
              },
              Object {
                "StartAt": "Pass",
                "States": Object {
                  "Pass": Object {
                    "Next": "Succeed",
                    "Result": Object {
                      "agencyChecked": true,
                    },
                    "Type": "Pass",
                  },
                  "Succeed": Object {
                    "Comment": undefined,
                    "Type": "Succeed",
                  },
                },
              },
            ],
            "Catch": Array [],
            "Comment": undefined,
            "Next": "Task_1",
            "ResultPath": "$.result",
            "Retry": Array [],
            "Type": "Parallel",
          },
          "If": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "Task_2",
                "Variable": "checksPassed",
              },
            ],
            "Comment": "if (checksPassed) {
          //no-op update risk profile
          await asl.nativeEventBridgePutEvents({
            Entries: [
              {
                Detail: asl.states.jsonToString(result),
                DetailType: \\"AccountApproved\\",
                EventBusName: \\"eventbusname\\",
                Source: \\"com.aws.kyc\\"
              }
            ]
          });
        } else {
          await asl.nativeEventBridgePutEvents({
            Entries: [
              {
                Detail: asl.states.jsonToString(result),
                DetailType: \\"AccountDeclined\\",
                EventBusName: \\"eventbusname\\",
                Source: \\"com.aws.kyc\\"
              }
            ]
          });
        }",
            "Default": "Task_2",
            "Type": "Choice",
          },
          "Task_1": Object {
            "Catch": undefined,
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Assign checksPassed",
            "Parameters": Object {
              "Entries": Array [
                Object {
                  "Detail": "States.JsonToString($.result)",
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
          "Task_2": Object {
            "Catch": undefined,
            "Comment": undefined,
            "End": true,
            "HeartbeatSeconds": undefined,
            "Parameters": Object {
              "Entries": Array [
                Object {
                  "Detail": "States.JsonToString($.result)",
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
