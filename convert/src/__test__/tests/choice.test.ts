import { runConvertForTest } from "../utility";
describe("when converting choice", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("choice");
  });
  it("then choice can be converted to asl", async () => {
    expect(converted.choice.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign val": Object {
            "Comment": "source: val = { a: \\"\\", b: \\"\\", c: \\"\\", d: \\"\\", e: \\"\\", f:  ...",
            "Next": "Assign val.a",
            "Result": Object {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
              "e": "",
              "f": "",
              "g": "",
            },
            "ResultPath": "$.vars.val",
            "Type": "Pass",
          },
          "Assign val.a": Object {
            "Comment": undefined,
            "Next": "Choice",
            "Result": "before choice",
            "ResultPath": "$.vars.val.a",
            "Type": "Pass",
          },
          "Assign val.f": Object {
            "Comment": undefined,
            "Next": "Assign val.g",
            "Result": "this should not happen",
            "ResultPath": "$.vars.val.f",
            "Type": "Pass",
          },
          "Assign val.g": Object {
            "Comment": undefined,
            "Next": "Pass",
            "Result": "after choice",
            "ResultPath": "$.vars.val.g",
            "Type": "Pass",
          },
          "Choice": Object {
            "Choices": Array [
              Object {
                "Next": "Then",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "BooleanEquals": false,
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "NumericEquals": 0,
                      "Variable": "$.vars.condition",
                    },
                  ],
                },
              },
              Object {
                "Next": "Then_1",
                "Or": Array [
                  Object {
                    "IsPresent": false,
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "IsNull": true,
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "BooleanEquals": false,
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "StringEquals": "",
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "StringEquals": "false",
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "StringEquals": "0",
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "NumericEquals": 0,
                    "Variable": "$.vars.condition",
                  },
                ],
              },
            ],
            "Comment": undefined,
            "Default": "Assign val.f",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign val",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.val",
            "Type": "Pass",
          },
          "Then": Object {
            "Branches": Array [
              Object {
                "StartAt": "Assign val.b",
                "States": Object {
                  "Assign val.b": Object {
                    "Comment": undefined,
                    "Next": "Assign val.c",
                    "Result": "val is not an empty string",
                    "ResultPath": "$.vars.val.b",
                    "Type": "Pass",
                  },
                  "Assign val.c": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "val is also not false or 0",
                    "ResultPath": "$.vars.val.c",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Next": "Assign val.g",
            "OutputPath": "$[0]",
            "Parameters": Object {
              "vars.$": "$.vars",
            },
            "ResultPath": "$.tmp.lastResult",
            "Type": "Parallel",
          },
          "Then_1": Object {
            "Branches": Array [
              Object {
                "StartAt": "Assign val.d",
                "States": Object {
                  "Assign val.d": Object {
                    "Comment": undefined,
                    "Next": "Assign val.e",
                    "Result": "val is empty string",
                    "ResultPath": "$.vars.val.d",
                    "Type": "Pass",
                  },
                  "Assign val.e": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "or false or 0",
                    "ResultPath": "$.vars.val.e",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Next": "Assign val.g",
            "OutputPath": "$[0]",
            "Parameters": Object {
              "vars.$": "$.vars",
            },
            "ResultPath": "$.tmp.lastResult",
            "Type": "Parallel",
          },
        },
      }
    `);
  });
  it("then choiceWithSingleStatements can be converted to asl", async () => {
    expect(converted.choiceWithSingleStatements.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign val": Object {
            "Comment": "source: val = { a: \\"\\", b: \\"\\", c: \\"\\", d: \\"\\", e: \\"\\", f:  ...",
            "Next": "Choice",
            "Result": Object {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
              "e": "",
              "f": "",
              "g": "",
            },
            "ResultPath": "$.vars.val",
            "Type": "Pass",
          },
          "Assign val.a": Object {
            "Comment": undefined,
            "Next": "Pass",
            "Result": "val is truthy",
            "ResultPath": "$.vars.val.a",
            "Type": "Pass",
          },
          "Assign val.b": Object {
            "Comment": undefined,
            "Next": "Pass",
            "Result": "val is falsy",
            "ResultPath": "$.vars.val.b",
            "Type": "Pass",
          },
          "Assign val.c": Object {
            "Comment": undefined,
            "Next": "Pass",
            "Result": "val is not truthy and not falsy",
            "ResultPath": "$.vars.val.c",
            "Type": "Pass",
          },
          "Choice": Object {
            "Choices": Array [
              Object {
                "Next": "Assign val.a",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "BooleanEquals": false,
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "NumericEquals": 0,
                      "Variable": "$.vars.condition",
                    },
                  ],
                },
              },
              Object {
                "Next": "Assign val.b",
                "Or": Array [
                  Object {
                    "IsPresent": false,
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "IsNull": true,
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "BooleanEquals": false,
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "StringEquals": "",
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "StringEquals": "false",
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "StringEquals": "0",
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "NumericEquals": 0,
                    "Variable": "$.vars.condition",
                  },
                ],
              },
            ],
            "Comment": undefined,
            "Default": "Assign val.c",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign val",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.val",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then choiceWithShorthand can be converted to asl", async () => {
    expect(converted.choiceWithShorthand.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign val": Object {
            "Comment": "source: val = { a: \\"\\", b: \\"\\", c: \\"\\", d: \\"\\", e: \\"\\", f:  ...",
            "Next": "Choice",
            "Result": Object {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
              "e": "",
              "f": "",
              "g": "",
            },
            "ResultPath": "$.vars.val",
            "Type": "Pass",
          },
          "Assign val.a": Object {
            "Comment": undefined,
            "Next": "Pass",
            "Result": "val is truthy",
            "ResultPath": "$.vars.val.a",
            "Type": "Pass",
          },
          "Assign val.b": Object {
            "Comment": undefined,
            "Next": "Pass",
            "Result": "val is falsy",
            "ResultPath": "$.vars.val.b",
            "Type": "Pass",
          },
          "Assign val.c": Object {
            "Comment": undefined,
            "Next": "Pass",
            "Result": "val is not truthy and not falsy",
            "ResultPath": "$.vars.val.c",
            "Type": "Pass",
          },
          "Choice": Object {
            "Choices": Array [
              Object {
                "Next": "Assign val.a",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "BooleanEquals": false,
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.vars.condition",
                    },
                    Object {
                      "NumericEquals": 0,
                      "Variable": "$.vars.condition",
                    },
                  ],
                },
              },
              Object {
                "Next": "Assign val.b",
                "Or": Array [
                  Object {
                    "IsPresent": false,
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "IsNull": true,
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "BooleanEquals": false,
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "StringEquals": "",
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "StringEquals": "false",
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "StringEquals": "0",
                    "Variable": "$.vars.condition",
                  },
                  Object {
                    "NumericEquals": 0,
                    "Variable": "$.vars.condition",
                  },
                ],
              },
            ],
            "Comment": undefined,
            "Default": "Assign val.c",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign val",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.val",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
