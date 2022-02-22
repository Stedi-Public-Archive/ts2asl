import { runConvertForTest } from "./utility";

describe("when converting variables", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("variables");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "
      import * as asl from \\"@cloudscript/asl-lib\\"
      import { StateMachineContext } from \\"@cloudscript/asl-lib\\";

      export const main = asl.deploy.asStateMachine(async (input: IInput, context: StateMachineContext<IInput>) =>{
          asl.typescriptIf({
              name: \\"If (typeof input.name !== ...\\",
              condition: () => typeof input.name !== \\"string\\",
              then: async () => {
                  input.name = \\"fred\\";
              },
              comment: \\"if (typeof input.name !== \\\\\\"string\\\\\\") {\\\\n    input.name = \\\\\\"fred\\\\\\";\\\\n  }\\"
          })
          const x = asl.pass({
              parameters: () => ({
                  name: input.name,
                  executionId: context.execution.id
              }),
              comment: \\"x = {\\\\n    name: input.name,\\\\n    executionId: context.execution.id\\\\n  }\\"
          });
          const y = asl.pass({
              parameters: () => ({
                  x,
                  somethingLiteral: [\\"one\\", 2, \\"three\\"],
                  startTime: context.execution.startTime,
                  func: asl.states.jsonToString(x),
                  number: asl.states.stringToJson(\\"123\\") as number,
                  arr: asl.states.array(1, 2, 3, 4, 5, 6),
              }),
              comment: \\"y = {\\\\n    x,\\\\n    somethingLiteral: [\\\\\\"one\\\\\\", 2, \\\\\\"three\\\\\\"],\\\\n    startTime: context.execution.startTime,\\\\n    func: asl.states.jsonToString(x),\\\\n    number: asl.states.stringToJson(\\\\\\"123\\\\\\") as number,\\\\n    arr: asl.states.array(1, 2, 3, 4, 5, 6),\\\\n  }\\"
          });
          return y;
      });


      interface IInput {
        name: string;
        totalDue: number;
        orders: [{ orderId: string, date: Date }];
      }
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
          "identifier": "input",
        },
        "statements": Array [
          Object {
            "_syntaxKind": "if",
            "condition": Object {
              "_syntaxKind": "binary-expression",
              "operator": "not",
              "rhs": Object {
                "_syntaxKind": "binary-expression",
                "lhs": Object {
                  "_syntaxKind": "type-of-expression",
                  "operand": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "input.name",
                    "type": "string",
                  },
                },
                "operator": "eq",
                "rhs": Object {
                  "_syntaxKind": "literal",
                  "type": "string",
                  "value": "string",
                },
              },
            },
            "source": "if (typeof input.name !== \\"string\\") {
          input.name = \\"fred\\";
        }",
            "stateName": "If (typeof input.name !== ...",
            "then": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "variable-assignment",
                  "expression": Object {
                    "_syntaxKind": "literal",
                    "type": "string",
                    "value": "fred",
                  },
                  "name": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "input.name",
                    "type": "string",
                  },
                },
              ],
            },
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal-object",
                "properties": Object {
                  "executionId": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "context.execution.id",
                    "type": "string",
                  },
                  "name": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "input.name",
                    "type": "string",
                  },
                },
              },
              "source": "x = {
          name: input.name,
          executionId: context.execution.id
        }",
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "x",
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
                  "arr": Object {
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
                    ],
                    "function": "asl.states.array",
                  },
                  "func": Object {
                    "_syntaxKind": "asl-intrinsic-function",
                    "arguments": Array [
                      Object {
                        "_syntaxKind": "identifier",
                        "identifier": "x",
                        "type": "object",
                      },
                    ],
                    "function": "asl.states.jsonToString",
                  },
                  "number": Object {
                    "_syntaxKind": "asl-intrinsic-function",
                    "arguments": Array [
                      Object {
                        "_syntaxKind": "literal",
                        "type": "string",
                        "value": "123",
                      },
                    ],
                    "function": "asl.states.stringToJson",
                  },
                  "somethingLiteral": Object {
                    "_syntaxKind": "literal-array",
                    "elements": Array [
                      Object {
                        "_syntaxKind": "literal",
                        "type": "string",
                        "value": "one",
                      },
                      Object {
                        "_syntaxKind": "literal",
                        "type": "numeric",
                        "value": 2,
                      },
                      Object {
                        "_syntaxKind": "literal",
                        "type": "string",
                        "value": "three",
                      },
                    ],
                  },
                  "startTime": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "context.execution.startTime",
                    "type": "string",
                  },
                  "x": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "x",
                    "type": "object",
                  },
                },
              },
              "source": "y = {
          x,
          somethingLiteral: [\\"one\\", 2, \\"three\\"],
          startTime: context.execution.startTime,
          func: asl.states.jsonToString(x),
          number: asl.states.stringToJson(\\"123\\") as number,
          arr: asl.states.array(1, 2, 3, 4, 5, 6),
        }",
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "y",
              "type": "object",
            },
          },
          Object {
            "_syntaxKind": "return",
            "expression": Object {
              "_syntaxKind": "identifier",
              "identifier": "y",
              "type": "object",
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
          "Assign Name": Object {
            "Comment": undefined,
            "Next": "Assign X",
            "Result": "fred",
            "ResultPath": "$.vars.name",
            "Type": "Pass",
          },
          "Assign X": Object {
            "Comment": "source: x = { name: input.name, executionId: context.e ...",
            "Next": "Assign Y",
            "Parameters": Object {
              "executionId.$": "$$.Execution.Id",
              "name.$": "$.vars.name",
            },
            "ResultPath": "$.vars.x",
            "Type": "Pass",
          },
          "Assign Y": Object {
            "Comment": "source: y = { x, somethingLiteral: [\\"one\\", 2, \\"three\\"] ...",
            "Next": "Pass",
            "Parameters": Object {
              "arr.$": "States.Array(1, 2, 3, 4, 5, 6)",
              "func.$": "States.JsonToString($.vars.x)",
              "number.$": "States.StringToJson('123')",
              "somethingLiteral": Array [
                "one",
                2,
                "three",
              ],
              "startTime.$": "$$.Execution.StartTime",
              "x.$": "$.vars.x",
            },
            "ResultPath": "$.vars.y",
            "Type": "Pass",
          },
          "If (typeof input.name !== ...": Object {
            "Choices": Array [
              Object {
                "Next": "Assign Name",
                "Not": Object {
                  "And": Array [
                    Object {
                      "IsPresent": true,
                      "Variable": "$.vars.name",
                    },
                    Object {
                      "IsString": true,
                      "Variable": "$.vars.name",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (typeof input.name !== \\"string\\") { input.na ...",
            "Default": "Assign X",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (typeof input.name !== ...",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "InputPath": "$.vars.y",
            "Next": "Succeed",
            "Type": "Pass",
          },
          "Succeed": Object {
            "Comment": undefined,
            "Type": "Succeed",
          },
        },
      }
    `);
  });
});
