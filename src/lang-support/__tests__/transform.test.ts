import { testTransform } from "./test-transform";
import { transformers } from "../transformers";

describe("when converting source files", () => {
  it("then can convert nested structures", () => {
    const code = `
let completedActions: string[] = [];
let getActionsArgs = { targetState: desiredStateTemplate, completedActions };
let remainingActions = await getNextActions(getNextActionsArg);
while (remainingActions.length !== 0) {
  const results = await performAction(getActionsArgs);
  if (results[0].status === "failed") {
    throw new Error("task failed")
  }
  if (results[0].status !== "failed") {
    remainingActions = await getNextActions(getActionsArgs);
  }
}
    `;
    const output = testTransform(code, transformers);

    expect(output).toMatchInlineSnapshot(`
      "let completedActions: string[] = ASL.Pass({ Result: [] });
      let getActionsArgs = ASL.Pass({ Result: { targetState: desiredStateTemplate, completedActions } });
      let remainingActions = await ASL.Task({
          TypescriptInvoke: getNextActions,
          InputPath: getNextActionsArg
      });
      while (remainingActions.length !== 0) {
          const results = await ASL.Task({
              TypescriptInvoke: performAction,
              InputPath: getActionsArgs
          });
          ASL.Choice({
              Choices: [
                  {
                      Variable: results[0].status,
                      StringEquals: \\"failed\\",
                      NextInvoke: () => {
                          ASL.Failed({ Error: 'Error', Cause: 'task failed' })
                      }
                  }
              ]
          });
          ASL.Choice({
              Choices: [
                  {
                      Variable: results[0].status,
                      Not: { StringEquals: \\"failed\\" },
                      NextInvoke: () => {
                          remainingActions = await ASL.Task({
                              TypescriptInvoke: getNextActions,
                              InputPath: getActionsArgs
                          });
                      }
                  }
              ]
          });
      }"
    `);
  });
});
