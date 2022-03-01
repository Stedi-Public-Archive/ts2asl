import { APIGatewayClient } from "@aws-sdk/client-api-gateway";
// import { InvokeCommandInput, InvokeCommandOutput, InvokeCommand } from "@aws-sdk/client-api-gateway";
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
export const nativeAPIGatewayCreateApiKey = (input: CreateApiKeyCommandInput): Promise<CreateApiKeyCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateApiKeyCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createAuthorizer'*/
export const nativeAPIGatewayCreateAuthorizer = (input: CreateAuthorizerCommandInput): Promise<CreateAuthorizerCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateAuthorizerCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createBasePathMapping'*/
export const nativeAPIGatewayCreateBasePathMapping = (input: CreateBasePathMappingCommandInput): Promise<CreateBasePathMappingCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateBasePathMappingCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createDeployment'*/
export const nativeAPIGatewayCreateDeployment = (input: CreateDeploymentCommandInput): Promise<CreateDeploymentCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateDeploymentCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createDocumentationPart'*/
export const nativeAPIGatewayCreateDocumentationPart = (input: CreateDocumentationPartCommandInput): Promise<CreateDocumentationPartCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateDocumentationPartCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createDocumentationVersion'*/
export const nativeAPIGatewayCreateDocumentationVersion = (input: CreateDocumentationVersionCommandInput): Promise<CreateDocumentationVersionCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateDocumentationVersionCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createDomainName'*/
export const nativeAPIGatewayCreateDomainName = (input: CreateDomainNameCommandInput): Promise<CreateDomainNameCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateDomainNameCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createModel'*/
export const nativeAPIGatewayCreateModel = (input: CreateModelCommandInput): Promise<CreateModelCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateModelCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createRequestValidator'*/
export const nativeAPIGatewayCreateRequestValidator = (input: CreateRequestValidatorCommandInput): Promise<CreateRequestValidatorCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateRequestValidatorCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createResource'*/
export const nativeAPIGatewayCreateResource = (input: CreateResourceCommandInput): Promise<CreateResourceCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateResourceCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createRestApi'*/
export const nativeAPIGatewayCreateRestApi = (input: CreateRestApiCommandInput): Promise<CreateRestApiCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateRestApiCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createStage'*/
export const nativeAPIGatewayCreateStage = (input: CreateStageCommandInput): Promise<CreateStageCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateStageCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createUsagePlan'*/
export const nativeAPIGatewayCreateUsagePlan = (input: CreateUsagePlanCommandInput): Promise<CreateUsagePlanCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateUsagePlanCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createUsagePlanKey'*/
export const nativeAPIGatewayCreateUsagePlanKey = (input: CreateUsagePlanKeyCommandInput): Promise<CreateUsagePlanKeyCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateUsagePlanKeyCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:createVpcLink'*/
export const nativeAPIGatewayCreateVpcLink = (input: CreateVpcLinkCommandInput): Promise<CreateVpcLinkCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new CreateVpcLinkCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteApiKey'*/
export const nativeAPIGatewayDeleteApiKey = (input: DeleteApiKeyCommandInput): Promise<DeleteApiKeyCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteApiKeyCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteAuthorizer'*/
export const nativeAPIGatewayDeleteAuthorizer = (input: DeleteAuthorizerCommandInput): Promise<DeleteAuthorizerCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteAuthorizerCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteBasePathMapping'*/
export const nativeAPIGatewayDeleteBasePathMapping = (input: DeleteBasePathMappingCommandInput): Promise<DeleteBasePathMappingCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteBasePathMappingCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteClientCertificate'*/
export const nativeAPIGatewayDeleteClientCertificate = (input: DeleteClientCertificateCommandInput): Promise<DeleteClientCertificateCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteClientCertificateCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteDeployment'*/
export const nativeAPIGatewayDeleteDeployment = (input: DeleteDeploymentCommandInput): Promise<DeleteDeploymentCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteDeploymentCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteDocumentationPart'*/
export const nativeAPIGatewayDeleteDocumentationPart = (input: DeleteDocumentationPartCommandInput): Promise<DeleteDocumentationPartCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteDocumentationPartCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteDocumentationVersion'*/
export const nativeAPIGatewayDeleteDocumentationVersion = (input: DeleteDocumentationVersionCommandInput): Promise<DeleteDocumentationVersionCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteDocumentationVersionCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteDomainName'*/
export const nativeAPIGatewayDeleteDomainName = (input: DeleteDomainNameCommandInput): Promise<DeleteDomainNameCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteDomainNameCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteGatewayResponse'*/
export const nativeAPIGatewayDeleteGatewayResponse = (input: DeleteGatewayResponseCommandInput): Promise<DeleteGatewayResponseCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteGatewayResponseCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteIntegration'*/
export const nativeAPIGatewayDeleteIntegration = (input: DeleteIntegrationCommandInput): Promise<DeleteIntegrationCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteIntegrationCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteIntegrationResponse'*/
export const nativeAPIGatewayDeleteIntegrationResponse = (input: DeleteIntegrationResponseCommandInput): Promise<DeleteIntegrationResponseCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteIntegrationResponseCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteMethod'*/
export const nativeAPIGatewayDeleteMethod = (input: DeleteMethodCommandInput): Promise<DeleteMethodCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteMethodCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteMethodResponse'*/
export const nativeAPIGatewayDeleteMethodResponse = (input: DeleteMethodResponseCommandInput): Promise<DeleteMethodResponseCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteMethodResponseCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteModel'*/
export const nativeAPIGatewayDeleteModel = (input: DeleteModelCommandInput): Promise<DeleteModelCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteModelCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteRequestValidator'*/
export const nativeAPIGatewayDeleteRequestValidator = (input: DeleteRequestValidatorCommandInput): Promise<DeleteRequestValidatorCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteRequestValidatorCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteResource'*/
export const nativeAPIGatewayDeleteResource = (input: DeleteResourceCommandInput): Promise<DeleteResourceCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteResourceCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteRestApi'*/
export const nativeAPIGatewayDeleteRestApi = (input: DeleteRestApiCommandInput): Promise<DeleteRestApiCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteRestApiCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteStage'*/
export const nativeAPIGatewayDeleteStage = (input: DeleteStageCommandInput): Promise<DeleteStageCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteStageCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteUsagePlan'*/
export const nativeAPIGatewayDeleteUsagePlan = (input: DeleteUsagePlanCommandInput): Promise<DeleteUsagePlanCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteUsagePlanCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteUsagePlanKey'*/
export const nativeAPIGatewayDeleteUsagePlanKey = (input: DeleteUsagePlanKeyCommandInput): Promise<DeleteUsagePlanKeyCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteUsagePlanKeyCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:deleteVpcLink'*/
export const nativeAPIGatewayDeleteVpcLink = (input: DeleteVpcLinkCommandInput): Promise<DeleteVpcLinkCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new DeleteVpcLinkCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:flushStageAuthorizersCache'*/
export const nativeAPIGatewayFlushStageAuthorizersCache = (input: FlushStageAuthorizersCacheCommandInput): Promise<FlushStageAuthorizersCacheCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new FlushStageAuthorizersCacheCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:flushStageCache'*/
export const nativeAPIGatewayFlushStageCache = (input: FlushStageCacheCommandInput): Promise<FlushStageCacheCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new FlushStageCacheCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:generateClientCertificate'*/
export const nativeAPIGatewayGenerateClientCertificate = (input: GenerateClientCertificateCommandInput): Promise<GenerateClientCertificateCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GenerateClientCertificateCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getAccount'*/
export const nativeAPIGatewayGetAccount = (input: GetAccountCommandInput): Promise<GetAccountCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetAccountCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getApiKey'*/
export const nativeAPIGatewayGetApiKey = (input: GetApiKeyCommandInput): Promise<GetApiKeyCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetApiKeyCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getApiKeys'*/
export const nativeAPIGatewayGetApiKeys = (input: GetApiKeysCommandInput): Promise<GetApiKeysCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetApiKeysCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getAuthorizer'*/
export const nativeAPIGatewayGetAuthorizer = (input: GetAuthorizerCommandInput): Promise<GetAuthorizerCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetAuthorizerCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getAuthorizers'*/
export const nativeAPIGatewayGetAuthorizers = (input: GetAuthorizersCommandInput): Promise<GetAuthorizersCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetAuthorizersCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getBasePathMapping'*/
export const nativeAPIGatewayGetBasePathMapping = (input: GetBasePathMappingCommandInput): Promise<GetBasePathMappingCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetBasePathMappingCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getBasePathMappings'*/
export const nativeAPIGatewayGetBasePathMappings = (input: GetBasePathMappingsCommandInput): Promise<GetBasePathMappingsCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetBasePathMappingsCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getClientCertificate'*/
export const nativeAPIGatewayGetClientCertificate = (input: GetClientCertificateCommandInput): Promise<GetClientCertificateCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetClientCertificateCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getClientCertificates'*/
export const nativeAPIGatewayGetClientCertificates = (input: GetClientCertificatesCommandInput): Promise<GetClientCertificatesCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetClientCertificatesCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDeployment'*/
export const nativeAPIGatewayGetDeployment = (input: GetDeploymentCommandInput): Promise<GetDeploymentCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetDeploymentCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDeployments'*/
export const nativeAPIGatewayGetDeployments = (input: GetDeploymentsCommandInput): Promise<GetDeploymentsCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetDeploymentsCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDocumentationPart'*/
export const nativeAPIGatewayGetDocumentationPart = (input: GetDocumentationPartCommandInput): Promise<GetDocumentationPartCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetDocumentationPartCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDocumentationParts'*/
export const nativeAPIGatewayGetDocumentationParts = (input: GetDocumentationPartsCommandInput): Promise<GetDocumentationPartsCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetDocumentationPartsCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDocumentationVersion'*/
export const nativeAPIGatewayGetDocumentationVersion = (input: GetDocumentationVersionCommandInput): Promise<GetDocumentationVersionCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetDocumentationVersionCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDocumentationVersions'*/
export const nativeAPIGatewayGetDocumentationVersions = (input: GetDocumentationVersionsCommandInput): Promise<GetDocumentationVersionsCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetDocumentationVersionsCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDomainName'*/
export const nativeAPIGatewayGetDomainName = (input: GetDomainNameCommandInput): Promise<GetDomainNameCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetDomainNameCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getDomainNames'*/
export const nativeAPIGatewayGetDomainNames = (input: GetDomainNamesCommandInput): Promise<GetDomainNamesCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetDomainNamesCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getExport'*/
export const nativeAPIGatewayGetExport = (input: GetExportCommandInput): Promise<GetExportCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetExportCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getGatewayResponse'*/
export const nativeAPIGatewayGetGatewayResponse = (input: GetGatewayResponseCommandInput): Promise<GetGatewayResponseCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetGatewayResponseCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getGatewayResponses'*/
export const nativeAPIGatewayGetGatewayResponses = (input: GetGatewayResponsesCommandInput): Promise<GetGatewayResponsesCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetGatewayResponsesCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getIntegration'*/
export const nativeAPIGatewayGetIntegration = (input: GetIntegrationCommandInput): Promise<GetIntegrationCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetIntegrationCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getIntegrationResponse'*/
export const nativeAPIGatewayGetIntegrationResponse = (input: GetIntegrationResponseCommandInput): Promise<GetIntegrationResponseCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetIntegrationResponseCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getMethod'*/
export const nativeAPIGatewayGetMethod = (input: GetMethodCommandInput): Promise<GetMethodCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetMethodCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getMethodResponse'*/
export const nativeAPIGatewayGetMethodResponse = (input: GetMethodResponseCommandInput): Promise<GetMethodResponseCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetMethodResponseCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getModel'*/
export const nativeAPIGatewayGetModel = (input: GetModelCommandInput): Promise<GetModelCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetModelCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getModelTemplate'*/
export const nativeAPIGatewayGetModelTemplate = (input: GetModelTemplateCommandInput): Promise<GetModelTemplateCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetModelTemplateCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getModels'*/
export const nativeAPIGatewayGetModels = (input: GetModelsCommandInput): Promise<GetModelsCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetModelsCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getRequestValidator'*/
export const nativeAPIGatewayGetRequestValidator = (input: GetRequestValidatorCommandInput): Promise<GetRequestValidatorCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetRequestValidatorCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getRequestValidators'*/
export const nativeAPIGatewayGetRequestValidators = (input: GetRequestValidatorsCommandInput): Promise<GetRequestValidatorsCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetRequestValidatorsCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getResource'*/
export const nativeAPIGatewayGetResource = (input: GetResourceCommandInput): Promise<GetResourceCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetResourceCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getResources'*/
export const nativeAPIGatewayGetResources = (input: GetResourcesCommandInput): Promise<GetResourcesCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetResourcesCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getRestApi'*/
export const nativeAPIGatewayGetRestApi = (input: GetRestApiCommandInput): Promise<GetRestApiCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetRestApiCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getRestApis'*/
export const nativeAPIGatewayGetRestApis = (input: GetRestApisCommandInput): Promise<GetRestApisCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetRestApisCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getSdk'*/
export const nativeAPIGatewayGetSdk = (input: GetSdkCommandInput): Promise<GetSdkCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetSdkCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getSdkType'*/
export const nativeAPIGatewayGetSdkType = (input: GetSdkTypeCommandInput): Promise<GetSdkTypeCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetSdkTypeCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getSdkTypes'*/
export const nativeAPIGatewayGetSdkTypes = (input: GetSdkTypesCommandInput): Promise<GetSdkTypesCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetSdkTypesCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getStage'*/
export const nativeAPIGatewayGetStage = (input: GetStageCommandInput): Promise<GetStageCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetStageCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getStages'*/
export const nativeAPIGatewayGetStages = (input: GetStagesCommandInput): Promise<GetStagesCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetStagesCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getTags'*/
export const nativeAPIGatewayGetTags = (input: GetTagsCommandInput): Promise<GetTagsCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetTagsCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getUsage'*/
export const nativeAPIGatewayGetUsage = (input: GetUsageCommandInput): Promise<GetUsageCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetUsageCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getUsagePlan'*/
export const nativeAPIGatewayGetUsagePlan = (input: GetUsagePlanCommandInput): Promise<GetUsagePlanCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetUsagePlanCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getUsagePlanKey'*/
export const nativeAPIGatewayGetUsagePlanKey = (input: GetUsagePlanKeyCommandInput): Promise<GetUsagePlanKeyCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetUsagePlanKeyCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getUsagePlanKeys'*/
export const nativeAPIGatewayGetUsagePlanKeys = (input: GetUsagePlanKeysCommandInput): Promise<GetUsagePlanKeysCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetUsagePlanKeysCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getUsagePlans'*/
export const nativeAPIGatewayGetUsagePlans = (input: GetUsagePlansCommandInput): Promise<GetUsagePlansCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetUsagePlansCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getVpcLink'*/
export const nativeAPIGatewayGetVpcLink = (input: GetVpcLinkCommandInput): Promise<GetVpcLinkCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetVpcLinkCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:getVpcLinks'*/
export const nativeAPIGatewayGetVpcLinks = (input: GetVpcLinksCommandInput): Promise<GetVpcLinksCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new GetVpcLinksCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:importApiKeys'*/
export const nativeAPIGatewayImportApiKeys = (input: ImportApiKeysCommandInput): Promise<ImportApiKeysCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new ImportApiKeysCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:importDocumentationParts'*/
export const nativeAPIGatewayImportDocumentationParts = (input: ImportDocumentationPartsCommandInput): Promise<ImportDocumentationPartsCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new ImportDocumentationPartsCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:importRestApi'*/
export const nativeAPIGatewayImportRestApi = (input: ImportRestApiCommandInput): Promise<ImportRestApiCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new ImportRestApiCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:putGatewayResponse'*/
export const nativeAPIGatewayPutGatewayResponse = (input: PutGatewayResponseCommandInput): Promise<PutGatewayResponseCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new PutGatewayResponseCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:putIntegration'*/
export const nativeAPIGatewayPutIntegration = (input: PutIntegrationCommandInput): Promise<PutIntegrationCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new PutIntegrationCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:putIntegrationResponse'*/
export const nativeAPIGatewayPutIntegrationResponse = (input: PutIntegrationResponseCommandInput): Promise<PutIntegrationResponseCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new PutIntegrationResponseCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:putMethod'*/
export const nativeAPIGatewayPutMethod = (input: PutMethodCommandInput): Promise<PutMethodCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new PutMethodCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:putMethodResponse'*/
export const nativeAPIGatewayPutMethodResponse = (input: PutMethodResponseCommandInput): Promise<PutMethodResponseCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new PutMethodResponseCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:putRestApi'*/
export const nativeAPIGatewayPutRestApi = (input: PutRestApiCommandInput): Promise<PutRestApiCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new PutRestApiCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:tagResource'*/
export const nativeAPIGatewayTagResource = (input: TagResourceCommandInput): Promise<TagResourceCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new TagResourceCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:testInvokeAuthorizer'*/
export const nativeAPIGatewayTestInvokeAuthorizer = (input: TestInvokeAuthorizerCommandInput): Promise<TestInvokeAuthorizerCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new TestInvokeAuthorizerCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:testInvokeMethod'*/
export const nativeAPIGatewayTestInvokeMethod = (input: TestInvokeMethodCommandInput): Promise<TestInvokeMethodCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new TestInvokeMethodCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:untagResource'*/
export const nativeAPIGatewayUntagResource = (input: UntagResourceCommandInput): Promise<UntagResourceCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UntagResourceCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateAccount'*/
export const nativeAPIGatewayUpdateAccount = (input: UpdateAccountCommandInput): Promise<UpdateAccountCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateAccountCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateApiKey'*/
export const nativeAPIGatewayUpdateApiKey = (input: UpdateApiKeyCommandInput): Promise<UpdateApiKeyCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateApiKeyCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateAuthorizer'*/
export const nativeAPIGatewayUpdateAuthorizer = (input: UpdateAuthorizerCommandInput): Promise<UpdateAuthorizerCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateAuthorizerCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateBasePathMapping'*/
export const nativeAPIGatewayUpdateBasePathMapping = (input: UpdateBasePathMappingCommandInput): Promise<UpdateBasePathMappingCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateBasePathMappingCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateClientCertificate'*/
export const nativeAPIGatewayUpdateClientCertificate = (input: UpdateClientCertificateCommandInput): Promise<UpdateClientCertificateCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateClientCertificateCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateDeployment'*/
export const nativeAPIGatewayUpdateDeployment = (input: UpdateDeploymentCommandInput): Promise<UpdateDeploymentCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateDeploymentCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateDocumentationPart'*/
export const nativeAPIGatewayUpdateDocumentationPart = (input: UpdateDocumentationPartCommandInput): Promise<UpdateDocumentationPartCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateDocumentationPartCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateDocumentationVersion'*/
export const nativeAPIGatewayUpdateDocumentationVersion = (input: UpdateDocumentationVersionCommandInput): Promise<UpdateDocumentationVersionCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateDocumentationVersionCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateDomainName'*/
export const nativeAPIGatewayUpdateDomainName = (input: UpdateDomainNameCommandInput): Promise<UpdateDomainNameCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateDomainNameCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateGatewayResponse'*/
export const nativeAPIGatewayUpdateGatewayResponse = (input: UpdateGatewayResponseCommandInput): Promise<UpdateGatewayResponseCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateGatewayResponseCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateIntegration'*/
export const nativeAPIGatewayUpdateIntegration = (input: UpdateIntegrationCommandInput): Promise<UpdateIntegrationCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateIntegrationCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateIntegrationResponse'*/
export const nativeAPIGatewayUpdateIntegrationResponse = (input: UpdateIntegrationResponseCommandInput): Promise<UpdateIntegrationResponseCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateIntegrationResponseCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateMethod'*/
export const nativeAPIGatewayUpdateMethod = (input: UpdateMethodCommandInput): Promise<UpdateMethodCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateMethodCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateMethodResponse'*/
export const nativeAPIGatewayUpdateMethodResponse = (input: UpdateMethodResponseCommandInput): Promise<UpdateMethodResponseCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateMethodResponseCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateModel'*/
export const nativeAPIGatewayUpdateModel = (input: UpdateModelCommandInput): Promise<UpdateModelCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateModelCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateRequestValidator'*/
export const nativeAPIGatewayUpdateRequestValidator = (input: UpdateRequestValidatorCommandInput): Promise<UpdateRequestValidatorCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateRequestValidatorCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateResource'*/
export const nativeAPIGatewayUpdateResource = (input: UpdateResourceCommandInput): Promise<UpdateResourceCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateResourceCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateRestApi'*/
export const nativeAPIGatewayUpdateRestApi = (input: UpdateRestApiCommandInput): Promise<UpdateRestApiCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateRestApiCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateStage'*/
export const nativeAPIGatewayUpdateStage = (input: UpdateStageCommandInput): Promise<UpdateStageCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateStageCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateUsage'*/
export const nativeAPIGatewayUpdateUsage = (input: UpdateUsageCommandInput): Promise<UpdateUsageCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateUsageCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateUsagePlan'*/
export const nativeAPIGatewayUpdateUsagePlan = (input: UpdateUsagePlanCommandInput): Promise<UpdateUsagePlanCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateUsagePlanCommand(input);
    return apigateway.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:updateVpcLink'*/
export const nativeAPIGatewayUpdateVpcLink = (input: UpdateVpcLinkCommandInput): Promise<UpdateVpcLinkCommandOutput> => {
    const apigateway = new APIGatewayClient({});
    const command = new UpdateVpcLinkCommand(input);
    return apigateway.send(command);
};

