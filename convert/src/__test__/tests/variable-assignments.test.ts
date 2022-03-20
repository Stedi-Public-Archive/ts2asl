import { runConvertForTest } from "../utility";
describe("when converting variable-assignments", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("variable-assignments");
  });
  it("then literals can be converted to asl", async () => {
    expect(converted.literals.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign arrayOfNumbers": Object {
            "Comment": "source: arrayOfNumbers = [1, 2, 3, 4, 5]",
            "Next": "Assign arrayOfObjects",
            "Result": Array [
              1,
              2,
              3,
              4,
              5,
            ],
            "ResultPath": "$.vars.arrayOfNumbers",
            "Type": "Pass",
          },
          "Assign arrayOfObjects": Object {
            "Comment": "source: arrayOfObjects = [{ left: 1, right: 2 }, { lef ...",
            "Next": "Pass",
            "Result": Array [
              Object {
                "left": 1,
                "right": 2,
              },
              Object {
                "left": 3,
                "right": 4,
              },
              Object {
                "left": 5,
                "right": 6,
              },
            ],
            "ResultPath": "$.vars.arrayOfObjects",
            "Type": "Pass",
          },
          "Assign bool": Object {
            "Comment": "source: bool = true || false",
            "Next": "Assign object",
            "Result": true,
            "ResultPath": "$.vars.bool",
            "Type": "Pass",
          },
          "Assign num": Object {
            "Comment": "source: num = 42",
            "Next": "Assign bool",
            "Result": 42,
            "ResultPath": "$.vars.num",
            "Type": "Pass",
          },
          "Assign object": Object {
            "Comment": "source: object = { str, num, bool }",
            "Next": "Assign object2",
            "Parameters": Object {
              "bool.$": "$.vars.bool",
              "num.$": "$.vars.num",
              "str.$": "$.vars.str",
            },
            "ResultPath": "$.vars.object",
            "Type": "Pass",
          },
          "Assign object2": Object {
            "Comment": "source: object2 = { str: \\"string\\", num: 33, inner: obj ...",
            "Next": "Assign arrayOfNumbers",
            "Parameters": Object {
              "inner.$": "$.vars.object",
              "num": 33,
              "str": "string",
            },
            "ResultPath": "$.vars.object2",
            "Type": "Pass",
          },
          "Assign str": Object {
            "Comment": "source: str = \\"string\\"",
            "Next": "Assign num",
            "Result": "string",
            "ResultPath": "$.vars.str",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign str",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "arrayOfNumbers.$": "$.vars.arrayOfNumbers",
              "arrayOfObjects.$": "$.vars.arrayOfObjects",
              "object2.$": "$.vars.object2",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then arrayWithIdentifiers can be converted to asl", async () => {
    expect(converted.arrayWithIdentifiers.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign array": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign array_1",
            "Parameters": Object {
              "value.$": "States.Array($.vars.str, $.vars.num, $.vars.bool, $.vars.object)",
            },
            "ResultPath": "$.lastResult",
            "Type": "Pass",
          },
          "Assign array_1": Object {
            "Comment": undefined,
            "InputPath": "$.lastResult.value",
            "Next": "Pass",
            "ResultPath": "$.vars.array",
            "Type": "Pass",
          },
          "Assign bool": Object {
            "Comment": "source: bool = true || false",
            "Next": "Assign object",
            "Result": true,
            "ResultPath": "$.vars.bool",
            "Type": "Pass",
          },
          "Assign num": Object {
            "Comment": "source: num = 42",
            "Next": "Assign bool",
            "Result": 42,
            "ResultPath": "$.vars.num",
            "Type": "Pass",
          },
          "Assign object": Object {
            "Comment": "source: object = { str, num, bool }",
            "Next": "Assign array",
            "Parameters": Object {
              "bool.$": "$.vars.bool",
              "num.$": "$.vars.num",
              "str.$": "$.vars.str",
            },
            "ResultPath": "$.vars.object",
            "Type": "Pass",
          },
          "Assign str": Object {
            "Comment": "source: str = \\"string\\"",
            "Next": "Assign num",
            "Result": "string",
            "ResultPath": "$.vars.str",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign str",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.array",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then functions can be converted to asl", async () => {
    expect(converted.functions.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign arr_1",
            "Parameters": Object {
              "value.$": "States.Array($.vars.str, $.vars.num, $.vars.combined)",
            },
            "ResultPath": "$.lastResult",
            "Type": "Pass",
          },
          "Assign arr_1": Object {
            "Comment": undefined,
            "InputPath": "$.lastResult.value",
            "Next": "Pass",
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Assign combined": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign combined_1",
            "Parameters": Object {
              "value.$": "States.Format('1: {}
       2: {}', $.vars.str, $.vars.num)",
            },
            "ResultPath": "$.lastResult",
            "Type": "Pass",
          },
          "Assign combined_1": Object {
            "Comment": undefined,
            "InputPath": "$.lastResult.value",
            "Next": "Assign arr",
            "ResultPath": "$.vars.combined",
            "Type": "Pass",
          },
          "Assign num": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign num_1",
            "Parameters": Object {
              "value.$": "States.Format('answer is {}', 42)",
            },
            "ResultPath": "$.lastResult",
            "Type": "Pass",
          },
          "Assign num_1": Object {
            "Comment": undefined,
            "InputPath": "$.lastResult.value",
            "Next": "Assign combined",
            "ResultPath": "$.vars.num",
            "Type": "Pass",
          },
          "Assign str": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign str_1",
            "Parameters": Object {
              "value.$": "States.Format('hello {}', 'world')",
            },
            "ResultPath": "$.lastResult",
            "Type": "Pass",
          },
          "Assign str_1": Object {
            "Comment": undefined,
            "InputPath": "$.lastResult.value",
            "Next": "Assign num",
            "ResultPath": "$.vars.str",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign str",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.arr",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
