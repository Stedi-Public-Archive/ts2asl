import { runConvertForTest } from "../utility";
describe("when converting nested-stepfunctions", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("nested-stepfunctions");
  });
  it("then callStateMachineWithAwait can be converted to asl", async () => {
    expect(converted.callStateMachineWithAwait.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Pass",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Next": "childStateMachine({firstN ...",
            "Parameters": Object {
              "AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID.$": "$$.Execution.Id",
              "firstName": "Santa",
              "lastName": "Claus",
            },
            "ResultPath": "$.tmp.eval1",
            "Type": "Pass",
          },
          "Return name": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.name",
            "Type": "Pass",
          },
          "childStateMachine({firstN ...": Object {
            "Comment": "source: childStateMachine({firstName: \\"Santa\\", lastNam ...",
            "HeartbeatSeconds": undefined,
            "Next": "Return name",
            "Parameters": Object {
              "Input.$": "States.JsonToString($.tmp.eval1)",
              "StateMachineArn": "[!state-machine[childStateMachine]arn]",
            },
            "Resource": "arn:aws:states:::states:startExecution.sync",
            "ResultPath": "$.vars.name",
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
  it("then callStateMachineNoAwait can be converted to asl", async () => {
    expect(converted.callStateMachineNoAwait.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Pass",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Next": "childStateMachine({firstN ...",
            "Parameters": Object {
              "AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID.$": "$$.Execution.Id",
              "firstName": "Santa",
              "lastName": "Claus",
            },
            "ResultPath": "$.tmp.eval1",
            "Type": "Pass",
          },
          "childStateMachine({firstN ...": Object {
            "Comment": "source: childStateMachine({firstName: \\"Santa\\", lastNam ...",
            "End": true,
            "HeartbeatSeconds": undefined,
            "Parameters": Object {
              "Input.$": "States.JsonToString($.tmp.eval1)",
              "StateMachineArn": "[!state-machine[childStateMachine]arn]",
            },
            "Resource": "arn:aws:states:::states:startExecution",
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
  it("then callLambdaWithAwait can be converted to asl", async () => {
    expect(converted.callLambdaWithAwait.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "childLambda({firstName: \\" ...",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return name": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.name",
            "Type": "Pass",
          },
          "childLambda({firstName: \\" ...": Object {
            "Comment": "source: childLambda({firstName: \\"Santa\\", lastName: \\"Cl ...",
            "HeartbeatSeconds": undefined,
            "Next": "Return name",
            "Parameters": Object {
              "firstName": "Santa",
              "lastName": "Claus",
            },
            "Resource": "[!lambda[childLambda]arn]",
            "ResultPath": "$.vars.name",
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

  it("then notAwaitedVoidExpression can be converted to asl", async () => {
    expect(converted.notAwaitedVoidExpression.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Pass",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Next": "childStateMachine({firstN ...",
            "Parameters": Object {
              "AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID.$": "$$.Execution.Id",
              "firstName": "Santa",
              "lastName": "Claus",
            },
            "ResultPath": "$.tmp.eval1",
            "Type": "Pass",
          },
          "childStateMachine({firstN ...": Object {
            "Comment": "source: childStateMachine({firstName: \\"Santa\\", lastNam ...",
            "End": true,
            "HeartbeatSeconds": undefined,
            "Parameters": Object {
              "Input.$": "States.JsonToString($.tmp.eval1)",
              "StateMachineArn": "[!state-machine[childStateMachine]arn]",
            },
            "Resource": "arn:aws:states:::states:startExecution",
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
  it("then childStateMachine can be converted to asl", async () => {
    expect(converted.childStateMachine.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign Result": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Return result",
            "ResultPath": "$.tmp.result",
            "Type": "Pass",
          },
          "Evaluate Format('{} {}', ...": Object {
            "Next": "Assign Result",
            "Parameters": Object {
              "value.$": "States.Format('{} {}', $.vars.firstName, $.vars.lastName)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Evaluate Format('{} {}', ...",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return result": Object {
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
