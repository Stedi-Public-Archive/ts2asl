import { testTranspile } from "./test-transpile";

describe("when transpiling mixed statements", () => {
  it("then everything ends up in the right order", () => {
    const code = `
    let getActionsArgs = ASL.Pass({ Result: { targetState: 'ddd', completedActions: "" } });
    let remainingActions = await ASL.Task({
        Resource: "typescript:getNextActions",
        InputPath: "$.getNextActionsArg"
    });
    
    let results = await ASL.Task({
        Resource: "typescript:performAction",
        InputPath: "$.getActionsArgs"
    });
    ASL.Choice({
        Choices: [
            {
                Variable: "$.results[0].status",
                StringEquals: "failed",
                NextInvoke: () => {
                    ASL.Failed({ Error: 'Error', Cause: 'task failed' })
                }
            }
        ]
    });
    `;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Assign_getActionsArgs",
        "States": Object {
          "Assign_getActionsArgs": Object {
            "Result": Object {
              "completedActions": "",
              "targetState": "ddd",
            },
            "ResultPath": "$.getActionsArgs",
            "Type": "Pass",
          },
          "Assign_remainingActions": Object {
            "InputPath": "$.getNextActionsArg",
            "Resource": "typescript:getNextActions",
            "ResultPath": "$.remainingActions",
            "Type": "Task",
          },
          "Assign_results": Object {
            "InputPath": "$.getActionsArgs",
            "Resource": "typescript:performAction",
            "ResultPath": "$.results",
            "Type": "Task",
          },
          "Choice": Object {
            "Choices": Array [
              Object {
                "Next": "Failed",
                "StringEquals": "failed",
                "Variable": "$.results[0].status",
              },
            ],
            "Type": "Choice",
          },
          "Failed": Object {
            "Cause": "task failed",
            "Error": "Error",
            "Type": "Failed",
          },
        },
      }
    `);
  });
});
