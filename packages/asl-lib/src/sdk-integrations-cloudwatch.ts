import { CloudWatchClient } from "@aws-sdk/client-cloudwatch";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { DeleteAlarmsCommandInput, DeleteAlarmsCommandOutput, DeleteAlarmsCommand } from "@aws-sdk/client-cloudwatch";
import { DeleteAnomalyDetectorCommandInput, DeleteAnomalyDetectorCommandOutput, DeleteAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch";
import { DeleteDashboardsCommandInput, DeleteDashboardsCommandOutput, DeleteDashboardsCommand } from "@aws-sdk/client-cloudwatch";
import { DeleteInsightRulesCommandInput, DeleteInsightRulesCommandOutput, DeleteInsightRulesCommand } from "@aws-sdk/client-cloudwatch";
import { DeleteMetricStreamCommandInput, DeleteMetricStreamCommandOutput, DeleteMetricStreamCommand } from "@aws-sdk/client-cloudwatch";
import { DescribeAlarmHistoryCommandInput, DescribeAlarmHistoryCommandOutput, DescribeAlarmHistoryCommand } from "@aws-sdk/client-cloudwatch";
import { DescribeAlarmsCommandInput, DescribeAlarmsCommandOutput, DescribeAlarmsCommand } from "@aws-sdk/client-cloudwatch";
import { DescribeAlarmsForMetricCommandInput, DescribeAlarmsForMetricCommandOutput, DescribeAlarmsForMetricCommand } from "@aws-sdk/client-cloudwatch";
import { DescribeAnomalyDetectorsCommandInput, DescribeAnomalyDetectorsCommandOutput, DescribeAnomalyDetectorsCommand } from "@aws-sdk/client-cloudwatch";
import { DescribeInsightRulesCommandInput, DescribeInsightRulesCommandOutput, DescribeInsightRulesCommand } from "@aws-sdk/client-cloudwatch";
import { DisableAlarmActionsCommandInput, DisableAlarmActionsCommandOutput, DisableAlarmActionsCommand } from "@aws-sdk/client-cloudwatch";
import { DisableInsightRulesCommandInput, DisableInsightRulesCommandOutput, DisableInsightRulesCommand } from "@aws-sdk/client-cloudwatch";
import { EnableAlarmActionsCommandInput, EnableAlarmActionsCommandOutput, EnableAlarmActionsCommand } from "@aws-sdk/client-cloudwatch";
import { EnableInsightRulesCommandInput, EnableInsightRulesCommandOutput, EnableInsightRulesCommand } from "@aws-sdk/client-cloudwatch";
import { GetDashboardCommandInput, GetDashboardCommandOutput, GetDashboardCommand } from "@aws-sdk/client-cloudwatch";
import { GetInsightRuleReportCommandInput, GetInsightRuleReportCommandOutput, GetInsightRuleReportCommand } from "@aws-sdk/client-cloudwatch";
import { GetMetricDataCommandInput, GetMetricDataCommandOutput, GetMetricDataCommand } from "@aws-sdk/client-cloudwatch";
import { GetMetricStatisticsCommandInput, GetMetricStatisticsCommandOutput, GetMetricStatisticsCommand } from "@aws-sdk/client-cloudwatch";
import { GetMetricStreamCommandInput, GetMetricStreamCommandOutput, GetMetricStreamCommand } from "@aws-sdk/client-cloudwatch";
import { GetMetricWidgetImageCommandInput, GetMetricWidgetImageCommandOutput, GetMetricWidgetImageCommand } from "@aws-sdk/client-cloudwatch";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput, ListDashboardsCommand } from "@aws-sdk/client-cloudwatch";
import { ListMetricStreamsCommandInput, ListMetricStreamsCommandOutput, ListMetricStreamsCommand } from "@aws-sdk/client-cloudwatch";
import { ListMetricsCommandInput, ListMetricsCommandOutput, ListMetricsCommand } from "@aws-sdk/client-cloudwatch";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, ListTagsForResourceCommand } from "@aws-sdk/client-cloudwatch";
import { PutAnomalyDetectorCommandInput, PutAnomalyDetectorCommandOutput, PutAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch";
import { PutCompositeAlarmCommandInput, PutCompositeAlarmCommandOutput, PutCompositeAlarmCommand } from "@aws-sdk/client-cloudwatch";
import { PutDashboardCommandInput, PutDashboardCommandOutput, PutDashboardCommand } from "@aws-sdk/client-cloudwatch";
import { PutInsightRuleCommandInput, PutInsightRuleCommandOutput, PutInsightRuleCommand } from "@aws-sdk/client-cloudwatch";
import { PutMetricAlarmCommandInput, PutMetricAlarmCommandOutput, PutMetricAlarmCommand } from "@aws-sdk/client-cloudwatch";
import { PutMetricDataCommandInput, PutMetricDataCommandOutput, PutMetricDataCommand } from "@aws-sdk/client-cloudwatch";
import { PutMetricStreamCommandInput, PutMetricStreamCommandOutput, PutMetricStreamCommand } from "@aws-sdk/client-cloudwatch";
import { SetAlarmStateCommandInput, SetAlarmStateCommandOutput, SetAlarmStateCommand } from "@aws-sdk/client-cloudwatch";
import { StartMetricStreamsCommandInput, StartMetricStreamsCommandOutput, StartMetricStreamsCommand } from "@aws-sdk/client-cloudwatch";
import { StopMetricStreamsCommandInput, StopMetricStreamsCommandOutput, StopMetricStreamsCommand } from "@aws-sdk/client-cloudwatch";
import { TagResourceCommandInput, TagResourceCommandOutput, TagResourceCommand } from "@aws-sdk/client-cloudwatch";
import { UntagResourceCommandInput, UntagResourceCommandOutput, UntagResourceCommand } from "@aws-sdk/client-cloudwatch";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:deleteAlarms'*/
export const sdkCloudWatchDeleteAlarms = (input: SdkIntegrationTask<DeleteAlarmsCommandInput>): Promise<DeleteAlarmsCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new DeleteAlarmsCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:deleteAnomalyDetector'*/
export const sdkCloudWatchDeleteAnomalyDetector = (input: SdkIntegrationTask<DeleteAnomalyDetectorCommandInput>): Promise<DeleteAnomalyDetectorCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new DeleteAnomalyDetectorCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:deleteDashboards'*/
export const sdkCloudWatchDeleteDashboards = (input: SdkIntegrationTask<DeleteDashboardsCommandInput>): Promise<DeleteDashboardsCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new DeleteDashboardsCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:deleteInsightRules'*/
export const sdkCloudWatchDeleteInsightRules = (input: SdkIntegrationTask<DeleteInsightRulesCommandInput>): Promise<DeleteInsightRulesCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new DeleteInsightRulesCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:deleteMetricStream'*/
export const sdkCloudWatchDeleteMetricStream = (input: SdkIntegrationTask<DeleteMetricStreamCommandInput>): Promise<DeleteMetricStreamCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new DeleteMetricStreamCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:describeAlarmHistory'*/
export const sdkCloudWatchDescribeAlarmHistory = (input: SdkIntegrationTask<DescribeAlarmHistoryCommandInput>): Promise<DescribeAlarmHistoryCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new DescribeAlarmHistoryCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:describeAlarms'*/
export const sdkCloudWatchDescribeAlarms = (input: SdkIntegrationTask<DescribeAlarmsCommandInput>): Promise<DescribeAlarmsCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new DescribeAlarmsCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:describeAlarmsForMetric'*/
export const sdkCloudWatchDescribeAlarmsForMetric = (input: SdkIntegrationTask<DescribeAlarmsForMetricCommandInput>): Promise<DescribeAlarmsForMetricCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new DescribeAlarmsForMetricCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:describeAnomalyDetectors'*/
export const sdkCloudWatchDescribeAnomalyDetectors = (input: SdkIntegrationTask<DescribeAnomalyDetectorsCommandInput>): Promise<DescribeAnomalyDetectorsCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new DescribeAnomalyDetectorsCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:describeInsightRules'*/
export const sdkCloudWatchDescribeInsightRules = (input: SdkIntegrationTask<DescribeInsightRulesCommandInput>): Promise<DescribeInsightRulesCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new DescribeInsightRulesCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:disableAlarmActions'*/
export const sdkCloudWatchDisableAlarmActions = (input: SdkIntegrationTask<DisableAlarmActionsCommandInput>): Promise<DisableAlarmActionsCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new DisableAlarmActionsCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:disableInsightRules'*/
export const sdkCloudWatchDisableInsightRules = (input: SdkIntegrationTask<DisableInsightRulesCommandInput>): Promise<DisableInsightRulesCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new DisableInsightRulesCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:enableAlarmActions'*/
export const sdkCloudWatchEnableAlarmActions = (input: SdkIntegrationTask<EnableAlarmActionsCommandInput>): Promise<EnableAlarmActionsCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new EnableAlarmActionsCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:enableInsightRules'*/
export const sdkCloudWatchEnableInsightRules = (input: SdkIntegrationTask<EnableInsightRulesCommandInput>): Promise<EnableInsightRulesCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new EnableInsightRulesCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:getDashboard'*/
export const sdkCloudWatchGetDashboard = (input: SdkIntegrationTask<GetDashboardCommandInput>): Promise<GetDashboardCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new GetDashboardCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:getInsightRuleReport'*/
export const sdkCloudWatchGetInsightRuleReport = (input: SdkIntegrationTask<GetInsightRuleReportCommandInput>): Promise<GetInsightRuleReportCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new GetInsightRuleReportCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:getMetricData'*/
export const sdkCloudWatchGetMetricData = (input: SdkIntegrationTask<GetMetricDataCommandInput>): Promise<GetMetricDataCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new GetMetricDataCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:getMetricStatistics'*/
export const sdkCloudWatchGetMetricStatistics = (input: SdkIntegrationTask<GetMetricStatisticsCommandInput>): Promise<GetMetricStatisticsCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new GetMetricStatisticsCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:getMetricStream'*/
export const sdkCloudWatchGetMetricStream = (input: SdkIntegrationTask<GetMetricStreamCommandInput>): Promise<GetMetricStreamCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new GetMetricStreamCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:getMetricWidgetImage'*/
export const sdkCloudWatchGetMetricWidgetImage = (input: SdkIntegrationTask<GetMetricWidgetImageCommandInput>): Promise<GetMetricWidgetImageCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new GetMetricWidgetImageCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:listDashboards'*/
export const sdkCloudWatchListDashboards = (input: SdkIntegrationTask<ListDashboardsCommandInput>): Promise<ListDashboardsCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new ListDashboardsCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:listMetricStreams'*/
export const sdkCloudWatchListMetricStreams = (input: SdkIntegrationTask<ListMetricStreamsCommandInput>): Promise<ListMetricStreamsCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new ListMetricStreamsCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:listMetrics'*/
export const sdkCloudWatchListMetrics = (input: SdkIntegrationTask<ListMetricsCommandInput>): Promise<ListMetricsCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new ListMetricsCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:listTagsForResource'*/
export const sdkCloudWatchListTagsForResource = (input: SdkIntegrationTask<ListTagsForResourceCommandInput>): Promise<ListTagsForResourceCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new ListTagsForResourceCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:putAnomalyDetector'*/
export const sdkCloudWatchPutAnomalyDetector = (input: SdkIntegrationTask<PutAnomalyDetectorCommandInput>): Promise<PutAnomalyDetectorCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new PutAnomalyDetectorCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:putCompositeAlarm'*/
export const sdkCloudWatchPutCompositeAlarm = (input: SdkIntegrationTask<PutCompositeAlarmCommandInput>): Promise<PutCompositeAlarmCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new PutCompositeAlarmCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:putDashboard'*/
export const sdkCloudWatchPutDashboard = (input: SdkIntegrationTask<PutDashboardCommandInput>): Promise<PutDashboardCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new PutDashboardCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:putInsightRule'*/
export const sdkCloudWatchPutInsightRule = (input: SdkIntegrationTask<PutInsightRuleCommandInput>): Promise<PutInsightRuleCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new PutInsightRuleCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:putMetricAlarm'*/
export const sdkCloudWatchPutMetricAlarm = (input: SdkIntegrationTask<PutMetricAlarmCommandInput>): Promise<PutMetricAlarmCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new PutMetricAlarmCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:putMetricData'*/
export const sdkCloudWatchPutMetricData = (input: SdkIntegrationTask<PutMetricDataCommandInput>): Promise<PutMetricDataCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new PutMetricDataCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:putMetricStream'*/
export const sdkCloudWatchPutMetricStream = (input: SdkIntegrationTask<PutMetricStreamCommandInput>): Promise<PutMetricStreamCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new PutMetricStreamCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:setAlarmState'*/
export const sdkCloudWatchSetAlarmState = (input: SdkIntegrationTask<SetAlarmStateCommandInput>): Promise<SetAlarmStateCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new SetAlarmStateCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:startMetricStreams'*/
export const sdkCloudWatchStartMetricStreams = (input: SdkIntegrationTask<StartMetricStreamsCommandInput>): Promise<StartMetricStreamsCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new StartMetricStreamsCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:stopMetricStreams'*/
export const sdkCloudWatchStopMetricStreams = (input: SdkIntegrationTask<StopMetricStreamsCommandInput>): Promise<StopMetricStreamsCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new StopMetricStreamsCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:tagResource'*/
export const sdkCloudWatchTagResource = (input: SdkIntegrationTask<TagResourceCommandInput>): Promise<TagResourceCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new TagResourceCommand(input.parameters);
    return cloudwatch.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:cloudwatch:untagResource'*/
export const sdkCloudWatchUntagResource = (input: SdkIntegrationTask<UntagResourceCommandInput>): Promise<UntagResourceCommandOutput> => {
    const cloudwatch = new CloudWatchClient(clientConfig);
    const command = new UntagResourceCommand(input.parameters);
    return cloudwatch.send(command);
};

