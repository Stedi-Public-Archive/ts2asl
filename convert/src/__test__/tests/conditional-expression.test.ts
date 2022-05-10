import { runConvertForTest } from "../utility";
describe("when converting conditional-expression", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("conditional-expression");
  });
  it("then conditional can be converted to asl", async () => {
    expect(converted.conditional.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Conditional False": Object {
            "InputPath": "$._undefined",
            "Next": "Eval Conditional_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_1": Object {
            "InputPath": "$._undefined",
            "Next": "Eval Conditional_2",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_2": Object {
            "Next": "Return args?.name ? args? ...",
            "Result": "jim",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.name",
            "Next": "Eval Conditional_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_1": Object {
            "InputPath": "$.vars.name",
            "Next": "Eval Conditional_2",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_2": Object {
            "InputPath": "$.tmp.var",
            "Next": "Return args?.name ? args? ...",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Eval Conditional": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False",
            "Type": "Choice",
          },
          "Eval Conditional_1": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True_1",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False_1",
            "Type": "Choice",
          },
          "Eval Conditional_2": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True_2",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.tmp.var",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.tmp.var",
                    },
                    Object {
                      "BooleanEquals": false,
                      "Variable": "$.tmp.var",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.tmp.var",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.tmp.var",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.tmp.var",
                    },
                    Object {
                      "NumericEquals": 0,
                      "Variable": "$.tmp.var",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False_2",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Eval Conditional",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return args?.name ? args? ...": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.var",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then conditionalWithLiteral can be converted to asl", async () => {
    expect(converted.conditionalWithLiteral.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Conditional False": Object {
            "Next": "Return false ? \\"jim\\" : \\"j ...",
            "Result": "james",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "Next": "Return false ? \\"jim\\" : \\"j ...",
            "Result": "jim",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Eval Conditional": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True",
                "Not": Object {
                  "BooleanEquals": false,
                  "Variable": undefined,
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Eval Conditional",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return false ? \\"jim\\" : \\"j ...": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.var",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then conditionalWithinExpression can be converted to asl", async () => {
    expect(converted.conditionalWithinExpression.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Conditional False": Object {
            "InputPath": "$._undefined",
            "Next": "Eval Conditional_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_1": Object {
            "InputPath": "$._undefined",
            "Next": "Evaluate Format('hello{}' ...",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_2": Object {
            "Next": "Return \\"hello\\" + args?.na ...",
            "Result": "world",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.name",
            "Next": "Eval Conditional_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_1": Object {
            "InputPath": "$.vars.name",
            "Next": "Evaluate Format('hello{}' ...",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_2": Object {
            "InputPath": "$.tmp.var",
            "Next": "Return \\"hello\\" + args?.na ...",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Eval Conditional": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False",
            "Type": "Choice",
          },
          "Eval Conditional_1": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True_1",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False_1",
            "Type": "Choice",
          },
          "Eval Conditional_2": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True_2",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.tmp.eval.value",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.tmp.eval.value",
                    },
                    Object {
                      "BooleanEquals": false,
                      "Variable": "$.tmp.eval.value",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.tmp.eval.value",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.tmp.eval.value",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.tmp.eval.value",
                    },
                    Object {
                      "NumericEquals": 0,
                      "Variable": "$.tmp.eval.value",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False_2",
            "Type": "Choice",
          },
          "Evaluate Format('hello{}' ...": Object {
            "Next": "Eval Conditional_2",
            "Parameters": Object {
              "value.$": "States.Format('hello{}', $.tmp.var)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Eval Conditional",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"hello\\" + args?.na ...": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.var",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then nestedConditional can be converted to asl", async () => {
    expect(converted.nestedConditional.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Conditional False": Object {
            "InputPath": "$._undefined",
            "Next": "Eval Conditional_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_1": Object {
            "InputPath": "$._undefined",
            "Next": "Eval Conditional_2",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_2": Object {
            "Next": "Eval Conditional_3",
            "Result": "world",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_3": Object {
            "InputPath": "$.tmp.var",
            "Next": "Return null ? \\"doesn't ha ...",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.name",
            "Next": "Eval Conditional_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_1": Object {
            "InputPath": "$.vars.name",
            "Next": "Eval Conditional_2",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_2": Object {
            "InputPath": "$.tmp.var",
            "Next": "Eval Conditional_3",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_3": Object {
            "Next": "Return null ? \\"doesn't ha ...",
            "Result": "doesn't happen",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Eval Conditional": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False",
            "Type": "Choice",
          },
          "Eval Conditional_1": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True_1",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False_1",
            "Type": "Choice",
          },
          "Eval Conditional_2": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True_2",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.tmp.var",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.tmp.var",
                    },
                    Object {
                      "BooleanEquals": false,
                      "Variable": "$.tmp.var",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.tmp.var",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.tmp.var",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.tmp.var",
                    },
                    Object {
                      "NumericEquals": 0,
                      "Variable": "$.tmp.var",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False_2",
            "Type": "Choice",
          },
          "Eval Conditional_3": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True_3",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$._undefined",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$._undefined",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False_3",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Eval Conditional",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return null ? \\"doesn't ha ...": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.var",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then conditionalWithinStringFormat can be converted to asl", async () => {
    expect(converted.conditionalWithinStringFormat.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign Result": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Return result",
            "ResultPath": "$.tmp.result",
            "Type": "Pass",
          },
          "Conditional False": Object {
            "Next": "Evaluate Format('hello: { ...",
            "Result": "jim",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars",
            "Next": "Evaluate Format('hello: { ...",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Eval Conditional": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False",
            "Type": "Choice",
          },
          "Evaluate Format('hello: { ...": Object {
            "Next": "Assign Result",
            "Parameters": Object {
              "value.$": "States.Format('hello: {}', $.tmp.var)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Eval Conditional",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return result": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.result",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
