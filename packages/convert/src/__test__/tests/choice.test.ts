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
          "Assign val.b": Object {
            "Comment": undefined,
            "Next": "Assign val.c",
            "Result": "val is not an empty string",
            "ResultPath": "$.vars.val.b",
            "Type": "Pass",
          },
          "Assign val.c": Object {
            "Comment": undefined,
            "Next": "Assign val.g",
            "Result": "val is also not false or 0",
            "ResultPath": "$.vars.val.c",
            "Type": "Pass",
          },
          "Assign val.d": Object {
            "Comment": undefined,
            "Next": "Assign val.e",
            "Result": "val is empty string",
            "ResultPath": "$.vars.val.d",
            "Type": "Pass",
          },
          "Assign val.e": Object {
            "Comment": undefined,
            "Next": "Assign val.g",
            "Result": "or false or 0",
            "ResultPath": "$.vars.val.e",
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
            "Next": "Return val",
            "Result": "after choice",
            "ResultPath": "$.vars.val.g",
            "Type": "Pass",
          },
          "Choice": Object {
            "Choices": Array [
              Object {
                "Next": "Assign val.b",
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
                "Next": "Assign val.d",
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
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return val": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.val",
            "Type": "Pass",
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
            "Next": "Return val",
            "Result": "val is truthy",
            "ResultPath": "$.vars.val.a",
            "Type": "Pass",
          },
          "Assign val.b": Object {
            "Comment": undefined,
            "Next": "Return val",
            "Result": "val is falsy",
            "ResultPath": "$.vars.val.b",
            "Type": "Pass",
          },
          "Assign val.c": Object {
            "Comment": undefined,
            "Next": "Return val",
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
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return val": Object {
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
            "Next": "Return val",
            "Result": "val is truthy",
            "ResultPath": "$.vars.val.a",
            "Type": "Pass",
          },
          "Assign val.b": Object {
            "Comment": undefined,
            "Next": "Return val",
            "Result": "val is falsy",
            "ResultPath": "$.vars.val.b",
            "Type": "Pass",
          },
          "Assign val.c": Object {
            "Comment": undefined,
            "Next": "Return val",
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
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return val": Object {
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
