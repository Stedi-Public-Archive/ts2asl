import { SNSClient } from "@aws-sdk/client-sns";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
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


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:addPermission'*/
export const sdkSNSAddPermission = (input: SdkIntegrationTask<AddPermissionCommandInput>): Promise<AddPermissionCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new AddPermissionCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:checkIfPhoneNumberIsOptedOut'*/
export const sdkSNSCheckIfPhoneNumberIsOptedOut = (input: SdkIntegrationTask<CheckIfPhoneNumberIsOptedOutCommandInput>): Promise<CheckIfPhoneNumberIsOptedOutCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new CheckIfPhoneNumberIsOptedOutCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:confirmSubscription'*/
export const sdkSNSConfirmSubscription = (input: SdkIntegrationTask<ConfirmSubscriptionCommandInput>): Promise<ConfirmSubscriptionCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new ConfirmSubscriptionCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:createPlatformApplication'*/
export const sdkSNSCreatePlatformApplication = (input: SdkIntegrationTask<CreatePlatformApplicationCommandInput>): Promise<CreatePlatformApplicationCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new CreatePlatformApplicationCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:createPlatformEndpoint'*/
export const sdkSNSCreatePlatformEndpoint = (input: SdkIntegrationTask<CreatePlatformEndpointCommandInput>): Promise<CreatePlatformEndpointCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new CreatePlatformEndpointCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:createSMSSandboxPhoneNumber'*/
export const sdkSNSCreateSMSSandboxPhoneNumber = (input: SdkIntegrationTask<CreateSMSSandboxPhoneNumberCommandInput>): Promise<CreateSMSSandboxPhoneNumberCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new CreateSMSSandboxPhoneNumberCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:createTopic'*/
export const sdkSNSCreateTopic = (input: SdkIntegrationTask<CreateTopicCommandInput>): Promise<CreateTopicCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new CreateTopicCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:deleteEndpoint'*/
export const sdkSNSDeleteEndpoint = (input: SdkIntegrationTask<DeleteEndpointCommandInput>): Promise<DeleteEndpointCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new DeleteEndpointCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:deletePlatformApplication'*/
export const sdkSNSDeletePlatformApplication = (input: SdkIntegrationTask<DeletePlatformApplicationCommandInput>): Promise<DeletePlatformApplicationCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new DeletePlatformApplicationCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:deleteSMSSandboxPhoneNumber'*/
export const sdkSNSDeleteSMSSandboxPhoneNumber = (input: SdkIntegrationTask<DeleteSMSSandboxPhoneNumberCommandInput>): Promise<DeleteSMSSandboxPhoneNumberCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new DeleteSMSSandboxPhoneNumberCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:deleteTopic'*/
export const sdkSNSDeleteTopic = (input: SdkIntegrationTask<DeleteTopicCommandInput>): Promise<DeleteTopicCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new DeleteTopicCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getEndpointAttributes'*/
export const sdkSNSGetEndpointAttributes = (input: SdkIntegrationTask<GetEndpointAttributesCommandInput>): Promise<GetEndpointAttributesCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new GetEndpointAttributesCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getPlatformApplicationAttributes'*/
export const sdkSNSGetPlatformApplicationAttributes = (input: SdkIntegrationTask<GetPlatformApplicationAttributesCommandInput>): Promise<GetPlatformApplicationAttributesCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new GetPlatformApplicationAttributesCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getSMSAttributes'*/
export const sdkSNSGetSMSAttributes = (input: SdkIntegrationTask<GetSMSAttributesCommandInput>): Promise<GetSMSAttributesCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new GetSMSAttributesCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getSMSSandboxAccountStatus'*/
export const sdkSNSGetSMSSandboxAccountStatus = (input: SdkIntegrationTask<GetSMSSandboxAccountStatusCommandInput>): Promise<GetSMSSandboxAccountStatusCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new GetSMSSandboxAccountStatusCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getSubscriptionAttributes'*/
export const sdkSNSGetSubscriptionAttributes = (input: SdkIntegrationTask<GetSubscriptionAttributesCommandInput>): Promise<GetSubscriptionAttributesCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new GetSubscriptionAttributesCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:getTopicAttributes'*/
export const sdkSNSGetTopicAttributes = (input: SdkIntegrationTask<GetTopicAttributesCommandInput>): Promise<GetTopicAttributesCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new GetTopicAttributesCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listEndpointsByPlatformApplication'*/
export const sdkSNSListEndpointsByPlatformApplication = (input: SdkIntegrationTask<ListEndpointsByPlatformApplicationCommandInput>): Promise<ListEndpointsByPlatformApplicationCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new ListEndpointsByPlatformApplicationCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listOriginationNumbers'*/
export const sdkSNSListOriginationNumbers = (input: SdkIntegrationTask<ListOriginationNumbersCommandInput>): Promise<ListOriginationNumbersCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new ListOriginationNumbersCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listPhoneNumbersOptedOut'*/
export const sdkSNSListPhoneNumbersOptedOut = (input: SdkIntegrationTask<ListPhoneNumbersOptedOutCommandInput>): Promise<ListPhoneNumbersOptedOutCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new ListPhoneNumbersOptedOutCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listPlatformApplications'*/
export const sdkSNSListPlatformApplications = (input: SdkIntegrationTask<ListPlatformApplicationsCommandInput>): Promise<ListPlatformApplicationsCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new ListPlatformApplicationsCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listSMSSandboxPhoneNumbers'*/
export const sdkSNSListSMSSandboxPhoneNumbers = (input: SdkIntegrationTask<ListSMSSandboxPhoneNumbersCommandInput>): Promise<ListSMSSandboxPhoneNumbersCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new ListSMSSandboxPhoneNumbersCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listSubscriptions'*/
export const sdkSNSListSubscriptions = (input: SdkIntegrationTask<ListSubscriptionsCommandInput>): Promise<ListSubscriptionsCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new ListSubscriptionsCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listSubscriptionsByTopic'*/
export const sdkSNSListSubscriptionsByTopic = (input: SdkIntegrationTask<ListSubscriptionsByTopicCommandInput>): Promise<ListSubscriptionsByTopicCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new ListSubscriptionsByTopicCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listTagsForResource'*/
export const sdkSNSListTagsForResource = (input: SdkIntegrationTask<ListTagsForResourceCommandInput>): Promise<ListTagsForResourceCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new ListTagsForResourceCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:listTopics'*/
export const sdkSNSListTopics = (input: SdkIntegrationTask<ListTopicsCommandInput>): Promise<ListTopicsCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new ListTopicsCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:optInPhoneNumber'*/
export const sdkSNSOptInPhoneNumber = (input: SdkIntegrationTask<OptInPhoneNumberCommandInput>): Promise<OptInPhoneNumberCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new OptInPhoneNumberCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:publish'*/
export const sdkSNSPublish = (input: SdkIntegrationTask<PublishCommandInput>): Promise<PublishCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new PublishCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:removePermission'*/
export const sdkSNSRemovePermission = (input: SdkIntegrationTask<RemovePermissionCommandInput>): Promise<RemovePermissionCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new RemovePermissionCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setEndpointAttributes'*/
export const sdkSNSSetEndpointAttributes = (input: SdkIntegrationTask<SetEndpointAttributesCommandInput>): Promise<SetEndpointAttributesCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new SetEndpointAttributesCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setPlatformApplicationAttributes'*/
export const sdkSNSSetPlatformApplicationAttributes = (input: SdkIntegrationTask<SetPlatformApplicationAttributesCommandInput>): Promise<SetPlatformApplicationAttributesCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new SetPlatformApplicationAttributesCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setSMSAttributes'*/
export const sdkSNSSetSMSAttributes = (input: SdkIntegrationTask<SetSMSAttributesCommandInput>): Promise<SetSMSAttributesCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new SetSMSAttributesCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setSubscriptionAttributes'*/
export const sdkSNSSetSubscriptionAttributes = (input: SdkIntegrationTask<SetSubscriptionAttributesCommandInput>): Promise<SetSubscriptionAttributesCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new SetSubscriptionAttributesCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:setTopicAttributes'*/
export const sdkSNSSetTopicAttributes = (input: SdkIntegrationTask<SetTopicAttributesCommandInput>): Promise<SetTopicAttributesCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new SetTopicAttributesCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:subscribe'*/
export const sdkSNSSubscribe = (input: SdkIntegrationTask<SubscribeCommandInput>): Promise<SubscribeCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new SubscribeCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:tagResource'*/
export const sdkSNSTagResource = (input: SdkIntegrationTask<TagResourceCommandInput>): Promise<TagResourceCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new TagResourceCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:unsubscribe'*/
export const sdkSNSUnsubscribe = (input: SdkIntegrationTask<UnsubscribeCommandInput>): Promise<UnsubscribeCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new UnsubscribeCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:untagResource'*/
export const sdkSNSUntagResource = (input: SdkIntegrationTask<UntagResourceCommandInput>): Promise<UntagResourceCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new UntagResourceCommand(input.parameters);
    return sns.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sns:verifySMSSandboxPhoneNumber'*/
export const sdkSNSVerifySMSSandboxPhoneNumber = (input: SdkIntegrationTask<VerifySMSSandboxPhoneNumberCommandInput>): Promise<VerifySMSSandboxPhoneNumberCommandOutput> => {
    const sns = new SNSClient(clientConfig);
    const command = new VerifySMSSandboxPhoneNumberCommand(input.parameters);
    return sns.send(command);
};

