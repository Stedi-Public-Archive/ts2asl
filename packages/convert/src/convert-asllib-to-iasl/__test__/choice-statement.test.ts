import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting choice statement to iasl", () => {
  it("then sdk integrations get converted to map states", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.choice({ 
        choices: [
          { condition: a !== "hello", block: () => { ASL.fail({ error: "MyError", cause:"bad luck"}); } }
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
                      "_syntaxKind": "asl-fail-state",
                      "cause": "bad luck",
                      "error": "MyError",
                    },
                  ],
                },
                "condition": Object {
                  "_syntaxKind": "binary-expression",
                  "operator": "not",
                  "rhs": Object {
                    "_syntaxKind": "binary-expression",
                    "lhs": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "a",
                      "type": "unknown",
                    },
                    "operator": "eq",
                    "rhs": Object {
                      "_syntaxKind": "literal",
                      "type": "string",
                      "value": "hello",
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
                  "expression": Object {
                    "_syntaxKind": "literal",
                    "type": "null",
                    "value": undefined,
                  },
                },
              ],
            },
          },
        ],
      }
    `);
  });
});
