import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";
import { createTransformers } from "../../convert-ts-to-asllib/transformers";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";

describe("when transpiling early return", () => {
  it("then return statement has end:true", () => {
    const transformed = testTransform(
      `
      const x = "test";
      if (x === "test") {
        return "ok";
      }
      throw new Error("should not get here");
    `,
      createTransformers({})
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign x": Object {
            "Comment": "source: x = \\"test\\"",
            "Next": "If (x === \\"test\\")",
            "Result": "test",
            "ResultPath": "$.vars.x",
            "Type": "Pass",
          },
          "Empty Default Choice": Object {
            "Next": "Throw Error",
            "ResultPath": null,
            "Type": "Pass",
          },
          "If (x === \\"test\\")": Object {
            "Choices": Array [
              Object {
                "Next": "Return \\"ok\\"",
                "StringEquals": "test",
                "Variable": "$.vars.x",
              },
            ],
            "Comment": "source: if (x === \\"test\\") { return \\"ok\\"; }",
            "Default": "Empty Default Choice",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign x",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"ok\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "ok",
            "Type": "Pass",
          },
          "Throw Error": Object {
            "Cause": "should not get here",
            "Comment": "source: throw new Error(\\"should not get here\\");",
            "Error": "Error",
            "Type": "Fail",
          },
        },
      }
    `);
  });
});
