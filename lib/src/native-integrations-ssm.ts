import { SSMClient } from "@aws-sdk/client-ssm";
import { AddTagsToResourceCommandInput, AddTagsToResourceCommandOutput, AddTagsToResourceCommand } from "@aws-sdk/client-ssm";
import { AssociateOpsItemRelatedItemCommandInput, AssociateOpsItemRelatedItemCommandOutput, AssociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm";
import { CancelCommandCommandInput, CancelCommandCommandOutput, CancelCommandCommand } from "@aws-sdk/client-ssm";
import { CancelMaintenanceWindowExecutionCommandInput, CancelMaintenanceWindowExecutionCommandOutput, CancelMaintenanceWindowExecutionCommand } from "@aws-sdk/client-ssm";
import { CreateActivationCommandInput, CreateActivationCommandOutput, CreateActivationCommand } from "@aws-sdk/client-ssm";
import { CreateAssociationCommandInput, CreateAssociationCommandOutput, CreateAssociationCommand } from "@aws-sdk/client-ssm";
import { CreateAssociationBatchCommandInput, CreateAssociationBatchCommandOutput, CreateAssociationBatchCommand } from "@aws-sdk/client-ssm";
import { CreateDocumentCommandInput, CreateDocumentCommandOutput, CreateDocumentCommand } from "@aws-sdk/client-ssm";
import { CreateMaintenanceWindowCommandInput, CreateMaintenanceWindowCommandOutput, CreateMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { CreateOpsItemCommandInput, CreateOpsItemCommandOutput, CreateOpsItemCommand } from "@aws-sdk/client-ssm";
import { CreateOpsMetadataCommandInput, CreateOpsMetadataCommandOutput, CreateOpsMetadataCommand } from "@aws-sdk/client-ssm";
import { CreatePatchBaselineCommandInput, CreatePatchBaselineCommandOutput, CreatePatchBaselineCommand } from "@aws-sdk/client-ssm";
import { CreateResourceDataSyncCommandInput, CreateResourceDataSyncCommandOutput, CreateResourceDataSyncCommand } from "@aws-sdk/client-ssm";
import { DeleteActivationCommandInput, DeleteActivationCommandOutput, DeleteActivationCommand } from "@aws-sdk/client-ssm";
import { DeleteAssociationCommandInput, DeleteAssociationCommandOutput, DeleteAssociationCommand } from "@aws-sdk/client-ssm";
import { DeleteDocumentCommandInput, DeleteDocumentCommandOutput, DeleteDocumentCommand } from "@aws-sdk/client-ssm";
import { DeleteInventoryCommandInput, DeleteInventoryCommandOutput, DeleteInventoryCommand } from "@aws-sdk/client-ssm";
import { DeleteMaintenanceWindowCommandInput, DeleteMaintenanceWindowCommandOutput, DeleteMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { DeleteOpsMetadataCommandInput, DeleteOpsMetadataCommandOutput, DeleteOpsMetadataCommand } from "@aws-sdk/client-ssm";
import { DeleteParameterCommandInput, DeleteParameterCommandOutput, DeleteParameterCommand } from "@aws-sdk/client-ssm";
import { DeleteParametersCommandInput, DeleteParametersCommandOutput, DeleteParametersCommand } from "@aws-sdk/client-ssm";
import { DeletePatchBaselineCommandInput, DeletePatchBaselineCommandOutput, DeletePatchBaselineCommand } from "@aws-sdk/client-ssm";
import { DeleteResourceDataSyncCommandInput, DeleteResourceDataSyncCommandOutput, DeleteResourceDataSyncCommand } from "@aws-sdk/client-ssm";
import { DeregisterManagedInstanceCommandInput, DeregisterManagedInstanceCommandOutput, DeregisterManagedInstanceCommand } from "@aws-sdk/client-ssm";
import { DeregisterPatchBaselineForPatchGroupCommandInput, DeregisterPatchBaselineForPatchGroupCommandOutput, DeregisterPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm";
import { DeregisterTargetFromMaintenanceWindowCommandInput, DeregisterTargetFromMaintenanceWindowCommandOutput, DeregisterTargetFromMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { DeregisterTaskFromMaintenanceWindowCommandInput, DeregisterTaskFromMaintenanceWindowCommandOutput, DeregisterTaskFromMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { DescribeActivationsCommandInput, DescribeActivationsCommandOutput, DescribeActivationsCommand } from "@aws-sdk/client-ssm";
import { DescribeAssociationCommandInput, DescribeAssociationCommandOutput, DescribeAssociationCommand } from "@aws-sdk/client-ssm";
import { DescribeAssociationExecutionTargetsCommandInput, DescribeAssociationExecutionTargetsCommandOutput, DescribeAssociationExecutionTargetsCommand } from "@aws-sdk/client-ssm";
import { DescribeAssociationExecutionsCommandInput, DescribeAssociationExecutionsCommandOutput, DescribeAssociationExecutionsCommand } from "@aws-sdk/client-ssm";
import { DescribeAutomationExecutionsCommandInput, DescribeAutomationExecutionsCommandOutput, DescribeAutomationExecutionsCommand } from "@aws-sdk/client-ssm";
import { DescribeAutomationStepExecutionsCommandInput, DescribeAutomationStepExecutionsCommandOutput, DescribeAutomationStepExecutionsCommand } from "@aws-sdk/client-ssm";
import { DescribeAvailablePatchesCommandInput, DescribeAvailablePatchesCommandOutput, DescribeAvailablePatchesCommand } from "@aws-sdk/client-ssm";
import { DescribeDocumentCommandInput, DescribeDocumentCommandOutput, DescribeDocumentCommand } from "@aws-sdk/client-ssm";
import { DescribeDocumentPermissionCommandInput, DescribeDocumentPermissionCommandOutput, DescribeDocumentPermissionCommand } from "@aws-sdk/client-ssm";
import { DescribeEffectiveInstanceAssociationsCommandInput, DescribeEffectiveInstanceAssociationsCommandOutput, DescribeEffectiveInstanceAssociationsCommand } from "@aws-sdk/client-ssm";
import { DescribeEffectivePatchesForPatchBaselineCommandInput, DescribeEffectivePatchesForPatchBaselineCommandOutput, DescribeEffectivePatchesForPatchBaselineCommand } from "@aws-sdk/client-ssm";
import { DescribeInstanceAssociationsStatusCommandInput, DescribeInstanceAssociationsStatusCommandOutput, DescribeInstanceAssociationsStatusCommand } from "@aws-sdk/client-ssm";
import { DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput, DescribeInstanceInformationCommand } from "@aws-sdk/client-ssm";
import { DescribeInstancePatchStatesCommandInput, DescribeInstancePatchStatesCommandOutput, DescribeInstancePatchStatesCommand } from "@aws-sdk/client-ssm";
import { DescribeInstancePatchStatesForPatchGroupCommandInput, DescribeInstancePatchStatesForPatchGroupCommandOutput, DescribeInstancePatchStatesForPatchGroupCommand } from "@aws-sdk/client-ssm";
import { DescribeInstancePatchesCommandInput, DescribeInstancePatchesCommandOutput, DescribeInstancePatchesCommand } from "@aws-sdk/client-ssm";
import { DescribeInventoryDeletionsCommandInput, DescribeInventoryDeletionsCommandOutput, DescribeInventoryDeletionsCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput, DescribeMaintenanceWindowExecutionTaskInvocationsCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowExecutionTasksCommandInput, DescribeMaintenanceWindowExecutionTasksCommandOutput, DescribeMaintenanceWindowExecutionTasksCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput, DescribeMaintenanceWindowExecutionsCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowScheduleCommandInput, DescribeMaintenanceWindowScheduleCommandOutput, DescribeMaintenanceWindowScheduleCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowTargetsCommandInput, DescribeMaintenanceWindowTargetsCommandOutput, DescribeMaintenanceWindowTargetsCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput, DescribeMaintenanceWindowTasksCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput, DescribeMaintenanceWindowsCommand } from "@aws-sdk/client-ssm";
import { DescribeMaintenanceWindowsForTargetCommandInput, DescribeMaintenanceWindowsForTargetCommandOutput, DescribeMaintenanceWindowsForTargetCommand } from "@aws-sdk/client-ssm";
import { DescribeOpsItemsCommandInput, DescribeOpsItemsCommandOutput, DescribeOpsItemsCommand } from "@aws-sdk/client-ssm";
import { DescribeParametersCommandInput, DescribeParametersCommandOutput, DescribeParametersCommand } from "@aws-sdk/client-ssm";
import { DescribePatchBaselinesCommandInput, DescribePatchBaselinesCommandOutput, DescribePatchBaselinesCommand } from "@aws-sdk/client-ssm";
import { DescribePatchGroupStateCommandInput, DescribePatchGroupStateCommandOutput, DescribePatchGroupStateCommand } from "@aws-sdk/client-ssm";
import { DescribePatchGroupsCommandInput, DescribePatchGroupsCommandOutput, DescribePatchGroupsCommand } from "@aws-sdk/client-ssm";
import { DescribePatchPropertiesCommandInput, DescribePatchPropertiesCommandOutput, DescribePatchPropertiesCommand } from "@aws-sdk/client-ssm";
import { DescribeSessionsCommandInput, DescribeSessionsCommandOutput, DescribeSessionsCommand } from "@aws-sdk/client-ssm";
import { DisassociateOpsItemRelatedItemCommandInput, DisassociateOpsItemRelatedItemCommandOutput, DisassociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm";
import { GetAutomationExecutionCommandInput, GetAutomationExecutionCommandOutput, GetAutomationExecutionCommand } from "@aws-sdk/client-ssm";
import { GetCalendarStateCommandInput, GetCalendarStateCommandOutput, GetCalendarStateCommand } from "@aws-sdk/client-ssm";
import { GetCommandInvocationCommandInput, GetCommandInvocationCommandOutput, GetCommandInvocationCommand } from "@aws-sdk/client-ssm";
import { GetConnectionStatusCommandInput, GetConnectionStatusCommandOutput, GetConnectionStatusCommand } from "@aws-sdk/client-ssm";
import { GetDefaultPatchBaselineCommandInput, GetDefaultPatchBaselineCommandOutput, GetDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm";
import { GetDeployablePatchSnapshotForInstanceCommandInput, GetDeployablePatchSnapshotForInstanceCommandOutput, GetDeployablePatchSnapshotForInstanceCommand } from "@aws-sdk/client-ssm";
import { GetDocumentCommandInput, GetDocumentCommandOutput, GetDocumentCommand } from "@aws-sdk/client-ssm";
import { GetInventoryCommandInput, GetInventoryCommandOutput, GetInventoryCommand } from "@aws-sdk/client-ssm";
import { GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput, GetInventorySchemaCommand } from "@aws-sdk/client-ssm";
import { GetMaintenanceWindowCommandInput, GetMaintenanceWindowCommandOutput, GetMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { GetMaintenanceWindowExecutionCommandInput, GetMaintenanceWindowExecutionCommandOutput, GetMaintenanceWindowExecutionCommand } from "@aws-sdk/client-ssm";
import { GetMaintenanceWindowExecutionTaskCommandInput, GetMaintenanceWindowExecutionTaskCommandOutput, GetMaintenanceWindowExecutionTaskCommand } from "@aws-sdk/client-ssm";
import { GetMaintenanceWindowExecutionTaskInvocationCommandInput, GetMaintenanceWindowExecutionTaskInvocationCommandOutput, GetMaintenanceWindowExecutionTaskInvocationCommand } from "@aws-sdk/client-ssm";
import { GetMaintenanceWindowTaskCommandInput, GetMaintenanceWindowTaskCommandOutput, GetMaintenanceWindowTaskCommand } from "@aws-sdk/client-ssm";
import { GetOpsItemCommandInput, GetOpsItemCommandOutput, GetOpsItemCommand } from "@aws-sdk/client-ssm";
import { GetOpsMetadataCommandInput, GetOpsMetadataCommandOutput, GetOpsMetadataCommand } from "@aws-sdk/client-ssm";
import { GetOpsSummaryCommandInput, GetOpsSummaryCommandOutput, GetOpsSummaryCommand } from "@aws-sdk/client-ssm";
import { GetParameterCommandInput, GetParameterCommandOutput, GetParameterCommand } from "@aws-sdk/client-ssm";
import { GetParameterHistoryCommandInput, GetParameterHistoryCommandOutput, GetParameterHistoryCommand } from "@aws-sdk/client-ssm";
import { GetParametersCommandInput, GetParametersCommandOutput, GetParametersCommand } from "@aws-sdk/client-ssm";
import { GetParametersByPathCommandInput, GetParametersByPathCommandOutput, GetParametersByPathCommand } from "@aws-sdk/client-ssm";
import { GetPatchBaselineCommandInput, GetPatchBaselineCommandOutput, GetPatchBaselineCommand } from "@aws-sdk/client-ssm";
import { GetPatchBaselineForPatchGroupCommandInput, GetPatchBaselineForPatchGroupCommandOutput, GetPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm";
import { GetServiceSettingCommandInput, GetServiceSettingCommandOutput, GetServiceSettingCommand } from "@aws-sdk/client-ssm";
import { LabelParameterVersionCommandInput, LabelParameterVersionCommandOutput, LabelParameterVersionCommand } from "@aws-sdk/client-ssm";
import { ListAssociationVersionsCommandInput, ListAssociationVersionsCommandOutput, ListAssociationVersionsCommand } from "@aws-sdk/client-ssm";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput, ListAssociationsCommand } from "@aws-sdk/client-ssm";
import { ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput, ListCommandInvocationsCommand } from "@aws-sdk/client-ssm";
import { ListCommandsCommandInput, ListCommandsCommandOutput, ListCommandsCommand } from "@aws-sdk/client-ssm";
import { ListComplianceItemsCommandInput, ListComplianceItemsCommandOutput, ListComplianceItemsCommand } from "@aws-sdk/client-ssm";
import { ListComplianceSummariesCommandInput, ListComplianceSummariesCommandOutput, ListComplianceSummariesCommand } from "@aws-sdk/client-ssm";
import { ListDocumentMetadataHistoryCommandInput, ListDocumentMetadataHistoryCommandOutput, ListDocumentMetadataHistoryCommand } from "@aws-sdk/client-ssm";
import { ListDocumentVersionsCommandInput, ListDocumentVersionsCommandOutput, ListDocumentVersionsCommand } from "@aws-sdk/client-ssm";
import { ListDocumentsCommandInput, ListDocumentsCommandOutput, ListDocumentsCommand } from "@aws-sdk/client-ssm";
import { ListInventoryEntriesCommandInput, ListInventoryEntriesCommandOutput, ListInventoryEntriesCommand } from "@aws-sdk/client-ssm";
import { ListOpsItemEventsCommandInput, ListOpsItemEventsCommandOutput, ListOpsItemEventsCommand } from "@aws-sdk/client-ssm";
import { ListOpsItemRelatedItemsCommandInput, ListOpsItemRelatedItemsCommandOutput, ListOpsItemRelatedItemsCommand } from "@aws-sdk/client-ssm";
import { ListOpsMetadataCommandInput, ListOpsMetadataCommandOutput, ListOpsMetadataCommand } from "@aws-sdk/client-ssm";
import { ListResourceComplianceSummariesCommandInput, ListResourceComplianceSummariesCommandOutput, ListResourceComplianceSummariesCommand } from "@aws-sdk/client-ssm";
import { ListResourceDataSyncCommandInput, ListResourceDataSyncCommandOutput, ListResourceDataSyncCommand } from "@aws-sdk/client-ssm";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, ListTagsForResourceCommand } from "@aws-sdk/client-ssm";
import { ModifyDocumentPermissionCommandInput, ModifyDocumentPermissionCommandOutput, ModifyDocumentPermissionCommand } from "@aws-sdk/client-ssm";
import { PutComplianceItemsCommandInput, PutComplianceItemsCommandOutput, PutComplianceItemsCommand } from "@aws-sdk/client-ssm";
import { PutInventoryCommandInput, PutInventoryCommandOutput, PutInventoryCommand } from "@aws-sdk/client-ssm";
import { PutParameterCommandInput, PutParameterCommandOutput, PutParameterCommand } from "@aws-sdk/client-ssm";
import { RegisterDefaultPatchBaselineCommandInput, RegisterDefaultPatchBaselineCommandOutput, RegisterDefaultPatchBaselineCommand } from "@aws-sdk/client-ssm";
import { RegisterPatchBaselineForPatchGroupCommandInput, RegisterPatchBaselineForPatchGroupCommandOutput, RegisterPatchBaselineForPatchGroupCommand } from "@aws-sdk/client-ssm";
import { RegisterTargetWithMaintenanceWindowCommandInput, RegisterTargetWithMaintenanceWindowCommandOutput, RegisterTargetWithMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { RegisterTaskWithMaintenanceWindowCommandInput, RegisterTaskWithMaintenanceWindowCommandOutput, RegisterTaskWithMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { RemoveTagsFromResourceCommandInput, RemoveTagsFromResourceCommandOutput, RemoveTagsFromResourceCommand } from "@aws-sdk/client-ssm";
import { ResetServiceSettingCommandInput, ResetServiceSettingCommandOutput, ResetServiceSettingCommand } from "@aws-sdk/client-ssm";
import { ResumeSessionCommandInput, ResumeSessionCommandOutput, ResumeSessionCommand } from "@aws-sdk/client-ssm";
import { SendAutomationSignalCommandInput, SendAutomationSignalCommandOutput, SendAutomationSignalCommand } from "@aws-sdk/client-ssm";
import { SendCommandCommandInput, SendCommandCommandOutput, SendCommandCommand } from "@aws-sdk/client-ssm";
import { StartAssociationsOnceCommandInput, StartAssociationsOnceCommandOutput, StartAssociationsOnceCommand } from "@aws-sdk/client-ssm";
import { StartAutomationExecutionCommandInput, StartAutomationExecutionCommandOutput, StartAutomationExecutionCommand } from "@aws-sdk/client-ssm";
import { StartChangeRequestExecutionCommandInput, StartChangeRequestExecutionCommandOutput, StartChangeRequestExecutionCommand } from "@aws-sdk/client-ssm";
import { StartSessionCommandInput, StartSessionCommandOutput, StartSessionCommand } from "@aws-sdk/client-ssm";
import { StopAutomationExecutionCommandInput, StopAutomationExecutionCommandOutput, StopAutomationExecutionCommand } from "@aws-sdk/client-ssm";
import { TerminateSessionCommandInput, TerminateSessionCommandOutput, TerminateSessionCommand } from "@aws-sdk/client-ssm";
import { UnlabelParameterVersionCommandInput, UnlabelParameterVersionCommandOutput, UnlabelParameterVersionCommand } from "@aws-sdk/client-ssm";
import { UpdateAssociationCommandInput, UpdateAssociationCommandOutput, UpdateAssociationCommand } from "@aws-sdk/client-ssm";
import { UpdateAssociationStatusCommandInput, UpdateAssociationStatusCommandOutput, UpdateAssociationStatusCommand } from "@aws-sdk/client-ssm";
import { UpdateDocumentCommandInput, UpdateDocumentCommandOutput, UpdateDocumentCommand } from "@aws-sdk/client-ssm";
import { UpdateDocumentDefaultVersionCommandInput, UpdateDocumentDefaultVersionCommandOutput, UpdateDocumentDefaultVersionCommand } from "@aws-sdk/client-ssm";
import { UpdateDocumentMetadataCommandInput, UpdateDocumentMetadataCommandOutput, UpdateDocumentMetadataCommand } from "@aws-sdk/client-ssm";
import { UpdateMaintenanceWindowCommandInput, UpdateMaintenanceWindowCommandOutput, UpdateMaintenanceWindowCommand } from "@aws-sdk/client-ssm";
import { UpdateMaintenanceWindowTargetCommandInput, UpdateMaintenanceWindowTargetCommandOutput, UpdateMaintenanceWindowTargetCommand } from "@aws-sdk/client-ssm";
import { UpdateMaintenanceWindowTaskCommandInput, UpdateMaintenanceWindowTaskCommandOutput, UpdateMaintenanceWindowTaskCommand } from "@aws-sdk/client-ssm";
import { UpdateManagedInstanceRoleCommandInput, UpdateManagedInstanceRoleCommandOutput, UpdateManagedInstanceRoleCommand } from "@aws-sdk/client-ssm";
import { UpdateOpsItemCommandInput, UpdateOpsItemCommandOutput, UpdateOpsItemCommand } from "@aws-sdk/client-ssm";
import { UpdateOpsMetadataCommandInput, UpdateOpsMetadataCommandOutput, UpdateOpsMetadataCommand } from "@aws-sdk/client-ssm";
import { UpdatePatchBaselineCommandInput, UpdatePatchBaselineCommandOutput, UpdatePatchBaselineCommand } from "@aws-sdk/client-ssm";
import { UpdateResourceDataSyncCommandInput, UpdateResourceDataSyncCommandOutput, UpdateResourceDataSyncCommand } from "@aws-sdk/client-ssm";
import { UpdateServiceSettingCommandInput, UpdateServiceSettingCommandOutput, UpdateServiceSettingCommand } from "@aws-sdk/client-ssm";


export namespace ASL {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:addTagsToResource'*/
    export const nativeSSMAddTagsToResource = (input: AddTagsToResourceCommandInput): Promise<AddTagsToResourceCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new AddTagsToResourceCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:associateOpsItemRelatedItem'*/
    export const nativeSSMAssociateOpsItemRelatedItem = (input: AssociateOpsItemRelatedItemCommandInput): Promise<AssociateOpsItemRelatedItemCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new AssociateOpsItemRelatedItemCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:cancelCommand'*/
    export const nativeSSMCancelCommand = (input: CancelCommandCommandInput): Promise<CancelCommandCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new CancelCommandCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:cancelMaintenanceWindowExecution'*/
    export const nativeSSMCancelMaintenanceWindowExecution = (input: CancelMaintenanceWindowExecutionCommandInput): Promise<CancelMaintenanceWindowExecutionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new CancelMaintenanceWindowExecutionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createActivation'*/
    export const nativeSSMCreateActivation = (input: CreateActivationCommandInput): Promise<CreateActivationCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new CreateActivationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createAssociation'*/
    export const nativeSSMCreateAssociation = (input: CreateAssociationCommandInput): Promise<CreateAssociationCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new CreateAssociationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createAssociationBatch'*/
    export const nativeSSMCreateAssociationBatch = (input: CreateAssociationBatchCommandInput): Promise<CreateAssociationBatchCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new CreateAssociationBatchCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createDocument'*/
    export const nativeSSMCreateDocument = (input: CreateDocumentCommandInput): Promise<CreateDocumentCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new CreateDocumentCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createMaintenanceWindow'*/
    export const nativeSSMCreateMaintenanceWindow = (input: CreateMaintenanceWindowCommandInput): Promise<CreateMaintenanceWindowCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new CreateMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createOpsItem'*/
    export const nativeSSMCreateOpsItem = (input: CreateOpsItemCommandInput): Promise<CreateOpsItemCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new CreateOpsItemCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createOpsMetadata'*/
    export const nativeSSMCreateOpsMetadata = (input: CreateOpsMetadataCommandInput): Promise<CreateOpsMetadataCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new CreateOpsMetadataCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createPatchBaseline'*/
    export const nativeSSMCreatePatchBaseline = (input: CreatePatchBaselineCommandInput): Promise<CreatePatchBaselineCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new CreatePatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:createResourceDataSync'*/
    export const nativeSSMCreateResourceDataSync = (input: CreateResourceDataSyncCommandInput): Promise<CreateResourceDataSyncCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new CreateResourceDataSyncCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteActivation'*/
    export const nativeSSMDeleteActivation = (input: DeleteActivationCommandInput): Promise<DeleteActivationCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeleteActivationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteAssociation'*/
    export const nativeSSMDeleteAssociation = (input: DeleteAssociationCommandInput): Promise<DeleteAssociationCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeleteAssociationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteDocument'*/
    export const nativeSSMDeleteDocument = (input: DeleteDocumentCommandInput): Promise<DeleteDocumentCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeleteDocumentCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteInventory'*/
    export const nativeSSMDeleteInventory = (input: DeleteInventoryCommandInput): Promise<DeleteInventoryCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeleteInventoryCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteMaintenanceWindow'*/
    export const nativeSSMDeleteMaintenanceWindow = (input: DeleteMaintenanceWindowCommandInput): Promise<DeleteMaintenanceWindowCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeleteMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteOpsMetadata'*/
    export const nativeSSMDeleteOpsMetadata = (input: DeleteOpsMetadataCommandInput): Promise<DeleteOpsMetadataCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeleteOpsMetadataCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteParameter'*/
    export const nativeSSMDeleteParameter = (input: DeleteParameterCommandInput): Promise<DeleteParameterCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeleteParameterCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteParameters'*/
    export const nativeSSMDeleteParameters = (input: DeleteParametersCommandInput): Promise<DeleteParametersCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeleteParametersCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deletePatchBaseline'*/
    export const nativeSSMDeletePatchBaseline = (input: DeletePatchBaselineCommandInput): Promise<DeletePatchBaselineCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeletePatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deleteResourceDataSync'*/
    export const nativeSSMDeleteResourceDataSync = (input: DeleteResourceDataSyncCommandInput): Promise<DeleteResourceDataSyncCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeleteResourceDataSyncCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deregisterManagedInstance'*/
    export const nativeSSMDeregisterManagedInstance = (input: DeregisterManagedInstanceCommandInput): Promise<DeregisterManagedInstanceCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeregisterManagedInstanceCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deregisterPatchBaselineForPatchGroup'*/
    export const nativeSSMDeregisterPatchBaselineForPatchGroup = (input: DeregisterPatchBaselineForPatchGroupCommandInput): Promise<DeregisterPatchBaselineForPatchGroupCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeregisterPatchBaselineForPatchGroupCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deregisterTargetFromMaintenanceWindow'*/
    export const nativeSSMDeregisterTargetFromMaintenanceWindow = (input: DeregisterTargetFromMaintenanceWindowCommandInput): Promise<DeregisterTargetFromMaintenanceWindowCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeregisterTargetFromMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:deregisterTaskFromMaintenanceWindow'*/
    export const nativeSSMDeregisterTaskFromMaintenanceWindow = (input: DeregisterTaskFromMaintenanceWindowCommandInput): Promise<DeregisterTaskFromMaintenanceWindowCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DeregisterTaskFromMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeActivations'*/
    export const nativeSSMDescribeActivations = (input: DescribeActivationsCommandInput): Promise<DescribeActivationsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeActivationsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAssociation'*/
    export const nativeSSMDescribeAssociation = (input: DescribeAssociationCommandInput): Promise<DescribeAssociationCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeAssociationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAssociationExecutionTargets'*/
    export const nativeSSMDescribeAssociationExecutionTargets = (input: DescribeAssociationExecutionTargetsCommandInput): Promise<DescribeAssociationExecutionTargetsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeAssociationExecutionTargetsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAssociationExecutions'*/
    export const nativeSSMDescribeAssociationExecutions = (input: DescribeAssociationExecutionsCommandInput): Promise<DescribeAssociationExecutionsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeAssociationExecutionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAutomationExecutions'*/
    export const nativeSSMDescribeAutomationExecutions = (input: DescribeAutomationExecutionsCommandInput): Promise<DescribeAutomationExecutionsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeAutomationExecutionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAutomationStepExecutions'*/
    export const nativeSSMDescribeAutomationStepExecutions = (input: DescribeAutomationStepExecutionsCommandInput): Promise<DescribeAutomationStepExecutionsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeAutomationStepExecutionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeAvailablePatches'*/
    export const nativeSSMDescribeAvailablePatches = (input: DescribeAvailablePatchesCommandInput): Promise<DescribeAvailablePatchesCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeAvailablePatchesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeDocument'*/
    export const nativeSSMDescribeDocument = (input: DescribeDocumentCommandInput): Promise<DescribeDocumentCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeDocumentCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeDocumentPermission'*/
    export const nativeSSMDescribeDocumentPermission = (input: DescribeDocumentPermissionCommandInput): Promise<DescribeDocumentPermissionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeDocumentPermissionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeEffectiveInstanceAssociations'*/
    export const nativeSSMDescribeEffectiveInstanceAssociations = (input: DescribeEffectiveInstanceAssociationsCommandInput): Promise<DescribeEffectiveInstanceAssociationsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeEffectiveInstanceAssociationsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeEffectivePatchesForPatchBaseline'*/
    export const nativeSSMDescribeEffectivePatchesForPatchBaseline = (input: DescribeEffectivePatchesForPatchBaselineCommandInput): Promise<DescribeEffectivePatchesForPatchBaselineCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeEffectivePatchesForPatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstanceAssociationsStatus'*/
    export const nativeSSMDescribeInstanceAssociationsStatus = (input: DescribeInstanceAssociationsStatusCommandInput): Promise<DescribeInstanceAssociationsStatusCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeInstanceAssociationsStatusCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstanceInformation'*/
    export const nativeSSMDescribeInstanceInformation = (input: DescribeInstanceInformationCommandInput): Promise<DescribeInstanceInformationCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeInstanceInformationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstancePatchStates'*/
    export const nativeSSMDescribeInstancePatchStates = (input: DescribeInstancePatchStatesCommandInput): Promise<DescribeInstancePatchStatesCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeInstancePatchStatesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstancePatchStatesForPatchGroup'*/
    export const nativeSSMDescribeInstancePatchStatesForPatchGroup = (input: DescribeInstancePatchStatesForPatchGroupCommandInput): Promise<DescribeInstancePatchStatesForPatchGroupCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeInstancePatchStatesForPatchGroupCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInstancePatches'*/
    export const nativeSSMDescribeInstancePatches = (input: DescribeInstancePatchesCommandInput): Promise<DescribeInstancePatchesCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeInstancePatchesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeInventoryDeletions'*/
    export const nativeSSMDescribeInventoryDeletions = (input: DescribeInventoryDeletionsCommandInput): Promise<DescribeInventoryDeletionsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeInventoryDeletionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowExecutionTaskInvocations'*/
    export const nativeSSMDescribeMaintenanceWindowExecutionTaskInvocations = (input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput): Promise<DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeMaintenanceWindowExecutionTaskInvocationsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowExecutionTasks'*/
    export const nativeSSMDescribeMaintenanceWindowExecutionTasks = (input: DescribeMaintenanceWindowExecutionTasksCommandInput): Promise<DescribeMaintenanceWindowExecutionTasksCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeMaintenanceWindowExecutionTasksCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowExecutions'*/
    export const nativeSSMDescribeMaintenanceWindowExecutions = (input: DescribeMaintenanceWindowExecutionsCommandInput): Promise<DescribeMaintenanceWindowExecutionsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeMaintenanceWindowExecutionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowSchedule'*/
    export const nativeSSMDescribeMaintenanceWindowSchedule = (input: DescribeMaintenanceWindowScheduleCommandInput): Promise<DescribeMaintenanceWindowScheduleCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeMaintenanceWindowScheduleCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowTargets'*/
    export const nativeSSMDescribeMaintenanceWindowTargets = (input: DescribeMaintenanceWindowTargetsCommandInput): Promise<DescribeMaintenanceWindowTargetsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeMaintenanceWindowTargetsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowTasks'*/
    export const nativeSSMDescribeMaintenanceWindowTasks = (input: DescribeMaintenanceWindowTasksCommandInput): Promise<DescribeMaintenanceWindowTasksCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeMaintenanceWindowTasksCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindows'*/
    export const nativeSSMDescribeMaintenanceWindows = (input: DescribeMaintenanceWindowsCommandInput): Promise<DescribeMaintenanceWindowsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeMaintenanceWindowsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeMaintenanceWindowsForTarget'*/
    export const nativeSSMDescribeMaintenanceWindowsForTarget = (input: DescribeMaintenanceWindowsForTargetCommandInput): Promise<DescribeMaintenanceWindowsForTargetCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeMaintenanceWindowsForTargetCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeOpsItems'*/
    export const nativeSSMDescribeOpsItems = (input: DescribeOpsItemsCommandInput): Promise<DescribeOpsItemsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeOpsItemsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeParameters'*/
    export const nativeSSMDescribeParameters = (input: DescribeParametersCommandInput): Promise<DescribeParametersCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeParametersCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describePatchBaselines'*/
    export const nativeSSMDescribePatchBaselines = (input: DescribePatchBaselinesCommandInput): Promise<DescribePatchBaselinesCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribePatchBaselinesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describePatchGroupState'*/
    export const nativeSSMDescribePatchGroupState = (input: DescribePatchGroupStateCommandInput): Promise<DescribePatchGroupStateCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribePatchGroupStateCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describePatchGroups'*/
    export const nativeSSMDescribePatchGroups = (input: DescribePatchGroupsCommandInput): Promise<DescribePatchGroupsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribePatchGroupsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describePatchProperties'*/
    export const nativeSSMDescribePatchProperties = (input: DescribePatchPropertiesCommandInput): Promise<DescribePatchPropertiesCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribePatchPropertiesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:describeSessions'*/
    export const nativeSSMDescribeSessions = (input: DescribeSessionsCommandInput): Promise<DescribeSessionsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DescribeSessionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:disassociateOpsItemRelatedItem'*/
    export const nativeSSMDisassociateOpsItemRelatedItem = (input: DisassociateOpsItemRelatedItemCommandInput): Promise<DisassociateOpsItemRelatedItemCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new DisassociateOpsItemRelatedItemCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getAutomationExecution'*/
    export const nativeSSMGetAutomationExecution = (input: GetAutomationExecutionCommandInput): Promise<GetAutomationExecutionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetAutomationExecutionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getCalendarState'*/
    export const nativeSSMGetCalendarState = (input: GetCalendarStateCommandInput): Promise<GetCalendarStateCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetCalendarStateCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getCommandInvocation'*/
    export const nativeSSMGetCommandInvocation = (input: GetCommandInvocationCommandInput): Promise<GetCommandInvocationCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetCommandInvocationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getConnectionStatus'*/
    export const nativeSSMGetConnectionStatus = (input: GetConnectionStatusCommandInput): Promise<GetConnectionStatusCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetConnectionStatusCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getDefaultPatchBaseline'*/
    export const nativeSSMGetDefaultPatchBaseline = (input: GetDefaultPatchBaselineCommandInput): Promise<GetDefaultPatchBaselineCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetDefaultPatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getDeployablePatchSnapshotForInstance'*/
    export const nativeSSMGetDeployablePatchSnapshotForInstance = (input: GetDeployablePatchSnapshotForInstanceCommandInput): Promise<GetDeployablePatchSnapshotForInstanceCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetDeployablePatchSnapshotForInstanceCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getDocument'*/
    export const nativeSSMGetDocument = (input: GetDocumentCommandInput): Promise<GetDocumentCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetDocumentCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getInventory'*/
    export const nativeSSMGetInventory = (input: GetInventoryCommandInput): Promise<GetInventoryCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetInventoryCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getInventorySchema'*/
    export const nativeSSMGetInventorySchema = (input: GetInventorySchemaCommandInput): Promise<GetInventorySchemaCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetInventorySchemaCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindow'*/
    export const nativeSSMGetMaintenanceWindow = (input: GetMaintenanceWindowCommandInput): Promise<GetMaintenanceWindowCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindowExecution'*/
    export const nativeSSMGetMaintenanceWindowExecution = (input: GetMaintenanceWindowExecutionCommandInput): Promise<GetMaintenanceWindowExecutionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetMaintenanceWindowExecutionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindowExecutionTask'*/
    export const nativeSSMGetMaintenanceWindowExecutionTask = (input: GetMaintenanceWindowExecutionTaskCommandInput): Promise<GetMaintenanceWindowExecutionTaskCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetMaintenanceWindowExecutionTaskCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindowExecutionTaskInvocation'*/
    export const nativeSSMGetMaintenanceWindowExecutionTaskInvocation = (input: GetMaintenanceWindowExecutionTaskInvocationCommandInput): Promise<GetMaintenanceWindowExecutionTaskInvocationCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetMaintenanceWindowExecutionTaskInvocationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getMaintenanceWindowTask'*/
    export const nativeSSMGetMaintenanceWindowTask = (input: GetMaintenanceWindowTaskCommandInput): Promise<GetMaintenanceWindowTaskCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetMaintenanceWindowTaskCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getOpsItem'*/
    export const nativeSSMGetOpsItem = (input: GetOpsItemCommandInput): Promise<GetOpsItemCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetOpsItemCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getOpsMetadata'*/
    export const nativeSSMGetOpsMetadata = (input: GetOpsMetadataCommandInput): Promise<GetOpsMetadataCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetOpsMetadataCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getOpsSummary'*/
    export const nativeSSMGetOpsSummary = (input: GetOpsSummaryCommandInput): Promise<GetOpsSummaryCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetOpsSummaryCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getParameter'*/
    export const nativeSSMGetParameter = (input: GetParameterCommandInput): Promise<GetParameterCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetParameterCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getParameterHistory'*/
    export const nativeSSMGetParameterHistory = (input: GetParameterHistoryCommandInput): Promise<GetParameterHistoryCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetParameterHistoryCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getParameters'*/
    export const nativeSSMGetParameters = (input: GetParametersCommandInput): Promise<GetParametersCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetParametersCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getParametersByPath'*/
    export const nativeSSMGetParametersByPath = (input: GetParametersByPathCommandInput): Promise<GetParametersByPathCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetParametersByPathCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getPatchBaseline'*/
    export const nativeSSMGetPatchBaseline = (input: GetPatchBaselineCommandInput): Promise<GetPatchBaselineCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetPatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getPatchBaselineForPatchGroup'*/
    export const nativeSSMGetPatchBaselineForPatchGroup = (input: GetPatchBaselineForPatchGroupCommandInput): Promise<GetPatchBaselineForPatchGroupCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetPatchBaselineForPatchGroupCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:getServiceSetting'*/
    export const nativeSSMGetServiceSetting = (input: GetServiceSettingCommandInput): Promise<GetServiceSettingCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new GetServiceSettingCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:labelParameterVersion'*/
    export const nativeSSMLabelParameterVersion = (input: LabelParameterVersionCommandInput): Promise<LabelParameterVersionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new LabelParameterVersionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listAssociationVersions'*/
    export const nativeSSMListAssociationVersions = (input: ListAssociationVersionsCommandInput): Promise<ListAssociationVersionsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListAssociationVersionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listAssociations'*/
    export const nativeSSMListAssociations = (input: ListAssociationsCommandInput): Promise<ListAssociationsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListAssociationsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listCommandInvocations'*/
    export const nativeSSMListCommandInvocations = (input: ListCommandInvocationsCommandInput): Promise<ListCommandInvocationsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListCommandInvocationsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listCommands'*/
    export const nativeSSMListCommands = (input: ListCommandsCommandInput): Promise<ListCommandsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListCommandsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listComplianceItems'*/
    export const nativeSSMListComplianceItems = (input: ListComplianceItemsCommandInput): Promise<ListComplianceItemsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListComplianceItemsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listComplianceSummaries'*/
    export const nativeSSMListComplianceSummaries = (input: ListComplianceSummariesCommandInput): Promise<ListComplianceSummariesCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListComplianceSummariesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listDocumentMetadataHistory'*/
    export const nativeSSMListDocumentMetadataHistory = (input: ListDocumentMetadataHistoryCommandInput): Promise<ListDocumentMetadataHistoryCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListDocumentMetadataHistoryCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listDocumentVersions'*/
    export const nativeSSMListDocumentVersions = (input: ListDocumentVersionsCommandInput): Promise<ListDocumentVersionsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListDocumentVersionsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listDocuments'*/
    export const nativeSSMListDocuments = (input: ListDocumentsCommandInput): Promise<ListDocumentsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListDocumentsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listInventoryEntries'*/
    export const nativeSSMListInventoryEntries = (input: ListInventoryEntriesCommandInput): Promise<ListInventoryEntriesCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListInventoryEntriesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listOpsItemEvents'*/
    export const nativeSSMListOpsItemEvents = (input: ListOpsItemEventsCommandInput): Promise<ListOpsItemEventsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListOpsItemEventsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listOpsItemRelatedItems'*/
    export const nativeSSMListOpsItemRelatedItems = (input: ListOpsItemRelatedItemsCommandInput): Promise<ListOpsItemRelatedItemsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListOpsItemRelatedItemsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listOpsMetadata'*/
    export const nativeSSMListOpsMetadata = (input: ListOpsMetadataCommandInput): Promise<ListOpsMetadataCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListOpsMetadataCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listResourceComplianceSummaries'*/
    export const nativeSSMListResourceComplianceSummaries = (input: ListResourceComplianceSummariesCommandInput): Promise<ListResourceComplianceSummariesCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListResourceComplianceSummariesCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listResourceDataSync'*/
    export const nativeSSMListResourceDataSync = (input: ListResourceDataSyncCommandInput): Promise<ListResourceDataSyncCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListResourceDataSyncCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:listTagsForResource'*/
    export const nativeSSMListTagsForResource = (input: ListTagsForResourceCommandInput): Promise<ListTagsForResourceCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ListTagsForResourceCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:modifyDocumentPermission'*/
    export const nativeSSMModifyDocumentPermission = (input: ModifyDocumentPermissionCommandInput): Promise<ModifyDocumentPermissionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ModifyDocumentPermissionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:putComplianceItems'*/
    export const nativeSSMPutComplianceItems = (input: PutComplianceItemsCommandInput): Promise<PutComplianceItemsCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new PutComplianceItemsCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:putInventory'*/
    export const nativeSSMPutInventory = (input: PutInventoryCommandInput): Promise<PutInventoryCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new PutInventoryCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:putParameter'*/
    export const nativeSSMPutParameter = (input: PutParameterCommandInput): Promise<PutParameterCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new PutParameterCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:registerDefaultPatchBaseline'*/
    export const nativeSSMRegisterDefaultPatchBaseline = (input: RegisterDefaultPatchBaselineCommandInput): Promise<RegisterDefaultPatchBaselineCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new RegisterDefaultPatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:registerPatchBaselineForPatchGroup'*/
    export const nativeSSMRegisterPatchBaselineForPatchGroup = (input: RegisterPatchBaselineForPatchGroupCommandInput): Promise<RegisterPatchBaselineForPatchGroupCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new RegisterPatchBaselineForPatchGroupCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:registerTargetWithMaintenanceWindow'*/
    export const nativeSSMRegisterTargetWithMaintenanceWindow = (input: RegisterTargetWithMaintenanceWindowCommandInput): Promise<RegisterTargetWithMaintenanceWindowCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new RegisterTargetWithMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:registerTaskWithMaintenanceWindow'*/
    export const nativeSSMRegisterTaskWithMaintenanceWindow = (input: RegisterTaskWithMaintenanceWindowCommandInput): Promise<RegisterTaskWithMaintenanceWindowCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new RegisterTaskWithMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:removeTagsFromResource'*/
    export const nativeSSMRemoveTagsFromResource = (input: RemoveTagsFromResourceCommandInput): Promise<RemoveTagsFromResourceCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new RemoveTagsFromResourceCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:resetServiceSetting'*/
    export const nativeSSMResetServiceSetting = (input: ResetServiceSettingCommandInput): Promise<ResetServiceSettingCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ResetServiceSettingCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:resumeSession'*/
    export const nativeSSMResumeSession = (input: ResumeSessionCommandInput): Promise<ResumeSessionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new ResumeSessionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:sendAutomationSignal'*/
    export const nativeSSMSendAutomationSignal = (input: SendAutomationSignalCommandInput): Promise<SendAutomationSignalCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new SendAutomationSignalCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:sendCommand'*/
    export const nativeSSMSendCommand = (input: SendCommandCommandInput): Promise<SendCommandCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new SendCommandCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:startAssociationsOnce'*/
    export const nativeSSMStartAssociationsOnce = (input: StartAssociationsOnceCommandInput): Promise<StartAssociationsOnceCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new StartAssociationsOnceCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:startAutomationExecution'*/
    export const nativeSSMStartAutomationExecution = (input: StartAutomationExecutionCommandInput): Promise<StartAutomationExecutionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new StartAutomationExecutionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:startChangeRequestExecution'*/
    export const nativeSSMStartChangeRequestExecution = (input: StartChangeRequestExecutionCommandInput): Promise<StartChangeRequestExecutionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new StartChangeRequestExecutionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:startSession'*/
    export const nativeSSMStartSession = (input: StartSessionCommandInput): Promise<StartSessionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new StartSessionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:stopAutomationExecution'*/
    export const nativeSSMStopAutomationExecution = (input: StopAutomationExecutionCommandInput): Promise<StopAutomationExecutionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new StopAutomationExecutionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:terminateSession'*/
    export const nativeSSMTerminateSession = (input: TerminateSessionCommandInput): Promise<TerminateSessionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new TerminateSessionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:unlabelParameterVersion'*/
    export const nativeSSMUnlabelParameterVersion = (input: UnlabelParameterVersionCommandInput): Promise<UnlabelParameterVersionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UnlabelParameterVersionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateAssociation'*/
    export const nativeSSMUpdateAssociation = (input: UpdateAssociationCommandInput): Promise<UpdateAssociationCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateAssociationCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateAssociationStatus'*/
    export const nativeSSMUpdateAssociationStatus = (input: UpdateAssociationStatusCommandInput): Promise<UpdateAssociationStatusCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateAssociationStatusCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateDocument'*/
    export const nativeSSMUpdateDocument = (input: UpdateDocumentCommandInput): Promise<UpdateDocumentCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateDocumentCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateDocumentDefaultVersion'*/
    export const nativeSSMUpdateDocumentDefaultVersion = (input: UpdateDocumentDefaultVersionCommandInput): Promise<UpdateDocumentDefaultVersionCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateDocumentDefaultVersionCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateDocumentMetadata'*/
    export const nativeSSMUpdateDocumentMetadata = (input: UpdateDocumentMetadataCommandInput): Promise<UpdateDocumentMetadataCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateDocumentMetadataCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateMaintenanceWindow'*/
    export const nativeSSMUpdateMaintenanceWindow = (input: UpdateMaintenanceWindowCommandInput): Promise<UpdateMaintenanceWindowCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateMaintenanceWindowCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateMaintenanceWindowTarget'*/
    export const nativeSSMUpdateMaintenanceWindowTarget = (input: UpdateMaintenanceWindowTargetCommandInput): Promise<UpdateMaintenanceWindowTargetCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateMaintenanceWindowTargetCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateMaintenanceWindowTask'*/
    export const nativeSSMUpdateMaintenanceWindowTask = (input: UpdateMaintenanceWindowTaskCommandInput): Promise<UpdateMaintenanceWindowTaskCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateMaintenanceWindowTaskCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateManagedInstanceRole'*/
    export const nativeSSMUpdateManagedInstanceRole = (input: UpdateManagedInstanceRoleCommandInput): Promise<UpdateManagedInstanceRoleCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateManagedInstanceRoleCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateOpsItem'*/
    export const nativeSSMUpdateOpsItem = (input: UpdateOpsItemCommandInput): Promise<UpdateOpsItemCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateOpsItemCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateOpsMetadata'*/
    export const nativeSSMUpdateOpsMetadata = (input: UpdateOpsMetadataCommandInput): Promise<UpdateOpsMetadataCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateOpsMetadataCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updatePatchBaseline'*/
    export const nativeSSMUpdatePatchBaseline = (input: UpdatePatchBaselineCommandInput): Promise<UpdatePatchBaselineCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdatePatchBaselineCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateResourceDataSync'*/
    export const nativeSSMUpdateResourceDataSync = (input: UpdateResourceDataSyncCommandInput): Promise<UpdateResourceDataSyncCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateResourceDataSyncCommand(input);
        return ssm.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:ssm:updateServiceSetting'*/
    export const nativeSSMUpdateServiceSetting = (input: UpdateServiceSettingCommandInput): Promise<UpdateServiceSettingCommandOutput> => {
        const ssm = new SSMClient({});
        const command = new UpdateServiceSettingCommand(input);
        return ssm.send(command);
    };
}

