import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () => {
  const createAccount = await asl.sdkOrganizationsCreateAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
  let creationStatus: string | undefined = undefined;
  do {
    const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus.Id } });
    creationStatus = describeResult.CreateAccountStatus.State;
    switch (creationStatus) {
      case "FAILED": throw new AccountCreationFailed("account creation is still in progress");
      case "IN_PROGRESS": await asl.wait({ seconds: 1 });
    }
  } while (creationStatus !== "SUCCEEDED");

  console.log(createAccount.CreateAccountStatus.AccountId);
  return createAccount.CreateAccountStatus.AccountId;
});


class AccountCreationFailed extends Error { };