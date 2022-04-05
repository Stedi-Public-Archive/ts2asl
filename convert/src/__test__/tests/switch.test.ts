import { runConvertForTest } from "../utility";
describe("when converting switch", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("switch");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "CreateAccount": Object {
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Parallel",
            "Parameters": Object {
              "AccountName": "test",
              "Email": "something@email.com",
            },
            "Resource": "arn:aws:states:::aws-sdk:organizations:createAccount",
            "ResultPath": "$.vars.createAccount",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Initialize": Object {
            "Next": "CreateAccount",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Parallel": Object {
            "Branches": Array [
              Object {
                "StartAt": "DescribeCreateAccountStatus",
                "States": Object {
                  "DescribeCreateAccountStatus": Object {
                    "Comment": undefined,
                    "HeartbeatSeconds": undefined,
                    "Next": "Switch (describeResult.Cr ...",
                    "Parameters": Object {
                      "CreateAccountRequestId.$": "$.vars.createAccount.CreateAccountStatus.Id",
                    },
                    "Resource": "arn:aws:states:::aws-sdk:organizations:describeCreateAccountStatus",
                    "ResultPath": "$.vars.describeResult",
                    "Retry": undefined,
                    "TimeoutSeconds": undefined,
                    "Type": "Task",
                  },
                  "Return describeResult": Object {
                    "Comment": undefined,
                    "End": true,
                    "InputPath": "$.vars.describeResult",
                    "Type": "Pass",
                  },
                  "Switch (describeResult.Cr ...": Object {
                    "Choices": Array [
                      Object {
                        "Next": "Return describeResult",
                        "StringEquals": "SUCCEEDED",
                        "Variable": "$.vars.describeResult.CreateAccountStatus",
                      },
                      Object {
                        "Next": "Throw AccountCreationInPr ...",
                        "StringEquals": "IN_PROGRESS",
                        "Variable": "$.vars.describeResult.CreateAccountStatus",
                      },
                    ],
                    "Comment": "source: switch (describeResult.CreateAccountStatus) {  ...",
                    "Default": "Throw AccountCreationFailed",
                    "Type": "Choice",
                  },
                  "Throw AccountCreationFailed": Object {
                    "Cause": "account creation is still in progress",
                    "Comment": "source: source: throw new AccountCreationFailed(\\"accou ...",
                    "Error": "AccountCreationFailed",
                    "Type": "Fail",
                  },
                  "Throw AccountCreationInPr ...": Object {
                    "Cause": "account creation is still in progress",
                    "Comment": "source: throw new AccountCreationInProgress(\\"account c ...",
                    "Error": "AccountCreationInProgress",
                    "Type": "Fail",
                  },
                },
              },
            ],
            "Catch": undefined,
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "vars": Object {
                "createAccount.$": "$.vars.createAccount",
              },
            },
            "ResultPath": "$.tmp.lastResult",
            "Retry": undefined,
            "Type": "Parallel",
          },
        },
      }
    `);
  });
});
