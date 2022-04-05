import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () => {
  const createAccount = await asl.sdkOrganizationsCreateAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
  asl.parallel({
    branches: [async () => {
      const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus.Id } });
      switch (describeResult.CreateAccountStatus) {
        case "SUCCEEDED": return describeResult;
        case "IN_PROGRESS": throw new AccountCreationInProgress("account creation is still in progress");
        default: throw new AccountCreationFailed("account creation is still in progress");
      }
    }],
  });
});


class AccountCreationInProgress extends Error { };
class AccountCreationFailed extends Error { };