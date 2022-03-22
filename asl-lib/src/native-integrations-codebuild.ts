import { CodeBuildClient } from "@aws-sdk/client-codebuild";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { BatchDeleteBuildsCommandInput, BatchDeleteBuildsCommandOutput, BatchDeleteBuildsCommand } from "@aws-sdk/client-codebuild";
import { BatchGetBuildBatchesCommandInput, BatchGetBuildBatchesCommandOutput, BatchGetBuildBatchesCommand } from "@aws-sdk/client-codebuild";
import { BatchGetBuildsCommandInput, BatchGetBuildsCommandOutput, BatchGetBuildsCommand } from "@aws-sdk/client-codebuild";
import { BatchGetProjectsCommandInput, BatchGetProjectsCommandOutput, BatchGetProjectsCommand } from "@aws-sdk/client-codebuild";
import { BatchGetReportGroupsCommandInput, BatchGetReportGroupsCommandOutput, BatchGetReportGroupsCommand } from "@aws-sdk/client-codebuild";
import { BatchGetReportsCommandInput, BatchGetReportsCommandOutput, BatchGetReportsCommand } from "@aws-sdk/client-codebuild";
import { CreateProjectCommandInput, CreateProjectCommandOutput, CreateProjectCommand } from "@aws-sdk/client-codebuild";
import { CreateReportGroupCommandInput, CreateReportGroupCommandOutput, CreateReportGroupCommand } from "@aws-sdk/client-codebuild";
import { CreateWebhookCommandInput, CreateWebhookCommandOutput, CreateWebhookCommand } from "@aws-sdk/client-codebuild";
import { DeleteBuildBatchCommandInput, DeleteBuildBatchCommandOutput, DeleteBuildBatchCommand } from "@aws-sdk/client-codebuild";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput, DeleteProjectCommand } from "@aws-sdk/client-codebuild";
import { DeleteReportCommandInput, DeleteReportCommandOutput, DeleteReportCommand } from "@aws-sdk/client-codebuild";
import { DeleteReportGroupCommandInput, DeleteReportGroupCommandOutput, DeleteReportGroupCommand } from "@aws-sdk/client-codebuild";
import { DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput, DeleteResourcePolicyCommand } from "@aws-sdk/client-codebuild";
import { DeleteSourceCredentialsCommandInput, DeleteSourceCredentialsCommandOutput, DeleteSourceCredentialsCommand } from "@aws-sdk/client-codebuild";
import { DeleteWebhookCommandInput, DeleteWebhookCommandOutput, DeleteWebhookCommand } from "@aws-sdk/client-codebuild";
import { DescribeCodeCoveragesCommandInput, DescribeCodeCoveragesCommandOutput, DescribeCodeCoveragesCommand } from "@aws-sdk/client-codebuild";
import { DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput, DescribeTestCasesCommand } from "@aws-sdk/client-codebuild";
import { GetReportGroupTrendCommandInput, GetReportGroupTrendCommandOutput, GetReportGroupTrendCommand } from "@aws-sdk/client-codebuild";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput, GetResourcePolicyCommand } from "@aws-sdk/client-codebuild";
import { ImportSourceCredentialsCommandInput, ImportSourceCredentialsCommandOutput, ImportSourceCredentialsCommand } from "@aws-sdk/client-codebuild";
import { InvalidateProjectCacheCommandInput, InvalidateProjectCacheCommandOutput, InvalidateProjectCacheCommand } from "@aws-sdk/client-codebuild";
import { ListBuildBatchesCommandInput, ListBuildBatchesCommandOutput, ListBuildBatchesCommand } from "@aws-sdk/client-codebuild";
import { ListBuildBatchesForProjectCommandInput, ListBuildBatchesForProjectCommandOutput, ListBuildBatchesForProjectCommand } from "@aws-sdk/client-codebuild";
import { ListBuildsCommandInput, ListBuildsCommandOutput, ListBuildsCommand } from "@aws-sdk/client-codebuild";
import { ListBuildsForProjectCommandInput, ListBuildsForProjectCommandOutput, ListBuildsForProjectCommand } from "@aws-sdk/client-codebuild";
import { ListCuratedEnvironmentImagesCommandInput, ListCuratedEnvironmentImagesCommandOutput, ListCuratedEnvironmentImagesCommand } from "@aws-sdk/client-codebuild";
import { ListProjectsCommandInput, ListProjectsCommandOutput, ListProjectsCommand } from "@aws-sdk/client-codebuild";
import { ListReportGroupsCommandInput, ListReportGroupsCommandOutput, ListReportGroupsCommand } from "@aws-sdk/client-codebuild";
import { ListReportsCommandInput, ListReportsCommandOutput, ListReportsCommand } from "@aws-sdk/client-codebuild";
import { ListReportsForReportGroupCommandInput, ListReportsForReportGroupCommandOutput, ListReportsForReportGroupCommand } from "@aws-sdk/client-codebuild";
import { ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput, ListSharedProjectsCommand } from "@aws-sdk/client-codebuild";
import { ListSharedReportGroupsCommandInput, ListSharedReportGroupsCommandOutput, ListSharedReportGroupsCommand } from "@aws-sdk/client-codebuild";
import { ListSourceCredentialsCommandInput, ListSourceCredentialsCommandOutput, ListSourceCredentialsCommand } from "@aws-sdk/client-codebuild";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput, PutResourcePolicyCommand } from "@aws-sdk/client-codebuild";
import { RetryBuildCommandInput, RetryBuildCommandOutput, RetryBuildCommand } from "@aws-sdk/client-codebuild";
import { RetryBuildBatchCommandInput, RetryBuildBatchCommandOutput, RetryBuildBatchCommand } from "@aws-sdk/client-codebuild";
import { StartBuildCommandInput, StartBuildCommandOutput, StartBuildCommand } from "@aws-sdk/client-codebuild";
import { StartBuildBatchCommandInput, StartBuildBatchCommandOutput, StartBuildBatchCommand } from "@aws-sdk/client-codebuild";
import { StopBuildCommandInput, StopBuildCommandOutput, StopBuildCommand } from "@aws-sdk/client-codebuild";
import { StopBuildBatchCommandInput, StopBuildBatchCommandOutput, StopBuildBatchCommand } from "@aws-sdk/client-codebuild";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput, UpdateProjectCommand } from "@aws-sdk/client-codebuild";
import { UpdateProjectVisibilityCommandInput, UpdateProjectVisibilityCommandOutput, UpdateProjectVisibilityCommand } from "@aws-sdk/client-codebuild";
import { UpdateReportGroupCommandInput, UpdateReportGroupCommandOutput, UpdateReportGroupCommand } from "@aws-sdk/client-codebuild";
import { UpdateWebhookCommandInput, UpdateWebhookCommandOutput, UpdateWebhookCommand } from "@aws-sdk/client-codebuild";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:batchDeleteBuilds'*/
export const nativeCodeBuildBatchDeleteBuilds = (input: SdkIntegrationTask<BatchDeleteBuildsCommandInput>): Promise<BatchDeleteBuildsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new BatchDeleteBuildsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:batchGetBuildBatches'*/
export const nativeCodeBuildBatchGetBuildBatches = (input: SdkIntegrationTask<BatchGetBuildBatchesCommandInput>): Promise<BatchGetBuildBatchesCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new BatchGetBuildBatchesCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:batchGetBuilds'*/
export const nativeCodeBuildBatchGetBuilds = (input: SdkIntegrationTask<BatchGetBuildsCommandInput>): Promise<BatchGetBuildsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new BatchGetBuildsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:batchGetProjects'*/
export const nativeCodeBuildBatchGetProjects = (input: SdkIntegrationTask<BatchGetProjectsCommandInput>): Promise<BatchGetProjectsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new BatchGetProjectsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:batchGetReportGroups'*/
export const nativeCodeBuildBatchGetReportGroups = (input: SdkIntegrationTask<BatchGetReportGroupsCommandInput>): Promise<BatchGetReportGroupsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new BatchGetReportGroupsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:batchGetReports'*/
export const nativeCodeBuildBatchGetReports = (input: SdkIntegrationTask<BatchGetReportsCommandInput>): Promise<BatchGetReportsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new BatchGetReportsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:createProject'*/
export const nativeCodeBuildCreateProject = (input: SdkIntegrationTask<CreateProjectCommandInput>): Promise<CreateProjectCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new CreateProjectCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:createReportGroup'*/
export const nativeCodeBuildCreateReportGroup = (input: SdkIntegrationTask<CreateReportGroupCommandInput>): Promise<CreateReportGroupCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new CreateReportGroupCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:createWebhook'*/
export const nativeCodeBuildCreateWebhook = (input: SdkIntegrationTask<CreateWebhookCommandInput>): Promise<CreateWebhookCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new CreateWebhookCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:deleteBuildBatch'*/
export const nativeCodeBuildDeleteBuildBatch = (input: SdkIntegrationTask<DeleteBuildBatchCommandInput>): Promise<DeleteBuildBatchCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new DeleteBuildBatchCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:deleteProject'*/
export const nativeCodeBuildDeleteProject = (input: SdkIntegrationTask<DeleteProjectCommandInput>): Promise<DeleteProjectCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new DeleteProjectCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:deleteReport'*/
export const nativeCodeBuildDeleteReport = (input: SdkIntegrationTask<DeleteReportCommandInput>): Promise<DeleteReportCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new DeleteReportCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:deleteReportGroup'*/
export const nativeCodeBuildDeleteReportGroup = (input: SdkIntegrationTask<DeleteReportGroupCommandInput>): Promise<DeleteReportGroupCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new DeleteReportGroupCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:deleteResourcePolicy'*/
export const nativeCodeBuildDeleteResourcePolicy = (input: SdkIntegrationTask<DeleteResourcePolicyCommandInput>): Promise<DeleteResourcePolicyCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new DeleteResourcePolicyCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:deleteSourceCredentials'*/
export const nativeCodeBuildDeleteSourceCredentials = (input: SdkIntegrationTask<DeleteSourceCredentialsCommandInput>): Promise<DeleteSourceCredentialsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new DeleteSourceCredentialsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:deleteWebhook'*/
export const nativeCodeBuildDeleteWebhook = (input: SdkIntegrationTask<DeleteWebhookCommandInput>): Promise<DeleteWebhookCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new DeleteWebhookCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:describeCodeCoverages'*/
export const nativeCodeBuildDescribeCodeCoverages = (input: SdkIntegrationTask<DescribeCodeCoveragesCommandInput>): Promise<DescribeCodeCoveragesCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new DescribeCodeCoveragesCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:describeTestCases'*/
export const nativeCodeBuildDescribeTestCases = (input: SdkIntegrationTask<DescribeTestCasesCommandInput>): Promise<DescribeTestCasesCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new DescribeTestCasesCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:getReportGroupTrend'*/
export const nativeCodeBuildGetReportGroupTrend = (input: SdkIntegrationTask<GetReportGroupTrendCommandInput>): Promise<GetReportGroupTrendCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new GetReportGroupTrendCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:getResourcePolicy'*/
export const nativeCodeBuildGetResourcePolicy = (input: SdkIntegrationTask<GetResourcePolicyCommandInput>): Promise<GetResourcePolicyCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new GetResourcePolicyCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:importSourceCredentials'*/
export const nativeCodeBuildImportSourceCredentials = (input: SdkIntegrationTask<ImportSourceCredentialsCommandInput>): Promise<ImportSourceCredentialsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ImportSourceCredentialsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:invalidateProjectCache'*/
export const nativeCodeBuildInvalidateProjectCache = (input: SdkIntegrationTask<InvalidateProjectCacheCommandInput>): Promise<InvalidateProjectCacheCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new InvalidateProjectCacheCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:listBuildBatches'*/
export const nativeCodeBuildListBuildBatches = (input: SdkIntegrationTask<ListBuildBatchesCommandInput>): Promise<ListBuildBatchesCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ListBuildBatchesCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:listBuildBatchesForProject'*/
export const nativeCodeBuildListBuildBatchesForProject = (input: SdkIntegrationTask<ListBuildBatchesForProjectCommandInput>): Promise<ListBuildBatchesForProjectCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ListBuildBatchesForProjectCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:listBuilds'*/
export const nativeCodeBuildListBuilds = (input: SdkIntegrationTask<ListBuildsCommandInput>): Promise<ListBuildsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ListBuildsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:listBuildsForProject'*/
export const nativeCodeBuildListBuildsForProject = (input: SdkIntegrationTask<ListBuildsForProjectCommandInput>): Promise<ListBuildsForProjectCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ListBuildsForProjectCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:listCuratedEnvironmentImages'*/
export const nativeCodeBuildListCuratedEnvironmentImages = (input: SdkIntegrationTask<ListCuratedEnvironmentImagesCommandInput>): Promise<ListCuratedEnvironmentImagesCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ListCuratedEnvironmentImagesCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:listProjects'*/
export const nativeCodeBuildListProjects = (input: SdkIntegrationTask<ListProjectsCommandInput>): Promise<ListProjectsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ListProjectsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:listReportGroups'*/
export const nativeCodeBuildListReportGroups = (input: SdkIntegrationTask<ListReportGroupsCommandInput>): Promise<ListReportGroupsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ListReportGroupsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:listReports'*/
export const nativeCodeBuildListReports = (input: SdkIntegrationTask<ListReportsCommandInput>): Promise<ListReportsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ListReportsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:listReportsForReportGroup'*/
export const nativeCodeBuildListReportsForReportGroup = (input: SdkIntegrationTask<ListReportsForReportGroupCommandInput>): Promise<ListReportsForReportGroupCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ListReportsForReportGroupCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:listSharedProjects'*/
export const nativeCodeBuildListSharedProjects = (input: SdkIntegrationTask<ListSharedProjectsCommandInput>): Promise<ListSharedProjectsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ListSharedProjectsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:listSharedReportGroups'*/
export const nativeCodeBuildListSharedReportGroups = (input: SdkIntegrationTask<ListSharedReportGroupsCommandInput>): Promise<ListSharedReportGroupsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ListSharedReportGroupsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:listSourceCredentials'*/
export const nativeCodeBuildListSourceCredentials = (input: SdkIntegrationTask<ListSourceCredentialsCommandInput>): Promise<ListSourceCredentialsCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new ListSourceCredentialsCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:putResourcePolicy'*/
export const nativeCodeBuildPutResourcePolicy = (input: SdkIntegrationTask<PutResourcePolicyCommandInput>): Promise<PutResourcePolicyCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new PutResourcePolicyCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:retryBuild'*/
export const nativeCodeBuildRetryBuild = (input: SdkIntegrationTask<RetryBuildCommandInput>): Promise<RetryBuildCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new RetryBuildCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:retryBuildBatch'*/
export const nativeCodeBuildRetryBuildBatch = (input: SdkIntegrationTask<RetryBuildBatchCommandInput>): Promise<RetryBuildBatchCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new RetryBuildBatchCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:startBuild'*/
export const nativeCodeBuildStartBuild = (input: SdkIntegrationTask<StartBuildCommandInput>): Promise<StartBuildCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new StartBuildCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:startBuildBatch'*/
export const nativeCodeBuildStartBuildBatch = (input: SdkIntegrationTask<StartBuildBatchCommandInput>): Promise<StartBuildBatchCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new StartBuildBatchCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:stopBuild'*/
export const nativeCodeBuildStopBuild = (input: SdkIntegrationTask<StopBuildCommandInput>): Promise<StopBuildCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new StopBuildCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:stopBuildBatch'*/
export const nativeCodeBuildStopBuildBatch = (input: SdkIntegrationTask<StopBuildBatchCommandInput>): Promise<StopBuildBatchCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new StopBuildBatchCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:updateProject'*/
export const nativeCodeBuildUpdateProject = (input: SdkIntegrationTask<UpdateProjectCommandInput>): Promise<UpdateProjectCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new UpdateProjectCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:updateProjectVisibility'*/
export const nativeCodeBuildUpdateProjectVisibility = (input: SdkIntegrationTask<UpdateProjectVisibilityCommandInput>): Promise<UpdateProjectVisibilityCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new UpdateProjectVisibilityCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:updateReportGroup'*/
export const nativeCodeBuildUpdateReportGroup = (input: SdkIntegrationTask<UpdateReportGroupCommandInput>): Promise<UpdateReportGroupCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new UpdateReportGroupCommand(input.parameters);
    return codebuild.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:codebuild:updateWebhook'*/
export const nativeCodeBuildUpdateWebhook = (input: SdkIntegrationTask<UpdateWebhookCommandInput>): Promise<UpdateWebhookCommandOutput> => {
    const codebuild = new CodeBuildClient(clientConfig);
    const command = new UpdateWebhookCommand(input.parameters);
    return codebuild.send(command);
};

