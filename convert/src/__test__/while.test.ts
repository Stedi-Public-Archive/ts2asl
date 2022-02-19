import { runConvertForTest } from "./utility";

describe("when converting example", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("while");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "import * as asl from \\"@cloudscript/asl-lib\\"
      interface Result {
        Authorized: boolean;
      }

      export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
          let result: Result = await asl.task({ resource: \\"check-password\\", parameters: {} });
          asl.typescriptWhile({
              condition: () => true,
              block: async () => {
                  asl.typescriptIf({
                      condition: () => result.Authorized,
                      then: async () => {
                          break;
                      },
                      comment: \\"if (result.Authorized) {\\\\n      break;\\\\n    }\\"
                  })
                  await asl.wait({ seconds: 1 });
                  result = await asl.task({ resource: \\"check-password\\", parameters: {} });
              }
          })
      });
      "
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
              "_syntaxKind": "asl-task-state",
              "catch": Array [],
              "heartbeatSeconds": undefined,
              "parameters": Object {
                "_syntaxKind": "literal-object",
                "properties": Object {},
              },
              "resource": "check-password",
              "retry": Array [],
              "source": undefined,
              "timeoutSeconds": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "result",
              "type": "object",
            },
          },
          Object {
            "_syntaxKind": "while",
            "condition": Object {
              "_syntaxKind": "literal",
              "type": "boolean",
              "value": true,
            },
            "while": Object {
              "_syntaxKind": "function",
              "scope": "ts-while2",
              "statements": Array [
                Object {
                  "_syntaxKind": "if",
                  "condition": Object {
                    "_syntaxKind": "binary-expression",
                    "operator": "is-present",
                    "rhs": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "result.Authorized",
                      "type": "boolean",
                    },
                  },
                  "source": "if (result.Authorized) {
            break;
          }",
                  "then": Object {
                    "_syntaxKind": "function",
                    "statements": Array [
                      Object {
                        "_syntaxKind": "asl-succeed-state",
                      },
                    ],
                  },
                },
                Object {
                  "_syntaxKind": "asl-wait-state",
                  "seconds": Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 1,
                  },
                },
                Object {
                  "_syntaxKind": "variable-assignment",
                  "expression": Object {
                    "_syntaxKind": "asl-task-state",
                    "catch": Array [],
                    "heartbeatSeconds": undefined,
                    "parameters": Object {
                      "_syntaxKind": "literal-object",
                      "properties": Object {},
                    },
                    "resource": "check-password",
                    "retry": Array [],
                    "source": undefined,
                    "timeoutSeconds": undefined,
                  },
                  "name": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "result",
                    "type": "object",
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
        "StartAt": "Assign result",
        "States": Object {
          "Assign result": Object {
            "Catch": Array [],
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "While",
            "Parameters": Object {},
            "Resource": "check-password",
            "ResultPath": "$.result",
            "Retry": Array [],
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "While": Object {
            "Branches": Array [
              Object {
                "Parameters": Object {
                  "result.$": "$.result",
                },
                "StartAt": "_WhileCondition",
                "States": Object {
                  "Assign result_1": Object {
                    "Catch": Array [],
                    "Comment": undefined,
                    "HeartbeatSeconds": undefined,
                    "Next": "_WhileExit",
                    "Parameters": Object {},
                    "Resource": "check-password",
                    "ResultPath": "$.result",
                    "Retry": Array [],
                    "TimeoutSeconds": undefined,
                    "Type": "Task",
                  },
                  "If": Object {
                    "Choices": Array [
                      Object {
                        "IsPresent": true,
                        "Next": "Succeed",
                        "Variable": "result.Authorized",
                      },
                    ],
                    "Comment": "if (result.Authorized) {
            break;
          }",
                    "Default": "Wait",
                    "Type": "Choice",
                  },
                  "Succeed": Object {
                    "Comment": undefined,
                    "Type": "Succeed",
                  },
                  "Wait": Object {
                    "Comment": undefined,
                    "Next": "Assign result_1",
                    "Seconds": 1,
                    "Type": "Wait",
                  },
                  "_WhileCondition": Object {
                    "Choices": Array [
                      Object {
                        "IsNull": false,
                        "Next": "If",
                        "Variable": "$",
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
