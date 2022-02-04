import { transformCode } from "../../convert-ts-to-asllib";
import { transformers } from "../../convert-ts-to-asllib/transformers";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";
import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting choice statement to iasl", () => {
  it("then native integrations get converted to map states", () => {
    const code = `
    import * as asl from "asl-lib";
    
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
      Array [
        Object {
          "_syntaxKind": "variable-assignment",
          "expression": Object {
            "_syntaxKind": "asl-pass-state",
            "comment": "xxx = \\"hello\\"",
            "parameters": Object {
              "_syntaxKind": "literal",
              "type": "string",
              "value": "hello",
            },
          },
          "name": Object {
            "_syntaxKind": "identifier",
            "identifier": "xxx",
            "type": "string",
          },
        },
        Object {
          "_syntaxKind": "if",
          "then": Object {
            "statements": Array [
              Object {
                "_syntaxKind": "variable-assignment",
                "expression": Object {
                  "_syntaxKind": "asl-pass-state",
                  "comment": "num = 42",
                  "parameters": Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 42,
                  },
                },
                "name": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "num",
                  "type": "numeric",
                },
              },
              Object {
                "_syntaxKind": "if",
                "comment": "if (num === 12) {
              
            }",
                "then": Object {
                  "statements": Array [],
                },
              },
            ],
          },
        },
      ]
    `);
  });
});
