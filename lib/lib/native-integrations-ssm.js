"use strict";
exports.__esModule = true;
exports.ASL = void 0;
var client_ssm_1 = require("@aws-sdk/client-ssm");
var client_ssm_2 = require("@aws-sdk/client-ssm");
var client_ssm_3 = require("@aws-sdk/client-ssm");
var client_ssm_4 = require("@aws-sdk/client-ssm");
var client_ssm_5 = require("@aws-sdk/client-ssm");
var client_ssm_6 = require("@aws-sdk/client-ssm");
var client_ssm_7 = require("@aws-sdk/client-ssm");
var client_ssm_8 = require("@aws-sdk/client-ssm");
var client_ssm_9 = require("@aws-sdk/client-ssm");
var client_ssm_10 = require("@aws-sdk/client-ssm");
var client_ssm_11 = require("@aws-sdk/client-ssm");
var client_ssm_12 = require("@aws-sdk/client-ssm");
var client_ssm_13 = require("@aws-sdk/client-ssm");
var client_ssm_14 = require("@aws-sdk/client-ssm");
var client_ssm_15 = require("@aws-sdk/client-ssm");
var client_ssm_16 = require("@aws-sdk/client-ssm");
var client_ssm_17 = require("@aws-sdk/client-ssm");
var client_ssm_18 = require("@aws-sdk/client-ssm");
var client_ssm_19 = require("@aws-sdk/client-ssm");
var client_ssm_20 = require("@aws-sdk/client-ssm");
var client_ssm_21 = require("@aws-sdk/client-ssm");
var client_ssm_22 = require("@aws-sdk/client-ssm");
var client_ssm_23 = require("@aws-sdk/client-ssm");
var client_ssm_24 = require("@aws-sdk/client-ssm");
var client_ssm_25 = require("@aws-sdk/client-ssm");
var client_ssm_26 = require("@aws-sdk/client-ssm");
var client_ssm_27 = require("@aws-sdk/client-ssm");
var client_ssm_28 = require("@aws-sdk/client-ssm");
var client_ssm_29 = require("@aws-sdk/client-ssm");
var client_ssm_30 = require("@aws-sdk/client-ssm");
var client_ssm_31 = require("@aws-sdk/client-ssm");
var client_ssm_32 = require("@aws-sdk/client-ssm");
var client_ssm_33 = require("@aws-sdk/client-ssm");
var client_ssm_34 = require("@aws-sdk/client-ssm");
var client_ssm_35 = require("@aws-sdk/client-ssm");
var client_ssm_36 = require("@aws-sdk/client-ssm");
var client_ssm_37 = require("@aws-sdk/client-ssm");
var client_ssm_38 = require("@aws-sdk/client-ssm");
var client_ssm_39 = require("@aws-sdk/client-ssm");
var client_ssm_40 = require("@aws-sdk/client-ssm");
var client_ssm_41 = require("@aws-sdk/client-ssm");
var client_ssm_42 = require("@aws-sdk/client-ssm");
var client_ssm_43 = require("@aws-sdk/client-ssm");
var client_ssm_44 = require("@aws-sdk/client-ssm");
var client_ssm_45 = require("@aws-sdk/client-ssm");
var client_ssm_46 = require("@aws-sdk/client-ssm");
var client_ssm_47 = require("@aws-sdk/client-ssm");
var client_ssm_48 = require("@aws-sdk/client-ssm");
var client_ssm_49 = require("@aws-sdk/client-ssm");
var client_ssm_50 = require("@aws-sdk/client-ssm");
var client_ssm_51 = require("@aws-sdk/client-ssm");
var client_ssm_52 = require("@aws-sdk/client-ssm");
var client_ssm_53 = require("@aws-sdk/client-ssm");
var client_ssm_54 = require("@aws-sdk/client-ssm");
var client_ssm_55 = require("@aws-sdk/client-ssm");
var client_ssm_56 = require("@aws-sdk/client-ssm");
var client_ssm_57 = require("@aws-sdk/client-ssm");
var client_ssm_58 = require("@aws-sdk/client-ssm");
var client_ssm_59 = require("@aws-sdk/client-ssm");
var client_ssm_60 = require("@aws-sdk/client-ssm");
var client_ssm_61 = require("@aws-sdk/client-ssm");
var client_ssm_62 = require("@aws-sdk/client-ssm");
var client_ssm_63 = require("@aws-sdk/client-ssm");
var client_ssm_64 = require("@aws-sdk/client-ssm");
var client_ssm_65 = require("@aws-sdk/client-ssm");
var client_ssm_66 = require("@aws-sdk/client-ssm");
var client_ssm_67 = require("@aws-sdk/client-ssm");
var client_ssm_68 = require("@aws-sdk/client-ssm");
var client_ssm_69 = require("@aws-sdk/client-ssm");
var client_ssm_70 = require("@aws-sdk/client-ssm");
var client_ssm_71 = require("@aws-sdk/client-ssm");
var client_ssm_72 = require("@aws-sdk/client-ssm");
var client_ssm_73 = require("@aws-sdk/client-ssm");
var client_ssm_74 = require("@aws-sdk/client-ssm");
var client_ssm_75 = require("@aws-sdk/client-ssm");
var client_ssm_76 = require("@aws-sdk/client-ssm");
var client_ssm_77 = require("@aws-sdk/client-ssm");
var client_ssm_78 = require("@aws-sdk/client-ssm");
var client_ssm_79 = require("@aws-sdk/client-ssm");
var client_ssm_80 = require("@aws-sdk/client-ssm");
var client_ssm_81 = require("@aws-sdk/client-ssm");
var client_ssm_82 = require("@aws-sdk/client-ssm");
var client_ssm_83 = require("@aws-sdk/client-ssm");
var client_ssm_84 = require("@aws-sdk/client-ssm");
var client_ssm_85 = require("@aws-sdk/client-ssm");
var client_ssm_86 = require("@aws-sdk/client-ssm");
var client_ssm_87 = require("@aws-sdk/client-ssm");
var client_ssm_88 = require("@aws-sdk/client-ssm");
var client_ssm_89 = require("@aws-sdk/client-ssm");
var client_ssm_90 = require("@aws-sdk/client-ssm");
var client_ssm_91 = require("@aws-sdk/client-ssm");
var client_ssm_92 = require("@aws-sdk/client-ssm");
var client_ssm_93 = require("@aws-sdk/client-ssm");
var client_ssm_94 = require("@aws-sdk/client-ssm");
var client_ssm_95 = require("@aws-sdk/client-ssm");
var client_ssm_96 = require("@aws-sdk/client-ssm");
var client_ssm_97 = require("@aws-sdk/client-ssm");
var client_ssm_98 = require("@aws-sdk/client-ssm");
var client_ssm_99 = require("@aws-sdk/client-ssm");
var client_ssm_100 = require("@aws-sdk/client-ssm");
var client_ssm_101 = require("@aws-sdk/client-ssm");
var client_ssm_102 = require("@aws-sdk/client-ssm");
var client_ssm_103 = require("@aws-sdk/client-ssm");
var client_ssm_104 = require("@aws-sdk/client-ssm");
var client_ssm_105 = require("@aws-sdk/client-ssm");
var client_ssm_106 = require("@aws-sdk/client-ssm");
var client_ssm_107 = require("@aws-sdk/client-ssm");
var client_ssm_108 = require("@aws-sdk/client-ssm");
var client_ssm_109 = require("@aws-sdk/client-ssm");
var client_ssm_110 = require("@aws-sdk/client-ssm");
var client_ssm_111 = require("@aws-sdk/client-ssm");
var client_ssm_112 = require("@aws-sdk/client-ssm");
var client_ssm_113 = require("@aws-sdk/client-ssm");
var client_ssm_114 = require("@aws-sdk/client-ssm");
var client_ssm_115 = require("@aws-sdk/client-ssm");
var client_ssm_116 = require("@aws-sdk/client-ssm");
var client_ssm_117 = require("@aws-sdk/client-ssm");
var client_ssm_118 = require("@aws-sdk/client-ssm");
var client_ssm_119 = require("@aws-sdk/client-ssm");
var client_ssm_120 = require("@aws-sdk/client-ssm");
var client_ssm_121 = require("@aws-sdk/client-ssm");
var client_ssm_122 = require("@aws-sdk/client-ssm");
var client_ssm_123 = require("@aws-sdk/client-ssm");
var client_ssm_124 = require("@aws-sdk/client-ssm");
var client_ssm_125 = require("@aws-sdk/client-ssm");
var client_ssm_126 = require("@aws-sdk/client-ssm");
var client_ssm_127 = require("@aws-sdk/client-ssm");
var client_ssm_128 = require("@aws-sdk/client-ssm");
var client_ssm_129 = require("@aws-sdk/client-ssm");
var client_ssm_130 = require("@aws-sdk/client-ssm");
var client_ssm_131 = require("@aws-sdk/client-ssm");
var client_ssm_132 = require("@aws-sdk/client-ssm");
var client_ssm_133 = require("@aws-sdk/client-ssm");
var client_ssm_134 = require("@aws-sdk/client-ssm");
var client_ssm_135 = require("@aws-sdk/client-ssm");
var client_ssm_136 = require("@aws-sdk/client-ssm");
var ASL;
(function (ASL) {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:addTagsToResource'*/
    ASL.nativeSSMAddTagsToResource = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_2.AddTagsToResourceCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:associateOpsItemRelatedItem'*/
    ASL.nativeSSMAssociateOpsItemRelatedItem = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_3.AssociateOpsItemRelatedItemCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:cancelCommand'*/
    ASL.nativeSSMCancelCommand = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_4.CancelCommandCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:cancelMaintenanceWindowExecution'*/
    ASL.nativeSSMCancelMaintenanceWindowExecution = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_5.CancelMaintenanceWindowExecutionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createActivation'*/
    ASL.nativeSSMCreateActivation = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_6.CreateActivationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createAssociation'*/
    ASL.nativeSSMCreateAssociation = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_7.CreateAssociationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createAssociationBatch'*/
    ASL.nativeSSMCreateAssociationBatch = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_8.CreateAssociationBatchCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createDocument'*/
    ASL.nativeSSMCreateDocument = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_9.CreateDocumentCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createMaintenanceWindow'*/
    ASL.nativeSSMCreateMaintenanceWindow = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_10.CreateMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createOpsItem'*/
    ASL.nativeSSMCreateOpsItem = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_11.CreateOpsItemCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createOpsMetadata'*/
    ASL.nativeSSMCreateOpsMetadata = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_12.CreateOpsMetadataCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createPatchBaseline'*/
    ASL.nativeSSMCreatePatchBaseline = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_13.CreatePatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createResourceDataSync'*/
    ASL.nativeSSMCreateResourceDataSync = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_14.CreateResourceDataSyncCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteActivation'*/
    ASL.nativeSSMDeleteActivation = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_15.DeleteActivationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteAssociation'*/
    ASL.nativeSSMDeleteAssociation = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_16.DeleteAssociationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteDocument'*/
    ASL.nativeSSMDeleteDocument = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_17.DeleteDocumentCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteInventory'*/
    ASL.nativeSSMDeleteInventory = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_18.DeleteInventoryCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteMaintenanceWindow'*/
    ASL.nativeSSMDeleteMaintenanceWindow = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_19.DeleteMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteOpsMetadata'*/
    ASL.nativeSSMDeleteOpsMetadata = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_20.DeleteOpsMetadataCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteParameter'*/
    ASL.nativeSSMDeleteParameter = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_21.DeleteParameterCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteParameters'*/
    ASL.nativeSSMDeleteParameters = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_22.DeleteParametersCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deletePatchBaseline'*/
    ASL.nativeSSMDeletePatchBaseline = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_23.DeletePatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteResourceDataSync'*/
    ASL.nativeSSMDeleteResourceDataSync = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_24.DeleteResourceDataSyncCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deregisterManagedInstance'*/
    ASL.nativeSSMDeregisterManagedInstance = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_25.DeregisterManagedInstanceCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deregisterPatchBaselineForPatchGroup'*/
    ASL.nativeSSMDeregisterPatchBaselineForPatchGroup = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_26.DeregisterPatchBaselineForPatchGroupCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deregisterTargetFromMaintenanceWindow'*/
    ASL.nativeSSMDeregisterTargetFromMaintenanceWindow = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_27.DeregisterTargetFromMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deregisterTaskFromMaintenanceWindow'*/
    ASL.nativeSSMDeregisterTaskFromMaintenanceWindow = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_28.DeregisterTaskFromMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeActivations'*/
    ASL.nativeSSMDescribeActivations = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_29.DescribeActivationsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAssociation'*/
    ASL.nativeSSMDescribeAssociation = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_30.DescribeAssociationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAssociationExecutionTargets'*/
    ASL.nativeSSMDescribeAssociationExecutionTargets = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_31.DescribeAssociationExecutionTargetsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAssociationExecutions'*/
    ASL.nativeSSMDescribeAssociationExecutions = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_32.DescribeAssociationExecutionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAutomationExecutions'*/
    ASL.nativeSSMDescribeAutomationExecutions = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_33.DescribeAutomationExecutionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAutomationStepExecutions'*/
    ASL.nativeSSMDescribeAutomationStepExecutions = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_34.DescribeAutomationStepExecutionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAvailablePatches'*/
    ASL.nativeSSMDescribeAvailablePatches = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_35.DescribeAvailablePatchesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeDocument'*/
    ASL.nativeSSMDescribeDocument = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_36.DescribeDocumentCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeDocumentPermission'*/
    ASL.nativeSSMDescribeDocumentPermission = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_37.DescribeDocumentPermissionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeEffectiveInstanceAssociations'*/
    ASL.nativeSSMDescribeEffectiveInstanceAssociations = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_38.DescribeEffectiveInstanceAssociationsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeEffectivePatchesForPatchBaseline'*/
    ASL.nativeSSMDescribeEffectivePatchesForPatchBaseline = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_39.DescribeEffectivePatchesForPatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstanceAssociationsStatus'*/
    ASL.nativeSSMDescribeInstanceAssociationsStatus = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_40.DescribeInstanceAssociationsStatusCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstanceInformation'*/
    ASL.nativeSSMDescribeInstanceInformation = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_41.DescribeInstanceInformationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstancePatchStates'*/
    ASL.nativeSSMDescribeInstancePatchStates = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_42.DescribeInstancePatchStatesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstancePatchStatesForPatchGroup'*/
    ASL.nativeSSMDescribeInstancePatchStatesForPatchGroup = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_43.DescribeInstancePatchStatesForPatchGroupCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstancePatches'*/
    ASL.nativeSSMDescribeInstancePatches = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_44.DescribeInstancePatchesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInventoryDeletions'*/
    ASL.nativeSSMDescribeInventoryDeletions = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_45.DescribeInventoryDeletionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowExecutionTaskInvocations'*/
    ASL.nativeSSMDescribeMaintenanceWindowExecutionTaskInvocations = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_46.DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowExecutionTasks'*/
    ASL.nativeSSMDescribeMaintenanceWindowExecutionTasks = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_47.DescribeMaintenanceWindowExecutionTasksCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowExecutions'*/
    ASL.nativeSSMDescribeMaintenanceWindowExecutions = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_48.DescribeMaintenanceWindowExecutionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowSchedule'*/
    ASL.nativeSSMDescribeMaintenanceWindowSchedule = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_49.DescribeMaintenanceWindowScheduleCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowTargets'*/
    ASL.nativeSSMDescribeMaintenanceWindowTargets = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_50.DescribeMaintenanceWindowTargetsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowTasks'*/
    ASL.nativeSSMDescribeMaintenanceWindowTasks = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_51.DescribeMaintenanceWindowTasksCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindows'*/
    ASL.nativeSSMDescribeMaintenanceWindows = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_52.DescribeMaintenanceWindowsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowsForTarget'*/
    ASL.nativeSSMDescribeMaintenanceWindowsForTarget = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_53.DescribeMaintenanceWindowsForTargetCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeOpsItems'*/
    ASL.nativeSSMDescribeOpsItems = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_54.DescribeOpsItemsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeParameters'*/
    ASL.nativeSSMDescribeParameters = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_55.DescribeParametersCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describePatchBaselines'*/
    ASL.nativeSSMDescribePatchBaselines = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_56.DescribePatchBaselinesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describePatchGroupState'*/
    ASL.nativeSSMDescribePatchGroupState = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_57.DescribePatchGroupStateCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describePatchGroups'*/
    ASL.nativeSSMDescribePatchGroups = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_58.DescribePatchGroupsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describePatchProperties'*/
    ASL.nativeSSMDescribePatchProperties = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_59.DescribePatchPropertiesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeSessions'*/
    ASL.nativeSSMDescribeSessions = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_60.DescribeSessionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:disassociateOpsItemRelatedItem'*/
    ASL.nativeSSMDisassociateOpsItemRelatedItem = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_61.DisassociateOpsItemRelatedItemCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getAutomationExecution'*/
    ASL.nativeSSMGetAutomationExecution = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_62.GetAutomationExecutionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getCalendarState'*/
    ASL.nativeSSMGetCalendarState = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_63.GetCalendarStateCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getCommandInvocation'*/
    ASL.nativeSSMGetCommandInvocation = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_64.GetCommandInvocationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getConnectionStatus'*/
    ASL.nativeSSMGetConnectionStatus = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_65.GetConnectionStatusCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getDefaultPatchBaseline'*/
    ASL.nativeSSMGetDefaultPatchBaseline = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_66.GetDefaultPatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getDeployablePatchSnapshotForInstance'*/
    ASL.nativeSSMGetDeployablePatchSnapshotForInstance = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_67.GetDeployablePatchSnapshotForInstanceCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getDocument'*/
    ASL.nativeSSMGetDocument = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_68.GetDocumentCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getInventory'*/
    ASL.nativeSSMGetInventory = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_69.GetInventoryCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getInventorySchema'*/
    ASL.nativeSSMGetInventorySchema = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_70.GetInventorySchemaCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindow'*/
    ASL.nativeSSMGetMaintenanceWindow = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_71.GetMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindowExecution'*/
    ASL.nativeSSMGetMaintenanceWindowExecution = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_72.GetMaintenanceWindowExecutionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindowExecutionTask'*/
    ASL.nativeSSMGetMaintenanceWindowExecutionTask = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_73.GetMaintenanceWindowExecutionTaskCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindowExecutionTaskInvocation'*/
    ASL.nativeSSMGetMaintenanceWindowExecutionTaskInvocation = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_74.GetMaintenanceWindowExecutionTaskInvocationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindowTask'*/
    ASL.nativeSSMGetMaintenanceWindowTask = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_75.GetMaintenanceWindowTaskCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getOpsItem'*/
    ASL.nativeSSMGetOpsItem = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_76.GetOpsItemCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getOpsMetadata'*/
    ASL.nativeSSMGetOpsMetadata = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_77.GetOpsMetadataCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getOpsSummary'*/
    ASL.nativeSSMGetOpsSummary = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_78.GetOpsSummaryCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getParameter'*/
    ASL.nativeSSMGetParameter = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_79.GetParameterCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getParameterHistory'*/
    ASL.nativeSSMGetParameterHistory = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_80.GetParameterHistoryCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getParameters'*/
    ASL.nativeSSMGetParameters = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_81.GetParametersCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getParametersByPath'*/
    ASL.nativeSSMGetParametersByPath = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_82.GetParametersByPathCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getPatchBaseline'*/
    ASL.nativeSSMGetPatchBaseline = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_83.GetPatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getPatchBaselineForPatchGroup'*/
    ASL.nativeSSMGetPatchBaselineForPatchGroup = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_84.GetPatchBaselineForPatchGroupCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getServiceSetting'*/
    ASL.nativeSSMGetServiceSetting = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_85.GetServiceSettingCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:labelParameterVersion'*/
    ASL.nativeSSMLabelParameterVersion = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_86.LabelParameterVersionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listAssociationVersions'*/
    ASL.nativeSSMListAssociationVersions = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_87.ListAssociationVersionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listAssociations'*/
    ASL.nativeSSMListAssociations = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_88.ListAssociationsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listCommandInvocations'*/
    ASL.nativeSSMListCommandInvocations = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_89.ListCommandInvocationsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listCommands'*/
    ASL.nativeSSMListCommands = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_90.ListCommandsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listComplianceItems'*/
    ASL.nativeSSMListComplianceItems = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_91.ListComplianceItemsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listComplianceSummaries'*/
    ASL.nativeSSMListComplianceSummaries = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_92.ListComplianceSummariesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listDocumentMetadataHistory'*/
    ASL.nativeSSMListDocumentMetadataHistory = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_93.ListDocumentMetadataHistoryCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listDocumentVersions'*/
    ASL.nativeSSMListDocumentVersions = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_94.ListDocumentVersionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listDocuments'*/
    ASL.nativeSSMListDocuments = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_95.ListDocumentsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listInventoryEntries'*/
    ASL.nativeSSMListInventoryEntries = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_96.ListInventoryEntriesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listOpsItemEvents'*/
    ASL.nativeSSMListOpsItemEvents = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_97.ListOpsItemEventsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listOpsItemRelatedItems'*/
    ASL.nativeSSMListOpsItemRelatedItems = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_98.ListOpsItemRelatedItemsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listOpsMetadata'*/
    ASL.nativeSSMListOpsMetadata = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_99.ListOpsMetadataCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listResourceComplianceSummaries'*/
    ASL.nativeSSMListResourceComplianceSummaries = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_100.ListResourceComplianceSummariesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listResourceDataSync'*/
    ASL.nativeSSMListResourceDataSync = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_101.ListResourceDataSyncCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listTagsForResource'*/
    ASL.nativeSSMListTagsForResource = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_102.ListTagsForResourceCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:modifyDocumentPermission'*/
    ASL.nativeSSMModifyDocumentPermission = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_103.ModifyDocumentPermissionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:putComplianceItems'*/
    ASL.nativeSSMPutComplianceItems = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_104.PutComplianceItemsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:putInventory'*/
    ASL.nativeSSMPutInventory = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_105.PutInventoryCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:putParameter'*/
    ASL.nativeSSMPutParameter = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_106.PutParameterCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:registerDefaultPatchBaseline'*/
    ASL.nativeSSMRegisterDefaultPatchBaseline = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_107.RegisterDefaultPatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:registerPatchBaselineForPatchGroup'*/
    ASL.nativeSSMRegisterPatchBaselineForPatchGroup = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_108.RegisterPatchBaselineForPatchGroupCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:registerTargetWithMaintenanceWindow'*/
    ASL.nativeSSMRegisterTargetWithMaintenanceWindow = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_109.RegisterTargetWithMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:registerTaskWithMaintenanceWindow'*/
    ASL.nativeSSMRegisterTaskWithMaintenanceWindow = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_110.RegisterTaskWithMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:removeTagsFromResource'*/
    ASL.nativeSSMRemoveTagsFromResource = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_111.RemoveTagsFromResourceCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:resetServiceSetting'*/
    ASL.nativeSSMResetServiceSetting = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_112.ResetServiceSettingCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:resumeSession'*/
    ASL.nativeSSMResumeSession = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_113.ResumeSessionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:sendAutomationSignal'*/
    ASL.nativeSSMSendAutomationSignal = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_114.SendAutomationSignalCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:sendCommand'*/
    ASL.nativeSSMSendCommand = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_115.SendCommandCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:startAssociationsOnce'*/
    ASL.nativeSSMStartAssociationsOnce = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_116.StartAssociationsOnceCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:startAutomationExecution'*/
    ASL.nativeSSMStartAutomationExecution = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_117.StartAutomationExecutionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:startChangeRequestExecution'*/
    ASL.nativeSSMStartChangeRequestExecution = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_118.StartChangeRequestExecutionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:startSession'*/
    ASL.nativeSSMStartSession = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_119.StartSessionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:stopAutomationExecution'*/
    ASL.nativeSSMStopAutomationExecution = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_120.StopAutomationExecutionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:terminateSession'*/
    ASL.nativeSSMTerminateSession = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_121.TerminateSessionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:unlabelParameterVersion'*/
    ASL.nativeSSMUnlabelParameterVersion = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_122.UnlabelParameterVersionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateAssociation'*/
    ASL.nativeSSMUpdateAssociation = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_123.UpdateAssociationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateAssociationStatus'*/
    ASL.nativeSSMUpdateAssociationStatus = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_124.UpdateAssociationStatusCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateDocument'*/
    ASL.nativeSSMUpdateDocument = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_125.UpdateDocumentCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateDocumentDefaultVersion'*/
    ASL.nativeSSMUpdateDocumentDefaultVersion = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_126.UpdateDocumentDefaultVersionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateDocumentMetadata'*/
    ASL.nativeSSMUpdateDocumentMetadata = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_127.UpdateDocumentMetadataCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateMaintenanceWindow'*/
    ASL.nativeSSMUpdateMaintenanceWindow = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_128.UpdateMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateMaintenanceWindowTarget'*/
    ASL.nativeSSMUpdateMaintenanceWindowTarget = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_129.UpdateMaintenanceWindowTargetCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateMaintenanceWindowTask'*/
    ASL.nativeSSMUpdateMaintenanceWindowTask = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_130.UpdateMaintenanceWindowTaskCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateManagedInstanceRole'*/
    ASL.nativeSSMUpdateManagedInstanceRole = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_131.UpdateManagedInstanceRoleCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateOpsItem'*/
    ASL.nativeSSMUpdateOpsItem = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_132.UpdateOpsItemCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateOpsMetadata'*/
    ASL.nativeSSMUpdateOpsMetadata = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_133.UpdateOpsMetadataCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updatePatchBaseline'*/
    ASL.nativeSSMUpdatePatchBaseline = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_134.UpdatePatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateResourceDataSync'*/
    ASL.nativeSSMUpdateResourceDataSync = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_135.UpdateResourceDataSyncCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateServiceSetting'*/
    ASL.nativeSSMUpdateServiceSetting = function (input) {
        var ssm = new client_ssm_1.SSMClient({});
        var command = new client_ssm_136.UpdateServiceSettingCommand(input);
        return ssm.send(command);
    };
})(ASL = exports.ASL || (exports.ASL = {}));
