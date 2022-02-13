import { runConvertForTest } from "./utility";

describe("when converting example", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("input-validation");
  });

  it("then can be converted to asllib", async () => {
    expect(converted.transformedCode).toMatchInlineSnapshot(`
      "//source: https://github.com/aws-samples/aws-stepfunctions-examples/blob/main/sam/app-decompose-for-parallelism/statemachine/runner-simplewait.asl.json
      import * as asl from \\"@cloudscript/asl-lib\\"

      export const main = asl.deploy.asStateMachine(async (context: Input) =>{
          asl.typescriptIf({
              condition: () => typeof context.testInput.delayInSeconds !== \\"number\\",
              then: async () => {
                  context.testInput.delayInSeconds = 5;
              },
              comment: \\"if (typeof context.testInput.delayInSeconds !== \\\\\\"number\\\\\\") {\\\\n    context.testInput.delayInSeconds = 5;\\\\n  }\\"
          })
          await asl.wait({ seconds: context.testInput.delayInSeconds });
      });

      interface Input {
        testInput: {
          delayInSeconds: number | undefined;
        } 
      }"
    `);
  });
  it("then can be converted to iasl", async () => {
    expect(converted.iasl).toMatchInlineSnapshot(`
      Array [
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
                  "identifier": "context.testInput.delayInSeconds",
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
          "source": "if (typeof context.testInput.delayInSeconds !== \\"number\\") {
          context.testInput.delayInSeconds = 5;
        }",
          "then": Object {
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
                  "identifier": "context.testInput.delayInSeconds",
                  "type": "numeric",
                },
              },
            ],
          },
        },
        Object {
          "_syntaxKind": "asl-wait-state",
          "seconds": Object {
            "_syntaxKind": "identifier",
            "identifier": "context.testInput.delayInSeconds",
            "type": "numeric",
          },
        },
      ]
    `);
  });
  it("then can be converted to asl", async () => {
    expect(converted.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "If",
        "States": Object {
          "Assign context.testInput.delayInSeconds": Object {
            "Comment": undefined,
            "Next": "Wait",
            "Result": 5,
            "ResultPath": "$.context.testInput.delayInSeconds",
            "Type": "Pass",
          },
          "If": Object {
            "Choices": Array [
              Object {
                "IsNumeric": false,
                "Next": "Assign context.testInput.delayInSeconds",
                "Variable": "$.context.testInput.delayInSeconds",
              },
            ],
            "Comment": "if (typeof context.testInput.delayInSeconds !== \\"number\\") {
          context.testInput.delayInSeconds = 5;
        }",
            "Default": "Wait",
            "Type": "Choice",
          },
          "Wait": Object {
            "Comment": undefined,
            "End": true,
            "SecondsPath": "context.testInput.delayInSeconds",
            "Type": "Wait",
          },
        },
      }
    `);
  });
});
