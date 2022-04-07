import { runConvertForTest } from "../utility";
describe("when converting tasks", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("tasks");
  });
  it("then countS3buckets can be converted to asl", async () => {
    expect(converted.countS3buckets.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign count": Object {
            "Comment": undefined,
            "InputPath": "$.vars.buckets.Buckets.length()",
            "Next": "Return count",
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
          "Return count": Object {
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
