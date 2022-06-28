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
          "Assign obj": Object {
            "Comment": "source: obj = { name: undefined }",
            "Next": "Eval Conditional",
            "Parameters": Object {
              "name.$": "$._undefined",
            },
            "ResultPath": "$.vars.obj",
            "Type": "Pass",
          },
          "Conditional False": Object {
            "Next": "Return obj.name ? obj.nam ...",
            "Result": "jim",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.obj.name",
            "Next": "Return obj.name ? obj.nam ...",
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
                      "Variable": "$.vars.obj.name",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.obj.name",
                    },
                    Object {
                      "BooleanEquals": false,
                      "Variable": "$.vars.obj.name",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.vars.obj.name",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.vars.obj.name",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.vars.obj.name",
                    },
                    Object {
                      "NumericEquals": 0,
                      "Variable": "$.vars.obj.name",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign obj",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return obj.name ? obj.nam ...": Object {
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
                "IsNull": true,
                "Next": "Conditional True",
                "Variable": "$",
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Eval Conditional",
            "Parameters": Object {
              "_null": null,
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
          "Assign obj": Object {
            "Comment": "source: obj = { name: \\"jim\\" }",
            "Next": "Evaluate Format('hello{}' ...",
            "Result": Object {
              "name": "jim",
            },
            "ResultPath": "$.vars.obj",
            "Type": "Pass",
          },
          "Conditional False": Object {
            "Next": "Return \\"hello\\" + obj.name ...",
            "Result": "world",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.obj.name",
            "Next": "Return \\"hello\\" + obj.name ...",
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
            "Default": "Conditional False",
            "Type": "Choice",
          },
          "Evaluate Format('hello{}' ...": Object {
            "Next": "Eval Conditional",
            "Parameters": Object {
              "value.$": "States.Format('hello{}', $.vars.obj.name)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign obj",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"hello\\" + obj.name ...": Object {
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
          "Assign obj": Object {
            "Comment": "source: obj = { name: \\"jim\\" }",
            "Next": "Eval Conditional",
            "Result": Object {
              "name": "jim",
            },
            "ResultPath": "$.vars.obj",
            "Type": "Pass",
          },
          "Conditional False": Object {
            "Next": "Eval Conditional_1",
            "Result": "world",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_1": Object {
            "InputPath": "$.tmp.var",
            "Next": "Return null ? \\"doesn't ha ...",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.obj.name",
            "Next": "Eval Conditional_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_1": Object {
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
                      "Variable": "$.vars.obj.name",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.obj.name",
                    },
                    Object {
                      "StringEquals": "",
                      "Variable": "$.vars.obj.name",
                    },
                    Object {
                      "StringEquals": "false",
                      "Variable": "$.vars.obj.name",
                    },
                    Object {
                      "StringEquals": "0",
                      "Variable": "$.vars.obj.name",
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
                "IsNull": true,
                "Next": "Conditional True_1",
                "Variable": "$",
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False_1",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign obj",
            "Parameters": Object {
              "_null": null,
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
          "Assign obj": Object {
            "Comment": "source: obj = { name: \\"jim\\" }",
            "Next": "Eval Conditional",
            "Result": Object {
              "name": "jim",
            },
            "ResultPath": "$.vars.obj",
            "Type": "Pass",
          },
          "Conditional False": Object {
            "Next": "Evaluate Format('hello: { ...",
            "Result": "jim",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.obj.name",
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
                      "Variable": "$.vars.obj",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.obj",
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
            "Next": "Return",
            "Parameters": Object {
              "value.$": "States.Format('hello: {}', $.tmp.var)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign obj",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.eval.value",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
