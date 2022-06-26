import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting map statement to iasl", () => {
  it("then sdk integrations get converted to map states", () => {
    const code = `
    import * as asl from 'asl-lib';
    
    const aaaa = asl.map({ 
        items: something.list[0].here,
        iterator: (localName) => {
          return;
        };
    });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-map-state",
              "catch": undefined,
              "items": Object {
                "_syntaxKind": "identifier",
                "identifier": "here",
                "indexExpression": Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 0,
                },
                "lhs": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "something.list",
                  "type": "unknown",
                },
                "type": "unknown",
              },
              "iterator": Object {
                "_syntaxKind": "function",
                "inputArgumentName": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "localName",
                  "type": "object",
                },
                "statements": Array [
                  Object {
                    "_syntaxKind": "return",
                    "expression": Object {
                      "_syntaxKind": "literal",
                      "type": "null",
                      "value": undefined,
                    },
                  },
                ],
              },
              "maxConcurrency": undefined,
              "retry": undefined,
              "source": undefined,
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "aaaa",
              "type": "unknown",
            },
            "source": "aaaa = asl.map({ 
              items: something.list[0].here,
              iterator: (localName) => {
                return;
              };
          })",
            "stateName": "Assign aaaa",
          },
        ],
      }
    `);
  });
});
