import { runConvertForTest } from "../utility";
describe("when converting while", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("while");
  });
  it("then simpleWhile can be converted to asl", async () => {
    expect(converted.simpleWhile.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign counter": Object {
            "Comment": "source: counter = \\"\\"",
            "Next": "While Condition",
            "Result": "",
            "ResultPath": "$.vars.counter",
            "Type": "Pass",
          },
          "Assign counter_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "While Condition",
            "ResultPath": "$.vars.counter",
            "Type": "Pass",
          },
          "Evaluate Format('{}a', $. ...": Object {
            "Next": "Assign counter_1",
            "Parameters": Object {
              "value.$": "States.Format('{}a', $.vars.counter)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign counter",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return counter": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.counter",
            "Type": "Pass",
          },
          "While Condition": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate Format('{}a', $. ...",
                "Not": Object {
                  "StringEquals": "aaaaa",
                  "Variable": "$.vars.counter",
                },
              },
            ],
            "Default": "While Exit",
            "Type": "Choice",
          },
          "While Exit": Object {
            "Next": "Return counter",
            "ResultPath": null,
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then whileWithBreak can be converted to asl", async () => {
    expect(converted.whileWithBreak.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign counter": Object {
            "Comment": "source: counter = \\"\\"",
            "Next": "While Condition",
            "Result": "",
            "ResultPath": "$.vars.counter",
            "Type": "Pass",
          },
          "Assign counter_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "If (counter == \\"aa\\")",
            "ResultPath": "$.vars.counter",
            "Type": "Pass",
          },
          "Break": Object {
            "Comment": undefined,
            "Next": "While Exit",
            "ResultPath": null,
            "Type": "Pass",
          },
          "Evaluate Format('{}a', $. ...": Object {
            "Next": "Assign counter_1",
            "Parameters": Object {
              "value.$": "States.Format('{}a', $.vars.counter)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "If (counter == \\"aa\\")": Object {
            "Choices": Array [
              Object {
                "Next": "Break",
                "StringEquals": "aa",
                "Variable": "$.vars.counter",
              },
            ],
            "Comment": "source: if (counter == \\"aa\\") { break; }",
            "Default": "While Condition",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign counter",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return counter": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.counter",
            "Type": "Pass",
          },
          "While Condition": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate Format('{}a', $. ...",
                "Not": Object {
                  "StringEquals": "aaaaa",
                  "Variable": "$.vars.counter",
                },
              },
            ],
            "Default": "While Exit",
            "Type": "Choice",
          },
          "While Exit": Object {
            "Next": "Return counter",
            "ResultPath": null,
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then whileWithEarlyReturn can be converted to asl", async () => {
    expect(converted.whileWithEarlyReturn.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign counter": Object {
            "Comment": "source: counter = \\"\\"",
            "Next": "While Condition",
            "Result": "",
            "ResultPath": "$.vars.counter",
            "Type": "Pass",
          },
          "Assign counter_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "If (counter == \\"aa\\")",
            "ResultPath": "$.vars.counter",
            "Type": "Pass",
          },
          "Evaluate Format('{}a', $. ...": Object {
            "Next": "Assign counter_1",
            "Parameters": Object {
              "value.$": "States.Format('{}a', $.vars.counter)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "If (counter == \\"aa\\")": Object {
            "Choices": Array [
              Object {
                "Next": "Return counter",
                "StringEquals": "aa",
                "Variable": "$.vars.counter",
              },
            ],
            "Comment": "source: if (counter == \\"aa\\") { return counter; //retur ...",
            "Default": "While Condition",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign counter",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return counter": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.counter",
            "Type": "Pass",
          },
          "Throw Error": Object {
            "Cause": "this should not happen",
            "Comment": "source: throw new Error(\\"this should not happen\\");",
            "Error": "Error",
            "Type": "Fail",
          },
          "While Condition": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate Format('{}a', $. ...",
                "Not": Object {
                  "StringEquals": "aaaaa",
                  "Variable": "$.vars.counter",
                },
              },
            ],
            "Default": "While Exit",
            "Type": "Choice",
          },
          "While Exit": Object {
            "Next": "Throw Error",
            "ResultPath": null,
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then whileWithContinue can be converted to asl", async () => {
    expect(converted.whileWithContinue.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign counter": Object {
            "Comment": "source: counter = \\"\\"",
            "Next": "Assign result",
            "Result": "",
            "ResultPath": "$.vars.counter",
            "Type": "Pass",
          },
          "Assign counter_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "If (counter == \\"aa\\")",
            "ResultPath": "$.vars.counter",
            "Type": "Pass",
          },
          "Assign result": Object {
            "Comment": "source: result = \\"\\"",
            "Next": "While Condition",
            "Result": "",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "While Condition",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Continue": Object {
            "Comment": undefined,
            "Next": "While Condition",
            "ResultPath": null,
            "Type": "Pass",
          },
          "Evaluate Format('{}a', $. ...": Object {
            "Next": "Assign counter_1",
            "Parameters": Object {
              "value.$": "States.Format('{}a', $.vars.counter)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('{}b', $. ...": Object {
            "Next": "Assign result_1",
            "Parameters": Object {
              "value.$": "States.Format('{}b', $.vars.result)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "If (counter == \\"aa\\")": Object {
            "Choices": Array [
              Object {
                "Next": "Continue",
                "StringEquals": "aa",
                "Variable": "$.vars.counter",
              },
            ],
            "Comment": "source: if (counter == \\"aa\\") { continue; }",
            "Default": "Evaluate Format('{}b', $. ...",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign counter",
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
          "While Condition": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate Format('{}a', $. ...",
                "Not": Object {
                  "StringEquals": "aaaaa",
                  "Variable": "$.vars.counter",
                },
              },
            ],
            "Default": "While Exit",
            "Type": "Choice",
          },
          "While Exit": Object {
            "Next": "Return result",
            "ResultPath": null,
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
