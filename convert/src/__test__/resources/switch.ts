import * as asl from "@ts2asl/asl-lib"

export const simpleSwitch = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      case 1:
        result = `${result}one`;
        break;
      case 2:
        result = `${result}two`;
        break;
      default:
        result = `${result}three`;
        break;
    }
  }
  return result;
});


export const createAwsAccount = asl.deploy.asStateMachine(async () => {
  const createAccount = await asl.sdkOrganizationsCreateAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
  let creationStatus: string | undefined = undefined;
  do {
    const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus.Id } });
    creationStatus = describeResult.CreateAccountStatus.State;
    switch (creationStatus) {
      case "FAILED": throw new Error("account creation is still in progress");
      case "IN_PROGRESS": await asl.wait({ seconds: 1 });
    }
  } while (creationStatus !== "SUCCEEDED");

  console.log(createAccount.CreateAccountStatus.AccountId);
  return createAccount.CreateAccountStatus.AccountId;
});
