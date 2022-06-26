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
            "Comment": "source: num = asl.convert.stringToNumber(\\"42\\")",
            "InputPath": "$.tmp.eval.value",
            "Next": "If (num === 42)",
            "ResultPath": "$.vars.num",
            "Type": "Pass",
          },
          "Assign str": Object {
            "Comment": "source: str = asl.convert.numberToString(num)",
            "InputPath": "$.tmp.eval.value",
            "Next": "If (str === \\"42\\")",
            "ResultPath": "$.vars.str",
            "Type": "Pass",
          },
          "Evaluate Format('{}', $.v ...": Object {
            "Next": "Assign str",
            "Parameters": Object {
              "value.$": "States.Format('{}', $.vars.num)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate StringToJson('42')": Object {
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
            "Comment": "source: if (num === 42) { const str = asl.convert.numb ...",
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
              "_null": null,
              "_undefined": null,
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
            "Comment": "source: bool = asl.convert.stringToBoolean(\\"true\\")",
            "InputPath": "$.tmp.eval.value",
            "Next": "If (bool === true)",
            "ResultPath": "$.vars.bool",
            "Type": "Pass",
          },
          "Assign str": Object {
            "Comment": "source: str = asl.convert.booleanToString(bool)",
            "InputPath": "$.tmp.eval.value",
            "Next": "If (str === \\"true\\")",
            "ResultPath": "$.vars.str",
            "Type": "Pass",
          },
          "Evaluate Format('{}', $.v ...": Object {
            "Next": "Assign str",
            "Parameters": Object {
              "value.$": "States.Format('{}', $.vars.bool)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate StringToJson('true')": Object {
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
            "Comment": "source: if (bool === true) { const str = asl.convert.b ...",
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
              "_null": null,
              "_undefined": null,
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
