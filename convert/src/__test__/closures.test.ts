import { runConvertForTest } from "./utility";

describe("when converting closures", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("closures");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "
      https://asl.stedi.com/?share=eJxlUv1v2jAU_F9QftiUEPGgXdtIk0YpXSmlY4XBPhQmB1waLR8ocTa63f73PRObISoRi7t3Pt979kSJQnUVBlmsYpHEv6U7E0WJiRJKli_o6fNGYizKEg-yrBI1FuoJDjOFSKWSrPjJMt-B4_j9rVxWKs4zf5BtKoV7uVXolmW8ztysSiOtPoKOv9tuYX0GenmaykzB0O5b91vLc8lz257bCa1HIpU6sLTQWFooEGGJFQzWXg3R8NxGpJelXlaNvec6ySORHCHjaNCmkI_xFjViu0ZNNDASm--kV96QiFKZZgZ8rFB5YU2XeRrFmVy9wOaYPa6716M9HJJp5D9dY5OHabufo_0xc_bMcDzTkfsXU1H-0OPOq2IpIYosEL_KIBFptBJBVTYlN9CkgNqd_S94rLKlvt4gfW5uinzNT6C5yic5P4SnOFtjd-u7B3LAvrJ5XqOfrfQ00nKn0eH1q-GB-Zr1ZyKppL0nbsTcvu8sWiC00VksnPqf04FzglO8wRnO4VygG-ISvRBXlu_jGu_oFjQE3YFGId7jhjWDELdWM9SaO4xwjw-6Pub6xxAPtj7h-pT5T8zPQsw0P2f-M76Ag8x1kPkR-VWT1LIWRDoftUEd0AnoFMS--jA6Y1c6D_nTYl7pAtQFXepNXO-BrtCkMGRJn7Nqn2v-WMvV2lFnpBsMteZA3N-L2zuxlYEG6B9o_wFq_3WX
      import * as asl from \\"@cloudscript/asl-lib\\"

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
          asl.map({
              items: () => numbers,
              iterator: number => {
                  asl.map({
                      items: () => letters,
                      iterator: letter => {
                          const combined = asl.pass({
                              parameters: () => ({ number, letter, global }),
                              comment: \\"combined = { number, letter, global }\\"
                          });
                          asl.typescriptInvoke({
                              target: doSomething,
                              parameters: () => combined,
                              comment: \\"doSomething(combined)\\"
                          });
                      }
                  })
              }
          })
      });


      export const doSomething = asl.deploy.asLambda(x => { })
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
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "global",
              "type": "unknown",
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
                          "source": "combined = { number, letter, global }",
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
                        "resource": "arn:aws:lambda:us-east-1:123123123123:function:my-program-doSomething",
                        "source": "doSomething(combined)",
                      },
                    ],
                  },
                  "retry": Array [],
                },
              ],
            },
            "retry": Array [],
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
            "Next": "Map_1",
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
          "Initialize": Object {
            "Next": "Assign Numbers",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Map_1": Object {
            "Comment": undefined,
            "End": true,
            "ItemsPath": "$.vars.numbers",
            "Iterator": Object {
              "StartAt": "Map",
              "States": Object {
                "Map": Object {
                  "Comment": undefined,
                  "End": true,
                  "ItemsPath": "$.vars.letters",
                  "Iterator": Object {
                    "StartAt": "Assign Combined",
                    "States": Object {
                      "Assign Combined": Object {
                        "Comment": "source: combined = { number, letter, global }",
                        "Next": "Task",
                        "Parameters": Object {
                          "global.$": "$.vars.global",
                          "letter.$": "$.vars.letter",
                          "number.$": "$.vars.number",
                        },
                        "ResultPath": "$.vars.combined",
                        "Type": "Pass",
                      },
                      "Task": Object {
                        "Catch": undefined,
                        "Comment": "source: doSomething(combined)",
                        "End": true,
                        "HeartbeatSeconds": undefined,
                        "InputPath": "$.vars.combined",
                        "Resource": "arn:aws:lambda:us-east-1:123123123123:function:my-program-doSomething",
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
              },
            },
            "ResultPath": "$.lastResult",
            "Type": "Map",
          },
        },
      }
    `);
  });
});
