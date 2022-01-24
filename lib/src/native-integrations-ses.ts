import { SESClient } from "@aws-sdk/client-ses";
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


export namespace ASL {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:cloneReceiptRuleSet'*/
    export const nativeSESCloneReceiptRuleSet = (input: CloneReceiptRuleSetCommandInput): Promise<CloneReceiptRuleSetCommandOutput> => {
        const ses = new SESClient({});
        const command = new CloneReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createConfigurationSet'*/
    export const nativeSESCreateConfigurationSet = (input: CreateConfigurationSetCommandInput): Promise<CreateConfigurationSetCommandOutput> => {
        const ses = new SESClient({});
        const command = new CreateConfigurationSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createConfigurationSetEventDestination'*/
    export const nativeSESCreateConfigurationSetEventDestination = (input: CreateConfigurationSetEventDestinationCommandInput): Promise<CreateConfigurationSetEventDestinationCommandOutput> => {
        const ses = new SESClient({});
        const command = new CreateConfigurationSetEventDestinationCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createConfigurationSetTrackingOptions'*/
    export const nativeSESCreateConfigurationSetTrackingOptions = (input: CreateConfigurationSetTrackingOptionsCommandInput): Promise<CreateConfigurationSetTrackingOptionsCommandOutput> => {
        const ses = new SESClient({});
        const command = new CreateConfigurationSetTrackingOptionsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createCustomVerificationEmailTemplate'*/
    export const nativeSESCreateCustomVerificationEmailTemplate = (input: CreateCustomVerificationEmailTemplateCommandInput): Promise<CreateCustomVerificationEmailTemplateCommandOutput> => {
        const ses = new SESClient({});
        const command = new CreateCustomVerificationEmailTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createReceiptFilter'*/
    export const nativeSESCreateReceiptFilter = (input: CreateReceiptFilterCommandInput): Promise<CreateReceiptFilterCommandOutput> => {
        const ses = new SESClient({});
        const command = new CreateReceiptFilterCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createReceiptRule'*/
    export const nativeSESCreateReceiptRule = (input: CreateReceiptRuleCommandInput): Promise<CreateReceiptRuleCommandOutput> => {
        const ses = new SESClient({});
        const command = new CreateReceiptRuleCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createReceiptRuleSet'*/
    export const nativeSESCreateReceiptRuleSet = (input: CreateReceiptRuleSetCommandInput): Promise<CreateReceiptRuleSetCommandOutput> => {
        const ses = new SESClient({});
        const command = new CreateReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createTemplate'*/
    export const nativeSESCreateTemplate = (input: CreateTemplateCommandInput): Promise<CreateTemplateCommandOutput> => {
        const ses = new SESClient({});
        const command = new CreateTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteConfigurationSet'*/
    export const nativeSESDeleteConfigurationSet = (input: DeleteConfigurationSetCommandInput): Promise<DeleteConfigurationSetCommandOutput> => {
        const ses = new SESClient({});
        const command = new DeleteConfigurationSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteConfigurationSetEventDestination'*/
    export const nativeSESDeleteConfigurationSetEventDestination = (input: DeleteConfigurationSetEventDestinationCommandInput): Promise<DeleteConfigurationSetEventDestinationCommandOutput> => {
        const ses = new SESClient({});
        const command = new DeleteConfigurationSetEventDestinationCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteConfigurationSetTrackingOptions'*/
    export const nativeSESDeleteConfigurationSetTrackingOptions = (input: DeleteConfigurationSetTrackingOptionsCommandInput): Promise<DeleteConfigurationSetTrackingOptionsCommandOutput> => {
        const ses = new SESClient({});
        const command = new DeleteConfigurationSetTrackingOptionsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteCustomVerificationEmailTemplate'*/
    export const nativeSESDeleteCustomVerificationEmailTemplate = (input: DeleteCustomVerificationEmailTemplateCommandInput): Promise<DeleteCustomVerificationEmailTemplateCommandOutput> => {
        const ses = new SESClient({});
        const command = new DeleteCustomVerificationEmailTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteIdentity'*/
    export const nativeSESDeleteIdentity = (input: DeleteIdentityCommandInput): Promise<DeleteIdentityCommandOutput> => {
        const ses = new SESClient({});
        const command = new DeleteIdentityCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteIdentityPolicy'*/
    export const nativeSESDeleteIdentityPolicy = (input: DeleteIdentityPolicyCommandInput): Promise<DeleteIdentityPolicyCommandOutput> => {
        const ses = new SESClient({});
        const command = new DeleteIdentityPolicyCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteReceiptFilter'*/
    export const nativeSESDeleteReceiptFilter = (input: DeleteReceiptFilterCommandInput): Promise<DeleteReceiptFilterCommandOutput> => {
        const ses = new SESClient({});
        const command = new DeleteReceiptFilterCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteReceiptRule'*/
    export const nativeSESDeleteReceiptRule = (input: DeleteReceiptRuleCommandInput): Promise<DeleteReceiptRuleCommandOutput> => {
        const ses = new SESClient({});
        const command = new DeleteReceiptRuleCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteReceiptRuleSet'*/
    export const nativeSESDeleteReceiptRuleSet = (input: DeleteReceiptRuleSetCommandInput): Promise<DeleteReceiptRuleSetCommandOutput> => {
        const ses = new SESClient({});
        const command = new DeleteReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteTemplate'*/
    export const nativeSESDeleteTemplate = (input: DeleteTemplateCommandInput): Promise<DeleteTemplateCommandOutput> => {
        const ses = new SESClient({});
        const command = new DeleteTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteVerifiedEmailAddress'*/
    export const nativeSESDeleteVerifiedEmailAddress = (input: DeleteVerifiedEmailAddressCommandInput): Promise<DeleteVerifiedEmailAddressCommandOutput> => {
        const ses = new SESClient({});
        const command = new DeleteVerifiedEmailAddressCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeActiveReceiptRuleSet'*/
    export const nativeSESDescribeActiveReceiptRuleSet = (input: DescribeActiveReceiptRuleSetCommandInput): Promise<DescribeActiveReceiptRuleSetCommandOutput> => {
        const ses = new SESClient({});
        const command = new DescribeActiveReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeConfigurationSet'*/
    export const nativeSESDescribeConfigurationSet = (input: DescribeConfigurationSetCommandInput): Promise<DescribeConfigurationSetCommandOutput> => {
        const ses = new SESClient({});
        const command = new DescribeConfigurationSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeReceiptRule'*/
    export const nativeSESDescribeReceiptRule = (input: DescribeReceiptRuleCommandInput): Promise<DescribeReceiptRuleCommandOutput> => {
        const ses = new SESClient({});
        const command = new DescribeReceiptRuleCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeReceiptRuleSet'*/
    export const nativeSESDescribeReceiptRuleSet = (input: DescribeReceiptRuleSetCommandInput): Promise<DescribeReceiptRuleSetCommandOutput> => {
        const ses = new SESClient({});
        const command = new DescribeReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getAccountSendingEnabled'*/
    export const nativeSESGetAccountSendingEnabled = (input: GetAccountSendingEnabledCommandInput): Promise<GetAccountSendingEnabledCommandOutput> => {
        const ses = new SESClient({});
        const command = new GetAccountSendingEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getCustomVerificationEmailTemplate'*/
    export const nativeSESGetCustomVerificationEmailTemplate = (input: GetCustomVerificationEmailTemplateCommandInput): Promise<GetCustomVerificationEmailTemplateCommandOutput> => {
        const ses = new SESClient({});
        const command = new GetCustomVerificationEmailTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityDkimAttributes'*/
    export const nativeSESGetIdentityDkimAttributes = (input: GetIdentityDkimAttributesCommandInput): Promise<GetIdentityDkimAttributesCommandOutput> => {
        const ses = new SESClient({});
        const command = new GetIdentityDkimAttributesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityMailFromDomainAttributes'*/
    export const nativeSESGetIdentityMailFromDomainAttributes = (input: GetIdentityMailFromDomainAttributesCommandInput): Promise<GetIdentityMailFromDomainAttributesCommandOutput> => {
        const ses = new SESClient({});
        const command = new GetIdentityMailFromDomainAttributesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityNotificationAttributes'*/
    export const nativeSESGetIdentityNotificationAttributes = (input: GetIdentityNotificationAttributesCommandInput): Promise<GetIdentityNotificationAttributesCommandOutput> => {
        const ses = new SESClient({});
        const command = new GetIdentityNotificationAttributesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityPolicies'*/
    export const nativeSESGetIdentityPolicies = (input: GetIdentityPoliciesCommandInput): Promise<GetIdentityPoliciesCommandOutput> => {
        const ses = new SESClient({});
        const command = new GetIdentityPoliciesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityVerificationAttributes'*/
    export const nativeSESGetIdentityVerificationAttributes = (input: GetIdentityVerificationAttributesCommandInput): Promise<GetIdentityVerificationAttributesCommandOutput> => {
        const ses = new SESClient({});
        const command = new GetIdentityVerificationAttributesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getSendQuota'*/
    export const nativeSESGetSendQuota = (input: GetSendQuotaCommandInput): Promise<GetSendQuotaCommandOutput> => {
        const ses = new SESClient({});
        const command = new GetSendQuotaCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getSendStatistics'*/
    export const nativeSESGetSendStatistics = (input: GetSendStatisticsCommandInput): Promise<GetSendStatisticsCommandOutput> => {
        const ses = new SESClient({});
        const command = new GetSendStatisticsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getTemplate'*/
    export const nativeSESGetTemplate = (input: GetTemplateCommandInput): Promise<GetTemplateCommandOutput> => {
        const ses = new SESClient({});
        const command = new GetTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listConfigurationSets'*/
    export const nativeSESListConfigurationSets = (input: ListConfigurationSetsCommandInput): Promise<ListConfigurationSetsCommandOutput> => {
        const ses = new SESClient({});
        const command = new ListConfigurationSetsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listCustomVerificationEmailTemplates'*/
    export const nativeSESListCustomVerificationEmailTemplates = (input: ListCustomVerificationEmailTemplatesCommandInput): Promise<ListCustomVerificationEmailTemplatesCommandOutput> => {
        const ses = new SESClient({});
        const command = new ListCustomVerificationEmailTemplatesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listIdentities'*/
    export const nativeSESListIdentities = (input: ListIdentitiesCommandInput): Promise<ListIdentitiesCommandOutput> => {
        const ses = new SESClient({});
        const command = new ListIdentitiesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listIdentityPolicies'*/
    export const nativeSESListIdentityPolicies = (input: ListIdentityPoliciesCommandInput): Promise<ListIdentityPoliciesCommandOutput> => {
        const ses = new SESClient({});
        const command = new ListIdentityPoliciesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listReceiptFilters'*/
    export const nativeSESListReceiptFilters = (input: ListReceiptFiltersCommandInput): Promise<ListReceiptFiltersCommandOutput> => {
        const ses = new SESClient({});
        const command = new ListReceiptFiltersCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listReceiptRuleSets'*/
    export const nativeSESListReceiptRuleSets = (input: ListReceiptRuleSetsCommandInput): Promise<ListReceiptRuleSetsCommandOutput> => {
        const ses = new SESClient({});
        const command = new ListReceiptRuleSetsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listTemplates'*/
    export const nativeSESListTemplates = (input: ListTemplatesCommandInput): Promise<ListTemplatesCommandOutput> => {
        const ses = new SESClient({});
        const command = new ListTemplatesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listVerifiedEmailAddresses'*/
    export const nativeSESListVerifiedEmailAddresses = (input: ListVerifiedEmailAddressesCommandInput): Promise<ListVerifiedEmailAddressesCommandOutput> => {
        const ses = new SESClient({});
        const command = new ListVerifiedEmailAddressesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:putConfigurationSetDeliveryOptions'*/
    export const nativeSESPutConfigurationSetDeliveryOptions = (input: PutConfigurationSetDeliveryOptionsCommandInput): Promise<PutConfigurationSetDeliveryOptionsCommandOutput> => {
        const ses = new SESClient({});
        const command = new PutConfigurationSetDeliveryOptionsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:putIdentityPolicy'*/
    export const nativeSESPutIdentityPolicy = (input: PutIdentityPolicyCommandInput): Promise<PutIdentityPolicyCommandOutput> => {
        const ses = new SESClient({});
        const command = new PutIdentityPolicyCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:reorderReceiptRuleSet'*/
    export const nativeSESReorderReceiptRuleSet = (input: ReorderReceiptRuleSetCommandInput): Promise<ReorderReceiptRuleSetCommandOutput> => {
        const ses = new SESClient({});
        const command = new ReorderReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendBounce'*/
    export const nativeSESSendBounce = (input: SendBounceCommandInput): Promise<SendBounceCommandOutput> => {
        const ses = new SESClient({});
        const command = new SendBounceCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendBulkTemplatedEmail'*/
    export const nativeSESSendBulkTemplatedEmail = (input: SendBulkTemplatedEmailCommandInput): Promise<SendBulkTemplatedEmailCommandOutput> => {
        const ses = new SESClient({});
        const command = new SendBulkTemplatedEmailCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendCustomVerificationEmail'*/
    export const nativeSESSendCustomVerificationEmail = (input: SendCustomVerificationEmailCommandInput): Promise<SendCustomVerificationEmailCommandOutput> => {
        const ses = new SESClient({});
        const command = new SendCustomVerificationEmailCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendEmail'*/
    export const nativeSESSendEmail = (input: SendEmailCommandInput): Promise<SendEmailCommandOutput> => {
        const ses = new SESClient({});
        const command = new SendEmailCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendRawEmail'*/
    export const nativeSESSendRawEmail = (input: SendRawEmailCommandInput): Promise<SendRawEmailCommandOutput> => {
        const ses = new SESClient({});
        const command = new SendRawEmailCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendTemplatedEmail'*/
    export const nativeSESSendTemplatedEmail = (input: SendTemplatedEmailCommandInput): Promise<SendTemplatedEmailCommandOutput> => {
        const ses = new SESClient({});
        const command = new SendTemplatedEmailCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setActiveReceiptRuleSet'*/
    export const nativeSESSetActiveReceiptRuleSet = (input: SetActiveReceiptRuleSetCommandInput): Promise<SetActiveReceiptRuleSetCommandOutput> => {
        const ses = new SESClient({});
        const command = new SetActiveReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityDkimEnabled'*/
    export const nativeSESSetIdentityDkimEnabled = (input: SetIdentityDkimEnabledCommandInput): Promise<SetIdentityDkimEnabledCommandOutput> => {
        const ses = new SESClient({});
        const command = new SetIdentityDkimEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityFeedbackForwardingEnabled'*/
    export const nativeSESSetIdentityFeedbackForwardingEnabled = (input: SetIdentityFeedbackForwardingEnabledCommandInput): Promise<SetIdentityFeedbackForwardingEnabledCommandOutput> => {
        const ses = new SESClient({});
        const command = new SetIdentityFeedbackForwardingEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityHeadersInNotificationsEnabled'*/
    export const nativeSESSetIdentityHeadersInNotificationsEnabled = (input: SetIdentityHeadersInNotificationsEnabledCommandInput): Promise<SetIdentityHeadersInNotificationsEnabledCommandOutput> => {
        const ses = new SESClient({});
        const command = new SetIdentityHeadersInNotificationsEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityMailFromDomain'*/
    export const nativeSESSetIdentityMailFromDomain = (input: SetIdentityMailFromDomainCommandInput): Promise<SetIdentityMailFromDomainCommandOutput> => {
        const ses = new SESClient({});
        const command = new SetIdentityMailFromDomainCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityNotificationTopic'*/
    export const nativeSESSetIdentityNotificationTopic = (input: SetIdentityNotificationTopicCommandInput): Promise<SetIdentityNotificationTopicCommandOutput> => {
        const ses = new SESClient({});
        const command = new SetIdentityNotificationTopicCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setReceiptRulePosition'*/
    export const nativeSESSetReceiptRulePosition = (input: SetReceiptRulePositionCommandInput): Promise<SetReceiptRulePositionCommandOutput> => {
        const ses = new SESClient({});
        const command = new SetReceiptRulePositionCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:testRenderTemplate'*/
    export const nativeSESTestRenderTemplate = (input: TestRenderTemplateCommandInput): Promise<TestRenderTemplateCommandOutput> => {
        const ses = new SESClient({});
        const command = new TestRenderTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateAccountSendingEnabled'*/
    export const nativeSESUpdateAccountSendingEnabled = (input: UpdateAccountSendingEnabledCommandInput): Promise<UpdateAccountSendingEnabledCommandOutput> => {
        const ses = new SESClient({});
        const command = new UpdateAccountSendingEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetEventDestination'*/
    export const nativeSESUpdateConfigurationSetEventDestination = (input: UpdateConfigurationSetEventDestinationCommandInput): Promise<UpdateConfigurationSetEventDestinationCommandOutput> => {
        const ses = new SESClient({});
        const command = new UpdateConfigurationSetEventDestinationCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetReputationMetricsEnabled'*/
    export const nativeSESUpdateConfigurationSetReputationMetricsEnabled = (input: UpdateConfigurationSetReputationMetricsEnabledCommandInput): Promise<UpdateConfigurationSetReputationMetricsEnabledCommandOutput> => {
        const ses = new SESClient({});
        const command = new UpdateConfigurationSetReputationMetricsEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetSendingEnabled'*/
    export const nativeSESUpdateConfigurationSetSendingEnabled = (input: UpdateConfigurationSetSendingEnabledCommandInput): Promise<UpdateConfigurationSetSendingEnabledCommandOutput> => {
        const ses = new SESClient({});
        const command = new UpdateConfigurationSetSendingEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetTrackingOptions'*/
    export const nativeSESUpdateConfigurationSetTrackingOptions = (input: UpdateConfigurationSetTrackingOptionsCommandInput): Promise<UpdateConfigurationSetTrackingOptionsCommandOutput> => {
        const ses = new SESClient({});
        const command = new UpdateConfigurationSetTrackingOptionsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateCustomVerificationEmailTemplate'*/
    export const nativeSESUpdateCustomVerificationEmailTemplate = (input: UpdateCustomVerificationEmailTemplateCommandInput): Promise<UpdateCustomVerificationEmailTemplateCommandOutput> => {
        const ses = new SESClient({});
        const command = new UpdateCustomVerificationEmailTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateReceiptRule'*/
    export const nativeSESUpdateReceiptRule = (input: UpdateReceiptRuleCommandInput): Promise<UpdateReceiptRuleCommandOutput> => {
        const ses = new SESClient({});
        const command = new UpdateReceiptRuleCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateTemplate'*/
    export const nativeSESUpdateTemplate = (input: UpdateTemplateCommandInput): Promise<UpdateTemplateCommandOutput> => {
        const ses = new SESClient({});
        const command = new UpdateTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyDomainDkim'*/
    export const nativeSESVerifyDomainDkim = (input: VerifyDomainDkimCommandInput): Promise<VerifyDomainDkimCommandOutput> => {
        const ses = new SESClient({});
        const command = new VerifyDomainDkimCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyDomainIdentity'*/
    export const nativeSESVerifyDomainIdentity = (input: VerifyDomainIdentityCommandInput): Promise<VerifyDomainIdentityCommandOutput> => {
        const ses = new SESClient({});
        const command = new VerifyDomainIdentityCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyEmailAddress'*/
    export const nativeSESVerifyEmailAddress = (input: VerifyEmailAddressCommandInput): Promise<VerifyEmailAddressCommandOutput> => {
        const ses = new SESClient({});
        const command = new VerifyEmailAddressCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyEmailIdentity'*/
    export const nativeSESVerifyEmailIdentity = (input: VerifyEmailIdentityCommandInput): Promise<VerifyEmailIdentityCommandOutput> => {
        const ses = new SESClient({});
        const command = new VerifyEmailIdentityCommand(input);
        return ses.send(command);
    };
}

