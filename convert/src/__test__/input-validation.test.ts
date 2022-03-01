import { runConvertForTest } from "./utility";

describe("when converting example", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("input-validation");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "import * as asl from \\"@ts2asl/asl-lib\\"

      export const main = asl.deploy.asStateMachine(async (input: Input) =>{
          asl.typescriptIf({
              name: \\"If (typeof input.delayInS ...\\",
              condition: () => typeof input.delayInSeconds !== \\"number\\",
              then: async () => {
                  input.delayInSeconds = 5;
              },
              comment: \\"if (typeof input.delayInSeconds !== \\\\\\"number\\\\\\") {\\\\n    input.delayInSeconds = 5;\\\\n  }\\"
          })
          asl.typescriptIf({
              name: \\"If (input.delayInSeconds  ...\\",
              condition: () => input.delayInSeconds > 10 || input.delayInSeconds < 1,
              then: async () => {
                  asl.fail({
                      name: \\"Throw ValidationError\\",
                      error: \\"ValidationError\\",
                      cause: \\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\\",
                      comment: \\"throw new ValidationError(\\\\\\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\\\\\\")\\"
                  })
              },
              comment: \\"if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {\\\\n    throw new ValidationError(\\\\\\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\\\\\\")\\\\n  }\\"
          })
          asl.wait({ seconds: input.delayInSeconds });
      });

      interface Input {
        delayInSeconds: number | undefined;
      }

      class ValidationError extends Error {
        constructor(message: string) {
          super(message);
        }
      }"
    `);
  });
  it("then can be converted to iasl", async () => {
    expect(converted.iasl).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
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
                    "identifier": "input.delayInSeconds",
                    "type": "numeric",
                  },
                },
                "operator": "eq",
                "rhs": Object {
                  "_syntaxKind": "literal",
                  "type": "string",
                  "value": "number",
                },
              },
            },
            "source": "if (typeof input.delayInSeconds !== \\"number\\") {
          input.delayInSeconds = 5;
        }",
            "stateName": "If (typeof input.delayInS ...",
            "then": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "variable-assignment",
                  "expression": Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 5,
                  },
                  "name": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "input.delayInSeconds",
                    "type": "numeric",
                  },
                },
              ],
            },
          },
          Object {
            "_syntaxKind": "if",
            "condition": Object {
              "_syntaxKind": "binary-expression",
              "lhs": Object {
                "_syntaxKind": "binary-expression",
                "lhs": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "input.delayInSeconds",
                  "type": "numeric",
                },
                "operator": "gt",
                "rhs": Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 10,
                },
              },
              "operator": "or",
              "rhs": Object {
                "_syntaxKind": "binary-expression",
                "lhs": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "input.delayInSeconds",
                  "type": "numeric",
                },
                "operator": "lt",
                "rhs": Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 1,
                },
              },
            },
            "source": "if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {
          throw new ValidationError(\\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\\")
        }",
            "stateName": "If (input.delayInSeconds  ...",
            "then": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "asl-fail-state",
                  "cause": "delay in seconds must be numeric value no greater than 10 and no smaller than 1",
                  "error": "ValidationError",
                  "source": "throw new ValidationError(\\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\\")",
                  "stateName": "Throw ValidationError",
                },
              ],
            },
          },
          Object {
            "_syntaxKind": "asl-wait-state",
            "seconds": Object {
              "_syntaxKind": "identifier",
              "identifier": "input.delayInSeconds",
              "type": "numeric",
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
          "Assign DelayInSeconds": Object {
            "Comment": undefined,
            "Next": "If (input.delayInSeconds  ...",
            "Result": 5,
            "ResultPath": "$.vars.delayInSeconds",
            "Type": "Pass",
          },
          "If (input.delayInSeconds  ...": Object {
            "Choices": Array [
              Object {
                "Next": "Throw ValidationError",
                "Or": Array [
                  Object {
                    "NumericGreaterThan": 10,
                    "Variable": "$.vars.delayInSeconds",
                  },
                  Object {
                    "NumericLessThan": 1,
                    "Variable": "$.vars.delayInSeconds",
                  },
                ],
              },
            ],
            "Comment": "source: if (input.delayInSeconds > 10 || input.delayIn ...",
            "Default": "Wait",
            "Type": "Choice",
          },
          "If (typeof input.delayInS ...": Object {
            "Choices": Array [
              Object {
                "Next": "Assign DelayInSeconds",
                "Not": Object {
                  "And": Array [
                    Object {
                      "IsPresent": true,
                      "Variable": "$.vars.delayInSeconds",
                    },
                    Object {
                      "IsNumeric": true,
                      "Variable": "$.vars.delayInSeconds",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (typeof input.delayInSeconds !== \\"number\\")  ...",
            "Default": "If (input.delayInSeconds  ...",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (typeof input.delayInS ...",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Throw ValidationError": Object {
            "Cause": "delay in seconds must be numeric value no greater than 10 and no smaller than 1",
            "Comment": "source: throw new ValidationError(\\"delay in seconds mu ...",
            "Error": "ValidationError",
            "Type": "Fail",
          },
          "Wait": Object {
            "Comment": undefined,
            "End": true,
            "SecondsPath": "$.vars.delayInSeconds",
            "Type": "Wait",
          },
        },
      }
    `);
  });
});
