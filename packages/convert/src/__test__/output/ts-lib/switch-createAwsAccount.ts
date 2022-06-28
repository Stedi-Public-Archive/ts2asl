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
export const switchCaseFallsThrough = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      case 1:
      case 2:
        result = `${result}not-three`;
        break;
      default:
        result = `${result}three`;
        break;
    }
  }
  return result;
});
export const switchCaseNonEmptyFallThrough = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      case 1:
        result = `${result}1`;
      case 2:
        result = `${result}1or2`;
      default:
        result = `${result}1or2or3`;
    }
    result = `${result}|`
  }
  return result;
});
export const switchCaseFallsThroughToDefault = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      case 1:
        result = `${result}one`;
        break;
      case 2:
      default:
        result = `${result}not-one`;
        break;
    }
  }
  return result;
});
export const switchDefaultFallsThrough = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      default:
      case 1:
        result = `${result}not-three`;
        break;
      case 3:
        result = `${result}three`;
        break;
    }
  }
  return result;
});


export const createAwsAccount = asl.deploy.asStateMachine(async () =>{
    const createAccount = await asl.sdkOrganizationsCreateAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
    let creationStatus: string | undefined = undefined;
    asl.typescriptDoWhile({
        name: "Do While (creationStatus ...",
        condition: () => creationStatus !== "SUCCEEDED",
        block: async () => {
            const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus.Id } });
            creationStatus = describeResult.CreateAccountStatus?.State;
            asl.typescriptSwitch({
                name: "Switch (creationStatus)",
                expression: () => creationStatus,
                cases: [
                    {
                        label: "FAILED",
                        block: async () => {
                            asl.fail({
                                name: "Throw Error",
                                error: "Error",
                                cause: "account creation failed",
                                comment: "throw new Error(\"account creation failed\");"
                            })
                        }
                    },
                    {
                        label: "IN_PROGRESS",
                        block: async () => {
                            await asl.wait({ seconds: 1 });
                        }
                    }
                ],
                comment: "switch (creationStatus) {\n      case \"FAILED\": throw new Error(\"account creation failed\");\n      case \"IN_PROGRESS\": await asl.wait({ seconds: 1 });\n    }"
            })
        },
        comment: "do {\n    const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus!.Id } });\n    creationStatus = describeResult.CreateAccountStatus?.State;\n    switch (creationStatus) {\n      case \"FAILED\": throw new Error(\"account creation failed\");\n      case \"IN_PROGRESS\": await asl.wait({ seconds: 1 });\n    }\n  } while (creationStatus !== \"SUCCEEDED\");"
    })
    asl.pass({
        name: "Log (createAccount.Create ...",
        parameters: () => createAccount.CreateAccountStatus?.AccountId,
        comment: "console.log(createAccount.CreateAccountStatus?.AccountId)"
    });
    return createAccount.CreateAccountStatus?.AccountId;
});
