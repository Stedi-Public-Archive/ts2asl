import { LambdaClient } from "@aws-sdk/client-lambda";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { AddLayerVersionPermissionCommandInput, AddLayerVersionPermissionCommandOutput, AddLayerVersionPermissionCommand } from "@aws-sdk/client-lambda";
import { AddPermissionCommandInput, AddPermissionCommandOutput, AddPermissionCommand } from "@aws-sdk/client-lambda";
import { CreateAliasCommandInput, CreateAliasCommandOutput, CreateAliasCommand } from "@aws-sdk/client-lambda";
import { CreateCodeSigningConfigCommandInput, CreateCodeSigningConfigCommandOutput, CreateCodeSigningConfigCommand } from "@aws-sdk/client-lambda";
import { CreateEventSourceMappingCommandInput, CreateEventSourceMappingCommandOutput, CreateEventSourceMappingCommand } from "@aws-sdk/client-lambda";
import { CreateFunctionCommandInput, CreateFunctionCommandOutput, CreateFunctionCommand } from "@aws-sdk/client-lambda";
import { DeleteAliasCommandInput, DeleteAliasCommandOutput, DeleteAliasCommand } from "@aws-sdk/client-lambda";
import { DeleteCodeSigningConfigCommandInput, DeleteCodeSigningConfigCommandOutput, DeleteCodeSigningConfigCommand } from "@aws-sdk/client-lambda";
import { DeleteEventSourceMappingCommandInput, DeleteEventSourceMappingCommandOutput, DeleteEventSourceMappingCommand } from "@aws-sdk/client-lambda";
import { DeleteFunctionCommandInput, DeleteFunctionCommandOutput, DeleteFunctionCommand } from "@aws-sdk/client-lambda";
import { DeleteFunctionCodeSigningConfigCommandInput, DeleteFunctionCodeSigningConfigCommandOutput, DeleteFunctionCodeSigningConfigCommand } from "@aws-sdk/client-lambda";
import { DeleteFunctionConcurrencyCommandInput, DeleteFunctionConcurrencyCommandOutput, DeleteFunctionConcurrencyCommand } from "@aws-sdk/client-lambda";
import { DeleteFunctionEventInvokeConfigCommandInput, DeleteFunctionEventInvokeConfigCommandOutput, DeleteFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda";
import { DeleteLayerVersionCommandInput, DeleteLayerVersionCommandOutput, DeleteLayerVersionCommand } from "@aws-sdk/client-lambda";
import { DeleteProvisionedConcurrencyConfigCommandInput, DeleteProvisionedConcurrencyConfigCommandOutput, DeleteProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput, GetAccountSettingsCommand } from "@aws-sdk/client-lambda";
import { GetAliasCommandInput, GetAliasCommandOutput, GetAliasCommand } from "@aws-sdk/client-lambda";
import { GetCodeSigningConfigCommandInput, GetCodeSigningConfigCommandOutput, GetCodeSigningConfigCommand } from "@aws-sdk/client-lambda";
import { GetEventSourceMappingCommandInput, GetEventSourceMappingCommandOutput, GetEventSourceMappingCommand } from "@aws-sdk/client-lambda";
import { GetFunctionCommandInput, GetFunctionCommandOutput, GetFunctionCommand } from "@aws-sdk/client-lambda";
import { GetFunctionCodeSigningConfigCommandInput, GetFunctionCodeSigningConfigCommandOutput, GetFunctionCodeSigningConfigCommand } from "@aws-sdk/client-lambda";
import { GetFunctionConcurrencyCommandInput, GetFunctionConcurrencyCommandOutput, GetFunctionConcurrencyCommand } from "@aws-sdk/client-lambda";
import { GetFunctionConfigurationCommandInput, GetFunctionConfigurationCommandOutput, GetFunctionConfigurationCommand } from "@aws-sdk/client-lambda";
import { GetFunctionEventInvokeConfigCommandInput, GetFunctionEventInvokeConfigCommandOutput, GetFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda";
import { GetLayerVersionCommandInput, GetLayerVersionCommandOutput, GetLayerVersionCommand } from "@aws-sdk/client-lambda";
import { GetLayerVersionByArnCommandInput, GetLayerVersionByArnCommandOutput, GetLayerVersionByArnCommand } from "@aws-sdk/client-lambda";
import { GetLayerVersionPolicyCommandInput, GetLayerVersionPolicyCommandOutput, GetLayerVersionPolicyCommand } from "@aws-sdk/client-lambda";
import { GetPolicyCommandInput, GetPolicyCommandOutput, GetPolicyCommand } from "@aws-sdk/client-lambda";
import { GetProvisionedConcurrencyConfigCommandInput, GetProvisionedConcurrencyConfigCommandOutput, GetProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda";
import { InvokeCommandInput, InvokeCommandOutput, InvokeCommand } from "@aws-sdk/client-lambda";
import { ListAliasesCommandInput, ListAliasesCommandOutput, ListAliasesCommand } from "@aws-sdk/client-lambda";
import { ListCodeSigningConfigsCommandInput, ListCodeSigningConfigsCommandOutput, ListCodeSigningConfigsCommand } from "@aws-sdk/client-lambda";
import { ListEventSourceMappingsCommandInput, ListEventSourceMappingsCommandOutput, ListEventSourceMappingsCommand } from "@aws-sdk/client-lambda";
import { ListFunctionEventInvokeConfigsCommandInput, ListFunctionEventInvokeConfigsCommandOutput, ListFunctionEventInvokeConfigsCommand } from "@aws-sdk/client-lambda";
import { ListFunctionsCommandInput, ListFunctionsCommandOutput, ListFunctionsCommand } from "@aws-sdk/client-lambda";
import { ListFunctionsByCodeSigningConfigCommandInput, ListFunctionsByCodeSigningConfigCommandOutput, ListFunctionsByCodeSigningConfigCommand } from "@aws-sdk/client-lambda";
import { ListLayerVersionsCommandInput, ListLayerVersionsCommandOutput, ListLayerVersionsCommand } from "@aws-sdk/client-lambda";
import { ListLayersCommandInput, ListLayersCommandOutput, ListLayersCommand } from "@aws-sdk/client-lambda";
import { ListProvisionedConcurrencyConfigsCommandInput, ListProvisionedConcurrencyConfigsCommandOutput, ListProvisionedConcurrencyConfigsCommand } from "@aws-sdk/client-lambda";
import { ListTagsCommandInput, ListTagsCommandOutput, ListTagsCommand } from "@aws-sdk/client-lambda";
import { ListVersionsByFunctionCommandInput, ListVersionsByFunctionCommandOutput, ListVersionsByFunctionCommand } from "@aws-sdk/client-lambda";
import { PublishLayerVersionCommandInput, PublishLayerVersionCommandOutput, PublishLayerVersionCommand } from "@aws-sdk/client-lambda";
import { PublishVersionCommandInput, PublishVersionCommandOutput, PublishVersionCommand } from "@aws-sdk/client-lambda";
import { PutFunctionCodeSigningConfigCommandInput, PutFunctionCodeSigningConfigCommandOutput, PutFunctionCodeSigningConfigCommand } from "@aws-sdk/client-lambda";
import { PutFunctionConcurrencyCommandInput, PutFunctionConcurrencyCommandOutput, PutFunctionConcurrencyCommand } from "@aws-sdk/client-lambda";
import { PutFunctionEventInvokeConfigCommandInput, PutFunctionEventInvokeConfigCommandOutput, PutFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda";
import { PutProvisionedConcurrencyConfigCommandInput, PutProvisionedConcurrencyConfigCommandOutput, PutProvisionedConcurrencyConfigCommand } from "@aws-sdk/client-lambda";
import { RemoveLayerVersionPermissionCommandInput, RemoveLayerVersionPermissionCommandOutput, RemoveLayerVersionPermissionCommand } from "@aws-sdk/client-lambda";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput, RemovePermissionCommand } from "@aws-sdk/client-lambda";
import { TagResourceCommandInput, TagResourceCommandOutput, TagResourceCommand } from "@aws-sdk/client-lambda";
import { UntagResourceCommandInput, UntagResourceCommandOutput, UntagResourceCommand } from "@aws-sdk/client-lambda";
import { UpdateAliasCommandInput, UpdateAliasCommandOutput, UpdateAliasCommand } from "@aws-sdk/client-lambda";
import { UpdateCodeSigningConfigCommandInput, UpdateCodeSigningConfigCommandOutput, UpdateCodeSigningConfigCommand } from "@aws-sdk/client-lambda";
import { UpdateEventSourceMappingCommandInput, UpdateEventSourceMappingCommandOutput, UpdateEventSourceMappingCommand } from "@aws-sdk/client-lambda";
import { UpdateFunctionCodeCommandInput, UpdateFunctionCodeCommandOutput, UpdateFunctionCodeCommand } from "@aws-sdk/client-lambda";
import { UpdateFunctionConfigurationCommandInput, UpdateFunctionConfigurationCommandOutput, UpdateFunctionConfigurationCommand } from "@aws-sdk/client-lambda";
import { UpdateFunctionEventInvokeConfigCommandInput, UpdateFunctionEventInvokeConfigCommandOutput, UpdateFunctionEventInvokeConfigCommand } from "@aws-sdk/client-lambda";


declare module "@aws-sdk/client-lambda" {
  interface InvokeCommandInput {
      Payload: {};
  }
}


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:addLayerVersionPermission'*/
export const sdkLambdaAddLayerVersionPermission = (input: SdkIntegrationTask<AddLayerVersionPermissionCommandInput>): Promise<AddLayerVersionPermissionCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new AddLayerVersionPermissionCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:addPermission'*/
export const sdkLambdaAddPermission = (input: SdkIntegrationTask<AddPermissionCommandInput>): Promise<AddPermissionCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new AddPermissionCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:createAlias'*/
export const sdkLambdaCreateAlias = (input: SdkIntegrationTask<CreateAliasCommandInput>): Promise<CreateAliasCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new CreateAliasCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:createCodeSigningConfig'*/
export const sdkLambdaCreateCodeSigningConfig = (input: SdkIntegrationTask<CreateCodeSigningConfigCommandInput>): Promise<CreateCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new CreateCodeSigningConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:createEventSourceMapping'*/
export const sdkLambdaCreateEventSourceMapping = (input: SdkIntegrationTask<CreateEventSourceMappingCommandInput>): Promise<CreateEventSourceMappingCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new CreateEventSourceMappingCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:createFunction'*/
export const sdkLambdaCreateFunction = (input: SdkIntegrationTask<CreateFunctionCommandInput>): Promise<CreateFunctionCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new CreateFunctionCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteAlias'*/
export const sdkLambdaDeleteAlias = (input: SdkIntegrationTask<DeleteAliasCommandInput>): Promise<DeleteAliasCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new DeleteAliasCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteCodeSigningConfig'*/
export const sdkLambdaDeleteCodeSigningConfig = (input: SdkIntegrationTask<DeleteCodeSigningConfigCommandInput>): Promise<DeleteCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new DeleteCodeSigningConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteEventSourceMapping'*/
export const sdkLambdaDeleteEventSourceMapping = (input: SdkIntegrationTask<DeleteEventSourceMappingCommandInput>): Promise<DeleteEventSourceMappingCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new DeleteEventSourceMappingCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteFunction'*/
export const sdkLambdaDeleteFunction = (input: SdkIntegrationTask<DeleteFunctionCommandInput>): Promise<DeleteFunctionCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new DeleteFunctionCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteFunctionCodeSigningConfig'*/
export const sdkLambdaDeleteFunctionCodeSigningConfig = (input: SdkIntegrationTask<DeleteFunctionCodeSigningConfigCommandInput>): Promise<DeleteFunctionCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new DeleteFunctionCodeSigningConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteFunctionConcurrency'*/
export const sdkLambdaDeleteFunctionConcurrency = (input: SdkIntegrationTask<DeleteFunctionConcurrencyCommandInput>): Promise<DeleteFunctionConcurrencyCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new DeleteFunctionConcurrencyCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteFunctionEventInvokeConfig'*/
export const sdkLambdaDeleteFunctionEventInvokeConfig = (input: SdkIntegrationTask<DeleteFunctionEventInvokeConfigCommandInput>): Promise<DeleteFunctionEventInvokeConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new DeleteFunctionEventInvokeConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteLayerVersion'*/
export const sdkLambdaDeleteLayerVersion = (input: SdkIntegrationTask<DeleteLayerVersionCommandInput>): Promise<DeleteLayerVersionCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new DeleteLayerVersionCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteProvisionedConcurrencyConfig'*/
export const sdkLambdaDeleteProvisionedConcurrencyConfig = (input: SdkIntegrationTask<DeleteProvisionedConcurrencyConfigCommandInput>): Promise<DeleteProvisionedConcurrencyConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new DeleteProvisionedConcurrencyConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getAccountSettings'*/
export const sdkLambdaGetAccountSettings = (input: SdkIntegrationTask<GetAccountSettingsCommandInput>): Promise<GetAccountSettingsCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetAccountSettingsCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getAlias'*/
export const sdkLambdaGetAlias = (input: SdkIntegrationTask<GetAliasCommandInput>): Promise<GetAliasCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetAliasCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getCodeSigningConfig'*/
export const sdkLambdaGetCodeSigningConfig = (input: SdkIntegrationTask<GetCodeSigningConfigCommandInput>): Promise<GetCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetCodeSigningConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getEventSourceMapping'*/
export const sdkLambdaGetEventSourceMapping = (input: SdkIntegrationTask<GetEventSourceMappingCommandInput>): Promise<GetEventSourceMappingCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetEventSourceMappingCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunction'*/
export const sdkLambdaGetFunction = (input: SdkIntegrationTask<GetFunctionCommandInput>): Promise<GetFunctionCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetFunctionCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunctionCodeSigningConfig'*/
export const sdkLambdaGetFunctionCodeSigningConfig = (input: SdkIntegrationTask<GetFunctionCodeSigningConfigCommandInput>): Promise<GetFunctionCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetFunctionCodeSigningConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunctionConcurrency'*/
export const sdkLambdaGetFunctionConcurrency = (input: SdkIntegrationTask<GetFunctionConcurrencyCommandInput>): Promise<GetFunctionConcurrencyCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetFunctionConcurrencyCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunctionConfiguration'*/
export const sdkLambdaGetFunctionConfiguration = (input: SdkIntegrationTask<GetFunctionConfigurationCommandInput>): Promise<GetFunctionConfigurationCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetFunctionConfigurationCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunctionEventInvokeConfig'*/
export const sdkLambdaGetFunctionEventInvokeConfig = (input: SdkIntegrationTask<GetFunctionEventInvokeConfigCommandInput>): Promise<GetFunctionEventInvokeConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetFunctionEventInvokeConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getLayerVersion'*/
export const sdkLambdaGetLayerVersion = (input: SdkIntegrationTask<GetLayerVersionCommandInput>): Promise<GetLayerVersionCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetLayerVersionCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getLayerVersionByArn'*/
export const sdkLambdaGetLayerVersionByArn = (input: SdkIntegrationTask<GetLayerVersionByArnCommandInput>): Promise<GetLayerVersionByArnCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetLayerVersionByArnCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getLayerVersionPolicy'*/
export const sdkLambdaGetLayerVersionPolicy = (input: SdkIntegrationTask<GetLayerVersionPolicyCommandInput>): Promise<GetLayerVersionPolicyCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetLayerVersionPolicyCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getPolicy'*/
export const sdkLambdaGetPolicy = (input: SdkIntegrationTask<GetPolicyCommandInput>): Promise<GetPolicyCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetPolicyCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getProvisionedConcurrencyConfig'*/
export const sdkLambdaGetProvisionedConcurrencyConfig = (input: SdkIntegrationTask<GetProvisionedConcurrencyConfigCommandInput>): Promise<GetProvisionedConcurrencyConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new GetProvisionedConcurrencyConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:invoke'*/
export const sdkLambdaInvoke = (input: SdkIntegrationTask<InvokeCommandInput>): Promise<InvokeCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new InvokeCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listAliases'*/
export const sdkLambdaListAliases = (input: SdkIntegrationTask<ListAliasesCommandInput>): Promise<ListAliasesCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new ListAliasesCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listCodeSigningConfigs'*/
export const sdkLambdaListCodeSigningConfigs = (input: SdkIntegrationTask<ListCodeSigningConfigsCommandInput>): Promise<ListCodeSigningConfigsCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new ListCodeSigningConfigsCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listEventSourceMappings'*/
export const sdkLambdaListEventSourceMappings = (input: SdkIntegrationTask<ListEventSourceMappingsCommandInput>): Promise<ListEventSourceMappingsCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new ListEventSourceMappingsCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listFunctionEventInvokeConfigs'*/
export const sdkLambdaListFunctionEventInvokeConfigs = (input: SdkIntegrationTask<ListFunctionEventInvokeConfigsCommandInput>): Promise<ListFunctionEventInvokeConfigsCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new ListFunctionEventInvokeConfigsCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listFunctions'*/
export const sdkLambdaListFunctions = (input: SdkIntegrationTask<ListFunctionsCommandInput>): Promise<ListFunctionsCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new ListFunctionsCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listFunctionsByCodeSigningConfig'*/
export const sdkLambdaListFunctionsByCodeSigningConfig = (input: SdkIntegrationTask<ListFunctionsByCodeSigningConfigCommandInput>): Promise<ListFunctionsByCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new ListFunctionsByCodeSigningConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listLayerVersions'*/
export const sdkLambdaListLayerVersions = (input: SdkIntegrationTask<ListLayerVersionsCommandInput>): Promise<ListLayerVersionsCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new ListLayerVersionsCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listLayers'*/
export const sdkLambdaListLayers = (input: SdkIntegrationTask<ListLayersCommandInput>): Promise<ListLayersCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new ListLayersCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listProvisionedConcurrencyConfigs'*/
export const sdkLambdaListProvisionedConcurrencyConfigs = (input: SdkIntegrationTask<ListProvisionedConcurrencyConfigsCommandInput>): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new ListProvisionedConcurrencyConfigsCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listTags'*/
export const sdkLambdaListTags = (input: SdkIntegrationTask<ListTagsCommandInput>): Promise<ListTagsCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new ListTagsCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listVersionsByFunction'*/
export const sdkLambdaListVersionsByFunction = (input: SdkIntegrationTask<ListVersionsByFunctionCommandInput>): Promise<ListVersionsByFunctionCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new ListVersionsByFunctionCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:publishLayerVersion'*/
export const sdkLambdaPublishLayerVersion = (input: SdkIntegrationTask<PublishLayerVersionCommandInput>): Promise<PublishLayerVersionCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new PublishLayerVersionCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:publishVersion'*/
export const sdkLambdaPublishVersion = (input: SdkIntegrationTask<PublishVersionCommandInput>): Promise<PublishVersionCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new PublishVersionCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:putFunctionCodeSigningConfig'*/
export const sdkLambdaPutFunctionCodeSigningConfig = (input: SdkIntegrationTask<PutFunctionCodeSigningConfigCommandInput>): Promise<PutFunctionCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new PutFunctionCodeSigningConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:putFunctionConcurrency'*/
export const sdkLambdaPutFunctionConcurrency = (input: SdkIntegrationTask<PutFunctionConcurrencyCommandInput>): Promise<PutFunctionConcurrencyCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new PutFunctionConcurrencyCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:putFunctionEventInvokeConfig'*/
export const sdkLambdaPutFunctionEventInvokeConfig = (input: SdkIntegrationTask<PutFunctionEventInvokeConfigCommandInput>): Promise<PutFunctionEventInvokeConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new PutFunctionEventInvokeConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:putProvisionedConcurrencyConfig'*/
export const sdkLambdaPutProvisionedConcurrencyConfig = (input: SdkIntegrationTask<PutProvisionedConcurrencyConfigCommandInput>): Promise<PutProvisionedConcurrencyConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new PutProvisionedConcurrencyConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:removeLayerVersionPermission'*/
export const sdkLambdaRemoveLayerVersionPermission = (input: SdkIntegrationTask<RemoveLayerVersionPermissionCommandInput>): Promise<RemoveLayerVersionPermissionCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new RemoveLayerVersionPermissionCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:removePermission'*/
export const sdkLambdaRemovePermission = (input: SdkIntegrationTask<RemovePermissionCommandInput>): Promise<RemovePermissionCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new RemovePermissionCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:tagResource'*/
export const sdkLambdaTagResource = (input: SdkIntegrationTask<TagResourceCommandInput>): Promise<TagResourceCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new TagResourceCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:untagResource'*/
export const sdkLambdaUntagResource = (input: SdkIntegrationTask<UntagResourceCommandInput>): Promise<UntagResourceCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new UntagResourceCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateAlias'*/
export const sdkLambdaUpdateAlias = (input: SdkIntegrationTask<UpdateAliasCommandInput>): Promise<UpdateAliasCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new UpdateAliasCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateCodeSigningConfig'*/
export const sdkLambdaUpdateCodeSigningConfig = (input: SdkIntegrationTask<UpdateCodeSigningConfigCommandInput>): Promise<UpdateCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new UpdateCodeSigningConfigCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateEventSourceMapping'*/
export const sdkLambdaUpdateEventSourceMapping = (input: SdkIntegrationTask<UpdateEventSourceMappingCommandInput>): Promise<UpdateEventSourceMappingCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new UpdateEventSourceMappingCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateFunctionCode'*/
export const sdkLambdaUpdateFunctionCode = (input: SdkIntegrationTask<UpdateFunctionCodeCommandInput>): Promise<UpdateFunctionCodeCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new UpdateFunctionCodeCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateFunctionConfiguration'*/
export const sdkLambdaUpdateFunctionConfiguration = (input: SdkIntegrationTask<UpdateFunctionConfigurationCommandInput>): Promise<UpdateFunctionConfigurationCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new UpdateFunctionConfigurationCommand(input.parameters);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateFunctionEventInvokeConfig'*/
export const sdkLambdaUpdateFunctionEventInvokeConfig = (input: SdkIntegrationTask<UpdateFunctionEventInvokeConfigCommandInput>): Promise<UpdateFunctionEventInvokeConfigCommandOutput> => {
    const lambda = new LambdaClient(clientConfig);
    const command = new UpdateFunctionEventInvokeConfigCommand(input.parameters);
    return lambda.send(command);
};

