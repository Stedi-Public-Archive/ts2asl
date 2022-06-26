import { runConvertForTest } from "../utility";
describe("when converting try-catch", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("try-catch");
  });
  it("then simpleTry can be converted to asl", async () => {
    expect(converted.simpleTry.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": "source: result = \\"\\"",
            "Next": "Assign result_1",
            "Result": "",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "Next": "Fail State Wrapper",
            "Result": "succeeded",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_2": Object {
            "Comment": undefined,
            "Next": "Return result",
            "Result": "failed",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Fail State Wrapper": Object {
            "Branches": Array [
              Object {
                "StartAt": "Throw Error",
                "States": Object {
                  "Throw Error": Object {
                    "Cause": "fail",
                    "Comment": "source: throw new Error(\\"fail\\");",
                    "Error": "Error",
                    "Type": "Fail",
                  },
                },
              },
            ],
            "Catch": Array [
              Object {
                "ErrorEquals": Array [
                  "States.ALL",
                ],
                "Next": "Assign result_2",
                "ResultPath": null,
              },
            ],
            "End": true,
            "Type": "Parallel",
          },
          "Initialize": Object {
            "Next": "Assign result",
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
  it("then referenceError can be converted to asl", async () => {
    expect(converted.referenceError.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": "source: result = \\"\\"",
            "Next": "Assign result_1",
            "Result": "",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "Next": "Fail State Wrapper",
            "Result": "succeeded",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_2": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Return result",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Evaluate Format('failed { ...": Object {
            "Next": "Assign result_2",
            "Parameters": Object {
              "value.$": "States.Format('failed {} ({})', $.vars.err.Error, $.vars.err.Cause)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Fail State Wrapper": Object {
            "Branches": Array [
              Object {
                "StartAt": "Throw Test Error",
                "States": Object {
                  "Throw Test Error": Object {
                    "Cause": "Failed on purpose",
                    "Comment": "source: throw asl.runtime.createError(\\"Test Error\\", \\"F ...",
                    "Error": "Test Error",
                    "Type": "Fail",
                  },
                },
              },
            ],
            "Catch": Array [
              Object {
                "ErrorEquals": Array [
                  "States.ALL",
                ],
                "Next": "Evaluate Format('failed { ...",
                "ResultPath": "$.vars.err",
              },
            ],
            "End": true,
            "Type": "Parallel",
          },
          "Initialize": Object {
            "Next": "Assign result",
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
  it("then simpleMultipleStatements can be converted to asl", async () => {
    expect(converted.simpleMultipleStatements.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: arr = [1]",
            "Next": "arr.map => x",
            "Result": Array [
              1,
            ],
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Assign withinTry": Object {
            "Comment": "source: withinTry = arr.map(x => \\"succeeded\\")",
            "InputPath": "$.tmp.result",
            "Next": "Return withinTry[0]",
            "ResultPath": "$.vars.withinTry",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign arr",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"it failed\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "it failed",
            "Type": "Pass",
          },
          "Return withinTry[0]": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.withinTry[0]",
            "Type": "Pass",
          },
          "arr.map => x": Object {
            "Catch": Array [
              Object {
                "ErrorEquals": Array [
                  "States.ALL",
                ],
                "Next": "Return \\"it failed\\"",
                "ResultPath": null,
              },
            ],
            "Comment": "source: arr.map(x => \\"succeeded\\")",
            "ItemsPath": "$.vars.arr",
            "Iterator": Object {
              "StartAt": "Return \\"succeeded\\"",
              "States": Object {
                "Return \\"succeeded\\"": Object {
                  "Comment": undefined,
                  "End": true,
                  "Result": "succeeded",
                  "Type": "Pass",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Assign withinTry",
            "Parameters": Object {
              "vars": Object {
                "x.$": "$$.Map.Item.Value",
              },
            },
            "ResultPath": "$.tmp.result",
            "Type": "Map",
          },
        },
      }
    `);
  });
  it("then tryAroundPassState can be converted to asl", async () => {
    expect(converted.tryAroundPassState.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Return \\"this cannot fail\\"",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"this cannot fail\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "this cannot fail",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then tryFinally can be converted to asl", async () => {
    expect(converted.tryFinally.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Parallel",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Parallel": Object {
            "Branches": Array [
              Object {
                "StartAt": "Return \\"succeeded\\"",
                "States": Object {
                  "Return \\"succeeded\\"": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "succeeded",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Comment": "source: Promise.all([() => \\"succeeded\\"])",
            "Next": "Return \\"finally\\"",
            "ResultPath": null,
            "Type": "Parallel",
          },
          "Return \\"finally\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "finally",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then tryCatchFinally can be converted to asl", async () => {
    expect(converted.tryCatchFinally.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": "source: result = \\"\\"",
            "Next": "Assign result_1",
            "Result": "",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "Next": "Assign result_2",
            "Result": "try",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_2": Object {
            "Comment": undefined,
            "Next": "Return result",
            "Result": "finally",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign result",
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
  it("then tryCatchFailState can be converted to asl", async () => {
    expect(converted.tryCatchFailState.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign aslError": Object {
            "Comment": "source: aslError = e as asl.AslError",
            "InputPath": "$.vars.e",
            "Next": "If (\\"Error\\" in aslError & ...",
            "ResultPath": "$.vars.aslError",
            "Type": "Pass",
          },
          "Evaluate Format('{} ({})' ...": Object {
            "Next": "Return",
            "Parameters": Object {
              "value.$": "States.Format('{} ({})', $.vars.aslError.Error, $.vars.aslError.Cause)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Fail State Wrapper": Object {
            "Branches": Array [
              Object {
                "StartAt": "Fail",
                "States": Object {
                  "Fail": Object {
                    "Cause": "bad luck",
                    "Comment": undefined,
                    "Error": "InternalFailure",
                    "Type": "Fail",
                  },
                },
              },
            ],
            "Catch": Array [
              Object {
                "ErrorEquals": Array [
                  "States.ALL",
                ],
                "Next": "Assign aslError",
                "ResultPath": "$.vars.e",
              },
            ],
            "End": true,
            "Type": "Parallel",
          },
          "If (\\"Error\\" in aslError & ...": Object {
            "Choices": Array [
              Object {
                "And": Array [
                  Object {
                    "IsPresent": true,
                    "Variable": "$.vars.aslError.Error",
                  },
                  Object {
                    "IsPresent": true,
                    "Variable": "$.vars.aslError.Cause",
                  },
                ],
                "Next": "Evaluate Format('{} ({})' ...",
              },
            ],
            "Comment": "source: if (\\"Error\\" in aslError && \\"Cause\\" in aslError ...",
            "Default": "Return \\"this should not h ...",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Fail State Wrapper",
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
          "Return \\"this should not h ...": Object {
            "Comment": undefined,
            "End": true,
            "Result": "this should not happen",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
