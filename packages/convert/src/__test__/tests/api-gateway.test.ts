import { runConvertForTest } from "../utility";
describe("when converting api-gateway", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("api-gateway");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign response": Object {
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "If (response.StatusCode = ...",
            "Parameters": Object {
              "ApiEndpoint": "aabbccddee.execute-api.us-east-1.amazonaws.com",
              "Method": "GET",
            },
            "Resource": "arn:aws:states:::apigateway:invoke",
            "ResultPath": "$.vars.response",
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "If (response.StatusCode = ...": Object {
            "Choices": Array [
              Object {
                "Next": "Return \\"ok\\"",
                "NumericEquals": 200,
                "Variable": "$.vars.response.StatusCode",
              },
            ],
            "Comment": "source: if (response.StatusCode === 200) { return \\"ok\\" }",
            "Default": "Return \\"not-ok\\"",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign response",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"not-ok\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "not-ok",
            "Type": "Pass",
          },
          "Return \\"ok\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "ok",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
