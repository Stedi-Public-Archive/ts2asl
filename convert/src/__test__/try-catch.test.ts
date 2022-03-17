import { runConvertForTest } from "./utility";

describe("when converting try-catch", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("try-catch");
  });

  it("then can convert simpleTry", async () => {
    expect(converted.simpleTry.asl).toMatchInlineSnapshot(`
      Object {
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
          "Pass": Object {
            "Comment": "source: console.log(\\"it failed\\")",
            "End": true,
            "Result": "it failed",
            "Type": "Pass",
          },
          "lambda()": Object {
            "Catch": Array [
              Object {
                "ErrorEquals": Array [
                  "States.All",
                ],
                "Next": "Pass",
              },
            ],
            "Comment": "source: source: lambda()",
            "End": true,
            "HeartbeatSeconds": undefined,
            "Resource": "lambda:lambda",
            "ResultPath": "$.vars.withoutTryCatch",
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

  it("then can convert simpleMultipleStatements", async () => {
    expect(converted.simpleMultipleStatements.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Parallel",
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
                  "Pass": Object {
                    "Comment": "source: console.log(\\"it succeeded\\")",
                    "End": true,
                    "Result": "it succeeded",
                    "Type": "Pass",
                  },
                  "lambda()": Object {
                    "Catch": undefined,
                    "Comment": "source: lambda()",
                    "HeartbeatSeconds": undefined,
                    "Next": "Pass",
                    "Resource": "lambda:lambda",
                    "ResultPath": "$.vars.withoutTryCatch",
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
                  "States.All",
                ],
                "Next": "Pass_1",
              },
            ],
            "End": true,
            "Type": "Parallel",
          },
          "Pass_1": Object {
            "Comment": "source: console.log(\\"it failed\\")",
            "End": true,
            "Result": "it failed",
            "Type": "Pass",
          },
        },
      }
    `);
  });

  it("then can convert tryAroundPassState", async () => {
    expect(converted.tryAroundPassState.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Pass",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": "source: source: console.log(\\"this cannot fail\\")",
            "End": true,
            "Result": "this cannot fail",
            "Type": "Pass",
          },
        },
      }
    `);
  });

  it("then can convert tryFinally", async () => {
    expect(converted.tryFinally.asl).toMatchInlineSnapshot(`
      Object {
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
          "Pass": Object {
            "Comment": "source: source: console.log(\\"finally\\")",
            "End": true,
            "Result": "finally",
            "Type": "Pass",
          },
          "lambda()": Object {
            "Catch": undefined,
            "Comment": "source: source: lambda()",
            "HeartbeatSeconds": undefined,
            "Next": "Pass",
            "Resource": "lambda:lambda",
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

  it("then can convert tryCatchFinally", async () => {
    expect(converted.tryCatchFinally.asl).toMatchInlineSnapshot(`
      Object {
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
          "Pass": Object {
            "Comment": "source: console.log(\\"failed\\")",
            "Next": "Pass_1",
            "Result": "failed",
            "Type": "Pass",
          },
          "Pass_1": Object {
            "Comment": "source: source: console.log(\\"finally\\")",
            "End": true,
            "Result": "finally",
            "Type": "Pass",
          },
          "lambda()": Object {
            "Catch": Array [
              Object {
                "ErrorEquals": Array [
                  "States.All",
                ],
                "Next": "Pass",
              },
            ],
            "Comment": "source: source: lambda()",
            "HeartbeatSeconds": undefined,
            "Next": "Pass_1",
            "Resource": "lambda:lambda",
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
