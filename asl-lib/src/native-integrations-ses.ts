import { SESClient } from "@aws-sdk/client-ses";
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
export const nativeSESCloneReceiptRuleSet = (input: SdkIntegrationTask<CloneReceiptRuleSetCommandInput>): Promise<CloneReceiptRuleSetCommandOutput> => {
    const ses = new SESClient({});
    const command = new CloneReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createConfigurationSet'*/
export const nativeSESCreateConfigurationSet = (input: SdkIntegrationTask<CreateConfigurationSetCommandInput>): Promise<CreateConfigurationSetCommandOutput> => {
    const ses = new SESClient({});
    const command = new CreateConfigurationSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createConfigurationSetEventDestination'*/
export const nativeSESCreateConfigurationSetEventDestination = (input: SdkIntegrationTask<CreateConfigurationSetEventDestinationCommandInput>): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
    const ses = new SESClient({});
    const command = new CreateConfigurationSetEventDestinationCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createConfigurationSetTrackingOptions'*/
export const nativeSESCreateConfigurationSetTrackingOptions = (input: SdkIntegrationTask<CreateConfigurationSetTrackingOptionsCommandInput>): Promise<CreateConfigurationSetTrackingOptionsCommandOutput> => {
    const ses = new SESClient({});
    const command = new CreateConfigurationSetTrackingOptionsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createCustomVerificationEmailTemplate'*/
export const nativeSESCreateCustomVerificationEmailTemplate = (input: SdkIntegrationTask<CreateCustomVerificationEmailTemplateCommandInput>): Promise<CreateCustomVerificationEmailTemplateCommandOutput> => {
    const ses = new SESClient({});
    const command = new CreateCustomVerificationEmailTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createReceiptFilter'*/
export const nativeSESCreateReceiptFilter = (input: SdkIntegrationTask<CreateReceiptFilterCommandInput>): Promise<CreateReceiptFilterCommandOutput> => {
    const ses = new SESClient({});
    const command = new CreateReceiptFilterCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createReceiptRule'*/
export const nativeSESCreateReceiptRule = (input: SdkIntegrationTask<CreateReceiptRuleCommandInput>): Promise<CreateReceiptRuleCommandOutput> => {
    const ses = new SESClient({});
    const command = new CreateReceiptRuleCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createReceiptRuleSet'*/
export const nativeSESCreateReceiptRuleSet = (input: SdkIntegrationTask<CreateReceiptRuleSetCommandInput>): Promise<CreateReceiptRuleSetCommandOutput> => {
    const ses = new SESClient({});
    const command = new CreateReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createTemplate'*/
export const nativeSESCreateTemplate = (input: SdkIntegrationTask<CreateTemplateCommandInput>): Promise<CreateTemplateCommandOutput> => {
    const ses = new SESClient({});
    const command = new CreateTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteConfigurationSet'*/
export const nativeSESDeleteConfigurationSet = (input: SdkIntegrationTask<DeleteConfigurationSetCommandInput>): Promise<DeleteConfigurationSetCommandOutput> => {
    const ses = new SESClient({});
    const command = new DeleteConfigurationSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteConfigurationSetEventDestination'*/
export const nativeSESDeleteConfigurationSetEventDestination = (input: SdkIntegrationTask<DeleteConfigurationSetEventDestinationCommandInput>): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
    const ses = new SESClient({});
    const command = new DeleteConfigurationSetEventDestinationCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteConfigurationSetTrackingOptions'*/
export const nativeSESDeleteConfigurationSetTrackingOptions = (input: SdkIntegrationTask<DeleteConfigurationSetTrackingOptionsCommandInput>): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput> => {
    const ses = new SESClient({});
    const command = new DeleteConfigurationSetTrackingOptionsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteCustomVerificationEmailTemplate'*/
export const nativeSESDeleteCustomVerificationEmailTemplate = (input: SdkIntegrationTask<DeleteCustomVerificationEmailTemplateCommandInput>): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> => {
    const ses = new SESClient({});
    const command = new DeleteCustomVerificationEmailTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteIdentity'*/
export const nativeSESDeleteIdentity = (input: SdkIntegrationTask<DeleteIdentityCommandInput>): Promise<DeleteIdentityCommandOutput> => {
    const ses = new SESClient({});
    const command = new DeleteIdentityCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteIdentityPolicy'*/
export const nativeSESDeleteIdentityPolicy = (input: SdkIntegrationTask<DeleteIdentityPolicyCommandInput>): Promise<DeleteIdentityPolicyCommandOutput> => {
    const ses = new SESClient({});
    const command = new DeleteIdentityPolicyCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteReceiptFilter'*/
export const nativeSESDeleteReceiptFilter = (input: SdkIntegrationTask<DeleteReceiptFilterCommandInput>): Promise<DeleteReceiptFilterCommandOutput> => {
    const ses = new SESClient({});
    const command = new DeleteReceiptFilterCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteReceiptRule'*/
export const nativeSESDeleteReceiptRule = (input: SdkIntegrationTask<DeleteReceiptRuleCommandInput>): Promise<DeleteReceiptRuleCommandOutput> => {
    const ses = new SESClient({});
    const command = new DeleteReceiptRuleCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteReceiptRuleSet'*/
export const nativeSESDeleteReceiptRuleSet = (input: SdkIntegrationTask<DeleteReceiptRuleSetCommandInput>): Promise<DeleteReceiptRuleSetCommandOutput> => {
    const ses = new SESClient({});
    const command = new DeleteReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteTemplate'*/
export const nativeSESDeleteTemplate = (input: SdkIntegrationTask<DeleteTemplateCommandInput>): Promise<DeleteTemplateCommandOutput> => {
    const ses = new SESClient({});
    const command = new DeleteTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteVerifiedEmailAddress'*/
export const nativeSESDeleteVerifiedEmailAddress = (input: SdkIntegrationTask<DeleteVerifiedEmailAddressCommandInput>): Promise<DeleteVerifiedEmailAddressCommandOutput> => {
    const ses = new SESClient({});
    const command = new DeleteVerifiedEmailAddressCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeActiveReceiptRuleSet'*/
export const nativeSESDescribeActiveReceiptRuleSet = (input: SdkIntegrationTask<DescribeActiveReceiptRuleSetCommandInput>): Promise<DescribeActiveReceiptRuleSetCommandOutput> => {
    const ses = new SESClient({});
    const command = new DescribeActiveReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeConfigurationSet'*/
export const nativeSESDescribeConfigurationSet = (input: SdkIntegrationTask<DescribeConfigurationSetCommandInput>): Promise<DescribeConfigurationSetCommandOutput> => {
    const ses = new SESClient({});
    const command = new DescribeConfigurationSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeReceiptRule'*/
export const nativeSESDescribeReceiptRule = (input: SdkIntegrationTask<DescribeReceiptRuleCommandInput>): Promise<DescribeReceiptRuleCommandOutput> => {
    const ses = new SESClient({});
    const command = new DescribeReceiptRuleCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeReceiptRuleSet'*/
export const nativeSESDescribeReceiptRuleSet = (input: SdkIntegrationTask<DescribeReceiptRuleSetCommandInput>): Promise<DescribeReceiptRuleSetCommandOutput> => {
    const ses = new SESClient({});
    const command = new DescribeReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getAccountSendingEnabled'*/
export const nativeSESGetAccountSendingEnabled = (input: SdkIntegrationTask<GetAccountSendingEnabledCommandInput>): Promise<GetAccountSendingEnabledCommandOutput> => {
    const ses = new SESClient({});
    const command = new GetAccountSendingEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getCustomVerificationEmailTemplate'*/
export const nativeSESGetCustomVerificationEmailTemplate = (input: SdkIntegrationTask<GetCustomVerificationEmailTemplateCommandInput>): Promise<GetCustomVerificationEmailTemplateCommandOutput> => {
    const ses = new SESClient({});
    const command = new GetCustomVerificationEmailTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityDkimAttributes'*/
export const nativeSESGetIdentityDkimAttributes = (input: SdkIntegrationTask<GetIdentityDkimAttributesCommandInput>): Promise<GetIdentityDkimAttributesCommandOutput> => {
    const ses = new SESClient({});
    const command = new GetIdentityDkimAttributesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityMailFromDomainAttributes'*/
export const nativeSESGetIdentityMailFromDomainAttributes = (input: SdkIntegrationTask<GetIdentityMailFromDomainAttributesCommandInput>): Promise<GetIdentityMailFromDomainAttributesCommandOutput> => {
    const ses = new SESClient({});
    const command = new GetIdentityMailFromDomainAttributesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityNotificationAttributes'*/
export const nativeSESGetIdentityNotificationAttributes = (input: SdkIntegrationTask<GetIdentityNotificationAttributesCommandInput>): Promise<GetIdentityNotificationAttributesCommandOutput> => {
    const ses = new SESClient({});
    const command = new GetIdentityNotificationAttributesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityPolicies'*/
export const nativeSESGetIdentityPolicies = (input: SdkIntegrationTask<GetIdentityPoliciesCommandInput>): Promise<GetIdentityPoliciesCommandOutput> => {
    const ses = new SESClient({});
    const command = new GetIdentityPoliciesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityVerificationAttributes'*/
export const nativeSESGetIdentityVerificationAttributes = (input: SdkIntegrationTask<GetIdentityVerificationAttributesCommandInput>): Promise<GetIdentityVerificationAttributesCommandOutput> => {
    const ses = new SESClient({});
    const command = new GetIdentityVerificationAttributesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getSendQuota'*/
export const nativeSESGetSendQuota = (input: SdkIntegrationTask<GetSendQuotaCommandInput>): Promise<GetSendQuotaCommandOutput> => {
    const ses = new SESClient({});
    const command = new GetSendQuotaCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getSendStatistics'*/
export const nativeSESGetSendStatistics = (input: SdkIntegrationTask<GetSendStatisticsCommandInput>): Promise<GetSendStatisticsCommandOutput> => {
    const ses = new SESClient({});
    const command = new GetSendStatisticsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getTemplate'*/
export const nativeSESGetTemplate = (input: SdkIntegrationTask<GetTemplateCommandInput>): Promise<GetTemplateCommandOutput> => {
    const ses = new SESClient({});
    const command = new GetTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listConfigurationSets'*/
export const nativeSESListConfigurationSets = (input: SdkIntegrationTask<ListConfigurationSetsCommandInput>): Promise<ListConfigurationSetsCommandOutput> => {
    const ses = new SESClient({});
    const command = new ListConfigurationSetsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listCustomVerificationEmailTemplates'*/
export const nativeSESListCustomVerificationEmailTemplates = (input: SdkIntegrationTask<ListCustomVerificationEmailTemplatesCommandInput>): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
    const ses = new SESClient({});
    const command = new ListCustomVerificationEmailTemplatesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listIdentities'*/
export const nativeSESListIdentities = (input: SdkIntegrationTask<ListIdentitiesCommandInput>): Promise<ListIdentitiesCommandOutput> => {
    const ses = new SESClient({});
    const command = new ListIdentitiesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listIdentityPolicies'*/
export const nativeSESListIdentityPolicies = (input: SdkIntegrationTask<ListIdentityPoliciesCommandInput>): Promise<ListIdentityPoliciesCommandOutput> => {
    const ses = new SESClient({});
    const command = new ListIdentityPoliciesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listReceiptFilters'*/
export const nativeSESListReceiptFilters = (input: SdkIntegrationTask<ListReceiptFiltersCommandInput>): Promise<ListReceiptFiltersCommandOutput> => {
    const ses = new SESClient({});
    const command = new ListReceiptFiltersCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listReceiptRuleSets'*/
export const nativeSESListReceiptRuleSets = (input: SdkIntegrationTask<ListReceiptRuleSetsCommandInput>): Promise<ListReceiptRuleSetsCommandOutput> => {
    const ses = new SESClient({});
    const command = new ListReceiptRuleSetsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listTemplates'*/
export const nativeSESListTemplates = (input: SdkIntegrationTask<ListTemplatesCommandInput>): Promise<ListTemplatesCommandOutput> => {
    const ses = new SESClient({});
    const command = new ListTemplatesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listVerifiedEmailAddresses'*/
export const nativeSESListVerifiedEmailAddresses = (input: SdkIntegrationTask<ListVerifiedEmailAddressesCommandInput>): Promise<ListVerifiedEmailAddressesCommandOutput> => {
    const ses = new SESClient({});
    const command = new ListVerifiedEmailAddressesCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:putConfigurationSetDeliveryOptions'*/
export const nativeSESPutConfigurationSetDeliveryOptions = (input: SdkIntegrationTask<PutConfigurationSetDeliveryOptionsCommandInput>): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
    const ses = new SESClient({});
    const command = new PutConfigurationSetDeliveryOptionsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:putIdentityPolicy'*/
export const nativeSESPutIdentityPolicy = (input: SdkIntegrationTask<PutIdentityPolicyCommandInput>): Promise<PutIdentityPolicyCommandOutput> => {
    const ses = new SESClient({});
    const command = new PutIdentityPolicyCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:reorderReceiptRuleSet'*/
export const nativeSESReorderReceiptRuleSet = (input: SdkIntegrationTask<ReorderReceiptRuleSetCommandInput>): Promise<ReorderReceiptRuleSetCommandOutput> => {
    const ses = new SESClient({});
    const command = new ReorderReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendBounce'*/
export const nativeSESSendBounce = (input: SdkIntegrationTask<SendBounceCommandInput>): Promise<SendBounceCommandOutput> => {
    const ses = new SESClient({});
    const command = new SendBounceCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendBulkTemplatedEmail'*/
export const nativeSESSendBulkTemplatedEmail = (input: SdkIntegrationTask<SendBulkTemplatedEmailCommandInput>): Promise<SendBulkTemplatedEmailCommandOutput> => {
    const ses = new SESClient({});
    const command = new SendBulkTemplatedEmailCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendCustomVerificationEmail'*/
export const nativeSESSendCustomVerificationEmail = (input: SdkIntegrationTask<SendCustomVerificationEmailCommandInput>): Promise<SendCustomVerificationEmailCommandOutput> => {
    const ses = new SESClient({});
    const command = new SendCustomVerificationEmailCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendEmail'*/
export const nativeSESSendEmail = (input: SdkIntegrationTask<SendEmailCommandInput>): Promise<SendEmailCommandOutput> => {
    const ses = new SESClient({});
    const command = new SendEmailCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendRawEmail'*/
export const nativeSESSendRawEmail = (input: SdkIntegrationTask<SendRawEmailCommandInput>): Promise<SendRawEmailCommandOutput> => {
    const ses = new SESClient({});
    const command = new SendRawEmailCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendTemplatedEmail'*/
export const nativeSESSendTemplatedEmail = (input: SdkIntegrationTask<SendTemplatedEmailCommandInput>): Promise<SendTemplatedEmailCommandOutput> => {
    const ses = new SESClient({});
    const command = new SendTemplatedEmailCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setActiveReceiptRuleSet'*/
export const nativeSESSetActiveReceiptRuleSet = (input: SdkIntegrationTask<SetActiveReceiptRuleSetCommandInput>): Promise<SetActiveReceiptRuleSetCommandOutput> => {
    const ses = new SESClient({});
    const command = new SetActiveReceiptRuleSetCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityDkimEnabled'*/
export const nativeSESSetIdentityDkimEnabled = (input: SdkIntegrationTask<SetIdentityDkimEnabledCommandInput>): Promise<SetIdentityDkimEnabledCommandOutput> => {
    const ses = new SESClient({});
    const command = new SetIdentityDkimEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityFeedbackForwardingEnabled'*/
export const nativeSESSetIdentityFeedbackForwardingEnabled = (input: SdkIntegrationTask<SetIdentityFeedbackForwardingEnabledCommandInput>): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput> => {
    const ses = new SESClient({});
    const command = new SetIdentityFeedbackForwardingEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityHeadersInNotificationsEnabled'*/
export const nativeSESSetIdentityHeadersInNotificationsEnabled = (input: SdkIntegrationTask<SetIdentityHeadersInNotificationsEnabledCommandInput>): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput> => {
    const ses = new SESClient({});
    const command = new SetIdentityHeadersInNotificationsEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityMailFromDomain'*/
export const nativeSESSetIdentityMailFromDomain = (input: SdkIntegrationTask<SetIdentityMailFromDomainCommandInput>): Promise<SetIdentityMailFromDomainCommandOutput> => {
    const ses = new SESClient({});
    const command = new SetIdentityMailFromDomainCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityNotificationTopic'*/
export const nativeSESSetIdentityNotificationTopic = (input: SdkIntegrationTask<SetIdentityNotificationTopicCommandInput>): Promise<SetIdentityNotificationTopicCommandOutput> => {
    const ses = new SESClient({});
    const command = new SetIdentityNotificationTopicCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setReceiptRulePosition'*/
export const nativeSESSetReceiptRulePosition = (input: SdkIntegrationTask<SetReceiptRulePositionCommandInput>): Promise<SetReceiptRulePositionCommandOutput> => {
    const ses = new SESClient({});
    const command = new SetReceiptRulePositionCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:testRenderTemplate'*/
export const nativeSESTestRenderTemplate = (input: SdkIntegrationTask<TestRenderTemplateCommandInput>): Promise<TestRenderTemplateCommandOutput> => {
    const ses = new SESClient({});
    const command = new TestRenderTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateAccountSendingEnabled'*/
export const nativeSESUpdateAccountSendingEnabled = (input: SdkIntegrationTask<UpdateAccountSendingEnabledCommandInput>): Promise<UpdateAccountSendingEnabledCommandOutput> => {
    const ses = new SESClient({});
    const command = new UpdateAccountSendingEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetEventDestination'*/
export const nativeSESUpdateConfigurationSetEventDestination = (input: SdkIntegrationTask<UpdateConfigurationSetEventDestinationCommandInput>): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
    const ses = new SESClient({});
    const command = new UpdateConfigurationSetEventDestinationCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetReputationMetricsEnabled'*/
export const nativeSESUpdateConfigurationSetReputationMetricsEnabled = (input: SdkIntegrationTask<UpdateConfigurationSetReputationMetricsEnabledCommandInput>): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput> => {
    const ses = new SESClient({});
    const command = new UpdateConfigurationSetReputationMetricsEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetSendingEnabled'*/
export const nativeSESUpdateConfigurationSetSendingEnabled = (input: SdkIntegrationTask<UpdateConfigurationSetSendingEnabledCommandInput>): Promise<UpdateConfigurationSetSendingEnabledCommandOutput> => {
    const ses = new SESClient({});
    const command = new UpdateConfigurationSetSendingEnabledCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetTrackingOptions'*/
export const nativeSESUpdateConfigurationSetTrackingOptions = (input: SdkIntegrationTask<UpdateConfigurationSetTrackingOptionsCommandInput>): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput> => {
    const ses = new SESClient({});
    const command = new UpdateConfigurationSetTrackingOptionsCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateCustomVerificationEmailTemplate'*/
export const nativeSESUpdateCustomVerificationEmailTemplate = (input: SdkIntegrationTask<UpdateCustomVerificationEmailTemplateCommandInput>): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> => {
    const ses = new SESClient({});
    const command = new UpdateCustomVerificationEmailTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateReceiptRule'*/
export const nativeSESUpdateReceiptRule = (input: SdkIntegrationTask<UpdateReceiptRuleCommandInput>): Promise<UpdateReceiptRuleCommandOutput> => {
    const ses = new SESClient({});
    const command = new UpdateReceiptRuleCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateTemplate'*/
export const nativeSESUpdateTemplate = (input: SdkIntegrationTask<UpdateTemplateCommandInput>): Promise<UpdateTemplateCommandOutput> => {
    const ses = new SESClient({});
    const command = new UpdateTemplateCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyDomainDkim'*/
export const nativeSESVerifyDomainDkim = (input: SdkIntegrationTask<VerifyDomainDkimCommandInput>): Promise<VerifyDomainDkimCommandOutput> => {
    const ses = new SESClient({});
    const command = new VerifyDomainDkimCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyDomainIdentity'*/
export const nativeSESVerifyDomainIdentity = (input: SdkIntegrationTask<VerifyDomainIdentityCommandInput>): Promise<VerifyDomainIdentityCommandOutput> => {
    const ses = new SESClient({});
    const command = new VerifyDomainIdentityCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyEmailAddress'*/
export const nativeSESVerifyEmailAddress = (input: SdkIntegrationTask<VerifyEmailAddressCommandInput>): Promise<VerifyEmailAddressCommandOutput> => {
    const ses = new SESClient({});
    const command = new VerifyEmailAddressCommand(input.parameters);
    return ses.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyEmailIdentity'*/
export const nativeSESVerifyEmailIdentity = (input: SdkIntegrationTask<VerifyEmailIdentityCommandInput>): Promise<VerifyEmailIdentityCommandOutput> => {
    const ses = new SESClient({});
    const command = new VerifyEmailIdentityCommand(input.parameters);
    return ses.send(command);
};

