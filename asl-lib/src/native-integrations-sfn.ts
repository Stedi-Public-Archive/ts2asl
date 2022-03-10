import { SFNClient } from "@aws-sdk/client-sfn";
import { SdkIntegrationTask } from "./asl";
import { CreateActivityCommandInput, CreateActivityCommandOutput, CreateActivityCommand } from "@aws-sdk/client-sfn";
import { CreateStateMachineCommandInput, CreateStateMachineCommandOutput, CreateStateMachineCommand } from "@aws-sdk/client-sfn";
import { DeleteActivityCommandInput, DeleteActivityCommandOutput, DeleteActivityCommand } from "@aws-sdk/client-sfn";
import { DeleteStateMachineCommandInput, DeleteStateMachineCommandOutput, DeleteStateMachineCommand } from "@aws-sdk/client-sfn";
import { DescribeActivityCommandInput, DescribeActivityCommandOutput, DescribeActivityCommand } from "@aws-sdk/client-sfn";
import { DescribeExecutionCommandInput, DescribeExecutionCommandOutput, DescribeExecutionCommand } from "@aws-sdk/client-sfn";
import { DescribeStateMachineCommandInput, DescribeStateMachineCommandOutput, DescribeStateMachineCommand } from "@aws-sdk/client-sfn";
import { DescribeStateMachineForExecutionCommandInput, DescribeStateMachineForExecutionCommandOutput, DescribeStateMachineForExecutionCommand } from "@aws-sdk/client-sfn";
import { GetActivityTaskCommandInput, GetActivityTaskCommandOutput, GetActivityTaskCommand } from "@aws-sdk/client-sfn";
import { GetExecutionHistoryCommandInput, GetExecutionHistoryCommandOutput, GetExecutionHistoryCommand } from "@aws-sdk/client-sfn";
import { ListActivitiesCommandInput, ListActivitiesCommandOutput, ListActivitiesCommand } from "@aws-sdk/client-sfn";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput, ListExecutionsCommand } from "@aws-sdk/client-sfn";
import { ListStateMachinesCommandInput, ListStateMachinesCommandOutput, ListStateMachinesCommand } from "@aws-sdk/client-sfn";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, ListTagsForResourceCommand } from "@aws-sdk/client-sfn";
import { SendTaskFailureCommandInput, SendTaskFailureCommandOutput, SendTaskFailureCommand } from "@aws-sdk/client-sfn";
import { SendTaskHeartbeatCommandInput, SendTaskHeartbeatCommandOutput, SendTaskHeartbeatCommand } from "@aws-sdk/client-sfn";
import { SendTaskSuccessCommandInput, SendTaskSuccessCommandOutput, SendTaskSuccessCommand } from "@aws-sdk/client-sfn";
import { StartExecutionCommandInput, StartExecutionCommandOutput, StartExecutionCommand } from "@aws-sdk/client-sfn";
import { StartSyncExecutionCommandInput, StartSyncExecutionCommandOutput, StartSyncExecutionCommand } from "@aws-sdk/client-sfn";
import { StopExecutionCommandInput, StopExecutionCommandOutput, StopExecutionCommand } from "@aws-sdk/client-sfn";
import { TagResourceCommandInput, TagResourceCommandOutput, TagResourceCommand } from "@aws-sdk/client-sfn";
import { UntagResourceCommandInput, UntagResourceCommandOutput, UntagResourceCommand } from "@aws-sdk/client-sfn";
import { UpdateStateMachineCommandInput, UpdateStateMachineCommandOutput, UpdateStateMachineCommand } from "@aws-sdk/client-sfn";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:createActivity'*/
export const nativeSfnCreateActivity = (input: SdkIntegrationTask<CreateActivityCommandInput>): Promise<CreateActivityCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new CreateActivityCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:createStateMachine'*/
export const nativeSfnCreateStateMachine = (input: SdkIntegrationTask<CreateStateMachineCommandInput>): Promise<CreateStateMachineCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new CreateStateMachineCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:deleteActivity'*/
export const nativeSfnDeleteActivity = (input: SdkIntegrationTask<DeleteActivityCommandInput>): Promise<DeleteActivityCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new DeleteActivityCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:deleteStateMachine'*/
export const nativeSfnDeleteStateMachine = (input: SdkIntegrationTask<DeleteStateMachineCommandInput>): Promise<DeleteStateMachineCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new DeleteStateMachineCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:describeActivity'*/
export const nativeSfnDescribeActivity = (input: SdkIntegrationTask<DescribeActivityCommandInput>): Promise<DescribeActivityCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new DescribeActivityCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:describeExecution'*/
export const nativeSfnDescribeExecution = (input: SdkIntegrationTask<DescribeExecutionCommandInput>): Promise<DescribeExecutionCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new DescribeExecutionCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:describeStateMachine'*/
export const nativeSfnDescribeStateMachine = (input: SdkIntegrationTask<DescribeStateMachineCommandInput>): Promise<DescribeStateMachineCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new DescribeStateMachineCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:describeStateMachineForExecution'*/
export const nativeSfnDescribeStateMachineForExecution = (input: SdkIntegrationTask<DescribeStateMachineForExecutionCommandInput>): Promise<DescribeStateMachineForExecutionCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new DescribeStateMachineForExecutionCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:getActivityTask'*/
export const nativeSfnGetActivityTask = (input: SdkIntegrationTask<GetActivityTaskCommandInput>): Promise<GetActivityTaskCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new GetActivityTaskCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:getExecutionHistory'*/
export const nativeSfnGetExecutionHistory = (input: SdkIntegrationTask<GetExecutionHistoryCommandInput>): Promise<GetExecutionHistoryCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new GetExecutionHistoryCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:listActivities'*/
export const nativeSfnListActivities = (input: SdkIntegrationTask<ListActivitiesCommandInput>): Promise<ListActivitiesCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new ListActivitiesCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:listExecutions'*/
export const nativeSfnListExecutions = (input: SdkIntegrationTask<ListExecutionsCommandInput>): Promise<ListExecutionsCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new ListExecutionsCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:listStateMachines'*/
export const nativeSfnListStateMachines = (input: SdkIntegrationTask<ListStateMachinesCommandInput>): Promise<ListStateMachinesCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new ListStateMachinesCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:listTagsForResource'*/
export const nativeSfnListTagsForResource = (input: SdkIntegrationTask<ListTagsForResourceCommandInput>): Promise<ListTagsForResourceCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new ListTagsForResourceCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:sendTaskFailure'*/
export const nativeSfnSendTaskFailure = (input: SdkIntegrationTask<SendTaskFailureCommandInput>): Promise<SendTaskFailureCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new SendTaskFailureCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:sendTaskHeartbeat'*/
export const nativeSfnSendTaskHeartbeat = (input: SdkIntegrationTask<SendTaskHeartbeatCommandInput>): Promise<SendTaskHeartbeatCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new SendTaskHeartbeatCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:sendTaskSuccess'*/
export const nativeSfnSendTaskSuccess = (input: SdkIntegrationTask<SendTaskSuccessCommandInput>): Promise<SendTaskSuccessCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new SendTaskSuccessCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:startExecution'*/
export const nativeSfnStartExecution = (input: SdkIntegrationTask<StartExecutionCommandInput>): Promise<StartExecutionCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new StartExecutionCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:startSyncExecution'*/
export const nativeSfnStartSyncExecution = (input: SdkIntegrationTask<StartSyncExecutionCommandInput>): Promise<StartSyncExecutionCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new StartSyncExecutionCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:stopExecution'*/
export const nativeSfnStopExecution = (input: SdkIntegrationTask<StopExecutionCommandInput>): Promise<StopExecutionCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new StopExecutionCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:tagResource'*/
export const nativeSfnTagResource = (input: SdkIntegrationTask<TagResourceCommandInput>): Promise<TagResourceCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new TagResourceCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:untagResource'*/
export const nativeSfnUntagResource = (input: SdkIntegrationTask<UntagResourceCommandInput>): Promise<UntagResourceCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new UntagResourceCommand(input.parameters);
    return sfn.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sfn:updateStateMachine'*/
export const nativeSfnUpdateStateMachine = (input: SdkIntegrationTask<UpdateStateMachineCommandInput>): Promise<UpdateStateMachineCommandOutput> => {
    const sfn = new SFNClient({});
    const command = new UpdateStateMachineCommand(input.parameters);
    return sfn.send(command);
};

