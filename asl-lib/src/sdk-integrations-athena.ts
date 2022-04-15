import { AthenaClient } from "@aws-sdk/client-athena";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput, BatchGetNamedQueryCommand } from "@aws-sdk/client-athena";
import { BatchGetQueryExecutionCommandInput, BatchGetQueryExecutionCommandOutput, BatchGetQueryExecutionCommand } from "@aws-sdk/client-athena";
import { CreateDataCatalogCommandInput, CreateDataCatalogCommandOutput, CreateDataCatalogCommand } from "@aws-sdk/client-athena";
import { CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput, CreateNamedQueryCommand } from "@aws-sdk/client-athena";
import { CreatePreparedStatementCommandInput, CreatePreparedStatementCommandOutput, CreatePreparedStatementCommand } from "@aws-sdk/client-athena";
import { CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput, CreateWorkGroupCommand } from "@aws-sdk/client-athena";
import { DeleteDataCatalogCommandInput, DeleteDataCatalogCommandOutput, DeleteDataCatalogCommand } from "@aws-sdk/client-athena";
import { DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput, DeleteNamedQueryCommand } from "@aws-sdk/client-athena";
import { DeletePreparedStatementCommandInput, DeletePreparedStatementCommandOutput, DeletePreparedStatementCommand } from "@aws-sdk/client-athena";
import { DeleteWorkGroupCommandInput, DeleteWorkGroupCommandOutput, DeleteWorkGroupCommand } from "@aws-sdk/client-athena";
import { GetDataCatalogCommandInput, GetDataCatalogCommandOutput, GetDataCatalogCommand } from "@aws-sdk/client-athena";
import { GetDatabaseCommandInput, GetDatabaseCommandOutput, GetDatabaseCommand } from "@aws-sdk/client-athena";
import { GetNamedQueryCommandInput, GetNamedQueryCommandOutput, GetNamedQueryCommand } from "@aws-sdk/client-athena";
import { GetPreparedStatementCommandInput, GetPreparedStatementCommandOutput, GetPreparedStatementCommand } from "@aws-sdk/client-athena";
import { GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput, GetQueryExecutionCommand } from "@aws-sdk/client-athena";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput, GetQueryResultsCommand } from "@aws-sdk/client-athena";
import { GetTableMetadataCommandInput, GetTableMetadataCommandOutput, GetTableMetadataCommand } from "@aws-sdk/client-athena";
import { GetWorkGroupCommandInput, GetWorkGroupCommandOutput, GetWorkGroupCommand } from "@aws-sdk/client-athena";
import { ListDataCatalogsCommandInput, ListDataCatalogsCommandOutput, ListDataCatalogsCommand } from "@aws-sdk/client-athena";
import { ListDatabasesCommandInput, ListDatabasesCommandOutput, ListDatabasesCommand } from "@aws-sdk/client-athena";
import { ListEngineVersionsCommandInput, ListEngineVersionsCommandOutput, ListEngineVersionsCommand } from "@aws-sdk/client-athena";
import { ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput, ListNamedQueriesCommand } from "@aws-sdk/client-athena";
import { ListPreparedStatementsCommandInput, ListPreparedStatementsCommandOutput, ListPreparedStatementsCommand } from "@aws-sdk/client-athena";
import { ListQueryExecutionsCommandInput, ListQueryExecutionsCommandOutput, ListQueryExecutionsCommand } from "@aws-sdk/client-athena";
import { ListTableMetadataCommandInput, ListTableMetadataCommandOutput, ListTableMetadataCommand } from "@aws-sdk/client-athena";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, ListTagsForResourceCommand } from "@aws-sdk/client-athena";
import { ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput, ListWorkGroupsCommand } from "@aws-sdk/client-athena";
import { StartQueryExecutionCommandInput, StartQueryExecutionCommandOutput, StartQueryExecutionCommand } from "@aws-sdk/client-athena";
import { StopQueryExecutionCommandInput, StopQueryExecutionCommandOutput, StopQueryExecutionCommand } from "@aws-sdk/client-athena";
import { TagResourceCommandInput, TagResourceCommandOutput, TagResourceCommand } from "@aws-sdk/client-athena";
import { UntagResourceCommandInput, UntagResourceCommandOutput, UntagResourceCommand } from "@aws-sdk/client-athena";
import { UpdateDataCatalogCommandInput, UpdateDataCatalogCommandOutput, UpdateDataCatalogCommand } from "@aws-sdk/client-athena";
import { UpdatePreparedStatementCommandInput, UpdatePreparedStatementCommandOutput, UpdatePreparedStatementCommand } from "@aws-sdk/client-athena";
import { UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput, UpdateWorkGroupCommand } from "@aws-sdk/client-athena";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:batchGetNamedQuery'*/
export const sdkAthenaBatchGetNamedQuery = (input: SdkIntegrationTask<BatchGetNamedQueryCommandInput>): Promise<BatchGetNamedQueryCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new BatchGetNamedQueryCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:batchGetQueryExecution'*/
export const sdkAthenaBatchGetQueryExecution = (input: SdkIntegrationTask<BatchGetQueryExecutionCommandInput>): Promise<BatchGetQueryExecutionCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new BatchGetQueryExecutionCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:createDataCatalog'*/
export const sdkAthenaCreateDataCatalog = (input: SdkIntegrationTask<CreateDataCatalogCommandInput>): Promise<CreateDataCatalogCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new CreateDataCatalogCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:createNamedQuery'*/
export const sdkAthenaCreateNamedQuery = (input: SdkIntegrationTask<CreateNamedQueryCommandInput>): Promise<CreateNamedQueryCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new CreateNamedQueryCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:createPreparedStatement'*/
export const sdkAthenaCreatePreparedStatement = (input: SdkIntegrationTask<CreatePreparedStatementCommandInput>): Promise<CreatePreparedStatementCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new CreatePreparedStatementCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:createWorkGroup'*/
export const sdkAthenaCreateWorkGroup = (input: SdkIntegrationTask<CreateWorkGroupCommandInput>): Promise<CreateWorkGroupCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new CreateWorkGroupCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:deleteDataCatalog'*/
export const sdkAthenaDeleteDataCatalog = (input: SdkIntegrationTask<DeleteDataCatalogCommandInput>): Promise<DeleteDataCatalogCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new DeleteDataCatalogCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:deleteNamedQuery'*/
export const sdkAthenaDeleteNamedQuery = (input: SdkIntegrationTask<DeleteNamedQueryCommandInput>): Promise<DeleteNamedQueryCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new DeleteNamedQueryCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:deletePreparedStatement'*/
export const sdkAthenaDeletePreparedStatement = (input: SdkIntegrationTask<DeletePreparedStatementCommandInput>): Promise<DeletePreparedStatementCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new DeletePreparedStatementCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:deleteWorkGroup'*/
export const sdkAthenaDeleteWorkGroup = (input: SdkIntegrationTask<DeleteWorkGroupCommandInput>): Promise<DeleteWorkGroupCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new DeleteWorkGroupCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:getDataCatalog'*/
export const sdkAthenaGetDataCatalog = (input: SdkIntegrationTask<GetDataCatalogCommandInput>): Promise<GetDataCatalogCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new GetDataCatalogCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:getDatabase'*/
export const sdkAthenaGetDatabase = (input: SdkIntegrationTask<GetDatabaseCommandInput>): Promise<GetDatabaseCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new GetDatabaseCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:getNamedQuery'*/
export const sdkAthenaGetNamedQuery = (input: SdkIntegrationTask<GetNamedQueryCommandInput>): Promise<GetNamedQueryCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new GetNamedQueryCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:getPreparedStatement'*/
export const sdkAthenaGetPreparedStatement = (input: SdkIntegrationTask<GetPreparedStatementCommandInput>): Promise<GetPreparedStatementCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new GetPreparedStatementCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:getQueryExecution'*/
export const sdkAthenaGetQueryExecution = (input: SdkIntegrationTask<GetQueryExecutionCommandInput>): Promise<GetQueryExecutionCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new GetQueryExecutionCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:getQueryResults'*/
export const sdkAthenaGetQueryResults = (input: SdkIntegrationTask<GetQueryResultsCommandInput>): Promise<GetQueryResultsCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new GetQueryResultsCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:getTableMetadata'*/
export const sdkAthenaGetTableMetadata = (input: SdkIntegrationTask<GetTableMetadataCommandInput>): Promise<GetTableMetadataCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new GetTableMetadataCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:getWorkGroup'*/
export const sdkAthenaGetWorkGroup = (input: SdkIntegrationTask<GetWorkGroupCommandInput>): Promise<GetWorkGroupCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new GetWorkGroupCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:listDataCatalogs'*/
export const sdkAthenaListDataCatalogs = (input: SdkIntegrationTask<ListDataCatalogsCommandInput>): Promise<ListDataCatalogsCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new ListDataCatalogsCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:listDatabases'*/
export const sdkAthenaListDatabases = (input: SdkIntegrationTask<ListDatabasesCommandInput>): Promise<ListDatabasesCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new ListDatabasesCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:listEngineVersions'*/
export const sdkAthenaListEngineVersions = (input: SdkIntegrationTask<ListEngineVersionsCommandInput>): Promise<ListEngineVersionsCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new ListEngineVersionsCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:listNamedQueries'*/
export const sdkAthenaListNamedQueries = (input: SdkIntegrationTask<ListNamedQueriesCommandInput>): Promise<ListNamedQueriesCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new ListNamedQueriesCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:listPreparedStatements'*/
export const sdkAthenaListPreparedStatements = (input: SdkIntegrationTask<ListPreparedStatementsCommandInput>): Promise<ListPreparedStatementsCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new ListPreparedStatementsCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:listQueryExecutions'*/
export const sdkAthenaListQueryExecutions = (input: SdkIntegrationTask<ListQueryExecutionsCommandInput>): Promise<ListQueryExecutionsCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new ListQueryExecutionsCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:listTableMetadata'*/
export const sdkAthenaListTableMetadata = (input: SdkIntegrationTask<ListTableMetadataCommandInput>): Promise<ListTableMetadataCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new ListTableMetadataCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:listTagsForResource'*/
export const sdkAthenaListTagsForResource = (input: SdkIntegrationTask<ListTagsForResourceCommandInput>): Promise<ListTagsForResourceCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new ListTagsForResourceCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:listWorkGroups'*/
export const sdkAthenaListWorkGroups = (input: SdkIntegrationTask<ListWorkGroupsCommandInput>): Promise<ListWorkGroupsCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new ListWorkGroupsCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:startQueryExecution'*/
export const sdkAthenaStartQueryExecution = (input: SdkIntegrationTask<StartQueryExecutionCommandInput>): Promise<StartQueryExecutionCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new StartQueryExecutionCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:stopQueryExecution'*/
export const sdkAthenaStopQueryExecution = (input: SdkIntegrationTask<StopQueryExecutionCommandInput>): Promise<StopQueryExecutionCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new StopQueryExecutionCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:tagResource'*/
export const sdkAthenaTagResource = (input: SdkIntegrationTask<TagResourceCommandInput>): Promise<TagResourceCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new TagResourceCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:untagResource'*/
export const sdkAthenaUntagResource = (input: SdkIntegrationTask<UntagResourceCommandInput>): Promise<UntagResourceCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new UntagResourceCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:updateDataCatalog'*/
export const sdkAthenaUpdateDataCatalog = (input: SdkIntegrationTask<UpdateDataCatalogCommandInput>): Promise<UpdateDataCatalogCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new UpdateDataCatalogCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:updatePreparedStatement'*/
export const sdkAthenaUpdatePreparedStatement = (input: SdkIntegrationTask<UpdatePreparedStatementCommandInput>): Promise<UpdatePreparedStatementCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new UpdatePreparedStatementCommand(input.parameters);
    return athena.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:athena:updateWorkGroup'*/
export const sdkAthenaUpdateWorkGroup = (input: SdkIntegrationTask<UpdateWorkGroupCommandInput>): Promise<UpdateWorkGroupCommandOutput> => {
    const athena = new AthenaClient(clientConfig);
    const command = new UpdateWorkGroupCommand(input.parameters);
    return athena.send(command);
};

