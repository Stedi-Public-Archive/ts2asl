import { runConvertForTest } from "../utility";
describe("when converting switch", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("switch");
  });
  it("then simpleSwitch can be converted to asl", async () => {
    expect(converted.simpleSwitch.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: arr = [1, 2, 3]",
            "Next": "Assign result",
            "Result": Array [
              1,
              2,
              3,
            ],
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Assign result": Object {
            "Comment": "source: result = \\"\\"",
            "Next": "Foreach Initialize",
            "Result": "",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Foreach Next",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_2": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Foreach Next",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_3": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Foreach Next",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Evaluate Format('{}one', ...": Object {
            "Next": "Assign result_1",
            "Parameters": Object {
              "value.$": "States.Format('{}one', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('{}three' ...": Object {
            "Next": "Assign result_3",
            "Parameters": Object {
              "value.$": "States.Format('{}three', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('{}two', ...": Object {
            "Next": "Assign result_2",
            "Parameters": Object {
              "value.$": "States.Format('{}two', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Foreach CheckDone": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "Switch (item)",
                "Variable": "$.foreach.items[0]",
              },
            ],
            "Default": "Foreach Exit",
            "Type": "Choice",
          },
          "Foreach Exit": Object {
            "Next": "Return result",
            "Result": Object {},
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Initialize": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.vars.arr[0]",
              "items.$": "$.vars.arr",
            },
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Next": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.foreach.items[1]",
              "items.$": "$.foreach.items[1:]",
            },
            "ResultPath": "$.foreach",
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
          "Return result": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.result",
            "Type": "Pass",
          },
          "Switch (item)": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate Format('{}one', ...",
                "NumericEquals": 1,
                "Variable": "$.foreach.currentItem",
              },
              Object {
                "Next": "Evaluate Format('{}two', ...",
                "NumericEquals": 2,
                "Variable": "$.foreach.currentItem",
              },
            ],
            "Comment": "source: switch (item) { case 1: result = \`\${result}one ...",
            "Default": "Evaluate Format('{}three' ...",
            "Type": "Choice",
          },
        },
      }
    `);
  });
  it("then switchCaseFallsThrough can be converted to asl", async () => {
    expect(converted.switchCaseFallsThrough.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: arr = [1, 2, 3]",
            "Next": "Assign result",
            "Result": Array [
              1,
              2,
              3,
            ],
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Assign result": Object {
            "Comment": "source: result = \\"\\"",
            "Next": "Foreach Initialize",
            "Result": "",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Foreach Next",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_2": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Foreach Next",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Evaluate Format('{}not-th ...": Object {
            "Next": "Assign result_1",
            "Parameters": Object {
              "value.$": "States.Format('{}not-three', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('{}three' ...": Object {
            "Next": "Assign result_2",
            "Parameters": Object {
              "value.$": "States.Format('{}three', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Foreach CheckDone": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "Switch (item)",
                "Variable": "$.foreach.items[0]",
              },
            ],
            "Default": "Foreach Exit",
            "Type": "Choice",
          },
          "Foreach Exit": Object {
            "Next": "Return result",
            "Result": Object {},
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Initialize": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.vars.arr[0]",
              "items.$": "$.vars.arr",
            },
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Next": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.foreach.items[1]",
              "items.$": "$.foreach.items[1:]",
            },
            "ResultPath": "$.foreach",
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
          "Return result": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.result",
            "Type": "Pass",
          },
          "Switch (item)": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate Format('{}not-th ...",
                "NumericEquals": 1,
                "Variable": "$.foreach.currentItem",
              },
              Object {
                "Next": "Evaluate Format('{}not-th ...",
                "NumericEquals": 2,
                "Variable": "$.foreach.currentItem",
              },
            ],
            "Comment": "source: switch (item) { case 1: case 2: result = \`\${re ...",
            "Default": "Evaluate Format('{}three' ...",
            "Type": "Choice",
          },
        },
      }
    `);
  });
  it("then switchCaseNonEmptyFallThrough can be converted to asl", async () => {
    expect(converted.switchCaseNonEmptyFallThrough.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: arr = [1, 2, 3]",
            "Next": "Assign result",
            "Result": Array [
              1,
              2,
              3,
            ],
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Assign result": Object {
            "Comment": "source: result = \\"\\"",
            "Next": "Foreach Initialize",
            "Result": "",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Evaluate Format('{}1or2', ...",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_2": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Evaluate Format('{}1or2or ...",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_3": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Evaluate Format('{}|', $. ...",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_4": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Foreach Next",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Evaluate Format('{}1', $. ...": Object {
            "Next": "Assign result_1",
            "Parameters": Object {
              "value.$": "States.Format('{}1', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('{}1or2', ...": Object {
            "Next": "Assign result_2",
            "Parameters": Object {
              "value.$": "States.Format('{}1or2', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('{}1or2or ...": Object {
            "Next": "Assign result_3",
            "Parameters": Object {
              "value.$": "States.Format('{}1or2or3', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('{}|', $. ...": Object {
            "Next": "Assign result_4",
            "Parameters": Object {
              "value.$": "States.Format('{}|', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Foreach CheckDone": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "Switch (item)",
                "Variable": "$.foreach.items[0]",
              },
            ],
            "Default": "Foreach Exit",
            "Type": "Choice",
          },
          "Foreach Exit": Object {
            "Next": "Return result",
            "Result": Object {},
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Initialize": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.vars.arr[0]",
              "items.$": "$.vars.arr",
            },
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Next": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.foreach.items[1]",
              "items.$": "$.foreach.items[1:]",
            },
            "ResultPath": "$.foreach",
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
          "Return result": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.result",
            "Type": "Pass",
          },
          "Switch (item)": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate Format('{}1', $. ...",
                "NumericEquals": 1,
                "Variable": "$.foreach.currentItem",
              },
              Object {
                "Next": "Evaluate Format('{}1or2', ...",
                "NumericEquals": 2,
                "Variable": "$.foreach.currentItem",
              },
            ],
            "Comment": "source: switch (item) { case 1: result = \`\${result}1\`; ...",
            "Default": "Evaluate Format('{}1or2or ...",
            "Type": "Choice",
          },
        },
      }
    `);
  });
  it("then switchCaseFallsThroughToDefault can be converted to asl", async () => {
    expect(converted.switchCaseFallsThroughToDefault.asl)
      .toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: arr = [1, 2, 3]",
            "Next": "Assign result",
            "Result": Array [
              1,
              2,
              3,
            ],
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Assign result": Object {
            "Comment": "source: result = \\"\\"",
            "Next": "Foreach Initialize",
            "Result": "",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Foreach Next",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_2": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Foreach Next",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Evaluate Format('{}not-on ...": Object {
            "Next": "Assign result_2",
            "Parameters": Object {
              "value.$": "States.Format('{}not-one', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('{}one', ...": Object {
            "Next": "Assign result_1",
            "Parameters": Object {
              "value.$": "States.Format('{}one', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Foreach CheckDone": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "Switch (item)",
                "Variable": "$.foreach.items[0]",
              },
            ],
            "Default": "Foreach Exit",
            "Type": "Choice",
          },
          "Foreach Exit": Object {
            "Next": "Return result",
            "Result": Object {},
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Initialize": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.vars.arr[0]",
              "items.$": "$.vars.arr",
            },
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Next": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.foreach.items[1]",
              "items.$": "$.foreach.items[1:]",
            },
            "ResultPath": "$.foreach",
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
          "Return result": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.result",
            "Type": "Pass",
          },
          "Switch (item)": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate Format('{}one', ...",
                "NumericEquals": 1,
                "Variable": "$.foreach.currentItem",
              },
              Object {
                "Next": "Evaluate Format('{}not-on ...",
                "NumericEquals": 2,
                "Variable": "$.foreach.currentItem",
              },
            ],
            "Comment": "source: switch (item) { case 1: result = \`\${result}one ...",
            "Default": "Evaluate Format('{}not-on ...",
            "Type": "Choice",
          },
        },
      }
    `);
  });
  it("then switchDefaultFallsThrough can be converted to asl", async () => {
    expect(converted.switchDefaultFallsThrough.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: arr = [1, 2, 3]",
            "Next": "Assign result",
            "Result": Array [
              1,
              2,
              3,
            ],
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Assign result": Object {
            "Comment": "source: result = \\"\\"",
            "Next": "Foreach Initialize",
            "Result": "",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Foreach Next",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_2": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Foreach Next",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Evaluate Format('{}not-th ...": Object {
            "Next": "Assign result_1",
            "Parameters": Object {
              "value.$": "States.Format('{}not-three', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('{}three' ...": Object {
            "Next": "Assign result_2",
            "Parameters": Object {
              "value.$": "States.Format('{}three', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Foreach CheckDone": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "Switch (item)",
                "Variable": "$.foreach.items[0]",
              },
            ],
            "Default": "Foreach Exit",
            "Type": "Choice",
          },
          "Foreach Exit": Object {
            "Next": "Return result",
            "Result": Object {},
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Initialize": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.vars.arr[0]",
              "items.$": "$.vars.arr",
            },
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Next": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.foreach.items[1]",
              "items.$": "$.foreach.items[1:]",
            },
            "ResultPath": "$.foreach",
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
          "Return result": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.result",
            "Type": "Pass",
          },
          "Switch (item)": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate Format('{}not-th ...",
                "NumericEquals": 1,
                "Variable": "$.foreach.currentItem",
              },
              Object {
                "Next": "Evaluate Format('{}three' ...",
                "NumericEquals": 3,
                "Variable": "$.foreach.currentItem",
              },
            ],
            "Comment": "source: switch (item) { default: case 1: result = \`\${r ...",
            "Default": "Evaluate Format('{}not-th ...",
            "Type": "Choice",
          },
        },
      }
    `);
  });
  it("then createAwsAccount can be converted to asl", async () => {
    expect(converted.createAwsAccount.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign createAccount": Object {
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Assign creationStatus",
            "Parameters": Object {
              "AccountName": "test",
              "Email": "something@email.com",
            },
            "Resource": "arn:aws:states:::aws-sdk:organizations:createAccount",
            "ResultPath": "$.vars.createAccount",
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Assign creationStatus": Object {
            "Comment": "source: creationStatus: string | undefined = undefined",
            "InputPath": "$._undefined",
            "Next": "Assign describeResult",
            "ResultPath": "$.vars.creationStatus",
            "Type": "Pass",
          },
          "Assign creationStatus_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.var",
            "Next": "Switch (creationStatus)",
            "ResultPath": "$.vars.creationStatus",
            "Type": "Pass",
          },
          "Assign describeResult": Object {
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Eval Conditional",
            "Parameters": Object {
              "CreateAccountRequestId.$": "$.vars.createAccount.CreateAccountStatus.Id",
            },
            "Resource": "arn:aws:states:::aws-sdk:organizations:describeCreateAccountStatus",
            "ResultPath": "$.vars.describeResult",
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Conditional False": Object {
            "InputPath": "$._null",
            "Next": "Assign creationStatus_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_1": Object {
            "InputPath": "$._null",
            "Next": "Log (createAccount.Create ...",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional False_2": Object {
            "InputPath": "$._null",
            "Next": "Return createAccount.Crea ...",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.describeResult.CreateAccountStatus.State",
            "Next": "Assign creationStatus_1",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_1": Object {
            "InputPath": "$.vars.createAccount.CreateAccountStatus.AccountId",
            "Next": "Log (createAccount.Create ...",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True_2": Object {
            "InputPath": "$.vars.createAccount.CreateAccountStatus.AccountId",
            "Next": "Return createAccount.Crea ...",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Do While Condition": Object {
            "Choices": Array [
              Object {
                "Next": "Assign describeResult",
                "Not": Object {
                  "StringEquals": "SUCCEEDED",
                  "Variable": "$.vars.creationStatus",
                },
              },
            ],
            "Default": "Eval Conditional_1",
            "Type": "Choice",
          },
          "Eval Conditional": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars.describeResult.CreateAccountStatus",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.describeResult.CreateAccountStatus",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False",
            "Type": "Choice",
          },
          "Eval Conditional_1": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True_1",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars.createAccount.CreateAccountStatus",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.createAccount.CreateAccountStatus",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False_1",
            "Type": "Choice",
          },
          "Eval Conditional_2": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True_2",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars.createAccount.CreateAccountStatus",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.createAccount.CreateAccountStatus",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False_2",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign createAccount",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Log (createAccount.Create ...": Object {
            "Comment": "source: console.log(createAccount.CreateAccountStatus? ...",
            "InputPath": "$.tmp.var",
            "Next": "Eval Conditional_2",
            "ResultPath": null,
            "Type": "Pass",
          },
          "Return createAccount.Crea ...": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Switch (creationStatus)": Object {
            "Choices": Array [
              Object {
                "Next": "Throw Error",
                "StringEquals": "FAILED",
                "Variable": "$.vars.creationStatus",
              },
              Object {
                "Next": "Wait",
                "StringEquals": "IN_PROGRESS",
                "Variable": "$.vars.creationStatus",
              },
            ],
            "Comment": "source: switch (creationStatus) { case \\"FAILED\\": throw ...",
            "Default": "Do While Condition",
            "Type": "Choice",
          },
          "Throw Error": Object {
            "Cause": "account creation failed",
            "Comment": "source: throw new Error(\\"account creation failed\\");",
            "Error": "Error",
            "Type": "Fail",
          },
          "Wait": Object {
            "Comment": undefined,
            "Next": "Do While Condition",
            "Seconds": 1,
            "Type": "Wait",
          },
        },
      }
    `);
  });
});
