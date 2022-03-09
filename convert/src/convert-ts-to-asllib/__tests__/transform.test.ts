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
      "let completedActions: string[] = asl.pass({
          name: \\"3: Assign completedActions\\",
          parameters: () => [],
          comment: \\"completedActions: string[] = []\\"
      });
      let getActionsArgs = asl.pass({
          name: \\"4: Assign getActionsArgs\\",
          parameters: () => ({ targetState: desiredStateTemplate, completedActions }),
          comment: \\"getActionsArgs = { targetState: desiredStateTemplate, completedActions }\\"
      });
      let remainingActions = asl.typescriptInvoke({
          name: \\"5: getNextActions(getNextAct ...\\",
          resource: getNextActions,
          parameters: () => getNextActionsArg,
          comment: \\"getNextActions(getNextActionsArg)\\"
      });
      asl.typescriptWhile({
          name: \\"While (remainingActions.l ...\\",
          condition: () => asl.jsonPathLength(remainingActions) !== 0,
          block: async () => {
              const results = asl.typescriptInvoke({
                  name: \\"7: performAction(getActionsArgs)\\",
                  resource: performAction,
                  parameters: () => getActionsArgs,
                  comment: \\"performAction(getActionsArgs)\\"
              });
              asl.typescriptIf({
                  name: \\"7: If (results[0].status === ...\\",
                  condition: () => results[0].status === \\"failed\\",
                  then: async () => {
                      asl.fail({
                          name: \\"8: Throw Error\\",
                          error: \\"Error\\",
                          cause: \\"task failed\\",
                          comment: \\"throw new Error(\\\\\\"task failed\\\\\\")\\"
                      })
                  },
                  comment: \\"if (results[0].status === \\\\\\"failed\\\\\\") {\\\\n      throw new Error(\\\\\\"task failed\\\\\\")\\\\n    }\\"
              })
              asl.typescriptIf({
                  name: \\"10: If (results[0].status !== ...\\",
                  condition: () => results[0].status !== \\"failed\\",
                  then: async () => {
                      remainingActions = asl.typescriptInvoke({
                          name: \\"12: getNextActions(getActions ...\\",
                          resource: getNextActions,
                          parameters: () => getActionsArgs,
                          comment: \\"getNextActions(getActionsArgs)\\"
                      });
                  }
              })
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
      "let page = ASL.Task({ Resource: \\"arn:aws:states:::apigateway:invoke\\" });
      asl.typescriptWhile({
          name: \\"3: While (page.nextPageToken)\\",
          condition: () => page.nextPageToken,
          block: async () => {
              ASL.Wait({ Seconds: 2 });
              page = ASL.Task({ Resource: \\"arn:aws:states:::apigateway:invoke\\" });
          }
      })"
    `);
  });
});
