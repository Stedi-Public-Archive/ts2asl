import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () => {
    const createAccount = await asl.sdkOrganizationsCreateAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
    let creationStatus: string | undefined = asl.pass({
        name: "Assign creationStatus",
        parameters: () => undefined,
        comment: "creationStatus: string | undefined = undefined"
    });
    asl.typescriptDoWhile({
        name: "Do While (creationStatus ...",
        condition: () => creationStatus !== "SUCCEEDED",
        block: async () => {
            const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus.Id } });
            creationStatus = describeResult.CreateAccountStatus.State;
            asl.choice({
                name: "Switch (creationStatus)",
                choices: [
                    {
                        block: async () => {
                            asl.fail({
                                name: "Throw AccountCreationFailed",
                                error: "AccountCreationFailed",
                                cause: "account creation failed",
                                comment: "throw new AccountCreationFailed(\"account creation is still in progress\");"
                            })
                        },
                        condition: () => creationStatus === "FAILED"
                    },
                    {
                        block: async () => {
                            await asl.wait({ seconds: 1 });
                        },
                        condition: () => creationStatus === "IN_PROGRESS"
                    }
                ],
                comment: "switch (creationStatus) {\n      case \"FAILED\": throw new AccountCreationFailed(\"account creation is still in progress\");\n      case \"IN_PROGRESS\": await asl.wait({ seconds: 1 });\n    }"
            })
        }
    })
    asl.pass({
        name: "Log (createAccount.Create ...",
        parameters: () => createAccount.CreateAccountStatus.AccountId,
        comment: "console.log(createAccount.CreateAccountStatus.AccountId)"
    });
    return createAccount.CreateAccountStatus.AccountId;
});


class AccountCreationFailed extends Error { };