import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";
import { evalConstTransformer } from "../eval-const";
import { ifStatementTransformer } from "../../convert-ts-to-asllib/transformers/if-statement";
import { stringConversionTransformer } from "../../convert-ts-to-asllib/transformers/string-conversion";
import { throwStatementTransformer } from "../../convert-ts-to-asllib/transformers/throw-statement";
import { testConvertToIntermediaryAst } from "./test-convert";

describe("when evaluating const", () => {
  it("then call gets replaced with numeric value", () => {
    const code = `
      const num = 42;
      const x = asl.deploy.evalConst(num);
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
              "_syntaxKind": "literal",
              "type": "numeric",
              "value": 42,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "num",
              "type": "unknown",
            },
            "stateName": "Assign num",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "literal",
              "type": "numeric",
              "value": 42,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "x",
              "type": "unknown",
            },
            "stateName": "Assign x",
          },
        ],
      }
    `);
  });
  it("then call gets replaced with string value", () => {
    const code = `
      const str = "abc";
      const x = asl.deploy.evalConst(str);
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
              "_syntaxKind": "literal",
              "type": "string",
              "value": "abc",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "str",
              "type": "unknown",
            },
            "stateName": "Assign str",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "literal",
              "type": "string",
              "value": "abc",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "x",
              "type": "unknown",
            },
            "stateName": "Assign x",
          },
        ],
      }
    `);
  });
  it("then call gets replaced with bool value", () => {
    const code = `
      const b = true;
      const x = asl.deploy.evalConst(b);
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
              "_syntaxKind": "literal",
              "type": "boolean",
              "value": true,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "b",
              "type": "unknown",
            },
            "stateName": "Assign b",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "literal",
              "type": "boolean",
              "value": true,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "x",
              "type": "unknown",
            },
            "stateName": "Assign x",
          },
        ],
      }
    `);
  });
  it("then call gets replaced with object value", () => {
    const code = `
      const o = {bool: true, str: "abc", num: 42};
      const x = asl.deploy.evalConst(o);
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
              "_syntaxKind": "literal-object",
              "properties": Object {
                "bool": Object {
                  "_syntaxKind": "literal",
                  "type": "boolean",
                  "value": true,
                },
                "num": Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 42,
                },
                "str": Object {
                  "_syntaxKind": "literal",
                  "type": "string",
                  "value": "abc",
                },
              },
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "o",
              "type": "object",
            },
            "stateName": "Assign o",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "literal-object",
              "properties": Object {
                "bool": Object {
                  "_syntaxKind": "literal",
                  "type": "boolean",
                  "value": true,
                },
                "num": Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 42,
                },
                "str": Object {
                  "_syntaxKind": "literal",
                  "type": "string",
                  "value": "abc",
                },
              },
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "x",
              "type": "unknown",
            },
            "stateName": "Assign x",
          },
        ],
      }
    `);
  });

  it("then call gets replaced with array value", () => {
    const code = `
      const arr = [1, 2, 3, 4];
      const x = asl.deploy.evalConst(arr);
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
              "_syntaxKind": "literal-array",
              "elements": Array [
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 1,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 2,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 3,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 4,
                },
              ],
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "arr",
              "type": "object",
            },
            "stateName": "Assign arr",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "literal-array",
              "elements": Array [
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 1,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 2,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 3,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 4,
                },
              ],
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "x",
              "type": "unknown",
            },
            "stateName": "Assign x",
          },
        ],
      }
    `);
  });
});
