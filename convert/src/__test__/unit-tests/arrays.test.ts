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
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign myArray_1",
            "Parameters": Object {
              "value.$": "States.Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
            },
            "ResultPath": "$.lastResult",
            "Type": "Pass",
          },
          "Assign myArray_1": Object {
            "Comment": undefined,
            "InputPath": "$.lastResult.value",
            "Next": "Assign mySerializedArray",
            "ResultPath": "$.vars.myArray",
            "Type": "Pass",
          },
          "Assign myArray_2": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign myArray_3",
            "Parameters": Object {
              "value.$": "States.StringToJson($.vars.mySerializedArray)",
            },
            "ResultPath": "$.lastResult",
            "Type": "Pass",
          },
          "Assign myArray_3": Object {
            "Comment": undefined,
            "InputPath": "$.lastResult.value",
            "Next": "Pass",
            "ResultPath": "$.vars.myArray",
            "Type": "Pass",
          },
          "Assign mySerializedArray": Object {
            "Comment": "source: result of an expression cannot be placed in In ...",
            "Next": "Assign mySerializedArray_1",
            "Parameters": Object {
              "value.$": "States.JsonToString($.vars.myArray)",
            },
            "ResultPath": "$.lastResult",
            "Type": "Pass",
          },
          "Assign mySerializedArray_1": Object {
            "Comment": undefined,
            "InputPath": "$.lastResult.value",
            "Next": "Assign myArray_2",
            "ResultPath": "$.vars.mySerializedArray",
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
          "Pass": Object {
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
                      "Next": "Pass",
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
                  "Default": "Pass_1",
                  "Type": "Choice",
                },
                "Pass": Object {
                  "Comment": undefined,
                  "End": true,
                  "Parameters": Object {
                    "age.$": "$.vars.x",
                    "species": "dog",
                  },
                  "Type": "Pass",
                },
                "Pass_1": Object {
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
            "Next": "Pass_2",
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
          "Pass_2": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.return_var",
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
            "Next": "Pass",
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
          "Pass": Object {
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
            "Next": "Pass",
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
          "Pass": Object {
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
