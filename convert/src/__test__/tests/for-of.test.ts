import { runConvertForTest } from "../utility";
describe("when converting for-of", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("for-of");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: arr = [1, 2, 3]",
            "Next": "Foreach Initialize",
            "Result": Array [
              1,
              2,
              3,
            ],
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Foreach CheckDone": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "Log (item)",
                "Variable": "$.foreach.items[0]",
              },
            ],
            "Default": "Foreach Exit",
            "Type": "Choice",
          },
          "Foreach Exit": Object {
            "Next": "Log (\\"done\\")",
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
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Log (\\"done\\")": Object {
            "Comment": "source: console.log(\\"done\\")",
            "End": true,
            "Result": "done",
            "ResultPath": null,
            "Type": "Pass",
          },
          "Log (item)": Object {
            "Comment": "source: console.log(item)",
            "InputPath": "$.foreach.currentItem",
            "Next": "Foreach Next",
            "ResultPath": null,
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then foreachWithBreak can be converted to asl", async () => {
    expect(converted.foreachWithBreak.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: arr = [1, 2, 3]",
            "Next": "Foreach Initialize",
            "Result": Array [
              1,
              2,
              3,
            ],
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Break": Object {
            "Comment": undefined,
            "Next": "Foreach Exit",
            "ResultPath": null,
            "Type": "Pass",
          },
          "Foreach CheckDone": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "If (item === 1)",
                "Variable": "$.foreach.items[0]",
              },
            ],
            "Default": "Foreach Exit",
            "Type": "Choice",
          },
          "Foreach Exit": Object {
            "Next": "Log (\\"done\\")",
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
          "If (item === 1)": Object {
            "Choices": Array [
              Object {
                "Next": "Break",
                "NumericEquals": 1,
                "Variable": "$.foreach.currentItem",
              },
            ],
            "Comment": "source: if (item === 1) { break; }",
            "Default": "Log (item)",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign arr",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Log (\\"done\\")": Object {
            "Comment": "source: console.log(\\"done\\")",
            "End": true,
            "Result": "done",
            "ResultPath": null,
            "Type": "Pass",
          },
          "Log (item)": Object {
            "Comment": "source: console.log(item)",
            "InputPath": "$.foreach.currentItem",
            "Next": "Foreach Next",
            "ResultPath": null,
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
