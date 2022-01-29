import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting choice statement to iasl", () => {
  it("then native integrations get converted to map states", () => {
    const code = `asl.choice({ 
        choices: [
          { when: a !== "hello", then: () => { ASL.fail({ error: "MyError", cause:"bad luck"}); } }
        ],
        default: () => {
          ASL.succeed();
        };
    });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "_syntaxKind": "asl-choice-state",
          "choices": Array [
            Object {
              "then": Object {
                "expressions": Array [
                  Object {
                    "_syntaxKind": "asl-fail-state",
                    "cause": "bad luck",
                    "error": "MyError",
                  },
                ],
              },
              "when": Object {
                "_syntaxKind": "binary",
                "operator": "not",
                "rhs": Object {
                  "_syntaxKind": "binary",
                  "lhs": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "a",
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
            "expressions": Array [
              Object {
                "_syntaxKind": "asl-succeed-state",
              },
            ],
          },
        },
      ]
    `);
  });
});
