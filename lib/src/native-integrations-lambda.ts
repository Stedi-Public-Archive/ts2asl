import { LambdaClient } from "@aws-sdk/client-lambda";
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


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:addLayerVersionPermission'*/
export const nativeLambdaAddLayerVersionPermission = (input: AddLayerVersionPermissionCommandInput): Promise<AddLayerVersionPermissionCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new AddLayerVersionPermissionCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:addPermission'*/
export const nativeLambdaAddPermission = (input: AddPermissionCommandInput): Promise<AddPermissionCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new AddPermissionCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:createAlias'*/
export const nativeLambdaCreateAlias = (input: CreateAliasCommandInput): Promise<CreateAliasCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new CreateAliasCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:createCodeSigningConfig'*/
export const nativeLambdaCreateCodeSigningConfig = (input: CreateCodeSigningConfigCommandInput): Promise<CreateCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new CreateCodeSigningConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:createEventSourceMapping'*/
export const nativeLambdaCreateEventSourceMapping = (input: CreateEventSourceMappingCommandInput): Promise<CreateEventSourceMappingCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new CreateEventSourceMappingCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:createFunction'*/
export const nativeLambdaCreateFunction = (input: CreateFunctionCommandInput): Promise<CreateFunctionCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new CreateFunctionCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteAlias'*/
export const nativeLambdaDeleteAlias = (input: DeleteAliasCommandInput): Promise<DeleteAliasCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new DeleteAliasCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteCodeSigningConfig'*/
export const nativeLambdaDeleteCodeSigningConfig = (input: DeleteCodeSigningConfigCommandInput): Promise<DeleteCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new DeleteCodeSigningConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteEventSourceMapping'*/
export const nativeLambdaDeleteEventSourceMapping = (input: DeleteEventSourceMappingCommandInput): Promise<DeleteEventSourceMappingCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new DeleteEventSourceMappingCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteFunction'*/
export const nativeLambdaDeleteFunction = (input: DeleteFunctionCommandInput): Promise<DeleteFunctionCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new DeleteFunctionCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteFunctionCodeSigningConfig'*/
export const nativeLambdaDeleteFunctionCodeSigningConfig = (input: DeleteFunctionCodeSigningConfigCommandInput): Promise<DeleteFunctionCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new DeleteFunctionCodeSigningConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteFunctionConcurrency'*/
export const nativeLambdaDeleteFunctionConcurrency = (input: DeleteFunctionConcurrencyCommandInput): Promise<DeleteFunctionConcurrencyCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new DeleteFunctionConcurrencyCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteFunctionEventInvokeConfig'*/
export const nativeLambdaDeleteFunctionEventInvokeConfig = (input: DeleteFunctionEventInvokeConfigCommandInput): Promise<DeleteFunctionEventInvokeConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new DeleteFunctionEventInvokeConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteLayerVersion'*/
export const nativeLambdaDeleteLayerVersion = (input: DeleteLayerVersionCommandInput): Promise<DeleteLayerVersionCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new DeleteLayerVersionCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteProvisionedConcurrencyConfig'*/
export const nativeLambdaDeleteProvisionedConcurrencyConfig = (input: DeleteProvisionedConcurrencyConfigCommandInput): Promise<DeleteProvisionedConcurrencyConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new DeleteProvisionedConcurrencyConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getAccountSettings'*/
export const nativeLambdaGetAccountSettings = (input: GetAccountSettingsCommandInput): Promise<GetAccountSettingsCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetAccountSettingsCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getAlias'*/
export const nativeLambdaGetAlias = (input: GetAliasCommandInput): Promise<GetAliasCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetAliasCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getCodeSigningConfig'*/
export const nativeLambdaGetCodeSigningConfig = (input: GetCodeSigningConfigCommandInput): Promise<GetCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetCodeSigningConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getEventSourceMapping'*/
export const nativeLambdaGetEventSourceMapping = (input: GetEventSourceMappingCommandInput): Promise<GetEventSourceMappingCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetEventSourceMappingCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunction'*/
export const nativeLambdaGetFunction = (input: GetFunctionCommandInput): Promise<GetFunctionCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetFunctionCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunctionCodeSigningConfig'*/
export const nativeLambdaGetFunctionCodeSigningConfig = (input: GetFunctionCodeSigningConfigCommandInput): Promise<GetFunctionCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetFunctionCodeSigningConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunctionConcurrency'*/
export const nativeLambdaGetFunctionConcurrency = (input: GetFunctionConcurrencyCommandInput): Promise<GetFunctionConcurrencyCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetFunctionConcurrencyCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunctionConfiguration'*/
export const nativeLambdaGetFunctionConfiguration = (input: GetFunctionConfigurationCommandInput): Promise<GetFunctionConfigurationCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetFunctionConfigurationCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunctionEventInvokeConfig'*/
export const nativeLambdaGetFunctionEventInvokeConfig = (input: GetFunctionEventInvokeConfigCommandInput): Promise<GetFunctionEventInvokeConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetFunctionEventInvokeConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getLayerVersion'*/
export const nativeLambdaGetLayerVersion = (input: GetLayerVersionCommandInput): Promise<GetLayerVersionCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetLayerVersionCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getLayerVersionByArn'*/
export const nativeLambdaGetLayerVersionByArn = (input: GetLayerVersionByArnCommandInput): Promise<GetLayerVersionByArnCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetLayerVersionByArnCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getLayerVersionPolicy'*/
export const nativeLambdaGetLayerVersionPolicy = (input: GetLayerVersionPolicyCommandInput): Promise<GetLayerVersionPolicyCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetLayerVersionPolicyCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getPolicy'*/
export const nativeLambdaGetPolicy = (input: GetPolicyCommandInput): Promise<GetPolicyCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetPolicyCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getProvisionedConcurrencyConfig'*/
export const nativeLambdaGetProvisionedConcurrencyConfig = (input: GetProvisionedConcurrencyConfigCommandInput): Promise<GetProvisionedConcurrencyConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new GetProvisionedConcurrencyConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:invoke'*/
export const nativeLambdaInvoke = (input: InvokeCommandInput): Promise<InvokeCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new InvokeCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listAliases'*/
export const nativeLambdaListAliases = (input: ListAliasesCommandInput): Promise<ListAliasesCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new ListAliasesCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listCodeSigningConfigs'*/
export const nativeLambdaListCodeSigningConfigs = (input: ListCodeSigningConfigsCommandInput): Promise<ListCodeSigningConfigsCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new ListCodeSigningConfigsCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listEventSourceMappings'*/
export const nativeLambdaListEventSourceMappings = (input: ListEventSourceMappingsCommandInput): Promise<ListEventSourceMappingsCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new ListEventSourceMappingsCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listFunctionEventInvokeConfigs'*/
export const nativeLambdaListFunctionEventInvokeConfigs = (input: ListFunctionEventInvokeConfigsCommandInput): Promise<ListFunctionEventInvokeConfigsCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new ListFunctionEventInvokeConfigsCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listFunctions'*/
export const nativeLambdaListFunctions = (input: ListFunctionsCommandInput): Promise<ListFunctionsCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new ListFunctionsCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listFunctionsByCodeSigningConfig'*/
export const nativeLambdaListFunctionsByCodeSigningConfig = (input: ListFunctionsByCodeSigningConfigCommandInput): Promise<ListFunctionsByCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new ListFunctionsByCodeSigningConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listLayerVersions'*/
export const nativeLambdaListLayerVersions = (input: ListLayerVersionsCommandInput): Promise<ListLayerVersionsCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new ListLayerVersionsCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listLayers'*/
export const nativeLambdaListLayers = (input: ListLayersCommandInput): Promise<ListLayersCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new ListLayersCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listProvisionedConcurrencyConfigs'*/
export const nativeLambdaListProvisionedConcurrencyConfigs = (input: ListProvisionedConcurrencyConfigsCommandInput): Promise<ListProvisionedConcurrencyConfigsCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new ListProvisionedConcurrencyConfigsCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listTags'*/
export const nativeLambdaListTags = (input: ListTagsCommandInput): Promise<ListTagsCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new ListTagsCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listVersionsByFunction'*/
export const nativeLambdaListVersionsByFunction = (input: ListVersionsByFunctionCommandInput): Promise<ListVersionsByFunctionCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new ListVersionsByFunctionCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:publishLayerVersion'*/
export const nativeLambdaPublishLayerVersion = (input: PublishLayerVersionCommandInput): Promise<PublishLayerVersionCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new PublishLayerVersionCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:publishVersion'*/
export const nativeLambdaPublishVersion = (input: PublishVersionCommandInput): Promise<PublishVersionCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new PublishVersionCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:putFunctionCodeSigningConfig'*/
export const nativeLambdaPutFunctionCodeSigningConfig = (input: PutFunctionCodeSigningConfigCommandInput): Promise<PutFunctionCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new PutFunctionCodeSigningConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:putFunctionConcurrency'*/
export const nativeLambdaPutFunctionConcurrency = (input: PutFunctionConcurrencyCommandInput): Promise<PutFunctionConcurrencyCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new PutFunctionConcurrencyCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:putFunctionEventInvokeConfig'*/
export const nativeLambdaPutFunctionEventInvokeConfig = (input: PutFunctionEventInvokeConfigCommandInput): Promise<PutFunctionEventInvokeConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new PutFunctionEventInvokeConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:putProvisionedConcurrencyConfig'*/
export const nativeLambdaPutProvisionedConcurrencyConfig = (input: PutProvisionedConcurrencyConfigCommandInput): Promise<PutProvisionedConcurrencyConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new PutProvisionedConcurrencyConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:removeLayerVersionPermission'*/
export const nativeLambdaRemoveLayerVersionPermission = (input: RemoveLayerVersionPermissionCommandInput): Promise<RemoveLayerVersionPermissionCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new RemoveLayerVersionPermissionCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:removePermission'*/
export const nativeLambdaRemovePermission = (input: RemovePermissionCommandInput): Promise<RemovePermissionCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new RemovePermissionCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:tagResource'*/
export const nativeLambdaTagResource = (input: TagResourceCommandInput): Promise<TagResourceCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new TagResourceCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:untagResource'*/
export const nativeLambdaUntagResource = (input: UntagResourceCommandInput): Promise<UntagResourceCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new UntagResourceCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateAlias'*/
export const nativeLambdaUpdateAlias = (input: UpdateAliasCommandInput): Promise<UpdateAliasCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new UpdateAliasCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateCodeSigningConfig'*/
export const nativeLambdaUpdateCodeSigningConfig = (input: UpdateCodeSigningConfigCommandInput): Promise<UpdateCodeSigningConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new UpdateCodeSigningConfigCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateEventSourceMapping'*/
export const nativeLambdaUpdateEventSourceMapping = (input: UpdateEventSourceMappingCommandInput): Promise<UpdateEventSourceMappingCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new UpdateEventSourceMappingCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateFunctionCode'*/
export const nativeLambdaUpdateFunctionCode = (input: UpdateFunctionCodeCommandInput): Promise<UpdateFunctionCodeCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new UpdateFunctionCodeCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateFunctionConfiguration'*/
export const nativeLambdaUpdateFunctionConfiguration = (input: UpdateFunctionConfigurationCommandInput): Promise<UpdateFunctionConfigurationCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new UpdateFunctionConfigurationCommand(input);
    return lambda.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateFunctionEventInvokeConfig'*/
export const nativeLambdaUpdateFunctionEventInvokeConfig = (input: UpdateFunctionEventInvokeConfigCommandInput): Promise<UpdateFunctionEventInvokeConfigCommandOutput> => {
    const lambda = new LambdaClient({});
    const command = new UpdateFunctionEventInvokeConfigCommand(input);
    return lambda.send(command);
};

