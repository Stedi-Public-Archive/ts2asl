import { runConvertForTest } from "./utility";

describe("when converting parallel", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("parallel");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "import * as asl from \\"@ts2asl/asl-lib\\";

      export const worker = asl.deploy.asLambda((input: { something: string }) => { return input.something + \\"else\\" });

      export const main = asl.deploy.asStateMachine(async (input: {}) =>{
          const enclosedVar1 = asl.pass({
              name: \\"Assign enclosedVar1\\",
              parameters: () => ({ something: \\"here\\" }),
              comment: \\"enclosedVar1 = { something: \\\\\\"here\\\\\\" }\\"
          });
          const enclosedVar2 = asl.pass({
              name: \\"Assign enclosedVar2\\",
              parameters: () => ({ something: \\"there\\" }),
              comment: \\"enclosedVar2 = { something: \\\\\\"there\\\\\\" }\\"
          });
          await asl.parallel({
              branches: [
                  () => {
                      await asl.typescriptInvoke({
                          name: \\"worker(enclosedVar1)\\",
                          resource: worker,
                          parameters: () => enclosedVar1,
                          comment: \\"worker(enclosedVar1)\\"
                      });
                  },
                  () => {
                      await asl.typescriptInvoke({
                          name: \\"worker(enclosedVar2)\\",
                          resource: worker,
                          parameters: () => enclosedVar2,
                          comment: \\"worker(enclosedVar2)\\"
                      });
                  }
              ],
              comment: \\"Promise.all([\\\\n    async () => {\\\\n      await worker(enclosedVar1);\\\\n    },\\\\n    async () => {\\\\n      await worker(enclosedVar2);\\\\n    },\\\\n  ])\\"
          });
      });"
    `);
  });
  it("then can be converted to iasl", async () => {
    expect(converted.iasl).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": Object {
          "_syntaxKind": "identifier",
          "identifier": "input",
        },
        "statements": Array [
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal-object",
                "properties": Object {
                  "something": Object {
                    "_syntaxKind": "literal",
                    "type": "string",
                    "value": "here",
                  },
                },
              },
              "source": "enclosedVar1 = { something: \\"here\\" }",
              "stateName": "Assign enclosedVar1",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "enclosedVar1",
              "type": "object",
            },
            "stateName": "Assign enclosedVar1",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal-object",
                "properties": Object {
                  "something": Object {
                    "_syntaxKind": "literal",
                    "type": "string",
                    "value": "there",
                  },
                },
              },
              "source": "enclosedVar2 = { something: \\"there\\" }",
              "stateName": "Assign enclosedVar2",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "enclosedVar2",
              "type": "object",
            },
            "stateName": "Assign enclosedVar2",
          },
          Object {
            "_syntaxKind": "asl-parallel-state",
            "branches": Array [
              Object {
                "_syntaxKind": "function",
                "statements": Array [
                  Object {
                    "_syntaxKind": "asl-task-state",
                    "parameters": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "enclosedVar1",
                      "type": "object",
                    },
                    "resource": "lambda:worker",
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
                    "source": "worker(enclosedVar1)",
                    "stateName": "worker(enclosedVar1)",
                  },
                ],
              },
              Object {
                "_syntaxKind": "function",
                "statements": Array [
                  Object {
                    "_syntaxKind": "asl-task-state",
                    "parameters": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "enclosedVar2",
                      "type": "object",
                    },
                    "resource": "lambda:worker",
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
                    "source": "worker(enclosedVar2)",
                    "stateName": "worker(enclosedVar2)",
                  },
                ],
              },
            ],
            "source": "Promise.all([
          async () => {
            await worker(enclosedVar1);
          },
          async () => {
            await worker(enclosedVar2);
          },
        ])",
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
          "Assign enclosedVar1": Object {
            "Comment": "source: enclosedVar1 = { something: \\"here\\" }",
            "Next": "Assign enclosedVar2",
            "Result": Object {
              "something": "here",
            },
            "ResultPath": "$.vars.enclosedVar1",
            "Type": "Pass",
          },
          "Assign enclosedVar2": Object {
            "Comment": "source: enclosedVar2 = { something: \\"there\\" }",
            "Next": "Parallel",
            "Result": Object {
              "something": "there",
            },
            "ResultPath": "$.vars.enclosedVar2",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign enclosedVar1",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Parallel": Object {
            "Branches": Array [
              Object {
                "StartAt": "worker(enclosedVar1)",
                "States": Object {
                  "worker(enclosedVar1)": Object {
                    "Catch": undefined,
                    "Comment": "source: worker(enclosedVar1)",
                    "End": true,
                    "HeartbeatSeconds": undefined,
                    "InputPath": "$.vars.enclosedVar1",
                    "Resource": "lambda:worker",
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
                "StartAt": "worker(enclosedVar2)",
                "States": Object {
                  "worker(enclosedVar2)": Object {
                    "Catch": undefined,
                    "Comment": "source: worker(enclosedVar2)",
                    "End": true,
                    "HeartbeatSeconds": undefined,
                    "InputPath": "$.vars.enclosedVar2",
                    "Resource": "lambda:worker",
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
            ],
            "Catch": undefined,
            "Comment": "source: Promise.all([ async () => { await worker(enclo ...",
            "End": true,
            "Parameters": Object {
              "vars": Object {
                "enclosedVar1.$": "$.vars.enclosedVar1",
                "enclosedVar2.$": "$.vars.enclosedVar2",
              },
            },
            "Retry": undefined,
            "Type": "Parallel",
          },
        },
      }
    `);
  });
});
