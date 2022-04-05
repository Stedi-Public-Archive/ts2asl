import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () =>{
    const createAccount = await asl.sdkOrganizationsCreateAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
    const result = asl.parallel({
        branches: [async () => {
                const describeResult = await asl.sdkOrganizationsDescribeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus.Id } });
                asl.choice({
                    name: "Switch (describeResult.Cr ...",
                    choices: [
                        {
                            block: async () => {
                                return describeResult;
                            },
                            condition: () => describeResult.CreateAccountStatus === "SUCCEEDED"
                        },
                        {
                            block: async () => {
                                asl.fail({
                                    name: "Throw AccountCreationInPr ...",
                                    error: "AccountCreationInProgress",
                                    cause: "account creation is still in progress",
                                    comment: "throw new AccountCreationInProgress(\"account creation is still in progress\");"
                                })
                            },
                            condition: () => describeResult.CreateAccountStatus === "IN_PROGRESS"
                        }
                    ],
                    default: async () => {
                        asl.fail({
                            name: "Throw AccountCreationFailed",
                            error: "AccountCreationFailed",
                            cause: "account creation is still in progress",
                            comment: "throw new AccountCreationFailed(\"account creation is still in progress\");"
                        })
                    },
                    comment: "switch (describeResult.CreateAccountStatus) {\n        case \"SUCCEEDED\": return describeResult;\n        case \"IN_PROGRESS\": throw new AccountCreationInProgress(\"account creation is still in progress\");\n        default: throw new AccountCreationFailed(\"account creation is still in progress\");\n      }"
                })
            }],
        retry: [{
                errorEquals: ["AccountCreationInProgress"],
                intervalSeconds: 2,
                maxAttempts: 10,
                backoffRate: 1,
            }]
    });
    asl.pass({
        name: "Log (result)",
        parameters: () => result,
        comment: "console.log(result)"
    });
    return result;
});


class AccountCreationInProgress extends Error { };
class AccountCreationFailed extends Error { };