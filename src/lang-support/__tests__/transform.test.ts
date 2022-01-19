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
      "let completedActions = ASL.Pass({ Result: [] });
      let getActionsArgs = ASL.Pass({ Result: { targetState: desiredStateTemplate, completedActions } });
      let remainingActions = await ASL.Task({
          TypescriptInvoke: getNextActions,
          Input: getNextActionsArg
      });
      ASL.While({
          Condition: {
              Variable: remainingActions.length,
              Not: { NumericEquals: 0 }
          },
          WhileInvoke: () => {
              const results = await ASL.Task({
                  TypescriptInvoke: performAction,
                  Input: getActionsArgs
              });
              ASL.Choice({
                  Choices: [
                      {
                          Variable: results[0].status,
                          StringEquals: \\"failed\\",
                          NextInvoke: () => {
                              ASL.Fail({ Error: 'Error', Cause: 'task failed' })
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
                                  Input: getActionsArgs
                              });
                          }
                      }
                  ]
              });
          }
      })"
    `);
  });
  it("then can convert ASL Lib syntax", () => {
    const code = `
        let page = await ASL.Task({ Resource: "arn:aws:states:::apigateway:invoke" });
        while (page.nextPageToken) {
            await ASL.Wait({ Seconds: 2 });
            page = await ASL.Task({ Resource: "arn:aws:states:::apigateway:invoke" });
        }
            `;
    const output = testTransform(code, transformers);
    expect(output).toMatchInlineSnapshot(`
      "let page = await ASL.Task({ Resource: \\"arn:aws:states:::apigateway:invoke\\" });
      ASL.While({
          Condition: {
              Variable: page.nextPageToken,
              IsPresent: true
          },
          WhileInvoke: () => {
              await ASL.Wait({ Seconds: 2 });
              page = await ASL.Task({ Resource: \\"arn:aws:states:::apigateway:invoke\\" });
          }
      })"
    `);
  });
});
