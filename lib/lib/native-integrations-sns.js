"use strict";
exports.__esModule = true;
exports.ASL = void 0;
var client_sns_1 = require("@aws-sdk/client-sns");
var client_sns_2 = require("@aws-sdk/client-sns");
var client_sns_3 = require("@aws-sdk/client-sns");
var client_sns_4 = require("@aws-sdk/client-sns");
var client_sns_5 = require("@aws-sdk/client-sns");
var client_sns_6 = require("@aws-sdk/client-sns");
var client_sns_7 = require("@aws-sdk/client-sns");
var client_sns_8 = require("@aws-sdk/client-sns");
var client_sns_9 = require("@aws-sdk/client-sns");
var client_sns_10 = require("@aws-sdk/client-sns");
var client_sns_11 = require("@aws-sdk/client-sns");
var client_sns_12 = require("@aws-sdk/client-sns");
var client_sns_13 = require("@aws-sdk/client-sns");
var client_sns_14 = require("@aws-sdk/client-sns");
var client_sns_15 = require("@aws-sdk/client-sns");
var client_sns_16 = require("@aws-sdk/client-sns");
var client_sns_17 = require("@aws-sdk/client-sns");
var client_sns_18 = require("@aws-sdk/client-sns");
var client_sns_19 = require("@aws-sdk/client-sns");
var client_sns_20 = require("@aws-sdk/client-sns");
var client_sns_21 = require("@aws-sdk/client-sns");
var client_sns_22 = require("@aws-sdk/client-sns");
var client_sns_23 = require("@aws-sdk/client-sns");
var client_sns_24 = require("@aws-sdk/client-sns");
var client_sns_25 = require("@aws-sdk/client-sns");
var client_sns_26 = require("@aws-sdk/client-sns");
var client_sns_27 = require("@aws-sdk/client-sns");
var client_sns_28 = require("@aws-sdk/client-sns");
var client_sns_29 = require("@aws-sdk/client-sns");
var client_sns_30 = require("@aws-sdk/client-sns");
var client_sns_31 = require("@aws-sdk/client-sns");
var client_sns_32 = require("@aws-sdk/client-sns");
var client_sns_33 = require("@aws-sdk/client-sns");
var client_sns_34 = require("@aws-sdk/client-sns");
var client_sns_35 = require("@aws-sdk/client-sns");
var client_sns_36 = require("@aws-sdk/client-sns");
var client_sns_37 = require("@aws-sdk/client-sns");
var client_sns_38 = require("@aws-sdk/client-sns");
var client_sns_39 = require("@aws-sdk/client-sns");
var client_sns_40 = require("@aws-sdk/client-sns");
var ASL;
(function (ASL) {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:addPermission'*/
    ASL.nativeSNSAddPermission = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_2.AddPermissionCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:checkIfPhoneNumberIsOptedOut'*/
    ASL.nativeSNSCheckIfPhoneNumberIsOptedOut = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_3.CheckIfPhoneNumberIsOptedOutCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:confirmSubscription'*/
    ASL.nativeSNSConfirmSubscription = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_4.ConfirmSubscriptionCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:createPlatformApplication'*/
    ASL.nativeSNSCreatePlatformApplication = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_5.CreatePlatformApplicationCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:createPlatformEndpoint'*/
    ASL.nativeSNSCreatePlatformEndpoint = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_6.CreatePlatformEndpointCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:createSMSSandboxPhoneNumber'*/
    ASL.nativeSNSCreateSMSSandboxPhoneNumber = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_7.CreateSMSSandboxPhoneNumberCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:createTopic'*/
    ASL.nativeSNSCreateTopic = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_8.CreateTopicCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:deleteEndpoint'*/
    ASL.nativeSNSDeleteEndpoint = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_9.DeleteEndpointCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:deletePlatformApplication'*/
    ASL.nativeSNSDeletePlatformApplication = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_10.DeletePlatformApplicationCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:deleteSMSSandboxPhoneNumber'*/
    ASL.nativeSNSDeleteSMSSandboxPhoneNumber = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_11.DeleteSMSSandboxPhoneNumberCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:deleteTopic'*/
    ASL.nativeSNSDeleteTopic = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_12.DeleteTopicCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getEndpointAttributes'*/
    ASL.nativeSNSGetEndpointAttributes = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_13.GetEndpointAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getPlatformApplicationAttributes'*/
    ASL.nativeSNSGetPlatformApplicationAttributes = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_14.GetPlatformApplicationAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getSMSAttributes'*/
    ASL.nativeSNSGetSMSAttributes = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_15.GetSMSAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getSMSSandboxAccountStatus'*/
    ASL.nativeSNSGetSMSSandboxAccountStatus = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_16.GetSMSSandboxAccountStatusCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getSubscriptionAttributes'*/
    ASL.nativeSNSGetSubscriptionAttributes = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_17.GetSubscriptionAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getTopicAttributes'*/
    ASL.nativeSNSGetTopicAttributes = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_18.GetTopicAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listEndpointsByPlatformApplication'*/
    ASL.nativeSNSListEndpointsByPlatformApplication = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_19.ListEndpointsByPlatformApplicationCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listOriginationNumbers'*/
    ASL.nativeSNSListOriginationNumbers = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_20.ListOriginationNumbersCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listPhoneNumbersOptedOut'*/
    ASL.nativeSNSListPhoneNumbersOptedOut = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_21.ListPhoneNumbersOptedOutCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listPlatformApplications'*/
    ASL.nativeSNSListPlatformApplications = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_22.ListPlatformApplicationsCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listSMSSandboxPhoneNumbers'*/
    ASL.nativeSNSListSMSSandboxPhoneNumbers = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_23.ListSMSSandboxPhoneNumbersCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listSubscriptions'*/
    ASL.nativeSNSListSubscriptions = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_24.ListSubscriptionsCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listSubscriptionsByTopic'*/
    ASL.nativeSNSListSubscriptionsByTopic = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_25.ListSubscriptionsByTopicCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listTagsForResource'*/
    ASL.nativeSNSListTagsForResource = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_26.ListTagsForResourceCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listTopics'*/
    ASL.nativeSNSListTopics = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_27.ListTopicsCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:optInPhoneNumber'*/
    ASL.nativeSNSOptInPhoneNumber = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_28.OptInPhoneNumberCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:publish'*/
    ASL.nativeSNSPublish = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_29.PublishCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:removePermission'*/
    ASL.nativeSNSRemovePermission = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_30.RemovePermissionCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setEndpointAttributes'*/
    ASL.nativeSNSSetEndpointAttributes = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_31.SetEndpointAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setPlatformApplicationAttributes'*/
    ASL.nativeSNSSetPlatformApplicationAttributes = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_32.SetPlatformApplicationAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setSMSAttributes'*/
    ASL.nativeSNSSetSMSAttributes = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_33.SetSMSAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setSubscriptionAttributes'*/
    ASL.nativeSNSSetSubscriptionAttributes = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_34.SetSubscriptionAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setTopicAttributes'*/
    ASL.nativeSNSSetTopicAttributes = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_35.SetTopicAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:subscribe'*/
    ASL.nativeSNSSubscribe = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_36.SubscribeCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:tagResource'*/
    ASL.nativeSNSTagResource = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_37.TagResourceCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:unsubscribe'*/
    ASL.nativeSNSUnsubscribe = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_38.UnsubscribeCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:untagResource'*/
    ASL.nativeSNSUntagResource = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_39.UntagResourceCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:verifySMSSandboxPhoneNumber'*/
    ASL.nativeSNSVerifySMSSandboxPhoneNumber = function (input) {
        var sns = new client_sns_1.SNSClient({});
        var command = new client_sns_40.VerifySMSSandboxPhoneNumberCommand(input);
        return sns.send(command);
    };
})(ASL = exports.ASL || (exports.ASL = {}));
