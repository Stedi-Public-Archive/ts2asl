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
  it("then nestedForeach can be converted to asl", async () => {
    expect(converted.nestedForeach.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign combined": Object {
            "Comment": "source: combined = { number, letter, global, inner: ou ...",
            "Next": "Log (combined)",
            "Parameters": Object {
              "global.$": "$.vars.global",
              "inner.$": "$.vars.outer.middle.inner",
              "letter.$": "$.foreach_2.currentItem",
              "number.$": "$.foreach.currentItem",
            },
            "ResultPath": "$.vars.combined",
            "Type": "Pass",
          },
          "Assign global": Object {
            "Comment": "source: global = \\"prefix\\"",
            "Next": "Assign outer",
            "Result": "prefix",
            "ResultPath": "$.vars.global",
            "Type": "Pass",
          },
          "Assign letters": Object {
            "Comment": "source: letters = [\\"a\\", \\"b\\", \\"c\\", \\"d\\"]",
            "Next": "Assign global",
            "Result": Array [
              "a",
              "b",
              "c",
              "d",
            ],
            "ResultPath": "$.vars.letters",
            "Type": "Pass",
          },
          "Assign numbers": Object {
            "Comment": "source: numbers = [0, 1, 2, 3]",
            "Next": "Assign letters",
            "Result": Array [
              0,
              1,
              2,
              3,
            ],
            "ResultPath": "$.vars.numbers",
            "Type": "Pass",
          },
          "Assign outer": Object {
            "Comment": "source: outer = { middle: { inner: 3 } }",
            "Next": "Foreach Initialize",
            "Result": Object {
              "middle": Object {
                "inner": 3,
              },
            },
            "ResultPath": "$.vars.outer",
            "Type": "Pass",
          },
          "Foreach CheckDone": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "Foreach Initialize_1",
                "Variable": "$.foreach.items[0]",
              },
            ],
            "Default": "Foreach Exit_1",
            "Type": "Choice",
          },
          "Foreach CheckDone_1": Object {
            "Choices": Array [
              Object {
                "IsPresent": true,
                "Next": "Assign combined",
                "Variable": "$.foreach_2.items[0]",
              },
            ],
            "Default": "Foreach Exit",
            "Type": "Choice",
          },
          "Foreach Exit": Object {
            "Next": "Foreach Next_1",
            "Result": Object {},
            "ResultPath": "$.foreach_2",
            "Type": "Pass",
          },
          "Foreach Exit_1": Object {
            "End": true,
            "Result": Object {},
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Initialize": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.vars.numbers[0]",
              "items.$": "$.vars.numbers",
            },
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Foreach Initialize_1": Object {
            "Next": "Foreach CheckDone_1",
            "Parameters": Object {
              "currentItem.$": "$.vars.letters[0]",
              "items.$": "$.vars.letters",
            },
            "ResultPath": "$.foreach_2",
            "Type": "Pass",
          },
          "Foreach Next": Object {
            "Next": "Foreach CheckDone_1",
            "Parameters": Object {
              "currentItem.$": "$.foreach_2.items[1]",
              "items.$": "$.foreach_2.items[1:]",
            },
            "ResultPath": "$.foreach_2",
            "Type": "Pass",
          },
          "Foreach Next_1": Object {
            "Next": "Foreach CheckDone",
            "Parameters": Object {
              "currentItem.$": "$.foreach.items[1]",
              "items.$": "$.foreach.items[1:]",
            },
            "ResultPath": "$.foreach",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign numbers",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Log (combined)": Object {
            "Comment": "source: console.log(combined)",
            "InputPath": "$.vars.combined",
            "Next": "Foreach Next",
            "ResultPath": null,
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
