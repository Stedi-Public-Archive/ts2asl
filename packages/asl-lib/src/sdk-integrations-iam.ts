import { IAMClient } from "@aws-sdk/client-iam";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { AddClientIDToOpenIDConnectProviderCommandInput, AddClientIDToOpenIDConnectProviderCommandOutput, AddClientIDToOpenIDConnectProviderCommand } from "@aws-sdk/client-iam";
import { AddRoleToInstanceProfileCommandInput, AddRoleToInstanceProfileCommandOutput, AddRoleToInstanceProfileCommand } from "@aws-sdk/client-iam";
import { AddUserToGroupCommandInput, AddUserToGroupCommandOutput, AddUserToGroupCommand } from "@aws-sdk/client-iam";
import { AttachGroupPolicyCommandInput, AttachGroupPolicyCommandOutput, AttachGroupPolicyCommand } from "@aws-sdk/client-iam";
import { AttachRolePolicyCommandInput, AttachRolePolicyCommandOutput, AttachRolePolicyCommand } from "@aws-sdk/client-iam";
import { AttachUserPolicyCommandInput, AttachUserPolicyCommandOutput, AttachUserPolicyCommand } from "@aws-sdk/client-iam";
import { ChangePasswordCommandInput, ChangePasswordCommandOutput, ChangePasswordCommand } from "@aws-sdk/client-iam";
import { CreateAccessKeyCommandInput, CreateAccessKeyCommandOutput, CreateAccessKeyCommand } from "@aws-sdk/client-iam";
import { CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput, CreateAccountAliasCommand } from "@aws-sdk/client-iam";
import { CreateGroupCommandInput, CreateGroupCommandOutput, CreateGroupCommand } from "@aws-sdk/client-iam";
import { CreateInstanceProfileCommandInput, CreateInstanceProfileCommandOutput, CreateInstanceProfileCommand } from "@aws-sdk/client-iam";
import { CreateLoginProfileCommandInput, CreateLoginProfileCommandOutput, CreateLoginProfileCommand } from "@aws-sdk/client-iam";
import { CreateOpenIDConnectProviderCommandInput, CreateOpenIDConnectProviderCommandOutput, CreateOpenIDConnectProviderCommand } from "@aws-sdk/client-iam";
import { CreatePolicyCommandInput, CreatePolicyCommandOutput, CreatePolicyCommand } from "@aws-sdk/client-iam";
import { CreatePolicyVersionCommandInput, CreatePolicyVersionCommandOutput, CreatePolicyVersionCommand } from "@aws-sdk/client-iam";
import { CreateRoleCommandInput, CreateRoleCommandOutput, CreateRoleCommand } from "@aws-sdk/client-iam";
import { CreateSAMLProviderCommandInput, CreateSAMLProviderCommandOutput, CreateSAMLProviderCommand } from "@aws-sdk/client-iam";
import { CreateServiceLinkedRoleCommandInput, CreateServiceLinkedRoleCommandOutput, CreateServiceLinkedRoleCommand } from "@aws-sdk/client-iam";
import { CreateServiceSpecificCredentialCommandInput, CreateServiceSpecificCredentialCommandOutput, CreateServiceSpecificCredentialCommand } from "@aws-sdk/client-iam";
import { CreateUserCommandInput, CreateUserCommandOutput, CreateUserCommand } from "@aws-sdk/client-iam";
import { CreateVirtualMFADeviceCommandInput, CreateVirtualMFADeviceCommandOutput, CreateVirtualMFADeviceCommand } from "@aws-sdk/client-iam";
import { DeactivateMFADeviceCommandInput, DeactivateMFADeviceCommandOutput, DeactivateMFADeviceCommand } from "@aws-sdk/client-iam";
import { DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput, DeleteAccessKeyCommand } from "@aws-sdk/client-iam";
import { DeleteAccountAliasCommandInput, DeleteAccountAliasCommandOutput, DeleteAccountAliasCommand } from "@aws-sdk/client-iam";
import { DeleteAccountPasswordPolicyCommandInput, DeleteAccountPasswordPolicyCommandOutput, DeleteAccountPasswordPolicyCommand } from "@aws-sdk/client-iam";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput, DeleteGroupCommand } from "@aws-sdk/client-iam";
import { DeleteGroupPolicyCommandInput, DeleteGroupPolicyCommandOutput, DeleteGroupPolicyCommand } from "@aws-sdk/client-iam";
import { DeleteInstanceProfileCommandInput, DeleteInstanceProfileCommandOutput, DeleteInstanceProfileCommand } from "@aws-sdk/client-iam";
import { DeleteLoginProfileCommandInput, DeleteLoginProfileCommandOutput, DeleteLoginProfileCommand } from "@aws-sdk/client-iam";
import { DeleteOpenIDConnectProviderCommandInput, DeleteOpenIDConnectProviderCommandOutput, DeleteOpenIDConnectProviderCommand } from "@aws-sdk/client-iam";
import { DeletePolicyCommandInput, DeletePolicyCommandOutput, DeletePolicyCommand } from "@aws-sdk/client-iam";
import { DeletePolicyVersionCommandInput, DeletePolicyVersionCommandOutput, DeletePolicyVersionCommand } from "@aws-sdk/client-iam";
import { DeleteRoleCommandInput, DeleteRoleCommandOutput, DeleteRoleCommand } from "@aws-sdk/client-iam";
import { DeleteRolePermissionsBoundaryCommandInput, DeleteRolePermissionsBoundaryCommandOutput, DeleteRolePermissionsBoundaryCommand } from "@aws-sdk/client-iam";
import { DeleteRolePolicyCommandInput, DeleteRolePolicyCommandOutput, DeleteRolePolicyCommand } from "@aws-sdk/client-iam";
import { DeleteSAMLProviderCommandInput, DeleteSAMLProviderCommandOutput, DeleteSAMLProviderCommand } from "@aws-sdk/client-iam";
import { DeleteSSHPublicKeyCommandInput, DeleteSSHPublicKeyCommandOutput, DeleteSSHPublicKeyCommand } from "@aws-sdk/client-iam";
import { DeleteServerCertificateCommandInput, DeleteServerCertificateCommandOutput, DeleteServerCertificateCommand } from "@aws-sdk/client-iam";
import { DeleteServiceLinkedRoleCommandInput, DeleteServiceLinkedRoleCommandOutput, DeleteServiceLinkedRoleCommand } from "@aws-sdk/client-iam";
import { DeleteServiceSpecificCredentialCommandInput, DeleteServiceSpecificCredentialCommandOutput, DeleteServiceSpecificCredentialCommand } from "@aws-sdk/client-iam";
import { DeleteSigningCertificateCommandInput, DeleteSigningCertificateCommandOutput, DeleteSigningCertificateCommand } from "@aws-sdk/client-iam";
import { DeleteUserCommandInput, DeleteUserCommandOutput, DeleteUserCommand } from "@aws-sdk/client-iam";
import { DeleteUserPermissionsBoundaryCommandInput, DeleteUserPermissionsBoundaryCommandOutput, DeleteUserPermissionsBoundaryCommand } from "@aws-sdk/client-iam";
import { DeleteUserPolicyCommandInput, DeleteUserPolicyCommandOutput, DeleteUserPolicyCommand } from "@aws-sdk/client-iam";
import { DeleteVirtualMFADeviceCommandInput, DeleteVirtualMFADeviceCommandOutput, DeleteVirtualMFADeviceCommand } from "@aws-sdk/client-iam";
import { DetachGroupPolicyCommandInput, DetachGroupPolicyCommandOutput, DetachGroupPolicyCommand } from "@aws-sdk/client-iam";
import { DetachRolePolicyCommandInput, DetachRolePolicyCommandOutput, DetachRolePolicyCommand } from "@aws-sdk/client-iam";
import { DetachUserPolicyCommandInput, DetachUserPolicyCommandOutput, DetachUserPolicyCommand } from "@aws-sdk/client-iam";
import { EnableMFADeviceCommandInput, EnableMFADeviceCommandOutput, EnableMFADeviceCommand } from "@aws-sdk/client-iam";
import { GenerateCredentialReportCommandInput, GenerateCredentialReportCommandOutput, GenerateCredentialReportCommand } from "@aws-sdk/client-iam";
import { GenerateOrganizationsAccessReportCommandInput, GenerateOrganizationsAccessReportCommandOutput, GenerateOrganizationsAccessReportCommand } from "@aws-sdk/client-iam";
import { GenerateServiceLastAccessedDetailsCommandInput, GenerateServiceLastAccessedDetailsCommandOutput, GenerateServiceLastAccessedDetailsCommand } from "@aws-sdk/client-iam";
import { GetAccessKeyLastUsedCommandInput, GetAccessKeyLastUsedCommandOutput, GetAccessKeyLastUsedCommand } from "@aws-sdk/client-iam";
import { GetAccountAuthorizationDetailsCommandInput, GetAccountAuthorizationDetailsCommandOutput, GetAccountAuthorizationDetailsCommand } from "@aws-sdk/client-iam";
import { GetAccountPasswordPolicyCommandInput, GetAccountPasswordPolicyCommandOutput, GetAccountPasswordPolicyCommand } from "@aws-sdk/client-iam";
import { GetAccountSummaryCommandInput, GetAccountSummaryCommandOutput, GetAccountSummaryCommand } from "@aws-sdk/client-iam";
import { GetContextKeysForCustomPolicyCommandInput, GetContextKeysForCustomPolicyCommandOutput, GetContextKeysForCustomPolicyCommand } from "@aws-sdk/client-iam";
import { GetContextKeysForPrincipalPolicyCommandInput, GetContextKeysForPrincipalPolicyCommandOutput, GetContextKeysForPrincipalPolicyCommand } from "@aws-sdk/client-iam";
import { GetCredentialReportCommandInput, GetCredentialReportCommandOutput, GetCredentialReportCommand } from "@aws-sdk/client-iam";
import { GetGroupCommandInput, GetGroupCommandOutput, GetGroupCommand } from "@aws-sdk/client-iam";
import { GetGroupPolicyCommandInput, GetGroupPolicyCommandOutput, GetGroupPolicyCommand } from "@aws-sdk/client-iam";
import { GetInstanceProfileCommandInput, GetInstanceProfileCommandOutput, GetInstanceProfileCommand } from "@aws-sdk/client-iam";
import { GetLoginProfileCommandInput, GetLoginProfileCommandOutput, GetLoginProfileCommand } from "@aws-sdk/client-iam";
import { GetOpenIDConnectProviderCommandInput, GetOpenIDConnectProviderCommandOutput, GetOpenIDConnectProviderCommand } from "@aws-sdk/client-iam";
import { GetOrganizationsAccessReportCommandInput, GetOrganizationsAccessReportCommandOutput, GetOrganizationsAccessReportCommand } from "@aws-sdk/client-iam";
import { GetPolicyCommandInput, GetPolicyCommandOutput, GetPolicyCommand } from "@aws-sdk/client-iam";
import { GetPolicyVersionCommandInput, GetPolicyVersionCommandOutput, GetPolicyVersionCommand } from "@aws-sdk/client-iam";
import { GetRoleCommandInput, GetRoleCommandOutput, GetRoleCommand } from "@aws-sdk/client-iam";
import { GetRolePolicyCommandInput, GetRolePolicyCommandOutput, GetRolePolicyCommand } from "@aws-sdk/client-iam";
import { GetSAMLProviderCommandInput, GetSAMLProviderCommandOutput, GetSAMLProviderCommand } from "@aws-sdk/client-iam";
import { GetSSHPublicKeyCommandInput, GetSSHPublicKeyCommandOutput, GetSSHPublicKeyCommand } from "@aws-sdk/client-iam";
import { GetServerCertificateCommandInput, GetServerCertificateCommandOutput, GetServerCertificateCommand } from "@aws-sdk/client-iam";
import { GetServiceLastAccessedDetailsCommandInput, GetServiceLastAccessedDetailsCommandOutput, GetServiceLastAccessedDetailsCommand } from "@aws-sdk/client-iam";
import { GetServiceLastAccessedDetailsWithEntitiesCommandInput, GetServiceLastAccessedDetailsWithEntitiesCommandOutput, GetServiceLastAccessedDetailsWithEntitiesCommand } from "@aws-sdk/client-iam";
import { GetServiceLinkedRoleDeletionStatusCommandInput, GetServiceLinkedRoleDeletionStatusCommandOutput, GetServiceLinkedRoleDeletionStatusCommand } from "@aws-sdk/client-iam";
import { GetUserCommandInput, GetUserCommandOutput, GetUserCommand } from "@aws-sdk/client-iam";
import { GetUserPolicyCommandInput, GetUserPolicyCommandOutput, GetUserPolicyCommand } from "@aws-sdk/client-iam";
import { ListAccessKeysCommandInput, ListAccessKeysCommandOutput, ListAccessKeysCommand } from "@aws-sdk/client-iam";
import { ListAccountAliasesCommandInput, ListAccountAliasesCommandOutput, ListAccountAliasesCommand } from "@aws-sdk/client-iam";
import { ListAttachedGroupPoliciesCommandInput, ListAttachedGroupPoliciesCommandOutput, ListAttachedGroupPoliciesCommand } from "@aws-sdk/client-iam";
import { ListAttachedRolePoliciesCommandInput, ListAttachedRolePoliciesCommandOutput, ListAttachedRolePoliciesCommand } from "@aws-sdk/client-iam";
import { ListAttachedUserPoliciesCommandInput, ListAttachedUserPoliciesCommandOutput, ListAttachedUserPoliciesCommand } from "@aws-sdk/client-iam";
import { ListEntitiesForPolicyCommandInput, ListEntitiesForPolicyCommandOutput, ListEntitiesForPolicyCommand } from "@aws-sdk/client-iam";
import { ListGroupPoliciesCommandInput, ListGroupPoliciesCommandOutput, ListGroupPoliciesCommand } from "@aws-sdk/client-iam";
import { ListGroupsCommandInput, ListGroupsCommandOutput, ListGroupsCommand } from "@aws-sdk/client-iam";
import { ListGroupsForUserCommandInput, ListGroupsForUserCommandOutput, ListGroupsForUserCommand } from "@aws-sdk/client-iam";
import { ListInstanceProfileTagsCommandInput, ListInstanceProfileTagsCommandOutput, ListInstanceProfileTagsCommand } from "@aws-sdk/client-iam";
import { ListInstanceProfilesCommandInput, ListInstanceProfilesCommandOutput, ListInstanceProfilesCommand } from "@aws-sdk/client-iam";
import { ListInstanceProfilesForRoleCommandInput, ListInstanceProfilesForRoleCommandOutput, ListInstanceProfilesForRoleCommand } from "@aws-sdk/client-iam";
import { ListMFADeviceTagsCommandInput, ListMFADeviceTagsCommandOutput, ListMFADeviceTagsCommand } from "@aws-sdk/client-iam";
import { ListMFADevicesCommandInput, ListMFADevicesCommandOutput, ListMFADevicesCommand } from "@aws-sdk/client-iam";
import { ListOpenIDConnectProviderTagsCommandInput, ListOpenIDConnectProviderTagsCommandOutput, ListOpenIDConnectProviderTagsCommand } from "@aws-sdk/client-iam";
import { ListOpenIDConnectProvidersCommandInput, ListOpenIDConnectProvidersCommandOutput, ListOpenIDConnectProvidersCommand } from "@aws-sdk/client-iam";
import { ListPoliciesCommandInput, ListPoliciesCommandOutput, ListPoliciesCommand } from "@aws-sdk/client-iam";
import { ListPoliciesGrantingServiceAccessCommandInput, ListPoliciesGrantingServiceAccessCommandOutput, ListPoliciesGrantingServiceAccessCommand } from "@aws-sdk/client-iam";
import { ListPolicyTagsCommandInput, ListPolicyTagsCommandOutput, ListPolicyTagsCommand } from "@aws-sdk/client-iam";
import { ListPolicyVersionsCommandInput, ListPolicyVersionsCommandOutput, ListPolicyVersionsCommand } from "@aws-sdk/client-iam";
import { ListRolePoliciesCommandInput, ListRolePoliciesCommandOutput, ListRolePoliciesCommand } from "@aws-sdk/client-iam";
import { ListRoleTagsCommandInput, ListRoleTagsCommandOutput, ListRoleTagsCommand } from "@aws-sdk/client-iam";
import { ListRolesCommandInput, ListRolesCommandOutput, ListRolesCommand } from "@aws-sdk/client-iam";
import { ListSAMLProviderTagsCommandInput, ListSAMLProviderTagsCommandOutput, ListSAMLProviderTagsCommand } from "@aws-sdk/client-iam";
import { ListSAMLProvidersCommandInput, ListSAMLProvidersCommandOutput, ListSAMLProvidersCommand } from "@aws-sdk/client-iam";
import { ListSSHPublicKeysCommandInput, ListSSHPublicKeysCommandOutput, ListSSHPublicKeysCommand } from "@aws-sdk/client-iam";
import { ListServerCertificateTagsCommandInput, ListServerCertificateTagsCommandOutput, ListServerCertificateTagsCommand } from "@aws-sdk/client-iam";
import { ListServerCertificatesCommandInput, ListServerCertificatesCommandOutput, ListServerCertificatesCommand } from "@aws-sdk/client-iam";
import { ListServiceSpecificCredentialsCommandInput, ListServiceSpecificCredentialsCommandOutput, ListServiceSpecificCredentialsCommand } from "@aws-sdk/client-iam";
import { ListSigningCertificatesCommandInput, ListSigningCertificatesCommandOutput, ListSigningCertificatesCommand } from "@aws-sdk/client-iam";
import { ListUserPoliciesCommandInput, ListUserPoliciesCommandOutput, ListUserPoliciesCommand } from "@aws-sdk/client-iam";
import { ListUserTagsCommandInput, ListUserTagsCommandOutput, ListUserTagsCommand } from "@aws-sdk/client-iam";
import { ListUsersCommandInput, ListUsersCommandOutput, ListUsersCommand } from "@aws-sdk/client-iam";
import { ListVirtualMFADevicesCommandInput, ListVirtualMFADevicesCommandOutput, ListVirtualMFADevicesCommand } from "@aws-sdk/client-iam";
import { PutGroupPolicyCommandInput, PutGroupPolicyCommandOutput, PutGroupPolicyCommand } from "@aws-sdk/client-iam";
import { PutRolePermissionsBoundaryCommandInput, PutRolePermissionsBoundaryCommandOutput, PutRolePermissionsBoundaryCommand } from "@aws-sdk/client-iam";
import { PutRolePolicyCommandInput, PutRolePolicyCommandOutput, PutRolePolicyCommand } from "@aws-sdk/client-iam";
import { PutUserPermissionsBoundaryCommandInput, PutUserPermissionsBoundaryCommandOutput, PutUserPermissionsBoundaryCommand } from "@aws-sdk/client-iam";
import { PutUserPolicyCommandInput, PutUserPolicyCommandOutput, PutUserPolicyCommand } from "@aws-sdk/client-iam";
import { RemoveClientIDFromOpenIDConnectProviderCommandInput, RemoveClientIDFromOpenIDConnectProviderCommandOutput, RemoveClientIDFromOpenIDConnectProviderCommand } from "@aws-sdk/client-iam";
import { RemoveRoleFromInstanceProfileCommandInput, RemoveRoleFromInstanceProfileCommandOutput, RemoveRoleFromInstanceProfileCommand } from "@aws-sdk/client-iam";
import { RemoveUserFromGroupCommandInput, RemoveUserFromGroupCommandOutput, RemoveUserFromGroupCommand } from "@aws-sdk/client-iam";
import { ResetServiceSpecificCredentialCommandInput, ResetServiceSpecificCredentialCommandOutput, ResetServiceSpecificCredentialCommand } from "@aws-sdk/client-iam";
import { ResyncMFADeviceCommandInput, ResyncMFADeviceCommandOutput, ResyncMFADeviceCommand } from "@aws-sdk/client-iam";
import { SetDefaultPolicyVersionCommandInput, SetDefaultPolicyVersionCommandOutput, SetDefaultPolicyVersionCommand } from "@aws-sdk/client-iam";
import { SetSecurityTokenServicePreferencesCommandInput, SetSecurityTokenServicePreferencesCommandOutput, SetSecurityTokenServicePreferencesCommand } from "@aws-sdk/client-iam";
import { SimulateCustomPolicyCommandInput, SimulateCustomPolicyCommandOutput, SimulateCustomPolicyCommand } from "@aws-sdk/client-iam";
import { SimulatePrincipalPolicyCommandInput, SimulatePrincipalPolicyCommandOutput, SimulatePrincipalPolicyCommand } from "@aws-sdk/client-iam";
import { TagInstanceProfileCommandInput, TagInstanceProfileCommandOutput, TagInstanceProfileCommand } from "@aws-sdk/client-iam";
import { TagMFADeviceCommandInput, TagMFADeviceCommandOutput, TagMFADeviceCommand } from "@aws-sdk/client-iam";
import { TagOpenIDConnectProviderCommandInput, TagOpenIDConnectProviderCommandOutput, TagOpenIDConnectProviderCommand } from "@aws-sdk/client-iam";
import { TagPolicyCommandInput, TagPolicyCommandOutput, TagPolicyCommand } from "@aws-sdk/client-iam";
import { TagRoleCommandInput, TagRoleCommandOutput, TagRoleCommand } from "@aws-sdk/client-iam";
import { TagSAMLProviderCommandInput, TagSAMLProviderCommandOutput, TagSAMLProviderCommand } from "@aws-sdk/client-iam";
import { TagServerCertificateCommandInput, TagServerCertificateCommandOutput, TagServerCertificateCommand } from "@aws-sdk/client-iam";
import { TagUserCommandInput, TagUserCommandOutput, TagUserCommand } from "@aws-sdk/client-iam";
import { UntagInstanceProfileCommandInput, UntagInstanceProfileCommandOutput, UntagInstanceProfileCommand } from "@aws-sdk/client-iam";
import { UntagMFADeviceCommandInput, UntagMFADeviceCommandOutput, UntagMFADeviceCommand } from "@aws-sdk/client-iam";
import { UntagOpenIDConnectProviderCommandInput, UntagOpenIDConnectProviderCommandOutput, UntagOpenIDConnectProviderCommand } from "@aws-sdk/client-iam";
import { UntagPolicyCommandInput, UntagPolicyCommandOutput, UntagPolicyCommand } from "@aws-sdk/client-iam";
import { UntagRoleCommandInput, UntagRoleCommandOutput, UntagRoleCommand } from "@aws-sdk/client-iam";
import { UntagSAMLProviderCommandInput, UntagSAMLProviderCommandOutput, UntagSAMLProviderCommand } from "@aws-sdk/client-iam";
import { UntagServerCertificateCommandInput, UntagServerCertificateCommandOutput, UntagServerCertificateCommand } from "@aws-sdk/client-iam";
import { UntagUserCommandInput, UntagUserCommandOutput, UntagUserCommand } from "@aws-sdk/client-iam";
import { UpdateAccessKeyCommandInput, UpdateAccessKeyCommandOutput, UpdateAccessKeyCommand } from "@aws-sdk/client-iam";
import { UpdateAccountPasswordPolicyCommandInput, UpdateAccountPasswordPolicyCommandOutput, UpdateAccountPasswordPolicyCommand } from "@aws-sdk/client-iam";
import { UpdateAssumeRolePolicyCommandInput, UpdateAssumeRolePolicyCommandOutput, UpdateAssumeRolePolicyCommand } from "@aws-sdk/client-iam";
import { UpdateGroupCommandInput, UpdateGroupCommandOutput, UpdateGroupCommand } from "@aws-sdk/client-iam";
import { UpdateLoginProfileCommandInput, UpdateLoginProfileCommandOutput, UpdateLoginProfileCommand } from "@aws-sdk/client-iam";
import { UpdateOpenIDConnectProviderThumbprintCommandInput, UpdateOpenIDConnectProviderThumbprintCommandOutput, UpdateOpenIDConnectProviderThumbprintCommand } from "@aws-sdk/client-iam";
import { UpdateRoleCommandInput, UpdateRoleCommandOutput, UpdateRoleCommand } from "@aws-sdk/client-iam";
import { UpdateRoleDescriptionCommandInput, UpdateRoleDescriptionCommandOutput, UpdateRoleDescriptionCommand } from "@aws-sdk/client-iam";
import { UpdateSAMLProviderCommandInput, UpdateSAMLProviderCommandOutput, UpdateSAMLProviderCommand } from "@aws-sdk/client-iam";
import { UpdateSSHPublicKeyCommandInput, UpdateSSHPublicKeyCommandOutput, UpdateSSHPublicKeyCommand } from "@aws-sdk/client-iam";
import { UpdateServerCertificateCommandInput, UpdateServerCertificateCommandOutput, UpdateServerCertificateCommand } from "@aws-sdk/client-iam";
import { UpdateServiceSpecificCredentialCommandInput, UpdateServiceSpecificCredentialCommandOutput, UpdateServiceSpecificCredentialCommand } from "@aws-sdk/client-iam";
import { UpdateSigningCertificateCommandInput, UpdateSigningCertificateCommandOutput, UpdateSigningCertificateCommand } from "@aws-sdk/client-iam";
import { UpdateUserCommandInput, UpdateUserCommandOutput, UpdateUserCommand } from "@aws-sdk/client-iam";
import { UploadSSHPublicKeyCommandInput, UploadSSHPublicKeyCommandOutput, UploadSSHPublicKeyCommand } from "@aws-sdk/client-iam";
import { UploadServerCertificateCommandInput, UploadServerCertificateCommandOutput, UploadServerCertificateCommand } from "@aws-sdk/client-iam";
import { UploadSigningCertificateCommandInput, UploadSigningCertificateCommandOutput, UploadSigningCertificateCommand } from "@aws-sdk/client-iam";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:addClientIDToOpenIDConnectProvider'*/
export const sdkIAMAddClientIDToOpenIDConnectProvider = (input: SdkIntegrationTask<AddClientIDToOpenIDConnectProviderCommandInput>): Promise<AddClientIDToOpenIDConnectProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new AddClientIDToOpenIDConnectProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:addRoleToInstanceProfile'*/
export const sdkIAMAddRoleToInstanceProfile = (input: SdkIntegrationTask<AddRoleToInstanceProfileCommandInput>): Promise<AddRoleToInstanceProfileCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new AddRoleToInstanceProfileCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:addUserToGroup'*/
export const sdkIAMAddUserToGroup = (input: SdkIntegrationTask<AddUserToGroupCommandInput>): Promise<AddUserToGroupCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new AddUserToGroupCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:attachGroupPolicy'*/
export const sdkIAMAttachGroupPolicy = (input: SdkIntegrationTask<AttachGroupPolicyCommandInput>): Promise<AttachGroupPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new AttachGroupPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:attachRolePolicy'*/
export const sdkIAMAttachRolePolicy = (input: SdkIntegrationTask<AttachRolePolicyCommandInput>): Promise<AttachRolePolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new AttachRolePolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:attachUserPolicy'*/
export const sdkIAMAttachUserPolicy = (input: SdkIntegrationTask<AttachUserPolicyCommandInput>): Promise<AttachUserPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new AttachUserPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:changePassword'*/
export const sdkIAMChangePassword = (input: SdkIntegrationTask<ChangePasswordCommandInput>): Promise<ChangePasswordCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ChangePasswordCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createAccessKey'*/
export const sdkIAMCreateAccessKey = (input: SdkIntegrationTask<CreateAccessKeyCommandInput>): Promise<CreateAccessKeyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreateAccessKeyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createAccountAlias'*/
export const sdkIAMCreateAccountAlias = (input: SdkIntegrationTask<CreateAccountAliasCommandInput>): Promise<CreateAccountAliasCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreateAccountAliasCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createGroup'*/
export const sdkIAMCreateGroup = (input: SdkIntegrationTask<CreateGroupCommandInput>): Promise<CreateGroupCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreateGroupCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createInstanceProfile'*/
export const sdkIAMCreateInstanceProfile = (input: SdkIntegrationTask<CreateInstanceProfileCommandInput>): Promise<CreateInstanceProfileCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreateInstanceProfileCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createLoginProfile'*/
export const sdkIAMCreateLoginProfile = (input: SdkIntegrationTask<CreateLoginProfileCommandInput>): Promise<CreateLoginProfileCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreateLoginProfileCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createOpenIDConnectProvider'*/
export const sdkIAMCreateOpenIDConnectProvider = (input: SdkIntegrationTask<CreateOpenIDConnectProviderCommandInput>): Promise<CreateOpenIDConnectProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreateOpenIDConnectProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createPolicy'*/
export const sdkIAMCreatePolicy = (input: SdkIntegrationTask<CreatePolicyCommandInput>): Promise<CreatePolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreatePolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createPolicyVersion'*/
export const sdkIAMCreatePolicyVersion = (input: SdkIntegrationTask<CreatePolicyVersionCommandInput>): Promise<CreatePolicyVersionCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreatePolicyVersionCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createRole'*/
export const sdkIAMCreateRole = (input: SdkIntegrationTask<CreateRoleCommandInput>): Promise<CreateRoleCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreateRoleCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createSAMLProvider'*/
export const sdkIAMCreateSAMLProvider = (input: SdkIntegrationTask<CreateSAMLProviderCommandInput>): Promise<CreateSAMLProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreateSAMLProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createServiceLinkedRole'*/
export const sdkIAMCreateServiceLinkedRole = (input: SdkIntegrationTask<CreateServiceLinkedRoleCommandInput>): Promise<CreateServiceLinkedRoleCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreateServiceLinkedRoleCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createServiceSpecificCredential'*/
export const sdkIAMCreateServiceSpecificCredential = (input: SdkIntegrationTask<CreateServiceSpecificCredentialCommandInput>): Promise<CreateServiceSpecificCredentialCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreateServiceSpecificCredentialCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createUser'*/
export const sdkIAMCreateUser = (input: SdkIntegrationTask<CreateUserCommandInput>): Promise<CreateUserCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreateUserCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:createVirtualMFADevice'*/
export const sdkIAMCreateVirtualMFADevice = (input: SdkIntegrationTask<CreateVirtualMFADeviceCommandInput>): Promise<CreateVirtualMFADeviceCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new CreateVirtualMFADeviceCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deactivateMFADevice'*/
export const sdkIAMDeactivateMFADevice = (input: SdkIntegrationTask<DeactivateMFADeviceCommandInput>): Promise<DeactivateMFADeviceCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeactivateMFADeviceCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteAccessKey'*/
export const sdkIAMDeleteAccessKey = (input: SdkIntegrationTask<DeleteAccessKeyCommandInput>): Promise<DeleteAccessKeyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteAccessKeyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteAccountAlias'*/
export const sdkIAMDeleteAccountAlias = (input: SdkIntegrationTask<DeleteAccountAliasCommandInput>): Promise<DeleteAccountAliasCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteAccountAliasCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteAccountPasswordPolicy'*/
export const sdkIAMDeleteAccountPasswordPolicy = (input: SdkIntegrationTask<DeleteAccountPasswordPolicyCommandInput>): Promise<DeleteAccountPasswordPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteAccountPasswordPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteGroup'*/
export const sdkIAMDeleteGroup = (input: SdkIntegrationTask<DeleteGroupCommandInput>): Promise<DeleteGroupCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteGroupCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteGroupPolicy'*/
export const sdkIAMDeleteGroupPolicy = (input: SdkIntegrationTask<DeleteGroupPolicyCommandInput>): Promise<DeleteGroupPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteGroupPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteInstanceProfile'*/
export const sdkIAMDeleteInstanceProfile = (input: SdkIntegrationTask<DeleteInstanceProfileCommandInput>): Promise<DeleteInstanceProfileCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteInstanceProfileCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteLoginProfile'*/
export const sdkIAMDeleteLoginProfile = (input: SdkIntegrationTask<DeleteLoginProfileCommandInput>): Promise<DeleteLoginProfileCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteLoginProfileCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteOpenIDConnectProvider'*/
export const sdkIAMDeleteOpenIDConnectProvider = (input: SdkIntegrationTask<DeleteOpenIDConnectProviderCommandInput>): Promise<DeleteOpenIDConnectProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteOpenIDConnectProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deletePolicy'*/
export const sdkIAMDeletePolicy = (input: SdkIntegrationTask<DeletePolicyCommandInput>): Promise<DeletePolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeletePolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deletePolicyVersion'*/
export const sdkIAMDeletePolicyVersion = (input: SdkIntegrationTask<DeletePolicyVersionCommandInput>): Promise<DeletePolicyVersionCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeletePolicyVersionCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteRole'*/
export const sdkIAMDeleteRole = (input: SdkIntegrationTask<DeleteRoleCommandInput>): Promise<DeleteRoleCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteRoleCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteRolePermissionsBoundary'*/
export const sdkIAMDeleteRolePermissionsBoundary = (input: SdkIntegrationTask<DeleteRolePermissionsBoundaryCommandInput>): Promise<DeleteRolePermissionsBoundaryCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteRolePermissionsBoundaryCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteRolePolicy'*/
export const sdkIAMDeleteRolePolicy = (input: SdkIntegrationTask<DeleteRolePolicyCommandInput>): Promise<DeleteRolePolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteRolePolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteSAMLProvider'*/
export const sdkIAMDeleteSAMLProvider = (input: SdkIntegrationTask<DeleteSAMLProviderCommandInput>): Promise<DeleteSAMLProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteSAMLProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteSSHPublicKey'*/
export const sdkIAMDeleteSSHPublicKey = (input: SdkIntegrationTask<DeleteSSHPublicKeyCommandInput>): Promise<DeleteSSHPublicKeyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteSSHPublicKeyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteServerCertificate'*/
export const sdkIAMDeleteServerCertificate = (input: SdkIntegrationTask<DeleteServerCertificateCommandInput>): Promise<DeleteServerCertificateCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteServerCertificateCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteServiceLinkedRole'*/
export const sdkIAMDeleteServiceLinkedRole = (input: SdkIntegrationTask<DeleteServiceLinkedRoleCommandInput>): Promise<DeleteServiceLinkedRoleCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteServiceLinkedRoleCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteServiceSpecificCredential'*/
export const sdkIAMDeleteServiceSpecificCredential = (input: SdkIntegrationTask<DeleteServiceSpecificCredentialCommandInput>): Promise<DeleteServiceSpecificCredentialCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteServiceSpecificCredentialCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteSigningCertificate'*/
export const sdkIAMDeleteSigningCertificate = (input: SdkIntegrationTask<DeleteSigningCertificateCommandInput>): Promise<DeleteSigningCertificateCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteSigningCertificateCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteUser'*/
export const sdkIAMDeleteUser = (input: SdkIntegrationTask<DeleteUserCommandInput>): Promise<DeleteUserCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteUserCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteUserPermissionsBoundary'*/
export const sdkIAMDeleteUserPermissionsBoundary = (input: SdkIntegrationTask<DeleteUserPermissionsBoundaryCommandInput>): Promise<DeleteUserPermissionsBoundaryCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteUserPermissionsBoundaryCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteUserPolicy'*/
export const sdkIAMDeleteUserPolicy = (input: SdkIntegrationTask<DeleteUserPolicyCommandInput>): Promise<DeleteUserPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteUserPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:deleteVirtualMFADevice'*/
export const sdkIAMDeleteVirtualMFADevice = (input: SdkIntegrationTask<DeleteVirtualMFADeviceCommandInput>): Promise<DeleteVirtualMFADeviceCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DeleteVirtualMFADeviceCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:detachGroupPolicy'*/
export const sdkIAMDetachGroupPolicy = (input: SdkIntegrationTask<DetachGroupPolicyCommandInput>): Promise<DetachGroupPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DetachGroupPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:detachRolePolicy'*/
export const sdkIAMDetachRolePolicy = (input: SdkIntegrationTask<DetachRolePolicyCommandInput>): Promise<DetachRolePolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DetachRolePolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:detachUserPolicy'*/
export const sdkIAMDetachUserPolicy = (input: SdkIntegrationTask<DetachUserPolicyCommandInput>): Promise<DetachUserPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new DetachUserPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:enableMFADevice'*/
export const sdkIAMEnableMFADevice = (input: SdkIntegrationTask<EnableMFADeviceCommandInput>): Promise<EnableMFADeviceCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new EnableMFADeviceCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:generateCredentialReport'*/
export const sdkIAMGenerateCredentialReport = (input: SdkIntegrationTask<GenerateCredentialReportCommandInput>): Promise<GenerateCredentialReportCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GenerateCredentialReportCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:generateOrganizationsAccessReport'*/
export const sdkIAMGenerateOrganizationsAccessReport = (input: SdkIntegrationTask<GenerateOrganizationsAccessReportCommandInput>): Promise<GenerateOrganizationsAccessReportCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GenerateOrganizationsAccessReportCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:generateServiceLastAccessedDetails'*/
export const sdkIAMGenerateServiceLastAccessedDetails = (input: SdkIntegrationTask<GenerateServiceLastAccessedDetailsCommandInput>): Promise<GenerateServiceLastAccessedDetailsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GenerateServiceLastAccessedDetailsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getAccessKeyLastUsed'*/
export const sdkIAMGetAccessKeyLastUsed = (input: SdkIntegrationTask<GetAccessKeyLastUsedCommandInput>): Promise<GetAccessKeyLastUsedCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetAccessKeyLastUsedCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getAccountAuthorizationDetails'*/
export const sdkIAMGetAccountAuthorizationDetails = (input: SdkIntegrationTask<GetAccountAuthorizationDetailsCommandInput>): Promise<GetAccountAuthorizationDetailsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetAccountAuthorizationDetailsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getAccountPasswordPolicy'*/
export const sdkIAMGetAccountPasswordPolicy = (input: SdkIntegrationTask<GetAccountPasswordPolicyCommandInput>): Promise<GetAccountPasswordPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetAccountPasswordPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getAccountSummary'*/
export const sdkIAMGetAccountSummary = (input: SdkIntegrationTask<GetAccountSummaryCommandInput>): Promise<GetAccountSummaryCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetAccountSummaryCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getContextKeysForCustomPolicy'*/
export const sdkIAMGetContextKeysForCustomPolicy = (input: SdkIntegrationTask<GetContextKeysForCustomPolicyCommandInput>): Promise<GetContextKeysForCustomPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetContextKeysForCustomPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getContextKeysForPrincipalPolicy'*/
export const sdkIAMGetContextKeysForPrincipalPolicy = (input: SdkIntegrationTask<GetContextKeysForPrincipalPolicyCommandInput>): Promise<GetContextKeysForPrincipalPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetContextKeysForPrincipalPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getCredentialReport'*/
export const sdkIAMGetCredentialReport = (input: SdkIntegrationTask<GetCredentialReportCommandInput>): Promise<GetCredentialReportCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetCredentialReportCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getGroup'*/
export const sdkIAMGetGroup = (input: SdkIntegrationTask<GetGroupCommandInput>): Promise<GetGroupCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetGroupCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getGroupPolicy'*/
export const sdkIAMGetGroupPolicy = (input: SdkIntegrationTask<GetGroupPolicyCommandInput>): Promise<GetGroupPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetGroupPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getInstanceProfile'*/
export const sdkIAMGetInstanceProfile = (input: SdkIntegrationTask<GetInstanceProfileCommandInput>): Promise<GetInstanceProfileCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetInstanceProfileCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getLoginProfile'*/
export const sdkIAMGetLoginProfile = (input: SdkIntegrationTask<GetLoginProfileCommandInput>): Promise<GetLoginProfileCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetLoginProfileCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getOpenIDConnectProvider'*/
export const sdkIAMGetOpenIDConnectProvider = (input: SdkIntegrationTask<GetOpenIDConnectProviderCommandInput>): Promise<GetOpenIDConnectProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetOpenIDConnectProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getOrganizationsAccessReport'*/
export const sdkIAMGetOrganizationsAccessReport = (input: SdkIntegrationTask<GetOrganizationsAccessReportCommandInput>): Promise<GetOrganizationsAccessReportCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetOrganizationsAccessReportCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getPolicy'*/
export const sdkIAMGetPolicy = (input: SdkIntegrationTask<GetPolicyCommandInput>): Promise<GetPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getPolicyVersion'*/
export const sdkIAMGetPolicyVersion = (input: SdkIntegrationTask<GetPolicyVersionCommandInput>): Promise<GetPolicyVersionCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetPolicyVersionCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getRole'*/
export const sdkIAMGetRole = (input: SdkIntegrationTask<GetRoleCommandInput>): Promise<GetRoleCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetRoleCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getRolePolicy'*/
export const sdkIAMGetRolePolicy = (input: SdkIntegrationTask<GetRolePolicyCommandInput>): Promise<GetRolePolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetRolePolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getSAMLProvider'*/
export const sdkIAMGetSAMLProvider = (input: SdkIntegrationTask<GetSAMLProviderCommandInput>): Promise<GetSAMLProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetSAMLProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getSSHPublicKey'*/
export const sdkIAMGetSSHPublicKey = (input: SdkIntegrationTask<GetSSHPublicKeyCommandInput>): Promise<GetSSHPublicKeyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetSSHPublicKeyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getServerCertificate'*/
export const sdkIAMGetServerCertificate = (input: SdkIntegrationTask<GetServerCertificateCommandInput>): Promise<GetServerCertificateCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetServerCertificateCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getServiceLastAccessedDetails'*/
export const sdkIAMGetServiceLastAccessedDetails = (input: SdkIntegrationTask<GetServiceLastAccessedDetailsCommandInput>): Promise<GetServiceLastAccessedDetailsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetServiceLastAccessedDetailsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getServiceLastAccessedDetailsWithEntities'*/
export const sdkIAMGetServiceLastAccessedDetailsWithEntities = (input: SdkIntegrationTask<GetServiceLastAccessedDetailsWithEntitiesCommandInput>): Promise<GetServiceLastAccessedDetailsWithEntitiesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetServiceLastAccessedDetailsWithEntitiesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getServiceLinkedRoleDeletionStatus'*/
export const sdkIAMGetServiceLinkedRoleDeletionStatus = (input: SdkIntegrationTask<GetServiceLinkedRoleDeletionStatusCommandInput>): Promise<GetServiceLinkedRoleDeletionStatusCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetServiceLinkedRoleDeletionStatusCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getUser'*/
export const sdkIAMGetUser = (input: SdkIntegrationTask<GetUserCommandInput>): Promise<GetUserCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetUserCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:getUserPolicy'*/
export const sdkIAMGetUserPolicy = (input: SdkIntegrationTask<GetUserPolicyCommandInput>): Promise<GetUserPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new GetUserPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listAccessKeys'*/
export const sdkIAMListAccessKeys = (input: SdkIntegrationTask<ListAccessKeysCommandInput>): Promise<ListAccessKeysCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListAccessKeysCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listAccountAliases'*/
export const sdkIAMListAccountAliases = (input: SdkIntegrationTask<ListAccountAliasesCommandInput>): Promise<ListAccountAliasesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListAccountAliasesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listAttachedGroupPolicies'*/
export const sdkIAMListAttachedGroupPolicies = (input: SdkIntegrationTask<ListAttachedGroupPoliciesCommandInput>): Promise<ListAttachedGroupPoliciesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListAttachedGroupPoliciesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listAttachedRolePolicies'*/
export const sdkIAMListAttachedRolePolicies = (input: SdkIntegrationTask<ListAttachedRolePoliciesCommandInput>): Promise<ListAttachedRolePoliciesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListAttachedRolePoliciesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listAttachedUserPolicies'*/
export const sdkIAMListAttachedUserPolicies = (input: SdkIntegrationTask<ListAttachedUserPoliciesCommandInput>): Promise<ListAttachedUserPoliciesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListAttachedUserPoliciesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listEntitiesForPolicy'*/
export const sdkIAMListEntitiesForPolicy = (input: SdkIntegrationTask<ListEntitiesForPolicyCommandInput>): Promise<ListEntitiesForPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListEntitiesForPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listGroupPolicies'*/
export const sdkIAMListGroupPolicies = (input: SdkIntegrationTask<ListGroupPoliciesCommandInput>): Promise<ListGroupPoliciesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListGroupPoliciesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listGroups'*/
export const sdkIAMListGroups = (input: SdkIntegrationTask<ListGroupsCommandInput>): Promise<ListGroupsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListGroupsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listGroupsForUser'*/
export const sdkIAMListGroupsForUser = (input: SdkIntegrationTask<ListGroupsForUserCommandInput>): Promise<ListGroupsForUserCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListGroupsForUserCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listInstanceProfileTags'*/
export const sdkIAMListInstanceProfileTags = (input: SdkIntegrationTask<ListInstanceProfileTagsCommandInput>): Promise<ListInstanceProfileTagsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListInstanceProfileTagsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listInstanceProfiles'*/
export const sdkIAMListInstanceProfiles = (input: SdkIntegrationTask<ListInstanceProfilesCommandInput>): Promise<ListInstanceProfilesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListInstanceProfilesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listInstanceProfilesForRole'*/
export const sdkIAMListInstanceProfilesForRole = (input: SdkIntegrationTask<ListInstanceProfilesForRoleCommandInput>): Promise<ListInstanceProfilesForRoleCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListInstanceProfilesForRoleCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listMFADeviceTags'*/
export const sdkIAMListMFADeviceTags = (input: SdkIntegrationTask<ListMFADeviceTagsCommandInput>): Promise<ListMFADeviceTagsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListMFADeviceTagsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listMFADevices'*/
export const sdkIAMListMFADevices = (input: SdkIntegrationTask<ListMFADevicesCommandInput>): Promise<ListMFADevicesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListMFADevicesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listOpenIDConnectProviderTags'*/
export const sdkIAMListOpenIDConnectProviderTags = (input: SdkIntegrationTask<ListOpenIDConnectProviderTagsCommandInput>): Promise<ListOpenIDConnectProviderTagsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListOpenIDConnectProviderTagsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listOpenIDConnectProviders'*/
export const sdkIAMListOpenIDConnectProviders = (input: SdkIntegrationTask<ListOpenIDConnectProvidersCommandInput>): Promise<ListOpenIDConnectProvidersCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListOpenIDConnectProvidersCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listPolicies'*/
export const sdkIAMListPolicies = (input: SdkIntegrationTask<ListPoliciesCommandInput>): Promise<ListPoliciesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListPoliciesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listPoliciesGrantingServiceAccess'*/
export const sdkIAMListPoliciesGrantingServiceAccess = (input: SdkIntegrationTask<ListPoliciesGrantingServiceAccessCommandInput>): Promise<ListPoliciesGrantingServiceAccessCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListPoliciesGrantingServiceAccessCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listPolicyTags'*/
export const sdkIAMListPolicyTags = (input: SdkIntegrationTask<ListPolicyTagsCommandInput>): Promise<ListPolicyTagsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListPolicyTagsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listPolicyVersions'*/
export const sdkIAMListPolicyVersions = (input: SdkIntegrationTask<ListPolicyVersionsCommandInput>): Promise<ListPolicyVersionsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListPolicyVersionsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listRolePolicies'*/
export const sdkIAMListRolePolicies = (input: SdkIntegrationTask<ListRolePoliciesCommandInput>): Promise<ListRolePoliciesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListRolePoliciesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listRoleTags'*/
export const sdkIAMListRoleTags = (input: SdkIntegrationTask<ListRoleTagsCommandInput>): Promise<ListRoleTagsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListRoleTagsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listRoles'*/
export const sdkIAMListRoles = (input: SdkIntegrationTask<ListRolesCommandInput>): Promise<ListRolesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListRolesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listSAMLProviderTags'*/
export const sdkIAMListSAMLProviderTags = (input: SdkIntegrationTask<ListSAMLProviderTagsCommandInput>): Promise<ListSAMLProviderTagsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListSAMLProviderTagsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listSAMLProviders'*/
export const sdkIAMListSAMLProviders = (input: SdkIntegrationTask<ListSAMLProvidersCommandInput>): Promise<ListSAMLProvidersCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListSAMLProvidersCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listSSHPublicKeys'*/
export const sdkIAMListSSHPublicKeys = (input: SdkIntegrationTask<ListSSHPublicKeysCommandInput>): Promise<ListSSHPublicKeysCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListSSHPublicKeysCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listServerCertificateTags'*/
export const sdkIAMListServerCertificateTags = (input: SdkIntegrationTask<ListServerCertificateTagsCommandInput>): Promise<ListServerCertificateTagsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListServerCertificateTagsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listServerCertificates'*/
export const sdkIAMListServerCertificates = (input: SdkIntegrationTask<ListServerCertificatesCommandInput>): Promise<ListServerCertificatesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListServerCertificatesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listServiceSpecificCredentials'*/
export const sdkIAMListServiceSpecificCredentials = (input: SdkIntegrationTask<ListServiceSpecificCredentialsCommandInput>): Promise<ListServiceSpecificCredentialsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListServiceSpecificCredentialsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listSigningCertificates'*/
export const sdkIAMListSigningCertificates = (input: SdkIntegrationTask<ListSigningCertificatesCommandInput>): Promise<ListSigningCertificatesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListSigningCertificatesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listUserPolicies'*/
export const sdkIAMListUserPolicies = (input: SdkIntegrationTask<ListUserPoliciesCommandInput>): Promise<ListUserPoliciesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListUserPoliciesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listUserTags'*/
export const sdkIAMListUserTags = (input: SdkIntegrationTask<ListUserTagsCommandInput>): Promise<ListUserTagsCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListUserTagsCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listUsers'*/
export const sdkIAMListUsers = (input: SdkIntegrationTask<ListUsersCommandInput>): Promise<ListUsersCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListUsersCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:listVirtualMFADevices'*/
export const sdkIAMListVirtualMFADevices = (input: SdkIntegrationTask<ListVirtualMFADevicesCommandInput>): Promise<ListVirtualMFADevicesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ListVirtualMFADevicesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:putGroupPolicy'*/
export const sdkIAMPutGroupPolicy = (input: SdkIntegrationTask<PutGroupPolicyCommandInput>): Promise<PutGroupPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new PutGroupPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:putRolePermissionsBoundary'*/
export const sdkIAMPutRolePermissionsBoundary = (input: SdkIntegrationTask<PutRolePermissionsBoundaryCommandInput>): Promise<PutRolePermissionsBoundaryCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new PutRolePermissionsBoundaryCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:putRolePolicy'*/
export const sdkIAMPutRolePolicy = (input: SdkIntegrationTask<PutRolePolicyCommandInput>): Promise<PutRolePolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new PutRolePolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:putUserPermissionsBoundary'*/
export const sdkIAMPutUserPermissionsBoundary = (input: SdkIntegrationTask<PutUserPermissionsBoundaryCommandInput>): Promise<PutUserPermissionsBoundaryCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new PutUserPermissionsBoundaryCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:putUserPolicy'*/
export const sdkIAMPutUserPolicy = (input: SdkIntegrationTask<PutUserPolicyCommandInput>): Promise<PutUserPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new PutUserPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:removeClientIDFromOpenIDConnectProvider'*/
export const sdkIAMRemoveClientIDFromOpenIDConnectProvider = (input: SdkIntegrationTask<RemoveClientIDFromOpenIDConnectProviderCommandInput>): Promise<RemoveClientIDFromOpenIDConnectProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new RemoveClientIDFromOpenIDConnectProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:removeRoleFromInstanceProfile'*/
export const sdkIAMRemoveRoleFromInstanceProfile = (input: SdkIntegrationTask<RemoveRoleFromInstanceProfileCommandInput>): Promise<RemoveRoleFromInstanceProfileCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new RemoveRoleFromInstanceProfileCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:removeUserFromGroup'*/
export const sdkIAMRemoveUserFromGroup = (input: SdkIntegrationTask<RemoveUserFromGroupCommandInput>): Promise<RemoveUserFromGroupCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new RemoveUserFromGroupCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:resetServiceSpecificCredential'*/
export const sdkIAMResetServiceSpecificCredential = (input: SdkIntegrationTask<ResetServiceSpecificCredentialCommandInput>): Promise<ResetServiceSpecificCredentialCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ResetServiceSpecificCredentialCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:resyncMFADevice'*/
export const sdkIAMResyncMFADevice = (input: SdkIntegrationTask<ResyncMFADeviceCommandInput>): Promise<ResyncMFADeviceCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new ResyncMFADeviceCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:setDefaultPolicyVersion'*/
export const sdkIAMSetDefaultPolicyVersion = (input: SdkIntegrationTask<SetDefaultPolicyVersionCommandInput>): Promise<SetDefaultPolicyVersionCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new SetDefaultPolicyVersionCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:setSecurityTokenServicePreferences'*/
export const sdkIAMSetSecurityTokenServicePreferences = (input: SdkIntegrationTask<SetSecurityTokenServicePreferencesCommandInput>): Promise<SetSecurityTokenServicePreferencesCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new SetSecurityTokenServicePreferencesCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:simulateCustomPolicy'*/
export const sdkIAMSimulateCustomPolicy = (input: SdkIntegrationTask<SimulateCustomPolicyCommandInput>): Promise<SimulateCustomPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new SimulateCustomPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:simulatePrincipalPolicy'*/
export const sdkIAMSimulatePrincipalPolicy = (input: SdkIntegrationTask<SimulatePrincipalPolicyCommandInput>): Promise<SimulatePrincipalPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new SimulatePrincipalPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:tagInstanceProfile'*/
export const sdkIAMTagInstanceProfile = (input: SdkIntegrationTask<TagInstanceProfileCommandInput>): Promise<TagInstanceProfileCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new TagInstanceProfileCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:tagMFADevice'*/
export const sdkIAMTagMFADevice = (input: SdkIntegrationTask<TagMFADeviceCommandInput>): Promise<TagMFADeviceCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new TagMFADeviceCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:tagOpenIDConnectProvider'*/
export const sdkIAMTagOpenIDConnectProvider = (input: SdkIntegrationTask<TagOpenIDConnectProviderCommandInput>): Promise<TagOpenIDConnectProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new TagOpenIDConnectProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:tagPolicy'*/
export const sdkIAMTagPolicy = (input: SdkIntegrationTask<TagPolicyCommandInput>): Promise<TagPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new TagPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:tagRole'*/
export const sdkIAMTagRole = (input: SdkIntegrationTask<TagRoleCommandInput>): Promise<TagRoleCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new TagRoleCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:tagSAMLProvider'*/
export const sdkIAMTagSAMLProvider = (input: SdkIntegrationTask<TagSAMLProviderCommandInput>): Promise<TagSAMLProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new TagSAMLProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:tagServerCertificate'*/
export const sdkIAMTagServerCertificate = (input: SdkIntegrationTask<TagServerCertificateCommandInput>): Promise<TagServerCertificateCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new TagServerCertificateCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:tagUser'*/
export const sdkIAMTagUser = (input: SdkIntegrationTask<TagUserCommandInput>): Promise<TagUserCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new TagUserCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:untagInstanceProfile'*/
export const sdkIAMUntagInstanceProfile = (input: SdkIntegrationTask<UntagInstanceProfileCommandInput>): Promise<UntagInstanceProfileCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UntagInstanceProfileCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:untagMFADevice'*/
export const sdkIAMUntagMFADevice = (input: SdkIntegrationTask<UntagMFADeviceCommandInput>): Promise<UntagMFADeviceCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UntagMFADeviceCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:untagOpenIDConnectProvider'*/
export const sdkIAMUntagOpenIDConnectProvider = (input: SdkIntegrationTask<UntagOpenIDConnectProviderCommandInput>): Promise<UntagOpenIDConnectProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UntagOpenIDConnectProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:untagPolicy'*/
export const sdkIAMUntagPolicy = (input: SdkIntegrationTask<UntagPolicyCommandInput>): Promise<UntagPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UntagPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:untagRole'*/
export const sdkIAMUntagRole = (input: SdkIntegrationTask<UntagRoleCommandInput>): Promise<UntagRoleCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UntagRoleCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:untagSAMLProvider'*/
export const sdkIAMUntagSAMLProvider = (input: SdkIntegrationTask<UntagSAMLProviderCommandInput>): Promise<UntagSAMLProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UntagSAMLProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:untagServerCertificate'*/
export const sdkIAMUntagServerCertificate = (input: SdkIntegrationTask<UntagServerCertificateCommandInput>): Promise<UntagServerCertificateCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UntagServerCertificateCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:untagUser'*/
export const sdkIAMUntagUser = (input: SdkIntegrationTask<UntagUserCommandInput>): Promise<UntagUserCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UntagUserCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateAccessKey'*/
export const sdkIAMUpdateAccessKey = (input: SdkIntegrationTask<UpdateAccessKeyCommandInput>): Promise<UpdateAccessKeyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateAccessKeyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateAccountPasswordPolicy'*/
export const sdkIAMUpdateAccountPasswordPolicy = (input: SdkIntegrationTask<UpdateAccountPasswordPolicyCommandInput>): Promise<UpdateAccountPasswordPolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateAccountPasswordPolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateAssumeRolePolicy'*/
export const sdkIAMUpdateAssumeRolePolicy = (input: SdkIntegrationTask<UpdateAssumeRolePolicyCommandInput>): Promise<UpdateAssumeRolePolicyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateAssumeRolePolicyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateGroup'*/
export const sdkIAMUpdateGroup = (input: SdkIntegrationTask<UpdateGroupCommandInput>): Promise<UpdateGroupCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateGroupCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateLoginProfile'*/
export const sdkIAMUpdateLoginProfile = (input: SdkIntegrationTask<UpdateLoginProfileCommandInput>): Promise<UpdateLoginProfileCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateLoginProfileCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateOpenIDConnectProviderThumbprint'*/
export const sdkIAMUpdateOpenIDConnectProviderThumbprint = (input: SdkIntegrationTask<UpdateOpenIDConnectProviderThumbprintCommandInput>): Promise<UpdateOpenIDConnectProviderThumbprintCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateOpenIDConnectProviderThumbprintCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateRole'*/
export const sdkIAMUpdateRole = (input: SdkIntegrationTask<UpdateRoleCommandInput>): Promise<UpdateRoleCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateRoleCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateRoleDescription'*/
export const sdkIAMUpdateRoleDescription = (input: SdkIntegrationTask<UpdateRoleDescriptionCommandInput>): Promise<UpdateRoleDescriptionCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateRoleDescriptionCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateSAMLProvider'*/
export const sdkIAMUpdateSAMLProvider = (input: SdkIntegrationTask<UpdateSAMLProviderCommandInput>): Promise<UpdateSAMLProviderCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateSAMLProviderCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateSSHPublicKey'*/
export const sdkIAMUpdateSSHPublicKey = (input: SdkIntegrationTask<UpdateSSHPublicKeyCommandInput>): Promise<UpdateSSHPublicKeyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateSSHPublicKeyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateServerCertificate'*/
export const sdkIAMUpdateServerCertificate = (input: SdkIntegrationTask<UpdateServerCertificateCommandInput>): Promise<UpdateServerCertificateCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateServerCertificateCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateServiceSpecificCredential'*/
export const sdkIAMUpdateServiceSpecificCredential = (input: SdkIntegrationTask<UpdateServiceSpecificCredentialCommandInput>): Promise<UpdateServiceSpecificCredentialCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateServiceSpecificCredentialCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateSigningCertificate'*/
export const sdkIAMUpdateSigningCertificate = (input: SdkIntegrationTask<UpdateSigningCertificateCommandInput>): Promise<UpdateSigningCertificateCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateSigningCertificateCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:updateUser'*/
export const sdkIAMUpdateUser = (input: SdkIntegrationTask<UpdateUserCommandInput>): Promise<UpdateUserCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UpdateUserCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:uploadSSHPublicKey'*/
export const sdkIAMUploadSSHPublicKey = (input: SdkIntegrationTask<UploadSSHPublicKeyCommandInput>): Promise<UploadSSHPublicKeyCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UploadSSHPublicKeyCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:uploadServerCertificate'*/
export const sdkIAMUploadServerCertificate = (input: SdkIntegrationTask<UploadServerCertificateCommandInput>): Promise<UploadServerCertificateCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UploadServerCertificateCommand(input.parameters);
    return iam.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:iam:uploadSigningCertificate'*/
export const sdkIAMUploadSigningCertificate = (input: SdkIntegrationTask<UploadSigningCertificateCommandInput>): Promise<UploadSigningCertificateCommandOutput> => {
    const iam = new IAMClient(clientConfig);
    const command = new UploadSigningCertificateCommand(input.parameters);
    return iam.send(command);
};

