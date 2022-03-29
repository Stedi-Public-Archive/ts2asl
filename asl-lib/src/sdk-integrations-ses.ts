import { SESClient } from "@aws-sdk/client-ses";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { CloneReceiptRuleSetCommandInput, CloneReceiptRuleSetCommandOutput, CloneReceiptRuleSetCommand } from "@aws-sdk/client-ses";
import { CreateConfigurationSetCommandInput, CreateConfigurationSetCommandOutput, CreateConfigurationSetCommand } from "@aws-sdk/client-ses";
import { CreateConfigurationSetEventDestinationCommandInput, CreateConfigurationSetEventDestinationCommandOutput, CreateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-ses";
import { CreateConfigurationSetTrackingOptionsCommandInput, CreateConfigurationSetTrackingOptionsCommandOutput, CreateConfigurationSetTrackingOptionsCommand } from "@aws-sdk/client-ses";
import { CreateCustomVerificationEmailTemplateCommandInput, CreateCustomVerificationEmailTemplateCommandOutput, CreateCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-ses";
import { CreateReceiptFilterCommandInput, CreateReceiptFilterCommandOutput, CreateReceiptFilterCommand } from "@aws-sdk/client-ses";
import { CreateReceiptRuleCommandInput, CreateReceiptRuleCommandOutput, CreateReceiptRuleCommand } from "@aws-sdk/client-ses";
import { CreateReceiptRuleSetCommandInput, CreateReceiptRuleSetCommandOutput, CreateReceiptRuleSetCommand } from "@aws-sdk/client-ses";
import { CreateTemplateCommandInput, CreateTemplateCommandOutput, CreateTemplateCommand } from "@aws-sdk/client-ses";
import { DeleteConfigurationSetCommandInput, DeleteConfigurationSetCommandOutput, DeleteConfigurationSetCommand } from "@aws-sdk/client-ses";
import { DeleteConfigurationSetEventDestinationCommandInput, DeleteConfigurationSetEventDestinationCommandOutput, DeleteConfigurationSetEventDestinationCommand } from "@aws-sdk/client-ses";
import { DeleteConfigurationSetTrackingOptionsCommandInput, DeleteConfigurationSetTrackingOptionsCommandOutput, DeleteConfigurationSetTrackingOptionsCommand } from "@aws-sdk/client-ses";
import { DeleteCustomVerificationEmailTemplateCommandInput, DeleteCustomVerificationEmailTemplateCommandOutput, DeleteCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-ses";
import { DeleteIdentityCommandInput, DeleteIdentityCommandOutput, DeleteIdentityCommand } from "@aws-sdk/client-ses";
import { DeleteIdentityPolicyCommandInput, DeleteIdentityPolicyCommandOutput, DeleteIdentityPolicyCommand } from "@aws-sdk/client-ses";
import { DeleteReceiptFilterCommandInput, DeleteReceiptFilterCommandOutput, DeleteReceiptFilterCommand } from "@aws-sdk/client-ses";
import { DeleteReceiptRuleCommandInput, DeleteReceiptRuleCommandOutput, DeleteReceiptRuleCommand } from "@aws-sdk/client-ses";
import { DeleteReceiptRuleSetCommandInput, DeleteReceiptRuleSetCommandOutput, DeleteReceiptRuleSetCommand } from "@aws-sdk/client-ses";
import { DeleteTemplateCommandInput, DeleteTemplateCommandOutput, DeleteTemplateCommand } from "@aws-sdk/client-ses";
import { DeleteVerifiedEmailAddressCommandInput, DeleteVerifiedEmailAddressCommandOutput, DeleteVerifiedEmailAddressCommand } from "@aws-sdk/client-ses";
import { DescribeActiveReceiptRuleSetCommandInput, DescribeActiveReceiptRuleSetCommandOutput, DescribeActiveReceiptRuleSetCommand } from "@aws-sdk/client-ses";
import { DescribeConfigurationSetCommandInput, DescribeConfigurationSetCommandOutput, DescribeConfigurationSetCommand } from "@aws-sdk/client-ses";
import { DescribeReceiptRuleCommandInput, DescribeReceiptRuleCommandOutput, DescribeReceiptRuleCommand } from "@aws-sdk/client-ses";
import { DescribeReceiptRuleSetCommandInput, DescribeReceiptRuleSetCommandOutput, DescribeReceiptRuleSetCommand } from "@aws-sdk/client-ses";
import { GetAccountSendingEnabledCommandInput, GetAccountSendingEnabledCommandOutput, GetAccountSendingEnabledCommand } from "@aws-sdk/client-ses";
import { GetCustomVerificationEmailTemplateCommandInput, GetCustomVerificationEmailTemplateCommandOutput, GetCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-ses";
import { GetIdentityDkimAttributesCommandInput, GetIdentityDkimAttributesCommandOutput, GetIdentityDkimAttributesCommand } from "@aws-sdk/client-ses";
import { GetIdentityMailFromDomainAttributesCommandInput, GetIdentityMailFromDomainAttributesCommandOutput, GetIdentityMailFromDomainAttributesCommand } from "@aws-sdk/client-ses";
import { GetIdentityNotificationAttributesCommandInput, GetIdentityNotificationAttributesCommandOutput, GetIdentityNotificationAttributesCommand } from "@aws-sdk/client-ses";
import { GetIdentityPoliciesCommandInput, GetIdentityPoliciesCommandOutput, GetIdentityPoliciesCommand } from "@aws-sdk/client-ses";
import { GetIdentityVerificationAttributesCommandInput, GetIdentityVerificationAttributesCommandOutput, GetIdentityVerificationAttributesCommand } from "@aws-sdk/client-ses";
import { GetSendQuotaCommandInput, GetSendQuotaCommandOutput, GetSendQuotaCommand } from "@aws-sdk/client-ses";
import { GetSendStatisticsCommandInput, GetSendStatisticsCommandOutput, GetSendStatisticsCommand } from "@aws-sdk/client-ses";
import { GetTemplateCommandInput, GetTemplateCommandOutput, GetTemplateCommand } from "@aws-sdk/client-ses";
import { ListConfigurationSetsCommandInput, ListConfigurationSetsCommandOutput, ListConfigurationSetsCommand } from "@aws-sdk/client-ses";
import { ListCustomVerificationEmailTemplatesCommandInput, ListCustomVerificationEmailTemplatesCommandOutput, ListCustomVerificationEmailTemplatesCommand } from "@aws-sdk/client-ses";
import { ListIdentitiesCommandInput, ListIdentitiesCommandOutput, ListIdentitiesCommand } from "@aws-sdk/client-ses";
import { ListIdentityPoliciesCommandInput, ListIdentityPoliciesCommandOutput, ListIdentityPoliciesCommand } from "@aws-sdk/client-ses";
import { ListReceiptFiltersCommandInput, ListReceiptFiltersCommandOutput, ListReceiptFiltersCommand } from "@aws-sdk/client-ses";
import { ListReceiptRuleSetsCommandInput, ListReceiptRuleSetsCommandOutput, ListReceiptRuleSetsCommand } from "@aws-sdk/client-ses";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput, ListTemplatesCommand } from "@aws-sdk/client-ses";
import { ListVerifiedEmailAddressesCommandInput, ListVerifiedEmailAddressesCommandOutput, ListVerifiedEmailAddressesCommand } from "@aws-sdk/client-ses";
import { PutConfigurationSetDeliveryOptionsCommandInput, PutConfigurationSetDeliveryOptionsCommandOutput, PutConfigurationSetDeliveryOptionsCommand } from "@aws-sdk/client-ses";
import { PutIdentityPolicyCommandInput, PutIdentityPolicyCommandOutput, PutIdentityPolicyCommand } from "@aws-sdk/client-ses";
import { ReorderReceiptRuleSetCommandInput, ReorderReceiptRuleSetCommandOutput, ReorderReceiptRuleSetCommand } from "@aws-sdk/client-ses";
import { SendBounceCommandInput, SendBounceCommandOutput, SendBounceCommand } from "@aws-sdk/client-ses";
import { SendBulkTemplatedEmailCommandInput, SendBulkTemplatedEmailCommandOutput, SendBulkTemplatedEmailCommand } from "@aws-sdk/client-ses";
import { SendCustomVerificationEmailCommandInput, SendCustomVerificationEmailCommandOutput, SendCustomVerificationEmailCommand } from "@aws-sdk/client-ses";
import { SendEmailCommandInput, SendEmailCommandOutput, SendEmailCommand } from "@aws-sdk/client-ses";
import { SendRawEmailCommandInput, SendRawEmailCommandOutput, SendRawEmailCommand } from "@aws-sdk/client-ses";
import { SendTemplatedEmailCommandInput, SendTemplatedEmailCommandOutput, SendTemplatedEmailCommand } from "@aws-sdk/client-ses";
import { SetActiveReceiptRuleSetCommandInput, SetActiveReceiptRuleSetCommandOutput, SetActiveReceiptRuleSetCommand } from "@aws-sdk/client-ses";
import { SetIdentityDkimEnabledCommandInput, SetIdentityDkimEnabledCommandOutput, SetIdentityDkimEnabledCommand } from "@aws-sdk/client-ses";
import { SetIdentityFeedbackForwardingEnabledCommandInput, SetIdentityFeedbackForwardingEnabledCommandOutput, SetIdentityFeedbackForwardingEnabledCommand } from "@aws-sdk/client-ses";
import { SetIdentityHeadersInNotificationsEnabledCommandInput, SetIdentityHeadersInNotificationsEnabledCommandOutput, SetIdentityHeadersInNotificationsEnabledCommand } from "@aws-sdk/client-ses";
import { SetIdentityMailFromDomainCommandInput, SetIdentityMailFromDomainCommandOutput, SetIdentityMailFromDomainCommand } from "@aws-sdk/client-ses";
import { SetIdentityNotificationTopicCommandInput, SetIdentityNotificationTopicCommandOutput, SetIdentityNotificationTopicCommand } from "@aws-sdk/client-ses";
import { SetReceiptRulePositionCommandInput, SetReceiptRulePositionCommandOutput, SetReceiptRulePositionCommand } from "@aws-sdk/client-ses";
import { TestRenderTemplateCommandInput, TestRenderTemplateCommandOutput, TestRenderTemplateCommand } from "@aws-sdk/client-ses";
import { UpdateAccountSendingEnabledCommandInput, UpdateAccountSendingEnabledCommandOutput, UpdateAccountSendingEnabledCommand } from "@aws-sdk/client-ses";
import { UpdateConfigurationSetEventDestinationCommandInput, UpdateConfigurationSetEventDestinationCommandOutput, UpdateConfigurationSetEventDestinationCommand } from "@aws-sdk/client-ses";
import { UpdateConfigurationSetReputationMetricsEnabledCommandInput, UpdateConfigurationSetReputationMetricsEnabledCommandOutput, UpdateConfigurationSetReputationMetricsEnabledCommand } from "@aws-sdk/client-ses";
import { UpdateConfigurationSetSendingEnabledCommandInput, UpdateConfigurationSetSendingEnabledCommandOutput, UpdateConfigurationSetSendingEnabledCommand } from "@aws-sdk/client-ses";
import { UpdateConfigurationSetTrackingOptionsCommandInput, UpdateConfigurationSetTrackingOptionsCommandOutput, UpdateConfigurationSetTrackingOptionsCommand } from "@aws-sdk/client-ses";
import { UpdateCustomVerificationEmailTemplateCommandInput, UpdateCustomVerificationEmailTemplateCommandOutput, UpdateCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-ses";
import { UpdateReceiptRuleCommandInput, UpdateReceiptRuleCommandOutput, UpdateReceiptRuleCommand } from "@aws-sdk/client-ses";
import { UpdateTemplateCommandInput, UpdateTemplateCommandOutput, UpdateTemplateCommand } from "@aws-sdk/client-ses";
import { VerifyDomainDkimCommandInput, VerifyDomainDkimCommandOutput, VerifyDomainDkimCommand } from "@aws-sdk/client-ses";
import { VerifyDomainIdentityCommandInput, VerifyDomainIdentityCommandOutput, VerifyDomainIdentityCommand } from "@aws-sdk/client-ses";
import { VerifyEmailAddressCommandInput, VerifyEmailAddressCommandOutput, VerifyEmailAddressCommand } from "@aws-sdk/client-ses";
import { VerifyEmailIdentityCommandInput, VerifyEmailIdentityCommandOutput, VerifyEmailIdentityCommand } from "@aws-sdk/client-ses";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:cloneReceiptRuleSet'*/
export const sdkSESCloneReceiptRuleSet = (input: SdkIntegrationTask<CloneReceiptRuleSetCommandInput>): Promise<CloneReceiptRuleSetCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new CloneReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createConfigurationSet'*/
export const sdkSESCreateConfigurationSet = (input: SdkIntegrationTask<CreateConfigurationSetCommandInput>): Promise<CreateConfigurationSetCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new CreateConfigurationSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createConfigurationSetEventDestination'*/
export const sdkSESCreateConfigurationSetEventDestination = (input: SdkIntegrationTask<CreateConfigurationSetEventDestinationCommandInput>): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new CreateConfigurationSetEventDestinationCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createConfigurationSetTrackingOptions'*/
export const sdkSESCreateConfigurationSetTrackingOptions = (input: SdkIntegrationTask<CreateConfigurationSetTrackingOptionsCommandInput>): Promise<CreateConfigurationSetTrackingOptionsCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new CreateConfigurationSetTrackingOptionsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createCustomVerificationEmailTemplate'*/
export const sdkSESCreateCustomVerificationEmailTemplate = (input: SdkIntegrationTask<CreateCustomVerificationEmailTemplateCommandInput>): Promise<CreateCustomVerificationEmailTemplateCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new CreateCustomVerificationEmailTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createReceiptFilter'*/
export const sdkSESCreateReceiptFilter = (input: SdkIntegrationTask<CreateReceiptFilterCommandInput>): Promise<CreateReceiptFilterCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new CreateReceiptFilterCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createReceiptRule'*/
export const sdkSESCreateReceiptRule = (input: SdkIntegrationTask<CreateReceiptRuleCommandInput>): Promise<CreateReceiptRuleCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new CreateReceiptRuleCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createReceiptRuleSet'*/
export const sdkSESCreateReceiptRuleSet = (input: SdkIntegrationTask<CreateReceiptRuleSetCommandInput>): Promise<CreateReceiptRuleSetCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new CreateReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createTemplate'*/
export const sdkSESCreateTemplate = (input: SdkIntegrationTask<CreateTemplateCommandInput>): Promise<CreateTemplateCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new CreateTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteConfigurationSet'*/
export const sdkSESDeleteConfigurationSet = (input: SdkIntegrationTask<DeleteConfigurationSetCommandInput>): Promise<DeleteConfigurationSetCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DeleteConfigurationSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteConfigurationSetEventDestination'*/
export const sdkSESDeleteConfigurationSetEventDestination = (input: SdkIntegrationTask<DeleteConfigurationSetEventDestinationCommandInput>): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DeleteConfigurationSetEventDestinationCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteConfigurationSetTrackingOptions'*/
export const sdkSESDeleteConfigurationSetTrackingOptions = (input: SdkIntegrationTask<DeleteConfigurationSetTrackingOptionsCommandInput>): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DeleteConfigurationSetTrackingOptionsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteCustomVerificationEmailTemplate'*/
export const sdkSESDeleteCustomVerificationEmailTemplate = (input: SdkIntegrationTask<DeleteCustomVerificationEmailTemplateCommandInput>): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DeleteCustomVerificationEmailTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteIdentity'*/
export const sdkSESDeleteIdentity = (input: SdkIntegrationTask<DeleteIdentityCommandInput>): Promise<DeleteIdentityCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DeleteIdentityCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteIdentityPolicy'*/
export const sdkSESDeleteIdentityPolicy = (input: SdkIntegrationTask<DeleteIdentityPolicyCommandInput>): Promise<DeleteIdentityPolicyCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DeleteIdentityPolicyCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteReceiptFilter'*/
export const sdkSESDeleteReceiptFilter = (input: SdkIntegrationTask<DeleteReceiptFilterCommandInput>): Promise<DeleteReceiptFilterCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DeleteReceiptFilterCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteReceiptRule'*/
export const sdkSESDeleteReceiptRule = (input: SdkIntegrationTask<DeleteReceiptRuleCommandInput>): Promise<DeleteReceiptRuleCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DeleteReceiptRuleCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteReceiptRuleSet'*/
export const sdkSESDeleteReceiptRuleSet = (input: SdkIntegrationTask<DeleteReceiptRuleSetCommandInput>): Promise<DeleteReceiptRuleSetCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DeleteReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteTemplate'*/
export const sdkSESDeleteTemplate = (input: SdkIntegrationTask<DeleteTemplateCommandInput>): Promise<DeleteTemplateCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DeleteTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteVerifiedEmailAddress'*/
export const sdkSESDeleteVerifiedEmailAddress = (input: SdkIntegrationTask<DeleteVerifiedEmailAddressCommandInput>): Promise<DeleteVerifiedEmailAddressCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DeleteVerifiedEmailAddressCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeActiveReceiptRuleSet'*/
export const sdkSESDescribeActiveReceiptRuleSet = (input: SdkIntegrationTask<DescribeActiveReceiptRuleSetCommandInput>): Promise<DescribeActiveReceiptRuleSetCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DescribeActiveReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeConfigurationSet'*/
export const sdkSESDescribeConfigurationSet = (input: SdkIntegrationTask<DescribeConfigurationSetCommandInput>): Promise<DescribeConfigurationSetCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DescribeConfigurationSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeReceiptRule'*/
export const sdkSESDescribeReceiptRule = (input: SdkIntegrationTask<DescribeReceiptRuleCommandInput>): Promise<DescribeReceiptRuleCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DescribeReceiptRuleCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeReceiptRuleSet'*/
export const sdkSESDescribeReceiptRuleSet = (input: SdkIntegrationTask<DescribeReceiptRuleSetCommandInput>): Promise<DescribeReceiptRuleSetCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new DescribeReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getAccountSendingEnabled'*/
export const sdkSESGetAccountSendingEnabled = (input: SdkIntegrationTask<GetAccountSendingEnabledCommandInput>): Promise<GetAccountSendingEnabledCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new GetAccountSendingEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getCustomVerificationEmailTemplate'*/
export const sdkSESGetCustomVerificationEmailTemplate = (input: SdkIntegrationTask<GetCustomVerificationEmailTemplateCommandInput>): Promise<GetCustomVerificationEmailTemplateCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new GetCustomVerificationEmailTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityDkimAttributes'*/
export const sdkSESGetIdentityDkimAttributes = (input: SdkIntegrationTask<GetIdentityDkimAttributesCommandInput>): Promise<GetIdentityDkimAttributesCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new GetIdentityDkimAttributesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityMailFromDomainAttributes'*/
export const sdkSESGetIdentityMailFromDomainAttributes = (input: SdkIntegrationTask<GetIdentityMailFromDomainAttributesCommandInput>): Promise<GetIdentityMailFromDomainAttributesCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new GetIdentityMailFromDomainAttributesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityNotificationAttributes'*/
export const sdkSESGetIdentityNotificationAttributes = (input: SdkIntegrationTask<GetIdentityNotificationAttributesCommandInput>): Promise<GetIdentityNotificationAttributesCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new GetIdentityNotificationAttributesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityPolicies'*/
export const sdkSESGetIdentityPolicies = (input: SdkIntegrationTask<GetIdentityPoliciesCommandInput>): Promise<GetIdentityPoliciesCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new GetIdentityPoliciesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityVerificationAttributes'*/
export const sdkSESGetIdentityVerificationAttributes = (input: SdkIntegrationTask<GetIdentityVerificationAttributesCommandInput>): Promise<GetIdentityVerificationAttributesCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new GetIdentityVerificationAttributesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getSendQuota'*/
export const sdkSESGetSendQuota = (input: SdkIntegrationTask<GetSendQuotaCommandInput>): Promise<GetSendQuotaCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new GetSendQuotaCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getSendStatistics'*/
export const sdkSESGetSendStatistics = (input: SdkIntegrationTask<GetSendStatisticsCommandInput>): Promise<GetSendStatisticsCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new GetSendStatisticsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getTemplate'*/
export const sdkSESGetTemplate = (input: SdkIntegrationTask<GetTemplateCommandInput>): Promise<GetTemplateCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new GetTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listConfigurationSets'*/
export const sdkSESListConfigurationSets = (input: SdkIntegrationTask<ListConfigurationSetsCommandInput>): Promise<ListConfigurationSetsCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new ListConfigurationSetsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listCustomVerificationEmailTemplates'*/
export const sdkSESListCustomVerificationEmailTemplates = (input: SdkIntegrationTask<ListCustomVerificationEmailTemplatesCommandInput>): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new ListCustomVerificationEmailTemplatesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listIdentities'*/
export const sdkSESListIdentities = (input: SdkIntegrationTask<ListIdentitiesCommandInput>): Promise<ListIdentitiesCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new ListIdentitiesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listIdentityPolicies'*/
export const sdkSESListIdentityPolicies = (input: SdkIntegrationTask<ListIdentityPoliciesCommandInput>): Promise<ListIdentityPoliciesCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new ListIdentityPoliciesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listReceiptFilters'*/
export const sdkSESListReceiptFilters = (input: SdkIntegrationTask<ListReceiptFiltersCommandInput>): Promise<ListReceiptFiltersCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new ListReceiptFiltersCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listReceiptRuleSets'*/
export const sdkSESListReceiptRuleSets = (input: SdkIntegrationTask<ListReceiptRuleSetsCommandInput>): Promise<ListReceiptRuleSetsCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new ListReceiptRuleSetsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listTemplates'*/
export const sdkSESListTemplates = (input: SdkIntegrationTask<ListTemplatesCommandInput>): Promise<ListTemplatesCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new ListTemplatesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listVerifiedEmailAddresses'*/
export const sdkSESListVerifiedEmailAddresses = (input: SdkIntegrationTask<ListVerifiedEmailAddressesCommandInput>): Promise<ListVerifiedEmailAddressesCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new ListVerifiedEmailAddressesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:putConfigurationSetDeliveryOptions'*/
export const sdkSESPutConfigurationSetDeliveryOptions = (input: SdkIntegrationTask<PutConfigurationSetDeliveryOptionsCommandInput>): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new PutConfigurationSetDeliveryOptionsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:putIdentityPolicy'*/
export const sdkSESPutIdentityPolicy = (input: SdkIntegrationTask<PutIdentityPolicyCommandInput>): Promise<PutIdentityPolicyCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new PutIdentityPolicyCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:reorderReceiptRuleSet'*/
export const sdkSESReorderReceiptRuleSet = (input: SdkIntegrationTask<ReorderReceiptRuleSetCommandInput>): Promise<ReorderReceiptRuleSetCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new ReorderReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendBounce'*/
export const sdkSESSendBounce = (input: SdkIntegrationTask<SendBounceCommandInput>): Promise<SendBounceCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SendBounceCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendBulkTemplatedEmail'*/
export const sdkSESSendBulkTemplatedEmail = (input: SdkIntegrationTask<SendBulkTemplatedEmailCommandInput>): Promise<SendBulkTemplatedEmailCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SendBulkTemplatedEmailCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendCustomVerificationEmail'*/
export const sdkSESSendCustomVerificationEmail = (input: SdkIntegrationTask<SendCustomVerificationEmailCommandInput>): Promise<SendCustomVerificationEmailCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SendCustomVerificationEmailCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendEmail'*/
export const sdkSESSendEmail = (input: SdkIntegrationTask<SendEmailCommandInput>): Promise<SendEmailCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SendEmailCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendRawEmail'*/
export const sdkSESSendRawEmail = (input: SdkIntegrationTask<SendRawEmailCommandInput>): Promise<SendRawEmailCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SendRawEmailCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendTemplatedEmail'*/
export const sdkSESSendTemplatedEmail = (input: SdkIntegrationTask<SendTemplatedEmailCommandInput>): Promise<SendTemplatedEmailCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SendTemplatedEmailCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setActiveReceiptRuleSet'*/
export const sdkSESSetActiveReceiptRuleSet = (input: SdkIntegrationTask<SetActiveReceiptRuleSetCommandInput>): Promise<SetActiveReceiptRuleSetCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SetActiveReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityDkimEnabled'*/
export const sdkSESSetIdentityDkimEnabled = (input: SdkIntegrationTask<SetIdentityDkimEnabledCommandInput>): Promise<SetIdentityDkimEnabledCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SetIdentityDkimEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityFeedbackForwardingEnabled'*/
export const sdkSESSetIdentityFeedbackForwardingEnabled = (input: SdkIntegrationTask<SetIdentityFeedbackForwardingEnabledCommandInput>): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SetIdentityFeedbackForwardingEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityHeadersInNotificationsEnabled'*/
export const sdkSESSetIdentityHeadersInNotificationsEnabled = (input: SdkIntegrationTask<SetIdentityHeadersInNotificationsEnabledCommandInput>): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SetIdentityHeadersInNotificationsEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityMailFromDomain'*/
export const sdkSESSetIdentityMailFromDomain = (input: SdkIntegrationTask<SetIdentityMailFromDomainCommandInput>): Promise<SetIdentityMailFromDomainCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SetIdentityMailFromDomainCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityNotificationTopic'*/
export const sdkSESSetIdentityNotificationTopic = (input: SdkIntegrationTask<SetIdentityNotificationTopicCommandInput>): Promise<SetIdentityNotificationTopicCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SetIdentityNotificationTopicCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setReceiptRulePosition'*/
export const sdkSESSetReceiptRulePosition = (input: SdkIntegrationTask<SetReceiptRulePositionCommandInput>): Promise<SetReceiptRulePositionCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new SetReceiptRulePositionCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:testRenderTemplate'*/
export const sdkSESTestRenderTemplate = (input: SdkIntegrationTask<TestRenderTemplateCommandInput>): Promise<TestRenderTemplateCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new TestRenderTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateAccountSendingEnabled'*/
export const sdkSESUpdateAccountSendingEnabled = (input: SdkIntegrationTask<UpdateAccountSendingEnabledCommandInput>): Promise<UpdateAccountSendingEnabledCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new UpdateAccountSendingEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetEventDestination'*/
export const sdkSESUpdateConfigurationSetEventDestination = (input: SdkIntegrationTask<UpdateConfigurationSetEventDestinationCommandInput>): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new UpdateConfigurationSetEventDestinationCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetReputationMetricsEnabled'*/
export const sdkSESUpdateConfigurationSetReputationMetricsEnabled = (input: SdkIntegrationTask<UpdateConfigurationSetReputationMetricsEnabledCommandInput>): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new UpdateConfigurationSetReputationMetricsEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetSendingEnabled'*/
export const sdkSESUpdateConfigurationSetSendingEnabled = (input: SdkIntegrationTask<UpdateConfigurationSetSendingEnabledCommandInput>): Promise<UpdateConfigurationSetSendingEnabledCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new UpdateConfigurationSetSendingEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetTrackingOptions'*/
export const sdkSESUpdateConfigurationSetTrackingOptions = (input: SdkIntegrationTask<UpdateConfigurationSetTrackingOptionsCommandInput>): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new UpdateConfigurationSetTrackingOptionsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateCustomVerificationEmailTemplate'*/
export const sdkSESUpdateCustomVerificationEmailTemplate = (input: SdkIntegrationTask<UpdateCustomVerificationEmailTemplateCommandInput>): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new UpdateCustomVerificationEmailTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateReceiptRule'*/
export const sdkSESUpdateReceiptRule = (input: SdkIntegrationTask<UpdateReceiptRuleCommandInput>): Promise<UpdateReceiptRuleCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new UpdateReceiptRuleCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateTemplate'*/
export const sdkSESUpdateTemplate = (input: SdkIntegrationTask<UpdateTemplateCommandInput>): Promise<UpdateTemplateCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new UpdateTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyDomainDkim'*/
export const sdkSESVerifyDomainDkim = (input: SdkIntegrationTask<VerifyDomainDkimCommandInput>): Promise<VerifyDomainDkimCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new VerifyDomainDkimCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyDomainIdentity'*/
export const sdkSESVerifyDomainIdentity = (input: SdkIntegrationTask<VerifyDomainIdentityCommandInput>): Promise<VerifyDomainIdentityCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new VerifyDomainIdentityCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyEmailAddress'*/
export const sdkSESVerifyEmailAddress = (input: SdkIntegrationTask<VerifyEmailAddressCommandInput>): Promise<VerifyEmailAddressCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new VerifyEmailAddressCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyEmailIdentity'*/
export const sdkSESVerifyEmailIdentity = (input: SdkIntegrationTask<VerifyEmailIdentityCommandInput>): Promise<VerifyEmailIdentityCommandOutput> => {
    const ses = new SESClient(clientConfig);
    const command = new VerifyEmailIdentityCommand(input.parameters);
    return ses.send(command);
};

