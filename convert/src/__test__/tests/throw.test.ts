import { runConvertForTest } from "../utility";
describe("when converting throw", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("throw");
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
            "Catch": undefined,
            "Comment": undefined,
            "End": true,
            "ResultPath": "$.tmp.lastResult",
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
                "Next": "Parallel_1",
                "ResultPath": "$.vars.error",
              },
            ],
            "Comment": undefined,
            "End": true,
            "ResultPath": "$.tmp.lastResult",
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
          "Parallel_1": Object {
            "Branches": Array [
              Object {
                "StartAt": "Log (\`cause \${error.Cause}\`)",
                "States": Object {
                  "Log (\`cause \${error.Cause}\`)": Object {
                    "Comment": "source: result of an expression cannot be placed in In ...",
                    "Next": "Log (\`cause \${error.Cause}\`)_1",
                    "Parameters": Object {
                      "value.$": "States.Format('cause {}', $.vars.error.Cause)",
                    },
                    "ResultPath": "$.lastResult",
                    "Type": "Pass",
                  },
                  "Log (\`cause \${error.Cause}\`)_1": Object {
                    "Comment": "source: console.log(\`cause \${error.Cause}\`)",
                    "InputPath": "$.lastResult.value",
                    "Next": "Log (\`message \${error.Err ...",
                    "ResultPath": "$.lastResult",
                    "Type": "Pass",
                  },
                  "Log (\`message \${error.Err ...": Object {
                    "Comment": "source: result of an expression cannot be placed in In ...",
                    "Next": "Log (\`message \${error.Err ..._1",
                    "Parameters": Object {
                      "value.$": "States.Format('message {}', $.vars.error.Error)",
                    },
                    "ResultPath": "$.lastResult",
                    "Type": "Pass",
                  },
                  "Log (\`message \${error.Err ..._1": Object {
                    "Comment": "source: console.log(\`message \${error.Error}\`)",
                    "End": true,
                    "InputPath": "$.lastResult.value",
                    "ResultPath": "$.lastResult",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "End": true,
            "OutputPath": "$[0]",
            "Parameters": Object {
              "vars.$": "$.vars",
            },
            "ResultPath": "$.tmp.lastResult",
            "Type": "Parallel",
          },
        },
      }
    `);
  });
});
