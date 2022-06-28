import { runConvertForTest } from "../utility";
describe("when converting input-validation", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("input-validation");
  });
  it("then checkArgumentType can be converted to asl", async () => {
    expect(converted.checkArgumentType.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "If (typeof input.delayInS ...": Object {
            "Choices": Array [
              Object {
                "Next": "Throw ValidationError",
                "Not": Object {
                  "And": Array [
                    Object {
                      "IsPresent": true,
                      "Variable": "$.vars.delayInSeconds",
                    },
                    Object {
                      "IsNumeric": true,
                      "Variable": "$.vars.delayInSeconds",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (typeof input.delayInSeconds !== \\"number\\")  ...",
            "Default": "Wait",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (typeof input.delayInS ...",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Throw ValidationError": Object {
            "Cause": "delayInSeconds must be a number",
            "Comment": "source: throw new ValidationError(\\"delayInSeconds must ...",
            "Error": "ValidationError",
            "Type": "Fail",
          },
          "Wait": Object {
            "Comment": undefined,
            "End": true,
            "SecondsPath": "$.vars.delayInSeconds",
            "Type": "Wait",
          },
        },
      }
    `);
  });
  it("then checkArgumentTypeProvideDefault can be converted to asl", async () => {
    expect(converted.checkArgumentTypeProvideDefault.asl)
      .toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign input.delayInSeconds": Object {
            "Comment": undefined,
            "Next": "Wait",
            "Result": 5,
            "ResultPath": "$.vars.delayInSeconds",
            "Type": "Pass",
          },
          "If (typeof input.delayInS ...": Object {
            "Choices": Array [
              Object {
                "Next": "Assign input.delayInSeconds",
                "Not": Object {
                  "And": Array [
                    Object {
                      "IsPresent": true,
                      "Variable": "$.vars.delayInSeconds",
                    },
                    Object {
                      "IsNumeric": true,
                      "Variable": "$.vars.delayInSeconds",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (typeof input.delayInSeconds !== \\"number\\")  ...",
            "Default": "Wait",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (typeof input.delayInS ...",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return input.delayInSeconds": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.delayInSeconds",
            "Type": "Pass",
          },
          "Wait": Object {
            "Comment": undefined,
            "Next": "Return input.delayInSeconds",
            "SecondsPath": "$.vars.delayInSeconds",
            "Type": "Wait",
          },
        },
      }
    `);
  });
  it("then checkArgumentRange can be converted to asl", async () => {
    expect(converted.checkArgumentRange.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign input.delayInSeconds": Object {
            "Comment": undefined,
            "Next": "If (input.delayInSeconds ...",
            "Result": 5,
            "ResultPath": "$.vars.delayInSeconds",
            "Type": "Pass",
          },
          "If (input.delayInSeconds ...": Object {
            "Choices": Array [
              Object {
                "Next": "Throw ValidationError",
                "Or": Array [
                  Object {
                    "NumericGreaterThan": 10,
                    "Variable": "$.vars.delayInSeconds",
                  },
                  Object {
                    "NumericLessThan": 1,
                    "Variable": "$.vars.delayInSeconds",
                  },
                ],
              },
            ],
            "Comment": "source: if (input.delayInSeconds > 10 || input.delayIn ...",
            "Default": "Wait",
            "Type": "Choice",
          },
          "If (typeof input.delayInS ...": Object {
            "Choices": Array [
              Object {
                "Next": "Assign input.delayInSeconds",
                "Not": Object {
                  "And": Array [
                    Object {
                      "IsPresent": true,
                      "Variable": "$.vars.delayInSeconds",
                    },
                    Object {
                      "IsNumeric": true,
                      "Variable": "$.vars.delayInSeconds",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (typeof input.delayInSeconds !== \\"number\\")  ...",
            "Default": "If (input.delayInSeconds ...",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (typeof input.delayInS ...",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return input.delayInSeconds": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.delayInSeconds",
            "Type": "Pass",
          },
          "Throw ValidationError": Object {
            "Cause": "delay in seconds must be numeric value no greater than 10 and no smaller than 1",
            "Comment": "source: throw new ValidationError(\\"delay in seconds mu ...",
            "Error": "ValidationError",
            "Type": "Fail",
          },
          "Wait": Object {
            "Comment": undefined,
            "Next": "Return input.delayInSeconds",
            "SecondsPath": "$.vars.delayInSeconds",
            "Type": "Wait",
          },
        },
      }
    `);
  });
});
