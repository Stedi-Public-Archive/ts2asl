import { Converter } from "../../convert";
import { directDeploy } from "../../deploy";
import * as AWS from "aws-sdk";

describe("when deploying hello world", () => {
  it("then will be deployed", async () => {
    const c = Converter.FromFile("src/__tests__/e2e/resources/helloworld.ts");
    const definition = c.convert();
    const arn = await directDeploy("hello-world", definition);

    const stepFunctions = new AWS.StepFunctions({ region: "us-east-1" });
    const stateMachine = await stepFunctions
      .describeStateMachine({ stateMachineArn: arn })
      .promise();

    expect(stateMachine.definition).toMatchInlineSnapshot(`
      "{
        \\"StartAt\\": \\"Assign_message\\",
        \\"States\\": {
          \\"Assign_message\\": {
            \\"Type\\": \\"Pass\\",
            \\"Result\\": \\"hello world\\",
            \\"ResultPath\\": \\"$.message\\",
            \\"Next\\": \\"Succeed\\"
          },
          \\"Succeed\\": {
            \\"Type\\": \\"Succeed\\"
          }
        }
      }"
    `);
  });
});
