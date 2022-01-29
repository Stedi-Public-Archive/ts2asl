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
      "let completedActions = asl.pass({
          result: () => [],
          comment: \\"completedActions: string[] = []\\"
      });
      let getActionsArgs = asl.pass({
          result: () => ({ targetState: desiredStateTemplate, completedActions }),
          comment: \\"getActionsArgs = { targetState: desiredStateTemplate, completedActions }\\"
      });
      let remainingActions = asl.pass({
          result: () => await asl.typescriptInvoke({
              target: getNextActions,
              parameters: () => getNextActionsArg,
              comment: \\"getNextActions(getNextActionsArg)\\"
          }),
          comment: \\"remainingActions = await getNextActions(getNextActionsArg)\\"
      });
      asl.typescriptWhile({
          condition: () => remainingActions.length !== 0,
          block: () => {
              const results = asl.pass({
                  result: () => await asl.typescriptInvoke({
                      target: performAction,
                      parameters: () => getActionsArgs,
                      comment: \\"performAction(getActionsArgs)\\"
                  }),
                  comment: \\"results = await performAction(getActionsArgs)\\"
              });
              asl.typescriptIf({
                  when: () => results[0].status === \\"failed\\",
                  then: () => {
                      asl.fail({
                          error: \\"Error\\",
                          cause: \\"task failed\\",
                          comment: \\"throw new Error(\\\\\\"task failed\\\\\\")\\"
                      })
                  },
                  comment: \\"if (results[0].status === \\\\\\"failed\\\\\\") {\\\\n      throw new Error(\\\\\\"task failed\\\\\\")\\\\n    }\\"
              })
              asl.typescriptIf({
                  when: () => results[0].status !== \\"failed\\",
                  then: () => {
                      remainingActions = await asl.typescriptInvoke({
                          target: getNextActions,
                          parameters: () => getActionsArgs,
                          comment: \\"getNextActions(getActionsArgs)\\"
                      });
                  },
                  comment: \\"if (results[0].status !== \\\\\\"failed\\\\\\") {\\\\n      remainingActions = await getNextActions(getActionsArgs);\\\\n    }\\"
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
      "let page = asl.pass({
          result: () => await ASL.Task({ Resource: \\"arn:aws:states:::apigateway:invoke\\" }),
          comment: \\"page = await ASL.Task({ Resource: \\\\\\"arn:aws:states:::apigateway:invoke\\\\\\" })\\"
      });
      asl.typescriptWhile({
          condition: () => page.nextPageToken,
          block: () => {
              await ASL.Wait({ Seconds: 2 });
              page = await ASL.Task({ Resource: \\"arn:aws:states:::apigateway:invoke\\" });
          },
          comment: \\"while (page.nextPageToken) {\\\\n            await ASL.Wait({ Seconds: 2 });\\\\n            page = await ASL.Task({ Resource: \\\\\\"arn:aws:states:::apigateway:invoke\\\\\\" });\\\\n        }\\"
      })"
    `);
  });
});
