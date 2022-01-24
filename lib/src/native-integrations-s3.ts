import { S3Client } from "@aws-sdk/client-s3";
import { AbortMultipartUploadCommandInput, AbortMultipartUploadCommandOutput, AbortMultipartUploadCommand } from "@aws-sdk/client-s3";
import { CompleteMultipartUploadCommandInput, CompleteMultipartUploadCommandOutput, CompleteMultipartUploadCommand } from "@aws-sdk/client-s3";
import { CopyObjectCommandInput, CopyObjectCommandOutput, CopyObjectCommand } from "@aws-sdk/client-s3";
import { CreateBucketCommandInput, CreateBucketCommandOutput, CreateBucketCommand } from "@aws-sdk/client-s3";
import { CreateMultipartUploadCommandInput, CreateMultipartUploadCommandOutput, CreateMultipartUploadCommand } from "@aws-sdk/client-s3";
import { DeleteBucketCommandInput, DeleteBucketCommandOutput, DeleteBucketCommand } from "@aws-sdk/client-s3";
import { DeleteBucketAnalyticsConfigurationCommandInput, DeleteBucketAnalyticsConfigurationCommandOutput, DeleteBucketAnalyticsConfigurationCommand } from "@aws-sdk/client-s3";
import { DeleteBucketCorsCommandInput, DeleteBucketCorsCommandOutput, DeleteBucketCorsCommand } from "@aws-sdk/client-s3";
import { DeleteBucketEncryptionCommandInput, DeleteBucketEncryptionCommandOutput, DeleteBucketEncryptionCommand } from "@aws-sdk/client-s3";
import { DeleteBucketIntelligentTieringConfigurationCommandInput, DeleteBucketIntelligentTieringConfigurationCommandOutput, DeleteBucketIntelligentTieringConfigurationCommand } from "@aws-sdk/client-s3";
import { DeleteBucketInventoryConfigurationCommandInput, DeleteBucketInventoryConfigurationCommandOutput, DeleteBucketInventoryConfigurationCommand } from "@aws-sdk/client-s3";
import { DeleteBucketLifecycleCommandInput, DeleteBucketLifecycleCommandOutput, DeleteBucketLifecycleCommand } from "@aws-sdk/client-s3";
import { DeleteBucketMetricsConfigurationCommandInput, DeleteBucketMetricsConfigurationCommandOutput, DeleteBucketMetricsConfigurationCommand } from "@aws-sdk/client-s3";
import { DeleteBucketOwnershipControlsCommandInput, DeleteBucketOwnershipControlsCommandOutput, DeleteBucketOwnershipControlsCommand } from "@aws-sdk/client-s3";
import { DeleteBucketPolicyCommandInput, DeleteBucketPolicyCommandOutput, DeleteBucketPolicyCommand } from "@aws-sdk/client-s3";
import { DeleteBucketReplicationCommandInput, DeleteBucketReplicationCommandOutput, DeleteBucketReplicationCommand } from "@aws-sdk/client-s3";
import { DeleteBucketTaggingCommandInput, DeleteBucketTaggingCommandOutput, DeleteBucketTaggingCommand } from "@aws-sdk/client-s3";
import { DeleteBucketWebsiteCommandInput, DeleteBucketWebsiteCommandOutput, DeleteBucketWebsiteCommand } from "@aws-sdk/client-s3";
import { DeleteObjectCommandInput, DeleteObjectCommandOutput, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { DeleteObjectTaggingCommandInput, DeleteObjectTaggingCommandOutput, DeleteObjectTaggingCommand } from "@aws-sdk/client-s3";
import { DeleteObjectsCommandInput, DeleteObjectsCommandOutput, DeleteObjectsCommand } from "@aws-sdk/client-s3";
import { DeletePublicAccessBlockCommandInput, DeletePublicAccessBlockCommandOutput, DeletePublicAccessBlockCommand } from "@aws-sdk/client-s3";
import { GetBucketAccelerateConfigurationCommandInput, GetBucketAccelerateConfigurationCommandOutput, GetBucketAccelerateConfigurationCommand } from "@aws-sdk/client-s3";
import { GetBucketAclCommandInput, GetBucketAclCommandOutput, GetBucketAclCommand } from "@aws-sdk/client-s3";
import { GetBucketAnalyticsConfigurationCommandInput, GetBucketAnalyticsConfigurationCommandOutput, GetBucketAnalyticsConfigurationCommand } from "@aws-sdk/client-s3";
import { GetBucketCorsCommandInput, GetBucketCorsCommandOutput, GetBucketCorsCommand } from "@aws-sdk/client-s3";
import { GetBucketEncryptionCommandInput, GetBucketEncryptionCommandOutput, GetBucketEncryptionCommand } from "@aws-sdk/client-s3";
import { GetBucketIntelligentTieringConfigurationCommandInput, GetBucketIntelligentTieringConfigurationCommandOutput, GetBucketIntelligentTieringConfigurationCommand } from "@aws-sdk/client-s3";
import { GetBucketInventoryConfigurationCommandInput, GetBucketInventoryConfigurationCommandOutput, GetBucketInventoryConfigurationCommand } from "@aws-sdk/client-s3";
import { GetBucketLifecycleConfigurationCommandInput, GetBucketLifecycleConfigurationCommandOutput, GetBucketLifecycleConfigurationCommand } from "@aws-sdk/client-s3";
import { GetBucketLocationCommandInput, GetBucketLocationCommandOutput, GetBucketLocationCommand } from "@aws-sdk/client-s3";
import { GetBucketLoggingCommandInput, GetBucketLoggingCommandOutput, GetBucketLoggingCommand } from "@aws-sdk/client-s3";
import { GetBucketMetricsConfigurationCommandInput, GetBucketMetricsConfigurationCommandOutput, GetBucketMetricsConfigurationCommand } from "@aws-sdk/client-s3";
import { GetBucketNotificationConfigurationCommandInput, GetBucketNotificationConfigurationCommandOutput, GetBucketNotificationConfigurationCommand } from "@aws-sdk/client-s3";
import { GetBucketOwnershipControlsCommandInput, GetBucketOwnershipControlsCommandOutput, GetBucketOwnershipControlsCommand } from "@aws-sdk/client-s3";
import { GetBucketPolicyCommandInput, GetBucketPolicyCommandOutput, GetBucketPolicyCommand } from "@aws-sdk/client-s3";
import { GetBucketPolicyStatusCommandInput, GetBucketPolicyStatusCommandOutput, GetBucketPolicyStatusCommand } from "@aws-sdk/client-s3";
import { GetBucketReplicationCommandInput, GetBucketReplicationCommandOutput, GetBucketReplicationCommand } from "@aws-sdk/client-s3";
import { GetBucketRequestPaymentCommandInput, GetBucketRequestPaymentCommandOutput, GetBucketRequestPaymentCommand } from "@aws-sdk/client-s3";
import { GetBucketTaggingCommandInput, GetBucketTaggingCommandOutput, GetBucketTaggingCommand } from "@aws-sdk/client-s3";
import { GetBucketVersioningCommandInput, GetBucketVersioningCommandOutput, GetBucketVersioningCommand } from "@aws-sdk/client-s3";
import { GetBucketWebsiteCommandInput, GetBucketWebsiteCommandOutput, GetBucketWebsiteCommand } from "@aws-sdk/client-s3";
import { GetObjectCommandInput, GetObjectCommandOutput, GetObjectCommand } from "@aws-sdk/client-s3";
import { GetObjectAclCommandInput, GetObjectAclCommandOutput, GetObjectAclCommand } from "@aws-sdk/client-s3";
import { GetObjectLegalHoldCommandInput, GetObjectLegalHoldCommandOutput, GetObjectLegalHoldCommand } from "@aws-sdk/client-s3";
import { GetObjectLockConfigurationCommandInput, GetObjectLockConfigurationCommandOutput, GetObjectLockConfigurationCommand } from "@aws-sdk/client-s3";
import { GetObjectRetentionCommandInput, GetObjectRetentionCommandOutput, GetObjectRetentionCommand } from "@aws-sdk/client-s3";
import { GetObjectTaggingCommandInput, GetObjectTaggingCommandOutput, GetObjectTaggingCommand } from "@aws-sdk/client-s3";
import { GetObjectTorrentCommandInput, GetObjectTorrentCommandOutput, GetObjectTorrentCommand } from "@aws-sdk/client-s3";
import { GetPublicAccessBlockCommandInput, GetPublicAccessBlockCommandOutput, GetPublicAccessBlockCommand } from "@aws-sdk/client-s3";
import { HeadBucketCommandInput, HeadBucketCommandOutput, HeadBucketCommand } from "@aws-sdk/client-s3";
import { HeadObjectCommandInput, HeadObjectCommandOutput, HeadObjectCommand } from "@aws-sdk/client-s3";
import { ListBucketAnalyticsConfigurationsCommandInput, ListBucketAnalyticsConfigurationsCommandOutput, ListBucketAnalyticsConfigurationsCommand } from "@aws-sdk/client-s3";
import { ListBucketIntelligentTieringConfigurationsCommandInput, ListBucketIntelligentTieringConfigurationsCommandOutput, ListBucketIntelligentTieringConfigurationsCommand } from "@aws-sdk/client-s3";
import { ListBucketInventoryConfigurationsCommandInput, ListBucketInventoryConfigurationsCommandOutput, ListBucketInventoryConfigurationsCommand } from "@aws-sdk/client-s3";
import { ListBucketMetricsConfigurationsCommandInput, ListBucketMetricsConfigurationsCommandOutput, ListBucketMetricsConfigurationsCommand } from "@aws-sdk/client-s3";
import { ListBucketsCommandInput, ListBucketsCommandOutput, ListBucketsCommand } from "@aws-sdk/client-s3";
import { ListMultipartUploadsCommandInput, ListMultipartUploadsCommandOutput, ListMultipartUploadsCommand } from "@aws-sdk/client-s3";
import { ListObjectVersionsCommandInput, ListObjectVersionsCommandOutput, ListObjectVersionsCommand } from "@aws-sdk/client-s3";
import { ListObjectsCommandInput, ListObjectsCommandOutput, ListObjectsCommand } from "@aws-sdk/client-s3";
import { ListObjectsV2CommandInput, ListObjectsV2CommandOutput, ListObjectsV2Command } from "@aws-sdk/client-s3";
import { ListPartsCommandInput, ListPartsCommandOutput, ListPartsCommand } from "@aws-sdk/client-s3";
import { PutBucketAccelerateConfigurationCommandInput, PutBucketAccelerateConfigurationCommandOutput, PutBucketAccelerateConfigurationCommand } from "@aws-sdk/client-s3";
import { PutBucketAclCommandInput, PutBucketAclCommandOutput, PutBucketAclCommand } from "@aws-sdk/client-s3";
import { PutBucketAnalyticsConfigurationCommandInput, PutBucketAnalyticsConfigurationCommandOutput, PutBucketAnalyticsConfigurationCommand } from "@aws-sdk/client-s3";
import { PutBucketCorsCommandInput, PutBucketCorsCommandOutput, PutBucketCorsCommand } from "@aws-sdk/client-s3";
import { PutBucketEncryptionCommandInput, PutBucketEncryptionCommandOutput, PutBucketEncryptionCommand } from "@aws-sdk/client-s3";
import { PutBucketIntelligentTieringConfigurationCommandInput, PutBucketIntelligentTieringConfigurationCommandOutput, PutBucketIntelligentTieringConfigurationCommand } from "@aws-sdk/client-s3";
import { PutBucketInventoryConfigurationCommandInput, PutBucketInventoryConfigurationCommandOutput, PutBucketInventoryConfigurationCommand } from "@aws-sdk/client-s3";
import { PutBucketLifecycleConfigurationCommandInput, PutBucketLifecycleConfigurationCommandOutput, PutBucketLifecycleConfigurationCommand } from "@aws-sdk/client-s3";
import { PutBucketLoggingCommandInput, PutBucketLoggingCommandOutput, PutBucketLoggingCommand } from "@aws-sdk/client-s3";
import { PutBucketMetricsConfigurationCommandInput, PutBucketMetricsConfigurationCommandOutput, PutBucketMetricsConfigurationCommand } from "@aws-sdk/client-s3";
import { PutBucketNotificationConfigurationCommandInput, PutBucketNotificationConfigurationCommandOutput, PutBucketNotificationConfigurationCommand } from "@aws-sdk/client-s3";
import { PutBucketOwnershipControlsCommandInput, PutBucketOwnershipControlsCommandOutput, PutBucketOwnershipControlsCommand } from "@aws-sdk/client-s3";
import { PutBucketPolicyCommandInput, PutBucketPolicyCommandOutput, PutBucketPolicyCommand } from "@aws-sdk/client-s3";
import { PutBucketReplicationCommandInput, PutBucketReplicationCommandOutput, PutBucketReplicationCommand } from "@aws-sdk/client-s3";
import { PutBucketRequestPaymentCommandInput, PutBucketRequestPaymentCommandOutput, PutBucketRequestPaymentCommand } from "@aws-sdk/client-s3";
import { PutBucketTaggingCommandInput, PutBucketTaggingCommandOutput, PutBucketTaggingCommand } from "@aws-sdk/client-s3";
import { PutBucketVersioningCommandInput, PutBucketVersioningCommandOutput, PutBucketVersioningCommand } from "@aws-sdk/client-s3";
import { PutBucketWebsiteCommandInput, PutBucketWebsiteCommandOutput, PutBucketWebsiteCommand } from "@aws-sdk/client-s3";
import { PutObjectCommandInput, PutObjectCommandOutput, PutObjectCommand } from "@aws-sdk/client-s3";
import { PutObjectAclCommandInput, PutObjectAclCommandOutput, PutObjectAclCommand } from "@aws-sdk/client-s3";
import { PutObjectLegalHoldCommandInput, PutObjectLegalHoldCommandOutput, PutObjectLegalHoldCommand } from "@aws-sdk/client-s3";
import { PutObjectLockConfigurationCommandInput, PutObjectLockConfigurationCommandOutput, PutObjectLockConfigurationCommand } from "@aws-sdk/client-s3";
import { PutObjectRetentionCommandInput, PutObjectRetentionCommandOutput, PutObjectRetentionCommand } from "@aws-sdk/client-s3";
import { PutObjectTaggingCommandInput, PutObjectTaggingCommandOutput, PutObjectTaggingCommand } from "@aws-sdk/client-s3";
import { PutPublicAccessBlockCommandInput, PutPublicAccessBlockCommandOutput, PutPublicAccessBlockCommand } from "@aws-sdk/client-s3";
import { RestoreObjectCommandInput, RestoreObjectCommandOutput, RestoreObjectCommand } from "@aws-sdk/client-s3";
import { UploadPartCommandInput, UploadPartCommandOutput, UploadPartCommand } from "@aws-sdk/client-s3";
import { UploadPartCopyCommandInput, UploadPartCopyCommandOutput, UploadPartCopyCommand } from "@aws-sdk/client-s3";
import { WriteGetObjectResponseCommandInput, WriteGetObjectResponseCommandOutput, WriteGetObjectResponseCommand } from "@aws-sdk/client-s3";


export namespace ASL {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:abortMultipartUpload'*/
    export const nativeS3AbortMultipartUpload = (input: AbortMultipartUploadCommandInput): Promise<AbortMultipartUploadCommandOutput> => {
        const s3 = new S3Client({});
        const command = new AbortMultipartUploadCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:completeMultipartUpload'*/
    export const nativeS3CompleteMultipartUpload = (input: CompleteMultipartUploadCommandInput): Promise<CompleteMultipartUploadCommandOutput> => {
        const s3 = new S3Client({});
        const command = new CompleteMultipartUploadCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:copyObject'*/
    export const nativeS3CopyObject = (input: CopyObjectCommandInput): Promise<CopyObjectCommandOutput> => {
        const s3 = new S3Client({});
        const command = new CopyObjectCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:createBucket'*/
    export const nativeS3CreateBucket = (input: CreateBucketCommandInput): Promise<CreateBucketCommandOutput> => {
        const s3 = new S3Client({});
        const command = new CreateBucketCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:createMultipartUpload'*/
    export const nativeS3CreateMultipartUpload = (input: CreateMultipartUploadCommandInput): Promise<CreateMultipartUploadCommandOutput> => {
        const s3 = new S3Client({});
        const command = new CreateMultipartUploadCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucket'*/
    export const nativeS3DeleteBucket = (input: DeleteBucketCommandInput): Promise<DeleteBucketCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketAnalyticsConfiguration'*/
    export const nativeS3DeleteBucketAnalyticsConfiguration = (input: DeleteBucketAnalyticsConfigurationCommandInput): Promise<DeleteBucketAnalyticsConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketAnalyticsConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketCors'*/
    export const nativeS3DeleteBucketCors = (input: DeleteBucketCorsCommandInput): Promise<DeleteBucketCorsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketCorsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketEncryption'*/
    export const nativeS3DeleteBucketEncryption = (input: DeleteBucketEncryptionCommandInput): Promise<DeleteBucketEncryptionCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketEncryptionCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketIntelligentTieringConfiguration'*/
    export const nativeS3DeleteBucketIntelligentTieringConfiguration = (input: DeleteBucketIntelligentTieringConfigurationCommandInput): Promise<DeleteBucketIntelligentTieringConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketIntelligentTieringConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketInventoryConfiguration'*/
    export const nativeS3DeleteBucketInventoryConfiguration = (input: DeleteBucketInventoryConfigurationCommandInput): Promise<DeleteBucketInventoryConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketInventoryConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketLifecycle'*/
    export const nativeS3DeleteBucketLifecycle = (input: DeleteBucketLifecycleCommandInput): Promise<DeleteBucketLifecycleCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketLifecycleCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketMetricsConfiguration'*/
    export const nativeS3DeleteBucketMetricsConfiguration = (input: DeleteBucketMetricsConfigurationCommandInput): Promise<DeleteBucketMetricsConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketMetricsConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketOwnershipControls'*/
    export const nativeS3DeleteBucketOwnershipControls = (input: DeleteBucketOwnershipControlsCommandInput): Promise<DeleteBucketOwnershipControlsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketOwnershipControlsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketPolicy'*/
    export const nativeS3DeleteBucketPolicy = (input: DeleteBucketPolicyCommandInput): Promise<DeleteBucketPolicyCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketPolicyCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketReplication'*/
    export const nativeS3DeleteBucketReplication = (input: DeleteBucketReplicationCommandInput): Promise<DeleteBucketReplicationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketReplicationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketTagging'*/
    export const nativeS3DeleteBucketTagging = (input: DeleteBucketTaggingCommandInput): Promise<DeleteBucketTaggingCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketTaggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketWebsite'*/
    export const nativeS3DeleteBucketWebsite = (input: DeleteBucketWebsiteCommandInput): Promise<DeleteBucketWebsiteCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteBucketWebsiteCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteObject'*/
    export const nativeS3DeleteObject = (input: DeleteObjectCommandInput): Promise<DeleteObjectCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteObjectCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteObjectTagging'*/
    export const nativeS3DeleteObjectTagging = (input: DeleteObjectTaggingCommandInput): Promise<DeleteObjectTaggingCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteObjectTaggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteObjects'*/
    export const nativeS3DeleteObjects = (input: DeleteObjectsCommandInput): Promise<DeleteObjectsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeleteObjectsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deletePublicAccessBlock'*/
    export const nativeS3DeletePublicAccessBlock = (input: DeletePublicAccessBlockCommandInput): Promise<DeletePublicAccessBlockCommandOutput> => {
        const s3 = new S3Client({});
        const command = new DeletePublicAccessBlockCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketAccelerateConfiguration'*/
    export const nativeS3GetBucketAccelerateConfiguration = (input: GetBucketAccelerateConfigurationCommandInput): Promise<GetBucketAccelerateConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketAccelerateConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketAcl'*/
    export const nativeS3GetBucketAcl = (input: GetBucketAclCommandInput): Promise<GetBucketAclCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketAclCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketAnalyticsConfiguration'*/
    export const nativeS3GetBucketAnalyticsConfiguration = (input: GetBucketAnalyticsConfigurationCommandInput): Promise<GetBucketAnalyticsConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketAnalyticsConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketCors'*/
    export const nativeS3GetBucketCors = (input: GetBucketCorsCommandInput): Promise<GetBucketCorsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketCorsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketEncryption'*/
    export const nativeS3GetBucketEncryption = (input: GetBucketEncryptionCommandInput): Promise<GetBucketEncryptionCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketEncryptionCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketIntelligentTieringConfiguration'*/
    export const nativeS3GetBucketIntelligentTieringConfiguration = (input: GetBucketIntelligentTieringConfigurationCommandInput): Promise<GetBucketIntelligentTieringConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketIntelligentTieringConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketInventoryConfiguration'*/
    export const nativeS3GetBucketInventoryConfiguration = (input: GetBucketInventoryConfigurationCommandInput): Promise<GetBucketInventoryConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketInventoryConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketLifecycleConfiguration'*/
    export const nativeS3GetBucketLifecycleConfiguration = (input: GetBucketLifecycleConfigurationCommandInput): Promise<GetBucketLifecycleConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketLifecycleConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketLocation'*/
    export const nativeS3GetBucketLocation = (input: GetBucketLocationCommandInput): Promise<GetBucketLocationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketLocationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketLogging'*/
    export const nativeS3GetBucketLogging = (input: GetBucketLoggingCommandInput): Promise<GetBucketLoggingCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketLoggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketMetricsConfiguration'*/
    export const nativeS3GetBucketMetricsConfiguration = (input: GetBucketMetricsConfigurationCommandInput): Promise<GetBucketMetricsConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketMetricsConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketNotificationConfiguration'*/
    export const nativeS3GetBucketNotificationConfiguration = (input: GetBucketNotificationConfigurationCommandInput): Promise<GetBucketNotificationConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketNotificationConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketOwnershipControls'*/
    export const nativeS3GetBucketOwnershipControls = (input: GetBucketOwnershipControlsCommandInput): Promise<GetBucketOwnershipControlsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketOwnershipControlsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketPolicy'*/
    export const nativeS3GetBucketPolicy = (input: GetBucketPolicyCommandInput): Promise<GetBucketPolicyCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketPolicyCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketPolicyStatus'*/
    export const nativeS3GetBucketPolicyStatus = (input: GetBucketPolicyStatusCommandInput): Promise<GetBucketPolicyStatusCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketPolicyStatusCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketReplication'*/
    export const nativeS3GetBucketReplication = (input: GetBucketReplicationCommandInput): Promise<GetBucketReplicationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketReplicationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketRequestPayment'*/
    export const nativeS3GetBucketRequestPayment = (input: GetBucketRequestPaymentCommandInput): Promise<GetBucketRequestPaymentCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketRequestPaymentCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketTagging'*/
    export const nativeS3GetBucketTagging = (input: GetBucketTaggingCommandInput): Promise<GetBucketTaggingCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketTaggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketVersioning'*/
    export const nativeS3GetBucketVersioning = (input: GetBucketVersioningCommandInput): Promise<GetBucketVersioningCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketVersioningCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketWebsite'*/
    export const nativeS3GetBucketWebsite = (input: GetBucketWebsiteCommandInput): Promise<GetBucketWebsiteCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetBucketWebsiteCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObject'*/
    export const nativeS3GetObject = (input: GetObjectCommandInput): Promise<GetObjectCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetObjectCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectAcl'*/
    export const nativeS3GetObjectAcl = (input: GetObjectAclCommandInput): Promise<GetObjectAclCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetObjectAclCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectLegalHold'*/
    export const nativeS3GetObjectLegalHold = (input: GetObjectLegalHoldCommandInput): Promise<GetObjectLegalHoldCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetObjectLegalHoldCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectLockConfiguration'*/
    export const nativeS3GetObjectLockConfiguration = (input: GetObjectLockConfigurationCommandInput): Promise<GetObjectLockConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetObjectLockConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectRetention'*/
    export const nativeS3GetObjectRetention = (input: GetObjectRetentionCommandInput): Promise<GetObjectRetentionCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetObjectRetentionCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectTagging'*/
    export const nativeS3GetObjectTagging = (input: GetObjectTaggingCommandInput): Promise<GetObjectTaggingCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetObjectTaggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectTorrent'*/
    export const nativeS3GetObjectTorrent = (input: GetObjectTorrentCommandInput): Promise<GetObjectTorrentCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetObjectTorrentCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getPublicAccessBlock'*/
    export const nativeS3GetPublicAccessBlock = (input: GetPublicAccessBlockCommandInput): Promise<GetPublicAccessBlockCommandOutput> => {
        const s3 = new S3Client({});
        const command = new GetPublicAccessBlockCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:headBucket'*/
    export const nativeS3HeadBucket = (input: HeadBucketCommandInput): Promise<HeadBucketCommandOutput> => {
        const s3 = new S3Client({});
        const command = new HeadBucketCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:headObject'*/
    export const nativeS3HeadObject = (input: HeadObjectCommandInput): Promise<HeadObjectCommandOutput> => {
        const s3 = new S3Client({});
        const command = new HeadObjectCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBucketAnalyticsConfigurations'*/
    export const nativeS3ListBucketAnalyticsConfigurations = (input: ListBucketAnalyticsConfigurationsCommandInput): Promise<ListBucketAnalyticsConfigurationsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new ListBucketAnalyticsConfigurationsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBucketIntelligentTieringConfigurations'*/
    export const nativeS3ListBucketIntelligentTieringConfigurations = (input: ListBucketIntelligentTieringConfigurationsCommandInput): Promise<ListBucketIntelligentTieringConfigurationsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new ListBucketIntelligentTieringConfigurationsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBucketInventoryConfigurations'*/
    export const nativeS3ListBucketInventoryConfigurations = (input: ListBucketInventoryConfigurationsCommandInput): Promise<ListBucketInventoryConfigurationsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new ListBucketInventoryConfigurationsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBucketMetricsConfigurations'*/
    export const nativeS3ListBucketMetricsConfigurations = (input: ListBucketMetricsConfigurationsCommandInput): Promise<ListBucketMetricsConfigurationsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new ListBucketMetricsConfigurationsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBuckets'*/
    export const nativeS3ListBuckets = (input: ListBucketsCommandInput): Promise<ListBucketsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new ListBucketsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listMultipartUploads'*/
    export const nativeS3ListMultipartUploads = (input: ListMultipartUploadsCommandInput): Promise<ListMultipartUploadsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new ListMultipartUploadsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listObjectVersions'*/
    export const nativeS3ListObjectVersions = (input: ListObjectVersionsCommandInput): Promise<ListObjectVersionsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new ListObjectVersionsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listObjects'*/
    export const nativeS3ListObjects = (input: ListObjectsCommandInput): Promise<ListObjectsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new ListObjectsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listObjectsV2'*/
    export const nativeS3ListObjectsV2 = (input: ListObjectsV2CommandInput): Promise<ListObjectsV2CommandOutput> => {
        const s3 = new S3Client({});
        const command = new ListObjectsV2Command(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listParts'*/
    export const nativeS3ListParts = (input: ListPartsCommandInput): Promise<ListPartsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new ListPartsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketAccelerateConfiguration'*/
    export const nativeS3PutBucketAccelerateConfiguration = (input: PutBucketAccelerateConfigurationCommandInput): Promise<PutBucketAccelerateConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketAccelerateConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketAcl'*/
    export const nativeS3PutBucketAcl = (input: PutBucketAclCommandInput): Promise<PutBucketAclCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketAclCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketAnalyticsConfiguration'*/
    export const nativeS3PutBucketAnalyticsConfiguration = (input: PutBucketAnalyticsConfigurationCommandInput): Promise<PutBucketAnalyticsConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketAnalyticsConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketCors'*/
    export const nativeS3PutBucketCors = (input: PutBucketCorsCommandInput): Promise<PutBucketCorsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketCorsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketEncryption'*/
    export const nativeS3PutBucketEncryption = (input: PutBucketEncryptionCommandInput): Promise<PutBucketEncryptionCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketEncryptionCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketIntelligentTieringConfiguration'*/
    export const nativeS3PutBucketIntelligentTieringConfiguration = (input: PutBucketIntelligentTieringConfigurationCommandInput): Promise<PutBucketIntelligentTieringConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketIntelligentTieringConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketInventoryConfiguration'*/
    export const nativeS3PutBucketInventoryConfiguration = (input: PutBucketInventoryConfigurationCommandInput): Promise<PutBucketInventoryConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketInventoryConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketLifecycleConfiguration'*/
    export const nativeS3PutBucketLifecycleConfiguration = (input: PutBucketLifecycleConfigurationCommandInput): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketLifecycleConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketLogging'*/
    export const nativeS3PutBucketLogging = (input: PutBucketLoggingCommandInput): Promise<PutBucketLoggingCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketLoggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketMetricsConfiguration'*/
    export const nativeS3PutBucketMetricsConfiguration = (input: PutBucketMetricsConfigurationCommandInput): Promise<PutBucketMetricsConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketMetricsConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketNotificationConfiguration'*/
    export const nativeS3PutBucketNotificationConfiguration = (input: PutBucketNotificationConfigurationCommandInput): Promise<PutBucketNotificationConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketNotificationConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketOwnershipControls'*/
    export const nativeS3PutBucketOwnershipControls = (input: PutBucketOwnershipControlsCommandInput): Promise<PutBucketOwnershipControlsCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketOwnershipControlsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketPolicy'*/
    export const nativeS3PutBucketPolicy = (input: PutBucketPolicyCommandInput): Promise<PutBucketPolicyCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketPolicyCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketReplication'*/
    export const nativeS3PutBucketReplication = (input: PutBucketReplicationCommandInput): Promise<PutBucketReplicationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketReplicationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketRequestPayment'*/
    export const nativeS3PutBucketRequestPayment = (input: PutBucketRequestPaymentCommandInput): Promise<PutBucketRequestPaymentCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketRequestPaymentCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketTagging'*/
    export const nativeS3PutBucketTagging = (input: PutBucketTaggingCommandInput): Promise<PutBucketTaggingCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketTaggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketVersioning'*/
    export const nativeS3PutBucketVersioning = (input: PutBucketVersioningCommandInput): Promise<PutBucketVersioningCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketVersioningCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketWebsite'*/
    export const nativeS3PutBucketWebsite = (input: PutBucketWebsiteCommandInput): Promise<PutBucketWebsiteCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutBucketWebsiteCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObject'*/
    export const nativeS3PutObject = (input: PutObjectCommandInput): Promise<PutObjectCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutObjectCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectAcl'*/
    export const nativeS3PutObjectAcl = (input: PutObjectAclCommandInput): Promise<PutObjectAclCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutObjectAclCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectLegalHold'*/
    export const nativeS3PutObjectLegalHold = (input: PutObjectLegalHoldCommandInput): Promise<PutObjectLegalHoldCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutObjectLegalHoldCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectLockConfiguration'*/
    export const nativeS3PutObjectLockConfiguration = (input: PutObjectLockConfigurationCommandInput): Promise<PutObjectLockConfigurationCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutObjectLockConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectRetention'*/
    export const nativeS3PutObjectRetention = (input: PutObjectRetentionCommandInput): Promise<PutObjectRetentionCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutObjectRetentionCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectTagging'*/
    export const nativeS3PutObjectTagging = (input: PutObjectTaggingCommandInput): Promise<PutObjectTaggingCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutObjectTaggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putPublicAccessBlock'*/
    export const nativeS3PutPublicAccessBlock = (input: PutPublicAccessBlockCommandInput): Promise<PutPublicAccessBlockCommandOutput> => {
        const s3 = new S3Client({});
        const command = new PutPublicAccessBlockCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:restoreObject'*/
    export const nativeS3RestoreObject = (input: RestoreObjectCommandInput): Promise<RestoreObjectCommandOutput> => {
        const s3 = new S3Client({});
        const command = new RestoreObjectCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:uploadPart'*/
    export const nativeS3UploadPart = (input: UploadPartCommandInput): Promise<UploadPartCommandOutput> => {
        const s3 = new S3Client({});
        const command = new UploadPartCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:uploadPartCopy'*/
    export const nativeS3UploadPartCopy = (input: UploadPartCopyCommandInput): Promise<UploadPartCopyCommandOutput> => {
        const s3 = new S3Client({});
        const command = new UploadPartCopyCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:writeGetObjectResponse'*/
    export const nativeS3WriteGetObjectResponse = (input: WriteGetObjectResponseCommandInput): Promise<WriteGetObjectResponseCommandOutput> => {
        const s3 = new S3Client({});
        const command = new WriteGetObjectResponseCommand(input);
        return s3.send(command);
    };
}

