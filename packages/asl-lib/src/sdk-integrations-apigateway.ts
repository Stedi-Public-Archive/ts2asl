import { APIGatewayClient } from "@aws-sdk/client-api-gateway";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { CreateApiKeyCommandInput, CreateApiKeyCommandOutput, CreateApiKeyCommand } from "@aws-sdk/client-api-gateway";
import { CreateAuthorizerCommandInput, CreateAuthorizerCommandOutput, CreateAuthorizerCommand } from "@aws-sdk/client-api-gateway";
import { CreateBasePathMappingCommandInput, CreateBasePathMappingCommandOutput, CreateBasePathMappingCommand } from "@aws-sdk/client-api-gateway";
import { CreateDeploymentCommandInput, CreateDeploymentCommandOutput, CreateDeploymentCommand } from "@aws-sdk/client-api-gateway";
import { CreateDocumentationPartCommandInput, CreateDocumentationPartCommandOutput, CreateDocumentationPartCommand } from "@aws-sdk/client-api-gateway";
import { CreateDocumentationVersionCommandInput, CreateDocumentationVersionCommandOutput, CreateDocumentationVersionCommand } from "@aws-sdk/client-api-gateway";
import { CreateDomainNameCommandInput, CreateDomainNameCommandOutput, CreateDomainNameCommand } from "@aws-sdk/client-api-gateway";
import { CreateModelCommandInput, CreateModelCommandOutput, CreateModelCommand } from "@aws-sdk/client-api-gateway";
import { CreateRequestValidatorCommandInput, CreateRequestValidatorCommandOutput, CreateRequestValidatorCommand } from "@aws-sdk/client-api-gateway";
import { CreateResourceCommandInput, CreateResourceCommandOutput, CreateResourceCommand } from "@aws-sdk/client-api-gateway";
import { CreateRestApiCommandInput, CreateRestApiCommandOutput, CreateRestApiCommand } from "@aws-sdk/client-api-gateway";
import { CreateStageCommandInput, CreateStageCommandOutput, CreateStageCommand } from "@aws-sdk/client-api-gateway";
import { CreateUsagePlanCommandInput, CreateUsagePlanCommandOutput, CreateUsagePlanCommand } from "@aws-sdk/client-api-gateway";
import { CreateUsagePlanKeyCommandInput, CreateUsagePlanKeyCommandOutput, CreateUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway";
import { CreateVpcLinkCommandInput, CreateVpcLinkCommandOutput, CreateVpcLinkCommand } from "@aws-sdk/client-api-gateway";
import { DeleteApiKeyCommandInput, DeleteApiKeyCommandOutput, DeleteApiKeyCommand } from "@aws-sdk/client-api-gateway";
import { DeleteAuthorizerCommandInput, DeleteAuthorizerCommandOutput, DeleteAuthorizerCommand } from "@aws-sdk/client-api-gateway";
import { DeleteBasePathMappingCommandInput, DeleteBasePathMappingCommandOutput, DeleteBasePathMappingCommand } from "@aws-sdk/client-api-gateway";
import { DeleteClientCertificateCommandInput, DeleteClientCertificateCommandOutput, DeleteClientCertificateCommand } from "@aws-sdk/client-api-gateway";
import { DeleteDeploymentCommandInput, DeleteDeploymentCommandOutput, DeleteDeploymentCommand } from "@aws-sdk/client-api-gateway";
import { DeleteDocumentationPartCommandInput, DeleteDocumentationPartCommandOutput, DeleteDocumentationPartCommand } from "@aws-sdk/client-api-gateway";
import { DeleteDocumentationVersionCommandInput, DeleteDocumentationVersionCommandOutput, DeleteDocumentationVersionCommand } from "@aws-sdk/client-api-gateway";
import { DeleteDomainNameCommandInput, DeleteDomainNameCommandOutput, DeleteDomainNameCommand } from "@aws-sdk/client-api-gateway";
import { DeleteGatewayResponseCommandInput, DeleteGatewayResponseCommandOutput, DeleteGatewayResponseCommand } from "@aws-sdk/client-api-gateway";
import { DeleteIntegrationCommandInput, DeleteIntegrationCommandOutput, DeleteIntegrationCommand } from "@aws-sdk/client-api-gateway";
import { DeleteIntegrationResponseCommandInput, DeleteIntegrationResponseCommandOutput, DeleteIntegrationResponseCommand } from "@aws-sdk/client-api-gateway";
import { DeleteMethodCommandInput, DeleteMethodCommandOutput, DeleteMethodCommand } from "@aws-sdk/client-api-gateway";
import { DeleteMethodResponseCommandInput, DeleteMethodResponseCommandOutput, DeleteMethodResponseCommand } from "@aws-sdk/client-api-gateway";
import { DeleteModelCommandInput, DeleteModelCommandOutput, DeleteModelCommand } from "@aws-sdk/client-api-gateway";
import { DeleteRequestValidatorCommandInput, DeleteRequestValidatorCommandOutput, DeleteRequestValidatorCommand } from "@aws-sdk/client-api-gateway";
import { DeleteResourceCommandInput, DeleteResourceCommandOutput, DeleteResourceCommand } from "@aws-sdk/client-api-gateway";
import { DeleteRestApiCommandInput, DeleteRestApiCommandOutput, DeleteRestApiCommand } from "@aws-sdk/client-api-gateway";
import { DeleteStageCommandInput, DeleteStageCommandOutput, DeleteStageCommand } from "@aws-sdk/client-api-gateway";
import { DeleteUsagePlanCommandInput, DeleteUsagePlanCommandOutput, DeleteUsagePlanCommand } from "@aws-sdk/client-api-gateway";
import { DeleteUsagePlanKeyCommandInput, DeleteUsagePlanKeyCommandOutput, DeleteUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway";
import { DeleteVpcLinkCommandInput, DeleteVpcLinkCommandOutput, DeleteVpcLinkCommand } from "@aws-sdk/client-api-gateway";
import { FlushStageAuthorizersCacheCommandInput, FlushStageAuthorizersCacheCommandOutput, FlushStageAuthorizersCacheCommand } from "@aws-sdk/client-api-gateway";
import { FlushStageCacheCommandInput, FlushStageCacheCommandOutput, FlushStageCacheCommand } from "@aws-sdk/client-api-gateway";
import { GenerateClientCertificateCommandInput, GenerateClientCertificateCommandOutput, GenerateClientCertificateCommand } from "@aws-sdk/client-api-gateway";
import { GetAccountCommandInput, GetAccountCommandOutput, GetAccountCommand } from "@aws-sdk/client-api-gateway";
import { GetApiKeyCommandInput, GetApiKeyCommandOutput, GetApiKeyCommand } from "@aws-sdk/client-api-gateway";
import { GetApiKeysCommandInput, GetApiKeysCommandOutput, GetApiKeysCommand } from "@aws-sdk/client-api-gateway";
import { GetAuthorizerCommandInput, GetAuthorizerCommandOutput, GetAuthorizerCommand } from "@aws-sdk/client-api-gateway";
import { GetAuthorizersCommandInput, GetAuthorizersCommandOutput, GetAuthorizersCommand } from "@aws-sdk/client-api-gateway";
import { GetBasePathMappingCommandInput, GetBasePathMappingCommandOutput, GetBasePathMappingCommand } from "@aws-sdk/client-api-gateway";
import { GetBasePathMappingsCommandInput, GetBasePathMappingsCommandOutput, GetBasePathMappingsCommand } from "@aws-sdk/client-api-gateway";
import { GetClientCertificateCommandInput, GetClientCertificateCommandOutput, GetClientCertificateCommand } from "@aws-sdk/client-api-gateway";
import { GetClientCertificatesCommandInput, GetClientCertificatesCommandOutput, GetClientCertificatesCommand } from "@aws-sdk/client-api-gateway";
import { GetDeploymentCommandInput, GetDeploymentCommandOutput, GetDeploymentCommand } from "@aws-sdk/client-api-gateway";
import { GetDeploymentsCommandInput, GetDeploymentsCommandOutput, GetDeploymentsCommand } from "@aws-sdk/client-api-gateway";
import { GetDocumentationPartCommandInput, GetDocumentationPartCommandOutput, GetDocumentationPartCommand } from "@aws-sdk/client-api-gateway";
import { GetDocumentationPartsCommandInput, GetDocumentationPartsCommandOutput, GetDocumentationPartsCommand } from "@aws-sdk/client-api-gateway";
import { GetDocumentationVersionCommandInput, GetDocumentationVersionCommandOutput, GetDocumentationVersionCommand } from "@aws-sdk/client-api-gateway";
import { GetDocumentationVersionsCommandInput, GetDocumentationVersionsCommandOutput, GetDocumentationVersionsCommand } from "@aws-sdk/client-api-gateway";
import { GetDomainNameCommandInput, GetDomainNameCommandOutput, GetDomainNameCommand } from "@aws-sdk/client-api-gateway";
import { GetDomainNamesCommandInput, GetDomainNamesCommandOutput, GetDomainNamesCommand } from "@aws-sdk/client-api-gateway";
import { GetExportCommandInput, GetExportCommandOutput, GetExportCommand } from "@aws-sdk/client-api-gateway";
import { GetGatewayResponseCommandInput, GetGatewayResponseCommandOutput, GetGatewayResponseCommand } from "@aws-sdk/client-api-gateway";
import { GetGatewayResponsesCommandInput, GetGatewayResponsesCommandOutput, GetGatewayResponsesCommand } from "@aws-sdk/client-api-gateway";
import { GetIntegrationCommandInput, GetIntegrationCommandOutput, GetIntegrationCommand } from "@aws-sdk/client-api-gateway";
import { GetIntegrationResponseCommandInput, GetIntegrationResponseCommandOutput, GetIntegrationResponseCommand } from "@aws-sdk/client-api-gateway";
import { GetMethodCommandInput, GetMethodCommandOutput, GetMethodCommand } from "@aws-sdk/client-api-gateway";
import { GetMethodResponseCommandInput, GetMethodResponseCommandOutput, GetMethodResponseCommand } from "@aws-sdk/client-api-gateway";
import { GetModelCommandInput, GetModelCommandOutput, GetModelCommand } from "@aws-sdk/client-api-gateway";
import { GetModelTemplateCommandInput, GetModelTemplateCommandOutput, GetModelTemplateCommand } from "@aws-sdk/client-api-gateway";
import { GetModelsCommandInput, GetModelsCommandOutput, GetModelsCommand } from "@aws-sdk/client-api-gateway";
import { GetRequestValidatorCommandInput, GetRequestValidatorCommandOutput, GetRequestValidatorCommand } from "@aws-sdk/client-api-gateway";
import { GetRequestValidatorsCommandInput, GetRequestValidatorsCommandOutput, GetRequestValidatorsCommand } from "@aws-sdk/client-api-gateway";
import { GetResourceCommandInput, GetResourceCommandOutput, GetResourceCommand } from "@aws-sdk/client-api-gateway";
import { GetResourcesCommandInput, GetResourcesCommandOutput, GetResourcesCommand } from "@aws-sdk/client-api-gateway";
import { GetRestApiCommandInput, GetRestApiCommandOutput, GetRestApiCommand } from "@aws-sdk/client-api-gateway";
import { GetRestApisCommandInput, GetRestApisCommandOutput, GetRestApisCommand } from "@aws-sdk/client-api-gateway";
import { GetSdkCommandInput, GetSdkCommandOutput, GetSdkCommand } from "@aws-sdk/client-api-gateway";
import { GetSdkTypeCommandInput, GetSdkTypeCommandOutput, GetSdkTypeCommand } from "@aws-sdk/client-api-gateway";
import { GetSdkTypesCommandInput, GetSdkTypesCommandOutput, GetSdkTypesCommand } from "@aws-sdk/client-api-gateway";
import { GetStageCommandInput, GetStageCommandOutput, GetStageCommand } from "@aws-sdk/client-api-gateway";
import { GetStagesCommandInput, GetStagesCommandOutput, GetStagesCommand } from "@aws-sdk/client-api-gateway";
import { GetTagsCommandInput, GetTagsCommandOutput, GetTagsCommand } from "@aws-sdk/client-api-gateway";
import { GetUsageCommandInput, GetUsageCommandOutput, GetUsageCommand } from "@aws-sdk/client-api-gateway";
import { GetUsagePlanCommandInput, GetUsagePlanCommandOutput, GetUsagePlanCommand } from "@aws-sdk/client-api-gateway";
import { GetUsagePlanKeyCommandInput, GetUsagePlanKeyCommandOutput, GetUsagePlanKeyCommand } from "@aws-sdk/client-api-gateway";
import { GetUsagePlanKeysCommandInput, GetUsagePlanKeysCommandOutput, GetUsagePlanKeysCommand } from "@aws-sdk/client-api-gateway";
import { GetUsagePlansCommandInput, GetUsagePlansCommandOutput, GetUsagePlansCommand } from "@aws-sdk/client-api-gateway";
import { GetVpcLinkCommandInput, GetVpcLinkCommandOutput, GetVpcLinkCommand } from "@aws-sdk/client-api-gateway";
import { GetVpcLinksCommandInput, GetVpcLinksCommandOutput, GetVpcLinksCommand } from "@aws-sdk/client-api-gateway";
import { ImportApiKeysCommandInput, ImportApiKeysCommandOutput, ImportApiKeysCommand } from "@aws-sdk/client-api-gateway";
import { ImportDocumentationPartsCommandInput, ImportDocumentationPartsCommandOutput, ImportDocumentationPartsCommand } from "@aws-sdk/client-api-gateway";
import { ImportRestApiCommandInput, ImportRestApiCommandOutput, ImportRestApiCommand } from "@aws-sdk/client-api-gateway";
import { PutGatewayResponseCommandInput, PutGatewayResponseCommandOutput, PutGatewayResponseCommand } from "@aws-sdk/client-api-gateway";
import { PutIntegrationCommandInput, PutIntegrationCommandOutput, PutIntegrationCommand } from "@aws-sdk/client-api-gateway";
import { PutIntegrationResponseCommandInput, PutIntegrationResponseCommandOutput, PutIntegrationResponseCommand } from "@aws-sdk/client-api-gateway";
import { PutMethodCommandInput, PutMethodCommandOutput, PutMethodCommand } from "@aws-sdk/client-api-gateway";
import { PutMethodResponseCommandInput, PutMethodResponseCommandOutput, PutMethodResponseCommand } from "@aws-sdk/client-api-gateway";
import { PutRestApiCommandInput, PutRestApiCommandOutput, PutRestApiCommand } from "@aws-sdk/client-api-gateway";
import { TagResourceCommandInput, TagResourceCommandOutput, TagResourceCommand } from "@aws-sdk/client-api-gateway";
import { TestInvokeAuthorizerCommandInput, TestInvokeAuthorizerCommandOutput, TestInvokeAuthorizerCommand } from "@aws-sdk/client-api-gateway";
import { TestInvokeMethodCommandInput, TestInvokeMethodCommandOutput, TestInvokeMethodCommand } from "@aws-sdk/client-api-gateway";
import { UntagResourceCommandInput, UntagResourceCommandOutput, UntagResourceCommand } from "@aws-sdk/client-api-gateway";
import { UpdateAccountCommandInput, UpdateAccountCommandOutput, UpdateAccountCommand } from "@aws-sdk/client-api-gateway";
import { UpdateApiKeyCommandInput, UpdateApiKeyCommandOutput, UpdateApiKeyCommand } from "@aws-sdk/client-api-gateway";
import { UpdateAuthorizerCommandInput, UpdateAuthorizerCommandOutput, UpdateAuthorizerCommand } from "@aws-sdk/client-api-gateway";
import { UpdateBasePathMappingCommandInput, UpdateBasePathMappingCommandOutput, UpdateBasePathMappingCommand } from "@aws-sdk/client-api-gateway";
import { UpdateClientCertificateCommandInput, UpdateClientCertificateCommandOutput, UpdateClientCertificateCommand } from "@aws-sdk/client-api-gateway";
import { UpdateDeploymentCommandInput, UpdateDeploymentCommandOutput, UpdateDeploymentCommand } from "@aws-sdk/client-api-gateway";
import { UpdateDocumentationPartCommandInput, UpdateDocumentationPartCommandOutput, UpdateDocumentationPartCommand } from "@aws-sdk/client-api-gateway";
import { UpdateDocumentationVersionCommandInput, UpdateDocumentationVersionCommandOutput, UpdateDocumentationVersionCommand } from "@aws-sdk/client-api-gateway";
import { UpdateDomainNameCommandInput, UpdateDomainNameCommandOutput, UpdateDomainNameCommand } from "@aws-sdk/client-api-gateway";
import { UpdateGatewayResponseCommandInput, UpdateGatewayResponseCommandOutput, UpdateGatewayResponseCommand } from "@aws-sdk/client-api-gateway";
import { UpdateIntegrationCommandInput, UpdateIntegrationCommandOutput, UpdateIntegrationCommand } from "@aws-sdk/client-api-gateway";
import { UpdateIntegrationResponseCommandInput, UpdateIntegrationResponseCommandOutput, UpdateIntegrationResponseCommand } from "@aws-sdk/client-api-gateway";
import { UpdateMethodCommandInput, UpdateMethodCommandOutput, UpdateMethodCommand } from "@aws-sdk/client-api-gateway";
import { UpdateMethodResponseCommandInput, UpdateMethodResponseCommandOutput, UpdateMethodResponseCommand } from "@aws-sdk/client-api-gateway";
import { UpdateModelCommandInput, UpdateModelCommandOutput, UpdateModelCommand } from "@aws-sdk/client-api-gateway";
import { UpdateRequestValidatorCommandInput, UpdateRequestValidatorCommandOutput, UpdateRequestValidatorCommand } from "@aws-sdk/client-api-gateway";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput, UpdateResourceCommand } from "@aws-sdk/client-api-gateway";
import { UpdateRestApiCommandInput, UpdateRestApiCommandOutput, UpdateRestApiCommand } from "@aws-sdk/client-api-gateway";
import { UpdateStageCommandInput, UpdateStageCommandOutput, UpdateStageCommand } from "@aws-sdk/client-api-gateway";
import { UpdateUsageCommandInput, UpdateUsageCommandOutput, UpdateUsageCommand } from "@aws-sdk/client-api-gateway";
import { UpdateUsagePlanCommandInput, UpdateUsagePlanCommandOutput, UpdateUsagePlanCommand } from "@aws-sdk/client-api-gateway";
import { UpdateVpcLinkCommandInput, UpdateVpcLinkCommandOutput, UpdateVpcLinkCommand } from "@aws-sdk/client-api-gateway";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createApiKey'*/
export const sdkAPIGatewayCreateApiKey = (input: SdkIntegrationTask<CreateApiKeyCommandInput>): Promise<CreateApiKeyCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateApiKeyCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createAuthorizer'*/
export const sdkAPIGatewayCreateAuthorizer = (input: SdkIntegrationTask<CreateAuthorizerCommandInput>): Promise<CreateAuthorizerCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateAuthorizerCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createBasePathMapping'*/
export const sdkAPIGatewayCreateBasePathMapping = (input: SdkIntegrationTask<CreateBasePathMappingCommandInput>): Promise<CreateBasePathMappingCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateBasePathMappingCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createDeployment'*/
export const sdkAPIGatewayCreateDeployment = (input: SdkIntegrationTask<CreateDeploymentCommandInput>): Promise<CreateDeploymentCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateDeploymentCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createDocumentationPart'*/
export const sdkAPIGatewayCreateDocumentationPart = (input: SdkIntegrationTask<CreateDocumentationPartCommandInput>): Promise<CreateDocumentationPartCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateDocumentationPartCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createDocumentationVersion'*/
export const sdkAPIGatewayCreateDocumentationVersion = (input: SdkIntegrationTask<CreateDocumentationVersionCommandInput>): Promise<CreateDocumentationVersionCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateDocumentationVersionCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createDomainName'*/
export const sdkAPIGatewayCreateDomainName = (input: SdkIntegrationTask<CreateDomainNameCommandInput>): Promise<CreateDomainNameCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateDomainNameCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createModel'*/
export const sdkAPIGatewayCreateModel = (input: SdkIntegrationTask<CreateModelCommandInput>): Promise<CreateModelCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateModelCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createRequestValidator'*/
export const sdkAPIGatewayCreateRequestValidator = (input: SdkIntegrationTask<CreateRequestValidatorCommandInput>): Promise<CreateRequestValidatorCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateRequestValidatorCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createResource'*/
export const sdkAPIGatewayCreateResource = (input: SdkIntegrationTask<CreateResourceCommandInput>): Promise<CreateResourceCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateResourceCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createRestApi'*/
export const sdkAPIGatewayCreateRestApi = (input: SdkIntegrationTask<CreateRestApiCommandInput>): Promise<CreateRestApiCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateRestApiCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createStage'*/
export const sdkAPIGatewayCreateStage = (input: SdkIntegrationTask<CreateStageCommandInput>): Promise<CreateStageCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateStageCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createUsagePlan'*/
export const sdkAPIGatewayCreateUsagePlan = (input: SdkIntegrationTask<CreateUsagePlanCommandInput>): Promise<CreateUsagePlanCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateUsagePlanCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createUsagePlanKey'*/
export const sdkAPIGatewayCreateUsagePlanKey = (input: SdkIntegrationTask<CreateUsagePlanKeyCommandInput>): Promise<CreateUsagePlanKeyCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateUsagePlanKeyCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createVpcLink'*/
export const sdkAPIGatewayCreateVpcLink = (input: SdkIntegrationTask<CreateVpcLinkCommandInput>): Promise<CreateVpcLinkCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new CreateVpcLinkCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteApiKey'*/
export const sdkAPIGatewayDeleteApiKey = (input: SdkIntegrationTask<DeleteApiKeyCommandInput>): Promise<DeleteApiKeyCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteApiKeyCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteAuthorizer'*/
export const sdkAPIGatewayDeleteAuthorizer = (input: SdkIntegrationTask<DeleteAuthorizerCommandInput>): Promise<DeleteAuthorizerCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteAuthorizerCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteBasePathMapping'*/
export const sdkAPIGatewayDeleteBasePathMapping = (input: SdkIntegrationTask<DeleteBasePathMappingCommandInput>): Promise<DeleteBasePathMappingCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteBasePathMappingCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteClientCertificate'*/
export const sdkAPIGatewayDeleteClientCertificate = (input: SdkIntegrationTask<DeleteClientCertificateCommandInput>): Promise<DeleteClientCertificateCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteClientCertificateCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteDeployment'*/
export const sdkAPIGatewayDeleteDeployment = (input: SdkIntegrationTask<DeleteDeploymentCommandInput>): Promise<DeleteDeploymentCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteDeploymentCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteDocumentationPart'*/
export const sdkAPIGatewayDeleteDocumentationPart = (input: SdkIntegrationTask<DeleteDocumentationPartCommandInput>): Promise<DeleteDocumentationPartCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteDocumentationPartCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteDocumentationVersion'*/
export const sdkAPIGatewayDeleteDocumentationVersion = (input: SdkIntegrationTask<DeleteDocumentationVersionCommandInput>): Promise<DeleteDocumentationVersionCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteDocumentationVersionCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteDomainName'*/
export const sdkAPIGatewayDeleteDomainName = (input: SdkIntegrationTask<DeleteDomainNameCommandInput>): Promise<DeleteDomainNameCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteDomainNameCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteGatewayResponse'*/
export const sdkAPIGatewayDeleteGatewayResponse = (input: SdkIntegrationTask<DeleteGatewayResponseCommandInput>): Promise<DeleteGatewayResponseCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteGatewayResponseCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteIntegration'*/
export const sdkAPIGatewayDeleteIntegration = (input: SdkIntegrationTask<DeleteIntegrationCommandInput>): Promise<DeleteIntegrationCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteIntegrationCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteIntegrationResponse'*/
export const sdkAPIGatewayDeleteIntegrationResponse = (input: SdkIntegrationTask<DeleteIntegrationResponseCommandInput>): Promise<DeleteIntegrationResponseCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteIntegrationResponseCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteMethod'*/
export const sdkAPIGatewayDeleteMethod = (input: SdkIntegrationTask<DeleteMethodCommandInput>): Promise<DeleteMethodCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteMethodCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteMethodResponse'*/
export const sdkAPIGatewayDeleteMethodResponse = (input: SdkIntegrationTask<DeleteMethodResponseCommandInput>): Promise<DeleteMethodResponseCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteMethodResponseCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteModel'*/
export const sdkAPIGatewayDeleteModel = (input: SdkIntegrationTask<DeleteModelCommandInput>): Promise<DeleteModelCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteModelCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteRequestValidator'*/
export const sdkAPIGatewayDeleteRequestValidator = (input: SdkIntegrationTask<DeleteRequestValidatorCommandInput>): Promise<DeleteRequestValidatorCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteRequestValidatorCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteResource'*/
export const sdkAPIGatewayDeleteResource = (input: SdkIntegrationTask<DeleteResourceCommandInput>): Promise<DeleteResourceCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteResourceCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteRestApi'*/
export const sdkAPIGatewayDeleteRestApi = (input: SdkIntegrationTask<DeleteRestApiCommandInput>): Promise<DeleteRestApiCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteRestApiCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteStage'*/
export const sdkAPIGatewayDeleteStage = (input: SdkIntegrationTask<DeleteStageCommandInput>): Promise<DeleteStageCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteStageCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteUsagePlan'*/
export const sdkAPIGatewayDeleteUsagePlan = (input: SdkIntegrationTask<DeleteUsagePlanCommandInput>): Promise<DeleteUsagePlanCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteUsagePlanCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteUsagePlanKey'*/
export const sdkAPIGatewayDeleteUsagePlanKey = (input: SdkIntegrationTask<DeleteUsagePlanKeyCommandInput>): Promise<DeleteUsagePlanKeyCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteUsagePlanKeyCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteVpcLink'*/
export const sdkAPIGatewayDeleteVpcLink = (input: SdkIntegrationTask<DeleteVpcLinkCommandInput>): Promise<DeleteVpcLinkCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new DeleteVpcLinkCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:flushStageAuthorizersCache'*/
export const sdkAPIGatewayFlushStageAuthorizersCache = (input: SdkIntegrationTask<FlushStageAuthorizersCacheCommandInput>): Promise<FlushStageAuthorizersCacheCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new FlushStageAuthorizersCacheCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:flushStageCache'*/
export const sdkAPIGatewayFlushStageCache = (input: SdkIntegrationTask<FlushStageCacheCommandInput>): Promise<FlushStageCacheCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new FlushStageCacheCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:generateClientCertificate'*/
export const sdkAPIGatewayGenerateClientCertificate = (input: SdkIntegrationTask<GenerateClientCertificateCommandInput>): Promise<GenerateClientCertificateCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GenerateClientCertificateCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getAccount'*/
export const sdkAPIGatewayGetAccount = (input: SdkIntegrationTask<GetAccountCommandInput>): Promise<GetAccountCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetAccountCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getApiKey'*/
export const sdkAPIGatewayGetApiKey = (input: SdkIntegrationTask<GetApiKeyCommandInput>): Promise<GetApiKeyCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetApiKeyCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getApiKeys'*/
export const sdkAPIGatewayGetApiKeys = (input: SdkIntegrationTask<GetApiKeysCommandInput>): Promise<GetApiKeysCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetApiKeysCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getAuthorizer'*/
export const sdkAPIGatewayGetAuthorizer = (input: SdkIntegrationTask<GetAuthorizerCommandInput>): Promise<GetAuthorizerCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetAuthorizerCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getAuthorizers'*/
export const sdkAPIGatewayGetAuthorizers = (input: SdkIntegrationTask<GetAuthorizersCommandInput>): Promise<GetAuthorizersCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetAuthorizersCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getBasePathMapping'*/
export const sdkAPIGatewayGetBasePathMapping = (input: SdkIntegrationTask<GetBasePathMappingCommandInput>): Promise<GetBasePathMappingCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetBasePathMappingCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getBasePathMappings'*/
export const sdkAPIGatewayGetBasePathMappings = (input: SdkIntegrationTask<GetBasePathMappingsCommandInput>): Promise<GetBasePathMappingsCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetBasePathMappingsCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getClientCertificate'*/
export const sdkAPIGatewayGetClientCertificate = (input: SdkIntegrationTask<GetClientCertificateCommandInput>): Promise<GetClientCertificateCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetClientCertificateCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getClientCertificates'*/
export const sdkAPIGatewayGetClientCertificates = (input: SdkIntegrationTask<GetClientCertificatesCommandInput>): Promise<GetClientCertificatesCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetClientCertificatesCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDeployment'*/
export const sdkAPIGatewayGetDeployment = (input: SdkIntegrationTask<GetDeploymentCommandInput>): Promise<GetDeploymentCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetDeploymentCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDeployments'*/
export const sdkAPIGatewayGetDeployments = (input: SdkIntegrationTask<GetDeploymentsCommandInput>): Promise<GetDeploymentsCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetDeploymentsCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDocumentationPart'*/
export const sdkAPIGatewayGetDocumentationPart = (input: SdkIntegrationTask<GetDocumentationPartCommandInput>): Promise<GetDocumentationPartCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetDocumentationPartCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDocumentationParts'*/
export const sdkAPIGatewayGetDocumentationParts = (input: SdkIntegrationTask<GetDocumentationPartsCommandInput>): Promise<GetDocumentationPartsCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetDocumentationPartsCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDocumentationVersion'*/
export const sdkAPIGatewayGetDocumentationVersion = (input: SdkIntegrationTask<GetDocumentationVersionCommandInput>): Promise<GetDocumentationVersionCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetDocumentationVersionCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDocumentationVersions'*/
export const sdkAPIGatewayGetDocumentationVersions = (input: SdkIntegrationTask<GetDocumentationVersionsCommandInput>): Promise<GetDocumentationVersionsCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetDocumentationVersionsCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDomainName'*/
export const sdkAPIGatewayGetDomainName = (input: SdkIntegrationTask<GetDomainNameCommandInput>): Promise<GetDomainNameCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetDomainNameCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDomainNames'*/
export const sdkAPIGatewayGetDomainNames = (input: SdkIntegrationTask<GetDomainNamesCommandInput>): Promise<GetDomainNamesCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetDomainNamesCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getExport'*/
export const sdkAPIGatewayGetExport = (input: SdkIntegrationTask<GetExportCommandInput>): Promise<GetExportCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetExportCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getGatewayResponse'*/
export const sdkAPIGatewayGetGatewayResponse = (input: SdkIntegrationTask<GetGatewayResponseCommandInput>): Promise<GetGatewayResponseCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetGatewayResponseCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getGatewayResponses'*/
export const sdkAPIGatewayGetGatewayResponses = (input: SdkIntegrationTask<GetGatewayResponsesCommandInput>): Promise<GetGatewayResponsesCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetGatewayResponsesCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getIntegration'*/
export const sdkAPIGatewayGetIntegration = (input: SdkIntegrationTask<GetIntegrationCommandInput>): Promise<GetIntegrationCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetIntegrationCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getIntegrationResponse'*/
export const sdkAPIGatewayGetIntegrationResponse = (input: SdkIntegrationTask<GetIntegrationResponseCommandInput>): Promise<GetIntegrationResponseCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetIntegrationResponseCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getMethod'*/
export const sdkAPIGatewayGetMethod = (input: SdkIntegrationTask<GetMethodCommandInput>): Promise<GetMethodCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetMethodCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getMethodResponse'*/
export const sdkAPIGatewayGetMethodResponse = (input: SdkIntegrationTask<GetMethodResponseCommandInput>): Promise<GetMethodResponseCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetMethodResponseCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getModel'*/
export const sdkAPIGatewayGetModel = (input: SdkIntegrationTask<GetModelCommandInput>): Promise<GetModelCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetModelCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getModelTemplate'*/
export const sdkAPIGatewayGetModelTemplate = (input: SdkIntegrationTask<GetModelTemplateCommandInput>): Promise<GetModelTemplateCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetModelTemplateCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getModels'*/
export const sdkAPIGatewayGetModels = (input: SdkIntegrationTask<GetModelsCommandInput>): Promise<GetModelsCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetModelsCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getRequestValidator'*/
export const sdkAPIGatewayGetRequestValidator = (input: SdkIntegrationTask<GetRequestValidatorCommandInput>): Promise<GetRequestValidatorCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetRequestValidatorCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getRequestValidators'*/
export const sdkAPIGatewayGetRequestValidators = (input: SdkIntegrationTask<GetRequestValidatorsCommandInput>): Promise<GetRequestValidatorsCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetRequestValidatorsCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getResource'*/
export const sdkAPIGatewayGetResource = (input: SdkIntegrationTask<GetResourceCommandInput>): Promise<GetResourceCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetResourceCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getResources'*/
export const sdkAPIGatewayGetResources = (input: SdkIntegrationTask<GetResourcesCommandInput>): Promise<GetResourcesCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetResourcesCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getRestApi'*/
export const sdkAPIGatewayGetRestApi = (input: SdkIntegrationTask<GetRestApiCommandInput>): Promise<GetRestApiCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetRestApiCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getRestApis'*/
export const sdkAPIGatewayGetRestApis = (input: SdkIntegrationTask<GetRestApisCommandInput>): Promise<GetRestApisCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetRestApisCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getSdk'*/
export const sdkAPIGatewayGetSdk = (input: SdkIntegrationTask<GetSdkCommandInput>): Promise<GetSdkCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetSdkCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getSdkType'*/
export const sdkAPIGatewayGetSdkType = (input: SdkIntegrationTask<GetSdkTypeCommandInput>): Promise<GetSdkTypeCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetSdkTypeCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getSdkTypes'*/
export const sdkAPIGatewayGetSdkTypes = (input: SdkIntegrationTask<GetSdkTypesCommandInput>): Promise<GetSdkTypesCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetSdkTypesCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getStage'*/
export const sdkAPIGatewayGetStage = (input: SdkIntegrationTask<GetStageCommandInput>): Promise<GetStageCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetStageCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getStages'*/
export const sdkAPIGatewayGetStages = (input: SdkIntegrationTask<GetStagesCommandInput>): Promise<GetStagesCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetStagesCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getTags'*/
export const sdkAPIGatewayGetTags = (input: SdkIntegrationTask<GetTagsCommandInput>): Promise<GetTagsCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetTagsCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getUsage'*/
export const sdkAPIGatewayGetUsage = (input: SdkIntegrationTask<GetUsageCommandInput>): Promise<GetUsageCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetUsageCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getUsagePlan'*/
export const sdkAPIGatewayGetUsagePlan = (input: SdkIntegrationTask<GetUsagePlanCommandInput>): Promise<GetUsagePlanCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetUsagePlanCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getUsagePlanKey'*/
export const sdkAPIGatewayGetUsagePlanKey = (input: SdkIntegrationTask<GetUsagePlanKeyCommandInput>): Promise<GetUsagePlanKeyCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetUsagePlanKeyCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getUsagePlanKeys'*/
export const sdkAPIGatewayGetUsagePlanKeys = (input: SdkIntegrationTask<GetUsagePlanKeysCommandInput>): Promise<GetUsagePlanKeysCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetUsagePlanKeysCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getUsagePlans'*/
export const sdkAPIGatewayGetUsagePlans = (input: SdkIntegrationTask<GetUsagePlansCommandInput>): Promise<GetUsagePlansCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetUsagePlansCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getVpcLink'*/
export const sdkAPIGatewayGetVpcLink = (input: SdkIntegrationTask<GetVpcLinkCommandInput>): Promise<GetVpcLinkCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetVpcLinkCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getVpcLinks'*/
export const sdkAPIGatewayGetVpcLinks = (input: SdkIntegrationTask<GetVpcLinksCommandInput>): Promise<GetVpcLinksCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new GetVpcLinksCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:importApiKeys'*/
export const sdkAPIGatewayImportApiKeys = (input: SdkIntegrationTask<ImportApiKeysCommandInput>): Promise<ImportApiKeysCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new ImportApiKeysCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:importDocumentationParts'*/
export const sdkAPIGatewayImportDocumentationParts = (input: SdkIntegrationTask<ImportDocumentationPartsCommandInput>): Promise<ImportDocumentationPartsCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new ImportDocumentationPartsCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:importRestApi'*/
export const sdkAPIGatewayImportRestApi = (input: SdkIntegrationTask<ImportRestApiCommandInput>): Promise<ImportRestApiCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new ImportRestApiCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:putGatewayResponse'*/
export const sdkAPIGatewayPutGatewayResponse = (input: SdkIntegrationTask<PutGatewayResponseCommandInput>): Promise<PutGatewayResponseCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new PutGatewayResponseCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:putIntegration'*/
export const sdkAPIGatewayPutIntegration = (input: SdkIntegrationTask<PutIntegrationCommandInput>): Promise<PutIntegrationCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new PutIntegrationCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:putIntegrationResponse'*/
export const sdkAPIGatewayPutIntegrationResponse = (input: SdkIntegrationTask<PutIntegrationResponseCommandInput>): Promise<PutIntegrationResponseCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new PutIntegrationResponseCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:putMethod'*/
export const sdkAPIGatewayPutMethod = (input: SdkIntegrationTask<PutMethodCommandInput>): Promise<PutMethodCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new PutMethodCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:putMethodResponse'*/
export const sdkAPIGatewayPutMethodResponse = (input: SdkIntegrationTask<PutMethodResponseCommandInput>): Promise<PutMethodResponseCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new PutMethodResponseCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:putRestApi'*/
export const sdkAPIGatewayPutRestApi = (input: SdkIntegrationTask<PutRestApiCommandInput>): Promise<PutRestApiCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new PutRestApiCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:tagResource'*/
export const sdkAPIGatewayTagResource = (input: SdkIntegrationTask<TagResourceCommandInput>): Promise<TagResourceCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new TagResourceCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:testInvokeAuthorizer'*/
export const sdkAPIGatewayTestInvokeAuthorizer = (input: SdkIntegrationTask<TestInvokeAuthorizerCommandInput>): Promise<TestInvokeAuthorizerCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new TestInvokeAuthorizerCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:testInvokeMethod'*/
export const sdkAPIGatewayTestInvokeMethod = (input: SdkIntegrationTask<TestInvokeMethodCommandInput>): Promise<TestInvokeMethodCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new TestInvokeMethodCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:untagResource'*/
export const sdkAPIGatewayUntagResource = (input: SdkIntegrationTask<UntagResourceCommandInput>): Promise<UntagResourceCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UntagResourceCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateAccount'*/
export const sdkAPIGatewayUpdateAccount = (input: SdkIntegrationTask<UpdateAccountCommandInput>): Promise<UpdateAccountCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateAccountCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateApiKey'*/
export const sdkAPIGatewayUpdateApiKey = (input: SdkIntegrationTask<UpdateApiKeyCommandInput>): Promise<UpdateApiKeyCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateApiKeyCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateAuthorizer'*/
export const sdkAPIGatewayUpdateAuthorizer = (input: SdkIntegrationTask<UpdateAuthorizerCommandInput>): Promise<UpdateAuthorizerCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateAuthorizerCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateBasePathMapping'*/
export const sdkAPIGatewayUpdateBasePathMapping = (input: SdkIntegrationTask<UpdateBasePathMappingCommandInput>): Promise<UpdateBasePathMappingCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateBasePathMappingCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateClientCertificate'*/
export const sdkAPIGatewayUpdateClientCertificate = (input: SdkIntegrationTask<UpdateClientCertificateCommandInput>): Promise<UpdateClientCertificateCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateClientCertificateCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateDeployment'*/
export const sdkAPIGatewayUpdateDeployment = (input: SdkIntegrationTask<UpdateDeploymentCommandInput>): Promise<UpdateDeploymentCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateDeploymentCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateDocumentationPart'*/
export const sdkAPIGatewayUpdateDocumentationPart = (input: SdkIntegrationTask<UpdateDocumentationPartCommandInput>): Promise<UpdateDocumentationPartCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateDocumentationPartCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateDocumentationVersion'*/
export const sdkAPIGatewayUpdateDocumentationVersion = (input: SdkIntegrationTask<UpdateDocumentationVersionCommandInput>): Promise<UpdateDocumentationVersionCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateDocumentationVersionCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateDomainName'*/
export const sdkAPIGatewayUpdateDomainName = (input: SdkIntegrationTask<UpdateDomainNameCommandInput>): Promise<UpdateDomainNameCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateDomainNameCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateGatewayResponse'*/
export const sdkAPIGatewayUpdateGatewayResponse = (input: SdkIntegrationTask<UpdateGatewayResponseCommandInput>): Promise<UpdateGatewayResponseCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateGatewayResponseCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateIntegration'*/
export const sdkAPIGatewayUpdateIntegration = (input: SdkIntegrationTask<UpdateIntegrationCommandInput>): Promise<UpdateIntegrationCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateIntegrationCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateIntegrationResponse'*/
export const sdkAPIGatewayUpdateIntegrationResponse = (input: SdkIntegrationTask<UpdateIntegrationResponseCommandInput>): Promise<UpdateIntegrationResponseCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateIntegrationResponseCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateMethod'*/
export const sdkAPIGatewayUpdateMethod = (input: SdkIntegrationTask<UpdateMethodCommandInput>): Promise<UpdateMethodCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateMethodCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateMethodResponse'*/
export const sdkAPIGatewayUpdateMethodResponse = (input: SdkIntegrationTask<UpdateMethodResponseCommandInput>): Promise<UpdateMethodResponseCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateMethodResponseCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateModel'*/
export const sdkAPIGatewayUpdateModel = (input: SdkIntegrationTask<UpdateModelCommandInput>): Promise<UpdateModelCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateModelCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateRequestValidator'*/
export const sdkAPIGatewayUpdateRequestValidator = (input: SdkIntegrationTask<UpdateRequestValidatorCommandInput>): Promise<UpdateRequestValidatorCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateRequestValidatorCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateResource'*/
export const sdkAPIGatewayUpdateResource = (input: SdkIntegrationTask<UpdateResourceCommandInput>): Promise<UpdateResourceCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateResourceCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateRestApi'*/
export const sdkAPIGatewayUpdateRestApi = (input: SdkIntegrationTask<UpdateRestApiCommandInput>): Promise<UpdateRestApiCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateRestApiCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateStage'*/
export const sdkAPIGatewayUpdateStage = (input: SdkIntegrationTask<UpdateStageCommandInput>): Promise<UpdateStageCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateStageCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateUsage'*/
export const sdkAPIGatewayUpdateUsage = (input: SdkIntegrationTask<UpdateUsageCommandInput>): Promise<UpdateUsageCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateUsageCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateUsagePlan'*/
export const sdkAPIGatewayUpdateUsagePlan = (input: SdkIntegrationTask<UpdateUsagePlanCommandInput>): Promise<UpdateUsagePlanCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateUsagePlanCommand(input.parameters);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateVpcLink'*/
export const sdkAPIGatewayUpdateVpcLink = (input: SdkIntegrationTask<UpdateVpcLinkCommandInput>): Promise<UpdateVpcLinkCommandOutput> => {
    const apigateway = new APIGatewayClient(clientConfig);
    const command = new UpdateVpcLinkCommand(input.parameters);
    return apigateway.send(command);
};

