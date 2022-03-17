import { Converted, ConvertedStateMachine } from "../convert";
import { runConvertForTest } from "./utility";

describe("when converting if", () => {
  let converted: Record<string, ConvertedStateMachine>;

  beforeAll(() => {
    converted = runConvertForTest("choice");
  });

  it("then can convert choice", async () => {
    expect(converted.choice.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign val": Object {
            "Comment": "source: val = \\"\\"",
            "Next": "Choice",
            "Result": "",
            "ResultPath": "$.vars.val",
            "Type": "Pass",
          },
          "Choice": Object {
            "Choices": Array [
              Object {
                "IsPresent": false,
                "Next": "Then",
                "Variable": "$.vars.val",
              },
              Object {
                "IsPresent": false,
                "Next": "Then_1",
                "Variable": "$.vars.val",
              },
            ],
            "Comment": undefined,
            "Default": "Pass_4",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign val",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass_4": Object {
            "Comment": "source: source: console.log(\\"this will not likely happen\\")",
            "Next": "Pass_5",
            "Result": "this will not likely happen",
            "Type": "Pass",
          },
          "Pass_5": Object {
            "Comment": "source: console.log(\\"after choice\\")",
            "End": true,
            "Result": "after choice",
            "Type": "Pass",
          },
          "Then": Object {
            "Branches": Array [
              Object {
                "StartAt": "Pass",
                "States": Object {
                  "Pass": Object {
                    "Comment": "source: console.log(\\"val is not an empty string\\")",
                    "Next": "Pass_1",
                    "Result": "val is not an empty string",
                    "Type": "Pass",
                  },
                  "Pass_1": Object {
                    "Comment": "source: console.log(\\"val us also not false or 0\\")",
                    "End": true,
                    "Result": "val us also not false or 0",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Next": "Pass_5",
            "Type": "Parallel",
          },
          "Then_1": Object {
            "Branches": Array [
              Object {
                "StartAt": "Pass_2",
                "States": Object {
                  "Pass_2": Object {
                    "Comment": "source: console.log(\\"val is empty string\\")",
                    "Next": "Pass_3",
                    "Result": "val is empty string",
                    "Type": "Pass",
                  },
                  "Pass_3": Object {
                    "Comment": "source: console.log(\\"or false or 0\\")",
                    "End": true,
                    "Result": "or false or 0",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Next": "Pass_5",
            "Type": "Parallel",
          },
        },
      }
    `);
  });

  it("then can convert choiceWithSingleStatements", async () => {
    expect(converted.choiceWithSingleStatements.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign val": Object {
            "Comment": "source: val = \\"\\"",
            "Next": "Choice",
            "Result": "",
            "ResultPath": "$.vars.val",
            "Type": "Pass",
          },
          "Choice": Object {
            "Choices": Array [
              Object {
                "IsPresent": false,
                "Next": "Pass",
                "Variable": "$.vars.val",
              },
              Object {
                "IsPresent": false,
                "Next": "Pass_1",
                "Variable": "$.vars.val",
              },
            ],
            "Comment": undefined,
            "Default": "Pass_2",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign val",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": "source: console.log(\\"!! val\\")",
            "End": true,
            "Result": "!! val",
            "Type": "Pass",
          },
          "Pass_1": Object {
            "Comment": "source: console.log(\\"val\\")",
            "End": true,
            "Result": "val",
            "Type": "Pass",
          },
          "Pass_2": Object {
            "Comment": "source: source: console.log(\\"this will not likely happen\\")",
            "End": true,
            "Result": "this will not likely happen",
            "Type": "Pass",
          },
        },
      }
    `);
  });

  // it("then can convert choiceWithSingleStatementsWithoutBlock", async () => {
  //   expect(converted.choiceWithSingleStatementsWithoutBlock.asl).toMatchInlineSnapshot(``);
  // });
});
