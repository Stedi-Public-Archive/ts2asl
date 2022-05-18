import { OrganizationsClient } from "@aws-sdk/client-organizations";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { AcceptHandshakeCommandInput, AcceptHandshakeCommandOutput, AcceptHandshakeCommand } from "@aws-sdk/client-organizations";
import { AttachPolicyCommandInput, AttachPolicyCommandOutput, AttachPolicyCommand } from "@aws-sdk/client-organizations";
import { CancelHandshakeCommandInput, CancelHandshakeCommandOutput, CancelHandshakeCommand } from "@aws-sdk/client-organizations";
import { CreateAccountCommandInput, CreateAccountCommandOutput, CreateAccountCommand } from "@aws-sdk/client-organizations";
import { CreateGovCloudAccountCommandInput, CreateGovCloudAccountCommandOutput, CreateGovCloudAccountCommand } from "@aws-sdk/client-organizations";
import { CreateOrganizationCommandInput, CreateOrganizationCommandOutput, CreateOrganizationCommand } from "@aws-sdk/client-organizations";
import { CreateOrganizationalUnitCommandInput, CreateOrganizationalUnitCommandOutput, CreateOrganizationalUnitCommand } from "@aws-sdk/client-organizations";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput, CreatePolicyCommand } from "@aws-sdk/client-organizations";
import { DeclineHandshakeCommandInput, DeclineHandshakeCommandOutput, DeclineHandshakeCommand } from "@aws-sdk/client-organizations";
import { DeleteOrganizationCommandInput, DeleteOrganizationCommandOutput, DeleteOrganizationCommand } from "@aws-sdk/client-organizations";
import { DeleteOrganizationalUnitCommandInput, DeleteOrganizationalUnitCommandOutput, DeleteOrganizationalUnitCommand } from "@aws-sdk/client-organizations";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput, DeletePolicyCommand } from "@aws-sdk/client-organizations";
import { DeregisterDelegatedAdministratorCommandInput, DeregisterDelegatedAdministratorCommandOutput, DeregisterDelegatedAdministratorCommand } from "@aws-sdk/client-organizations";
import { DescribeAccountCommandInput, DescribeAccountCommandOutput, DescribeAccountCommand } from "@aws-sdk/client-organizations";
import { DescribeCreateAccountStatusCommandInput, DescribeCreateAccountStatusCommandOutput, DescribeCreateAccountStatusCommand } from "@aws-sdk/client-organizations";
import { DescribeEffectivePolicyCommandInput, DescribeEffectivePolicyCommandOutput, DescribeEffectivePolicyCommand } from "@aws-sdk/client-organizations";
import { DescribeHandshakeCommandInput, DescribeHandshakeCommandOutput, DescribeHandshakeCommand } from "@aws-sdk/client-organizations";
import { DescribeOrganizationCommandInput, DescribeOrganizationCommandOutput, DescribeOrganizationCommand } from "@aws-sdk/client-organizations";
import { DescribeOrganizationalUnitCommandInput, DescribeOrganizationalUnitCommandOutput, DescribeOrganizationalUnitCommand } from "@aws-sdk/client-organizations";
import { DescribePolicyCommandInput, DescribePolicyCommandOutput, DescribePolicyCommand } from "@aws-sdk/client-organizations";
import { DetachPolicyCommandInput, DetachPolicyCommandOutput, DetachPolicyCommand } from "@aws-sdk/client-organizations";
import { DisableAWSServiceAccessCommandInput, DisableAWSServiceAccessCommandOutput, DisableAWSServiceAccessCommand } from "@aws-sdk/client-organizations";
import { DisablePolicyTypeCommandInput, DisablePolicyTypeCommandOutput, DisablePolicyTypeCommand } from "@aws-sdk/client-organizations";
import { EnableAWSServiceAccessCommandInput, EnableAWSServiceAccessCommandOutput, EnableAWSServiceAccessCommand } from "@aws-sdk/client-organizations";
import { EnableAllFeaturesCommandInput, EnableAllFeaturesCommandOutput, EnableAllFeaturesCommand } from "@aws-sdk/client-organizations";
import { EnablePolicyTypeCommandInput, EnablePolicyTypeCommandOutput, EnablePolicyTypeCommand } from "@aws-sdk/client-organizations";
import { InviteAccountToOrganizationCommandInput, InviteAccountToOrganizationCommandOutput, InviteAccountToOrganizationCommand } from "@aws-sdk/client-organizations";
import { LeaveOrganizationCommandInput, LeaveOrganizationCommandOutput, LeaveOrganizationCommand } from "@aws-sdk/client-organizations";
import { ListAWSServiceAccessForOrganizationCommandInput, ListAWSServiceAccessForOrganizationCommandOutput, ListAWSServiceAccessForOrganizationCommand } from "@aws-sdk/client-organizations";
import { ListAccountsCommandInput, ListAccountsCommandOutput, ListAccountsCommand } from "@aws-sdk/client-organizations";
import { ListAccountsForParentCommandInput, ListAccountsForParentCommandOutput, ListAccountsForParentCommand } from "@aws-sdk/client-organizations";
import { ListChildrenCommandInput, ListChildrenCommandOutput, ListChildrenCommand } from "@aws-sdk/client-organizations";
import { ListCreateAccountStatusCommandInput, ListCreateAccountStatusCommandOutput, ListCreateAccountStatusCommand } from "@aws-sdk/client-organizations";
import { ListDelegatedAdministratorsCommandInput, ListDelegatedAdministratorsCommandOutput, ListDelegatedAdministratorsCommand } from "@aws-sdk/client-organizations";
import { ListDelegatedServicesForAccountCommandInput, ListDelegatedServicesForAccountCommandOutput, ListDelegatedServicesForAccountCommand } from "@aws-sdk/client-organizations";
import { ListHandshakesForAccountCommandInput, ListHandshakesForAccountCommandOutput, ListHandshakesForAccountCommand } from "@aws-sdk/client-organizations";
import { ListHandshakesForOrganizationCommandInput, ListHandshakesForOrganizationCommandOutput, ListHandshakesForOrganizationCommand } from "@aws-sdk/client-organizations";
import { ListOrganizationalUnitsForParentCommandInput, ListOrganizationalUnitsForParentCommandOutput, ListOrganizationalUnitsForParentCommand } from "@aws-sdk/client-organizations";
import { ListParentsCommandInput, ListParentsCommandOutput, ListParentsCommand } from "@aws-sdk/client-organizations";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput, ListPoliciesCommand } from "@aws-sdk/client-organizations";
import { ListPoliciesForTargetCommandInput, ListPoliciesForTargetCommandOutput, ListPoliciesForTargetCommand } from "@aws-sdk/client-organizations";
import { ListRootsCommandInput, ListRootsCommandOutput, ListRootsCommand } from "@aws-sdk/client-organizations";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, ListTagsForResourceCommand } from "@aws-sdk/client-organizations";
import { ListTargetsForPolicyCommandInput, ListTargetsForPolicyCommandOutput, ListTargetsForPolicyCommand } from "@aws-sdk/client-organizations";
import { MoveAccountCommandInput, MoveAccountCommandOutput, MoveAccountCommand } from "@aws-sdk/client-organizations";
import { RegisterDelegatedAdministratorCommandInput, RegisterDelegatedAdministratorCommandOutput, RegisterDelegatedAdministratorCommand } from "@aws-sdk/client-organizations";
import { RemoveAccountFromOrganizationCommandInput, RemoveAccountFromOrganizationCommandOutput, RemoveAccountFromOrganizationCommand } from "@aws-sdk/client-organizations";
import { TagResourceCommandInput, TagResourceCommandOutput, TagResourceCommand } from "@aws-sdk/client-organizations";
import { UntagResourceCommandInput, UntagResourceCommandOutput, UntagResourceCommand } from "@aws-sdk/client-organizations";
import { UpdateOrganizationalUnitCommandInput, UpdateOrganizationalUnitCommandOutput, UpdateOrganizationalUnitCommand } from "@aws-sdk/client-organizations";
import { UpdatePolicyCommandInput, UpdatePolicyCommandOutput, UpdatePolicyCommand } from "@aws-sdk/client-organizations";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:acceptHandshake'*/
export const sdkOrganizationsAcceptHandshake = (input: SdkIntegrationTask<AcceptHandshakeCommandInput>): Promise<AcceptHandshakeCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new AcceptHandshakeCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:attachPolicy'*/
export const sdkOrganizationsAttachPolicy = (input: SdkIntegrationTask<AttachPolicyCommandInput>): Promise<AttachPolicyCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new AttachPolicyCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:cancelHandshake'*/
export const sdkOrganizationsCancelHandshake = (input: SdkIntegrationTask<CancelHandshakeCommandInput>): Promise<CancelHandshakeCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new CancelHandshakeCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:createAccount'*/
export const sdkOrganizationsCreateAccount = (input: SdkIntegrationTask<CreateAccountCommandInput>): Promise<CreateAccountCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new CreateAccountCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:createGovCloudAccount'*/
export const sdkOrganizationsCreateGovCloudAccount = (input: SdkIntegrationTask<CreateGovCloudAccountCommandInput>): Promise<CreateGovCloudAccountCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new CreateGovCloudAccountCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:createOrganization'*/
export const sdkOrganizationsCreateOrganization = (input: SdkIntegrationTask<CreateOrganizationCommandInput>): Promise<CreateOrganizationCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new CreateOrganizationCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:createOrganizationalUnit'*/
export const sdkOrganizationsCreateOrganizationalUnit = (input: SdkIntegrationTask<CreateOrganizationalUnitCommandInput>): Promise<CreateOrganizationalUnitCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new CreateOrganizationalUnitCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:createPolicy'*/
export const sdkOrganizationsCreatePolicy = (input: SdkIntegrationTask<CreatePolicyCommandInput>): Promise<CreatePolicyCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new CreatePolicyCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:declineHandshake'*/
export const sdkOrganizationsDeclineHandshake = (input: SdkIntegrationTask<DeclineHandshakeCommandInput>): Promise<DeclineHandshakeCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DeclineHandshakeCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:deleteOrganization'*/
export const sdkOrganizationsDeleteOrganization = (input: SdkIntegrationTask<DeleteOrganizationCommandInput>): Promise<DeleteOrganizationCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DeleteOrganizationCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:deleteOrganizationalUnit'*/
export const sdkOrganizationsDeleteOrganizationalUnit = (input: SdkIntegrationTask<DeleteOrganizationalUnitCommandInput>): Promise<DeleteOrganizationalUnitCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DeleteOrganizationalUnitCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:deletePolicy'*/
export const sdkOrganizationsDeletePolicy = (input: SdkIntegrationTask<DeletePolicyCommandInput>): Promise<DeletePolicyCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DeletePolicyCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:deregisterDelegatedAdministrator'*/
export const sdkOrganizationsDeregisterDelegatedAdministrator = (input: SdkIntegrationTask<DeregisterDelegatedAdministratorCommandInput>): Promise<DeregisterDelegatedAdministratorCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DeregisterDelegatedAdministratorCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:describeAccount'*/
export const sdkOrganizationsDescribeAccount = (input: SdkIntegrationTask<DescribeAccountCommandInput>): Promise<DescribeAccountCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DescribeAccountCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:describeCreateAccountStatus'*/
export const sdkOrganizationsDescribeCreateAccountStatus = (input: SdkIntegrationTask<DescribeCreateAccountStatusCommandInput>): Promise<DescribeCreateAccountStatusCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DescribeCreateAccountStatusCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:describeEffectivePolicy'*/
export const sdkOrganizationsDescribeEffectivePolicy = (input: SdkIntegrationTask<DescribeEffectivePolicyCommandInput>): Promise<DescribeEffectivePolicyCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DescribeEffectivePolicyCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:describeHandshake'*/
export const sdkOrganizationsDescribeHandshake = (input: SdkIntegrationTask<DescribeHandshakeCommandInput>): Promise<DescribeHandshakeCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DescribeHandshakeCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:describeOrganization'*/
export const sdkOrganizationsDescribeOrganization = (input: SdkIntegrationTask<DescribeOrganizationCommandInput>): Promise<DescribeOrganizationCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DescribeOrganizationCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:describeOrganizationalUnit'*/
export const sdkOrganizationsDescribeOrganizationalUnit = (input: SdkIntegrationTask<DescribeOrganizationalUnitCommandInput>): Promise<DescribeOrganizationalUnitCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DescribeOrganizationalUnitCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:describePolicy'*/
export const sdkOrganizationsDescribePolicy = (input: SdkIntegrationTask<DescribePolicyCommandInput>): Promise<DescribePolicyCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DescribePolicyCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:detachPolicy'*/
export const sdkOrganizationsDetachPolicy = (input: SdkIntegrationTask<DetachPolicyCommandInput>): Promise<DetachPolicyCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DetachPolicyCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:disableAWSServiceAccess'*/
export const sdkOrganizationsDisableAWSServiceAccess = (input: SdkIntegrationTask<DisableAWSServiceAccessCommandInput>): Promise<DisableAWSServiceAccessCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DisableAWSServiceAccessCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:disablePolicyType'*/
export const sdkOrganizationsDisablePolicyType = (input: SdkIntegrationTask<DisablePolicyTypeCommandInput>): Promise<DisablePolicyTypeCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new DisablePolicyTypeCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:enableAWSServiceAccess'*/
export const sdkOrganizationsEnableAWSServiceAccess = (input: SdkIntegrationTask<EnableAWSServiceAccessCommandInput>): Promise<EnableAWSServiceAccessCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new EnableAWSServiceAccessCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:enableAllFeatures'*/
export const sdkOrganizationsEnableAllFeatures = (input: SdkIntegrationTask<EnableAllFeaturesCommandInput>): Promise<EnableAllFeaturesCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new EnableAllFeaturesCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:enablePolicyType'*/
export const sdkOrganizationsEnablePolicyType = (input: SdkIntegrationTask<EnablePolicyTypeCommandInput>): Promise<EnablePolicyTypeCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new EnablePolicyTypeCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:inviteAccountToOrganization'*/
export const sdkOrganizationsInviteAccountToOrganization = (input: SdkIntegrationTask<InviteAccountToOrganizationCommandInput>): Promise<InviteAccountToOrganizationCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new InviteAccountToOrganizationCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:leaveOrganization'*/
export const sdkOrganizationsLeaveOrganization = (input: SdkIntegrationTask<LeaveOrganizationCommandInput>): Promise<LeaveOrganizationCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new LeaveOrganizationCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listAWSServiceAccessForOrganization'*/
export const sdkOrganizationsListAWSServiceAccessForOrganization = (input: SdkIntegrationTask<ListAWSServiceAccessForOrganizationCommandInput>): Promise<ListAWSServiceAccessForOrganizationCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListAWSServiceAccessForOrganizationCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listAccounts'*/
export const sdkOrganizationsListAccounts = (input: SdkIntegrationTask<ListAccountsCommandInput>): Promise<ListAccountsCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListAccountsCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listAccountsForParent'*/
export const sdkOrganizationsListAccountsForParent = (input: SdkIntegrationTask<ListAccountsForParentCommandInput>): Promise<ListAccountsForParentCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListAccountsForParentCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listChildren'*/
export const sdkOrganizationsListChildren = (input: SdkIntegrationTask<ListChildrenCommandInput>): Promise<ListChildrenCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListChildrenCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listCreateAccountStatus'*/
export const sdkOrganizationsListCreateAccountStatus = (input: SdkIntegrationTask<ListCreateAccountStatusCommandInput>): Promise<ListCreateAccountStatusCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListCreateAccountStatusCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listDelegatedAdministrators'*/
export const sdkOrganizationsListDelegatedAdministrators = (input: SdkIntegrationTask<ListDelegatedAdministratorsCommandInput>): Promise<ListDelegatedAdministratorsCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListDelegatedAdministratorsCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listDelegatedServicesForAccount'*/
export const sdkOrganizationsListDelegatedServicesForAccount = (input: SdkIntegrationTask<ListDelegatedServicesForAccountCommandInput>): Promise<ListDelegatedServicesForAccountCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListDelegatedServicesForAccountCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listHandshakesForAccount'*/
export const sdkOrganizationsListHandshakesForAccount = (input: SdkIntegrationTask<ListHandshakesForAccountCommandInput>): Promise<ListHandshakesForAccountCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListHandshakesForAccountCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listHandshakesForOrganization'*/
export const sdkOrganizationsListHandshakesForOrganization = (input: SdkIntegrationTask<ListHandshakesForOrganizationCommandInput>): Promise<ListHandshakesForOrganizationCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListHandshakesForOrganizationCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listOrganizationalUnitsForParent'*/
export const sdkOrganizationsListOrganizationalUnitsForParent = (input: SdkIntegrationTask<ListOrganizationalUnitsForParentCommandInput>): Promise<ListOrganizationalUnitsForParentCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListOrganizationalUnitsForParentCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listParents'*/
export const sdkOrganizationsListParents = (input: SdkIntegrationTask<ListParentsCommandInput>): Promise<ListParentsCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListParentsCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listPolicies'*/
export const sdkOrganizationsListPolicies = (input: SdkIntegrationTask<ListPoliciesCommandInput>): Promise<ListPoliciesCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListPoliciesCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listPoliciesForTarget'*/
export const sdkOrganizationsListPoliciesForTarget = (input: SdkIntegrationTask<ListPoliciesForTargetCommandInput>): Promise<ListPoliciesForTargetCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListPoliciesForTargetCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listRoots'*/
export const sdkOrganizationsListRoots = (input: SdkIntegrationTask<ListRootsCommandInput>): Promise<ListRootsCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListRootsCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listTagsForResource'*/
export const sdkOrganizationsListTagsForResource = (input: SdkIntegrationTask<ListTagsForResourceCommandInput>): Promise<ListTagsForResourceCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListTagsForResourceCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:listTargetsForPolicy'*/
export const sdkOrganizationsListTargetsForPolicy = (input: SdkIntegrationTask<ListTargetsForPolicyCommandInput>): Promise<ListTargetsForPolicyCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new ListTargetsForPolicyCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:moveAccount'*/
export const sdkOrganizationsMoveAccount = (input: SdkIntegrationTask<MoveAccountCommandInput>): Promise<MoveAccountCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new MoveAccountCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:registerDelegatedAdministrator'*/
export const sdkOrganizationsRegisterDelegatedAdministrator = (input: SdkIntegrationTask<RegisterDelegatedAdministratorCommandInput>): Promise<RegisterDelegatedAdministratorCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new RegisterDelegatedAdministratorCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:removeAccountFromOrganization'*/
export const sdkOrganizationsRemoveAccountFromOrganization = (input: SdkIntegrationTask<RemoveAccountFromOrganizationCommandInput>): Promise<RemoveAccountFromOrganizationCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new RemoveAccountFromOrganizationCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:tagResource'*/
export const sdkOrganizationsTagResource = (input: SdkIntegrationTask<TagResourceCommandInput>): Promise<TagResourceCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new TagResourceCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:untagResource'*/
export const sdkOrganizationsUntagResource = (input: SdkIntegrationTask<UntagResourceCommandInput>): Promise<UntagResourceCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new UntagResourceCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:updateOrganizationalUnit'*/
export const sdkOrganizationsUpdateOrganizationalUnit = (input: SdkIntegrationTask<UpdateOrganizationalUnitCommandInput>): Promise<UpdateOrganizationalUnitCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new UpdateOrganizationalUnitCommand(input.parameters);
    return organizations.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:organizations:updatePolicy'*/
export const sdkOrganizationsUpdatePolicy = (input: SdkIntegrationTask<UpdatePolicyCommandInput>): Promise<UpdatePolicyCommandOutput> => {
    const organizations = new OrganizationsClient(clientConfig);
    const command = new UpdatePolicyCommand(input.parameters);
    return organizations.send(command);
};

