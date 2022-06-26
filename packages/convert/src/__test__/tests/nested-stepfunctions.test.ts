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
          "Assign name": Object {
            "Comment": "source: name = await childStateMachine({firstName: \\"Sa ...",
            "InputPath": "$.tmp.result",
            "Next": "Return name",
            "ResultPath": "$.vars.name",
            "Type": "Pass",
          },
          "Convert Result": Object {
            "InputPath": "$.tmp.eval.value",
            "Next": "Assign name",
            "ResultPath": "$.tmp.result",
            "Type": "Pass",
          },
          "Evaluate StringToJson($.t ...": Object {
            "Next": "Convert Result",
            "Parameters": Object {
              "value.$": "States.StringToJson($.tmp.result.Output)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "childStateMachine({firstN ...",
            "Parameters": Object {
              "_null": null,
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
          "childStateMachine({firstN ...": Object {
            "Comment": "source: childStateMachine({firstName: \\"Santa\\", lastNam ...",
            "Next": "Evaluate StringToJson($.t ...",
            "Parameters": Object {
              "Input": Object {
                "AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID.$": "$$.Execution.Id",
                "firstName": "Santa",
                "lastName": "Claus",
              },
              "StateMachineArn": "[!state-machine[childStateMachine]arn]",
            },
            "Resource": "arn:aws:states:::states:startExecution.sync",
            "ResultPath": "$.tmp.result",
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
            "Type": "Task",
          },
        },
      }
    `);
  });
  it("then callStateMachinePassReference can be converted to asl", async () => {
    expect(converted.callStateMachinePassReference.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Add AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID": Object {
            "Comment": undefined,
            "InputPath": "$$.Execution.Id",
            "Next": "childStateMachine(args)",
            "ResultPath": "$.tmp.result.AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID",
            "Type": "Pass",
          },
          "Assign args": Object {
            "Comment": "source: args = {firstName: \\"Santa\\", lastName: \\"Claus\\" }",
            "Next": "Create Copy",
            "Result": Object {
              "firstName": "Santa",
              "lastName": "Claus",
            },
            "ResultPath": "$.vars.args",
            "Type": "Pass",
          },
          "Assign name": Object {
            "Comment": "source: name = await childStateMachine(args)",
            "InputPath": "$.tmp.result",
            "Next": "Return name",
            "ResultPath": "$.vars.name",
            "Type": "Pass",
          },
          "Convert Result": Object {
            "InputPath": "$.tmp.eval.value",
            "Next": "Assign name",
            "ResultPath": "$.tmp.result",
            "Type": "Pass",
          },
          "Create Copy": Object {
            "InputPath": "$.vars.args",
            "Next": "Add AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID",
            "ResultPath": "$.tmp.result",
            "Type": "Pass",
          },
          "Evaluate StringToJson($.t ...": Object {
            "Next": "Convert Result",
            "Parameters": Object {
              "value.$": "States.StringToJson($.tmp.result.Output)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign args",
            "Parameters": Object {
              "_null": null,
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
          "childStateMachine(args)": Object {
            "Comment": "source: childStateMachine(args)",
            "Next": "Evaluate StringToJson($.t ...",
            "Parameters": Object {
              "Input.$": "$.tmp.result",
              "StateMachineArn": "[!state-machine[childStateMachine]arn]",
            },
            "Resource": "arn:aws:states:::states:startExecution.sync",
            "ResultPath": "$.tmp.result",
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
            "Next": "childStateMachine({firstN ...",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "childStateMachine({firstN ...": Object {
            "Comment": "source: childStateMachine({firstName: \\"Santa\\", lastNam ...",
            "End": true,
            "Parameters": Object {
              "Input": Object {
                "AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID.$": "$$.Execution.Id",
                "firstName": "Santa",
                "lastName": "Claus",
              },
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
          "Assign name": Object {
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
          "Initialize": Object {
            "Next": "Assign name",
            "Parameters": Object {
              "_null": null,
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
            "Next": "childStateMachine({firstN ...",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "childStateMachine({firstN ...": Object {
            "Comment": "source: childStateMachine({firstName: \\"Santa\\", lastNam ...",
            "End": true,
            "Parameters": Object {
              "Input": Object {
                "AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID.$": "$$.Execution.Id",
                "firstName": "Santa",
                "lastName": "Claus",
              },
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
          "Evaluate Format('{} {}', ...": Object {
            "Next": "Return",
            "Parameters": Object {
              "value.$": "States.Format('{} {}', $.vars.firstName, $.vars.lastName)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Evaluate Format('{} {}', ...",
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
        },
      }
    `);
  });
});
