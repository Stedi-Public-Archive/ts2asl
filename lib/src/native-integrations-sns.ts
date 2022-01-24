import { SNSClient } from "@aws-sdk/client-sns";
import { AddPermissionCommandInput, AddPermissionCommandOutput, AddPermissionCommand } from "@aws-sdk/client-sns";
import { CheckIfPhoneNumberIsOptedOutCommandInput, CheckIfPhoneNumberIsOptedOutCommandOutput, CheckIfPhoneNumberIsOptedOutCommand } from "@aws-sdk/client-sns";
import { ConfirmSubscriptionCommandInput, ConfirmSubscriptionCommandOutput, ConfirmSubscriptionCommand } from "@aws-sdk/client-sns";
import { CreatePlatformApplicationCommandInput, CreatePlatformApplicationCommandOutput, CreatePlatformApplicationCommand } from "@aws-sdk/client-sns";
import { CreatePlatformEndpointCommandInput, CreatePlatformEndpointCommandOutput, CreatePlatformEndpointCommand } from "@aws-sdk/client-sns";
import { CreateSMSSandboxPhoneNumberCommandInput, CreateSMSSandboxPhoneNumberCommandOutput, CreateSMSSandboxPhoneNumberCommand } from "@aws-sdk/client-sns";
import { CreateTopicCommandInput, CreateTopicCommandOutput, CreateTopicCommand } from "@aws-sdk/client-sns";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput, DeleteEndpointCommand } from "@aws-sdk/client-sns";
import { DeletePlatformApplicationCommandInput, DeletePlatformApplicationCommandOutput, DeletePlatformApplicationCommand } from "@aws-sdk/client-sns";
import { DeleteSMSSandboxPhoneNumberCommandInput, DeleteSMSSandboxPhoneNumberCommandOutput, DeleteSMSSandboxPhoneNumberCommand } from "@aws-sdk/client-sns";
import { DeleteTopicCommandInput, DeleteTopicCommandOutput, DeleteTopicCommand } from "@aws-sdk/client-sns";
import { GetEndpointAttributesCommandInput, GetEndpointAttributesCommandOutput, GetEndpointAttributesCommand } from "@aws-sdk/client-sns";
import { GetPlatformApplicationAttributesCommandInput, GetPlatformApplicationAttributesCommandOutput, GetPlatformApplicationAttributesCommand } from "@aws-sdk/client-sns";
import { GetSMSAttributesCommandInput, GetSMSAttributesCommandOutput, GetSMSAttributesCommand } from "@aws-sdk/client-sns";
import { GetSMSSandboxAccountStatusCommandInput, GetSMSSandboxAccountStatusCommandOutput, GetSMSSandboxAccountStatusCommand } from "@aws-sdk/client-sns";
import { GetSubscriptionAttributesCommandInput, GetSubscriptionAttributesCommandOutput, GetSubscriptionAttributesCommand } from "@aws-sdk/client-sns";
import { GetTopicAttributesCommandInput, GetTopicAttributesCommandOutput, GetTopicAttributesCommand } from "@aws-sdk/client-sns";
import { ListEndpointsByPlatformApplicationCommandInput, ListEndpointsByPlatformApplicationCommandOutput, ListEndpointsByPlatformApplicationCommand } from "@aws-sdk/client-sns";
import { ListOriginationNumbersCommandInput, ListOriginationNumbersCommandOutput, ListOriginationNumbersCommand } from "@aws-sdk/client-sns";
import { ListPhoneNumbersOptedOutCommandInput, ListPhoneNumbersOptedOutCommandOutput, ListPhoneNumbersOptedOutCommand } from "@aws-sdk/client-sns";
import { ListPlatformApplicationsCommandInput, ListPlatformApplicationsCommandOutput, ListPlatformApplicationsCommand } from "@aws-sdk/client-sns";
import { ListSMSSandboxPhoneNumbersCommandInput, ListSMSSandboxPhoneNumbersCommandOutput, ListSMSSandboxPhoneNumbersCommand } from "@aws-sdk/client-sns";
import { ListSubscriptionsCommandInput, ListSubscriptionsCommandOutput, ListSubscriptionsCommand } from "@aws-sdk/client-sns";
import { ListSubscriptionsByTopicCommandInput, ListSubscriptionsByTopicCommandOutput, ListSubscriptionsByTopicCommand } from "@aws-sdk/client-sns";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, ListTagsForResourceCommand } from "@aws-sdk/client-sns";
import { ListTopicsCommandInput, ListTopicsCommandOutput, ListTopicsCommand } from "@aws-sdk/client-sns";
import { OptInPhoneNumberCommandInput, OptInPhoneNumberCommandOutput, OptInPhoneNumberCommand } from "@aws-sdk/client-sns";
import { PublishCommandInput, PublishCommandOutput, PublishCommand } from "@aws-sdk/client-sns";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput, RemovePermissionCommand } from "@aws-sdk/client-sns";
import { SetEndpointAttributesCommandInput, SetEndpointAttributesCommandOutput, SetEndpointAttributesCommand } from "@aws-sdk/client-sns";
import { SetPlatformApplicationAttributesCommandInput, SetPlatformApplicationAttributesCommandOutput, SetPlatformApplicationAttributesCommand } from "@aws-sdk/client-sns";
import { SetSMSAttributesCommandInput, SetSMSAttributesCommandOutput, SetSMSAttributesCommand } from "@aws-sdk/client-sns";
import { SetSubscriptionAttributesCommandInput, SetSubscriptionAttributesCommandOutput, SetSubscriptionAttributesCommand } from "@aws-sdk/client-sns";
import { SetTopicAttributesCommandInput, SetTopicAttributesCommandOutput, SetTopicAttributesCommand } from "@aws-sdk/client-sns";
import { SubscribeCommandInput, SubscribeCommandOutput, SubscribeCommand } from "@aws-sdk/client-sns";
import { TagResourceCommandInput, TagResourceCommandOutput, TagResourceCommand } from "@aws-sdk/client-sns";
import { UnsubscribeCommandInput, UnsubscribeCommandOutput, UnsubscribeCommand } from "@aws-sdk/client-sns";
import { UntagResourceCommandInput, UntagResourceCommandOutput, UntagResourceCommand } from "@aws-sdk/client-sns";
import { VerifySMSSandboxPhoneNumberCommandInput, VerifySMSSandboxPhoneNumberCommandOutput, VerifySMSSandboxPhoneNumberCommand } from "@aws-sdk/client-sns";


export namespace ASL {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:addPermission'*/
    export const nativeSNSAddPermission = (input: AddPermissionCommandInput): Promise<AddPermissionCommandOutput> => {
        const sns = new SNSClient({});
        const command = new AddPermissionCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:checkIfPhoneNumberIsOptedOut'*/
    export const nativeSNSCheckIfPhoneNumberIsOptedOut = (input: CheckIfPhoneNumberIsOptedOutCommandInput): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput> => {
        const sns = new SNSClient({});
        const command = new CheckIfPhoneNumberIsOptedOutCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:confirmSubscription'*/
    export const nativeSNSConfirmSubscription = (input: ConfirmSubscriptionCommandInput): Promise<ConfirmSubscriptionCommandOutput> => {
        const sns = new SNSClient({});
        const command = new ConfirmSubscriptionCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:createPlatformApplication'*/
    export const nativeSNSCreatePlatformApplication = (input: CreatePlatformApplicationCommandInput): Promise<CreatePlatformApplicationCommandOutput> => {
        const sns = new SNSClient({});
        const command = new CreatePlatformApplicationCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:createPlatformEndpoint'*/
    export const nativeSNSCreatePlatformEndpoint = (input: CreatePlatformEndpointCommandInput): Promise<CreatePlatformEndpointCommandOutput> => {
        const sns = new SNSClient({});
        const command = new CreatePlatformEndpointCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:createSMSSandboxPhoneNumber'*/
    export const nativeSNSCreateSMSSandboxPhoneNumber = (input: CreateSMSSandboxPhoneNumberCommandInput): Promise<CreateSMSSandboxPhoneNumberCommandOutput> => {
        const sns = new SNSClient({});
        const command = new CreateSMSSandboxPhoneNumberCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:createTopic'*/
    export const nativeSNSCreateTopic = (input: CreateTopicCommandInput): Promise<CreateTopicCommandOutput> => {
        const sns = new SNSClient({});
        const command = new CreateTopicCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:deleteEndpoint'*/
    export const nativeSNSDeleteEndpoint = (input: DeleteEndpointCommandInput): Promise<DeleteEndpointCommandOutput> => {
        const sns = new SNSClient({});
        const command = new DeleteEndpointCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:deletePlatformApplication'*/
    export const nativeSNSDeletePlatformApplication = (input: DeletePlatformApplicationCommandInput): Promise<DeletePlatformApplicationCommandOutput> => {
        const sns = new SNSClient({});
        const command = new DeletePlatformApplicationCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:deleteSMSSandboxPhoneNumber'*/
    export const nativeSNSDeleteSMSSandboxPhoneNumber = (input: DeleteSMSSandboxPhoneNumberCommandInput): Promise<DeleteSMSSandboxPhoneNumberCommandOutput> => {
        const sns = new SNSClient({});
        const command = new DeleteSMSSandboxPhoneNumberCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:deleteTopic'*/
    export const nativeSNSDeleteTopic = (input: DeleteTopicCommandInput): Promise<DeleteTopicCommandOutput> => {
        const sns = new SNSClient({});
        const command = new DeleteTopicCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getEndpointAttributes'*/
    export const nativeSNSGetEndpointAttributes = (input: GetEndpointAttributesCommandInput): Promise<GetEndpointAttributesCommandOutput> => {
        const sns = new SNSClient({});
        const command = new GetEndpointAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getPlatformApplicationAttributes'*/
    export const nativeSNSGetPlatformApplicationAttributes = (input: GetPlatformApplicationAttributesCommandInput): Promise<GetPlatformApplicationAttributesCommandOutput> => {
        const sns = new SNSClient({});
        const command = new GetPlatformApplicationAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getSMSAttributes'*/
    export const nativeSNSGetSMSAttributes = (input: GetSMSAttributesCommandInput): Promise<GetSMSAttributesCommandOutput> => {
        const sns = new SNSClient({});
        const command = new GetSMSAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getSMSSandboxAccountStatus'*/
    export const nativeSNSGetSMSSandboxAccountStatus = (input: GetSMSSandboxAccountStatusCommandInput): Promise<GetSMSSandboxAccountStatusCommandOutput> => {
        const sns = new SNSClient({});
        const command = new GetSMSSandboxAccountStatusCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getSubscriptionAttributes'*/
    export const nativeSNSGetSubscriptionAttributes = (input: GetSubscriptionAttributesCommandInput): Promise<GetSubscriptionAttributesCommandOutput> => {
        const sns = new SNSClient({});
        const command = new GetSubscriptionAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getTopicAttributes'*/
    export const nativeSNSGetTopicAttributes = (input: GetTopicAttributesCommandInput): Promise<GetTopicAttributesCommandOutput> => {
        const sns = new SNSClient({});
        const command = new GetTopicAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listEndpointsByPlatformApplication'*/
    export const nativeSNSListEndpointsByPlatformApplication = (input: ListEndpointsByPlatformApplicationCommandInput): Promise<ListEndpointsByPlatformApplicationCommandOutput> => {
        const sns = new SNSClient({});
        const command = new ListEndpointsByPlatformApplicationCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listOriginationNumbers'*/
    export const nativeSNSListOriginationNumbers = (input: ListOriginationNumbersCommandInput): Promise<ListOriginationNumbersCommandOutput> => {
        const sns = new SNSClient({});
        const command = new ListOriginationNumbersCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listPhoneNumbersOptedOut'*/
    export const nativeSNSListPhoneNumbersOptedOut = (input: ListPhoneNumbersOptedOutCommandInput): Promise<ListPhoneNumbersOptedOutCommandOutput> => {
        const sns = new SNSClient({});
        const command = new ListPhoneNumbersOptedOutCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listPlatformApplications'*/
    export const nativeSNSListPlatformApplications = (input: ListPlatformApplicationsCommandInput): Promise<ListPlatformApplicationsCommandOutput> => {
        const sns = new SNSClient({});
        const command = new ListPlatformApplicationsCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listSMSSandboxPhoneNumbers'*/
    export const nativeSNSListSMSSandboxPhoneNumbers = (input: ListSMSSandboxPhoneNumbersCommandInput): Promise<ListSMSSandboxPhoneNumbersCommandOutput> => {
        const sns = new SNSClient({});
        const command = new ListSMSSandboxPhoneNumbersCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listSubscriptions'*/
    export const nativeSNSListSubscriptions = (input: ListSubscriptionsCommandInput): Promise<ListSubscriptionsCommandOutput> => {
        const sns = new SNSClient({});
        const command = new ListSubscriptionsCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listSubscriptionsByTopic'*/
    export const nativeSNSListSubscriptionsByTopic = (input: ListSubscriptionsByTopicCommandInput): Promise<ListSubscriptionsByTopicCommandOutput> => {
        const sns = new SNSClient({});
        const command = new ListSubscriptionsByTopicCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listTagsForResource'*/
    export const nativeSNSListTagsForResource = (input: ListTagsForResourceCommandInput): Promise<ListTagsForResourceCommandOutput> => {
        const sns = new SNSClient({});
        const command = new ListTagsForResourceCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listTopics'*/
    export const nativeSNSListTopics = (input: ListTopicsCommandInput): Promise<ListTopicsCommandOutput> => {
        const sns = new SNSClient({});
        const command = new ListTopicsCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:optInPhoneNumber'*/
    export const nativeSNSOptInPhoneNumber = (input: OptInPhoneNumberCommandInput): Promise<OptInPhoneNumberCommandOutput> => {
        const sns = new SNSClient({});
        const command = new OptInPhoneNumberCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:publish'*/
    export const nativeSNSPublish = (input: PublishCommandInput): Promise<PublishCommandOutput> => {
        const sns = new SNSClient({});
        const command = new PublishCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:removePermission'*/
    export const nativeSNSRemovePermission = (input: RemovePermissionCommandInput): Promise<RemovePermissionCommandOutput> => {
        const sns = new SNSClient({});
        const command = new RemovePermissionCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setEndpointAttributes'*/
    export const nativeSNSSetEndpointAttributes = (input: SetEndpointAttributesCommandInput): Promise<SetEndpointAttributesCommandOutput> => {
        const sns = new SNSClient({});
        const command = new SetEndpointAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setPlatformApplicationAttributes'*/
    export const nativeSNSSetPlatformApplicationAttributes = (input: SetPlatformApplicationAttributesCommandInput): Promise<SetPlatformApplicationAttributesCommandOutput> => {
        const sns = new SNSClient({});
        const command = new SetPlatformApplicationAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setSMSAttributes'*/
    export const nativeSNSSetSMSAttributes = (input: SetSMSAttributesCommandInput): Promise<SetSMSAttributesCommandOutput> => {
        const sns = new SNSClient({});
        const command = new SetSMSAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setSubscriptionAttributes'*/
    export const nativeSNSSetSubscriptionAttributes = (input: SetSubscriptionAttributesCommandInput): Promise<SetSubscriptionAttributesCommandOutput> => {
        const sns = new SNSClient({});
        const command = new SetSubscriptionAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setTopicAttributes'*/
    export const nativeSNSSetTopicAttributes = (input: SetTopicAttributesCommandInput): Promise<SetTopicAttributesCommandOutput> => {
        const sns = new SNSClient({});
        const command = new SetTopicAttributesCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:subscribe'*/
    export const nativeSNSSubscribe = (input: SubscribeCommandInput): Promise<SubscribeCommandOutput> => {
        const sns = new SNSClient({});
        const command = new SubscribeCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:tagResource'*/
    export const nativeSNSTagResource = (input: TagResourceCommandInput): Promise<TagResourceCommandOutput> => {
        const sns = new SNSClient({});
        const command = new TagResourceCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:unsubscribe'*/
    export const nativeSNSUnsubscribe = (input: UnsubscribeCommandInput): Promise<UnsubscribeCommandOutput> => {
        const sns = new SNSClient({});
        const command = new UnsubscribeCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:untagResource'*/
    export const nativeSNSUntagResource = (input: UntagResourceCommandInput): Promise<UntagResourceCommandOutput> => {
        const sns = new SNSClient({});
        const command = new UntagResourceCommand(input);
        return sns.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:verifySMSSandboxPhoneNumber'*/
    export const nativeSNSVerifySMSSandboxPhoneNumber = (input: VerifySMSSandboxPhoneNumberCommandInput): Promise<VerifySMSSandboxPhoneNumberCommandOutput> => {
        const sns = new SNSClient({});
        const command = new VerifySMSSandboxPhoneNumberCommand(input);
        return sns.send(command);
    };
}

