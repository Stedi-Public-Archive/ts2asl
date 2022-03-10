import { CreateAccountCommand, CreateAccountStatus, DescribeCreateAccountStatusCommand, DescribeOrganizationCommand, DescribeOrganizationResponse, ListOrganizationalUnitsForParentCommand, ListRootsCommand, MoveAccountCommand, OrganizationsClient, PolicyInUseException } from "@aws-sdk/client-organizations";
import * as asl from "@ts2asl/asl-lib"
import { StateMachineContext } from "@ts2asl/asl-lib";

export const main = asl.deploy.asStateMachine(async (input: Input, context?: StateMachineContext<Input>) => {
  console.log("sdfsd")
  if (typeof input.numberOfNewAccount !== "number") {
    input.numberOfNewAccount = 20;
  }

  if (typeof input.emailAccountPrefix !== "string") {
    input.emailAccountPrefix = "aws+stedi-customer-account";
  }

  if (typeof input.organizationalUnitName !== "string") {
    input.organizationalUnitName = "customer-accounts";
  }

  const customerOUIds = await retrieveAccountCreationIds({ organizationalUnitName: input.organizationalUnitName })

  const newAccounts = createListOfAccountsToBeCreated({ prefix: input.emailAccountPrefix, currentNumberOfAccounts: customerOUIds.currentNumberOfAccounts, numberOfAccounts: input.numberOfNewAccount });
  const accounts = await Promise.all(newAccounts.map(async (x) => {
    const accountCreationResult = await asl.nativeOrganizationsCreateAccount({ parameters: { Email: x.rootEmail, AccountName: x.name } })
    const createdAccount = accountCreationResult.CreateAccountStatus;
    if (!createdAccount) throw new UnexpectedError();

    const result = await asl.typescriptInvoke({
      retry: [{
        errorFilter: ["RetryError"],
        backoffRate: 1.5,
        intervalSeconds: 2,
        maxAttempts: 50
      }],
      resource: checkAccountCreationDone,
      parameters: createdAccount,
    });
    await moveAccount({ sourceParentId: customerOUIds.rootId, destinationParentId: customerOUIds.customerAccountsOU, accountId: result.AccountId as string })
    return result;
  }));

  return {
    accountIds: accounts
  } as Output
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