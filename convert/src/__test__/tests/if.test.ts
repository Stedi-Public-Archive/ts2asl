import { runConvertForTest } from "../utility";
describe("when converting if", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("if");
  });
  it("then justIf can be converted to asl", async () => {
    expect(converted.justIf.asl).toMatchInlineSnapshot(`
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
            "Next": "If (true)",
            "Result": "before",
            "ResultPath": "$.vars.val.a",
            "Type": "Pass",
          },
          "Assign val.d": Object {
            "Comment": undefined,
            "Next": "Pass",
            "Result": "after",
            "ResultPath": "$.vars.val.d",
            "Type": "Pass",
          },
          "If (true)": Object {
            "Choices": Array [
              Object {
                "IsNull": false,
                "Next": "Then",
                "Variable": "$",
              },
            ],
            "Comment": "source: if (true) { val.b = \\"true_1\\"; val.c = \\"true_2\\"; }",
            "Default": "Assign val.d",
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
                    "Result": "true_1",
                    "ResultPath": "$.vars.val.b",
                    "Type": "Pass",
                  },
                  "Assign val.c": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "true_2",
                    "ResultPath": "$.vars.val.c",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Next": "Assign val.d",
            "OutputPath": "$[0]",
            "Parameters": Object {
              "vars": Object {
                "val.$": "$.vars.val",
              },
            },
            "Type": "Parallel",
          },
        },
      }
    `);
  });
  it("then ifElse can be converted to asl", async () => {
    expect(converted.ifElse.asl).toMatchInlineSnapshot(`
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
            "Next": "If (true)",
            "Result": "before",
            "ResultPath": "$.vars.val.a",
            "Type": "Pass",
          },
          "Assign val.d": Object {
            "Comment": undefined,
            "Next": "Pass",
            "Result": "after",
            "ResultPath": "$.vars.val.d",
            "Type": "Pass",
          },
          "Else": Object {
            "Branches": Array [
              Object {
                "StartAt": "Assign val.b_1",
                "States": Object {
                  "Assign val.b_1": Object {
                    "Comment": undefined,
                    "Next": "Assign val.c_1",
                    "Result": "false_1",
                    "ResultPath": "$.vars.val.b",
                    "Type": "Pass",
                  },
                  "Assign val.c_1": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "false_2",
                    "ResultPath": "$.vars.val.c",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Next": "Assign val.d",
            "OutputPath": "$[0]",
            "Parameters": Object {
              "vars": Object {
                "val.$": "$.vars.val",
              },
            },
            "Type": "Parallel",
          },
          "If (true)": Object {
            "Choices": Array [
              Object {
                "IsNull": false,
                "Next": "Then",
                "Variable": "$",
              },
            ],
            "Comment": "source: if (true) { val.b = \\"true_1\\"; val.c = \\"true_2\\" ...",
            "Default": "Else",
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
                    "Result": "true_1",
                    "ResultPath": "$.vars.val.b",
                    "Type": "Pass",
                  },
                  "Assign val.c": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "true_2",
                    "ResultPath": "$.vars.val.c",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Next": "Assign val.d",
            "OutputPath": "$[0]",
            "Parameters": Object {
              "vars": Object {
                "val.$": "$.vars.val",
              },
            },
            "Type": "Parallel",
          },
        },
      }
    `);
  });
  it("then nestedIfs can be converted to asl", async () => {
    expect(converted.nestedIfs.asl).toMatchInlineSnapshot(`
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
            "Next": "If (true)",
            "Result": "before",
            "ResultPath": "$.vars.val.a",
            "Type": "Pass",
          },
          "Assign val.f": Object {
            "Comment": undefined,
            "Next": "Assign val.g",
            "Result": "outer_else_2",
            "ResultPath": "$.vars.val.f",
            "Type": "Pass",
          },
          "Assign val.g": Object {
            "Comment": undefined,
            "Next": "Pass",
            "Result": "after",
            "ResultPath": "$.vars.val.g",
            "Type": "Pass",
          },
          "If (true)": Object {
            "Choices": Array [
              Object {
                "IsNull": false,
                "Next": "Then_1",
                "Variable": "$",
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
          "Then_1": Object {
            "Branches": Array [
              Object {
                "StartAt": "Assign val.b",
                "States": Object {
                  "Assign val.b": Object {
                    "Comment": undefined,
                    "Next": "Assign val.c",
                    "Result": "outer_1",
                    "ResultPath": "$.vars.val.b",
                    "Type": "Pass",
                  },
                  "Assign val.c": Object {
                    "Comment": undefined,
                    "Next": "If (true)_1",
                    "Result": "outer_2",
                    "ResultPath": "$.vars.val.c",
                    "Type": "Pass",
                  },
                  "Assign val.e_1": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "inner_else_2",
                    "ResultPath": "$.vars.val.e",
                    "Type": "Pass",
                  },
                  "If (true)_1": Object {
                    "Choices": Array [
                      Object {
                        "IsNull": false,
                        "Next": "Then",
                        "Variable": "$",
                      },
                    ],
                    "Comment": "source: if (true) { val.d = \\"inner_1\\"; val.e = \\"inner_ ...",
                    "Default": "Assign val.e_1",
                    "Type": "Choice",
                  },
                  "Then": Object {
                    "Branches": Array [
                      Object {
                        "StartAt": "Assign val.d",
                        "States": Object {
                          "Assign val.d": Object {
                            "Comment": undefined,
                            "Next": "Assign val.e",
                            "Result": "inner_1",
                            "ResultPath": "$.vars.val.d",
                            "Type": "Pass",
                          },
                          "Assign val.e": Object {
                            "Comment": undefined,
                            "End": true,
                            "Result": "inner_2",
                            "ResultPath": "$.vars.val.e",
                            "Type": "Pass",
                          },
                        },
                      },
                    ],
                    "End": true,
                    "OutputPath": "$[0]",
                    "Parameters": Object {
                      "vars": Object {
                        "val.$": "$.vars.val",
                      },
                    },
                    "Type": "Parallel",
                  },
                },
              },
            ],
            "Next": "Assign val.g",
            "OutputPath": "$[0]",
            "Parameters": Object {
              "vars": Object {
                "val.$": "$.vars.val",
              },
            },
            "Type": "Parallel",
          },
        },
      }
    `);
  });
  it("then enclosedVars can be converted to asl", async () => {
    expect(converted.enclosedVars.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign enclosedVar": Object {
            "Comment": "source: enclosedVar = \\"before\\"",
            "Next": "If (true)",
            "Result": "before",
            "ResultPath": "$.vars.enclosedVar",
            "Type": "Pass",
          },
          "Assign enclosedVar_4": Object {
            "Comment": undefined,
            "Next": "Pass",
            "Result": "outer else if",
            "ResultPath": "$.vars.enclosedVar",
            "Type": "Pass",
          },
          "If (true)": Object {
            "Choices": Array [
              Object {
                "IsNull": false,
                "Next": "Then",
                "Variable": "$",
              },
            ],
            "Comment": undefined,
            "Default": "Assign enclosedVar_4",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign enclosedVar",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.enclosedVar",
            "Type": "Pass",
          },
          "Then": Object {
            "Branches": Array [
              Object {
                "StartAt": "Assign enclosedVar_1",
                "States": Object {
                  "Assign enclosedVar_1": Object {
                    "Comment": undefined,
                    "Next": "If (true)_1",
                    "Result": "outer if",
                    "ResultPath": "$.vars.enclosedVar",
                    "Type": "Pass",
                  },
                  "Assign enclosedVar_2": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "inner if",
                    "ResultPath": "$.vars.enclosedVar",
                    "Type": "Pass",
                  },
                  "Assign enclosedVar_3": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "else if",
                    "ResultPath": "$.vars.enclosedVar",
                    "Type": "Pass",
                  },
                  "If (true)_1": Object {
                    "Choices": Array [
                      Object {
                        "IsNull": false,
                        "Next": "Assign enclosedVar_2",
                        "Variable": "$",
                      },
                    ],
                    "Comment": "source: if (true) { enclosedVar = \\"inner if\\"; } else { ...",
                    "Default": "Assign enclosedVar_3",
                    "Type": "Choice",
                  },
                },
              },
            ],
            "Next": "Pass",
            "OutputPath": "$[0]",
            "Parameters": Object {
              "vars": Object {
                "enclosedVar.$": "$.vars.enclosedVar",
              },
            },
            "Type": "Parallel",
          },
        },
      }
    `);
  });
});
