import { runConvertForTest } from "../utility";
describe("when converting try-catch", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("try-catch");
  });
  it("then simpleTry can be converted to asl", async () => {
    expect(converted.simpleTry.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "lambda()",
            "Parameters": Object {
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
          "lambda()": Object {
            "Catch": Array [
              Object {
                "ErrorEquals": Array [
                  "States.ALL",
                ],
                "Next": "Return \\"it failed\\"",
              },
            ],
            "Comment": "source: source: lambda()",
            "End": true,
            "HeartbeatSeconds": undefined,
            "Resource": "[!lambda[lambda]arn]",
            "ResultPath": null,
            "Retry": Array [
              Object {
                "BackoffRate": 2,
                "ErrorEquals": Array [
                  "Lambda.ServiceException",
                  "Lambda.AWSLambdaException",
                  "Lambda.SdkClientException",
                ],
                "IntervalSeconds": 2,
                "MaxAttempts": 6,
              },
            ],
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
        },
      }
    `);
  });
  it("then simpleMultipleStatements can be converted to asl", async () => {
    expect(converted.simpleMultipleStatements.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Return From Scope",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Parallel": Object {
            "Branches": Array [
              Object {
                "StartAt": "lambda()",
                "States": Object {
                  "Return withinTry": Object {
                    "Comment": undefined,
                    "End": true,
                    "InputPath": "$.vars.withinTry",
                    "Type": "Pass",
                  },
                  "lambda()": Object {
                    "Comment": "source: lambda()",
                    "HeartbeatSeconds": undefined,
                    "Next": "Return withinTry",
                    "Resource": "[!lambda[lambda]arn]",
                    "ResultPath": "$.vars.withinTry",
                    "Retry": Array [
                      Object {
                        "BackoffRate": 2,
                        "ErrorEquals": Array [
                          "Lambda.ServiceException",
                          "Lambda.AWSLambdaException",
                          "Lambda.SdkClientException",
                        ],
                        "IntervalSeconds": 2,
                        "MaxAttempts": 6,
                      },
                    ],
                    "TimeoutSeconds": undefined,
                    "Type": "Task",
                  },
                },
              },
            ],
            "Catch": Array [
              Object {
                "ErrorEquals": Array [
                  "States.ALL",
                ],
                "Next": "Return \\"it failed\\"",
              },
            ],
            "End": true,
            "Parameters": Object {
              "vars.$": "$.vars",
            },
            "ResultPath": "$.vars",
            "Type": "Parallel",
          },
          "Return \\"it failed\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "it failed",
            "Type": "Pass",
          },
          "Return From Scope": Object {
            "InputPath": "$.vars[0]",
            "Next": "Parallel",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then tryAroundPassState can be converted to asl", async () => {
    expect(converted.tryAroundPassState.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Return \\"this cannot fail\\"",
            "Parameters": Object {
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
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "lambda()",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"finally\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "finally",
            "Type": "Pass",
          },
          "lambda()": Object {
            "Comment": "source: source: lambda()",
            "HeartbeatSeconds": undefined,
            "Next": "Return \\"finally\\"",
            "Resource": "[!lambda[lambda]arn]",
            "ResultPath": null,
            "Retry": Array [
              Object {
                "BackoffRate": 2,
                "ErrorEquals": Array [
                  "Lambda.ServiceException",
                  "Lambda.AWSLambdaException",
                  "Lambda.SdkClientException",
                ],
                "IntervalSeconds": 2,
                "MaxAttempts": 6,
              },
            ],
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
        },
      }
    `);
  });
  it("then tryCatchFinally can be converted to asl", async () => {
    expect(converted.tryCatchFinally.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "lambda()",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Log (\\"failed\\")": Object {
            "Comment": "source: console.log(\\"failed\\")",
            "Next": "Return \\"finally\\"",
            "Result": "failed",
            "ResultPath": null,
            "Type": "Pass",
          },
          "Return \\"finally\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "finally",
            "Type": "Pass",
          },
          "lambda()": Object {
            "Catch": Array [
              Object {
                "ErrorEquals": Array [
                  "States.ALL",
                ],
                "Next": "Log (\\"failed\\")",
              },
            ],
            "Comment": "source: source: lambda()",
            "HeartbeatSeconds": undefined,
            "Next": "Return \\"finally\\"",
            "Resource": "[!lambda[lambda]arn]",
            "ResultPath": null,
            "Retry": Array [
              Object {
                "BackoffRate": 2,
                "ErrorEquals": Array [
                  "Lambda.ServiceException",
                  "Lambda.AWSLambdaException",
                  "Lambda.SdkClientException",
                ],
                "IntervalSeconds": 2,
                "MaxAttempts": 6,
              },
            ],
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
        },
      }
    `);
  });
});
