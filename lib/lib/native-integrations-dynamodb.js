"use strict";
exports.__esModule = true;
exports.ASL = void 0;
var client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_2 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_3 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_4 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_5 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_6 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_7 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_8 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_9 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_10 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_11 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_12 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_13 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_14 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_15 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_16 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_17 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_18 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_19 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_20 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_21 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_22 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_23 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_24 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_25 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_26 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_27 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_28 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_29 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_30 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_31 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_32 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_33 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_34 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_35 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_36 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_37 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_38 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_39 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_40 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_41 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_42 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_43 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_44 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_45 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_46 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_47 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_48 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_49 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_50 = require("@aws-sdk/client-dynamodb");
var client_dynamodb_51 = require("@aws-sdk/client-dynamodb");
var ASL;
(function (ASL) {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:batchExecuteStatement'*/
    ASL.nativeDynamoDBBatchExecuteStatement = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_2.BatchExecuteStatementCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:batchGetItem'*/
    ASL.nativeDynamoDBBatchGetItem = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_3.BatchGetItemCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:batchWriteItem'*/
    ASL.nativeDynamoDBBatchWriteItem = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_4.BatchWriteItemCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:createBackup'*/
    ASL.nativeDynamoDBCreateBackup = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_5.CreateBackupCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:createGlobalTable'*/
    ASL.nativeDynamoDBCreateGlobalTable = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_6.CreateGlobalTableCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:createTable'*/
    ASL.nativeDynamoDBCreateTable = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_7.CreateTableCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:deleteBackup'*/
    ASL.nativeDynamoDBDeleteBackup = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_8.DeleteBackupCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:deleteItem'*/
    ASL.nativeDynamoDBDeleteItem = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_9.DeleteItemCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:deleteTable'*/
    ASL.nativeDynamoDBDeleteTable = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_10.DeleteTableCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeBackup'*/
    ASL.nativeDynamoDBDescribeBackup = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_11.DescribeBackupCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeContinuousBackups'*/
    ASL.nativeDynamoDBDescribeContinuousBackups = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_12.DescribeContinuousBackupsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeContributorInsights'*/
    ASL.nativeDynamoDBDescribeContributorInsights = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_13.DescribeContributorInsightsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeEndpoints'*/
    ASL.nativeDynamoDBDescribeEndpoints = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_14.DescribeEndpointsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeExport'*/
    ASL.nativeDynamoDBDescribeExport = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_15.DescribeExportCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeGlobalTable'*/
    ASL.nativeDynamoDBDescribeGlobalTable = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_16.DescribeGlobalTableCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeGlobalTableSettings'*/
    ASL.nativeDynamoDBDescribeGlobalTableSettings = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_17.DescribeGlobalTableSettingsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeKinesisStreamingDestination'*/
    ASL.nativeDynamoDBDescribeKinesisStreamingDestination = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_18.DescribeKinesisStreamingDestinationCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeLimits'*/
    ASL.nativeDynamoDBDescribeLimits = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_19.DescribeLimitsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeTable'*/
    ASL.nativeDynamoDBDescribeTable = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_20.DescribeTableCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeTableReplicaAutoScaling'*/
    ASL.nativeDynamoDBDescribeTableReplicaAutoScaling = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_21.DescribeTableReplicaAutoScalingCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeTimeToLive'*/
    ASL.nativeDynamoDBDescribeTimeToLive = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_22.DescribeTimeToLiveCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:disableKinesisStreamingDestination'*/
    ASL.nativeDynamoDBDisableKinesisStreamingDestination = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_23.DisableKinesisStreamingDestinationCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:enableKinesisStreamingDestination'*/
    ASL.nativeDynamoDBEnableKinesisStreamingDestination = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_24.EnableKinesisStreamingDestinationCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:executeStatement'*/
    ASL.nativeDynamoDBExecuteStatement = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_25.ExecuteStatementCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:executeTransaction'*/
    ASL.nativeDynamoDBExecuteTransaction = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_26.ExecuteTransactionCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:exportTableToPointInTime'*/
    ASL.nativeDynamoDBExportTableToPointInTime = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_27.ExportTableToPointInTimeCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:getItem'*/
    ASL.nativeDynamoDBGetItem = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_28.GetItemCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listBackups'*/
    ASL.nativeDynamoDBListBackups = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_29.ListBackupsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listContributorInsights'*/
    ASL.nativeDynamoDBListContributorInsights = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_30.ListContributorInsightsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listExports'*/
    ASL.nativeDynamoDBListExports = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_31.ListExportsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listGlobalTables'*/
    ASL.nativeDynamoDBListGlobalTables = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_32.ListGlobalTablesCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listTables'*/
    ASL.nativeDynamoDBListTables = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_33.ListTablesCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listTagsOfResource'*/
    ASL.nativeDynamoDBListTagsOfResource = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_34.ListTagsOfResourceCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:putItem'*/
    ASL.nativeDynamoDBPutItem = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_35.PutItemCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:query'*/
    ASL.nativeDynamoDBQuery = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_36.QueryCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:restoreTableFromBackup'*/
    ASL.nativeDynamoDBRestoreTableFromBackup = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_37.RestoreTableFromBackupCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:restoreTableToPointInTime'*/
    ASL.nativeDynamoDBRestoreTableToPointInTime = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_38.RestoreTableToPointInTimeCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:scan'*/
    ASL.nativeDynamoDBScan = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_39.ScanCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:tagResource'*/
    ASL.nativeDynamoDBTagResource = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_40.TagResourceCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:transactGetItems'*/
    ASL.nativeDynamoDBTransactGetItems = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_41.TransactGetItemsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:transactWriteItems'*/
    ASL.nativeDynamoDBTransactWriteItems = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_42.TransactWriteItemsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:untagResource'*/
    ASL.nativeDynamoDBUntagResource = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_43.UntagResourceCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateContinuousBackups'*/
    ASL.nativeDynamoDBUpdateContinuousBackups = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_44.UpdateContinuousBackupsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateContributorInsights'*/
    ASL.nativeDynamoDBUpdateContributorInsights = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_45.UpdateContributorInsightsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateGlobalTable'*/
    ASL.nativeDynamoDBUpdateGlobalTable = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_46.UpdateGlobalTableCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateGlobalTableSettings'*/
    ASL.nativeDynamoDBUpdateGlobalTableSettings = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_47.UpdateGlobalTableSettingsCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateItem'*/
    ASL.nativeDynamoDBUpdateItem = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_48.UpdateItemCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateTable'*/
    ASL.nativeDynamoDBUpdateTable = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_49.UpdateTableCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateTableReplicaAutoScaling'*/
    ASL.nativeDynamoDBUpdateTableReplicaAutoScaling = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_50.UpdateTableReplicaAutoScalingCommand(input);
        return dynamodb.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateTimeToLive'*/
    ASL.nativeDynamoDBUpdateTimeToLive = function (input) {
        var dynamodb = new client_dynamodb_1.DynamoDBClient({});
        var command = new client_dynamodb_51.UpdateTimeToLiveCommand(input);
        return dynamodb.send(command);
    };
})(ASL = exports.ASL || (exports.ASL = {}));
