"use strict";
exports.__esModule = true;
exports.ASL = void 0;
var client_eventbridge_1 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_2 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_3 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_4 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_5 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_6 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_7 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_8 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_9 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_10 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_11 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_12 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_13 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_14 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_15 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_16 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_17 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_18 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_19 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_20 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_21 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_22 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_23 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_24 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_25 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_26 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_27 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_28 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_29 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_30 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_31 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_32 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_33 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_34 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_35 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_36 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_37 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_38 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_39 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_40 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_41 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_42 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_43 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_44 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_45 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_46 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_47 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_48 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_49 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_50 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_51 = require("@aws-sdk/client-eventbridge");
var client_eventbridge_52 = require("@aws-sdk/client-eventbridge");
var ASL;
(function (ASL) {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:activateEventSource'*/
    ASL.nativeEventBridgeActivateEventSource = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_2.ActivateEventSourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:cancelReplay'*/
    ASL.nativeEventBridgeCancelReplay = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_3.CancelReplayCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createApiDestination'*/
    ASL.nativeEventBridgeCreateApiDestination = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_4.CreateApiDestinationCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createArchive'*/
    ASL.nativeEventBridgeCreateArchive = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_5.CreateArchiveCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createConnection'*/
    ASL.nativeEventBridgeCreateConnection = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_6.CreateConnectionCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createEventBus'*/
    ASL.nativeEventBridgeCreateEventBus = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_7.CreateEventBusCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createPartnerEventSource'*/
    ASL.nativeEventBridgeCreatePartnerEventSource = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_8.CreatePartnerEventSourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deactivateEventSource'*/
    ASL.nativeEventBridgeDeactivateEventSource = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_9.DeactivateEventSourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deauthorizeConnection'*/
    ASL.nativeEventBridgeDeauthorizeConnection = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_10.DeauthorizeConnectionCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteApiDestination'*/
    ASL.nativeEventBridgeDeleteApiDestination = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_11.DeleteApiDestinationCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteArchive'*/
    ASL.nativeEventBridgeDeleteArchive = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_12.DeleteArchiveCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteConnection'*/
    ASL.nativeEventBridgeDeleteConnection = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_13.DeleteConnectionCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteEventBus'*/
    ASL.nativeEventBridgeDeleteEventBus = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_14.DeleteEventBusCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deletePartnerEventSource'*/
    ASL.nativeEventBridgeDeletePartnerEventSource = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_15.DeletePartnerEventSourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteRule'*/
    ASL.nativeEventBridgeDeleteRule = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_16.DeleteRuleCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeApiDestination'*/
    ASL.nativeEventBridgeDescribeApiDestination = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_17.DescribeApiDestinationCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeArchive'*/
    ASL.nativeEventBridgeDescribeArchive = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_18.DescribeArchiveCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeConnection'*/
    ASL.nativeEventBridgeDescribeConnection = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_19.DescribeConnectionCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeEventBus'*/
    ASL.nativeEventBridgeDescribeEventBus = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_20.DescribeEventBusCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeEventSource'*/
    ASL.nativeEventBridgeDescribeEventSource = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_21.DescribeEventSourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describePartnerEventSource'*/
    ASL.nativeEventBridgeDescribePartnerEventSource = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_22.DescribePartnerEventSourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeReplay'*/
    ASL.nativeEventBridgeDescribeReplay = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_23.DescribeReplayCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeRule'*/
    ASL.nativeEventBridgeDescribeRule = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_24.DescribeRuleCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:disableRule'*/
    ASL.nativeEventBridgeDisableRule = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_25.DisableRuleCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:enableRule'*/
    ASL.nativeEventBridgeEnableRule = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_26.EnableRuleCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listApiDestinations'*/
    ASL.nativeEventBridgeListApiDestinations = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_27.ListApiDestinationsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listArchives'*/
    ASL.nativeEventBridgeListArchives = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_28.ListArchivesCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listConnections'*/
    ASL.nativeEventBridgeListConnections = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_29.ListConnectionsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listEventBuses'*/
    ASL.nativeEventBridgeListEventBuses = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_30.ListEventBusesCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listEventSources'*/
    ASL.nativeEventBridgeListEventSources = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_31.ListEventSourcesCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listPartnerEventSourceAccounts'*/
    ASL.nativeEventBridgeListPartnerEventSourceAccounts = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_32.ListPartnerEventSourceAccountsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listPartnerEventSources'*/
    ASL.nativeEventBridgeListPartnerEventSources = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_33.ListPartnerEventSourcesCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listReplays'*/
    ASL.nativeEventBridgeListReplays = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_34.ListReplaysCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listRuleNamesByTarget'*/
    ASL.nativeEventBridgeListRuleNamesByTarget = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_35.ListRuleNamesByTargetCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listRules'*/
    ASL.nativeEventBridgeListRules = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_36.ListRulesCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listTagsForResource'*/
    ASL.nativeEventBridgeListTagsForResource = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_37.ListTagsForResourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listTargetsByRule'*/
    ASL.nativeEventBridgeListTargetsByRule = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_38.ListTargetsByRuleCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putEvents'*/
    ASL.nativeEventBridgePutEvents = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_39.PutEventsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putPartnerEvents'*/
    ASL.nativeEventBridgePutPartnerEvents = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_40.PutPartnerEventsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putPermission'*/
    ASL.nativeEventBridgePutPermission = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_41.PutPermissionCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putRule'*/
    ASL.nativeEventBridgePutRule = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_42.PutRuleCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putTargets'*/
    ASL.nativeEventBridgePutTargets = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_43.PutTargetsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:removePermission'*/
    ASL.nativeEventBridgeRemovePermission = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_44.RemovePermissionCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:removeTargets'*/
    ASL.nativeEventBridgeRemoveTargets = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_45.RemoveTargetsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:startReplay'*/
    ASL.nativeEventBridgeStartReplay = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_46.StartReplayCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:tagResource'*/
    ASL.nativeEventBridgeTagResource = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_47.TagResourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:testEventPattern'*/
    ASL.nativeEventBridgeTestEventPattern = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_48.TestEventPatternCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:untagResource'*/
    ASL.nativeEventBridgeUntagResource = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_49.UntagResourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:updateApiDestination'*/
    ASL.nativeEventBridgeUpdateApiDestination = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_50.UpdateApiDestinationCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:updateArchive'*/
    ASL.nativeEventBridgeUpdateArchive = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_51.UpdateArchiveCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:updateConnection'*/
    ASL.nativeEventBridgeUpdateConnection = function (input) {
        var eventbridge = new client_eventbridge_1.EventBridgeClient({});
        var command = new client_eventbridge_52.UpdateConnectionCommand(input);
        return eventbridge.send(command);
    };
})(ASL = exports.ASL || (exports.ASL = {}));
