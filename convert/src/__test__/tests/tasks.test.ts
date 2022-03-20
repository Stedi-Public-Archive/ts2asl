import { runConvertForTest } from "../utility";
describe("when converting tasks", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("tasks");
  });
  it("then countS3buckets can be converted to asl", async () => {
    expect(converted.countS3buckets.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign count": Object {
            "Comment": undefined,
            "InputPath": "$.vars.buckets.Buckets.length()",
            "Next": "Pass",
            "ResultPath": "$.vars.count",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "ListBuckets",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "ListBuckets": Object {
            "Catch": undefined,
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Assign count",
            "Parameters": Object {},
            "Resource": "arn:aws:states:::aws-sdk:s3:listBuckets",
            "ResultPath": "$.vars.buckets",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Pass": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.count",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
