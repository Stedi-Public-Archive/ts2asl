import { runConvertForTest } from "../utility";
describe("when converting boolean-evalation", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("boolean-evalation");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign data": Object {
            "Comment": "source: data = { num: 42, text: \\"text\\", undefined: und ...",
            "Next": "If (typeof data.num !== \\" ...",
            "Result": Object {
              "null": null,
              "num": 42,
              "text": "text",
              "timestamp": "2016-03-14T01:59:00Z",
              "undefined": null,
            },
            "ResultPath": "$.vars.data",
            "Type": "Pass",
          },
          "Empty Default Choice": Object {
            "End": true,
            "Type": "Pass",
          },
          "If (data.null)": Object {
            "Choices": Array [
              Object {
                "Next": "Throw ValidationError_5",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars.data.null",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.data.null",
                    },
                    Object {
                      "BooleanEquals": false,
                      "Variable": "$.vars.data.null",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.vars.data.null",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.vars.data.null",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.vars.data.null",
                    },
                    Object {
                      "NumericEquals": 0,
                      "Variable": "$.vars.data.null",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (data.null) { throw new ValidationError(\\"nu ...",
            "Default": "If (typeof data.timestamp ...",
            "Type": "Choice",
          },
          "If (data.num !== 42)": Object {
            "Choices": Array [
              Object {
                "Next": "Throw ValidationError_1",
                "Not": Object {
                  "NumericEquals": 42,
                  "Variable": "$.vars.data.num",
                },
              },
            ],
            "Comment": "source: if (data.num !== 42) { throw new ValidationErr ...",
            "Default": "If (typeof data.text !== ...",
            "Type": "Choice",
          },
          "If (data.text !== \\"text\\")": Object {
            "Choices": Array [
              Object {
                "Next": "Throw ValidationError_3",
                "Not": Object {
                  "StringEquals": "text",
                  "Variable": "$.vars.data.text",
                },
              },
            ],
            "Comment": "source: if (data.text !== \\"text\\") { throw new Validati ...",
            "Default": "If (data.undefined)",
            "Type": "Choice",
          },
          "If (data.undefined)": Object {
            "Choices": Array [
              Object {
                "Next": "Throw ValidationError_4",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars.data.undefined",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.data.undefined",
                    },
                    Object {
                      "BooleanEquals": false,
                      "Variable": "$.vars.data.undefined",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.vars.data.undefined",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.vars.data.undefined",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.vars.data.undefined",
                    },
                    Object {
                      "NumericEquals": 0,
                      "Variable": "$.vars.data.undefined",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (data.undefined) { throw new ValidationErro ...",
            "Default": "If (data.null)",
            "Type": "Choice",
          },
          "If (typeof data.num !== \\" ...": Object {
            "Choices": Array [
              Object {
                "Next": "Throw ValidationError",
                "Not": Object {
                  "And": Array [
                    Object {
                      "IsPresent": true,
                      "Variable": "$.vars.data.num",
                    },
                    Object {
                      "IsNumeric": true,
                      "Variable": "$.vars.data.num",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (typeof data.num !== \\"number\\") { throw new  ...",
            "Default": "If (data.num !== 42)",
            "Type": "Choice",
          },
          "If (typeof data.text !== ...": Object {
            "Choices": Array [
              Object {
                "Next": "Throw ValidationError_2",
                "Not": Object {
                  "And": Array [
                    Object {
                      "IsPresent": true,
                      "Variable": "$.vars.data.text",
                    },
                    Object {
                      "IsString": true,
                      "Variable": "$.vars.data.text",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (typeof data.text !== \\"string\\") { throw new ...",
            "Default": "If (data.text !== \\"text\\")",
            "Type": "Choice",
          },
          "If (typeof data.timestamp ...": Object {
            "Choices": Array [
              Object {
                "Next": "Throw ValidationError_6",
                "Not": Object {
                  "And": Array [
                    Object {
                      "IsPresent": true,
                      "Variable": "$.vars.data.timestamp",
                    },
                    Object {
                      "IsString": true,
                      "Variable": "$.vars.data.timestamp",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (typeof data.timestamp !== \\"string\\") { thro ...",
            "Default": "Empty Default Choice",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign data",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Throw ValidationError": Object {
            "Cause": "num expected to be number",
            "Comment": "source: throw new ValidationError(\\"num expected to be  ...",
            "Error": "ValidationError",
            "Type": "Fail",
          },
          "Throw ValidationError_1": Object {
            "Cause": "num expected to be 42",
            "Comment": "source: throw new ValidationError(\\"num expected to be  ...",
            "Error": "ValidationError",
            "Type": "Fail",
          },
          "Throw ValidationError_2": Object {
            "Cause": "text expected to be string",
            "Comment": "source: throw new ValidationError(\\"text expected to be ...",
            "Error": "ValidationError",
            "Type": "Fail",
          },
          "Throw ValidationError_3": Object {
            "Cause": "text expected to be 'text'",
            "Comment": "source: throw new ValidationError(\\"text expected to be ...",
            "Error": "ValidationError",
            "Type": "Fail",
          },
          "Throw ValidationError_4": Object {
            "Cause": "undefined expected to be non-truthy'",
            "Comment": "source: throw new ValidationError(\\"undefined expected  ...",
            "Error": "ValidationError",
            "Type": "Fail",
          },
          "Throw ValidationError_5": Object {
            "Cause": "null expected to be non-truthy'",
            "Comment": "source: throw new ValidationError(\\"null expected to be ...",
            "Error": "ValidationError",
            "Type": "Fail",
          },
          "Throw ValidationError_6": Object {
            "Cause": "timestamp expected to be string'",
            "Comment": "source: throw new ValidationError(\\"timestamp expected  ...",
            "Error": "ValidationError",
            "Type": "Fail",
          },
        },
      }
    `);
  });
});