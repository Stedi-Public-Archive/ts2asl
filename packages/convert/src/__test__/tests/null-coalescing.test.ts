import { runConvertForTest } from "../utility";
describe("when converting null-coalescing", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("null-coalescing");
  });
  it("then nullCoalescing can be converted to asl", async () => {
    expect(converted.nullCoalescing.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign obj": Object {
            "Comment": "source: obj = { name: undefined as string | undefined }",
            "Next": "Assign result",
            "Parameters": Object {
              "name.$": "$._undefined",
            },
            "ResultPath": "$.vars.obj",
            "Type": "Pass",
          },
          "Assign obj.name": Object {
            "Comment": undefined,
            "Next": "Eval Conditional_1",
            "Result": "jack",
            "ResultPath": "$.vars.obj.name",
            "Type": "Pass",
          },
          "Assign result": Object {
            "Comment": "source: result: { a?: string, b?: string; } = {}",
            "Next": "Eval Conditional",
            "Result": Object {},
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result.a": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.var",
            "Next": "Assign obj.name",
            "ResultPath": "$.vars.result.a",
            "Type": "Pass",
          },
          "Assign result.b": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.var",
            "Next": "Return result",
            "ResultPath": "$.vars.result.b",
            "Type": "Pass",
          },
          "Conditional False": Object {
            "Next": "Assign result.a",
            "Result": "jim",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_1": Object {
            "Next": "Assign result.b",
            "Result": "jim",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.obj.name",
            "Next": "Assign result.a",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_1": Object {
            "InputPath": "$.vars.obj.name",
            "Next": "Assign result.b",
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
                "Next": "Conditional True_1",
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
          "Return result": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.result",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then nullCoalescingWithLiteral can be converted to asl", async () => {
    expect(converted.nullCoalescingWithLiteral.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Conditional False": Object {
            "Next": "Return",
            "Result": "jim",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$._null",
            "Next": "Return",
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
          "Return": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.var",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then nullCoalescingWithinExpression can be converted to asl", async () => {
    expect(converted.nullCoalescingWithinExpression.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign obj": Object {
            "Comment": "source: obj = { name: \\"world\\" }",
            "Next": "Evaluate Format('hello {} ...",
            "Result": Object {
              "name": "world",
            },
            "ResultPath": "$.vars.obj",
            "Type": "Pass",
          },
          "Conditional False": Object {
            "Next": "Return",
            "Result": "you",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.tmp.eval.value",
            "Next": "Return",
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
          "Evaluate Format('hello {} ...": Object {
            "Next": "Evaluate Format('hello {} ..._1",
            "Parameters": Object {
              "value.$": "States.Format('hello {}', $.vars.obj.name)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('hello {} ..._1": Object {
            "Next": "Eval Conditional",
            "Parameters": Object {
              "value.$": "States.Format('hello {}', $.vars.obj.name)",
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
            "InputPath": "$.tmp.var",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then nestedNullCoalescing can be converted to asl", async () => {
    expect(converted.nestedNullCoalescing.asl).toMatchInlineSnapshot(`
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
            "InputPath": "$.vars.obj.name",
            "Next": "Eval Conditional_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_1": Object {
            "InputPath": "$.vars.obj.name",
            "Next": "Eval Conditional_2",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_2": Object {
            "Next": "Return",
            "Result": "world",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$._null",
            "Next": "Eval Conditional_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_1": Object {
            "InputPath": "$._null",
            "Next": "Eval Conditional_2",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_2": Object {
            "InputPath": "$.tmp.var",
            "Next": "Return",
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
            "InputPath": "$.tmp.var",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then nullCoalescingWithinStringFormat can be converted to asl", async () => {
    expect(converted.nullCoalescingWithinStringFormat.asl)
      .toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign obj": Object {
            "Comment": "source: obj = { name: undefined as string | undefined }",
            "Next": "Assign result",
            "Parameters": Object {
              "name.$": "$._undefined",
            },
            "ResultPath": "$.vars.obj",
            "Type": "Pass",
          },
          "Assign obj.name": Object {
            "Comment": undefined,
            "Next": "Eval Conditional_1",
            "Result": "jack",
            "ResultPath": "$.vars.obj.name",
            "Type": "Pass",
          },
          "Assign result": Object {
            "Comment": "source: result: { a?: string, b?: string; } = {}",
            "Next": "Eval Conditional",
            "Result": Object {},
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result.a": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Assign obj.name",
            "ResultPath": "$.vars.result.a",
            "Type": "Pass",
          },
          "Assign result.b": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Return result",
            "ResultPath": "$.vars.result.b",
            "Type": "Pass",
          },
          "Conditional False": Object {
            "Next": "Evaluate Format('hello: { ...",
            "Result": "jim",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_1": Object {
            "Next": "Evaluate Format('hello: { ..._1",
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
          "Conditional True_1": Object {
            "InputPath": "$.vars.obj.name",
            "Next": "Evaluate Format('hello: { ..._1",
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
                "Next": "Conditional True_1",
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
            "Default": "Conditional False_1",
            "Type": "Choice",
          },
          "Evaluate Format('hello: { ...": Object {
            "Next": "Assign result.a",
            "Parameters": Object {
              "value.$": "States.Format('hello: {}', $.tmp.var)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('hello: { ..._1": Object {
            "Next": "Assign result.b",
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
          "Return result": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.result",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
