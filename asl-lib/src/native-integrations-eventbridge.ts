import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { ActivateEventSourceCommandInput, ActivateEventSourceCommandOutput, ActivateEventSourceCommand } from "@aws-sdk/client-eventbridge";
import { CancelReplayCommandInput, CancelReplayCommandOutput, CancelReplayCommand } from "@aws-sdk/client-eventbridge";
import { CreateApiDestinationCommandInput, CreateApiDestinationCommandOutput, CreateApiDestinationCommand } from "@aws-sdk/client-eventbridge";
import { CreateArchiveCommandInput, CreateArchiveCommandOutput, CreateArchiveCommand } from "@aws-sdk/client-eventbridge";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput, CreateConnectionCommand } from "@aws-sdk/client-eventbridge";
import { CreateEventBusCommandInput, CreateEventBusCommandOutput, CreateEventBusCommand } from "@aws-sdk/client-eventbridge";
import { CreatePartnerEventSourceCommandInput, CreatePartnerEventSourceCommandOutput, CreatePartnerEventSourceCommand } from "@aws-sdk/client-eventbridge";
import { DeactivateEventSourceCommandInput, DeactivateEventSourceCommandOutput, DeactivateEventSourceCommand } from "@aws-sdk/client-eventbridge";
import { DeauthorizeConnectionCommandInput, DeauthorizeConnectionCommandOutput, DeauthorizeConnectionCommand } from "@aws-sdk/client-eventbridge";
import { DeleteApiDestinationCommandInput, DeleteApiDestinationCommandOutput, DeleteApiDestinationCommand } from "@aws-sdk/client-eventbridge";
import { DeleteArchiveCommandInput, DeleteArchiveCommandOutput, DeleteArchiveCommand } from "@aws-sdk/client-eventbridge";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput, DeleteConnectionCommand } from "@aws-sdk/client-eventbridge";
import { DeleteEventBusCommandInput, DeleteEventBusCommandOutput, DeleteEventBusCommand } from "@aws-sdk/client-eventbridge";
import { DeletePartnerEventSourceCommandInput, DeletePartnerEventSourceCommandOutput, DeletePartnerEventSourceCommand } from "@aws-sdk/client-eventbridge";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput, DeleteRuleCommand } from "@aws-sdk/client-eventbridge";
import { DescribeApiDestinationCommandInput, DescribeApiDestinationCommandOutput, DescribeApiDestinationCommand } from "@aws-sdk/client-eventbridge";
import { DescribeArchiveCommandInput, DescribeArchiveCommandOutput, DescribeArchiveCommand } from "@aws-sdk/client-eventbridge";
import { DescribeConnectionCommandInput, DescribeConnectionCommandOutput, DescribeConnectionCommand } from "@aws-sdk/client-eventbridge";
import { DescribeEventBusCommandInput, DescribeEventBusCommandOutput, DescribeEventBusCommand } from "@aws-sdk/client-eventbridge";
import { DescribeEventSourceCommandInput, DescribeEventSourceCommandOutput, DescribeEventSourceCommand } from "@aws-sdk/client-eventbridge";
import { DescribePartnerEventSourceCommandInput, DescribePartnerEventSourceCommandOutput, DescribePartnerEventSourceCommand } from "@aws-sdk/client-eventbridge";
import { DescribeReplayCommandInput, DescribeReplayCommandOutput, DescribeReplayCommand } from "@aws-sdk/client-eventbridge";
import { DescribeRuleCommandInput, DescribeRuleCommandOutput, DescribeRuleCommand } from "@aws-sdk/client-eventbridge";
import { DisableRuleCommandInput, DisableRuleCommandOutput, DisableRuleCommand } from "@aws-sdk/client-eventbridge";
import { EnableRuleCommandInput, EnableRuleCommandOutput, EnableRuleCommand } from "@aws-sdk/client-eventbridge";
import { ListApiDestinationsCommandInput, ListApiDestinationsCommandOutput, ListApiDestinationsCommand } from "@aws-sdk/client-eventbridge";
import { ListArchivesCommandInput, ListArchivesCommandOutput, ListArchivesCommand } from "@aws-sdk/client-eventbridge";
import { ListConnectionsCommandInput, ListConnectionsCommandOutput, ListConnectionsCommand } from "@aws-sdk/client-eventbridge";
import { ListEventBusesCommandInput, ListEventBusesCommandOutput, ListEventBusesCommand } from "@aws-sdk/client-eventbridge";
import { ListEventSourcesCommandInput, ListEventSourcesCommandOutput, ListEventSourcesCommand } from "@aws-sdk/client-eventbridge";
import { ListPartnerEventSourceAccountsCommandInput, ListPartnerEventSourceAccountsCommandOutput, ListPartnerEventSourceAccountsCommand } from "@aws-sdk/client-eventbridge";
import { ListPartnerEventSourcesCommandInput, ListPartnerEventSourcesCommandOutput, ListPartnerEventSourcesCommand } from "@aws-sdk/client-eventbridge";
import { ListReplaysCommandInput, ListReplaysCommandOutput, ListReplaysCommand } from "@aws-sdk/client-eventbridge";
import { ListRuleNamesByTargetCommandInput, ListRuleNamesByTargetCommandOutput, ListRuleNamesByTargetCommand } from "@aws-sdk/client-eventbridge";
import { ListRulesCommandInput, ListRulesCommandOutput, ListRulesCommand } from "@aws-sdk/client-eventbridge";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, ListTagsForResourceCommand } from "@aws-sdk/client-eventbridge";
import { ListTargetsByRuleCommandInput, ListTargetsByRuleCommandOutput, ListTargetsByRuleCommand } from "@aws-sdk/client-eventbridge";
import { PutEventsCommandInput, PutEventsCommandOutput, PutEventsCommand } from "@aws-sdk/client-eventbridge";
import { PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput, PutPartnerEventsCommand } from "@aws-sdk/client-eventbridge";
import { PutPermissionCommandInput, PutPermissionCommandOutput, PutPermissionCommand } from "@aws-sdk/client-eventbridge";
import { PutRuleCommandInput, PutRuleCommandOutput, PutRuleCommand } from "@aws-sdk/client-eventbridge";
import { PutTargetsCommandInput, PutTargetsCommandOutput, PutTargetsCommand } from "@aws-sdk/client-eventbridge";
import { RemovePermissionCommandInput, RemovePermissionCommandOutput, RemovePermissionCommand } from "@aws-sdk/client-eventbridge";
import { RemoveTargetsCommandInput, RemoveTargetsCommandOutput, RemoveTargetsCommand } from "@aws-sdk/client-eventbridge";
import { StartReplayCommandInput, StartReplayCommandOutput, StartReplayCommand } from "@aws-sdk/client-eventbridge";
import { TagResourceCommandInput, TagResourceCommandOutput, TagResourceCommand } from "@aws-sdk/client-eventbridge";
import { TestEventPatternCommandInput, TestEventPatternCommandOutput, TestEventPatternCommand } from "@aws-sdk/client-eventbridge";
import { UntagResourceCommandInput, UntagResourceCommandOutput, UntagResourceCommand } from "@aws-sdk/client-eventbridge";
import { UpdateApiDestinationCommandInput, UpdateApiDestinationCommandOutput, UpdateApiDestinationCommand } from "@aws-sdk/client-eventbridge";
import { UpdateArchiveCommandInput, UpdateArchiveCommandOutput, UpdateArchiveCommand } from "@aws-sdk/client-eventbridge";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput, UpdateConnectionCommand } from "@aws-sdk/client-eventbridge";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:activateEventSource'*/
export const nativeEventBridgeActivateEventSource = (input: SdkIntegrationTask<ActivateEventSourceCommandInput>): Promise<ActivateEventSourceCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ActivateEventSourceCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:cancelReplay'*/
export const nativeEventBridgeCancelReplay = (input: SdkIntegrationTask<CancelReplayCommandInput>): Promise<CancelReplayCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new CancelReplayCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createApiDestination'*/
export const nativeEventBridgeCreateApiDestination = (input: SdkIntegrationTask<CreateApiDestinationCommandInput>): Promise<CreateApiDestinationCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new CreateApiDestinationCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createArchive'*/
export const nativeEventBridgeCreateArchive = (input: SdkIntegrationTask<CreateArchiveCommandInput>): Promise<CreateArchiveCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new CreateArchiveCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createConnection'*/
export const nativeEventBridgeCreateConnection = (input: SdkIntegrationTask<CreateConnectionCommandInput>): Promise<CreateConnectionCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new CreateConnectionCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createEventBus'*/
export const nativeEventBridgeCreateEventBus = (input: SdkIntegrationTask<CreateEventBusCommandInput>): Promise<CreateEventBusCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new CreateEventBusCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createPartnerEventSource'*/
export const nativeEventBridgeCreatePartnerEventSource = (input: SdkIntegrationTask<CreatePartnerEventSourceCommandInput>): Promise<CreatePartnerEventSourceCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new CreatePartnerEventSourceCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deactivateEventSource'*/
export const nativeEventBridgeDeactivateEventSource = (input: SdkIntegrationTask<DeactivateEventSourceCommandInput>): Promise<DeactivateEventSourceCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DeactivateEventSourceCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deauthorizeConnection'*/
export const nativeEventBridgeDeauthorizeConnection = (input: SdkIntegrationTask<DeauthorizeConnectionCommandInput>): Promise<DeauthorizeConnectionCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DeauthorizeConnectionCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteApiDestination'*/
export const nativeEventBridgeDeleteApiDestination = (input: SdkIntegrationTask<DeleteApiDestinationCommandInput>): Promise<DeleteApiDestinationCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DeleteApiDestinationCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteArchive'*/
export const nativeEventBridgeDeleteArchive = (input: SdkIntegrationTask<DeleteArchiveCommandInput>): Promise<DeleteArchiveCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DeleteArchiveCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteConnection'*/
export const nativeEventBridgeDeleteConnection = (input: SdkIntegrationTask<DeleteConnectionCommandInput>): Promise<DeleteConnectionCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DeleteConnectionCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteEventBus'*/
export const nativeEventBridgeDeleteEventBus = (input: SdkIntegrationTask<DeleteEventBusCommandInput>): Promise<DeleteEventBusCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DeleteEventBusCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deletePartnerEventSource'*/
export const nativeEventBridgeDeletePartnerEventSource = (input: SdkIntegrationTask<DeletePartnerEventSourceCommandInput>): Promise<DeletePartnerEventSourceCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DeletePartnerEventSourceCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteRule'*/
export const nativeEventBridgeDeleteRule = (input: SdkIntegrationTask<DeleteRuleCommandInput>): Promise<DeleteRuleCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DeleteRuleCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeApiDestination'*/
export const nativeEventBridgeDescribeApiDestination = (input: SdkIntegrationTask<DescribeApiDestinationCommandInput>): Promise<DescribeApiDestinationCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DescribeApiDestinationCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeArchive'*/
export const nativeEventBridgeDescribeArchive = (input: SdkIntegrationTask<DescribeArchiveCommandInput>): Promise<DescribeArchiveCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DescribeArchiveCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeConnection'*/
export const nativeEventBridgeDescribeConnection = (input: SdkIntegrationTask<DescribeConnectionCommandInput>): Promise<DescribeConnectionCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DescribeConnectionCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeEventBus'*/
export const nativeEventBridgeDescribeEventBus = (input: SdkIntegrationTask<DescribeEventBusCommandInput>): Promise<DescribeEventBusCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DescribeEventBusCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeEventSource'*/
export const nativeEventBridgeDescribeEventSource = (input: SdkIntegrationTask<DescribeEventSourceCommandInput>): Promise<DescribeEventSourceCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DescribeEventSourceCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describePartnerEventSource'*/
export const nativeEventBridgeDescribePartnerEventSource = (input: SdkIntegrationTask<DescribePartnerEventSourceCommandInput>): Promise<DescribePartnerEventSourceCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DescribePartnerEventSourceCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeReplay'*/
export const nativeEventBridgeDescribeReplay = (input: SdkIntegrationTask<DescribeReplayCommandInput>): Promise<DescribeReplayCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DescribeReplayCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeRule'*/
export const nativeEventBridgeDescribeRule = (input: SdkIntegrationTask<DescribeRuleCommandInput>): Promise<DescribeRuleCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DescribeRuleCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:disableRule'*/
export const nativeEventBridgeDisableRule = (input: SdkIntegrationTask<DisableRuleCommandInput>): Promise<DisableRuleCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new DisableRuleCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:enableRule'*/
export const nativeEventBridgeEnableRule = (input: SdkIntegrationTask<EnableRuleCommandInput>): Promise<EnableRuleCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new EnableRuleCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listApiDestinations'*/
export const nativeEventBridgeListApiDestinations = (input: SdkIntegrationTask<ListApiDestinationsCommandInput>): Promise<ListApiDestinationsCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ListApiDestinationsCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listArchives'*/
export const nativeEventBridgeListArchives = (input: SdkIntegrationTask<ListArchivesCommandInput>): Promise<ListArchivesCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ListArchivesCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listConnections'*/
export const nativeEventBridgeListConnections = (input: SdkIntegrationTask<ListConnectionsCommandInput>): Promise<ListConnectionsCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ListConnectionsCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listEventBuses'*/
export const nativeEventBridgeListEventBuses = (input: SdkIntegrationTask<ListEventBusesCommandInput>): Promise<ListEventBusesCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ListEventBusesCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listEventSources'*/
export const nativeEventBridgeListEventSources = (input: SdkIntegrationTask<ListEventSourcesCommandInput>): Promise<ListEventSourcesCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ListEventSourcesCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listPartnerEventSourceAccounts'*/
export const nativeEventBridgeListPartnerEventSourceAccounts = (input: SdkIntegrationTask<ListPartnerEventSourceAccountsCommandInput>): Promise<ListPartnerEventSourceAccountsCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ListPartnerEventSourceAccountsCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listPartnerEventSources'*/
export const nativeEventBridgeListPartnerEventSources = (input: SdkIntegrationTask<ListPartnerEventSourcesCommandInput>): Promise<ListPartnerEventSourcesCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ListPartnerEventSourcesCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listReplays'*/
export const nativeEventBridgeListReplays = (input: SdkIntegrationTask<ListReplaysCommandInput>): Promise<ListReplaysCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ListReplaysCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listRuleNamesByTarget'*/
export const nativeEventBridgeListRuleNamesByTarget = (input: SdkIntegrationTask<ListRuleNamesByTargetCommandInput>): Promise<ListRuleNamesByTargetCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ListRuleNamesByTargetCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listRules'*/
export const nativeEventBridgeListRules = (input: SdkIntegrationTask<ListRulesCommandInput>): Promise<ListRulesCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ListRulesCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listTagsForResource'*/
export const nativeEventBridgeListTagsForResource = (input: SdkIntegrationTask<ListTagsForResourceCommandInput>): Promise<ListTagsForResourceCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ListTagsForResourceCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listTargetsByRule'*/
export const nativeEventBridgeListTargetsByRule = (input: SdkIntegrationTask<ListTargetsByRuleCommandInput>): Promise<ListTargetsByRuleCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new ListTargetsByRuleCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putEvents'*/
export const nativeEventBridgePutEvents = (input: SdkIntegrationTask<PutEventsCommandInput>): Promise<PutEventsCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new PutEventsCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putPartnerEvents'*/
export const nativeEventBridgePutPartnerEvents = (input: SdkIntegrationTask<PutPartnerEventsCommandInput>): Promise<PutPartnerEventsCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new PutPartnerEventsCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putPermission'*/
export const nativeEventBridgePutPermission = (input: SdkIntegrationTask<PutPermissionCommandInput>): Promise<PutPermissionCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new PutPermissionCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putRule'*/
export const nativeEventBridgePutRule = (input: SdkIntegrationTask<PutRuleCommandInput>): Promise<PutRuleCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new PutRuleCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putTargets'*/
export const nativeEventBridgePutTargets = (input: SdkIntegrationTask<PutTargetsCommandInput>): Promise<PutTargetsCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new PutTargetsCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:removePermission'*/
export const nativeEventBridgeRemovePermission = (input: SdkIntegrationTask<RemovePermissionCommandInput>): Promise<RemovePermissionCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new RemovePermissionCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:removeTargets'*/
export const nativeEventBridgeRemoveTargets = (input: SdkIntegrationTask<RemoveTargetsCommandInput>): Promise<RemoveTargetsCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new RemoveTargetsCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:startReplay'*/
export const nativeEventBridgeStartReplay = (input: SdkIntegrationTask<StartReplayCommandInput>): Promise<StartReplayCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new StartReplayCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:tagResource'*/
export const nativeEventBridgeTagResource = (input: SdkIntegrationTask<TagResourceCommandInput>): Promise<TagResourceCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new TagResourceCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:testEventPattern'*/
export const nativeEventBridgeTestEventPattern = (input: SdkIntegrationTask<TestEventPatternCommandInput>): Promise<TestEventPatternCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new TestEventPatternCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:untagResource'*/
export const nativeEventBridgeUntagResource = (input: SdkIntegrationTask<UntagResourceCommandInput>): Promise<UntagResourceCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new UntagResourceCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:updateApiDestination'*/
export const nativeEventBridgeUpdateApiDestination = (input: SdkIntegrationTask<UpdateApiDestinationCommandInput>): Promise<UpdateApiDestinationCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new UpdateApiDestinationCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:updateArchive'*/
export const nativeEventBridgeUpdateArchive = (input: SdkIntegrationTask<UpdateArchiveCommandInput>): Promise<UpdateArchiveCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new UpdateArchiveCommand(input.parameters);
    return eventbridge.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:updateConnection'*/
export const nativeEventBridgeUpdateConnection = (input: SdkIntegrationTask<UpdateConnectionCommandInput>): Promise<UpdateConnectionCommandOutput> => {
    const eventbridge = new EventBridgeClient(clientConfig);
    const command = new UpdateConnectionCommand(input.parameters);
    return eventbridge.send(command);
};

