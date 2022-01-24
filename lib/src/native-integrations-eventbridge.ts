import { EventBridgeClient } from "@aws-sdk/client-eventbridge";
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


export namespace ASL {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:activateEventSource'*/
    export const nativeEventBridgeActivateEventSource = (input: ActivateEventSourceCommandInput): Promise<ActivateEventSourceCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ActivateEventSourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:cancelReplay'*/
    export const nativeEventBridgeCancelReplay = (input: CancelReplayCommandInput): Promise<CancelReplayCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new CancelReplayCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createApiDestination'*/
    export const nativeEventBridgeCreateApiDestination = (input: CreateApiDestinationCommandInput): Promise<CreateApiDestinationCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new CreateApiDestinationCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createArchive'*/
    export const nativeEventBridgeCreateArchive = (input: CreateArchiveCommandInput): Promise<CreateArchiveCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new CreateArchiveCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createConnection'*/
    export const nativeEventBridgeCreateConnection = (input: CreateConnectionCommandInput): Promise<CreateConnectionCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new CreateConnectionCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createEventBus'*/
    export const nativeEventBridgeCreateEventBus = (input: CreateEventBusCommandInput): Promise<CreateEventBusCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new CreateEventBusCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:createPartnerEventSource'*/
    export const nativeEventBridgeCreatePartnerEventSource = (input: CreatePartnerEventSourceCommandInput): Promise<CreatePartnerEventSourceCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new CreatePartnerEventSourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deactivateEventSource'*/
    export const nativeEventBridgeDeactivateEventSource = (input: DeactivateEventSourceCommandInput): Promise<DeactivateEventSourceCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DeactivateEventSourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deauthorizeConnection'*/
    export const nativeEventBridgeDeauthorizeConnection = (input: DeauthorizeConnectionCommandInput): Promise<DeauthorizeConnectionCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DeauthorizeConnectionCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteApiDestination'*/
    export const nativeEventBridgeDeleteApiDestination = (input: DeleteApiDestinationCommandInput): Promise<DeleteApiDestinationCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DeleteApiDestinationCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteArchive'*/
    export const nativeEventBridgeDeleteArchive = (input: DeleteArchiveCommandInput): Promise<DeleteArchiveCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DeleteArchiveCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteConnection'*/
    export const nativeEventBridgeDeleteConnection = (input: DeleteConnectionCommandInput): Promise<DeleteConnectionCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DeleteConnectionCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteEventBus'*/
    export const nativeEventBridgeDeleteEventBus = (input: DeleteEventBusCommandInput): Promise<DeleteEventBusCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DeleteEventBusCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deletePartnerEventSource'*/
    export const nativeEventBridgeDeletePartnerEventSource = (input: DeletePartnerEventSourceCommandInput): Promise<DeletePartnerEventSourceCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DeletePartnerEventSourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:deleteRule'*/
    export const nativeEventBridgeDeleteRule = (input: DeleteRuleCommandInput): Promise<DeleteRuleCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DeleteRuleCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeApiDestination'*/
    export const nativeEventBridgeDescribeApiDestination = (input: DescribeApiDestinationCommandInput): Promise<DescribeApiDestinationCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DescribeApiDestinationCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeArchive'*/
    export const nativeEventBridgeDescribeArchive = (input: DescribeArchiveCommandInput): Promise<DescribeArchiveCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DescribeArchiveCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeConnection'*/
    export const nativeEventBridgeDescribeConnection = (input: DescribeConnectionCommandInput): Promise<DescribeConnectionCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DescribeConnectionCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeEventBus'*/
    export const nativeEventBridgeDescribeEventBus = (input: DescribeEventBusCommandInput): Promise<DescribeEventBusCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DescribeEventBusCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeEventSource'*/
    export const nativeEventBridgeDescribeEventSource = (input: DescribeEventSourceCommandInput): Promise<DescribeEventSourceCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DescribeEventSourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describePartnerEventSource'*/
    export const nativeEventBridgeDescribePartnerEventSource = (input: DescribePartnerEventSourceCommandInput): Promise<DescribePartnerEventSourceCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DescribePartnerEventSourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeReplay'*/
    export const nativeEventBridgeDescribeReplay = (input: DescribeReplayCommandInput): Promise<DescribeReplayCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DescribeReplayCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:describeRule'*/
    export const nativeEventBridgeDescribeRule = (input: DescribeRuleCommandInput): Promise<DescribeRuleCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DescribeRuleCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:disableRule'*/
    export const nativeEventBridgeDisableRule = (input: DisableRuleCommandInput): Promise<DisableRuleCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new DisableRuleCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:enableRule'*/
    export const nativeEventBridgeEnableRule = (input: EnableRuleCommandInput): Promise<EnableRuleCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new EnableRuleCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listApiDestinations'*/
    export const nativeEventBridgeListApiDestinations = (input: ListApiDestinationsCommandInput): Promise<ListApiDestinationsCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ListApiDestinationsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listArchives'*/
    export const nativeEventBridgeListArchives = (input: ListArchivesCommandInput): Promise<ListArchivesCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ListArchivesCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listConnections'*/
    export const nativeEventBridgeListConnections = (input: ListConnectionsCommandInput): Promise<ListConnectionsCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ListConnectionsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listEventBuses'*/
    export const nativeEventBridgeListEventBuses = (input: ListEventBusesCommandInput): Promise<ListEventBusesCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ListEventBusesCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listEventSources'*/
    export const nativeEventBridgeListEventSources = (input: ListEventSourcesCommandInput): Promise<ListEventSourcesCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ListEventSourcesCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listPartnerEventSourceAccounts'*/
    export const nativeEventBridgeListPartnerEventSourceAccounts = (input: ListPartnerEventSourceAccountsCommandInput): Promise<ListPartnerEventSourceAccountsCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ListPartnerEventSourceAccountsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listPartnerEventSources'*/
    export const nativeEventBridgeListPartnerEventSources = (input: ListPartnerEventSourcesCommandInput): Promise<ListPartnerEventSourcesCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ListPartnerEventSourcesCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listReplays'*/
    export const nativeEventBridgeListReplays = (input: ListReplaysCommandInput): Promise<ListReplaysCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ListReplaysCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listRuleNamesByTarget'*/
    export const nativeEventBridgeListRuleNamesByTarget = (input: ListRuleNamesByTargetCommandInput): Promise<ListRuleNamesByTargetCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ListRuleNamesByTargetCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listRules'*/
    export const nativeEventBridgeListRules = (input: ListRulesCommandInput): Promise<ListRulesCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ListRulesCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listTagsForResource'*/
    export const nativeEventBridgeListTagsForResource = (input: ListTagsForResourceCommandInput): Promise<ListTagsForResourceCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ListTagsForResourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:listTargetsByRule'*/
    export const nativeEventBridgeListTargetsByRule = (input: ListTargetsByRuleCommandInput): Promise<ListTargetsByRuleCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new ListTargetsByRuleCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putEvents'*/
    export const nativeEventBridgePutEvents = (input: PutEventsCommandInput): Promise<PutEventsCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new PutEventsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putPartnerEvents'*/
    export const nativeEventBridgePutPartnerEvents = (input: PutPartnerEventsCommandInput): Promise<PutPartnerEventsCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new PutPartnerEventsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putPermission'*/
    export const nativeEventBridgePutPermission = (input: PutPermissionCommandInput): Promise<PutPermissionCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new PutPermissionCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putRule'*/
    export const nativeEventBridgePutRule = (input: PutRuleCommandInput): Promise<PutRuleCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new PutRuleCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:putTargets'*/
    export const nativeEventBridgePutTargets = (input: PutTargetsCommandInput): Promise<PutTargetsCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new PutTargetsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:removePermission'*/
    export const nativeEventBridgeRemovePermission = (input: RemovePermissionCommandInput): Promise<RemovePermissionCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new RemovePermissionCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:removeTargets'*/
    export const nativeEventBridgeRemoveTargets = (input: RemoveTargetsCommandInput): Promise<RemoveTargetsCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new RemoveTargetsCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:startReplay'*/
    export const nativeEventBridgeStartReplay = (input: StartReplayCommandInput): Promise<StartReplayCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new StartReplayCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:tagResource'*/
    export const nativeEventBridgeTagResource = (input: TagResourceCommandInput): Promise<TagResourceCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new TagResourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:testEventPattern'*/
    export const nativeEventBridgeTestEventPattern = (input: TestEventPatternCommandInput): Promise<TestEventPatternCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new TestEventPatternCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:untagResource'*/
    export const nativeEventBridgeUntagResource = (input: UntagResourceCommandInput): Promise<UntagResourceCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new UntagResourceCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:updateApiDestination'*/
    export const nativeEventBridgeUpdateApiDestination = (input: UpdateApiDestinationCommandInput): Promise<UpdateApiDestinationCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new UpdateApiDestinationCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:updateArchive'*/
    export const nativeEventBridgeUpdateArchive = (input: UpdateArchiveCommandInput): Promise<UpdateArchiveCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new UpdateArchiveCommand(input);
        return eventbridge.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:eventbridge:updateConnection'*/
    export const nativeEventBridgeUpdateConnection = (input: UpdateConnectionCommandInput): Promise<UpdateConnectionCommandOutput> => {
        const eventbridge = new EventBridgeClient({});
        const command = new UpdateConnectionCommand(input);
        return eventbridge.send(command);
    };
}

