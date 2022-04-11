import { runConvertForTest } from "../utility";
describe("when converting variable-assignments", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("variable-assignments");
  });
  it("then literals can be converted to asl", async () => {
    expect(converted.literals.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.30.",
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
            "Next": "Return { arrayOfNumbers, ...",
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
          "Return { arrayOfNumbers, ...": Object {
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
        "Comment": "ASL Generated using ts2asl version 0.1.30.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign array": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Return array",
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
            "Next": "Evaluate Array($.vars.str ...",
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
          "Evaluate Array($.vars.str ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign array",
            "Parameters": Object {
              "value.$": "States.Array($.vars.str, $.vars.num, $.vars.bool, $.vars.object)",
            },
            "ResultPath": "$.tmp.eval",
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
          "Return array": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.array",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then unassignedVariable can be converted to asl", async () => {
    expect(converted.unassignedVariable.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.30.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: arr: []",
            "Next": "Assign two",
            "Result": Object {},
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Assign two": Object {
            "Comment": "source: two: string",
            "Next": "Return two",
            "Result": Object {},
            "ResultPath": "$.vars.two",
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
          "Return two": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.two",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then arrayIndexer can be converted to asl", async () => {
    expect(converted.arrayIndexer.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.30.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: arr = [1, 2, 3, 4, 5]",
            "Next": "Assign two",
            "Result": Array [
              1,
              2,
              3,
              4,
              5,
            ],
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Assign two": Object {
            "Comment": "source: two = arr[1]",
            "InputPath": "$.vars.arr[1]arr",
            "Next": "Return two",
            "ResultPath": "$.vars.two",
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
          "Return two": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.two",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then functions can be converted to asl", async () => {
    expect(converted.functions.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.30.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Return arr",
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Assign combined": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Evaluate Array($.vars.str ...",
            "ResultPath": "$.vars.combined",
            "Type": "Pass",
          },
          "Assign num": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Evaluate Format('1: {} 2 ...",
            "ResultPath": "$.vars.num",
            "Type": "Pass",
          },
          "Assign str": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Evaluate Format('answer i ...",
            "ResultPath": "$.vars.str",
            "Type": "Pass",
          },
          "Evaluate Array($.vars.str ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign arr",
            "Parameters": Object {
              "value.$": "States.Array($.vars.str, $.vars.num, $.vars.combined)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('1: {} 2 ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign combined",
            "Parameters": Object {
              "value.$": "States.Format('1: {}
       2: {}', $.vars.str, $.vars.num)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('answer i ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign num",
            "Parameters": Object {
              "value.$": "States.Format('answer is {}', 42)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('hello {} ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign str",
            "Parameters": Object {
              "value.$": "States.Format('hello {}', 'world')",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Evaluate Format('hello {} ...",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return arr": Object {
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
