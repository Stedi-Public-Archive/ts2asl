import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
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
export const nativeDynamoDBBatchExecuteStatement = (input: BatchExecuteStatementCommandInput): Promise<BatchExecuteStatementCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new BatchExecuteStatementCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:batchGetItem'*/
export const nativeDynamoDBBatchGetItem = (input: BatchGetItemCommandInput): Promise<BatchGetItemCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new BatchGetItemCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:batchWriteItem'*/
export const nativeDynamoDBBatchWriteItem = (input: BatchWriteItemCommandInput): Promise<BatchWriteItemCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new BatchWriteItemCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:createBackup'*/
export const nativeDynamoDBCreateBackup = (input: CreateBackupCommandInput): Promise<CreateBackupCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new CreateBackupCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:createGlobalTable'*/
export const nativeDynamoDBCreateGlobalTable = (input: CreateGlobalTableCommandInput): Promise<CreateGlobalTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new CreateGlobalTableCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:createTable'*/
export const nativeDynamoDBCreateTable = (input: CreateTableCommandInput): Promise<CreateTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new CreateTableCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:deleteBackup'*/
export const nativeDynamoDBDeleteBackup = (input: DeleteBackupCommandInput): Promise<DeleteBackupCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DeleteBackupCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:deleteItem'*/
export const nativeDynamoDBDeleteItem = (input: DeleteItemCommandInput): Promise<DeleteItemCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DeleteItemCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:deleteTable'*/
export const nativeDynamoDBDeleteTable = (input: DeleteTableCommandInput): Promise<DeleteTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DeleteTableCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeBackup'*/
export const nativeDynamoDBDescribeBackup = (input: DescribeBackupCommandInput): Promise<DescribeBackupCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeBackupCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeContinuousBackups'*/
export const nativeDynamoDBDescribeContinuousBackups = (input: DescribeContinuousBackupsCommandInput): Promise<DescribeContinuousBackupsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeContinuousBackupsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeContributorInsights'*/
export const nativeDynamoDBDescribeContributorInsights = (input: DescribeContributorInsightsCommandInput): Promise<DescribeContributorInsightsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeContributorInsightsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeEndpoints'*/
export const nativeDynamoDBDescribeEndpoints = (input: DescribeEndpointsCommandInput): Promise<DescribeEndpointsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeEndpointsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeExport'*/
export const nativeDynamoDBDescribeExport = (input: DescribeExportCommandInput): Promise<DescribeExportCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeExportCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeGlobalTable'*/
export const nativeDynamoDBDescribeGlobalTable = (input: DescribeGlobalTableCommandInput): Promise<DescribeGlobalTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeGlobalTableCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeGlobalTableSettings'*/
export const nativeDynamoDBDescribeGlobalTableSettings = (input: DescribeGlobalTableSettingsCommandInput): Promise<DescribeGlobalTableSettingsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeGlobalTableSettingsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeKinesisStreamingDestination'*/
export const nativeDynamoDBDescribeKinesisStreamingDestination = (input: DescribeKinesisStreamingDestinationCommandInput): Promise<DescribeKinesisStreamingDestinationCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeKinesisStreamingDestinationCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeLimits'*/
export const nativeDynamoDBDescribeLimits = (input: DescribeLimitsCommandInput): Promise<DescribeLimitsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeLimitsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeTable'*/
export const nativeDynamoDBDescribeTable = (input: DescribeTableCommandInput): Promise<DescribeTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeTableCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeTableReplicaAutoScaling'*/
export const nativeDynamoDBDescribeTableReplicaAutoScaling = (input: DescribeTableReplicaAutoScalingCommandInput): Promise<DescribeTableReplicaAutoScalingCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeTableReplicaAutoScalingCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:describeTimeToLive'*/
export const nativeDynamoDBDescribeTimeToLive = (input: DescribeTimeToLiveCommandInput): Promise<DescribeTimeToLiveCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DescribeTimeToLiveCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:disableKinesisStreamingDestination'*/
export const nativeDynamoDBDisableKinesisStreamingDestination = (input: DisableKinesisStreamingDestinationCommandInput): Promise<DisableKinesisStreamingDestinationCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new DisableKinesisStreamingDestinationCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:enableKinesisStreamingDestination'*/
export const nativeDynamoDBEnableKinesisStreamingDestination = (input: EnableKinesisStreamingDestinationCommandInput): Promise<EnableKinesisStreamingDestinationCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new EnableKinesisStreamingDestinationCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:executeStatement'*/
export const nativeDynamoDBExecuteStatement = (input: ExecuteStatementCommandInput): Promise<ExecuteStatementCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ExecuteStatementCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:executeTransaction'*/
export const nativeDynamoDBExecuteTransaction = (input: ExecuteTransactionCommandInput): Promise<ExecuteTransactionCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ExecuteTransactionCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:exportTableToPointInTime'*/
export const nativeDynamoDBExportTableToPointInTime = (input: ExportTableToPointInTimeCommandInput): Promise<ExportTableToPointInTimeCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ExportTableToPointInTimeCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:getItem'*/
export const nativeDynamoDBGetItem = (input: GetItemCommandInput): Promise<GetItemCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new GetItemCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listBackups'*/
export const nativeDynamoDBListBackups = (input: ListBackupsCommandInput): Promise<ListBackupsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ListBackupsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listContributorInsights'*/
export const nativeDynamoDBListContributorInsights = (input: ListContributorInsightsCommandInput): Promise<ListContributorInsightsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ListContributorInsightsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listExports'*/
export const nativeDynamoDBListExports = (input: ListExportsCommandInput): Promise<ListExportsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ListExportsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listGlobalTables'*/
export const nativeDynamoDBListGlobalTables = (input: ListGlobalTablesCommandInput): Promise<ListGlobalTablesCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ListGlobalTablesCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listTables'*/
export const nativeDynamoDBListTables = (input: ListTablesCommandInput): Promise<ListTablesCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ListTablesCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:listTagsOfResource'*/
export const nativeDynamoDBListTagsOfResource = (input: ListTagsOfResourceCommandInput): Promise<ListTagsOfResourceCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ListTagsOfResourceCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:putItem'*/
export const nativeDynamoDBPutItem = (input: PutItemCommandInput): Promise<PutItemCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new PutItemCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:query'*/
export const nativeDynamoDBQuery = (input: QueryCommandInput): Promise<QueryCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new QueryCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:restoreTableFromBackup'*/
export const nativeDynamoDBRestoreTableFromBackup = (input: RestoreTableFromBackupCommandInput): Promise<RestoreTableFromBackupCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new RestoreTableFromBackupCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:restoreTableToPointInTime'*/
export const nativeDynamoDBRestoreTableToPointInTime = (input: RestoreTableToPointInTimeCommandInput): Promise<RestoreTableToPointInTimeCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new RestoreTableToPointInTimeCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:scan'*/
export const nativeDynamoDBScan = (input: ScanCommandInput): Promise<ScanCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new ScanCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:tagResource'*/
export const nativeDynamoDBTagResource = (input: TagResourceCommandInput): Promise<TagResourceCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new TagResourceCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:transactGetItems'*/
export const nativeDynamoDBTransactGetItems = (input: TransactGetItemsCommandInput): Promise<TransactGetItemsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new TransactGetItemsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:transactWriteItems'*/
export const nativeDynamoDBTransactWriteItems = (input: TransactWriteItemsCommandInput): Promise<TransactWriteItemsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new TransactWriteItemsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:untagResource'*/
export const nativeDynamoDBUntagResource = (input: UntagResourceCommandInput): Promise<UntagResourceCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UntagResourceCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateContinuousBackups'*/
export const nativeDynamoDBUpdateContinuousBackups = (input: UpdateContinuousBackupsCommandInput): Promise<UpdateContinuousBackupsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateContinuousBackupsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateContributorInsights'*/
export const nativeDynamoDBUpdateContributorInsights = (input: UpdateContributorInsightsCommandInput): Promise<UpdateContributorInsightsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateContributorInsightsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateGlobalTable'*/
export const nativeDynamoDBUpdateGlobalTable = (input: UpdateGlobalTableCommandInput): Promise<UpdateGlobalTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateGlobalTableCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateGlobalTableSettings'*/
export const nativeDynamoDBUpdateGlobalTableSettings = (input: UpdateGlobalTableSettingsCommandInput): Promise<UpdateGlobalTableSettingsCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateGlobalTableSettingsCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateItem'*/
export const nativeDynamoDBUpdateItem = (input: UpdateItemCommandInput): Promise<UpdateItemCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateItemCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateTable'*/
export const nativeDynamoDBUpdateTable = (input: UpdateTableCommandInput): Promise<UpdateTableCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateTableCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateTableReplicaAutoScaling'*/
export const nativeDynamoDBUpdateTableReplicaAutoScaling = (input: UpdateTableReplicaAutoScalingCommandInput): Promise<UpdateTableReplicaAutoScalingCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateTableReplicaAutoScalingCommand(input);
    return dynamodb.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:dynamodb:updateTimeToLive'*/
export const nativeDynamoDBUpdateTimeToLive = (input: UpdateTimeToLiveCommandInput): Promise<UpdateTimeToLiveCommandOutput> => {
    const dynamodb = new DynamoDBClient({});
    const command = new UpdateTimeToLiveCommand(input);
    return dynamodb.send(command);
};

