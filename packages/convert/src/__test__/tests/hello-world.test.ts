import { runConvertForTest } from "../utility";
describe("when converting hello-world", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("hello-world");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign input.name": Object {
            "Comment": undefined,
            "Next": "Assign rnd",
            "Result": "World",
            "ResultPath": "$.vars.name",
            "Type": "Pass",
          },
          "Assign rnd": Object {
            "Comment": "source: random()",
            "HeartbeatSeconds": undefined,
            "Next": "Return { greeting: \`H ...",
            "Resource": "[!lambda[random]arn]",
            "ResultPath": "$.vars.rnd",
            "Retry": Array [
              Object {
                "BackoffRate": 2,
                "ErrorEquals": Array [
                  "Lambda.ServiceException",
                  "Lambda.AWSLambdaException",
                  "Lambda.SdkClientException",
                ],
                "IntervalSeconds": 2,
                "MaxAttempts": 6,
              },
            ],
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "If (typeof input.name !== ...": Object {
            "Choices": Array [
              Object {
                "Next": "Assign input.name",
                "Not": Object {
                  "And": Array [
                    Object {
                      "IsPresent": true,
                      "Variable": "$.vars.name",
                    },
                    Object {
                      "IsString": true,
                      "Variable": "$.vars.name",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (typeof input.name !== \\"string\\") { input.na ...",
            "Default": "Assign rnd",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (typeof input.name !== ...",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return { greeting: \`H ...": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "greeting.$": "States.Format('Hello {}', $.vars.name)",
              "luckyNumber.$": "$.vars.rnd",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
