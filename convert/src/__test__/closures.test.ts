import { runConvertForTest } from "./utility";

describe("when converting closures", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("closures");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "import * as asl from \\"@ts2asl/asl-lib\\"

      export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
          const numbers = asl.pass({
              parameters: () => [0, 1, 2, 3],
              comment: \\"numbers = [0, 1, 2, 3]\\"
          });
          const letters = asl.pass({
              parameters: () => [\\"a\\", \\"b\\", \\"c\\", \\"d\\"],
              comment: \\"letters = [\\\\\\"a\\\\\\", \\\\\\"b\\\\\\", \\\\\\"c\\\\\\", \\\\\\"d\\\\\\"]\\"
          });
          const global = asl.pass({
              parameters: () => \\"prefix\\",
              comment: \\"global = \\\\\\"prefix\\\\\\"\\"
          });
          const outer = asl.pass({
              parameters: () => ({ middle: { inner: 3 } }),
              comment: \\"outer = { middle: { inner: 3 } }\\"
          });
          asl.map({
              name: \\"For number Of numbers\\",
              items: () => numbers,
              iterator: number => {
                  asl.map({
                      name: \\"For letter Of letters\\",
                      items: () => letters,
                      iterator: letter => {
                          const combined = asl.pass({
                              parameters: () => ({ number, letter, global, inner: outer.middle.inner }),
                              comment: \\"combined = { number, letter, global, inner: outer.middle.inner }\\"
                          });
                          asl.typescriptInvoke({
                              name: \\"doSomething(combined)\\",
                              target: doSomething,
                              parameters: () => combined,
                              comment: \\"doSomething(combined)\\"
                          });
                      }
                  })
              }
          })
      });



      export const doSomething = asl.deploy.asLambda(x => { })"
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
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal-array",
                "elements": Array [
                  Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 0,
                  },
                  Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 1,
                  },
                  Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 2,
                  },
                  Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 3,
                  },
                ],
              },
              "source": "numbers = [0, 1, 2, 3]",
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "numbers",
              "type": "object",
            },
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal-array",
                "elements": Array [
                  Object {
                    "_syntaxKind": "literal",
                    "type": "string",
                    "value": "a",
                  },
                  Object {
                    "_syntaxKind": "literal",
                    "type": "string",
                    "value": "b",
                  },
                  Object {
                    "_syntaxKind": "literal",
                    "type": "string",
                    "value": "c",
                  },
                  Object {
                    "_syntaxKind": "literal",
                    "type": "string",
                    "value": "d",
                  },
                ],
              },
              "source": "letters = [\\"a\\", \\"b\\", \\"c\\", \\"d\\"]",
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "letters",
              "type": "object",
            },
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal",
                "type": "string",
                "value": "prefix",
              },
              "source": "global = \\"prefix\\"",
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "global",
              "type": "unknown",
            },
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal-object",
                "properties": Object {
                  "middle": Object {
                    "_syntaxKind": "literal-object",
                    "properties": Object {
                      "inner": Object {
                        "_syntaxKind": "literal",
                        "type": "numeric",
                        "value": 3,
                      },
                    },
                  },
                },
              },
              "source": "outer = { middle: { inner: 3 } }",
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "outer",
              "type": "object",
            },
          },
          Object {
            "_syntaxKind": "asl-map-state",
            "catch": Array [],
            "items": Object {
              "_syntaxKind": "identifier",
              "identifier": "numbers",
              "type": "object",
            },
            "iterator": Object {
              "_syntaxKind": "function",
              "inputArgumentName": Object {
                "_syntaxKind": "identifier",
                "identifier": "number",
              },
              "statements": Array [
                Object {
                  "_syntaxKind": "asl-map-state",
                  "catch": Array [],
                  "items": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "letters",
                    "type": "object",
                  },
                  "iterator": Object {
                    "_syntaxKind": "function",
                    "inputArgumentName": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "letter",
                    },
                    "statements": Array [
                      Object {
                        "_syntaxKind": "variable-assignment",
                        "expression": Object {
                          "_syntaxKind": "asl-pass-state",
                          "parameters": Object {
                            "_syntaxKind": "literal-object",
                            "properties": Object {
                              "global": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "global",
                                "type": "string",
                              },
                              "inner": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "outer.middle.inner",
                                "type": "numeric",
                              },
                              "letter": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "letter",
                                "type": "string",
                              },
                              "number": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "number",
                                "type": "numeric",
                              },
                            },
                          },
                          "source": "combined = { number, letter, global, inner: outer.middle.inner }",
                          "stateName": undefined,
                        },
                        "name": Object {
                          "_syntaxKind": "identifier",
                          "identifier": "combined",
                          "type": "object",
                        },
                      },
                      Object {
                        "_syntaxKind": "asl-task-state",
                        "parameters": Object {
                          "_syntaxKind": "identifier",
                          "identifier": "combined",
                          "type": "object",
                        },
                        "resource": "typescript:doSomething",
                        "source": "doSomething(combined)",
                        "stateName": "doSomething(combined)",
                      },
                    ],
                  },
                  "retry": Array [],
                  "stateName": "For letter Of letters",
                },
              ],
            },
            "retry": Array [],
            "stateName": "For number Of numbers",
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
          "Assign Global": Object {
            "Comment": "source: global = \\"prefix\\"",
            "Next": "Assign Outer",
            "Result": "prefix",
            "ResultPath": "$.vars.global",
            "Type": "Pass",
          },
          "Assign Letters": Object {
            "Comment": "source: letters = [\\"a\\", \\"b\\", \\"c\\", \\"d\\"]",
            "Next": "Assign Global",
            "Result": Array [
              "a",
              "b",
              "c",
              "d",
            ],
            "ResultPath": "$.vars.letters",
            "Type": "Pass",
          },
          "Assign Numbers": Object {
            "Comment": "source: numbers = [0, 1, 2, 3]",
            "Next": "Assign Letters",
            "Result": Array [
              0,
              1,
              2,
              3,
            ],
            "ResultPath": "$.vars.numbers",
            "Type": "Pass",
          },
          "Assign Outer": Object {
            "Comment": "source: outer = { middle: { inner: 3 } }",
            "Next": "For number Of numbers",
            "Result": Object {
              "middle": Object {
                "inner": 3,
              },
            },
            "ResultPath": "$.vars.outer",
            "Type": "Pass",
          },
          "For number Of numbers": Object {
            "Comment": undefined,
            "End": true,
            "ItemsPath": "$.vars.numbers",
            "Iterator": Object {
              "StartAt": "For letter Of letters",
              "States": Object {
                "For letter Of letters": Object {
                  "Comment": undefined,
                  "End": true,
                  "ItemsPath": "$.vars.letters",
                  "Iterator": Object {
                    "StartAt": "Assign Combined",
                    "States": Object {
                      "Assign Combined": Object {
                        "Comment": "source: combined = { number, letter, global, inner: ou ...",
                        "Next": "doSomething(combined)",
                        "Parameters": Object {
                          "global.$": "$.vars.global",
                          "inner.$": "$.vars.outer.middle.inner",
                          "letter.$": "$.vars.letter",
                          "number.$": "$.vars.number",
                        },
                        "ResultPath": "$.vars.combined",
                        "Type": "Pass",
                      },
                      "doSomething(combined)": Object {
                        "Catch": undefined,
                        "Comment": "source: doSomething(combined)",
                        "End": true,
                        "HeartbeatSeconds": undefined,
                        "InputPath": "$.vars.combined",
                        "Resource": "typescript:doSomething",
                        "Retry": undefined,
                        "TimeoutSeconds": undefined,
                        "Type": "Task",
                      },
                    },
                  },
                  "MaxConcurrency": undefined,
                  "Parameters": Object {
                    "vars": Object {
                      "global.$": "$.vars.global",
                      "letter.$": "$$.Map.Item.Value",
                      "letters.$": "$.vars.letters",
                      "number.$": "$.vars.number",
                      "outer.$": "$.vars.outer",
                    },
                  },
                  "ResultPath": "$.lastResult",
                  "Type": "Map",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Parameters": Object {
              "vars": Object {
                "global.$": "$.vars.global",
                "letters.$": "$.vars.letters",
                "number.$": "$$.Map.Item.Value",
                "numbers.$": "$.vars.numbers",
                "outer.$": "$.vars.outer",
              },
            },
            "ResultPath": "$.lastResult",
            "Type": "Map",
          },
          "Initialize": Object {
            "Next": "Assign Numbers",
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
