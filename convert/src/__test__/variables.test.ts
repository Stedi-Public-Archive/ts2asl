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
      import { DateTime } from \\"aws-sdk/clients/devicefarm\\";

      export const main = asl.deploy.asStateMachine(async (input: IInput, context: StateMachineContext<IInput>) =>{
          const x = asl.pass({
              parameters: () => ({
                  name: input.name,
                  execution: context.execution.id
              }),
              comment: \\"x = {\\\\n    name: input.name,\\\\n    execution: context.execution.id\\\\n  }\\"
          });
          asl.typescriptInvoke({
              target: consoleLog,
              parameters: () => x,
              comment: \\"consoleLog(x)\\"
          });
      });


      interface IInput {
        name: string;
        totalDue: number;
        orders: [{ orderId: string, date: DateTime }];
      }

      function consoleLog(x: { name: string; execution: string; }) {
        throw new Error(\\"Function not implemented.\\");
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
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal-object",
                "properties": Object {
                  "execution": Object {
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
          execution: context.execution.id
        }",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "x",
              "type": "object",
            },
          },
          Object {
            "_syntaxKind": "asl-task-state",
            "parameters": Object {
              "_syntaxKind": "identifier",
              "identifier": "x",
              "type": "object",
            },
            "resource": "arn:aws:lambda:us-east-1:123123123123:function:my-program-consoleLog",
            "source": "consoleLog(x)",
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
          "Assign X": Object {
            "Comment": "source: x = { name: input.name, execution: context.exe ...",
            "Next": "Task",
            "Parameters": Object {
              "execution.$": "$$.Execution.Id",
              "name.$": "$.vars.name",
            },
            "ResultPath": "$.vars.x",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign X",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Task": Object {
            "Catch": undefined,
            "Comment": "source: consoleLog(x)",
            "End": true,
            "HeartbeatSeconds": undefined,
            "InputPath": "$.vars.x",
            "Resource": "arn:aws:lambda:us-east-1:123123123123:function:my-program-consoleLog",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
        },
      }
    `);
  });
});
