import { runConvertForTest } from "../utility";
describe("when converting parallel", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("parallel");
  });
  it("then simple can be converted to asl", async () => {
    expect(converted.simple.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign Return_var": Object {
            "Branches": Array [
              Object {
                "StartAt": "worker()",
                "States": Object {
                  "Pass": Object {
                    "Comment": undefined,
                    "End": true,
                    "InputPath": "$.vars.return_var",
                    "Type": "Pass",
                  },
                  "worker()": Object {
                    "Comment": "source: worker()",
                    "HeartbeatSeconds": undefined,
                    "Next": "Pass",
                    "Resource": "[!lambda[worker]arn]",
                    "ResultPath": "$.vars.return_var",
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
              Object {
                "StartAt": "worker()_1",
                "States": Object {
                  "Pass_1": Object {
                    "Comment": undefined,
                    "End": true,
                    "InputPath": "$.vars.return_var",
                    "Type": "Pass",
                  },
                  "worker()_1": Object {
                    "Comment": "source: worker()",
                    "HeartbeatSeconds": undefined,
                    "Next": "Pass_1",
                    "Resource": "[!lambda[worker]arn]",
                    "ResultPath": "$.vars.return_var",
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
            "Catch": undefined,
            "Comment": "source: Promise.all([worker(), worker()])",
            "Next": "Pass_2",
            "Parameters": Object {
              "vars": Object {
                "return_var.$": "$.vars.return_var",
              },
            },
            "ResultPath": "$.tmp.return_var",
            "Retry": undefined,
            "Type": "Parallel",
          },
          "Initialize": Object {
            "Next": "Assign Return_var",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass_2": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.return_var",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then enclosedVariables can be converted to asl", async () => {
    expect(converted.enclosedVariables.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign Return_var": Object {
            "Branches": Array [
              Object {
                "StartAt": "worker(enclosedVar1)",
                "States": Object {
                  "worker(enclosedVar1)": Object {
                    "Comment": "source: worker(enclosedVar1)",
                    "End": true,
                    "HeartbeatSeconds": undefined,
                    "InputPath": "$.vars.enclosedVar1",
                    "Resource": "[!lambda[worker]arn]",
                    "ResultPath": "$.tmp.lastResult",
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
              Object {
                "StartAt": "worker(enclosedVar2)",
                "States": Object {
                  "worker(enclosedVar2)": Object {
                    "Comment": "source: worker(enclosedVar2)",
                    "End": true,
                    "HeartbeatSeconds": undefined,
                    "InputPath": "$.vars.enclosedVar2",
                    "Resource": "[!lambda[worker]arn]",
                    "ResultPath": "$.tmp.lastResult",
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
            "Catch": undefined,
            "Comment": "source: Promise.all([ async () => { await worker(enclo ...",
            "Next": "Pass",
            "Parameters": Object {
              "vars": Object {
                "enclosedVar1.$": "$.vars.enclosedVar1",
                "enclosedVar2.$": "$.vars.enclosedVar2",
              },
            },
            "ResultPath": "$.tmp.return_var",
            "Retry": undefined,
            "Type": "Parallel",
          },
          "Assign enclosedVar1": Object {
            "Comment": "source: enclosedVar1 = { something: \\"left\\" }",
            "Next": "Assign enclosedVar2",
            "Result": Object {
              "something": "left",
            },
            "ResultPath": "$.vars.enclosedVar1",
            "Type": "Pass",
          },
          "Assign enclosedVar2": Object {
            "Comment": "source: enclosedVar2 = { something: \\"right\\" }",
            "Next": "Assign Return_var",
            "Result": Object {
              "something": "right",
            },
            "ResultPath": "$.vars.enclosedVar2",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign enclosedVar1",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.return_var",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
