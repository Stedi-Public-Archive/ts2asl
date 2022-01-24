"use strict";
exports.__esModule = true;
exports.ASL = void 0;
var client_ses_1 = require("@aws-sdk/client-ses");
var client_ses_2 = require("@aws-sdk/client-ses");
var client_ses_3 = require("@aws-sdk/client-ses");
var client_ses_4 = require("@aws-sdk/client-ses");
var client_ses_5 = require("@aws-sdk/client-ses");
var client_ses_6 = require("@aws-sdk/client-ses");
var client_ses_7 = require("@aws-sdk/client-ses");
var client_ses_8 = require("@aws-sdk/client-ses");
var client_ses_9 = require("@aws-sdk/client-ses");
var client_ses_10 = require("@aws-sdk/client-ses");
var client_ses_11 = require("@aws-sdk/client-ses");
var client_ses_12 = require("@aws-sdk/client-ses");
var client_ses_13 = require("@aws-sdk/client-ses");
var client_ses_14 = require("@aws-sdk/client-ses");
var client_ses_15 = require("@aws-sdk/client-ses");
var client_ses_16 = require("@aws-sdk/client-ses");
var client_ses_17 = require("@aws-sdk/client-ses");
var client_ses_18 = require("@aws-sdk/client-ses");
var client_ses_19 = require("@aws-sdk/client-ses");
var client_ses_20 = require("@aws-sdk/client-ses");
var client_ses_21 = require("@aws-sdk/client-ses");
var client_ses_22 = require("@aws-sdk/client-ses");
var client_ses_23 = require("@aws-sdk/client-ses");
var client_ses_24 = require("@aws-sdk/client-ses");
var client_ses_25 = require("@aws-sdk/client-ses");
var client_ses_26 = require("@aws-sdk/client-ses");
var client_ses_27 = require("@aws-sdk/client-ses");
var client_ses_28 = require("@aws-sdk/client-ses");
var client_ses_29 = require("@aws-sdk/client-ses");
var client_ses_30 = require("@aws-sdk/client-ses");
var client_ses_31 = require("@aws-sdk/client-ses");
var client_ses_32 = require("@aws-sdk/client-ses");
var client_ses_33 = require("@aws-sdk/client-ses");
var client_ses_34 = require("@aws-sdk/client-ses");
var client_ses_35 = require("@aws-sdk/client-ses");
var client_ses_36 = require("@aws-sdk/client-ses");
var client_ses_37 = require("@aws-sdk/client-ses");
var client_ses_38 = require("@aws-sdk/client-ses");
var client_ses_39 = require("@aws-sdk/client-ses");
var client_ses_40 = require("@aws-sdk/client-ses");
var client_ses_41 = require("@aws-sdk/client-ses");
var client_ses_42 = require("@aws-sdk/client-ses");
var client_ses_43 = require("@aws-sdk/client-ses");
var client_ses_44 = require("@aws-sdk/client-ses");
var client_ses_45 = require("@aws-sdk/client-ses");
var client_ses_46 = require("@aws-sdk/client-ses");
var client_ses_47 = require("@aws-sdk/client-ses");
var client_ses_48 = require("@aws-sdk/client-ses");
var client_ses_49 = require("@aws-sdk/client-ses");
var client_ses_50 = require("@aws-sdk/client-ses");
var client_ses_51 = require("@aws-sdk/client-ses");
var client_ses_52 = require("@aws-sdk/client-ses");
var client_ses_53 = require("@aws-sdk/client-ses");
var client_ses_54 = require("@aws-sdk/client-ses");
var client_ses_55 = require("@aws-sdk/client-ses");
var client_ses_56 = require("@aws-sdk/client-ses");
var client_ses_57 = require("@aws-sdk/client-ses");
var client_ses_58 = require("@aws-sdk/client-ses");
var client_ses_59 = require("@aws-sdk/client-ses");
var client_ses_60 = require("@aws-sdk/client-ses");
var client_ses_61 = require("@aws-sdk/client-ses");
var client_ses_62 = require("@aws-sdk/client-ses");
var client_ses_63 = require("@aws-sdk/client-ses");
var client_ses_64 = require("@aws-sdk/client-ses");
var client_ses_65 = require("@aws-sdk/client-ses");
var client_ses_66 = require("@aws-sdk/client-ses");
var client_ses_67 = require("@aws-sdk/client-ses");
var client_ses_68 = require("@aws-sdk/client-ses");
var client_ses_69 = require("@aws-sdk/client-ses");
var client_ses_70 = require("@aws-sdk/client-ses");
var client_ses_71 = require("@aws-sdk/client-ses");
var client_ses_72 = require("@aws-sdk/client-ses");
var ASL;
(function (ASL) {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:cloneReceiptRuleSet'*/
    ASL.nativeSESCloneReceiptRuleSet = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_2.CloneReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createConfigurationSet'*/
    ASL.nativeSESCreateConfigurationSet = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_3.CreateConfigurationSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createConfigurationSetEventDestination'*/
    ASL.nativeSESCreateConfigurationSetEventDestination = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_4.CreateConfigurationSetEventDestinationCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createConfigurationSetTrackingOptions'*/
    ASL.nativeSESCreateConfigurationSetTrackingOptions = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_5.CreateConfigurationSetTrackingOptionsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createCustomVerificationEmailTemplate'*/
    ASL.nativeSESCreateCustomVerificationEmailTemplate = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_6.CreateCustomVerificationEmailTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createReceiptFilter'*/
    ASL.nativeSESCreateReceiptFilter = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_7.CreateReceiptFilterCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createReceiptRule'*/
    ASL.nativeSESCreateReceiptRule = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_8.CreateReceiptRuleCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createReceiptRuleSet'*/
    ASL.nativeSESCreateReceiptRuleSet = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_9.CreateReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:createTemplate'*/
    ASL.nativeSESCreateTemplate = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_10.CreateTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteConfigurationSet'*/
    ASL.nativeSESDeleteConfigurationSet = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_11.DeleteConfigurationSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteConfigurationSetEventDestination'*/
    ASL.nativeSESDeleteConfigurationSetEventDestination = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_12.DeleteConfigurationSetEventDestinationCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteConfigurationSetTrackingOptions'*/
    ASL.nativeSESDeleteConfigurationSetTrackingOptions = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_13.DeleteConfigurationSetTrackingOptionsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteCustomVerificationEmailTemplate'*/
    ASL.nativeSESDeleteCustomVerificationEmailTemplate = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_14.DeleteCustomVerificationEmailTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteIdentity'*/
    ASL.nativeSESDeleteIdentity = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_15.DeleteIdentityCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteIdentityPolicy'*/
    ASL.nativeSESDeleteIdentityPolicy = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_16.DeleteIdentityPolicyCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteReceiptFilter'*/
    ASL.nativeSESDeleteReceiptFilter = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_17.DeleteReceiptFilterCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteReceiptRule'*/
    ASL.nativeSESDeleteReceiptRule = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_18.DeleteReceiptRuleCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteReceiptRuleSet'*/
    ASL.nativeSESDeleteReceiptRuleSet = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_19.DeleteReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteTemplate'*/
    ASL.nativeSESDeleteTemplate = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_20.DeleteTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:deleteVerifiedEmailAddress'*/
    ASL.nativeSESDeleteVerifiedEmailAddress = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_21.DeleteVerifiedEmailAddressCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeActiveReceiptRuleSet'*/
    ASL.nativeSESDescribeActiveReceiptRuleSet = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_22.DescribeActiveReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeConfigurationSet'*/
    ASL.nativeSESDescribeConfigurationSet = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_23.DescribeConfigurationSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeReceiptRule'*/
    ASL.nativeSESDescribeReceiptRule = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_24.DescribeReceiptRuleCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:describeReceiptRuleSet'*/
    ASL.nativeSESDescribeReceiptRuleSet = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_25.DescribeReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getAccountSendingEnabled'*/
    ASL.nativeSESGetAccountSendingEnabled = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_26.GetAccountSendingEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getCustomVerificationEmailTemplate'*/
    ASL.nativeSESGetCustomVerificationEmailTemplate = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_27.GetCustomVerificationEmailTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityDkimAttributes'*/
    ASL.nativeSESGetIdentityDkimAttributes = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_28.GetIdentityDkimAttributesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityMailFromDomainAttributes'*/
    ASL.nativeSESGetIdentityMailFromDomainAttributes = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_29.GetIdentityMailFromDomainAttributesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityNotificationAttributes'*/
    ASL.nativeSESGetIdentityNotificationAttributes = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_30.GetIdentityNotificationAttributesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityPolicies'*/
    ASL.nativeSESGetIdentityPolicies = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_31.GetIdentityPoliciesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getIdentityVerificationAttributes'*/
    ASL.nativeSESGetIdentityVerificationAttributes = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_32.GetIdentityVerificationAttributesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getSendQuota'*/
    ASL.nativeSESGetSendQuota = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_33.GetSendQuotaCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getSendStatistics'*/
    ASL.nativeSESGetSendStatistics = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_34.GetSendStatisticsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:getTemplate'*/
    ASL.nativeSESGetTemplate = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_35.GetTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listConfigurationSets'*/
    ASL.nativeSESListConfigurationSets = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_36.ListConfigurationSetsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listCustomVerificationEmailTemplates'*/
    ASL.nativeSESListCustomVerificationEmailTemplates = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_37.ListCustomVerificationEmailTemplatesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listIdentities'*/
    ASL.nativeSESListIdentities = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_38.ListIdentitiesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listIdentityPolicies'*/
    ASL.nativeSESListIdentityPolicies = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_39.ListIdentityPoliciesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listReceiptFilters'*/
    ASL.nativeSESListReceiptFilters = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_40.ListReceiptFiltersCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listReceiptRuleSets'*/
    ASL.nativeSESListReceiptRuleSets = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_41.ListReceiptRuleSetsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listTemplates'*/
    ASL.nativeSESListTemplates = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_42.ListTemplatesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:listVerifiedEmailAddresses'*/
    ASL.nativeSESListVerifiedEmailAddresses = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_43.ListVerifiedEmailAddressesCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:putConfigurationSetDeliveryOptions'*/
    ASL.nativeSESPutConfigurationSetDeliveryOptions = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_44.PutConfigurationSetDeliveryOptionsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:putIdentityPolicy'*/
    ASL.nativeSESPutIdentityPolicy = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_45.PutIdentityPolicyCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:reorderReceiptRuleSet'*/
    ASL.nativeSESReorderReceiptRuleSet = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_46.ReorderReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendBounce'*/
    ASL.nativeSESSendBounce = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_47.SendBounceCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendBulkTemplatedEmail'*/
    ASL.nativeSESSendBulkTemplatedEmail = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_48.SendBulkTemplatedEmailCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendCustomVerificationEmail'*/
    ASL.nativeSESSendCustomVerificationEmail = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_49.SendCustomVerificationEmailCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendEmail'*/
    ASL.nativeSESSendEmail = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_50.SendEmailCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendRawEmail'*/
    ASL.nativeSESSendRawEmail = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_51.SendRawEmailCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:sendTemplatedEmail'*/
    ASL.nativeSESSendTemplatedEmail = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_52.SendTemplatedEmailCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setActiveReceiptRuleSet'*/
    ASL.nativeSESSetActiveReceiptRuleSet = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_53.SetActiveReceiptRuleSetCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityDkimEnabled'*/
    ASL.nativeSESSetIdentityDkimEnabled = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_54.SetIdentityDkimEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityFeedbackForwardingEnabled'*/
    ASL.nativeSESSetIdentityFeedbackForwardingEnabled = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_55.SetIdentityFeedbackForwardingEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityHeadersInNotificationsEnabled'*/
    ASL.nativeSESSetIdentityHeadersInNotificationsEnabled = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_56.SetIdentityHeadersInNotificationsEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityMailFromDomain'*/
    ASL.nativeSESSetIdentityMailFromDomain = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_57.SetIdentityMailFromDomainCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setIdentityNotificationTopic'*/
    ASL.nativeSESSetIdentityNotificationTopic = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_58.SetIdentityNotificationTopicCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:setReceiptRulePosition'*/
    ASL.nativeSESSetReceiptRulePosition = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_59.SetReceiptRulePositionCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:testRenderTemplate'*/
    ASL.nativeSESTestRenderTemplate = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_60.TestRenderTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateAccountSendingEnabled'*/
    ASL.nativeSESUpdateAccountSendingEnabled = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_61.UpdateAccountSendingEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetEventDestination'*/
    ASL.nativeSESUpdateConfigurationSetEventDestination = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_62.UpdateConfigurationSetEventDestinationCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetReputationMetricsEnabled'*/
    ASL.nativeSESUpdateConfigurationSetReputationMetricsEnabled = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_63.UpdateConfigurationSetReputationMetricsEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetSendingEnabled'*/
    ASL.nativeSESUpdateConfigurationSetSendingEnabled = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_64.UpdateConfigurationSetSendingEnabledCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateConfigurationSetTrackingOptions'*/
    ASL.nativeSESUpdateConfigurationSetTrackingOptions = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_65.UpdateConfigurationSetTrackingOptionsCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateCustomVerificationEmailTemplate'*/
    ASL.nativeSESUpdateCustomVerificationEmailTemplate = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_66.UpdateCustomVerificationEmailTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateReceiptRule'*/
    ASL.nativeSESUpdateReceiptRule = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_67.UpdateReceiptRuleCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:updateTemplate'*/
    ASL.nativeSESUpdateTemplate = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_68.UpdateTemplateCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyDomainDkim'*/
    ASL.nativeSESVerifyDomainDkim = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_69.VerifyDomainDkimCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyDomainIdentity'*/
    ASL.nativeSESVerifyDomainIdentity = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_70.VerifyDomainIdentityCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyEmailAddress'*/
    ASL.nativeSESVerifyEmailAddress = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_71.VerifyEmailAddressCommand(input);
        return ses.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ses:verifyEmailIdentity'*/
    ASL.nativeSESVerifyEmailIdentity = function (input) {
        var ses = new client_ses_1.SESClient({});
        var command = new client_ses_72.VerifyEmailIdentityCommand(input);
        return ses.send(command);
    };
})(ASL = exports.ASL || (exports.ASL = {}));
