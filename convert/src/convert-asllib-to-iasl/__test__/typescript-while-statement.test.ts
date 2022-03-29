import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting while look to iasl", () => {
  it("then sdk integrations get converted", () => {
    const code = `
    asl.typescriptWhile({
      condition: () => code === 'continue',
      block: () => { asl.wait({ seconds: 1 }); asl.wait({ seconds: 2 }); }
  })`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "while",
            "condition": Object {
              "_syntaxKind": "binary-expression",
              "lhs": Object {
                "_syntaxKind": "identifier",
                "identifier": "code",
                "type": "unknown",
              },
              "operator": "eq",
              "rhs": Object {
                "_syntaxKind": "literal",
                "type": "string",
                "value": "continue",
              },
            },
            "while": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "asl-wait-state",
                  "seconds": Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 1,
                  },
                },
                Object {
                  "_syntaxKind": "asl-wait-state",
                  "seconds": Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 2,
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
