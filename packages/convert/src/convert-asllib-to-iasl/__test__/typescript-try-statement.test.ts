import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting try statement to iasl", () => {
  it("then catch block with arg gets converted to catch configuration", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.typescriptTry({
      try: () => { asl.task({ resource: "urn" }); },
      catch: [
          {
            errorEquals: [
                  \\"States.ALL\\"
              ],
              block: (arg) => { asl.task({ resource: "urn", parameters: {error: arg.Cause} }); }
          }
      ]
  })`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "try",
            "catch": Array [
              Object {
                "block": Object {
                  "_syntaxKind": "function",
                  "inputArgumentName": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "arg",
                    "type": "object",
                  },
                  "statements": Array [
                    Object {
                      "_syntaxKind": "asl-task-state",
                      "parameters": Object {
                        "_syntaxKind": "literal-object",
                        "properties": Object {
                          "error": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "arg.Cause",
                            "type": "unknown",
                          },
                        },
                      },
                      "resource": "urn",
                    },
                  ],
                },
                "errorEquals": Array [
                  "States.ALL\\"",
                ],
              },
            ],
            "try": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "asl-task-state",
                  "resource": "urn",
                },
              ],
            },
          },
        ],
      }
    `);
  });

  it("then catch block without arg gets converted to catch configuration", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.typescriptTry({
      try: () => { asl.task({ resource: "urn" }); },
      catch: [
          {
            errorEquals: [
                  \\"States.ALL\\"
              ],
              block: () => { asl.task({ resource: "urn" } }
          }
      ]
  })`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "try",
            "catch": Array [
              Object {
                "block": Object {
                  "_syntaxKind": "function",
                  "statements": Array [
                    Object {
                      "_syntaxKind": "asl-task-state",
                      "resource": "urn",
                    },
                  ],
                },
                "errorEquals": Array [
                  "States.ALL\\"",
                ],
              },
            ],
            "try": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "asl-task-state",
                  "resource": "urn",
                },
              ],
            },
          },
        ],
      }
    `);
  });
});
