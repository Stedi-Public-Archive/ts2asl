import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";
import { createTransformers } from "../../convert-ts-to-asllib/transformers";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";

describe("when transpiling function", () => {
  it("then function can be passed string literal and returned value can be coerced to type", () => {
    const transformed = testTransform(
      `
    let result = asl.states.stringToJson("0") as number
    `,
      createTransformers({ lineNumbersInStateNames: true })
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign result_1",
            "Parameters": Object {
              "value.$": "States.StringToJson('0')",
            },
            "ResultPath": "$.lastResult",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.lastResult.value",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign result",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
        },
      }
    `);
  });

  it("then function is passed string literal", () => {
    const transformed = testTransform(
      `
    let result = asl.states.stringToJson("s"),
    `,
      createTransformers({})
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign result_1",
            "Parameters": Object {
              "value.$": "States.StringToJson('s')",
            },
            "ResultPath": "$.lastResult",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.lastResult.value",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign result",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
        },
      }
    `);
  });

  it("then function is passed object literal", () => {
    const transformed = testTransform(
      `
      const tmp = {
        num: 12,
        str: "val"
      };
    let result = asl.states.jsonToString(tmp),
    `,
      createTransformers({})
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign result_1",
            "Parameters": Object {
              "value.$": "States.JsonToString($.vars.tmp)",
            },
            "ResultPath": "$.lastResult",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.lastResult.value",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign tmp": Object {
            "Comment": "source: tmp = { num: 12, str: \\"val\\" }",
            "Next": "Assign result",
            "Result": Object {
              "num": 12,
              "str": "val",
            },
            "ResultPath": "$.vars.tmp",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign tmp",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
