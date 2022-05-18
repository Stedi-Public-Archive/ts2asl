import { SQSClient } from "@aws-sdk/client-sqs";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { AddPermissionCommandInput, AddPermissionCommandOutput, AddPermissionCommand } from "@aws-sdk/client-sqs";
import { ChangeMessageVisibilityCommandInput, ChangeMessageVisibilityCommandOutput, ChangeMessageVisibilityCommand } from "@aws-sdk/client-sqs";
import { ChangeMessageVisibilityBatchCommandInput, ChangeMessageVisibilityBatchCommandOutput, ChangeMessageVisibilityBatchCommand } from "@aws-sdk/client-sqs";
import { CreateQueueCommandInput, CreateQueueCommandOutput, CreateQueueCommand } from "@aws-sdk/client-sqs";
import { DeleteMessageCommandInput, DeleteMessageCommandOutput, DeleteMessageCommand } from "@aws-sdk/client-sqs";
import { DeleteMessageBatchCommandInput, DeleteMessageBatchCommandOutput, DeleteMessageBatchCommand } from "@aws-sdk/client-sqs";
import { DeleteQueueCommandInput, DeleteQueueCommandOutput, DeleteQueueCommand } from "@aws-sdk/client-sqs";
import { GetQueueAttributesCommandInput, GetQueueAttributesCommandOutput, GetQueueAttributesCommand } from "@aws-sdk/client-sqs";
import { GetQueueUrlCommandInput, GetQueueUrlCommandOutput, GetQueueUrlCommand } from "@aws-sdk/client-sqs";
import { ListDeadLetterSourceQueuesCommandInput, ListDeadLetterSourceQueuesCommandOutput, ListDeadLetterSourceQueuesCommand } from "@aws-sdk/client-sqs";
import { ListQueueTagsCommandInput, ListQueueTagsCommandOutput, ListQueueTagsCommand } from "@aws-sdk/client-sqs";
import { ListQueuesCommandInput, ListQueuesCommandOutput, ListQueuesCommand } from "@aws-sdk/client-sqs";
import { PurgeQueueCommandInput, PurgeQueueCommandOutput, PurgeQueueCommand } from "@aws-sdk/client-sqs";
import { ReceiveMessageCommandInput, ReceiveMessageCommandOutput, ReceiveMessageCommand } from "@aws-sdk/client-sqs";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput, RemovePermissionCommand } from "@aws-sdk/client-sqs";
import { SendMessageCommandInput, SendMessageCommandOutput, SendMessageCommand } from "@aws-sdk/client-sqs";
import { SendMessageBatchCommandInput, SendMessageBatchCommandOutput, SendMessageBatchCommand } from "@aws-sdk/client-sqs";
import { SetQueueAttributesCommandInput, SetQueueAttributesCommandOutput, SetQueueAttributesCommand } from "@aws-sdk/client-sqs";
import { TagQueueCommandInput, TagQueueCommandOutput, TagQueueCommand } from "@aws-sdk/client-sqs";
import { UntagQueueCommandInput, UntagQueueCommandOutput, UntagQueueCommand } from "@aws-sdk/client-sqs";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:addPermission'*/
export const sdkSQSAddPermission = (input: SdkIntegrationTask<AddPermissionCommandInput>): Promise<AddPermissionCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new AddPermissionCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:changeMessageVisibility'*/
export const sdkSQSChangeMessageVisibility = (input: SdkIntegrationTask<ChangeMessageVisibilityCommandInput>): Promise<ChangeMessageVisibilityCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new ChangeMessageVisibilityCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:changeMessageVisibilityBatch'*/
export const sdkSQSChangeMessageVisibilityBatch = (input: SdkIntegrationTask<ChangeMessageVisibilityBatchCommandInput>): Promise<ChangeMessageVisibilityBatchCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new ChangeMessageVisibilityBatchCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:createQueue'*/
export const sdkSQSCreateQueue = (input: SdkIntegrationTask<CreateQueueCommandInput>): Promise<CreateQueueCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new CreateQueueCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:deleteMessage'*/
export const sdkSQSDeleteMessage = (input: SdkIntegrationTask<DeleteMessageCommandInput>): Promise<DeleteMessageCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new DeleteMessageCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:deleteMessageBatch'*/
export const sdkSQSDeleteMessageBatch = (input: SdkIntegrationTask<DeleteMessageBatchCommandInput>): Promise<DeleteMessageBatchCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new DeleteMessageBatchCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:deleteQueue'*/
export const sdkSQSDeleteQueue = (input: SdkIntegrationTask<DeleteQueueCommandInput>): Promise<DeleteQueueCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new DeleteQueueCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:getQueueAttributes'*/
export const sdkSQSGetQueueAttributes = (input: SdkIntegrationTask<GetQueueAttributesCommandInput>): Promise<GetQueueAttributesCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new GetQueueAttributesCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:getQueueUrl'*/
export const sdkSQSGetQueueUrl = (input: SdkIntegrationTask<GetQueueUrlCommandInput>): Promise<GetQueueUrlCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new GetQueueUrlCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:listDeadLetterSourceQueues'*/
export const sdkSQSListDeadLetterSourceQueues = (input: SdkIntegrationTask<ListDeadLetterSourceQueuesCommandInput>): Promise<ListDeadLetterSourceQueuesCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new ListDeadLetterSourceQueuesCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:listQueueTags'*/
export const sdkSQSListQueueTags = (input: SdkIntegrationTask<ListQueueTagsCommandInput>): Promise<ListQueueTagsCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new ListQueueTagsCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:listQueues'*/
export const sdkSQSListQueues = (input: SdkIntegrationTask<ListQueuesCommandInput>): Promise<ListQueuesCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new ListQueuesCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:purgeQueue'*/
export const sdkSQSPurgeQueue = (input: SdkIntegrationTask<PurgeQueueCommandInput>): Promise<PurgeQueueCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new PurgeQueueCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:receiveMessage'*/
export const sdkSQSReceiveMessage = (input: SdkIntegrationTask<ReceiveMessageCommandInput>): Promise<ReceiveMessageCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new ReceiveMessageCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:removePermission'*/
export const sdkSQSRemovePermission = (input: SdkIntegrationTask<RemovePermissionCommandInput>): Promise<RemovePermissionCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new RemovePermissionCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:sendMessage'*/
export const sdkSQSSendMessage = (input: SdkIntegrationTask<SendMessageCommandInput>): Promise<SendMessageCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new SendMessageCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:sendMessageBatch'*/
export const sdkSQSSendMessageBatch = (input: SdkIntegrationTask<SendMessageBatchCommandInput>): Promise<SendMessageBatchCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new SendMessageBatchCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:setQueueAttributes'*/
export const sdkSQSSetQueueAttributes = (input: SdkIntegrationTask<SetQueueAttributesCommandInput>): Promise<SetQueueAttributesCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new SetQueueAttributesCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:tagQueue'*/
export const sdkSQSTagQueue = (input: SdkIntegrationTask<TagQueueCommandInput>): Promise<TagQueueCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new TagQueueCommand(input.parameters);
    return sqs.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:untagQueue'*/
export const sdkSQSUntagQueue = (input: SdkIntegrationTask<UntagQueueCommandInput>): Promise<UntagQueueCommandOutput> => {
    const sqs = new SQSClient(clientConfig);
    const command = new UntagQueueCommand(input.parameters);
    return sqs.send(command);
};

