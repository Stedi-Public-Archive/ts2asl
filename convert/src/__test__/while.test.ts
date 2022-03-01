import { runConvertForTest } from "./utility";

describe("when converting example", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("while");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "import * as asl from \\"@ts2asl/asl-lib\\"
      interface Result {
        Authorized: boolean;
      }

      export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
          let result: Result = asl.task({ resource: \\"check-password\\", parameters: {} });
          asl.typescriptWhile({
              name: \\"While (true)\\",
              condition: () => true,
              block: async () => {
                  asl.typescriptIf({
                      name: \\"If (result.Authorized)\\",
                      condition: () => result.Authorized,
                      then: async () => {
                          break;
                      },
                      comment: \\"if (result.Authorized) {\\\\n      break;\\\\n    }\\"
                  })
                  asl.wait({ seconds: 1 });
                  result = asl.task({ resource: \\"check-password\\", parameters: {} });
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
              "stateName": undefined,
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
            "stateName": "While (true)",
            "while": Object {
              "_syntaxKind": "function",
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
                  "stateName": "If (result.Authorized)",
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
                    "stateName": undefined,
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
        "StartAt": "Initialize",
        "States": Object {
          "Assign Result": Object {
            "Catch": Array [],
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "While",
            "Parameters": Object {},
            "Resource": "check-password",
            "ResultPath": "$.vars.result",
            "Retry": Array [],
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Initialize": Object {
            "Next": "Assign Result",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "While": Object {
            "Branches": Array [
              Object {
                "StartAt": "_WhileCondition",
                "States": Object {
                  "Assign Result_1": Object {
                    "Catch": Array [],
                    "Comment": undefined,
                    "HeartbeatSeconds": undefined,
                    "Next": "_WhileExit",
                    "Parameters": Object {},
                    "Resource": "check-password",
                    "ResultPath": "$.vars.result",
                    "Retry": Array [],
                    "TimeoutSeconds": undefined,
                    "Type": "Task",
                  },
                  "If (result.Authorized)": Object {
                    "Choices": Array [
                      Object {
                        "IsPresent": true,
                        "Next": "Succeed",
                        "Variable": "$.vars.result.Authorized",
                      },
                    ],
                    "Comment": "source: if (result.Authorized) { break; }",
                    "Default": "Wait",
                    "Type": "Choice",
                  },
                  "Succeed": Object {
                    "Comment": undefined,
                    "Type": "Succeed",
                  },
                  "Wait": Object {
                    "Comment": undefined,
                    "Next": "Assign Result_1",
                    "Seconds": 1,
                    "Type": "Wait",
                  },
                  "_WhileCondition": Object {
                    "Choices": Array [
                      Object {
                        "IsNull": false,
                        "Next": "If (result.Authorized)",
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
            "Parameters": Object {
              "vars": Object {
                "result.$": "$.vars.result",
              },
            },
            "Type": "Parallel",
          },
        },
      }
    `);
  });
});
