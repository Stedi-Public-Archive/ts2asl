import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting choice statement to iasl", () => {
  it("then native integrations get converted to map states", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.typescriptTry({
      try: () => { asl.task({ resource: "urn" }); },
      catch: [
          {
              errorFilter: [
                  \\"States.All\\"
              ],
              block: () => { asl.task({ resource: "urn" } }
          }
      ]
  })`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "_syntaxKind": "try",
          "catch": Array [
            Object {
              "block": Object {
                "statements": Array [
                  Object {
                    "_syntaxKind": "asl-task-state",
                    "catch": Array [],
                    "resource": "urn",
                    "retry": Array [],
                  },
                ],
              },
              "errorFilter": Array [
                "States.All\\"",
              ],
            },
          ],
          "retry": Array [],
          "try": Object {
            "statements": Array [
              Object {
                "_syntaxKind": "asl-task-state",
                "catch": Array [],
                "resource": "urn",
                "retry": Array [],
              },
            ],
          },
        },
      ]
    `);
  });
});
