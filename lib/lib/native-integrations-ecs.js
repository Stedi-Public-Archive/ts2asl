"use strict";
exports.__esModule = true;
exports.ASL = void 0;
var client_ecs_1 = require("@aws-sdk/client-ecs");
var client_ecs_2 = require("@aws-sdk/client-ecs");
var client_ecs_3 = require("@aws-sdk/client-ecs");
var client_ecs_4 = require("@aws-sdk/client-ecs");
var client_ecs_5 = require("@aws-sdk/client-ecs");
var client_ecs_6 = require("@aws-sdk/client-ecs");
var client_ecs_7 = require("@aws-sdk/client-ecs");
var client_ecs_8 = require("@aws-sdk/client-ecs");
var client_ecs_9 = require("@aws-sdk/client-ecs");
var client_ecs_10 = require("@aws-sdk/client-ecs");
var client_ecs_11 = require("@aws-sdk/client-ecs");
var client_ecs_12 = require("@aws-sdk/client-ecs");
var client_ecs_13 = require("@aws-sdk/client-ecs");
var client_ecs_14 = require("@aws-sdk/client-ecs");
var client_ecs_15 = require("@aws-sdk/client-ecs");
var client_ecs_16 = require("@aws-sdk/client-ecs");
var client_ecs_17 = require("@aws-sdk/client-ecs");
var client_ecs_18 = require("@aws-sdk/client-ecs");
var client_ecs_19 = require("@aws-sdk/client-ecs");
var client_ecs_20 = require("@aws-sdk/client-ecs");
var client_ecs_21 = require("@aws-sdk/client-ecs");
var client_ecs_22 = require("@aws-sdk/client-ecs");
var client_ecs_23 = require("@aws-sdk/client-ecs");
var client_ecs_24 = require("@aws-sdk/client-ecs");
var client_ecs_25 = require("@aws-sdk/client-ecs");
var client_ecs_26 = require("@aws-sdk/client-ecs");
var client_ecs_27 = require("@aws-sdk/client-ecs");
var client_ecs_28 = require("@aws-sdk/client-ecs");
var client_ecs_29 = require("@aws-sdk/client-ecs");
var client_ecs_30 = require("@aws-sdk/client-ecs");
var client_ecs_31 = require("@aws-sdk/client-ecs");
var client_ecs_32 = require("@aws-sdk/client-ecs");
var client_ecs_33 = require("@aws-sdk/client-ecs");
var client_ecs_34 = require("@aws-sdk/client-ecs");
var client_ecs_35 = require("@aws-sdk/client-ecs");
var client_ecs_36 = require("@aws-sdk/client-ecs");
var client_ecs_37 = require("@aws-sdk/client-ecs");
var client_ecs_38 = require("@aws-sdk/client-ecs");
var client_ecs_39 = require("@aws-sdk/client-ecs");
var client_ecs_40 = require("@aws-sdk/client-ecs");
var client_ecs_41 = require("@aws-sdk/client-ecs");
var client_ecs_42 = require("@aws-sdk/client-ecs");
var client_ecs_43 = require("@aws-sdk/client-ecs");
var client_ecs_44 = require("@aws-sdk/client-ecs");
var client_ecs_45 = require("@aws-sdk/client-ecs");
var client_ecs_46 = require("@aws-sdk/client-ecs");
var client_ecs_47 = require("@aws-sdk/client-ecs");
var client_ecs_48 = require("@aws-sdk/client-ecs");
var client_ecs_49 = require("@aws-sdk/client-ecs");
var client_ecs_50 = require("@aws-sdk/client-ecs");
var ASL;
(function (ASL) {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:createCapacityProvider'*/
    ASL.nativeECSCreateCapacityProvider = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_2.CreateCapacityProviderCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:createService'*/
    ASL.nativeECSCreateService = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_3.CreateServiceCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:createTaskSet'*/
    ASL.nativeECSCreateTaskSet = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_4.CreateTaskSetCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deleteAccountSetting'*/
    ASL.nativeECSDeleteAccountSetting = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_5.DeleteAccountSettingCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deleteAttributes'*/
    ASL.nativeECSDeleteAttributes = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_6.DeleteAttributesCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deleteCapacityProvider'*/
    ASL.nativeECSDeleteCapacityProvider = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_7.DeleteCapacityProviderCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deleteCluster'*/
    ASL.nativeECSDeleteCluster = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_8.DeleteClusterCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deleteService'*/
    ASL.nativeECSDeleteService = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_9.DeleteServiceCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deleteTaskSet'*/
    ASL.nativeECSDeleteTaskSet = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_10.DeleteTaskSetCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deregisterContainerInstance'*/
    ASL.nativeECSDeregisterContainerInstance = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_11.DeregisterContainerInstanceCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:deregisterTaskDefinition'*/
    ASL.nativeECSDeregisterTaskDefinition = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_12.DeregisterTaskDefinitionCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeCapacityProviders'*/
    ASL.nativeECSDescribeCapacityProviders = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_13.DescribeCapacityProvidersCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeClusters'*/
    ASL.nativeECSDescribeClusters = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_14.DescribeClustersCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeContainerInstances'*/
    ASL.nativeECSDescribeContainerInstances = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_15.DescribeContainerInstancesCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeServices'*/
    ASL.nativeECSDescribeServices = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_16.DescribeServicesCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeTaskDefinition'*/
    ASL.nativeECSDescribeTaskDefinition = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_17.DescribeTaskDefinitionCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeTaskSets'*/
    ASL.nativeECSDescribeTaskSets = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_18.DescribeTaskSetsCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:describeTasks'*/
    ASL.nativeECSDescribeTasks = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_19.DescribeTasksCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:discoverPollEndpoint'*/
    ASL.nativeECSDiscoverPollEndpoint = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_20.DiscoverPollEndpointCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:executeCommand'*/
    ASL.nativeECSExecuteCommand = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_21.ExecuteCommandCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listAccountSettings'*/
    ASL.nativeECSListAccountSettings = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_22.ListAccountSettingsCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listAttributes'*/
    ASL.nativeECSListAttributes = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_23.ListAttributesCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listClusters'*/
    ASL.nativeECSListClusters = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_24.ListClustersCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listContainerInstances'*/
    ASL.nativeECSListContainerInstances = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_25.ListContainerInstancesCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listServices'*/
    ASL.nativeECSListServices = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_26.ListServicesCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listTagsForResource'*/
    ASL.nativeECSListTagsForResource = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_27.ListTagsForResourceCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listTaskDefinitionFamilies'*/
    ASL.nativeECSListTaskDefinitionFamilies = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_28.ListTaskDefinitionFamiliesCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listTaskDefinitions'*/
    ASL.nativeECSListTaskDefinitions = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_29.ListTaskDefinitionsCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:listTasks'*/
    ASL.nativeECSListTasks = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_30.ListTasksCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:putAccountSetting'*/
    ASL.nativeECSPutAccountSetting = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_31.PutAccountSettingCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:putAccountSettingDefault'*/
    ASL.nativeECSPutAccountSettingDefault = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_32.PutAccountSettingDefaultCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:putAttributes'*/
    ASL.nativeECSPutAttributes = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_33.PutAttributesCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:putClusterCapacityProviders'*/
    ASL.nativeECSPutClusterCapacityProviders = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_34.PutClusterCapacityProvidersCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:registerContainerInstance'*/
    ASL.nativeECSRegisterContainerInstance = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_35.RegisterContainerInstanceCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:registerTaskDefinition'*/
    ASL.nativeECSRegisterTaskDefinition = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_36.RegisterTaskDefinitionCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:runTask'*/
    ASL.nativeECSRunTask = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_37.RunTaskCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:startTask'*/
    ASL.nativeECSStartTask = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_38.StartTaskCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:stopTask'*/
    ASL.nativeECSStopTask = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_39.StopTaskCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:submitAttachmentStateChanges'*/
    ASL.nativeECSSubmitAttachmentStateChanges = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_40.SubmitAttachmentStateChangesCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:submitContainerStateChange'*/
    ASL.nativeECSSubmitContainerStateChange = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_41.SubmitContainerStateChangeCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:submitTaskStateChange'*/
    ASL.nativeECSSubmitTaskStateChange = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_42.SubmitTaskStateChangeCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:tagResource'*/
    ASL.nativeECSTagResource = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_43.TagResourceCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:untagResource'*/
    ASL.nativeECSUntagResource = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_44.UntagResourceCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:updateCapacityProvider'*/
    ASL.nativeECSUpdateCapacityProvider = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_45.UpdateCapacityProviderCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:updateContainerAgent'*/
    ASL.nativeECSUpdateContainerAgent = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_46.UpdateContainerAgentCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:updateContainerInstancesState'*/
    ASL.nativeECSUpdateContainerInstancesState = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_47.UpdateContainerInstancesStateCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:updateService'*/
    ASL.nativeECSUpdateService = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_48.UpdateServiceCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:updateServicePrimaryTaskSet'*/
    ASL.nativeECSUpdateServicePrimaryTaskSet = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_49.UpdateServicePrimaryTaskSetCommand(input);
        return ecs.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ecs:updateTaskSet'*/
    ASL.nativeECSUpdateTaskSet = function (input) {
        var ecs = new client_ecs_1.ECSClient({});
        var command = new client_ecs_50.UpdateTaskSetCommand(input);
        return ecs.send(command);
    };
})(ASL = exports.ASL || (exports.ASL = {}));
