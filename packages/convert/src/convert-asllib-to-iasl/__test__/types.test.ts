import { createTransformers } from "../../convert-ts-to-asllib/transformers";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";
import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting choice statement to iasl", () => {
  it("then sdk integrations get converted to map states", () => {
    const code = `
    import * as asl from "@ts2asl/asl-lib";
    
    const xxx = "hello";
    if (xxx === "anotherString") {
      const num = 42;
      if (num === 12) {
        
      }
    }
    `;
    const transformed = testTransform(code);
    const result = testConvertToIntermediaryAst(transformed, "input", {
      lineNumbersInStateNames: true
    });
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": Object {
          "_syntaxKind": "identifier",
          "identifier": "input",
          "type": "object",
        },
        "statements": Array [
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "literal",
              "type": "string",
              "value": "hello",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "xxx",
              "type": "string",
            },
            "source": "xxx = \\"hello\\"",
            "stateName": "2: Assign xxx",
          },
          Object {
            "_syntaxKind": "if",
            "condition": Object {
              "_syntaxKind": "binary-expression",
              "lhs": Object {
                "_syntaxKind": "identifier",
                "identifier": "xxx",
                "type": "string",
              },
              "operator": "eq",
              "rhs": Object {
                "_syntaxKind": "literal",
                "type": "string",
                "value": "anotherString",
              },
            },
            "source": "if (xxx === \\"anotherString\\") {
            const num = 42;
            if (num === 12) {
              
            }
          }",
            "stateName": "If (xxx === \\"anotherString\\")",
            "then": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "variable-assignment",
                  "expression": Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 42,
                  },
                  "name": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "num",
                    "type": "numeric",
                  },
                  "source": "num = 42",
                  "stateName": "7: Assign num",
                },
                Object {
                  "_syntaxKind": "if",
                  "condition": Object {
                    "_syntaxKind": "binary-expression",
                    "lhs": Object {
                      "_syntaxKind": "identifier",
                      "identifier": "num",
                      "type": "numeric",
                    },
                    "operator": "eq",
                    "rhs": Object {
                      "_syntaxKind": "literal",
                      "type": "numeric",
                      "value": 12,
                    },
                  },
                  "source": "if (num === 12) {
              
            }",
                  "stateName": "If (num === 12)",
                  "then": Object {
                    "_syntaxKind": "function",
                    "statements": Array [],
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
