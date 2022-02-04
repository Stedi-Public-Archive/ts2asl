import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting if statement to iasl", () => {
  it("then native integrations get converted to map states", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.typescriptIf({
      when: () => password === 'pwd',
      then: () => { asl.fail({
          error: "Error",
          cause: "wrong password",
          comment: "throw new Error('wrong password');"
      }) },
      comment: "if (password === 'pwd') throw new Error('wrong password');"
  })`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "_syntaxKind": "if",
          "comment": "if (password === 'pwd') throw new Error('wrong password');",
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
          "then": Object {
            "statements": Array [
              Object {
                "_syntaxKind": "asl-fail-state",
                "cause": "wrong password",
                "comment": "throw new Error('wrong password');",
                "error": "Error",
              },
            ],
          },
        },
      ]
    `);
  });
});
