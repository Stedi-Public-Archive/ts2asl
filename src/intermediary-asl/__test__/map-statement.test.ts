import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting map statement to iasl", () => {
  it("then native integrations get converted to map states", () => {
    const code = `const aaaa = asl.map({ 
        items: something.list[0].here,
        iterator: (localName) => {
          return;
        };
    });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "_syntaxKind": "assignment",
          "expression": Object {
            "_syntaxKind": "asl-map-state",
            "catch": Array [],
            "comment": undefined,
            "items": Object {
              "_syntaxKind": "identifier",
              "identifier": "something.list[0].here",
            },
            "iterator": Object {
              "expressions": Array [
                Object {
                  "_syntaxKind": "return",
                },
              ],
            },
            "retry": Array [],
          },
          "name": Object {
            "_syntaxKind": "identifier",
            "identifier": "aaaa",
          },
        },
      ]
    `);
  });
});
