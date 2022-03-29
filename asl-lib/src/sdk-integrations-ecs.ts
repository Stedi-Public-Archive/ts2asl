import { ECSClient } from "@aws-sdk/client-ecs";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { CreateCapacityProviderCommandInput, CreateCapacityProviderCommandOutput, CreateCapacityProviderCommand } from "@aws-sdk/client-ecs";
import { CreateServiceCommandInput, CreateServiceCommandOutput, CreateServiceCommand } from "@aws-sdk/client-ecs";
import { CreateTaskSetCommandInput, CreateTaskSetCommandOutput, CreateTaskSetCommand } from "@aws-sdk/client-ecs";
import { DeleteAccountSettingCommandInput, DeleteAccountSettingCommandOutput, DeleteAccountSettingCommand } from "@aws-sdk/client-ecs";
import { DeleteAttributesCommandInput, DeleteAttributesCommandOutput, DeleteAttributesCommand } from "@aws-sdk/client-ecs";
import { DeleteCapacityProviderCommandInput, DeleteCapacityProviderCommandOutput, DeleteCapacityProviderCommand } from "@aws-sdk/client-ecs";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput, DeleteClusterCommand } from "@aws-sdk/client-ecs";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput, DeleteServiceCommand } from "@aws-sdk/client-ecs";
import { DeleteTaskSetCommandInput, DeleteTaskSetCommandOutput, DeleteTaskSetCommand } from "@aws-sdk/client-ecs";
import { DeregisterContainerInstanceCommandInput, DeregisterContainerInstanceCommandOutput, DeregisterContainerInstanceCommand } from "@aws-sdk/client-ecs";
import { DeregisterTaskDefinitionCommandInput, DeregisterTaskDefinitionCommandOutput, DeregisterTaskDefinitionCommand } from "@aws-sdk/client-ecs";
import { DescribeCapacityProvidersCommandInput, DescribeCapacityProvidersCommandOutput, DescribeCapacityProvidersCommand } from "@aws-sdk/client-ecs";
import { DescribeClustersCommandInput, DescribeClustersCommandOutput, DescribeClustersCommand } from "@aws-sdk/client-ecs";
import { DescribeContainerInstancesCommandInput, DescribeContainerInstancesCommandOutput, DescribeContainerInstancesCommand } from "@aws-sdk/client-ecs";
import { DescribeServicesCommandInput, DescribeServicesCommandOutput, DescribeServicesCommand } from "@aws-sdk/client-ecs";
import { DescribeTaskDefinitionCommandInput, DescribeTaskDefinitionCommandOutput, DescribeTaskDefinitionCommand } from "@aws-sdk/client-ecs";
import { DescribeTaskSetsCommandInput, DescribeTaskSetsCommandOutput, DescribeTaskSetsCommand } from "@aws-sdk/client-ecs";
import { DescribeTasksCommandInput, DescribeTasksCommandOutput, DescribeTasksCommand } from "@aws-sdk/client-ecs";
import { DiscoverPollEndpointCommandInput, DiscoverPollEndpointCommandOutput, DiscoverPollEndpointCommand } from "@aws-sdk/client-ecs";
import { ExecuteCommandCommandInput, ExecuteCommandCommandOutput, ExecuteCommandCommand } from "@aws-sdk/client-ecs";
import { ListAccountSettingsCommandInput, ListAccountSettingsCommandOutput, ListAccountSettingsCommand } from "@aws-sdk/client-ecs";
import { ListAttributesCommandInput, ListAttributesCommandOutput, ListAttributesCommand } from "@aws-sdk/client-ecs";
import { ListClustersCommandInput, ListClustersCommandOutput, ListClustersCommand } from "@aws-sdk/client-ecs";
import { ListContainerInstancesCommandInput, ListContainerInstancesCommandOutput, ListContainerInstancesCommand } from "@aws-sdk/client-ecs";
import { ListServicesCommandInput, ListServicesCommandOutput, ListServicesCommand } from "@aws-sdk/client-ecs";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, ListTagsForResourceCommand } from "@aws-sdk/client-ecs";
import { ListTaskDefinitionFamiliesCommandInput, ListTaskDefinitionFamiliesCommandOutput, ListTaskDefinitionFamiliesCommand } from "@aws-sdk/client-ecs";
import { ListTaskDefinitionsCommandInput, ListTaskDefinitionsCommandOutput, ListTaskDefinitionsCommand } from "@aws-sdk/client-ecs";
import { ListTasksCommandInput, ListTasksCommandOutput, ListTasksCommand } from "@aws-sdk/client-ecs";
import { PutAccountSettingCommandInput, PutAccountSettingCommandOutput, PutAccountSettingCommand } from "@aws-sdk/client-ecs";
import { PutAccountSettingDefaultCommandInput, PutAccountSettingDefaultCommandOutput, PutAccountSettingDefaultCommand } from "@aws-sdk/client-ecs";
import { PutAttributesCommandInput, PutAttributesCommandOutput, PutAttributesCommand } from "@aws-sdk/client-ecs";
import { PutClusterCapacityProvidersCommandInput, PutClusterCapacityProvidersCommandOutput, PutClusterCapacityProvidersCommand } from "@aws-sdk/client-ecs";
import { RegisterContainerInstanceCommandInput, RegisterContainerInstanceCommandOutput, RegisterContainerInstanceCommand } from "@aws-sdk/client-ecs";
import { RegisterTaskDefinitionCommandInput, RegisterTaskDefinitionCommandOutput, RegisterTaskDefinitionCommand } from "@aws-sdk/client-ecs";
import { RunTaskCommandInput, RunTaskCommandOutput, RunTaskCommand } from "@aws-sdk/client-ecs";
import { StartTaskCommandInput, StartTaskCommandOutput, StartTaskCommand } from "@aws-sdk/client-ecs";
import { StopTaskCommandInput, StopTaskCommandOutput, StopTaskCommand } from "@aws-sdk/client-ecs";
import { SubmitAttachmentStateChangesCommandInput, SubmitAttachmentStateChangesCommandOutput, SubmitAttachmentStateChangesCommand } from "@aws-sdk/client-ecs";
import { SubmitContainerStateChangeCommandInput, SubmitContainerStateChangeCommandOutput, SubmitContainerStateChangeCommand } from "@aws-sdk/client-ecs";
import { SubmitTaskStateChangeCommandInput, SubmitTaskStateChangeCommandOutput, SubmitTaskStateChangeCommand } from "@aws-sdk/client-ecs";
import { TagResourceCommandInput, TagResourceCommandOutput, TagResourceCommand } from "@aws-sdk/client-ecs";
import { UntagResourceCommandInput, UntagResourceCommandOutput, UntagResourceCommand } from "@aws-sdk/client-ecs";
import { UpdateCapacityProviderCommandInput, UpdateCapacityProviderCommandOutput, UpdateCapacityProviderCommand } from "@aws-sdk/client-ecs";
import { UpdateContainerAgentCommandInput, UpdateContainerAgentCommandOutput, UpdateContainerAgentCommand } from "@aws-sdk/client-ecs";
import { UpdateContainerInstancesStateCommandInput, UpdateContainerInstancesStateCommandOutput, UpdateContainerInstancesStateCommand } from "@aws-sdk/client-ecs";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput, UpdateServiceCommand } from "@aws-sdk/client-ecs";
import { UpdateServicePrimaryTaskSetCommandInput, UpdateServicePrimaryTaskSetCommandOutput, UpdateServicePrimaryTaskSetCommand } from "@aws-sdk/client-ecs";
import { UpdateTaskSetCommandInput, UpdateTaskSetCommandOutput, UpdateTaskSetCommand } from "@aws-sdk/client-ecs";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:createCapacityProvider'*/
export const sdkECSCreateCapacityProvider = (input: SdkIntegrationTask<CreateCapacityProviderCommandInput>): Promise<CreateCapacityProviderCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new CreateCapacityProviderCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:createService'*/
export const sdkECSCreateService = (input: SdkIntegrationTask<CreateServiceCommandInput>): Promise<CreateServiceCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new CreateServiceCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:createTaskSet'*/
export const sdkECSCreateTaskSet = (input: SdkIntegrationTask<CreateTaskSetCommandInput>): Promise<CreateTaskSetCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new CreateTaskSetCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deleteAccountSetting'*/
export const sdkECSDeleteAccountSetting = (input: SdkIntegrationTask<DeleteAccountSettingCommandInput>): Promise<DeleteAccountSettingCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DeleteAccountSettingCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deleteAttributes'*/
export const sdkECSDeleteAttributes = (input: SdkIntegrationTask<DeleteAttributesCommandInput>): Promise<DeleteAttributesCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DeleteAttributesCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deleteCapacityProvider'*/
export const sdkECSDeleteCapacityProvider = (input: SdkIntegrationTask<DeleteCapacityProviderCommandInput>): Promise<DeleteCapacityProviderCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DeleteCapacityProviderCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deleteCluster'*/
export const sdkECSDeleteCluster = (input: SdkIntegrationTask<DeleteClusterCommandInput>): Promise<DeleteClusterCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DeleteClusterCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deleteService'*/
export const sdkECSDeleteService = (input: SdkIntegrationTask<DeleteServiceCommandInput>): Promise<DeleteServiceCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DeleteServiceCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deleteTaskSet'*/
export const sdkECSDeleteTaskSet = (input: SdkIntegrationTask<DeleteTaskSetCommandInput>): Promise<DeleteTaskSetCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DeleteTaskSetCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deregisterContainerInstance'*/
export const sdkECSDeregisterContainerInstance = (input: SdkIntegrationTask<DeregisterContainerInstanceCommandInput>): Promise<DeregisterContainerInstanceCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DeregisterContainerInstanceCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deregisterTaskDefinition'*/
export const sdkECSDeregisterTaskDefinition = (input: SdkIntegrationTask<DeregisterTaskDefinitionCommandInput>): Promise<DeregisterTaskDefinitionCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DeregisterTaskDefinitionCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeCapacityProviders'*/
export const sdkECSDescribeCapacityProviders = (input: SdkIntegrationTask<DescribeCapacityProvidersCommandInput>): Promise<DescribeCapacityProvidersCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DescribeCapacityProvidersCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeClusters'*/
export const sdkECSDescribeClusters = (input: SdkIntegrationTask<DescribeClustersCommandInput>): Promise<DescribeClustersCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DescribeClustersCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeContainerInstances'*/
export const sdkECSDescribeContainerInstances = (input: SdkIntegrationTask<DescribeContainerInstancesCommandInput>): Promise<DescribeContainerInstancesCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DescribeContainerInstancesCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeServices'*/
export const sdkECSDescribeServices = (input: SdkIntegrationTask<DescribeServicesCommandInput>): Promise<DescribeServicesCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DescribeServicesCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeTaskDefinition'*/
export const sdkECSDescribeTaskDefinition = (input: SdkIntegrationTask<DescribeTaskDefinitionCommandInput>): Promise<DescribeTaskDefinitionCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DescribeTaskDefinitionCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeTaskSets'*/
export const sdkECSDescribeTaskSets = (input: SdkIntegrationTask<DescribeTaskSetsCommandInput>): Promise<DescribeTaskSetsCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DescribeTaskSetsCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeTasks'*/
export const sdkECSDescribeTasks = (input: SdkIntegrationTask<DescribeTasksCommandInput>): Promise<DescribeTasksCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DescribeTasksCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:discoverPollEndpoint'*/
export const sdkECSDiscoverPollEndpoint = (input: SdkIntegrationTask<DiscoverPollEndpointCommandInput>): Promise<DiscoverPollEndpointCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new DiscoverPollEndpointCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:executeCommand'*/
export const sdkECSExecuteCommand = (input: SdkIntegrationTask<ExecuteCommandCommandInput>): Promise<ExecuteCommandCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new ExecuteCommandCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listAccountSettings'*/
export const sdkECSListAccountSettings = (input: SdkIntegrationTask<ListAccountSettingsCommandInput>): Promise<ListAccountSettingsCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new ListAccountSettingsCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listAttributes'*/
export const sdkECSListAttributes = (input: SdkIntegrationTask<ListAttributesCommandInput>): Promise<ListAttributesCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new ListAttributesCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listClusters'*/
export const sdkECSListClusters = (input: SdkIntegrationTask<ListClustersCommandInput>): Promise<ListClustersCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new ListClustersCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listContainerInstances'*/
export const sdkECSListContainerInstances = (input: SdkIntegrationTask<ListContainerInstancesCommandInput>): Promise<ListContainerInstancesCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new ListContainerInstancesCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listServices'*/
export const sdkECSListServices = (input: SdkIntegrationTask<ListServicesCommandInput>): Promise<ListServicesCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new ListServicesCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listTagsForResource'*/
export const sdkECSListTagsForResource = (input: SdkIntegrationTask<ListTagsForResourceCommandInput>): Promise<ListTagsForResourceCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new ListTagsForResourceCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listTaskDefinitionFamilies'*/
export const sdkECSListTaskDefinitionFamilies = (input: SdkIntegrationTask<ListTaskDefinitionFamiliesCommandInput>): Promise<ListTaskDefinitionFamiliesCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new ListTaskDefinitionFamiliesCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listTaskDefinitions'*/
export const sdkECSListTaskDefinitions = (input: SdkIntegrationTask<ListTaskDefinitionsCommandInput>): Promise<ListTaskDefinitionsCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new ListTaskDefinitionsCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listTasks'*/
export const sdkECSListTasks = (input: SdkIntegrationTask<ListTasksCommandInput>): Promise<ListTasksCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new ListTasksCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:putAccountSetting'*/
export const sdkECSPutAccountSetting = (input: SdkIntegrationTask<PutAccountSettingCommandInput>): Promise<PutAccountSettingCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new PutAccountSettingCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:putAccountSettingDefault'*/
export const sdkECSPutAccountSettingDefault = (input: SdkIntegrationTask<PutAccountSettingDefaultCommandInput>): Promise<PutAccountSettingDefaultCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new PutAccountSettingDefaultCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:putAttributes'*/
export const sdkECSPutAttributes = (input: SdkIntegrationTask<PutAttributesCommandInput>): Promise<PutAttributesCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new PutAttributesCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:putClusterCapacityProviders'*/
export const sdkECSPutClusterCapacityProviders = (input: SdkIntegrationTask<PutClusterCapacityProvidersCommandInput>): Promise<PutClusterCapacityProvidersCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new PutClusterCapacityProvidersCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:registerContainerInstance'*/
export const sdkECSRegisterContainerInstance = (input: SdkIntegrationTask<RegisterContainerInstanceCommandInput>): Promise<RegisterContainerInstanceCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new RegisterContainerInstanceCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:registerTaskDefinition'*/
export const sdkECSRegisterTaskDefinition = (input: SdkIntegrationTask<RegisterTaskDefinitionCommandInput>): Promise<RegisterTaskDefinitionCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new RegisterTaskDefinitionCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:runTask'*/
export const sdkECSRunTask = (input: SdkIntegrationTask<RunTaskCommandInput>): Promise<RunTaskCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new RunTaskCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:startTask'*/
export const sdkECSStartTask = (input: SdkIntegrationTask<StartTaskCommandInput>): Promise<StartTaskCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new StartTaskCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:stopTask'*/
export const sdkECSStopTask = (input: SdkIntegrationTask<StopTaskCommandInput>): Promise<StopTaskCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new StopTaskCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:submitAttachmentStateChanges'*/
export const sdkECSSubmitAttachmentStateChanges = (input: SdkIntegrationTask<SubmitAttachmentStateChangesCommandInput>): Promise<SubmitAttachmentStateChangesCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new SubmitAttachmentStateChangesCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:submitContainerStateChange'*/
export const sdkECSSubmitContainerStateChange = (input: SdkIntegrationTask<SubmitContainerStateChangeCommandInput>): Promise<SubmitContainerStateChangeCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new SubmitContainerStateChangeCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:submitTaskStateChange'*/
export const sdkECSSubmitTaskStateChange = (input: SdkIntegrationTask<SubmitTaskStateChangeCommandInput>): Promise<SubmitTaskStateChangeCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new SubmitTaskStateChangeCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:tagResource'*/
export const sdkECSTagResource = (input: SdkIntegrationTask<TagResourceCommandInput>): Promise<TagResourceCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new TagResourceCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:untagResource'*/
export const sdkECSUntagResource = (input: SdkIntegrationTask<UntagResourceCommandInput>): Promise<UntagResourceCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new UntagResourceCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:updateCapacityProvider'*/
export const sdkECSUpdateCapacityProvider = (input: SdkIntegrationTask<UpdateCapacityProviderCommandInput>): Promise<UpdateCapacityProviderCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new UpdateCapacityProviderCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:updateContainerAgent'*/
export const sdkECSUpdateContainerAgent = (input: SdkIntegrationTask<UpdateContainerAgentCommandInput>): Promise<UpdateContainerAgentCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new UpdateContainerAgentCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:updateContainerInstancesState'*/
export const sdkECSUpdateContainerInstancesState = (input: SdkIntegrationTask<UpdateContainerInstancesStateCommandInput>): Promise<UpdateContainerInstancesStateCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new UpdateContainerInstancesStateCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:updateService'*/
export const sdkECSUpdateService = (input: SdkIntegrationTask<UpdateServiceCommandInput>): Promise<UpdateServiceCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new UpdateServiceCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:updateServicePrimaryTaskSet'*/
export const sdkECSUpdateServicePrimaryTaskSet = (input: SdkIntegrationTask<UpdateServicePrimaryTaskSetCommandInput>): Promise<UpdateServicePrimaryTaskSetCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new UpdateServicePrimaryTaskSetCommand(input.parameters);
    return ecs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:updateTaskSet'*/
export const sdkECSUpdateTaskSet = (input: SdkIntegrationTask<UpdateTaskSetCommandInput>): Promise<UpdateTaskSetCommandOutput> => {
    const ecs = new ECSClient(clientConfig);
    const command = new UpdateTaskSetCommand(input.parameters);
    return ecs.send(command);
};

