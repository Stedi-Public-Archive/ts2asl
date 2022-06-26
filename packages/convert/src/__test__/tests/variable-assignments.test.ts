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
              "_null": null,
              "_undefined": null,
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
  it("then typeOfExpressions can be converted to asl", async () => {
    expect(converted.typeOfExpressions.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign _null": Object {
            "Comment": "source: _null = typeof null",
            "InputPath": "$.tmp.result[0]",
            "Next": "If (str === \\"string\\" && ...",
            "ResultPath": "$.vars._null",
            "Type": "Pass",
          },
          "Assign bool": Object {
            "Comment": "source: bool = typeof true",
            "InputPath": "$.tmp.result[0]",
            "Next": "Pass_3",
            "ResultPath": "$.vars.bool",
            "Type": "Pass",
          },
          "Assign num": Object {
            "Comment": "source: num = typeof 123",
            "InputPath": "$.tmp.result[0]",
            "Next": "Pass_2",
            "ResultPath": "$.vars.num",
            "Type": "Pass",
          },
          "Assign object": Object {
            "Comment": "source: object = typeof { str, num, bool }",
            "InputPath": "$.tmp.result[0]",
            "Next": "Typeof_4",
            "ResultPath": "$.vars.object",
            "Type": "Pass",
          },
          "Assign str": Object {
            "Comment": "source: str = typeof \\"abcdef\\"",
            "InputPath": "$.tmp.result[0]",
            "Next": "Pass_1",
            "ResultPath": "$.vars.str",
            "Type": "Pass",
          },
          "Assign undef": Object {
            "Comment": "source: undef = typeof undefined",
            "InputPath": "$.tmp.result[0]",
            "Next": "Typeof_5",
            "ResultPath": "$.vars.undef",
            "Type": "Pass",
          },
          "If (str === \\"string\\" && ...": Object {
            "Choices": Array [
              Object {
                "And": Array [
                  Object {
                    "And": Array [
                      Object {
                        "And": Array [
                          Object {
                            "And": Array [
                              Object {
                                "And": Array [
                                  Object {
                                    "StringEquals": "string",
                                    "Variable": "$.vars.str",
                                  },
                                  Object {
                                    "StringEquals": "number",
                                    "Variable": "$.vars.num",
                                  },
                                ],
                              },
                              Object {
                                "StringEquals": "boolean",
                                "Variable": "$.vars.bool",
                              },
                            ],
                          },
                          Object {
                            "StringEquals": "object",
                            "Variable": "$.vars.object",
                          },
                        ],
                      },
                      Object {
                        "StringEquals": "undefined",
                        "Variable": "$.vars.undef",
                      },
                    ],
                  },
                  Object {
                    "StringEquals": "object",
                    "Variable": "$.vars._null",
                  },
                ],
                "Next": "Return \\"ok\\"",
              },
            ],
            "Comment": "source: if (str === \\"string\\" && num === \\"number\\" && bo ...",
            "Default": "Return \\"not ok\\"",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Pass",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Next": "Typeof",
            "Result": "abcdef",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Pass_1": Object {
            "Next": "Typeof_1",
            "Result": 123,
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Pass_2": Object {
            "Next": "Typeof_2",
            "Result": true,
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Pass_3": Object {
            "Next": "Typeof_3",
            "Parameters": Object {
              "bool.$": "$.vars.bool",
              "num.$": "$.vars.num",
              "str.$": "$.vars.str",
            },
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Return \\"not ok\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "not ok",
            "Type": "Pass",
          },
          "Return \\"ok\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "ok",
            "Type": "Pass",
          },
          "Typeof": Object {
            "Branches": Array [
              Object {
                "StartAt": "Choice",
                "States": Object {
                  "Choice": Object {
                    "Choices": Array [
                      Object {
                        "IsPresent": false,
                        "Next": "Evaluate to \\"undefined\\"",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsNull": true,
                        "Next": "Evaluate to \\"object\\"",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsNumeric": true,
                        "Next": "Evaluate to \\"number\\"",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsString": true,
                        "Next": "Evaluate to \\"string\\"",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsBoolean": true,
                        "Next": "Evaluate to \\"boolean\\"",
                        "Variable": "$.tmp.var",
                      },
                    ],
                    "Comment": undefined,
                    "Default": "Evaluate to \\"object\\"_1",
                    "Type": "Choice",
                  },
                  "Evaluate to \\"boolean\\"": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "boolean",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"number\\"": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "number",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"object\\"": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "object",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"object\\"_1": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "object",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"string\\"": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "string",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"undefined\\"": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "undefined",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Comment": undefined,
            "InputPath": "$",
            "Next": "Assign str",
            "ResultPath": "$.tmp.result",
            "Type": "Parallel",
          },
          "Typeof_1": Object {
            "Branches": Array [
              Object {
                "StartAt": "Choice_1",
                "States": Object {
                  "Choice_1": Object {
                    "Choices": Array [
                      Object {
                        "IsPresent": false,
                        "Next": "Evaluate to \\"undefined\\"_1",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsNull": true,
                        "Next": "Evaluate to \\"object\\"_2",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsNumeric": true,
                        "Next": "Evaluate to \\"number\\"_1",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsString": true,
                        "Next": "Evaluate to \\"string\\"_1",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsBoolean": true,
                        "Next": "Evaluate to \\"boolean\\"_1",
                        "Variable": "$.tmp.var",
                      },
                    ],
                    "Comment": undefined,
                    "Default": "Evaluate to \\"object\\"_3",
                    "Type": "Choice",
                  },
                  "Evaluate to \\"boolean\\"_1": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "boolean",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"number\\"_1": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "number",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"object\\"_2": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "object",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"object\\"_3": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "object",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"string\\"_1": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "string",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"undefined\\"_1": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "undefined",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Comment": undefined,
            "InputPath": "$",
            "Next": "Assign num",
            "ResultPath": "$.tmp.result",
            "Type": "Parallel",
          },
          "Typeof_2": Object {
            "Branches": Array [
              Object {
                "StartAt": "Choice_2",
                "States": Object {
                  "Choice_2": Object {
                    "Choices": Array [
                      Object {
                        "IsPresent": false,
                        "Next": "Evaluate to \\"undefined\\"_2",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsNull": true,
                        "Next": "Evaluate to \\"object\\"_4",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsNumeric": true,
                        "Next": "Evaluate to \\"number\\"_2",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsString": true,
                        "Next": "Evaluate to \\"string\\"_2",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsBoolean": true,
                        "Next": "Evaluate to \\"boolean\\"_2",
                        "Variable": "$.tmp.var",
                      },
                    ],
                    "Comment": undefined,
                    "Default": "Evaluate to \\"object\\"_5",
                    "Type": "Choice",
                  },
                  "Evaluate to \\"boolean\\"_2": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "boolean",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"number\\"_2": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "number",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"object\\"_4": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "object",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"object\\"_5": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "object",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"string\\"_2": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "string",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"undefined\\"_2": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "undefined",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Comment": undefined,
            "InputPath": "$",
            "Next": "Assign bool",
            "ResultPath": "$.tmp.result",
            "Type": "Parallel",
          },
          "Typeof_3": Object {
            "Branches": Array [
              Object {
                "StartAt": "Choice_3",
                "States": Object {
                  "Choice_3": Object {
                    "Choices": Array [
                      Object {
                        "IsPresent": false,
                        "Next": "Evaluate to \\"undefined\\"_3",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsNull": true,
                        "Next": "Evaluate to \\"object\\"_6",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsNumeric": true,
                        "Next": "Evaluate to \\"number\\"_3",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsString": true,
                        "Next": "Evaluate to \\"string\\"_3",
                        "Variable": "$.tmp.var",
                      },
                      Object {
                        "IsBoolean": true,
                        "Next": "Evaluate to \\"boolean\\"_3",
                        "Variable": "$.tmp.var",
                      },
                    ],
                    "Comment": undefined,
                    "Default": "Evaluate to \\"object\\"_7",
                    "Type": "Choice",
                  },
                  "Evaluate to \\"boolean\\"_3": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "boolean",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"number\\"_3": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "number",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"object\\"_6": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "object",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"object\\"_7": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "object",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"string\\"_3": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "string",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"undefined\\"_3": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "undefined",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Comment": undefined,
            "InputPath": "$",
            "Next": "Assign object",
            "ResultPath": "$.tmp.result",
            "Type": "Parallel",
          },
          "Typeof_4": Object {
            "Branches": Array [
              Object {
                "StartAt": "Choice_4",
                "States": Object {
                  "Choice_4": Object {
                    "Choices": Array [
                      Object {
                        "IsPresent": false,
                        "Next": "Evaluate to \\"undefined\\"_4",
                        "Variable": "$._doesntexist",
                      },
                      Object {
                        "IsNull": true,
                        "Next": "Evaluate to \\"object\\"_8",
                        "Variable": "$._doesntexist",
                      },
                      Object {
                        "IsNumeric": true,
                        "Next": "Evaluate to \\"number\\"_4",
                        "Variable": "$._doesntexist",
                      },
                      Object {
                        "IsString": true,
                        "Next": "Evaluate to \\"string\\"_4",
                        "Variable": "$._doesntexist",
                      },
                      Object {
                        "IsBoolean": true,
                        "Next": "Evaluate to \\"boolean\\"_4",
                        "Variable": "$._doesntexist",
                      },
                    ],
                    "Comment": undefined,
                    "Default": "Evaluate to \\"object\\"_9",
                    "Type": "Choice",
                  },
                  "Evaluate to \\"boolean\\"_4": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "boolean",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"number\\"_4": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "number",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"object\\"_8": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "object",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"object\\"_9": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "object",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"string\\"_4": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "string",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"undefined\\"_4": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "undefined",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Comment": undefined,
            "InputPath": "$",
            "Next": "Assign undef",
            "ResultPath": "$.tmp.result",
            "Type": "Parallel",
          },
          "Typeof_5": Object {
            "Branches": Array [
              Object {
                "StartAt": "Choice_5",
                "States": Object {
                  "Choice_5": Object {
                    "Choices": Array [
                      Object {
                        "IsPresent": false,
                        "Next": "Evaluate to \\"undefined\\"_5",
                        "Variable": "$._null",
                      },
                      Object {
                        "IsNull": true,
                        "Next": "Evaluate to \\"object\\"_10",
                        "Variable": "$._null",
                      },
                      Object {
                        "IsNumeric": true,
                        "Next": "Evaluate to \\"number\\"_5",
                        "Variable": "$._null",
                      },
                      Object {
                        "IsString": true,
                        "Next": "Evaluate to \\"string\\"_5",
                        "Variable": "$._null",
                      },
                      Object {
                        "IsBoolean": true,
                        "Next": "Evaluate to \\"boolean\\"_5",
                        "Variable": "$._null",
                      },
                    ],
                    "Comment": undefined,
                    "Default": "Evaluate to \\"object\\"_11",
                    "Type": "Choice",
                  },
                  "Evaluate to \\"boolean\\"_5": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "boolean",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"number\\"_5": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "number",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"object\\"_10": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "object",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"object\\"_11": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "object",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"string\\"_5": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "string",
                    "Type": "Pass",
                  },
                  "Evaluate to \\"undefined\\"_5": Object {
                    "Comment": undefined,
                    "End": true,
                    "Result": "undefined",
                    "Type": "Pass",
                  },
                },
              },
            ],
            "Comment": undefined,
            "InputPath": "$",
            "Next": "Assign _null",
            "ResultPath": "$.tmp.result",
            "Type": "Parallel",
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
              "_null": null,
              "_undefined": null,
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
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: arr: []",
            "InputPath": "$._undefined",
            "Next": "Assign two",
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Assign two": Object {
            "Comment": "source: two: string",
            "InputPath": "$._undefined",
            "Next": "Return \\"ok\\"",
            "ResultPath": "$.vars.two",
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
          "Return \\"ok\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "ok",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then assignmentToUndefined can be converted to asl", async () => {
    expect(converted.assignmentToUndefined.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign _undefined": Object {
            "Comment": "source: _undefined = undefined",
            "InputPath": "$._undefined",
            "Next": "Return \\"ok\\"",
            "ResultPath": "$.vars._undefined",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign _undefined",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"ok\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "ok",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then assignmentToNull can be converted to asl", async () => {
    expect(converted.assignmentToNull.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign _null": Object {
            "Comment": "source: _null = null",
            "InputPath": "$._null",
            "Next": "Return \\"ok\\"",
            "ResultPath": "$.vars._null",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign _null",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"ok\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "ok",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then arrayIndexer can be converted to asl", async () => {
    expect(converted.arrayIndexer.asl).toMatchInlineSnapshot(`
      Object {
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
          "Assign arr[1]": Object {
            "Comment": undefined,
            "InputPath": "$.vars.arr[3]",
            "Next": "Assign arr[3]",
            "ResultPath": "$.vars.arr[1]",
            "Type": "Pass",
          },
          "Assign arr[3]": Object {
            "Comment": undefined,
            "InputPath": "$.vars.two",
            "Next": "Return arr",
            "ResultPath": "$.vars.arr[3]",
            "Type": "Pass",
          },
          "Assign two": Object {
            "Comment": "source: two = arr[1]",
            "InputPath": "$.vars.arr[1]",
            "Next": "Assign arr[1]",
            "ResultPath": "$.vars.two",
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
  it("then functions can be converted to asl", async () => {
    expect(converted.functions.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign arr": Object {
            "Comment": "source: arr = asl.states.array(str, num, combined)",
            "InputPath": "$.tmp.eval.value",
            "Next": "Return arr",
            "ResultPath": "$.vars.arr",
            "Type": "Pass",
          },
          "Assign combined": Object {
            "Comment": "source: combined = asl.states.format(\\"1: {}\\\\n 2: {}\\",  ...",
            "InputPath": "$.tmp.eval.value",
            "Next": "Evaluate Array($.vars.str ...",
            "ResultPath": "$.vars.combined",
            "Type": "Pass",
          },
          "Assign num": Object {
            "Comment": "source: num = asl.states.format(\\"answer is {}\\", 42)",
            "InputPath": "$.tmp.eval.value",
            "Next": "Evaluate Format('1: {} 2 ...",
            "ResultPath": "$.vars.num",
            "Type": "Pass",
          },
          "Assign str": Object {
            "Comment": "source: str = asl.states.format(\\"hello {}\\", \\"world\\")",
            "InputPath": "$.tmp.eval.value",
            "Next": "Evaluate Format('answer i ...",
            "ResultPath": "$.vars.str",
            "Type": "Pass",
          },
          "Evaluate Array($.vars.str ...": Object {
            "Next": "Assign arr",
            "Parameters": Object {
              "value.$": "States.Array($.vars.str, $.vars.num, $.vars.combined)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('1: {} 2 ...": Object {
            "Next": "Assign combined",
            "Parameters": Object {
              "value.$": "States.Format('1: {}
       2: {}', $.vars.str, $.vars.num)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('answer i ...": Object {
            "Next": "Assign num",
            "Parameters": Object {
              "value.$": "States.Format('answer is {}', 42)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate Format('hello {} ...": Object {
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
              "_null": null,
              "_undefined": null,
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
