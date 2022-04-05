import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () => {
  const createAccount = await asl.sdkOrganizationsCreateAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
  const result = asl.parallel({
    branches: [async () => {
      const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus.Id } });
      switch (describeResult.CreateAccountStatus) {
        case "SUCCEEDED": return describeResult;
        case "IN_PROGRESS": throw new AccountCreationInProgress("account creation is still in progress");
        default: throw new AccountCreationFailed("account creation is still in progress");
      }
    }],
    retry: [{
      errorEquals: ["AccountCreationInProgress"],
      intervalSeconds: 2,
      maxAttempts: 10,
      backoffRate: 1,
    }]
  });

  console.log(result);
  return result;
});


class AccountCreationInProgress extends Error { };
class AccountCreationFailed extends Error { };