import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { BatchExecuteStatementCommandInput, BatchExecuteStatementCommandOutput, BatchExecuteStatementCommand } from "@aws-sdk/client-dynamodb";
import { BatchGetItemCommandInput, BatchGetItemCommandOutput, BatchGetItemCommand } from "@aws-sdk/client-dynamodb";
import { BatchWriteItemCommandInput, BatchWriteItemCommandOutput, BatchWriteItemCommand } from "@aws-sdk/client-dynamodb";
import { CreateBackupCommandInput, CreateBackupCommandOutput, CreateBackupCommand } from "@aws-sdk/client-dynamodb";
import { CreateGlobalTableCommandInput, CreateGlobalTableCommandOutput, CreateGlobalTableCommand } from "@aws-sdk/client-dynamodb";
import { CreateTableCommandInput, CreateTableCommandOutput, CreateTableCommand } from "@aws-sdk/client-dynamodb";
import { DeleteBackupCommandInput, DeleteBackupCommandOutput, DeleteBackupCommand } from "@aws-sdk/client-dynamodb";
import { DeleteItemCommandInput, DeleteItemCommandOutput, DeleteItemCommand } from "@aws-sdk/client-dynamodb";
import { DeleteTableCommandInput, DeleteTableCommandOutput, DeleteTableCommand } from "@aws-sdk/client-dynamodb";
import { DescribeBackupCommandInput, DescribeBackupCommandOutput, DescribeBackupCommand } from "@aws-sdk/client-dynamodb";
import { DescribeContinuousBackupsCommandInput, DescribeContinuousBackupsCommandOutput, DescribeContinuousBackupsCommand } from "@aws-sdk/client-dynamodb";
import { DescribeContributorInsightsCommandInput, DescribeContributorInsightsCommandOutput, DescribeContributorInsightsCommand } from "@aws-sdk/client-dynamodb";
import { DescribeEndpointsCommandInput, DescribeEndpointsCommandOutput, DescribeEndpointsCommand } from "@aws-sdk/client-dynamodb";
import { DescribeExportCommandInput, DescribeExportCommandOutput, DescribeExportCommand } from "@aws-sdk/client-dynamodb";
import { DescribeGlobalTableCommandInput, DescribeGlobalTableCommandOutput, DescribeGlobalTableCommand } from "@aws-sdk/client-dynamodb";
import { DescribeGlobalTableSettingsCommandInput, DescribeGlobalTableSettingsCommandOutput, DescribeGlobalTableSettingsCommand } from "@aws-sdk/client-dynamodb";
import { DescribeKinesisStreamingDestinationCommandInput, DescribeKinesisStreamingDestinationCommandOutput, DescribeKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb";
import { DescribeLimitsCommandInput, DescribeLimitsCommandOutput, DescribeLimitsCommand } from "@aws-sdk/client-dynamodb";
import { DescribeTableCommandInput, DescribeTableCommandOutput, DescribeTableCommand } from "@aws-sdk/client-dynamodb";
import { DescribeTableReplicaAutoScalingCommandInput, DescribeTableReplicaAutoScalingCommandOutput, DescribeTableReplicaAutoScalingCommand } from "@aws-sdk/client-dynamodb";
import { DescribeTimeToLiveCommandInput, DescribeTimeToLiveCommandOutput, DescribeTimeToLiveCommand } from "@aws-sdk/client-dynamodb";
import { DisableKinesisStreamingDestinationCommandInput, DisableKinesisStreamingDestinationCommandOutput, DisableKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb";
import { EnableKinesisStreamingDestinationCommandInput, EnableKinesisStreamingDestinationCommandOutput, EnableKinesisStreamingDestinationCommand } from "@aws-sdk/client-dynamodb";
import { ExecuteStatementCommandInput, ExecuteStatementCommandOutput, ExecuteStatementCommand } from "@aws-sdk/client-dynamodb";
import { ExecuteTransactionCommandInput, ExecuteTransactionCommandOutput, ExecuteTransactionCommand } from "@aws-sdk/client-dynamodb";
import { ExportTableToPointInTimeCommandInput, ExportTableToPointInTimeCommandOutput, ExportTableToPointInTimeCommand } from "@aws-sdk/client-dynamodb";
import { GetItemCommandInput, GetItemCommandOutput, GetItemCommand } from "@aws-sdk/client-dynamodb";
import { ListBackupsCommandInput, ListBackupsCommandOutput, ListBackupsCommand } from "@aws-sdk/client-dynamodb";
import { ListContributorInsightsCommandInput, ListContributorInsightsCommandOutput, ListContributorInsightsCommand } from "@aws-sdk/client-dynamodb";
import { ListExportsCommandInput, ListExportsCommandOutput, ListExportsCommand } from "@aws-sdk/client-dynamodb";
import { ListGlobalTablesCommandInput, ListGlobalTablesCommandOutput, ListGlobalTablesCommand } from "@aws-sdk/client-dynamodb";
import { ListTablesCommandInput, ListTablesCommandOutput, ListTablesCommand } from "@aws-sdk/client-dynamodb";
import { ListTagsOfResourceCommandInput, ListTagsOfResourceCommandOutput, ListTagsOfResourceCommand } from "@aws-sdk/client-dynamodb";
import { PutItemCommandInput, PutItemCommandOutput, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { QueryCommandInput, QueryCommandOutput, QueryCommand } from "@aws-sdk/client-dynamodb";
import { RestoreTableFromBackupCommandInput, RestoreTableFromBackupCommandOutput, RestoreTableFromBackupCommand } from "@aws-sdk/client-dynamodb";
import { RestoreTableToPointInTimeCommandInput, RestoreTableToPointInTimeCommandOutput, RestoreTableToPointInTimeCommand } from "@aws-sdk/client-dynamodb";
import { ScanCommandInput, ScanCommandOutput, ScanCommand } from "@aws-sdk/client-dynamodb";
import { TagResourceCommandInput, TagResourceCommandOutput, TagResourceCommand } from "@aws-sdk/client-dynamodb";
import { TransactGetItemsCommandInput, TransactGetItemsCommandOutput, TransactGetItemsCommand } from "@aws-sdk/client-dynamodb";
import { TransactWriteItemsCommandInput, TransactWriteItemsCommandOutput, TransactWriteItemsCommand } from "@aws-sdk/client-dynamodb";
import { UntagResourceCommandInput, UntagResourceCommandOutput, UntagResourceCommand } from "@aws-sdk/client-dynamodb";
import { UpdateContinuousBackupsCommandInput, UpdateContinuousBackupsCommandOutput, UpdateContinuousBackupsCommand } from "@aws-sdk/client-dynamodb";
import { UpdateContributorInsightsCommandInput, UpdateContributorInsightsCommandOutput, UpdateContributorInsightsCommand } from "@aws-sdk/client-dynamodb";
import { UpdateGlobalTableCommandInput, UpdateGlobalTableCommandOutput, UpdateGlobalTableCommand } from "@aws-sdk/client-dynamodb";
import { UpdateGlobalTableSettingsCommandInput, UpdateGlobalTableSettingsCommandOutput, UpdateGlobalTableSettingsCommand } from "@aws-sdk/client-dynamodb";
import { UpdateItemCommandInput, UpdateItemCommandOutput, UpdateItemCommand } from "@aws-sdk/client-dynamodb";
import { UpdateTableCommandInput, UpdateTableCommandOutput, UpdateTableCommand } from "@aws-sdk/client-dynamodb";
import { UpdateTableReplicaAutoScalingCommandInput, UpdateTableReplicaAutoScalingCommandOutput, UpdateTableReplicaAutoScalingCommand } from "@aws-sdk/client-dynamodb";
import { UpdateTimeToLiveCommandInput, UpdateTimeToLiveCommandOutput, UpdateTimeToLiveCommand } from "@aws-sdk/client-dynamodb";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:batchExecuteStatement'*/
export const sdkDynamoDBBatchExecuteStatement = (input: SdkIntegrationTask<BatchExecuteStatementCommandInput>): Promise<BatchExecuteStatementCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new BatchExecuteStatementCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:batchGetItem'*/
export const sdkDynamoDBBatchGetItem = (input: SdkIntegrationTask<BatchGetItemCommandInput>): Promise<BatchGetItemCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new BatchGetItemCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:batchWriteItem'*/
export const sdkDynamoDBBatchWriteItem = (input: SdkIntegrationTask<BatchWriteItemCommandInput>): Promise<BatchWriteItemCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new BatchWriteItemCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:createBackup'*/
export const sdkDynamoDBCreateBackup = (input: SdkIntegrationTask<CreateBackupCommandInput>): Promise<CreateBackupCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new CreateBackupCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:createGlobalTable'*/
export const sdkDynamoDBCreateGlobalTable = (input: SdkIntegrationTask<CreateGlobalTableCommandInput>): Promise<CreateGlobalTableCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new CreateGlobalTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:createTable'*/
export const sdkDynamoDBCreateTable = (input: SdkIntegrationTask<CreateTableCommandInput>): Promise<CreateTableCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new CreateTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:deleteBackup'*/
export const sdkDynamoDBDeleteBackup = (input: SdkIntegrationTask<DeleteBackupCommandInput>): Promise<DeleteBackupCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DeleteBackupCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:deleteItem'*/
export const sdkDynamoDBDeleteItem = (input: SdkIntegrationTask<DeleteItemCommandInput>): Promise<DeleteItemCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DeleteItemCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:deleteTable'*/
export const sdkDynamoDBDeleteTable = (input: SdkIntegrationTask<DeleteTableCommandInput>): Promise<DeleteTableCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DeleteTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeBackup'*/
export const sdkDynamoDBDescribeBackup = (input: SdkIntegrationTask<DescribeBackupCommandInput>): Promise<DescribeBackupCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DescribeBackupCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeContinuousBackups'*/
export const sdkDynamoDBDescribeContinuousBackups = (input: SdkIntegrationTask<DescribeContinuousBackupsCommandInput>): Promise<DescribeContinuousBackupsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DescribeContinuousBackupsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeContributorInsights'*/
export const sdkDynamoDBDescribeContributorInsights = (input: SdkIntegrationTask<DescribeContributorInsightsCommandInput>): Promise<DescribeContributorInsightsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DescribeContributorInsightsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeEndpoints'*/
export const sdkDynamoDBDescribeEndpoints = (input: SdkIntegrationTask<DescribeEndpointsCommandInput>): Promise<DescribeEndpointsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DescribeEndpointsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeExport'*/
export const sdkDynamoDBDescribeExport = (input: SdkIntegrationTask<DescribeExportCommandInput>): Promise<DescribeExportCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DescribeExportCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeGlobalTable'*/
export const sdkDynamoDBDescribeGlobalTable = (input: SdkIntegrationTask<DescribeGlobalTableCommandInput>): Promise<DescribeGlobalTableCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DescribeGlobalTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeGlobalTableSettings'*/
export const sdkDynamoDBDescribeGlobalTableSettings = (input: SdkIntegrationTask<DescribeGlobalTableSettingsCommandInput>): Promise<DescribeGlobalTableSettingsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DescribeGlobalTableSettingsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeKinesisStreamingDestination'*/
export const sdkDynamoDBDescribeKinesisStreamingDestination = (input: SdkIntegrationTask<DescribeKinesisStreamingDestinationCommandInput>): Promise<DescribeKinesisStreamingDestinationCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DescribeKinesisStreamingDestinationCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeLimits'*/
export const sdkDynamoDBDescribeLimits = (input: SdkIntegrationTask<DescribeLimitsCommandInput>): Promise<DescribeLimitsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DescribeLimitsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeTable'*/
export const sdkDynamoDBDescribeTable = (input: SdkIntegrationTask<DescribeTableCommandInput>): Promise<DescribeTableCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DescribeTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeTableReplicaAutoScaling'*/
export const sdkDynamoDBDescribeTableReplicaAutoScaling = (input: SdkIntegrationTask<DescribeTableReplicaAutoScalingCommandInput>): Promise<DescribeTableReplicaAutoScalingCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DescribeTableReplicaAutoScalingCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeTimeToLive'*/
export const sdkDynamoDBDescribeTimeToLive = (input: SdkIntegrationTask<DescribeTimeToLiveCommandInput>): Promise<DescribeTimeToLiveCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DescribeTimeToLiveCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:disableKinesisStreamingDestination'*/
export const sdkDynamoDBDisableKinesisStreamingDestination = (input: SdkIntegrationTask<DisableKinesisStreamingDestinationCommandInput>): Promise<DisableKinesisStreamingDestinationCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new DisableKinesisStreamingDestinationCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:enableKinesisStreamingDestination'*/
export const sdkDynamoDBEnableKinesisStreamingDestination = (input: SdkIntegrationTask<EnableKinesisStreamingDestinationCommandInput>): Promise<EnableKinesisStreamingDestinationCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new EnableKinesisStreamingDestinationCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:executeStatement'*/
export const sdkDynamoDBExecuteStatement = (input: SdkIntegrationTask<ExecuteStatementCommandInput>): Promise<ExecuteStatementCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new ExecuteStatementCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:executeTransaction'*/
export const sdkDynamoDBExecuteTransaction = (input: SdkIntegrationTask<ExecuteTransactionCommandInput>): Promise<ExecuteTransactionCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new ExecuteTransactionCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:exportTableToPointInTime'*/
export const sdkDynamoDBExportTableToPointInTime = (input: SdkIntegrationTask<ExportTableToPointInTimeCommandInput>): Promise<ExportTableToPointInTimeCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new ExportTableToPointInTimeCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:getItem'*/
export const sdkDynamoDBGetItem = (input: SdkIntegrationTask<GetItemCommandInput>): Promise<GetItemCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new GetItemCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listBackups'*/
export const sdkDynamoDBListBackups = (input: SdkIntegrationTask<ListBackupsCommandInput>): Promise<ListBackupsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new ListBackupsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listContributorInsights'*/
export const sdkDynamoDBListContributorInsights = (input: SdkIntegrationTask<ListContributorInsightsCommandInput>): Promise<ListContributorInsightsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new ListContributorInsightsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listExports'*/
export const sdkDynamoDBListExports = (input: SdkIntegrationTask<ListExportsCommandInput>): Promise<ListExportsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new ListExportsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listGlobalTables'*/
export const sdkDynamoDBListGlobalTables = (input: SdkIntegrationTask<ListGlobalTablesCommandInput>): Promise<ListGlobalTablesCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new ListGlobalTablesCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listTables'*/
export const sdkDynamoDBListTables = (input: SdkIntegrationTask<ListTablesCommandInput>): Promise<ListTablesCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new ListTablesCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listTagsOfResource'*/
export const sdkDynamoDBListTagsOfResource = (input: SdkIntegrationTask<ListTagsOfResourceCommandInput>): Promise<ListTagsOfResourceCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new ListTagsOfResourceCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:putItem'*/
export const sdkDynamoDBPutItem = (input: SdkIntegrationTask<PutItemCommandInput>): Promise<PutItemCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new PutItemCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:query'*/
export const sdkDynamoDBQuery = (input: SdkIntegrationTask<QueryCommandInput>): Promise<QueryCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new QueryCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:restoreTableFromBackup'*/
export const sdkDynamoDBRestoreTableFromBackup = (input: SdkIntegrationTask<RestoreTableFromBackupCommandInput>): Promise<RestoreTableFromBackupCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new RestoreTableFromBackupCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:restoreTableToPointInTime'*/
export const sdkDynamoDBRestoreTableToPointInTime = (input: SdkIntegrationTask<RestoreTableToPointInTimeCommandInput>): Promise<RestoreTableToPointInTimeCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new RestoreTableToPointInTimeCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:scan'*/
export const sdkDynamoDBScan = (input: SdkIntegrationTask<ScanCommandInput>): Promise<ScanCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new ScanCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:tagResource'*/
export const sdkDynamoDBTagResource = (input: SdkIntegrationTask<TagResourceCommandInput>): Promise<TagResourceCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new TagResourceCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:transactGetItems'*/
export const sdkDynamoDBTransactGetItems = (input: SdkIntegrationTask<TransactGetItemsCommandInput>): Promise<TransactGetItemsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new TransactGetItemsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:transactWriteItems'*/
export const sdkDynamoDBTransactWriteItems = (input: SdkIntegrationTask<TransactWriteItemsCommandInput>): Promise<TransactWriteItemsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new TransactWriteItemsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:untagResource'*/
export const sdkDynamoDBUntagResource = (input: SdkIntegrationTask<UntagResourceCommandInput>): Promise<UntagResourceCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new UntagResourceCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateContinuousBackups'*/
export const sdkDynamoDBUpdateContinuousBackups = (input: SdkIntegrationTask<UpdateContinuousBackupsCommandInput>): Promise<UpdateContinuousBackupsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new UpdateContinuousBackupsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateContributorInsights'*/
export const sdkDynamoDBUpdateContributorInsights = (input: SdkIntegrationTask<UpdateContributorInsightsCommandInput>): Promise<UpdateContributorInsightsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new UpdateContributorInsightsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateGlobalTable'*/
export const sdkDynamoDBUpdateGlobalTable = (input: SdkIntegrationTask<UpdateGlobalTableCommandInput>): Promise<UpdateGlobalTableCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new UpdateGlobalTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateGlobalTableSettings'*/
export const sdkDynamoDBUpdateGlobalTableSettings = (input: SdkIntegrationTask<UpdateGlobalTableSettingsCommandInput>): Promise<UpdateGlobalTableSettingsCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new UpdateGlobalTableSettingsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateItem'*/
export const sdkDynamoDBUpdateItem = (input: SdkIntegrationTask<UpdateItemCommandInput>): Promise<UpdateItemCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new UpdateItemCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateTable'*/
export const sdkDynamoDBUpdateTable = (input: SdkIntegrationTask<UpdateTableCommandInput>): Promise<UpdateTableCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new UpdateTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateTableReplicaAutoScaling'*/
export const sdkDynamoDBUpdateTableReplicaAutoScaling = (input: SdkIntegrationTask<UpdateTableReplicaAutoScalingCommandInput>): Promise<UpdateTableReplicaAutoScalingCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new UpdateTableReplicaAutoScalingCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateTimeToLive'*/
export const sdkDynamoDBUpdateTimeToLive = (input: SdkIntegrationTask<UpdateTimeToLiveCommandInput>): Promise<UpdateTimeToLiveCommandOutput> => {
    const dynamodb = new DynamoDBClient(clientConfig);
    const command = new UpdateTimeToLiveCommand(input.parameters);
    return dynamodb.send(command);
};

