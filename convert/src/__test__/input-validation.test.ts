import { runConvertForTest } from "./utility";

describe("when converting example", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("input-validation");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "https://asl.stedi.com/?share=eJx1kg9r2zAQxT_LggYdoiZK17UbdCx1ks5blmaJ124DZSjxpRHYcpHk_uN9-MmO25HSgcG-d373fjp77pX1fY_EaK9Vrh8Ic688OaT314Spcg4zclXup8pvwIJiVUGerMONsi5iYCwa3tGq8ro0UWKuK48J3YWRa8SbUq-ovTlcKKvVMiewqPFmlKv7xMxpVZrMIXGTqiCrV-g7p68MH-z247IoyHi4srIr-sD1mu_5QFmuua5jn83jr05OeMdUxZJs5w3nURRhQGsVzhLY_oj_pGxPi3OLlubMUliITTfKPEpjcq6pR0rnOzwvgnzkostfH8Xh2iVtmC6V9hhaW9qwoFxnql7kto5V5QjNy8HIXTuvqJznS-JmS8NvVF6FquRXW1TuA1udqUxWy65Qef4kP_H6jS1vuaFb_ix3r_NCZMPanqj5F4YmWxyiD7FYsC4EemAC7ABvcYh3OAI7xnsZ-qcSp7UeY4BPbIgRzrDfC43PUiLBF3zFWOLbo3WECUT4OLU4_uc7b71TiJ5E8_gd4kDWCbNm0DwMSiVmtWeGH7jAJX4G_ZdEWmspfgeT6GJfSCn_Ao-uGOs
      import * as asl from \\"@cloudscript/asl-lib\\"

      export const main = asl.deploy.asStateMachine(async (input: Input) =>{
          asl.typescriptIf({
              condition: () => typeof input.delayInSeconds !== \\"number\\",
              then: async () => {
                  input.delayInSeconds = 5;
              },
              comment: \\"if (typeof input.delayInSeconds !== \\\\\\"number\\\\\\") {\\\\n    input.delayInSeconds = 5;\\\\n  }\\"
          })
          asl.typescriptIf({
              condition: () => input.delayInSeconds > 10 || input.delayInSeconds < 1,
              then: async () => {
                  asl.fail({
                      error: \\"ValidationError\\",
                      cause: \\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\\",
                      comment: \\"throw new ValidationError(\\\\\\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\\\\\\")\\"
                  })
              },
              comment: \\"if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {\\\\n    throw new ValidationError(\\\\\\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\\\\\\")\\\\n  }\\"
          })
          await asl.wait({ seconds: input.delayInSeconds });
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
            "then": Object {
              "_syntaxKind": "function",
              "statements": Array [
                Object {
                  "_syntaxKind": "asl-fail-state",
                  "cause": "delay in seconds must be numeric value no greater than 10 and no smaller than 1",
                  "error": "ValidationError",
                  "source": "throw new ValidationError(\\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\\")",
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
            "Next": "If_1",
            "Result": 5,
            "ResultPath": "$.vars.delayInSeconds",
            "Type": "Pass",
          },
          "Fail": Object {
            "Cause": "delay in seconds must be numeric value no greater than 10 and no smaller than 1",
            "Comment": "source: throw new ValidationError(\\"delay in seconds mu ...",
            "Error": "ValidationError",
            "Type": "Fail",
          },
          "If": Object {
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
            "Default": "If_1",
            "Type": "Choice",
          },
          "If_1": Object {
            "Choices": Array [
              Object {
                "Next": "Fail",
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
          "Initialize": Object {
            "Next": "If",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
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
