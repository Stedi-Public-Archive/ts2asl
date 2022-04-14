import { runConvertForTest } from "../utility";
describe("when converting ts-lib-convert", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("ts-lib-convert");
  });
  it("then convertStringToNumber can be converted to asl", async () => {
    expect(converted.convertStringToNumber.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign num": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "If (num === 42)",
            "ResultPath": "$.vars.num",
            "Type": "Pass",
          },
          "Assign str": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "If (str === \\"42\\")",
            "ResultPath": "$.vars.str",
            "Type": "Pass",
          },
          "Evaluate Format('{}', $.v ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign str",
            "Parameters": Object {
              "value.$": "States.Format('{}', $.vars.num)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate StringToJson('42')": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign num",
            "Parameters": Object {
              "value.$": "States.StringToJson('42')",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "If (num === 42)": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate Format('{}', $.v ...",
                "NumericEquals": 42,
                "Variable": "$.vars.num",
              },
            ],
            "Comment": undefined,
            "Default": "Throw Error",
            "Type": "Choice",
          },
          "If (str === \\"42\\")": Object {
            "Choices": Array [
              Object {
                "Next": "Return \\"succeeded\\"",
                "StringEquals": "42",
                "Variable": "$.vars.str",
              },
            ],
            "Comment": "source: if (str === \\"42\\") { return \\"succeeded\\"; }",
            "Default": "Throw Error",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Evaluate StringToJson('42')",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"succeeded\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "succeeded",
            "Type": "Pass",
          },
          "Throw Error": Object {
            "Cause": "failed",
            "Comment": "source: throw new Error(\\"failed\\");",
            "Error": "Error",
            "Type": "Fail",
          },
        },
      }
    `);
  });
  it("then convertStringToBoolean can be converted to asl", async () => {
    expect(converted.convertStringToBoolean.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign bool": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "If (bool === true)",
            "ResultPath": "$.vars.bool",
            "Type": "Pass",
          },
          "Assign str": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "If (str === \\"true\\")",
            "ResultPath": "$.vars.str",
            "Type": "Pass",
          },
          "Evaluate Format('{}', $.v ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign str",
            "Parameters": Object {
              "value.$": "States.Format('{}', $.vars.bool)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate StringToJson('true')": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign bool",
            "Parameters": Object {
              "value.$": "States.StringToJson('true')",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "If (bool === true)": Object {
            "Choices": Array [
              Object {
                "BooleanEquals": true,
                "Next": "Evaluate Format('{}', $.v ...",
                "Variable": "$.vars.bool",
              },
            ],
            "Comment": undefined,
            "Default": "Throw Error",
            "Type": "Choice",
          },
          "If (str === \\"true\\")": Object {
            "Choices": Array [
              Object {
                "Next": "Return \\"succeeded\\"",
                "StringEquals": "true",
                "Variable": "$.vars.str",
              },
            ],
            "Comment": "source: if (str === \\"true\\") { return \\"succeeded\\"; }",
            "Default": "Throw Error",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Evaluate StringToJson('true')",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"succeeded\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "succeeded",
            "Type": "Pass",
          },
          "Throw Error": Object {
            "Cause": "failed",
            "Comment": "source: throw new Error(\\"failed\\");",
            "Error": "Error",
            "Type": "Fail",
          },
        },
      }
    `);
  });
});