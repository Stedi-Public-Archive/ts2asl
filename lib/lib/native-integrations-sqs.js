"use strict";
exports.__esModule = true;
exports.ASL = void 0;
var client_sqs_1 = require("@aws-sdk/client-sqs");
var client_sqs_2 = require("@aws-sdk/client-sqs");
var client_sqs_3 = require("@aws-sdk/client-sqs");
var client_sqs_4 = require("@aws-sdk/client-sqs");
var client_sqs_5 = require("@aws-sdk/client-sqs");
var client_sqs_6 = require("@aws-sdk/client-sqs");
var client_sqs_7 = require("@aws-sdk/client-sqs");
var client_sqs_8 = require("@aws-sdk/client-sqs");
var client_sqs_9 = require("@aws-sdk/client-sqs");
var client_sqs_10 = require("@aws-sdk/client-sqs");
var client_sqs_11 = require("@aws-sdk/client-sqs");
var client_sqs_12 = require("@aws-sdk/client-sqs");
var client_sqs_13 = require("@aws-sdk/client-sqs");
var client_sqs_14 = require("@aws-sdk/client-sqs");
var client_sqs_15 = require("@aws-sdk/client-sqs");
var client_sqs_16 = require("@aws-sdk/client-sqs");
var client_sqs_17 = require("@aws-sdk/client-sqs");
var client_sqs_18 = require("@aws-sdk/client-sqs");
var client_sqs_19 = require("@aws-sdk/client-sqs");
var client_sqs_20 = require("@aws-sdk/client-sqs");
var client_sqs_21 = require("@aws-sdk/client-sqs");
var ASL;
(function (ASL) {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:addPermission'*/
    ASL.nativeSQSAddPermission = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_2.AddPermissionCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:changeMessageVisibility'*/
    ASL.nativeSQSChangeMessageVisibility = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_3.ChangeMessageVisibilityCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:changeMessageVisibilityBatch'*/
    ASL.nativeSQSChangeMessageVisibilityBatch = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_4.ChangeMessageVisibilityBatchCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:createQueue'*/
    ASL.nativeSQSCreateQueue = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_5.CreateQueueCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:deleteMessage'*/
    ASL.nativeSQSDeleteMessage = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_6.DeleteMessageCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:deleteMessageBatch'*/
    ASL.nativeSQSDeleteMessageBatch = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_7.DeleteMessageBatchCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:deleteQueue'*/
    ASL.nativeSQSDeleteQueue = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_8.DeleteQueueCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:getQueueAttributes'*/
    ASL.nativeSQSGetQueueAttributes = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_9.GetQueueAttributesCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:getQueueUrl'*/
    ASL.nativeSQSGetQueueUrl = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_10.GetQueueUrlCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:listDeadLetterSourceQueues'*/
    ASL.nativeSQSListDeadLetterSourceQueues = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_11.ListDeadLetterSourceQueuesCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:listQueueTags'*/
    ASL.nativeSQSListQueueTags = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_12.ListQueueTagsCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:listQueues'*/
    ASL.nativeSQSListQueues = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_13.ListQueuesCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:purgeQueue'*/
    ASL.nativeSQSPurgeQueue = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_14.PurgeQueueCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:receiveMessage'*/
    ASL.nativeSQSReceiveMessage = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_15.ReceiveMessageCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:removePermission'*/
    ASL.nativeSQSRemovePermission = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_16.RemovePermissionCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:sendMessage'*/
    ASL.nativeSQSSendMessage = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_17.SendMessageCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:sendMessageBatch'*/
    ASL.nativeSQSSendMessageBatch = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_18.SendMessageBatchCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:setQueueAttributes'*/
    ASL.nativeSQSSetQueueAttributes = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_19.SetQueueAttributesCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:tagQueue'*/
    ASL.nativeSQSTagQueue = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_20.TagQueueCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:untagQueue'*/
    ASL.nativeSQSUntagQueue = function (input) {
        var sqs = new client_sqs_1.SQSClient({});
        var command = new client_sqs_21.UntagQueueCommand(input);
        return sqs.send(command);
    };
})(ASL = exports.ASL || (exports.ASL = {}));
