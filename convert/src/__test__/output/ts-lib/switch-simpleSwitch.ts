import * as asl from "@ts2asl/asl-lib"

export const simpleSwitch = asl.deploy.asStateMachine(async () =>{
    const arr = asl.pass({
        name: "Assign arr",
        parameters: () => [1, 2, 3],
        comment: "arr = [1, 2, 3]"
    });
    let result = asl.pass({
        name: "Assign result",
        parameters: () => "",
        comment: "result = \"\""
    });
    asl.typescriptForeach({
        name: "For item Of arr",
        items: () => arr,
        iterator: item => {
            asl.choice({
                name: "Switch (item)",
                choices: [
                    {
                        block: async () => {
                            result = asl.states.format("{}one", result);
                        },
                        condition: () => item === 1
                    },
                    {
                        block: async () => {
                            result = asl.states.format("{}two", result);
                        },
                        condition: () => item === 2
                    }
                ],
                default: async () => {
                    result = asl.states.format("{}three", result);
                },
                comment: "switch (item) {\n      case 1:\n        result = `${result}one`;\n        break;\n      case 2:\n        result = `${result}two`;\n        break;\n      default:\n        result = `${result}three`;\n        break;\n    }"
            })
        }
    })
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
