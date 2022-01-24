import { SQSClient } from "@aws-sdk/client-sqs";
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


export namespace ASL {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:addPermission'*/
    export const nativeSQSAddPermission = (input: AddPermissionCommandInput): Promise<AddPermissionCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new AddPermissionCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:changeMessageVisibility'*/
    export const nativeSQSChangeMessageVisibility = (input: ChangeMessageVisibilityCommandInput): Promise<ChangeMessageVisibilityCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new ChangeMessageVisibilityCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:changeMessageVisibilityBatch'*/
    export const nativeSQSChangeMessageVisibilityBatch = (input: ChangeMessageVisibilityBatchCommandInput): Promise<ChangeMessageVisibilityBatchCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new ChangeMessageVisibilityBatchCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:createQueue'*/
    export const nativeSQSCreateQueue = (input: CreateQueueCommandInput): Promise<CreateQueueCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new CreateQueueCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:deleteMessage'*/
    export const nativeSQSDeleteMessage = (input: DeleteMessageCommandInput): Promise<DeleteMessageCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new DeleteMessageCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:deleteMessageBatch'*/
    export const nativeSQSDeleteMessageBatch = (input: DeleteMessageBatchCommandInput): Promise<DeleteMessageBatchCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new DeleteMessageBatchCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:deleteQueue'*/
    export const nativeSQSDeleteQueue = (input: DeleteQueueCommandInput): Promise<DeleteQueueCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new DeleteQueueCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:getQueueAttributes'*/
    export const nativeSQSGetQueueAttributes = (input: GetQueueAttributesCommandInput): Promise<GetQueueAttributesCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new GetQueueAttributesCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:getQueueUrl'*/
    export const nativeSQSGetQueueUrl = (input: GetQueueUrlCommandInput): Promise<GetQueueUrlCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new GetQueueUrlCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:listDeadLetterSourceQueues'*/
    export const nativeSQSListDeadLetterSourceQueues = (input: ListDeadLetterSourceQueuesCommandInput): Promise<ListDeadLetterSourceQueuesCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new ListDeadLetterSourceQueuesCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:listQueueTags'*/
    export const nativeSQSListQueueTags = (input: ListQueueTagsCommandInput): Promise<ListQueueTagsCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new ListQueueTagsCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:listQueues'*/
    export const nativeSQSListQueues = (input: ListQueuesCommandInput): Promise<ListQueuesCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new ListQueuesCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:purgeQueue'*/
    export const nativeSQSPurgeQueue = (input: PurgeQueueCommandInput): Promise<PurgeQueueCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new PurgeQueueCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:receiveMessage'*/
    export const nativeSQSReceiveMessage = (input: ReceiveMessageCommandInput): Promise<ReceiveMessageCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new ReceiveMessageCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:removePermission'*/
    export const nativeSQSRemovePermission = (input: RemovePermissionCommandInput): Promise<RemovePermissionCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new RemovePermissionCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:sendMessage'*/
    export const nativeSQSSendMessage = (input: SendMessageCommandInput): Promise<SendMessageCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new SendMessageCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:sendMessageBatch'*/
    export const nativeSQSSendMessageBatch = (input: SendMessageBatchCommandInput): Promise<SendMessageBatchCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new SendMessageBatchCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:setQueueAttributes'*/
    export const nativeSQSSetQueueAttributes = (input: SetQueueAttributesCommandInput): Promise<SetQueueAttributesCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new SetQueueAttributesCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:tagQueue'*/
    export const nativeSQSTagQueue = (input: TagQueueCommandInput): Promise<TagQueueCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new TagQueueCommand(input);
        return sqs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sqs:untagQueue'*/
    export const nativeSQSUntagQueue = (input: UntagQueueCommandInput): Promise<UntagQueueCommandOutput> => {
        const sqs = new SQSClient({});
        const command = new UntagQueueCommand(input);
        return sqs.send(command);
    };
}

