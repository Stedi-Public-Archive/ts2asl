import { transformCode } from "../../convert-ts-to-asllib";
import { transformers } from "../../convert-ts-to-asllib/transformers";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";
import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting choice statement to iasl", () => {
  it("then native integrations get converted to map states", () => {
    const code = `
    import * as asl from "@ts2asl/asl-lib";
    
    const xxx = "hello";
    if (xxx === "anotherString") {
      const num = 42;
      if (num === 12) {
        
      }
    }
    `;
    const transformed = testTransform(code, transformers);
    const result = testConvertToIntermediaryAst(transformed);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal",
                "type": "string",
                "value": "hello",
              },
              "source": "xxx = \\"hello\\"",
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "xxx",
              "type": "string",
            },
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
            "stateName": "If (xxx === \\"anotherString\\")",
            "then": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "variable-assignment",
                  "expression": Object {
                    "_syntaxKind": "asl-pass-state",
                    "parameters": Object {
                      "_syntaxKind": "literal",
                      "type": "numeric",
                      "value": 42,
                    },
                    "source": "num = 42",
                    "stateName": undefined,
                  },
                  "name": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "num",
                    "type": "numeric",
                  },
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
