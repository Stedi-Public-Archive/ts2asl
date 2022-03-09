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
              name: \\"5: Assign numbers\\",
              parameters: () => [0, 1, 2, 3],
              comment: \\"numbers = [0, 1, 2, 3]\\"
          });
          const letters = asl.pass({
              name: \\"6: Assign letters\\",
              parameters: () => [\\"a\\", \\"b\\", \\"c\\", \\"d\\"],
              comment: \\"letters = [\\\\\\"a\\\\\\", \\\\\\"b\\\\\\", \\\\\\"c\\\\\\", \\\\\\"d\\\\\\"]\\"
          });
          const global = asl.pass({
              name: \\"7: Assign global\\",
              parameters: () => \\"prefix\\",
              comment: \\"global = \\\\\\"prefix\\\\\\"\\"
          });
          const outer = asl.pass({
              name: \\"8: Assign outer\\",
              parameters: () => ({ middle: { inner: 3 } }),
              comment: \\"outer = { middle: { inner: 3 } }\\"
          });
          asl.map({
              name: \\"8: For number Of numbers\\",
              items: () => numbers,
              iterator: number => {
                  asl.map({
                      name: \\"9: For letter Of letters\\",
                      items: () => letters,
                      iterator: letter => {
                          const combined = asl.pass({
                              name: \\"11: Assign combined\\",
                              parameters: () => ({ number, letter, global, inner: outer.middle.inner }),
                              comment: \\"combined = { number, letter, global, inner: outer.middle.inner }\\"
                          });
                          asl.typescriptInvoke({
                              name: \\"11: doSomething(combined)\\",
                              resource: doSomething,
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
              "stateName": "5: Assign numbers",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "numbers",
              "type": "object",
            },
            "stateName": "4: Assign numbers",
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
              "stateName": "6: Assign letters",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "letters",
              "type": "object",
            },
            "stateName": "5: Assign letters",
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
              "stateName": "7: Assign global",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "global",
              "type": "unknown",
            },
            "stateName": "6: Assign global",
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
              "stateName": "8: Assign outer",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "outer",
              "type": "object",
            },
            "stateName": "7: Assign outer",
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
                          "stateName": "11: Assign combined",
                        },
                        "name": Object {
                          "_syntaxKind": "identifier",
                          "identifier": "combined",
                          "type": "object",
                        },
                        "stateName": "10: Assign combined",
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
                        "stateName": "11: doSomething(combined)",
                      },
                    ],
                  },
                  "retry": Array [],
                  "stateName": "9: For letter Of letters",
                },
              ],
            },
            "retry": Array [],
            "stateName": "8: For number Of numbers",
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
          "4: Assign numbers": Object {
            "Comment": "source: numbers = [0, 1, 2, 3]",
            "Next": "5: Assign letters",
            "Result": Array [
              0,
              1,
              2,
              3,
            ],
            "ResultPath": "$.vars.numbers",
            "Type": "Pass",
          },
          "5: Assign letters": Object {
            "Comment": "source: letters = [\\"a\\", \\"b\\", \\"c\\", \\"d\\"]",
            "Next": "6: Assign global",
            "Result": Array [
              "a",
              "b",
              "c",
              "d",
            ],
            "ResultPath": "$.vars.letters",
            "Type": "Pass",
          },
          "6: Assign global": Object {
            "Comment": "source: global = \\"prefix\\"",
            "Next": "7: Assign outer",
            "Result": "prefix",
            "ResultPath": "$.vars.global",
            "Type": "Pass",
          },
          "7: Assign outer": Object {
            "Comment": "source: outer = { middle: { inner: 3 } }",
            "Next": "8: For number Of numbers",
            "Result": Object {
              "middle": Object {
                "inner": 3,
              },
            },
            "ResultPath": "$.vars.outer",
            "Type": "Pass",
          },
          "8: For number Of numbers": Object {
            "Comment": undefined,
            "End": true,
            "ItemsPath": "$.vars.numbers",
            "Iterator": Object {
              "StartAt": "9: For letter Of letters",
              "States": Object {
                "9: For letter Of letters": Object {
                  "Comment": undefined,
                  "End": true,
                  "ItemsPath": "$.vars.letters",
                  "Iterator": Object {
                    "StartAt": "10: Assign combined",
                    "States": Object {
                      "10: Assign combined": Object {
                        "Comment": "source: combined = { number, letter, global, inner: ou ...",
                        "Next": "11: doSomething(combined)",
                        "Parameters": Object {
                          "global.$": "$.vars.global",
                          "inner.$": "$.vars.outer.middle.inner",
                          "letter.$": "$.vars.letter",
                          "number.$": "$.vars.number",
                        },
                        "ResultPath": "$.vars.combined",
                        "Type": "Pass",
                      },
                      "11: doSomething(combined)": Object {
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
            "Next": "4: Assign numbers",
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
