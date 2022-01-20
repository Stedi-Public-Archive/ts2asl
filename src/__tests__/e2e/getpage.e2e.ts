import { Converter } from "../../convert";
import { directDeploy } from "../../deploy";
import * as AWS from "aws-sdk";

describe("when deploying check password", () => {
  it("then will be deployed", async () => {

    return;

    const c = Converter.FromFile(
      "src/__tests__/e2e/resources/getpage.ts"
    );
    const definition = c.convert();
    const arn = await directDeploy("get-page", definition);

    const stepFunctions = new AWS.StepFunctions({ region: "us-east-1" });
    const stateMachine = await stepFunctions
      .describeStateMachine({ stateMachineArn: arn })
      .promise();

    expect(stateMachine.definition).toMatchInlineSnapshot(`
      "{
        \\"StartAt\\": \\"Choice\\",
        \\"States\\": {
          \\"Choice\\": {
            \\"Type\\": \\"Choice\\",
            \\"Choices\\": [
              {
                \\"Variable\\": \\"$.password\\",
                \\"StringEquals\\": \\"password\\",
                \\"Next\\": \\"Succeed\\"
              }
            ],
            \\"Default\\": \\"Fail\\"
          },
          \\"Succeed\\": {
            \\"Type\\": \\"Succeed\\"
          },
          \\"Fail\\": {
            \\"Type\\": \\"Fail\\",
            \\"Error\\": \\"Error\\",
            \\"Cause\\": \\"invalid password\\"
          }
        }
      }"
    `);
  });
});
