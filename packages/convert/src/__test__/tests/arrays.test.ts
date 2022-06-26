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
            "Comment": "source: myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7 ...",
            "InputPath": "$.tmp.eval.value",
            "Next": "Evaluate JsonToString($.v ...",
            "ResultPath": "$.vars.myArray",
            "Type": "Pass",
          },
          "Assign myArray_1": Object {
            "Comment": undefined,
            "InputPath": "$.tmp.eval.value",
            "Next": "Return myArray",
            "ResultPath": "$.vars.myArray",
            "Type": "Pass",
          },
          "Assign mySerializedArray": Object {
            "Comment": "source: mySerializedArray = asl.states.jsonToString(my ...",
            "InputPath": "$.tmp.eval.value",
            "Next": "Evaluate StringToJson($.v ...",
            "ResultPath": "$.vars.mySerializedArray",
            "Type": "Pass",
          },
          "Evaluate Array(1, 2, 3, 4 ...": Object {
            "Next": "Assign myArray",
            "Parameters": Object {
              "value.$": "States.Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate JsonToString($.v ...": Object {
            "Next": "Assign mySerializedArray",
            "Parameters": Object {
              "value.$": "States.JsonToString($.vars.myArray)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Evaluate StringToJson($.v ...": Object {
            "Next": "Assign myArray_1",
            "Parameters": Object {
              "value.$": "States.StringToJson($.vars.mySerializedArray)",
            },
            "ResultPath": "$.tmp.eval",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Evaluate Array(1, 2, 3, 4 ...",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
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
          "Assign myArray": Object {
            "Comment": "source: myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
            "Next": "myArray.map => x",
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
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.result",
            "Type": "Pass",
          },
          "myArray.map => x": Object {
            "Comment": "source: myArray.map(x => { if (x === 1 || x === 3 || x ...",
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
            "Next": "Return",
            "Parameters": Object {
              "vars": Object {
                "x.$": "$$.Map.Item.Value",
              },
            },
            "ResultPath": "$.tmp.result",
            "Type": "Map",
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
            "Comment": "source: ages = mappedArray.map(x => x.age)",
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
            "Comment": "source: species = mappedArray.map(x => x.species)",
            "InputPath": "$.vars.mappedArray..species",
            "Next": "Return { ages, specie ...",
            "ResultPath": "$.vars.species",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign mappedArray",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
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
            "Comment": "source: num = source.map(x => x.obj.num)",
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
            "Comment": "source: str = source.map(x => x.obj.str)",
            "InputPath": "$.vars.source..obj.str",
            "Next": "Return { num: num[0], ...",
            "ResultPath": "$.vars.str",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign source",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return { num: num[0], ...": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "num.$": "$.vars.num[0]",
              "str.$": "$.vars.str[0]",
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
            "Comment": "source: filterArray = { cats: { young: mappedArray.fil ...",
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
              "_null": null,
              "_undefined": null,
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
          "Assign ages": Object {
            "Comment": "source: ages = asl.jsonPathExpression(filterArray, \\".. ...",
            "InputPath": "$.vars.filterArray..age",
            "Next": "Assign flattenedPets",
            "ResultPath": "$.vars.ages",
            "Type": "Pass",
          },
          "Assign filterArray": Object {
            "Comment": "source: filterArray = { cats: { young: [{ age: 2, spec ...",
            "Next": "Assign ages",
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
            "Comment": "source: flattenedPets = asl.jsonPathExpression(filterA ...",
            "InputPath": "$.vars.filterArray[*][*][*]",
            "Next": "Assign slicedArr",
            "ResultPath": "$.vars.flattenedPets",
            "Type": "Pass",
          },
          "Assign slicedArr": Object {
            "Comment": "source: slicedArr = asl.jsonPathSlice(filterArray.cats ...",
            "InputPath": "$.vars.filterArray.cats.young[1:1]",
            "Next": "Return { ages, fl ...",
            "ResultPath": "$.vars.slicedArr",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign filterArray",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return { ages, fl ...": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "ages.$": "$.vars.ages",
              "flattenedPets.$": "$.vars.flattenedPets",
              "slicedArr.$": "$.vars.slicedArr",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
