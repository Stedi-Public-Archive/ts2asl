import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting jsonpath", () => {
  it("filter gets translated to iasl", () => {
    const code = `
    import * as asl from 'asl-lib';
    
    const items = asl.jsonPathFilter(items, (x) => x.valid === true);
    `;
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
              "_syntaxKind": "identifier",
              "filterExpression": Object {
                "argument": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "x",
                  "type": "unknown",
                },
                "expression": Object {
                  "_syntaxKind": "binary-expression",
                  "lhs": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "x.valid",
                    "type": "unknown",
                  },
                  "operator": "eq",
                  "rhs": Object {
                    "_syntaxKind": "literal",
                    "type": "boolean",
                    "value": true,
                  },
                },
              },
              "identifier": "items",
              "type": "unknown",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "items",
              "type": "unknown",
            },
            "source": "items = asl.jsonPathFilter(items, (x) => x.valid === true)",
            "stateName": "Assign items",
          },
        ],
      }
    `);
  });

  it("slice gets translated to iasl", () => {
    const code = `
    import * as asl from 'asl-lib';
    
    const items = asl.jsonPathSlice(items, 1, 2, 3);
    `;
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
              "_syntaxKind": "identifier",
              "identifier": "items",
              "sliceExpression": Object {
                "end": 2,
                "start": 1,
                "step": 3,
              },
              "type": "unknown",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "items",
              "type": "unknown",
            },
            "source": "items = asl.jsonPathSlice(items, 1, 2, 3)",
            "stateName": "Assign items",
          },
        ],
      }
    `);
  });

  it("expression gets translated to iasl", () => {
    const code = `
    import * as asl from 'asl-lib';
    
    const items = asl.jsonPathExpression(items, "[*][*]");
    `;
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
              "_syntaxKind": "identifier",
              "identifier": "items",
              "jsonPathExpression": "[*][*]",
              "type": "unknown",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "items",
              "type": "unknown",
            },
            "source": "items = asl.jsonPathExpression(items, \\"[*][*]\\")",
            "stateName": "Assign items",
          },
        ],
      }
    `);
  });
});
