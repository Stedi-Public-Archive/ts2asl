import { runConvertForTest } from "../utility";
describe("when converting states", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("states");
  });
  it("then waitForTaskToken can be converted to asl", async () => {
    expect(converted.waitForTaskToken.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": "source: result: { action: \\"approve\\" | \\"reject\\" } = awa ...",
            "End": true,
            "InputPath": "$.tmp.result",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Human Approval": Object {
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Assign result",
            "Parameters": Object {
              "FunctionName": "sendApprovalEmail",
              "Payload": Object {
                "request.$": "$.vars",
                "taskToken.$": "$$.Task.Token",
              },
            },
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "ResultPath": "$.tmp.result",
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Initialize": Object {
            "Next": "Human Approval",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
