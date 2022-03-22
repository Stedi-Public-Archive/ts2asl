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
            "Next": "random()",
            "Result": "World",
            "ResultPath": "$.vars.name",
            "Type": "Pass",
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
            "Default": "random()",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (typeof input.name !== ...",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "greeting.$": "States.Format('Hello {}', $.vars.name)",
              "luckyNumber.$": "$.vars.rnd",
            },
            "Type": "Pass",
          },
          "random()": Object {
            "Comment": "source: random()",
            "HeartbeatSeconds": undefined,
            "Next": "Pass",
            "Resource": "lambda:random",
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
        },
      }
    `);
  });
});
