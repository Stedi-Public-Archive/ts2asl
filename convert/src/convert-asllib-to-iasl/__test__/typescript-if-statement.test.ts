import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting if statement to iasl", () => {
  it("then sdk integrations get converted to map states", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.typescriptIf({
      condition: () => password === 'pwd',
      then: () => { asl.fail({
          error: "Error",
          cause: "wrong password",
          comment: "throw new Error('wrong password');"
      }) },
      comment: "if (password === 'pwd') throw new Error('wrong password');"
  })`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "if",
            "condition": Object {
              "_syntaxKind": "binary-expression",
              "lhs": Object {
                "_syntaxKind": "identifier",
                "identifier": "password",
                "type": "unknown",
              },
              "operator": "eq",
              "rhs": Object {
                "_syntaxKind": "literal",
                "type": "string",
                "value": "pwd",
              },
            },
            "source": "if (password === 'pwd') throw new Error('wrong password');",
            "then": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "asl-fail-state",
                  "cause": "wrong password",
                  "error": "Error",
                  "source": "throw new Error('wrong password');",
                },
              ],
            },
          },
        ],
      }
    `);
  });
});
