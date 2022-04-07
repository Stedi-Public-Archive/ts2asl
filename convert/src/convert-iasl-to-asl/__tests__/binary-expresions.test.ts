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
      [ifStatementTransformer({}), consoleLogStatementTransformer({})]
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.28.",
        "StartAt": "Initialize",
        "States": Object {
          "Empty Default Choice": Object {
            "End": true,
            "ResultPath": null,
            "Type": "Pass",
          },
          "If (x == 1 || x === 2 || ...": Object {
            "Choices": Array [
              Object {
                "Next": "Log ('debug')",
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
            "Next": "If (x == 1 || x === 2 || ...",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Log ('debug')": Object {
            "Comment": "source: console.log('debug')",
            "End": true,
            "Result": "debug",
            "ResultPath": "$.tmp.lastResult",
            "Type": "Pass",
          },
        },
      }
    `);
  });

  it("then double ! unary is supported", () => {
    const transformed = testTransform(
      `
      if (!!x) { console.log('debug') }
    `,
      [ifStatementTransformer({}), consoleLogStatementTransformer({})]
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.28.",
        "StartAt": "Initialize",
        "States": Object {
          "Empty Default Choice": Object {
            "End": true,
            "ResultPath": null,
            "Type": "Pass",
          },
          "If (!!x)": Object {
            "Choices": Array [
              Object {
                "Next": "Log ('debug')",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars.x",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.x",
                    },
                    Object {
                      "BooleanEquals": false,
                      "Variable": "$.vars.x",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.vars.x",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.vars.x",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.vars.x",
                    },
                    Object {
                      "NumericEquals": 0,
                      "Variable": "$.vars.x",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (!!x) { console.log('debug') }",
            "Default": "Empty Default Choice",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (!!x)",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Log ('debug')": Object {
            "Comment": "source: console.log('debug')",
            "End": true,
            "Result": "debug",
            "ResultPath": "$.tmp.lastResult",
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
      [ifStatementTransformer({}), consoleLogStatementTransformer({})]
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.28.",
        "StartAt": "Initialize",
        "States": Object {
          "Empty Default Choice": Object {
            "End": true,
            "ResultPath": null,
            "Type": "Pass",
          },
          "If (x == 1 && x === 2 && ...": Object {
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
                "Next": "Log ('debug')",
              },
            ],
            "Comment": "source: if (x == 1 && x === 2 && x == 3) { console.log ...",
            "Default": "Empty Default Choice",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (x == 1 && x === 2 && ...",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Log ('debug')": Object {
            "Comment": "source: console.log('debug')",
            "End": true,
            "Result": "debug",
            "ResultPath": "$.tmp.lastResult",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
