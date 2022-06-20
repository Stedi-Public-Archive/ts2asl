import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting if statement to iasl", () => {
  it("then sdk integrations get converted to map states", () => {
    const code = `
    import * as asl from '@ts2asl/asl-lib';
    asl.map({
      maxConcurrency: 5,
      items: result,
      iterator: (prefix) =>
          asl.sdkSfnStartExecution({
              parameters: {
                  input: asl.states.format("{}", prefix),
                  stateMachineArn: "arn:something,
              },
          }),
  });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "asl-map-state",
            "items": Object {
              "_syntaxKind": "identifier",
              "identifier": "result",
              "type": "unknown",
            },
            "iterator": Object {
              "_syntaxKind": "function",
              "inputArgumentName": Object {
                "_syntaxKind": "identifier",
                "identifier": "prefix",
                "type": "object",
              },
              "statements": Array [
                Object {
                  "_syntaxKind": "asl-task-state",
                  "parameters": Object {
                    "_syntaxKind": "literal-object",
                    "properties": Object {
                      "Input": Object {
                        "_syntaxKind": "asl-intrinsic-function",
                        "arguments": Array [
                          Object {
                            "_syntaxKind": "literal",
                            "type": "string",
                            "value": "{}",
                          },
                          Object {
                            "_syntaxKind": "identifier",
                            "identifier": "prefix",
                            "type": "unknown",
                          },
                        ],
                        "function": "asl.states.format",
                        "type": "string",
                      },
                      "StateMachineArn": Object {
                        "_syntaxKind": "literal",
                        "type": "string",
                        "value": "arn:something,",
                      },
                    },
                  },
                  "resource": "arn:aws:states:::aws-sdk:sfn:startExecution",
                  "stateName": "StartExecution",
                },
              ],
            },
            "maxConcurrency": 5,
          },
        ],
      }
    `);
  });
});
