import { Converted, ConvertedStateMachine } from "../convert";
import { runConvertForTest } from "./utility";

describe("when converting if", () => {
  let converted: Record<string, ConvertedStateMachine>;

  beforeAll(() => {
    converted = runConvertForTest("if");
  });

  it("then can convert justIf", async () => {
    expect(converted.justIf.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign after": Object {
            "Comment": "source: after = true",
            "End": true,
            "Result": true,
            "ResultPath": "$.vars.after",
            "Type": "Pass",
          },
          "Assign before": Object {
            "Comment": "source: before = true",
            "Next": "If (true)",
            "Result": true,
            "ResultPath": "$.vars.before",
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
            "Comment": "source: if (true) { let true_1 = true; let true_2 = tr ...",
            "Default": "Assign after",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign before",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Then": Object {
            "Branches": Array [
              Object {
                "StartAt": "Assign true_1",
                "States": Object {
                  "Assign true_1": Object {
                    "Comment": "source: true_1 = true",
                    "Next": "Assign true_2",
                    "Result": true,
                    "ResultPath": "$.vars.true_1",
                    "Type": "Pass",
                  },
                  "Assign true_2": Object {
                    "Comment": "source: true_2 = true",
                    "End": true,
                    "Result": true,
                    "ResultPath": "$.vars.true_2",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Next": "Assign after",
            "Type": "Parallel",
          },
        },
      }
    `);
  });

  it("then can convert ifElse", async () => {
    expect(converted.ifElse.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign after": Object {
            "Comment": "source: after = true",
            "End": true,
            "Result": true,
            "ResultPath": "$.vars.after",
            "Type": "Pass",
          },
          "Assign before": Object {
            "Comment": "source: before = true",
            "Next": "If (true)",
            "Result": true,
            "ResultPath": "$.vars.before",
            "Type": "Pass",
          },
          "Else": Object {
            "Branches": Array [
              Object {
                "StartAt": "Assign false_1",
                "States": Object {
                  "Assign false_1": Object {
                    "Comment": "source: false_1 = true",
                    "Next": "Assign false_2",
                    "Result": true,
                    "ResultPath": "$.vars.false_1",
                    "Type": "Pass",
                  },
                  "Assign false_2": Object {
                    "Comment": "source: false_2 = true",
                    "End": true,
                    "Result": true,
                    "ResultPath": "$.vars.false_2",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Next": "Assign after",
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
            "Comment": "source: if (true) { let true_1 = true; let true_2 = tr ...",
            "Default": "Else",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign before",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Then": Object {
            "Branches": Array [
              Object {
                "StartAt": "Assign true_1",
                "States": Object {
                  "Assign true_1": Object {
                    "Comment": "source: true_1 = true",
                    "Next": "Assign true_2",
                    "Result": true,
                    "ResultPath": "$.vars.true_1",
                    "Type": "Pass",
                  },
                  "Assign true_2": Object {
                    "Comment": "source: true_2 = true",
                    "End": true,
                    "Result": true,
                    "ResultPath": "$.vars.true_2",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Next": "Assign after",
            "Type": "Parallel",
          },
        },
      }
    `);
  });

  it("then can convert nestedIfs", async () => {
    expect(converted.nestedIfs.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign after_all": Object {
            "Comment": "source: after_all = true",
            "End": true,
            "Result": true,
            "ResultPath": "$.vars.after_all",
            "Type": "Pass",
          },
          "Assign before_nested": Object {
            "Comment": "source: before_nested = true",
            "Next": "If (true)",
            "Result": true,
            "ResultPath": "$.vars.before_nested",
            "Type": "Pass",
          },
          "Assign outer_else": Object {
            "Comment": "source: source: outer_else = true",
            "Next": "Assign after_all",
            "Result": true,
            "ResultPath": "$.vars.outer_else",
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
            "Default": "Assign outer_else",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign before_nested",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Then_1": Object {
            "Branches": Array [
              Object {
                "StartAt": "Assign outer_1",
                "States": Object {
                  "Assign inner_else": Object {
                    "Comment": "source: source: inner_else = true",
                    "End": true,
                    "Result": true,
                    "ResultPath": "$.vars.inner_else",
                    "Type": "Pass",
                  },
                  "Assign outer_1": Object {
                    "Comment": "source: outer_1 = true",
                    "Next": "Assign outer_2",
                    "Result": true,
                    "ResultPath": "$.vars.outer_1",
                    "Type": "Pass",
                  },
                  "Assign outer_2": Object {
                    "Comment": "source: outer_2 = true",
                    "Next": "If (true)_1",
                    "Result": true,
                    "ResultPath": "$.vars.outer_2",
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
                    "Comment": "source: if (true) { let inner_1 = true; let inner_2 =  ...",
                    "Default": "Assign inner_else",
                    "Type": "Choice",
                  },
                  "Then": Object {
                    "Branches": Array [
                      Object {
                        "StartAt": "Assign inner_1",
                        "States": Object {
                          "Assign inner_1": Object {
                            "Comment": "source: inner_1 = true",
                            "Next": "Assign inner_2",
                            "Result": true,
                            "ResultPath": "$.vars.inner_1",
                            "Type": "Pass",
                          },
                          "Assign inner_2": Object {
                            "Comment": "source: inner_2 = true",
                            "End": true,
                            "Result": true,
                            "ResultPath": "$.vars.inner_2",
                            "Type": "Pass",
                          },
                        },
                      },
                    ],
                    "End": true,
                    "Type": "Parallel",
                  },
                },
              },
            ],
            "Next": "Assign after_all",
            "Type": "Parallel",
          },
        },
      }
    `);
  });

  it("then can convert enclosedVars", async () => {
    expect(converted.nestedIfs.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign after_all": Object {
            "Comment": "source: after_all = true",
            "End": true,
            "Result": true,
            "ResultPath": "$.vars.after_all",
            "Type": "Pass",
          },
          "Assign before_nested": Object {
            "Comment": "source: before_nested = true",
            "Next": "If (true)",
            "Result": true,
            "ResultPath": "$.vars.before_nested",
            "Type": "Pass",
          },
          "Assign outer_else": Object {
            "Comment": "source: source: outer_else = true",
            "Next": "Assign after_all",
            "Result": true,
            "ResultPath": "$.vars.outer_else",
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
            "Default": "Assign outer_else",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign before_nested",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Then_1": Object {
            "Branches": Array [
              Object {
                "StartAt": "Assign outer_1",
                "States": Object {
                  "Assign inner_else": Object {
                    "Comment": "source: source: inner_else = true",
                    "End": true,
                    "Result": true,
                    "ResultPath": "$.vars.inner_else",
                    "Type": "Pass",
                  },
                  "Assign outer_1": Object {
                    "Comment": "source: outer_1 = true",
                    "Next": "Assign outer_2",
                    "Result": true,
                    "ResultPath": "$.vars.outer_1",
                    "Type": "Pass",
                  },
                  "Assign outer_2": Object {
                    "Comment": "source: outer_2 = true",
                    "Next": "If (true)_1",
                    "Result": true,
                    "ResultPath": "$.vars.outer_2",
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
                    "Comment": "source: if (true) { let inner_1 = true; let inner_2 =  ...",
                    "Default": "Assign inner_else",
                    "Type": "Choice",
                  },
                  "Then": Object {
                    "Branches": Array [
                      Object {
                        "StartAt": "Assign inner_1",
                        "States": Object {
                          "Assign inner_1": Object {
                            "Comment": "source: inner_1 = true",
                            "Next": "Assign inner_2",
                            "Result": true,
                            "ResultPath": "$.vars.inner_1",
                            "Type": "Pass",
                          },
                          "Assign inner_2": Object {
                            "Comment": "source: inner_2 = true",
                            "End": true,
                            "Result": true,
                            "ResultPath": "$.vars.inner_2",
                            "Type": "Pass",
                          },
                        },
                      },
                    ],
                    "End": true,
                    "Type": "Parallel",
                  },
                },
              },
            ],
            "Next": "Assign after_all",
            "Type": "Parallel",
          },
        },
      }
    `);
  });
});
