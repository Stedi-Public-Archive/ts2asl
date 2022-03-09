import { CreateAccountCommand, CreateAccountStatus, DescribeCreateAccountStatusCommand, DescribeOrganizationCommand, DescribeOrganizationResponse, ListOrganizationalUnitsForParentCommand, ListRootsCommand, MoveAccountCommand, OrganizationsClient, PolicyInUseException } from "@aws-sdk/client-organizations";
import * as asl from "@ts2asl/asl-lib"
import { StateMachineContext } from "@ts2asl/asl-lib";

export const main = asl.deploy.asStateMachine(async (input: Input, context?: StateMachineContext<Input>) =>{
    asl.typescriptIf({
        name: "6: If (typeof input.numberOf ...",
        condition: () => typeof input.numberOfNewAccount !== "number",
        then: async () => {
            input.numberOfNewAccount = 20;
        },
        comment: "if (typeof input.numberOfNewAccount !== \"number\") {\n    input.numberOfNewAccount = 20;\n  }"
    })
    asl.typescriptIf({
        name: "10: If (typeof input.emailAcc ...",
        condition: () => typeof input.emailAccountPrefix !== "string",
        then: async () => {
            input.emailAccountPrefix = "aws+stedi-customer-account";
        },
        comment: "if (typeof input.emailAccountPrefix !== \"string\") {\n    input.emailAccountPrefix = \"aws+stedi-customer-account\";\n  }"
    })
    asl.typescriptIf({
        name: "14: If (typeof input.organiza ...",
        condition: () => typeof input.organizationalUnitName !== "string",
        then: async () => {
            input.organizationalUnitName = "customer-accounts";
        },
        comment: "if (typeof input.organizationalUnitName !== \"string\") {\n    input.organizationalUnitName = \"customer-accounts\";\n  }"
    })
    const customerOUIds = asl.typescriptInvoke({
        name: "20: retrieveAccountCreationId ...",
        resource: retrieveAccountCreationIds,
        parameters: () => ({ organizationalUnitName: input.organizationalUnitName }),
        comment: "retrieveAccountCreationIds({ organizationalUnitName: input.organizationalUnitName })"
    });
    const newAccounts = asl.typescriptInvoke({
        name: "22: createListOfAccountsToBeC ...",
        resource: createListOfAccountsToBeCreated,
        parameters: () => ({ prefix: input.emailAccountPrefix, currentNumberOfAccounts: customerOUIds.currentNumberOfAccounts, numberOfAccounts: input.numberOfNewAccount }),
        comment: "createListOfAccountsToBeCreated({ prefix: input.emailAccountPrefix, currentNumberOfAccounts: customerOUIds.currentNumberOfAccounts, numberOfAccounts: input.numberOfNewAccount })"
    });
    const accounts = asl.map({
        name: "23: For x Of newAccounts.map",
        items: () => newAccounts,
        iterator: x => {
            const accountCreationResult = asl.nativeOrganizationsCreateAccount({ parameters: { Email: x.rootEmail, AccountName: x.name } });
            const createdAccount = asl.pass({
                name: "25: Assign createdAccount",
                parameters: () => accountCreationResult.CreateAccountStatus,
                comment: "createdAccount = accountCreationResult.CreateAccountStatus"
            });
            asl.typescriptIf({
                name: "25: If (!createdAccount)",
                condition: () => !createdAccount,
                then: async () => { asl.fail({
                    name: "26: Throw UnexpectedError",
                    error: "UnexpectedError",
                    comment: "throw new UnexpectedError();"
                }) },
                comment: "if (!createdAccount) throw new UnexpectedError();"
            })
            const result = asl.typescriptInvoke({
                retry: [{
                        errorFilter: ["RetryError"],
                        backoffRate: 1.5,
                        intervalSeconds: 2,
                        maxAttempts: 50
                    }],
                resource: checkAccountCreationDone,
                parameters: createdAccount,
            });
            asl.typescriptInvoke({
                name: "38: moveAccount({ sourceParen ...",
                resource: moveAccount,
                parameters: () => ({ sourceParentId: customerOUIds.rootId, destinationParentId: customerOUIds.customerAccountsOU, accountId: result.AccountId })
            });
            return result;
        }
    });
    return {
        accountIds: accounts
    };
});

const moveAccount = asl.deploy.asLambda(async (input: { sourceParentId: string, destinationParentId: string, accountId: string }) => {
  const { sourceParentId, destinationParentId, accountId } = input;
  const client = new OrganizationsClient({ region: "us-east-1" });

  const command = new MoveAccountCommand({
    SourceParentId: sourceParentId,
    DestinationParentId: destinationParentId,
    AccountId: accountId,
  });

  return client.send(command);
});

const retrieveAccountCreationIds = asl.deploy.asLambda(async (input: { organizationalUnitName: string }) => {
  const client = new OrganizationsClient({ region: "us-east-1" });
  const { organizationalUnitName } = input;

  const root = await client.send(new ListRootsCommand({}));
  if (!root.Roots) throw new UnexpectedError();
  if (root.Roots.length < 1) throw new UnexpectedError();

  const rootId = root.Roots[0].Id;
  if (!rootId) throw new UnexpectedError();

  const rootLevelOUs = await client.send(new ListOrganizationalUnitsForParentCommand({ ParentId: rootId }));
  const ou = (rootLevelOUs.OrganizationalUnits || []).find(x => x.Name === organizationalUnitName);
  if (!ou?.Id) throw new UnexpectedError();

  return {
    rootId,
    customerAccountsOU: ou.Id,
    currentNumberOfAccounts: 5
  } as CustomerOrganizationalUnitIds;
});

const checkAccountCreationDone = asl.deploy.asLambda(async (input: CreateAccountStatus | undefined) => {
  const client = new OrganizationsClient({ region: "us-east-1" });

  const command = new DescribeCreateAccountStatusCommand({
    CreateAccountRequestId: input!.Id
  });

  let accountStatus = await client.send(command);

  if (accountStatus.CreateAccountStatus?.State === "IN_PROGRESS") {
    throw new RetryError();
  }
  if (accountStatus.CreateAccountStatus?.State === "FAILED") {
    throw new FailedError();
  }
  return accountStatus.CreateAccountStatus!;
});

const createAccount = asl.deploy.asLambda(async (input: NewAccountInput) => {
  const client = new OrganizationsClient({ region: "us-east-1" });

  const command = new CreateAccountCommand({
    Email: input.rootEmail,
    AccountName: input.name,
  });

  let accountStatus = await client.send(command);

  return accountStatus.CreateAccountStatus!;
});

const createListOfAccountsToBeCreated = asl.deploy.asLambda((input: { prefix: string, currentNumberOfAccounts: number, numberOfAccounts: number }): NewAccountInput[] => {
  let { prefix, currentNumberOfAccounts } = input;
  const results: NewAccountInput[] = [];
  for (let i = 0; i < input.numberOfAccounts; i++) {
    results.push({
      rootEmail: `${prefix}-${currentNumberOfAccounts + i}@stedi.com`,
      name: `account ${currentNumberOfAccounts + i}`,
    });
  }
  return results;
});

interface NewAccountInput {
  rootEmail: string;
  name: string;
}


interface Input {
  numberOfNewAccount?: number;
  emailAccountPrefix?: string;
  organizationalUnitName?: string;
}

interface Output {
  accountIds: CreateAccountStatus[]
}

interface CustomerOrganizationalUnitIds {
  rootId: string;
  customerAccountsOU: string;
  currentNumberOfAccounts: number;
}

class UnexpectedError extends Error {
  public readonly name = "UnexpectedError";
}

class FailedError extends Error {
  public readonly name = "FailedError";
}

class RetryError extends Error {
  public readonly name = "RetryError";
}