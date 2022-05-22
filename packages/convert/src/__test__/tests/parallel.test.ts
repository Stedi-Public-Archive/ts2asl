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
          "Initialize": Object {
            "Next": "Parallel",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Parallel": Object {
            "Branches": Array [
              Object {
                "StartAt": "worker()",
                "States": Object {
                  "Return": Object {
                    "Comment": undefined,
                    "End": true,
                    "InputPath": "$.vars.return_var",
                    "Type": "Pass",
                  },
                  "worker()": Object {
                    "Comment": "source: worker()",
                    "HeartbeatSeconds": undefined,
                    "Next": "Return",
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
                  "Return_1": Object {
                    "Comment": undefined,
                    "End": true,
                    "InputPath": "$.vars.return_var",
                    "Type": "Pass",
                  },
                  "worker()_1": Object {
                    "Comment": "source: worker()",
                    "HeartbeatSeconds": undefined,
                    "Next": "Return_1",
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
            "Comment": "source: Promise.all([worker(), worker()])",
            "Next": "Return_2",
            "ResultPath": "$.tmp.result",
            "Type": "Parallel",
          },
          "Return_2": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.result",
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
            "Next": "Parallel",
            "Result": Object {
              "something": "right",
            },
            "ResultPath": "$.vars.enclosedVar2",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign enclosedVar1",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Parallel": Object {
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
              },
            ],
            "Comment": "source: Promise.all([ async () => { await worker(enclo ...",
            "Next": "Return",
            "Parameters": Object {
              "vars": Object {
                "enclosedVar1.$": "$.vars.enclosedVar1",
                "enclosedVar2.$": "$.vars.enclosedVar2",
              },
            },
            "ResultPath": "$.tmp.result",
            "Type": "Parallel",
          },
          "Return": Object {
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
