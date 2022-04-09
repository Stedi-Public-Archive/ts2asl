import { runConvertForTest } from "../utility";
describe("when converting switch", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("switch");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.29.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign creationStatus": Object {
            "Comment": "source: creationStatus: string | undefined = undefined",
            "Next": "Do While Condition",
            "Result": null,
            "ResultPath": "$.vars.creationStatus",
            "Type": "Pass",
          },
          "Assign creationStatus_1": Object {
            "Comment": undefined,
            "InputPath": "$.vars.describeResult.CreateAccountStatus.State",
            "Next": "Switch (creationStatus)",
            "ResultPath": "$.vars.creationStatus",
            "Type": "Pass",
          },
          "CreateAccount": Object {
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Assign creationStatus",
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
          "DescribeCreateAccountStatus": Object {
            "Comment": undefined,
            "HeartbeatSeconds": undefined,
            "Next": "Assign creationStatus_1",
            "Parameters": Object {
              "CreateAccountRequestId.$": "$.vars.createAccount.CreateAccountStatus.Id",
            },
            "Resource": "arn:aws:states:::aws-sdk:organizations:describeCreateAccountStatus",
            "ResultPath": "$.vars.describeResult",
            "Retry": undefined,
            "TimeoutSeconds": undefined,
            "Type": "Task",
          },
          "Do While Condition": Object {
            "Choices": Array [
              Object {
                "Next": "DescribeCreateAccountStatus",
                "Not": Object {
                  "StringEquals": "SUCCEEDED",
                  "Variable": "$.vars.creationStatus",
                },
              },
            ],
            "Default": "Log (createAccount.Create ...",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "CreateAccount",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Log (createAccount.Create ...": Object {
            "Comment": "source: console.log(createAccount.CreateAccountStatus. ...",
            "InputPath": "$.vars.createAccount.CreateAccountStatus.AccountId",
            "Next": "Return createAccount.Crea ...",
            "ResultPath": null,
            "Type": "Pass",
          },
          "Return createAccount.Crea ...": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.createAccount.CreateAccountStatus.AccountId",
            "Type": "Pass",
          },
          "Switch (creationStatus)": Object {
            "Choices": Array [
              Object {
                "Next": "Throw AccountCreationFailed",
                "StringEquals": "FAILED",
                "Variable": "$.vars.creationStatus",
              },
              Object {
                "Next": "Wait",
                "StringEquals": "IN_PROGRESS",
                "Variable": "$.vars.creationStatus",
              },
            ],
            "Comment": "source: switch (creationStatus) { case \\"FAILED\\": throw ...",
            "Default": "Do While Condition",
            "Type": "Choice",
          },
          "Throw AccountCreationFailed": Object {
            "Cause": "account creation is still in progress",
            "Comment": "source: throw new AccountCreationFailed(\\"account creat ...",
            "Error": "AccountCreationFailed",
            "Type": "Fail",
          },
          "Wait": Object {
            "Comment": undefined,
            "Next": "Do While Condition",
            "Seconds": 1,
            "Type": "Wait",
          },
        },
      }
    `);
  });
});
