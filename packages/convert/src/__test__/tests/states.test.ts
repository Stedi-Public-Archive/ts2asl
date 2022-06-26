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
            "Comment": undefined,
            "End": true,
            "HeartbeatSeconds": undefined,
            "Parameters": Object {
              "FunctionName": "sendApprovalEmail",
              "Payload": Object {
                "request.$": "$.vars",
                "taskToken.$": "$$.Task.Token",
              },
            },
            "Resource": "arn:aws:states:::lambda:invoke.waitForTaskToken",
            "ResultPath": "$.vars.result",
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Initialize": Object {
            "Next": "Assign result",
            "Parameters": Object {
              "_null": null,
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
