import { runConvertForTest } from "../utility";
describe("when converting do-while", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("do-while");
  });
  it("then simpleDoWhile can be converted to asl", async () => {
    expect(converted.simpleDoWhile.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign counter": Object {
            "Comment": "source: counter = \\"\\"",
            "Next": "Do While Condition",
            "Result": "",
            "ResultPath": "$.vars.counter",
            "Type": "Pass",
          },
          "Assign counter_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Do While Condition",
            "ResultPath": "$.vars.counter",
            "Type": "Pass",
          },
          "Do While Condition": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate States.Format('{ ...",
                "Not": Object {
                  "StringEquals": "aaaaa",
                  "Variable": "$.vars.counter",
                },
              },
            ],
            "Default": "Return counter",
            "Type": "Choice",
          },
          "Evaluate States.Format('{ ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
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
        },
      }
    `);
  });
  it("then doWhileWithBreak can be converted to asl", async () => {
    expect(converted.doWhileWithBreak.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign counter": Object {
            "Comment": "source: counter = \\"\\"",
            "Next": "Do While Condition",
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
            "Next": "Return counter",
            "ResultPath": null,
            "Type": "Pass",
          },
          "Do While Condition": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate States.Format('{ ...",
                "Not": Object {
                  "StringEquals": "aaaaa",
                  "Variable": "$.vars.counter",
                },
              },
            ],
            "Default": "Return counter",
            "Type": "Choice",
          },
          "Evaluate States.Format('{ ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
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
            "Default": "Do While Condition",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign counter",
            "Parameters": Object {
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
        },
      }
    `);
  });
  it("then doWhileWithEarlyReturn can be converted to asl", async () => {
    expect(converted.doWhileWithEarlyReturn.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign counter": Object {
            "Comment": "source: counter = \\"\\"",
            "Next": "Do While Condition",
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
          "Do While Condition": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate States.Format('{ ...",
                "Not": Object {
                  "StringEquals": "aaaaa",
                  "Variable": "$.vars.counter",
                },
              },
            ],
            "Default": "Throw Error",
            "Type": "Choice",
          },
          "Evaluate States.Format('{ ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
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
            "Default": "Do While Condition",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign counter",
            "Parameters": Object {
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
        },
      }
    `);
  });
  it("then doWhileWithContinue can be converted to asl", async () => {
    expect(converted.doWhileWithContinue.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
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
            "Next": "Do While Condition",
            "Result": "",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Assign result_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Do While Condition",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Continue": Object {
            "Comment": undefined,
            "Next": "Do While Condition",
            "ResultPath": null,
            "Type": "Pass",
          },
          "Do While Condition": Object {
            "Choices": Array [
              Object {
                "Next": "Evaluate States.Format('{ ...",
                "Not": Object {
                  "StringEquals": "aaaaa",
                  "Variable": "$.vars.counter",
                },
              },
            ],
            "Default": "Return result",
            "Type": "Choice",
          },
          "Evaluate States.Format('{ ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign counter_1",
            "Parameters": Object {
              "value.$": "States.Format('{}a', $.vars.counter)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate States.Format('{ ..._1": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
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
            "Default": "Evaluate States.Format('{ ..._1",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign counter",
            "Parameters": Object {
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
        },
      }
    `);
  });
});
