import { runConvertForTest } from "./utility";

describe("when converting closures", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("arrays");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "//source: https://asl.stedi.com/?share=eJytVAtT2zgQ_jOeApXrQQkJYaa0mBA4KHk0CfQ1ZkbYquOebQVJviO9vf_elezgJFM63NGMHa--_fbbh2R3RZbxXMN0liiC10IUkijNNCcZC2dJzmGimdS-hjOec2kcygDFnKQiJhlXisWcFCrJYzIxgco7FTJjmrA8Il2Ra36vyfD2Gw81lITfIjVdzDmMmFIwQLSWZDlhUrLFuo5vIKRLlnHNpYIq86WI-2Vez4G1nNtbtnGjwe95WOhE5ER8Jf_8S7Ag_P870TMiRcpLdMt1HM8q9MvBeQPMZcDeMtyzitNkEx6jiC_znac1kS3ss67XLrep23Cb7p7bctvuvttxD1y6uwM4tL-41ETPeKWoBbmYDAc4emmk1xJcKJFPxcR6nhOaLSZcJixNvvNoo9hV3rbjVc3Uha4muGXxnybp5iiUV8ZPhVF7TmhV1Cpmi9ooH8uT3OzLiGu1ZvfZHM612TQhoTsTScirhwI_j-CaodBtysGBczUoMtQNYSihMnt3BUvVcnVmheV0xvJlkhMRL80u06uomvMwwSwR2uXxDa0zOjbTXp5Fewihh5WsqIR4Y9GZGjE9g4dNWFIUnzN7CtNEaXO4ka_sK4i5VDVMM2wTTnr3c4lvEJ5jBWOuilRPeIovKM5jjhPCWp4ta4iAX6Y8Np15RvbL2-0jrxoBOTwkW8jZIi9ekCMPh_G6tROASKMn0t8cGr6p4jE6-jbUn0Isdf0oqo4h9lzkyV2B71PMf9Hx_wkpWT6SbNMmPW5H-HBUyaWZ-tWj8f-FG0tRzHk0Kre3nAR8TZnW-P1ah7-8DMrrhkITWrAPB-BDA_agDR3wb26cXaC4biLitMBpI6NjOc4xdIMATkoM1z04DdB3FsAfD9g5XBjsXQCXK7y-wQYBDA02gvfgNGBsEowNMIYJHDlTvK_gGj7AK4q7aZYfK-gT0M8IlWZjtzZpbTZqs1mZn6GxF9gfZqe7leijORqtWqJdm_u12anNg1qYmidtPLRLm0D3gLaQSNtAMZ52bD56sMbxf8IxSsdAu0b3BGgPmadwbdCzOhanTc-BXgB9B_QSff0SGFhgWFY1Qvx9HTMGOgGrZZxTdF6VTpt3hYIFfQD6Eegn098Pmr8QLA
      import * as asl from \\"@cloudscript/asl-lib\\"

      export const main = asl.deploy.asStateMachine(async (_input: {}, context: asl.StateMachineContext<{}>) =>{
          asl.pass({
              parameters: () => asl.states.format(\\"Starting execution of {} at {} with role of {}\\", context.stateMachine.name, context.execution.startTime, context.execution.roleArn),
              comment: \\"console.log(asl.states.format(\\\\\\"Starting execution of {} at {} with role of {}\\\\\\", context.stateMachine.name, context.execution.startTime, context.execution.roleArn))\\"
          });
          let myArray = asl.pass({
              parameters: () => asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) as number[],
              comment: \\"myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) as number[]\\"
          });
          let mySerializedArray = asl.states.jsonToString(myArray);
          myArray = asl.states.stringToJson(mySerializedArray) as number[];
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
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
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
              "source": "myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) as number[]",
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "myArray",
              "type": "object",
            },
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
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-map-state",
              "catch": Array [],
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
                        },
                      ],
                    },
                  },
                ],
              },
              "retry": Array [],
              "source": undefined,
              "stateName": "For x Of myArray.map",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "pets",
              "type": "object",
            },
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
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "bySpecies",
              "type": "object",
            },
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
              "type": "object",
            },
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
              "type": "object",
            },
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
                  "type": "object",
                },
                "slicedArr": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "slicedArr",
                  "type": "object",
                },
                "uniqueAges": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "uniqueAges",
                  "type": "object",
                },
              },
            },
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
          "Assign BySpecies": Object {
            "Comment": undefined,
            "Next": "Assign UniqueAges",
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
          "Assign FlattenedPets": Object {
            "Comment": undefined,
            "InputPath": "$.vars.bySpecies[*][*][*]",
            "Next": "Assign SlicedArr",
            "ResultPath": "$.vars.flattenedPets",
            "Type": "Pass",
          },
          "Assign MyArray": Object {
            "Comment": "source: myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7 ...",
            "InputPath": "States.Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)",
            "Next": "Assign MySerializedArray",
            "ResultPath": "$.vars.myArray",
            "Type": "Pass",
          },
          "Assign MyArray_1": Object {
            "Comment": undefined,
            "InputPath": "States.StringToJson($.vars.mySerializedArray)",
            "Next": "Assign Pets",
            "ResultPath": "$.vars.myArray",
            "Type": "Pass",
          },
          "Assign MySerializedArray": Object {
            "Comment": undefined,
            "InputPath": "States.JsonToString($.vars.myArray)",
            "Next": "Assign MyArray_1",
            "ResultPath": "$.vars.mySerializedArray",
            "Type": "Pass",
          },
          "Assign Pets": Object {
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
                  "Next": "Succeed",
                  "Parameters": Object {
                    "age.$": "$.vars.x",
                    "createdBy.$": "$$.State.Name",
                    "species": "dog",
                  },
                  "Type": "Pass",
                },
                "Succeed": Object {
                  "Comment": undefined,
                  "Type": "Succeed",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Assign BySpecies",
            "Parameters": Object {
              "vars": Object {
                "context.$": "$.vars.context",
                "myArray.$": "$.vars.myArray",
                "x.$": "$.vars.x",
              },
            },
            "ResultPath": "$.vars.pets",
            "Type": "Map",
          },
          "Assign SlicedArr": Object {
            "Comment": undefined,
            "InputPath": "$.vars.pets[3:5]",
            "Next": "Pass_3",
            "ResultPath": "$.vars.slicedArr",
            "Type": "Pass",
          },
          "Assign UniqueAges": Object {
            "Comment": undefined,
            "InputPath": "$.vars.bySpecies..age",
            "Next": "Assign FlattenedPets",
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
            "Next": "Assign MyArray",
            "Type": "Pass",
          },
          "Pass_3": Object {
            "Next": "Succeed_2",
            "Parameters": Object {
              "bySpecies.$": "$.vars.bySpecies",
              "flattenedPets.$": "$.vars.flattenedPets",
              "slicedArr.$": "$.vars.slicedArr",
              "uniqueAges.$": "$.vars.uniqueAges",
            },
            "Type": "Pass",
          },
          "Succeed_2": Object {
            "Comment": undefined,
            "Type": "Succeed",
          },
        },
      }
    `);
  });
});
