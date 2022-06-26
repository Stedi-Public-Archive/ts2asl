import { createTransformers } from "../../convert-ts-to-asllib/transformers";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";
import { testConvertToIntermediaryAst } from "./test-convert";

describe("when returning", () => {
  it("then simple return doesnt return anything", () => {
    const code = `
    return;
    `;

    const transformed = testTransform(code);
    const result = testConvertToIntermediaryAst(transformed);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
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
      }
    `);
  });
  it("then complex object is returned immediately", () => {
    const code = `
    return {name: "fred"};
    `;

    const transformed = testTransform(code);
    const result = testConvertToIntermediaryAst(transformed);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "return",
            "expression": Object {
              "_syntaxKind": "literal-object",
              "properties": Object {
                "name": Object {
                  "_syntaxKind": "literal",
                  "type": "string",
                  "value": "fred",
                },
              },
            },
            "stateName": "Return { name: \\"fred\\" }",
          },
        ],
      }
    `);
  });
  it("then variable is introduced for call statement", () => {
    const code = `
    return doSomething();
    `;

    const transformed = testTransform(code);
    const result = testConvertToIntermediaryAst(transformed);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "return",
            "expression": Object {
              "_syntaxKind": "asl-task-state",
              "catch": undefined,
              "parameters": undefined,
              "resource": "[!lambda[doSomething]arn]",
              "retry": undefined,
              "source": "doSomething()",
              "stateName": "doSomething()",
            },
            "stateName": "Return asl.typescriptInvo ...",
          },
        ],
      }
    `);
  });
});
