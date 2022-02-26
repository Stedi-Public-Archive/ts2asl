import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";
import { ifStatementTransformer } from "../../convert-ts-to-asllib/transformers/if-statement";
import { consoleLogStatementTransformer } from "../../convert-ts-to-asllib/transformers/log-statement";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";

describe("when transpiling binary expressions", () => {
  it("then or expressions are grouped", () => {
    const transformed = testTransform(
      `
      if (x == 1 || x === 2 || x == 3) { console.log('debug') }
    `,
      [ifStatementTransformer, consoleLogStatementTransformer]
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Empty Default Choice": Object {
            "End": true,
            "Type": "Pass",
          },
          "If (x == 1 || x === 2 ||  ...": Object {
            "Choices": Array [
              Object {
                "Next": "Pass",
                "Or": Array [
                  Object {
                    "NumericEquals": 1,
                    "Variable": "$.vars.x",
                  },
                  Object {
                    "NumericEquals": 2,
                    "Variable": "$.vars.x",
                  },
                  Object {
                    "NumericEquals": 3,
                    "Variable": "$.vars.x",
                  },
                ],
              },
            ],
            "Comment": "source: if (x == 1 || x === 2 || x == 3) { console.log ...",
            "Default": "Empty Default Choice",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (x == 1 || x === 2 ||  ...",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": "source: console.log('debug')",
            "End": true,
            "Result": "debug",
            "Type": "Pass",
          },
        },
      }
    `);
  });

  it("then and expressions are grouped", () => {
    const transformed = testTransform(
      `
      if (x == 1 && x === 2 && x == 3) { console.log('debug') }
    `,
      [ifStatementTransformer, consoleLogStatementTransformer]
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Empty Default Choice": Object {
            "End": true,
            "Type": "Pass",
          },
          "If (x == 1 && x === 2 &&  ...": Object {
            "Choices": Array [
              Object {
                "And": Array [
                  Object {
                    "And": Array [
                      Object {
                        "NumericEquals": 1,
                        "Variable": "$.vars.x",
                      },
                      Object {
                        "NumericEquals": 2,
                        "Variable": "$.vars.x",
                      },
                    ],
                  },
                  Object {
                    "NumericEquals": 3,
                    "Variable": "$.vars.x",
                  },
                ],
                "Next": "Pass",
              },
            ],
            "Comment": "source: if (x == 1 && x === 2 && x == 3) { console.log ...",
            "Default": "Empty Default Choice",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (x == 1 && x === 2 &&  ...",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": "source: console.log('debug')",
            "End": true,
            "Result": "debug",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
