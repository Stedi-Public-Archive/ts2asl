import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";
import { createTransformers } from "../../convert-ts-to-asllib/transformers";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";

describe("when transpiling function", () => {
  it("then function can be passed string literal and returned value can be coerced to type", () => {
    const transformed = testTransform(
      `
    let result = asl.states.stringToJson("0") as number
    `
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl, { skipVersionComment: true });
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": "source: result = asl.states.stringToJson(\\"0\\")",
            "End": true,
            "InputPath": "$.tmp.eval.value",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Evaluate StringToJson('0')": Object {
            "Next": "Assign result",
            "Parameters": Object {
              "value.$": "States.StringToJson('0')",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Evaluate StringToJson('0')",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
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
    `
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl, { skipVersionComment: true });
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": "source: result = asl.states.stringToJson(\\"s\\")",
            "End": true,
            "InputPath": "$.tmp.eval.value",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Evaluate StringToJson('s')": Object {
            "Next": "Assign result",
            "Parameters": Object {
              "value.$": "States.StringToJson('s')",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Evaluate StringToJson('s')",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
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
    `
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl, { skipVersionComment: true });
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": "source: result = asl.states.jsonToString(tmp)",
            "End": true,
            "InputPath": "$.tmp.eval.value",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign tmp": Object {
            "Comment": "source: tmp = { num: 12, str: \\"val\\" }",
            "Next": "Evaluate JsonToString($.v ...",
            "Result": Object {
              "num": 12,
              "str": "val",
            },
            "ResultPath": "$.vars.tmp",
            "Type": "Pass",
          },
          "Evaluate JsonToString($.v ...": Object {
            "Next": "Assign result",
            "Parameters": Object {
              "value.$": "States.JsonToString($.vars.tmp)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign tmp",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
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
