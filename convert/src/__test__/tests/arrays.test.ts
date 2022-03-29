import { runConvertForTest } from "../utility";
describe("when converting arrays", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("arrays");
  });
  it("then serializeArray can be converted to asl", async () => {
    expect(converted.serializeArray.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign myArray": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.lastResult.value",
            "Next": "Evaluate States.JsonToStr ...",
            "ResultPath": "$.vars.myArray",
            "Type": "Pass",
          },
          "Assign myArray_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.lastResult.value",
            "Next": "Return myArray",
            "ResultPath": "$.vars.myArray",
            "Type": "Pass",
          },
          "Assign mySerializedArray": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.lastResult.value",
            "Next": "Evaluate States.StringToJ ...",
            "ResultPath": "$.vars.mySerializedArray",
            "Type": "Pass",
          },
          "Evaluate States.Array(1, ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign myArray",
            "Parameters": Object {
              "value.$": "States.Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
            },
            "ResultPath": "$.tmp.lastResult",
            "Type": "Pass",
          },
          "Evaluate States.JsonToStr ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign mySerializedArray",
            "Parameters": Object {
              "value.$": "States.JsonToString($.vars.myArray)",
            },
            "ResultPath": "$.tmp.lastResult",
            "Type": "Pass",
          },
          "Evaluate States.StringToJ ...": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign myArray_1",
            "Parameters": Object {
              "value.$": "States.StringToJson($.vars.mySerializedArray)",
            },
            "ResultPath": "$.tmp.lastResult",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Evaluate States.Array(1, ...",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return myArray": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.myArray",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then mapArray can be converted to asl", async () => {
    expect(converted.mapArray.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign Return_var": Object {
            "Comment": undefined,
            "ItemsPath": "$.vars.myArray",
            "Iterator": Object {
              "StartAt": "If (x === 1 || x === 3 || ...",
              "States": Object {
                "If (x === 1 || x === 3 || ...": Object {
                  "Choices": Array [
                    Object {
                      "Next": "Return { age: x, ...",
                      "Or": Array [
                        Object {
                          "NumericEquals": 1,
                          "Variable": "$.vars.x",
                        },
                        Object {
                          "NumericEquals": 3,
                          "Variable": "$.vars.x",
                        },
                        Object {
                          "NumericEquals": 5,
                          "Variable": "$.vars.x",
                        },
                        Object {
                          "NumericEquals": 7,
                          "Variable": "$.vars.x",
                        },
                        Object {
                          "NumericEquals": 9,
                          "Variable": "$.vars.x",
                        },
                      ],
                    },
                  ],
                  "Comment": "source: if (x === 1 || x === 3 || x === 5 || x === 7 | ...",
                  "Default": "Return { age: x, ..._1",
                  "Type": "Choice",
                },
                "Return { age: x, ...": Object {
                  "Comment": undefined,
                  "End": true,
                  "Parameters": Object {
                    "age.$": "$.vars.x",
                    "species": "dog",
                  },
                  "Type": "Pass",
                },
                "Return { age: x, ..._1": Object {
                  "Comment": undefined,
                  "End": true,
                  "Parameters": Object {
                    "age.$": "$.vars.x",
                    "species": "cat",
                  },
                  "Type": "Pass",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Return result",
            "Parameters": Object {
              "vars": Object {
                "x.$": "$$.Map.Item.Value",
              },
            },
            "ResultPath": "$.tmp.return_var",
            "Type": "Map",
          },
          "Assign myArray": Object {
            "Comment": "source: myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
            "Next": "Assign Return_var",
            "Result": Array [
              1,
              2,
              3,
              4,
              5,
              6,
              7,
              8,
              9,
              10,
            ],
            "ResultPath": "$.vars.myArray",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign myArray",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return result": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.return_var",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then mapArraySimple can be converted to asl", async () => {
    expect(converted.mapArraySimple.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign ages": Object {
            "Comment": undefined,
            "InputPath": "$.vars.mappedArray..age",
            "Next": "Assign species",
            "ResultPath": "$.vars.ages",
            "Type": "Pass",
          },
          "Assign mappedArray": Object {
            "Comment": "source: mappedArray = [{ age: 1, species: \\"dog\\" }, { a ...",
            "Next": "Assign ages",
            "Result": Array [
              Object {
                "age": 1,
                "species": "dog",
              },
              Object {
                "age": 2,
                "species": "cat",
              },
              Object {
                "age": 3,
                "species": "dog",
              },
              Object {
                "age": 4,
                "species": "cat",
              },
              Object {
                "age": 11,
                "species": "dog",
              },
              Object {
                "age": 12,
                "species": "car",
              },
              Object {
                "age": 13,
                "species": "dog",
              },
              Object {
                "age": 14,
                "species": "cat",
              },
            ],
            "ResultPath": "$.vars.mappedArray",
            "Type": "Pass",
          },
          "Assign species": Object {
            "Comment": undefined,
            "InputPath": "$.vars.mappedArray..species",
            "Next": "Return { ages, specie ...",
            "ResultPath": "$.vars.species",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign mappedArray",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return { ages, specie ...": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "ages.$": "$.vars.ages",
              "species.$": "$.vars.species",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then mapArrayNestedPropertyAccess can be converted to asl", async () => {
    expect(converted.mapArrayNestedPropertyAccess.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign num": Object {
            "Comment": undefined,
            "InputPath": "$.vars.source..obj.num",
            "Next": "Assign str",
            "ResultPath": "$.vars.num",
            "Type": "Pass",
          },
          "Assign source": Object {
            "Comment": "source: source = [{ obj: { num: 23, str: \\"str\\" } }]",
            "Next": "Assign num",
            "Result": Array [
              Object {
                "obj": Object {
                  "num": 23,
                  "str": "str",
                },
              },
            ],
            "ResultPath": "$.vars.source",
            "Type": "Pass",
          },
          "Assign str": Object {
            "Comment": undefined,
            "InputPath": "$.vars.source..obj.str",
            "Next": "Return { num, str }",
            "ResultPath": "$.vars.str",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign source",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return { num, str }": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "num.$": "$.vars.num",
              "str.$": "$.vars.str",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then filterArray can be converted to asl", async () => {
    expect(converted.filterArray.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign filterArray": Object {
            "Comment": undefined,
            "Next": "Return filterArray",
            "Parameters": Object {
              "cats": Object {
                "old.$": "$.vars.mappedArray[?(@.species == 'cat' && @.age >= 5)]",
                "young.$": "$.vars.mappedArray[?(@.species == 'cat' && @.age < 5)]",
              },
              "dogs": Object {
                "old.$": "$.vars.mappedArray[?(@.species == 'dog' && @.age >= 5)]",
                "young.$": "$.vars.mappedArray[?(@.species == 'dog' && @.age < 5)]",
              },
            },
            "ResultPath": "$.vars.filterArray",
            "Type": "Pass",
          },
          "Assign mappedArray": Object {
            "Comment": "source: mappedArray = [{ age: 1, species: \\"dog\\" }, { a ...",
            "Next": "Assign filterArray",
            "Result": Array [
              Object {
                "age": 1,
                "species": "dog",
              },
              Object {
                "age": 2,
                "species": "cat",
              },
              Object {
                "age": 3,
                "species": "dog",
              },
              Object {
                "age": 4,
                "species": "cat",
              },
              Object {
                "age": 11,
                "species": "dog",
              },
              Object {
                "age": 12,
                "species": "car",
              },
              Object {
                "age": 13,
                "species": "dog",
              },
              Object {
                "age": 14,
                "species": "cat",
              },
            ],
            "ResultPath": "$.vars.mappedArray",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign mappedArray",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return filterArray": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.filterArray",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then jsonPathExpressions can be converted to asl", async () => {
    expect(converted.jsonPathExpressions.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign filterArray": Object {
            "Comment": "source: filterArray = { cats: { young: [{ age: 2, spec ...",
            "Next": "Assign uniqueAges",
            "Result": Object {
              "cats": Object {
                "old": Array [
                  Object {
                    "age": 12,
                    "species": "cat",
                  },
                  Object {
                    "age": 14,
                    "species": "cat",
                  },
                ],
                "young": Array [
                  Object {
                    "age": 2,
                    "species": "cat",
                  },
                  Object {
                    "age": 4,
                    "species": "cat",
                  },
                ],
              },
              "dogs": Object {
                "old": Array [
                  Object {
                    "age": 11,
                    "species": "dog",
                  },
                  Object {
                    "age": 13,
                    "species": "dog",
                  },
                ],
                "young": Array [
                  Object {
                    "age": 1,
                    "species": "dog",
                  },
                  Object {
                    "age": 3,
                    "species": "dog",
                  },
                ],
              },
            },
            "ResultPath": "$.vars.filterArray",
            "Type": "Pass",
          },
          "Assign flattenedPets": Object {
            "Comment": undefined,
            "InputPath": "$.vars.filterArray[*][*][*]",
            "Next": "Assign slicedArr",
            "ResultPath": "$.vars.flattenedPets",
            "Type": "Pass",
          },
          "Assign slicedArr": Object {
            "Comment": undefined,
            "InputPath": "$.vars.filterArray.cats.young[1:1]",
            "Next": "Return { uniqueAges, ...",
            "ResultPath": "$.vars.slicedArr",
            "Type": "Pass",
          },
          "Assign uniqueAges": Object {
            "Comment": undefined,
            "InputPath": "$.vars.filterArray..age",
            "Next": "Assign flattenedPets",
            "ResultPath": "$.vars.uniqueAges",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign filterArray",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return { uniqueAges, ...": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "flattenedPets.$": "$.vars.flattenedPets",
              "slicedArr.$": "$.vars.slicedArr",
              "uniqueAges.$": "$.vars.uniqueAges",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
