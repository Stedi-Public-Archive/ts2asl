import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";
import { transformers } from "../../convert-ts-to-asllib/transformers";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";

describe("when transpiling function", () => {
  it("then function can be passed string literal and returned value can be coerced to type", () => {
    const transformed = testTransform(
      `
    let result = asl.states.stringToJson("0") as number
    `,
      transformers
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign Result": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "States.StringToJson('0')",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign Result",
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
      transformers
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign Result": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "States.StringToJson('s')",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign Result",
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
    let result = asl.states.jsonToString({
      num: 12,
      str: "val"
    }),
    `,
      transformers
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign Result": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "States.JsonToString({
        \\"num\\": 12,
        \\"str\\": \\"val\\"
      })",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign Result",
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
