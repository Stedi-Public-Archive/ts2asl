import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting binary expressions to iasl", () => {
  it("then identifier becomes truthy check", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.choice({ 
        choices: [
          { condition: a, block: () => { asl.pass({ result: "abc"}); } }
        ],
        default: () => {
          return;
        };
    });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "asl-choice-state",
            "choices": Array [
              Object {
                "block": Object {
                  "_syntaxKind": "function",
                  "statements": Array [
                    Object {
                      "_syntaxKind": "asl-pass-state",
                    },
                  ],
                },
                "condition": Object {
                  "_syntaxKind": "binary-expression",
                  "operator": "is-truthy",
                  "rhs": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "a",
                    "type": "unknown",
                  },
                },
              },
            ],
            "default": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "return",
                  "stateName": "Return",
                },
              ],
            },
          },
        ],
      }
    `);
  });

  it("then !(identifier) access becomes !truthy check", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.choice({ 
        choices: [
          { condition: !a, block: () => { asl.pass({ result: "abc"}); } }
        ],
        default: () => {
          return;
        };
    });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "asl-choice-state",
            "choices": Array [
              Object {
                "block": Object {
                  "_syntaxKind": "function",
                  "statements": Array [
                    Object {
                      "_syntaxKind": "asl-pass-state",
                    },
                  ],
                },
                "condition": Object {
                  "_syntaxKind": "binary-expression",
                  "operator": "not",
                  "rhs": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "a",
                    "type": "unknown",
                  },
                },
              },
            ],
            "default": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "return",
                  "stateName": "Return",
                },
              ],
            },
          },
        ],
      }
    `);
  });

  it("then !!(identifier) access becomes truthy check", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.choice({ 
        choices: [
          { condition: !!a, block: () => { asl.pass({ result: "abc"}); } }
        ],
        default: () => {
          return;
        };
    });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "asl-choice-state",
            "choices": Array [
              Object {
                "block": Object {
                  "_syntaxKind": "function",
                  "statements": Array [
                    Object {
                      "_syntaxKind": "asl-pass-state",
                    },
                  ],
                },
                "condition": Object {
                  "_syntaxKind": "binary-expression",
                  "operator": "not",
                  "rhs": Object {
                    "_syntaxKind": "binary-expression",
                    "operator": "not",
                    "rhs": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "a",
                      "type": "unknown",
                    },
                  },
                },
              },
            ],
            "default": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "return",
                  "stateName": "Return",
                },
              ],
            },
          },
        ],
      }
    `);
  });
});
