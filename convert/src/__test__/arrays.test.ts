import { runConvertForTest } from "./utility";

describe("when converting closures", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("arrays");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "
      import * as asl from \\"@ts2asl/asl-lib\\"

      export const main = asl.deploy.asStateMachine(async (_input: {}, context: asl.StateMachineContext<{}>) =>{
          asl.pass({
              parameters: () => asl.states.format(\\"Starting execution of {} at {} with role of {}\\", context.stateMachine.name, context.execution.startTime, context.execution.roleArn),
              comment: \\"console.log(asl.states.format(\\\\\\"Starting execution of {} at {} with role of {}\\\\\\", context.stateMachine.name, context.execution.startTime, context.execution.roleArn))\\"
          });
          let myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
          let mySerializedArray = asl.states.jsonToString(myArray);
          myArray = asl.states.stringToJson(mySerializedArray);
          //Create Pets
          let pets = asl.map({
              name: \\"For x Of myArray.map\\",
              items: () => myArray,
              iterator: x => {
                  asl.typescriptIf({
                      name: \\"If (x === 1 || x === 3 || ...\\",
                      condition: () => x === 1 || x === 3 || x === 5 || x === 7 || x == 9,
                      then: async () => {
                          return {
                              age: x,
                              species: \\"dog\\",
                              createdBy: context.state.name,
                          };
                      },
                      else: async () => {
                          return {
                              age: x,
                              species: \\"cat\\",
                              createdBy: context.state.name,
                          };
                      },
                      comment: \\"if (x === 1 || x === 3 || x === 5 || x === 7 || x == 9) {\\\\n      return {\\\\n        age: x,\\\\n        species: \\\\\\"dog\\\\\\",\\\\n        createdBy: context.state.name,\\\\n      }\\\\n    } else {\\\\n      return {\\\\n        age: x,\\\\n        species: \\\\\\"cat\\\\\\",\\\\n        createdBy: context.state.name,\\\\n      }\\\\n    }\\"
                  })
              }
          });
          //Create separate list of cats and dogs using JSONPath Expressions
          let bySpecies = asl.pass({
              name: \\"Assign bySpecies\\",
              parameters: () => ({
                  cats: {
                      young: asl.jsonPathFilter(pets, (x) => x.species === \\"cat\\" && x.age < 5),
                      old: asl.jsonPathFilter(pets, (x) => x.species === \\"cat\\" && x.age >= 5),
                  },
                  dogs: {
                      young: asl.jsonPathFilter(pets, (x) => x.species === \\"dog\\" && x.age < 5),
                      old: asl.jsonPathFilter(pets, (x) => x.species === \\"dog\\" && x.age >= 5),
                  }
              })
          });
          //Add array of unique ages using JSONPath Expression
          let uniqueAges = asl.jsonPathExpression(bySpecies, \\"..age\\");
          let flattenedPets = asl.jsonPathExpression(bySpecies, \\"[*][*][*]\\");
          let slicedArr = asl.jsonPathSlice(pets, 3, 5);
          return {
              bySpecies,
              uniqueAges,
              flattenedPets,
              slicedArr
          };
      });
      "
    `);
  });
  it("then can be converted to iasl", async () => {
    expect(converted.iasl).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": Object {
          "_syntaxKind": "identifier",
          "identifier": "context",
        },
        "inputArgumentName": Object {
          "_syntaxKind": "identifier",
          "identifier": "_input",
        },
        "statements": Array [
          Object {
            "_syntaxKind": "asl-pass-state",
            "parameters": Object {
              "_syntaxKind": "asl-intrinsic-function",
              "arguments": Array [
                Object {
                  "_syntaxKind": "literal",
                  "type": "string",
                  "value": "Starting execution of {} at {} with role of {}",
                },
                Object {
                  "_syntaxKind": "identifier",
                  "identifier": "context.stateMachine.name",
                  "type": "string",
                },
                Object {
                  "_syntaxKind": "identifier",
                  "identifier": "context.execution.startTime",
                  "type": "string",
                },
                Object {
                  "_syntaxKind": "identifier",
                  "identifier": "context.execution.roleArn",
                  "type": "string",
                },
              ],
              "function": "asl.states.format",
            },
            "source": "console.log(asl.states.format(\\"Starting execution of {} at {} with role of {}\\", context.stateMachine.name, context.execution.startTime, context.execution.roleArn))",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-intrinsic-function",
              "arguments": Array [
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 1,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 2,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 3,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 4,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 5,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 6,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 7,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 8,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 9,
                },
                Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 10,
                },
              ],
              "function": "asl.states.array",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "myArray",
              "type": "object",
            },
            "stateName": "Assign myArray",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-intrinsic-function",
              "arguments": Array [
                Object {
                  "_syntaxKind": "identifier",
                  "identifier": "myArray",
                  "type": "object",
                },
              ],
              "function": "asl.states.jsonToString",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "mySerializedArray",
              "type": "string",
            },
            "stateName": "Assign mySerializedArray",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-intrinsic-function",
              "arguments": Array [
                Object {
                  "_syntaxKind": "identifier",
                  "identifier": "mySerializedArray",
                  "type": "string",
                },
              ],
              "function": "asl.states.stringToJson",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "myArray",
              "type": "object",
            },
            "stateName": "Assign myArray",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-map-state",
              "catch": undefined,
              "items": Object {
                "_syntaxKind": "identifier",
                "identifier": "myArray",
                "type": "object",
              },
              "iterator": Object {
                "_syntaxKind": "function",
                "inputArgumentName": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "x",
                },
                "statements": Array [
                  Object {
                    "_syntaxKind": "if",
                    "condition": Object {
                      "_syntaxKind": "binary-expression",
                      "lhs": Object {
                        "_syntaxKind": "binary-expression",
                        "lhs": Object {
                          "_syntaxKind": "binary-expression",
                          "lhs": Object {
                            "_syntaxKind": "binary-expression",
                            "lhs": Object {
                              "_syntaxKind": "binary-expression",
                              "lhs": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "x",
                                "type": "numeric",
                              },
                              "operator": "eq",
                              "rhs": Object {
                                "_syntaxKind": "literal",
                                "type": "numeric",
                                "value": 1,
                              },
                            },
                            "operator": "or",
                            "rhs": Object {
                              "_syntaxKind": "binary-expression",
                              "lhs": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "x",
                                "type": "numeric",
                              },
                              "operator": "eq",
                              "rhs": Object {
                                "_syntaxKind": "literal",
                                "type": "numeric",
                                "value": 3,
                              },
                            },
                          },
                          "operator": "or",
                          "rhs": Object {
                            "_syntaxKind": "binary-expression",
                            "lhs": Object {
                              "_syntaxKind": "identifier",
                              "identifier": "x",
                              "type": "numeric",
                            },
                            "operator": "eq",
                            "rhs": Object {
                              "_syntaxKind": "literal",
                              "type": "numeric",
                              "value": 5,
                            },
                          },
                        },
                        "operator": "or",
                        "rhs": Object {
                          "_syntaxKind": "binary-expression",
                          "lhs": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "x",
                            "type": "numeric",
                          },
                          "operator": "eq",
                          "rhs": Object {
                            "_syntaxKind": "literal",
                            "type": "numeric",
                            "value": 7,
                          },
                        },
                      },
                      "operator": "or",
                      "rhs": Object {
                        "_syntaxKind": "binary-expression",
                        "lhs": Object {
                          "_syntaxKind": "identifier",
                          "identifier": "x",
                          "type": "numeric",
                        },
                        "operator": "eq",
                        "rhs": Object {
                          "_syntaxKind": "literal",
                          "type": "numeric",
                          "value": 9,
                        },
                      },
                    },
                    "else": Object {
                      "_syntaxKind": "function",
                      "statements": Array [
                        Object {
                          "_syntaxKind": "return",
                          "expression": Object {
                            "_syntaxKind": "literal-object",
                            "properties": Object {
                              "age": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "x",
                                "type": "numeric",
                              },
                              "createdBy": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "context.state.name",
                                "type": "string",
                              },
                              "species": Object {
                                "_syntaxKind": "literal",
                                "type": "string",
                                "value": "cat",
                              },
                            },
                          },
                          "stateName": "Return { age: x, ...",
                        },
                      ],
                    },
                    "source": "if (x === 1 || x === 3 || x === 5 || x === 7 || x == 9) {
            return {
              age: x,
              species: \\"dog\\",
              createdBy: context.state.name,
            }
          } else {
            return {
              age: x,
              species: \\"cat\\",
              createdBy: context.state.name,
            }
          }",
                    "stateName": "If (x === 1 || x === 3 || ...",
                    "then": Object {
                      "_syntaxKind": "function",
                      "statements": Array [
                        Object {
                          "_syntaxKind": "return",
                          "expression": Object {
                            "_syntaxKind": "literal-object",
                            "properties": Object {
                              "age": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "x",
                                "type": "unknown",
                              },
                              "createdBy": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "context.state.name",
                                "type": "string",
                              },
                              "species": Object {
                                "_syntaxKind": "literal",
                                "type": "string",
                                "value": "dog",
                              },
                            },
                          },
                          "stateName": "Return { age: x, ...",
                        },
                      ],
                    },
                  },
                ],
              },
              "maxConcurrency": undefined,
              "retry": undefined,
              "source": undefined,
              "stateName": "For x Of myArray.map",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "pets",
              "type": "object",
            },
            "stateName": "Assign pets",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal-object",
                "properties": Object {
                  "cats": Object {
                    "_syntaxKind": "literal-object",
                    "properties": Object {
                      "old": Object {
                        "_syntaxKind": "identifier",
                        "filterExpression": Object {
                          "argument": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "x",
                            "type": "object",
                          },
                          "expression": Object {
                            "_syntaxKind": "binary-expression",
                            "lhs": Object {
                              "_syntaxKind": "binary-expression",
                              "lhs": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "x.species",
                                "type": "string",
                              },
                              "operator": "eq",
                              "rhs": Object {
                                "_syntaxKind": "literal",
                                "type": "string",
                                "value": "cat",
                              },
                            },
                            "operator": "and",
                            "rhs": Object {
                              "_syntaxKind": "binary-expression",
                              "lhs": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "x.age",
                                "type": "numeric",
                              },
                              "operator": "gte",
                              "rhs": Object {
                                "_syntaxKind": "literal",
                                "type": "numeric",
                                "value": 5,
                              },
                            },
                          },
                        },
                        "identifier": "pets",
                        "type": "object",
                      },
                      "young": Object {
                        "_syntaxKind": "identifier",
                        "filterExpression": Object {
                          "argument": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "x",
                            "type": "object",
                          },
                          "expression": Object {
                            "_syntaxKind": "binary-expression",
                            "lhs": Object {
                              "_syntaxKind": "binary-expression",
                              "lhs": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "x.species",
                                "type": "string",
                              },
                              "operator": "eq",
                              "rhs": Object {
                                "_syntaxKind": "literal",
                                "type": "string",
                                "value": "cat",
                              },
                            },
                            "operator": "and",
                            "rhs": Object {
                              "_syntaxKind": "binary-expression",
                              "lhs": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "x.age",
                                "type": "numeric",
                              },
                              "operator": "lt",
                              "rhs": Object {
                                "_syntaxKind": "literal",
                                "type": "numeric",
                                "value": 5,
                              },
                            },
                          },
                        },
                        "identifier": "pets",
                        "type": "object",
                      },
                    },
                  },
                  "dogs": Object {
                    "_syntaxKind": "literal-object",
                    "properties": Object {
                      "old": Object {
                        "_syntaxKind": "identifier",
                        "filterExpression": Object {
                          "argument": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "x",
                            "type": "object",
                          },
                          "expression": Object {
                            "_syntaxKind": "binary-expression",
                            "lhs": Object {
                              "_syntaxKind": "binary-expression",
                              "lhs": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "x.species",
                                "type": "string",
                              },
                              "operator": "eq",
                              "rhs": Object {
                                "_syntaxKind": "literal",
                                "type": "string",
                                "value": "dog",
                              },
                            },
                            "operator": "and",
                            "rhs": Object {
                              "_syntaxKind": "binary-expression",
                              "lhs": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "x.age",
                                "type": "numeric",
                              },
                              "operator": "gte",
                              "rhs": Object {
                                "_syntaxKind": "literal",
                                "type": "numeric",
                                "value": 5,
                              },
                            },
                          },
                        },
                        "identifier": "pets",
                        "type": "object",
                      },
                      "young": Object {
                        "_syntaxKind": "identifier",
                        "filterExpression": Object {
                          "argument": Object {
                            "_syntaxKind": "identifier",
                            "identifier": "x",
                            "type": "object",
                          },
                          "expression": Object {
                            "_syntaxKind": "binary-expression",
                            "lhs": Object {
                              "_syntaxKind": "binary-expression",
                              "lhs": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "x.species",
                                "type": "string",
                              },
                              "operator": "eq",
                              "rhs": Object {
                                "_syntaxKind": "literal",
                                "type": "string",
                                "value": "dog",
                              },
                            },
                            "operator": "and",
                            "rhs": Object {
                              "_syntaxKind": "binary-expression",
                              "lhs": Object {
                                "_syntaxKind": "identifier",
                                "identifier": "x.age",
                                "type": "numeric",
                              },
                              "operator": "lt",
                              "rhs": Object {
                                "_syntaxKind": "literal",
                                "type": "numeric",
                                "value": 5,
                              },
                            },
                          },
                        },
                        "identifier": "pets",
                        "type": "object",
                      },
                    },
                  },
                },
              },
              "source": undefined,
              "stateName": "Assign bySpecies",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "bySpecies",
              "type": "object",
            },
            "stateName": "Assign bySpecies",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "identifier",
              "identifier": "bySpecies",
              "jsonPathExpression": "..age",
              "type": "object",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "uniqueAges",
              "type": "unknown",
            },
            "stateName": "Assign uniqueAges",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "identifier",
              "identifier": "bySpecies",
              "jsonPathExpression": "[*][*][*]",
              "type": "object",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "flattenedPets",
              "type": "unknown",
            },
            "stateName": "Assign flattenedPets",
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "identifier",
              "identifier": "pets",
              "sliceExpression": Object {
                "end": 5,
                "start": 3,
              },
              "type": "object",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "slicedArr",
              "type": "object",
            },
            "stateName": "Assign slicedArr",
          },
          Object {
            "_syntaxKind": "return",
            "expression": Object {
              "_syntaxKind": "literal-object",
              "properties": Object {
                "bySpecies": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "bySpecies",
                  "type": "object",
                },
                "flattenedPets": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "flattenedPets",
                  "type": "unknown",
                },
                "slicedArr": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "slicedArr",
                  "type": "object",
                },
                "uniqueAges": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "uniqueAges",
                  "type": "unknown",
                },
              },
            },
            "stateName": "Return { bySpecies, ...",
          },
        ],
      }
    `);
  });
  it("then can be converted to asl", async () => {
    expect(converted.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign bySpecies": Object {
            "Comment": undefined,
            "Next": "Assign uniqueAges",
            "Parameters": Object {
              "cats": Object {
                "old.$": "$.vars.pets[?(@.species == 'cat' && @.age >= 5)]",
                "young.$": "$.vars.pets[?(@.species == 'cat' && @.age < 5)]",
              },
              "dogs": Object {
                "old.$": "$.vars.pets[?(@.species == 'dog' && @.age >= 5)]",
                "young.$": "$.vars.pets[?(@.species == 'dog' && @.age < 5)]",
              },
            },
            "ResultPath": "$.vars.bySpecies",
            "Type": "Pass",
          },
          "Assign flattenedPets": Object {
            "Comment": undefined,
            "InputPath": "$.vars.bySpecies[*][*][*]",
            "Next": "Assign slicedArr",
            "ResultPath": "$.vars.flattenedPets",
            "Type": "Pass",
          },
          "Assign myArray": Object {
            "Comment": undefined,
            "InputPath": "States.Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
            "Next": "Assign mySerializedArray",
            "ResultPath": "$.vars.myArray",
            "Type": "Pass",
          },
          "Assign myArray_1": Object {
            "Comment": undefined,
            "InputPath": "States.StringToJson($.vars.mySerializedArray)",
            "Next": "Assign pets",
            "ResultPath": "$.vars.myArray",
            "Type": "Pass",
          },
          "Assign mySerializedArray": Object {
            "Comment": undefined,
            "InputPath": "States.JsonToString($.vars.myArray)",
            "Next": "Assign myArray_1",
            "ResultPath": "$.vars.mySerializedArray",
            "Type": "Pass",
          },
          "Assign pets": Object {
            "Comment": undefined,
            "ItemsPath": "$.vars.myArray",
            "Iterator": Object {
              "StartAt": "If (x === 1 || x === 3 || ...",
              "States": Object {
                "If (x === 1 || x === 3 || ...": Object {
                  "Choices": Array [
                    Object {
                      "Next": "Pass_1",
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
                "Pass_1": Object {
                  "End": true,
                  "Parameters": Object {
                    "age.$": "$.vars.x",
                    "createdBy.$": "$$.State.Name",
                    "species": "dog",
                  },
                  "Type": "Pass",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Assign bySpecies",
            "Parameters": Object {
              "vars": Object {
                "context.$": "$.vars.context",
                "x.$": "$.vars.x",
              },
            },
            "ResultPath": "$.vars.pets",
            "Type": "Map",
          },
          "Assign slicedArr": Object {
            "Comment": undefined,
            "InputPath": "$.vars.pets[3:5]",
            "Next": "Pass_3",
            "ResultPath": "$.vars.slicedArr",
            "Type": "Pass",
          },
          "Assign uniqueAges": Object {
            "Comment": undefined,
            "InputPath": "$.vars.bySpecies..age",
            "Next": "Assign flattenedPets",
            "ResultPath": "$.vars.uniqueAges",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Pass",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": "source: console.log(asl.states.format(\\"Starting execut ...",
            "InputPath": "States.Format('Starting execution of {} at {} with role of {}', $$.StateMachine.Name, $$.Execution.StartTime, $$.Execution.RoleArn)",
            "Next": "Assign myArray",
            "Type": "Pass",
          },
          "Pass_3": Object {
            "End": true,
            "Parameters": Object {
              "bySpecies.$": "$.vars.bySpecies",
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
