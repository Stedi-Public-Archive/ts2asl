import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting choice statement to iasl", () => {
  it("then native integrations get converted to map states", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.typescriptTry({
      try: () => { asl.task({ resource: "urn" }); },
      catch: [
          {
            errorEquals: [
                  \\"States.All\\"
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
                  "States.All\\"",
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
