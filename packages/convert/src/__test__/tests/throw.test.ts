import { runConvertForTest } from "../utility";
describe("when converting throw", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("throw");
  });
  it("then tryCatch can be converted to asl", async () => {
    expect(converted.tryCatch.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Empty Default Choice": Object {
            "End": true,
            "ResultPath": null,
            "Type": "Pass",
          },
          "Fail State Wrapper": Object {
            "Branches": Array [
              Object {
                "StartAt": "Throw NotImplemented",
                "States": Object {
                  "Throw NotImplemented": Object {
                    "Cause": "not implemented",
                    "Comment": "source: throw new NotImplemented(\\"not implemented\\")",
                    "Error": "NotImplemented",
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
                "Next": "If (err.Cause === \\"NotImp ...",
                "ResultPath": "$.vars.err",
              },
            ],
            "End": true,
            "Type": "Parallel",
          },
          "If (err.Cause === \\"NotImp ...": Object {
            "Choices": Array [
              Object {
                "Next": "Return \\"Todo\\"",
                "StringEquals": "NotImplemented",
                "Variable": "$.vars.err.Cause",
              },
            ],
            "Comment": "source: if (err.Cause === \\"NotImplemented\\") { return \\" ...",
            "Default": "Empty Default Choice",
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
          "Return \\"Todo\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "Todo",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then throwErrors can be converted to asl", async () => {
    expect(converted.throwErrors.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "If (input.delayInSeconds ...": Object {
            "Choices": Array [
              Object {
                "Next": "Throw ValidationError",
                "Or": Array [
                  Object {
                    "NumericGreaterThan": 10,
                    "Variable": "$.vars.delayInSeconds",
                  },
                  Object {
                    "NumericLessThan": 1,
                    "Variable": "$.vars.delayInSeconds",
                  },
                ],
              },
            ],
            "Comment": "source: if (input.delayInSeconds > 10 || input.delayIn ...",
            "Default": "Throw NotImplemented",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (input.delayInSeconds ...",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Throw NotImplemented": Object {
            "Cause": "not implemented",
            "Comment": "source: throw new NotImplemented(\\"not implemented\\")",
            "Error": "NotImplemented",
            "Type": "Fail",
          },
          "Throw ValidationError": Object {
            "Cause": "delay in seconds must be numeric value no greater than 10 and no smaller than 1",
            "Comment": "source: throw new ValidationError(\\"delay in seconds mu ...",
            "Error": "ValidationError",
            "Type": "Fail",
          },
        },
      }
    `);
  });
  it("then RetryErrors can be converted to asl", async () => {
    expect(converted.RetryErrors.asl).toMatchInlineSnapshot(`
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
                "StartAt": "Throw RetryableError",
                "States": Object {
                  "Throw RetryableError": Object {
                    "Cause": "retry me",
                    "Comment": "source: throw new RetryableError(\\"retry me\\")",
                    "Error": "RetryableError",
                    "Type": "Fail",
                  },
                },
              },
            ],
            "Comment": undefined,
            "End": true,
            "ResultPath": null,
            "Retry": Array [
              Object {
                "BackoffRate": 1.5,
                "ErrorEquals": Array [
                  "RetryableError",
                ],
                "IntervalSeconds": 3,
                "MaxAttempts": 2,
              },
            ],
            "Type": "Parallel",
          },
        },
      }
    `);
  });
  it("then CatchErrors can be converted to asl", async () => {
    expect(converted.CatchErrors.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Evaluate Format('cause {} ...": Object {
            "Next": "Log (\`cause \${error.Cause}\`)",
            "Parameters": Object {
              "value.$": "States.Format('cause {}', $.vars.error.Cause)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('message ...": Object {
            "Next": "Log (\`message \${error.Err ...",
            "Parameters": Object {
              "value.$": "States.Format('message {}', $.vars.error.Error)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
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
          "Log (\`cause \${error.Cause}\`)": Object {
            "Comment": "source: console.log(\`cause \${error.Cause}\`)",
            "InputPath": "$.tmp.eval.value",
            "Next": "Evaluate Format('message ...",
            "ResultPath": null,
            "Type": "Pass",
          },
          "Log (\`message \${error.Err ...": Object {
            "Comment": "source: console.log(\`message \${error.Error}\`)",
            "End": true,
            "InputPath": "$.tmp.eval.value",
            "ResultPath": null,
            "Type": "Pass",
          },
          "Parallel": Object {
            "Branches": Array [
              Object {
                "StartAt": "Throw UnexpectedError",
                "States": Object {
                  "Throw UnexpectedError": Object {
                    "Cause": "bad luck!",
                    "Comment": "source: throw new UnexpectedError(\\"bad luck!\\")",
                    "Error": "UnexpectedError",
                    "Type": "Fail",
                  },
                },
              },
            ],
            "Catch": Array [
              Object {
                "ErrorEquals": Array [
                  "UnexpectedError",
                ],
                "Next": "Evaluate Format('cause {} ...",
                "ResultPath": "$.vars.error",
              },
            ],
            "Comment": undefined,
            "End": true,
            "ResultPath": null,
            "Retry": Array [
              Object {
                "BackoffRate": 1.5,
                "ErrorEquals": Array [
                  "RetryableError",
                ],
                "IntervalSeconds": 3,
                "MaxAttempts": 2,
              },
            ],
            "Type": "Parallel",
          },
        },
      }
    `);
  });
});
