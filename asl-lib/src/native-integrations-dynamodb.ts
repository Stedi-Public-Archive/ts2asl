import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
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
export const nativeDynamoDBBatchExecuteStatement = (input: SdkIntegrationTask<BatchExecuteStatementCommandInput>): Promise<BatchExecuteStatementCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new BatchExecuteStatementCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:batchGetItem'*/
export const nativeDynamoDBBatchGetItem = (input: SdkIntegrationTask<BatchGetItemCommandInput>): Promise<BatchGetItemCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new BatchGetItemCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:batchWriteItem'*/
export const nativeDynamoDBBatchWriteItem = (input: SdkIntegrationTask<BatchWriteItemCommandInput>): Promise<BatchWriteItemCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new BatchWriteItemCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:createBackup'*/
export const nativeDynamoDBCreateBackup = (input: SdkIntegrationTask<CreateBackupCommandInput>): Promise<CreateBackupCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new CreateBackupCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:createGlobalTable'*/
export const nativeDynamoDBCreateGlobalTable = (input: SdkIntegrationTask<CreateGlobalTableCommandInput>): Promise<CreateGlobalTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new CreateGlobalTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:createTable'*/
export const nativeDynamoDBCreateTable = (input: SdkIntegrationTask<CreateTableCommandInput>): Promise<CreateTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new CreateTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:deleteBackup'*/
export const nativeDynamoDBDeleteBackup = (input: SdkIntegrationTask<DeleteBackupCommandInput>): Promise<DeleteBackupCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DeleteBackupCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:deleteItem'*/
export const nativeDynamoDBDeleteItem = (input: SdkIntegrationTask<DeleteItemCommandInput>): Promise<DeleteItemCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DeleteItemCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:deleteTable'*/
export const nativeDynamoDBDeleteTable = (input: SdkIntegrationTask<DeleteTableCommandInput>): Promise<DeleteTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DeleteTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeBackup'*/
export const nativeDynamoDBDescribeBackup = (input: SdkIntegrationTask<DescribeBackupCommandInput>): Promise<DescribeBackupCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeBackupCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeContinuousBackups'*/
export const nativeDynamoDBDescribeContinuousBackups = (input: SdkIntegrationTask<DescribeContinuousBackupsCommandInput>): Promise<DescribeContinuousBackupsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeContinuousBackupsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeContributorInsights'*/
export const nativeDynamoDBDescribeContributorInsights = (input: SdkIntegrationTask<DescribeContributorInsightsCommandInput>): Promise<DescribeContributorInsightsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeContributorInsightsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeEndpoints'*/
export const nativeDynamoDBDescribeEndpoints = (input: SdkIntegrationTask<DescribeEndpointsCommandInput>): Promise<DescribeEndpointsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeEndpointsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeExport'*/
export const nativeDynamoDBDescribeExport = (input: SdkIntegrationTask<DescribeExportCommandInput>): Promise<DescribeExportCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeExportCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeGlobalTable'*/
export const nativeDynamoDBDescribeGlobalTable = (input: SdkIntegrationTask<DescribeGlobalTableCommandInput>): Promise<DescribeGlobalTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeGlobalTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeGlobalTableSettings'*/
export const nativeDynamoDBDescribeGlobalTableSettings = (input: SdkIntegrationTask<DescribeGlobalTableSettingsCommandInput>): Promise<DescribeGlobalTableSettingsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeGlobalTableSettingsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeKinesisStreamingDestination'*/
export const nativeDynamoDBDescribeKinesisStreamingDestination = (input: SdkIntegrationTask<DescribeKinesisStreamingDestinationCommandInput>): Promise<DescribeKinesisStreamingDestinationCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeKinesisStreamingDestinationCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeLimits'*/
export const nativeDynamoDBDescribeLimits = (input: SdkIntegrationTask<DescribeLimitsCommandInput>): Promise<DescribeLimitsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeLimitsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeTable'*/
export const nativeDynamoDBDescribeTable = (input: SdkIntegrationTask<DescribeTableCommandInput>): Promise<DescribeTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeTableReplicaAutoScaling'*/
export const nativeDynamoDBDescribeTableReplicaAutoScaling = (input: SdkIntegrationTask<DescribeTableReplicaAutoScalingCommandInput>): Promise<DescribeTableReplicaAutoScalingCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeTableReplicaAutoScalingCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeTimeToLive'*/
export const nativeDynamoDBDescribeTimeToLive = (input: SdkIntegrationTask<DescribeTimeToLiveCommandInput>): Promise<DescribeTimeToLiveCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeTimeToLiveCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:disableKinesisStreamingDestination'*/
export const nativeDynamoDBDisableKinesisStreamingDestination = (input: SdkIntegrationTask<DisableKinesisStreamingDestinationCommandInput>): Promise<DisableKinesisStreamingDestinationCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DisableKinesisStreamingDestinationCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:enableKinesisStreamingDestination'*/
export const nativeDynamoDBEnableKinesisStreamingDestination = (input: SdkIntegrationTask<EnableKinesisStreamingDestinationCommandInput>): Promise<EnableKinesisStreamingDestinationCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new EnableKinesisStreamingDestinationCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:executeStatement'*/
export const nativeDynamoDBExecuteStatement = (input: SdkIntegrationTask<ExecuteStatementCommandInput>): Promise<ExecuteStatementCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ExecuteStatementCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:executeTransaction'*/
export const nativeDynamoDBExecuteTransaction = (input: SdkIntegrationTask<ExecuteTransactionCommandInput>): Promise<ExecuteTransactionCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ExecuteTransactionCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:exportTableToPointInTime'*/
export const nativeDynamoDBExportTableToPointInTime = (input: SdkIntegrationTask<ExportTableToPointInTimeCommandInput>): Promise<ExportTableToPointInTimeCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ExportTableToPointInTimeCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:getItem'*/
export const nativeDynamoDBGetItem = (input: SdkIntegrationTask<GetItemCommandInput>): Promise<GetItemCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new GetItemCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listBackups'*/
export const nativeDynamoDBListBackups = (input: SdkIntegrationTask<ListBackupsCommandInput>): Promise<ListBackupsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ListBackupsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listContributorInsights'*/
export const nativeDynamoDBListContributorInsights = (input: SdkIntegrationTask<ListContributorInsightsCommandInput>): Promise<ListContributorInsightsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ListContributorInsightsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listExports'*/
export const nativeDynamoDBListExports = (input: SdkIntegrationTask<ListExportsCommandInput>): Promise<ListExportsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ListExportsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listGlobalTables'*/
export const nativeDynamoDBListGlobalTables = (input: SdkIntegrationTask<ListGlobalTablesCommandInput>): Promise<ListGlobalTablesCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ListGlobalTablesCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listTables'*/
export const nativeDynamoDBListTables = (input: SdkIntegrationTask<ListTablesCommandInput>): Promise<ListTablesCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ListTablesCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listTagsOfResource'*/
export const nativeDynamoDBListTagsOfResource = (input: SdkIntegrationTask<ListTagsOfResourceCommandInput>): Promise<ListTagsOfResourceCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ListTagsOfResourceCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:putItem'*/
export const nativeDynamoDBPutItem = (input: SdkIntegrationTask<PutItemCommandInput>): Promise<PutItemCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new PutItemCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:query'*/
export const nativeDynamoDBQuery = (input: SdkIntegrationTask<QueryCommandInput>): Promise<QueryCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new QueryCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:restoreTableFromBackup'*/
export const nativeDynamoDBRestoreTableFromBackup = (input: SdkIntegrationTask<RestoreTableFromBackupCommandInput>): Promise<RestoreTableFromBackupCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new RestoreTableFromBackupCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:restoreTableToPointInTime'*/
export const nativeDynamoDBRestoreTableToPointInTime = (input: SdkIntegrationTask<RestoreTableToPointInTimeCommandInput>): Promise<RestoreTableToPointInTimeCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new RestoreTableToPointInTimeCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:scan'*/
export const nativeDynamoDBScan = (input: SdkIntegrationTask<ScanCommandInput>): Promise<ScanCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ScanCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:tagResource'*/
export const nativeDynamoDBTagResource = (input: SdkIntegrationTask<TagResourceCommandInput>): Promise<TagResourceCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new TagResourceCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:transactGetItems'*/
export const nativeDynamoDBTransactGetItems = (input: SdkIntegrationTask<TransactGetItemsCommandInput>): Promise<TransactGetItemsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new TransactGetItemsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:transactWriteItems'*/
export const nativeDynamoDBTransactWriteItems = (input: SdkIntegrationTask<TransactWriteItemsCommandInput>): Promise<TransactWriteItemsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new TransactWriteItemsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:untagResource'*/
export const nativeDynamoDBUntagResource = (input: SdkIntegrationTask<UntagResourceCommandInput>): Promise<UntagResourceCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UntagResourceCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateContinuousBackups'*/
export const nativeDynamoDBUpdateContinuousBackups = (input: SdkIntegrationTask<UpdateContinuousBackupsCommandInput>): Promise<UpdateContinuousBackupsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateContinuousBackupsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateContributorInsights'*/
export const nativeDynamoDBUpdateContributorInsights = (input: SdkIntegrationTask<UpdateContributorInsightsCommandInput>): Promise<UpdateContributorInsightsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateContributorInsightsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateGlobalTable'*/
export const nativeDynamoDBUpdateGlobalTable = (input: SdkIntegrationTask<UpdateGlobalTableCommandInput>): Promise<UpdateGlobalTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateGlobalTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateGlobalTableSettings'*/
export const nativeDynamoDBUpdateGlobalTableSettings = (input: SdkIntegrationTask<UpdateGlobalTableSettingsCommandInput>): Promise<UpdateGlobalTableSettingsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateGlobalTableSettingsCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateItem'*/
export const nativeDynamoDBUpdateItem = (input: SdkIntegrationTask<UpdateItemCommandInput>): Promise<UpdateItemCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateItemCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateTable'*/
export const nativeDynamoDBUpdateTable = (input: SdkIntegrationTask<UpdateTableCommandInput>): Promise<UpdateTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateTableCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateTableReplicaAutoScaling'*/
export const nativeDynamoDBUpdateTableReplicaAutoScaling = (input: SdkIntegrationTask<UpdateTableReplicaAutoScalingCommandInput>): Promise<UpdateTableReplicaAutoScalingCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateTableReplicaAutoScalingCommand(input.parameters);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateTimeToLive'*/
export const nativeDynamoDBUpdateTimeToLive = (input: SdkIntegrationTask<UpdateTimeToLiveCommandInput>): Promise<UpdateTimeToLiveCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateTimeToLiveCommand(input.parameters);
    return dynamodb.send(command);
};

