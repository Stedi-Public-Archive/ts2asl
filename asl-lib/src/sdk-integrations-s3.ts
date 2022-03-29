import { S3Client } from "@aws-sdk/client-s3";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
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


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:abortMultipartUpload'*/
export const sdkS3AbortMultipartUpload = (input: SdkIntegrationTask<AbortMultipartUploadCommandInput>): Promise<AbortMultipartUploadCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new AbortMultipartUploadCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:completeMultipartUpload'*/
export const sdkS3CompleteMultipartUpload = (input: SdkIntegrationTask<CompleteMultipartUploadCommandInput>): Promise<CompleteMultipartUploadCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new CompleteMultipartUploadCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:copyObject'*/
export const sdkS3CopyObject = (input: SdkIntegrationTask<CopyObjectCommandInput>): Promise<CopyObjectCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new CopyObjectCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:createBucket'*/
export const sdkS3CreateBucket = (input: SdkIntegrationTask<CreateBucketCommandInput>): Promise<CreateBucketCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new CreateBucketCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:createMultipartUpload'*/
export const sdkS3CreateMultipartUpload = (input: SdkIntegrationTask<CreateMultipartUploadCommandInput>): Promise<CreateMultipartUploadCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new CreateMultipartUploadCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucket'*/
export const sdkS3DeleteBucket = (input: SdkIntegrationTask<DeleteBucketCommandInput>): Promise<DeleteBucketCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketAnalyticsConfiguration'*/
export const sdkS3DeleteBucketAnalyticsConfiguration = (input: SdkIntegrationTask<DeleteBucketAnalyticsConfigurationCommandInput>): Promise<DeleteBucketAnalyticsConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketAnalyticsConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketCors'*/
export const sdkS3DeleteBucketCors = (input: SdkIntegrationTask<DeleteBucketCorsCommandInput>): Promise<DeleteBucketCorsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketCorsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketEncryption'*/
export const sdkS3DeleteBucketEncryption = (input: SdkIntegrationTask<DeleteBucketEncryptionCommandInput>): Promise<DeleteBucketEncryptionCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketEncryptionCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketIntelligentTieringConfiguration'*/
export const sdkS3DeleteBucketIntelligentTieringConfiguration = (input: SdkIntegrationTask<DeleteBucketIntelligentTieringConfigurationCommandInput>): Promise<DeleteBucketIntelligentTieringConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketIntelligentTieringConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketInventoryConfiguration'*/
export const sdkS3DeleteBucketInventoryConfiguration = (input: SdkIntegrationTask<DeleteBucketInventoryConfigurationCommandInput>): Promise<DeleteBucketInventoryConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketInventoryConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketLifecycle'*/
export const sdkS3DeleteBucketLifecycle = (input: SdkIntegrationTask<DeleteBucketLifecycleCommandInput>): Promise<DeleteBucketLifecycleCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketLifecycleCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketMetricsConfiguration'*/
export const sdkS3DeleteBucketMetricsConfiguration = (input: SdkIntegrationTask<DeleteBucketMetricsConfigurationCommandInput>): Promise<DeleteBucketMetricsConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketMetricsConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketOwnershipControls'*/
export const sdkS3DeleteBucketOwnershipControls = (input: SdkIntegrationTask<DeleteBucketOwnershipControlsCommandInput>): Promise<DeleteBucketOwnershipControlsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketOwnershipControlsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketPolicy'*/
export const sdkS3DeleteBucketPolicy = (input: SdkIntegrationTask<DeleteBucketPolicyCommandInput>): Promise<DeleteBucketPolicyCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketPolicyCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketReplication'*/
export const sdkS3DeleteBucketReplication = (input: SdkIntegrationTask<DeleteBucketReplicationCommandInput>): Promise<DeleteBucketReplicationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketReplicationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketTagging'*/
export const sdkS3DeleteBucketTagging = (input: SdkIntegrationTask<DeleteBucketTaggingCommandInput>): Promise<DeleteBucketTaggingCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketTaggingCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketWebsite'*/
export const sdkS3DeleteBucketWebsite = (input: SdkIntegrationTask<DeleteBucketWebsiteCommandInput>): Promise<DeleteBucketWebsiteCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteBucketWebsiteCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteObject'*/
export const sdkS3DeleteObject = (input: SdkIntegrationTask<DeleteObjectCommandInput>): Promise<DeleteObjectCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteObjectCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteObjectTagging'*/
export const sdkS3DeleteObjectTagging = (input: SdkIntegrationTask<DeleteObjectTaggingCommandInput>): Promise<DeleteObjectTaggingCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteObjectTaggingCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteObjects'*/
export const sdkS3DeleteObjects = (input: SdkIntegrationTask<DeleteObjectsCommandInput>): Promise<DeleteObjectsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeleteObjectsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deletePublicAccessBlock'*/
export const sdkS3DeletePublicAccessBlock = (input: SdkIntegrationTask<DeletePublicAccessBlockCommandInput>): Promise<DeletePublicAccessBlockCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new DeletePublicAccessBlockCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketAccelerateConfiguration'*/
export const sdkS3GetBucketAccelerateConfiguration = (input: SdkIntegrationTask<GetBucketAccelerateConfigurationCommandInput>): Promise<GetBucketAccelerateConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketAccelerateConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketAcl'*/
export const sdkS3GetBucketAcl = (input: SdkIntegrationTask<GetBucketAclCommandInput>): Promise<GetBucketAclCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketAclCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketAnalyticsConfiguration'*/
export const sdkS3GetBucketAnalyticsConfiguration = (input: SdkIntegrationTask<GetBucketAnalyticsConfigurationCommandInput>): Promise<GetBucketAnalyticsConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketAnalyticsConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketCors'*/
export const sdkS3GetBucketCors = (input: SdkIntegrationTask<GetBucketCorsCommandInput>): Promise<GetBucketCorsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketCorsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketEncryption'*/
export const sdkS3GetBucketEncryption = (input: SdkIntegrationTask<GetBucketEncryptionCommandInput>): Promise<GetBucketEncryptionCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketEncryptionCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketIntelligentTieringConfiguration'*/
export const sdkS3GetBucketIntelligentTieringConfiguration = (input: SdkIntegrationTask<GetBucketIntelligentTieringConfigurationCommandInput>): Promise<GetBucketIntelligentTieringConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketIntelligentTieringConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketInventoryConfiguration'*/
export const sdkS3GetBucketInventoryConfiguration = (input: SdkIntegrationTask<GetBucketInventoryConfigurationCommandInput>): Promise<GetBucketInventoryConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketInventoryConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketLifecycleConfiguration'*/
export const sdkS3GetBucketLifecycleConfiguration = (input: SdkIntegrationTask<GetBucketLifecycleConfigurationCommandInput>): Promise<GetBucketLifecycleConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketLifecycleConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketLocation'*/
export const sdkS3GetBucketLocation = (input: SdkIntegrationTask<GetBucketLocationCommandInput>): Promise<GetBucketLocationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketLocationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketLogging'*/
export const sdkS3GetBucketLogging = (input: SdkIntegrationTask<GetBucketLoggingCommandInput>): Promise<GetBucketLoggingCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketLoggingCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketMetricsConfiguration'*/
export const sdkS3GetBucketMetricsConfiguration = (input: SdkIntegrationTask<GetBucketMetricsConfigurationCommandInput>): Promise<GetBucketMetricsConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketMetricsConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketNotificationConfiguration'*/
export const sdkS3GetBucketNotificationConfiguration = (input: SdkIntegrationTask<GetBucketNotificationConfigurationCommandInput>): Promise<GetBucketNotificationConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketNotificationConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketOwnershipControls'*/
export const sdkS3GetBucketOwnershipControls = (input: SdkIntegrationTask<GetBucketOwnershipControlsCommandInput>): Promise<GetBucketOwnershipControlsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketOwnershipControlsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketPolicy'*/
export const sdkS3GetBucketPolicy = (input: SdkIntegrationTask<GetBucketPolicyCommandInput>): Promise<GetBucketPolicyCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketPolicyCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketPolicyStatus'*/
export const sdkS3GetBucketPolicyStatus = (input: SdkIntegrationTask<GetBucketPolicyStatusCommandInput>): Promise<GetBucketPolicyStatusCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketPolicyStatusCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketReplication'*/
export const sdkS3GetBucketReplication = (input: SdkIntegrationTask<GetBucketReplicationCommandInput>): Promise<GetBucketReplicationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketReplicationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketRequestPayment'*/
export const sdkS3GetBucketRequestPayment = (input: SdkIntegrationTask<GetBucketRequestPaymentCommandInput>): Promise<GetBucketRequestPaymentCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketRequestPaymentCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketTagging'*/
export const sdkS3GetBucketTagging = (input: SdkIntegrationTask<GetBucketTaggingCommandInput>): Promise<GetBucketTaggingCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketTaggingCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketVersioning'*/
export const sdkS3GetBucketVersioning = (input: SdkIntegrationTask<GetBucketVersioningCommandInput>): Promise<GetBucketVersioningCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketVersioningCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketWebsite'*/
export const sdkS3GetBucketWebsite = (input: SdkIntegrationTask<GetBucketWebsiteCommandInput>): Promise<GetBucketWebsiteCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetBucketWebsiteCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObject'*/
export const sdkS3GetObject = (input: SdkIntegrationTask<GetObjectCommandInput>): Promise<GetObjectCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetObjectCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectAcl'*/
export const sdkS3GetObjectAcl = (input: SdkIntegrationTask<GetObjectAclCommandInput>): Promise<GetObjectAclCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetObjectAclCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectLegalHold'*/
export const sdkS3GetObjectLegalHold = (input: SdkIntegrationTask<GetObjectLegalHoldCommandInput>): Promise<GetObjectLegalHoldCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetObjectLegalHoldCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectLockConfiguration'*/
export const sdkS3GetObjectLockConfiguration = (input: SdkIntegrationTask<GetObjectLockConfigurationCommandInput>): Promise<GetObjectLockConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetObjectLockConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectRetention'*/
export const sdkS3GetObjectRetention = (input: SdkIntegrationTask<GetObjectRetentionCommandInput>): Promise<GetObjectRetentionCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetObjectRetentionCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectTagging'*/
export const sdkS3GetObjectTagging = (input: SdkIntegrationTask<GetObjectTaggingCommandInput>): Promise<GetObjectTaggingCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetObjectTaggingCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectTorrent'*/
export const sdkS3GetObjectTorrent = (input: SdkIntegrationTask<GetObjectTorrentCommandInput>): Promise<GetObjectTorrentCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetObjectTorrentCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getPublicAccessBlock'*/
export const sdkS3GetPublicAccessBlock = (input: SdkIntegrationTask<GetPublicAccessBlockCommandInput>): Promise<GetPublicAccessBlockCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new GetPublicAccessBlockCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:headBucket'*/
export const sdkS3HeadBucket = (input: SdkIntegrationTask<HeadBucketCommandInput>): Promise<HeadBucketCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new HeadBucketCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:headObject'*/
export const sdkS3HeadObject = (input: SdkIntegrationTask<HeadObjectCommandInput>): Promise<HeadObjectCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new HeadObjectCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBucketAnalyticsConfigurations'*/
export const sdkS3ListBucketAnalyticsConfigurations = (input: SdkIntegrationTask<ListBucketAnalyticsConfigurationsCommandInput>): Promise<ListBucketAnalyticsConfigurationsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new ListBucketAnalyticsConfigurationsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBucketIntelligentTieringConfigurations'*/
export const sdkS3ListBucketIntelligentTieringConfigurations = (input: SdkIntegrationTask<ListBucketIntelligentTieringConfigurationsCommandInput>): Promise<ListBucketIntelligentTieringConfigurationsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new ListBucketIntelligentTieringConfigurationsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBucketInventoryConfigurations'*/
export const sdkS3ListBucketInventoryConfigurations = (input: SdkIntegrationTask<ListBucketInventoryConfigurationsCommandInput>): Promise<ListBucketInventoryConfigurationsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new ListBucketInventoryConfigurationsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBucketMetricsConfigurations'*/
export const sdkS3ListBucketMetricsConfigurations = (input: SdkIntegrationTask<ListBucketMetricsConfigurationsCommandInput>): Promise<ListBucketMetricsConfigurationsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new ListBucketMetricsConfigurationsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBuckets'*/
export const sdkS3ListBuckets = (input: SdkIntegrationTask<ListBucketsCommandInput>): Promise<ListBucketsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new ListBucketsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listMultipartUploads'*/
export const sdkS3ListMultipartUploads = (input: SdkIntegrationTask<ListMultipartUploadsCommandInput>): Promise<ListMultipartUploadsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new ListMultipartUploadsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listObjectVersions'*/
export const sdkS3ListObjectVersions = (input: SdkIntegrationTask<ListObjectVersionsCommandInput>): Promise<ListObjectVersionsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new ListObjectVersionsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listObjects'*/
export const sdkS3ListObjects = (input: SdkIntegrationTask<ListObjectsCommandInput>): Promise<ListObjectsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new ListObjectsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listObjectsV2'*/
export const sdkS3ListObjectsV2 = (input: SdkIntegrationTask<ListObjectsV2CommandInput>): Promise<ListObjectsV2CommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new ListObjectsV2Command(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listParts'*/
export const sdkS3ListParts = (input: SdkIntegrationTask<ListPartsCommandInput>): Promise<ListPartsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new ListPartsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketAccelerateConfiguration'*/
export const sdkS3PutBucketAccelerateConfiguration = (input: SdkIntegrationTask<PutBucketAccelerateConfigurationCommandInput>): Promise<PutBucketAccelerateConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketAccelerateConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketAcl'*/
export const sdkS3PutBucketAcl = (input: SdkIntegrationTask<PutBucketAclCommandInput>): Promise<PutBucketAclCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketAclCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketAnalyticsConfiguration'*/
export const sdkS3PutBucketAnalyticsConfiguration = (input: SdkIntegrationTask<PutBucketAnalyticsConfigurationCommandInput>): Promise<PutBucketAnalyticsConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketAnalyticsConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketCors'*/
export const sdkS3PutBucketCors = (input: SdkIntegrationTask<PutBucketCorsCommandInput>): Promise<PutBucketCorsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketCorsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketEncryption'*/
export const sdkS3PutBucketEncryption = (input: SdkIntegrationTask<PutBucketEncryptionCommandInput>): Promise<PutBucketEncryptionCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketEncryptionCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketIntelligentTieringConfiguration'*/
export const sdkS3PutBucketIntelligentTieringConfiguration = (input: SdkIntegrationTask<PutBucketIntelligentTieringConfigurationCommandInput>): Promise<PutBucketIntelligentTieringConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketIntelligentTieringConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketInventoryConfiguration'*/
export const sdkS3PutBucketInventoryConfiguration = (input: SdkIntegrationTask<PutBucketInventoryConfigurationCommandInput>): Promise<PutBucketInventoryConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketInventoryConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketLifecycleConfiguration'*/
export const sdkS3PutBucketLifecycleConfiguration = (input: SdkIntegrationTask<PutBucketLifecycleConfigurationCommandInput>): Promise<PutBucketLifecycleConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketLifecycleConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketLogging'*/
export const sdkS3PutBucketLogging = (input: SdkIntegrationTask<PutBucketLoggingCommandInput>): Promise<PutBucketLoggingCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketLoggingCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketMetricsConfiguration'*/
export const sdkS3PutBucketMetricsConfiguration = (input: SdkIntegrationTask<PutBucketMetricsConfigurationCommandInput>): Promise<PutBucketMetricsConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketMetricsConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketNotificationConfiguration'*/
export const sdkS3PutBucketNotificationConfiguration = (input: SdkIntegrationTask<PutBucketNotificationConfigurationCommandInput>): Promise<PutBucketNotificationConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketNotificationConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketOwnershipControls'*/
export const sdkS3PutBucketOwnershipControls = (input: SdkIntegrationTask<PutBucketOwnershipControlsCommandInput>): Promise<PutBucketOwnershipControlsCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketOwnershipControlsCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketPolicy'*/
export const sdkS3PutBucketPolicy = (input: SdkIntegrationTask<PutBucketPolicyCommandInput>): Promise<PutBucketPolicyCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketPolicyCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketReplication'*/
export const sdkS3PutBucketReplication = (input: SdkIntegrationTask<PutBucketReplicationCommandInput>): Promise<PutBucketReplicationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketReplicationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketRequestPayment'*/
export const sdkS3PutBucketRequestPayment = (input: SdkIntegrationTask<PutBucketRequestPaymentCommandInput>): Promise<PutBucketRequestPaymentCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketRequestPaymentCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketTagging'*/
export const sdkS3PutBucketTagging = (input: SdkIntegrationTask<PutBucketTaggingCommandInput>): Promise<PutBucketTaggingCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketTaggingCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketVersioning'*/
export const sdkS3PutBucketVersioning = (input: SdkIntegrationTask<PutBucketVersioningCommandInput>): Promise<PutBucketVersioningCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketVersioningCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketWebsite'*/
export const sdkS3PutBucketWebsite = (input: SdkIntegrationTask<PutBucketWebsiteCommandInput>): Promise<PutBucketWebsiteCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutBucketWebsiteCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObject'*/
export const sdkS3PutObject = (input: SdkIntegrationTask<PutObjectCommandInput>): Promise<PutObjectCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutObjectCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectAcl'*/
export const sdkS3PutObjectAcl = (input: SdkIntegrationTask<PutObjectAclCommandInput>): Promise<PutObjectAclCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutObjectAclCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectLegalHold'*/
export const sdkS3PutObjectLegalHold = (input: SdkIntegrationTask<PutObjectLegalHoldCommandInput>): Promise<PutObjectLegalHoldCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutObjectLegalHoldCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectLockConfiguration'*/
export const sdkS3PutObjectLockConfiguration = (input: SdkIntegrationTask<PutObjectLockConfigurationCommandInput>): Promise<PutObjectLockConfigurationCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutObjectLockConfigurationCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectRetention'*/
export const sdkS3PutObjectRetention = (input: SdkIntegrationTask<PutObjectRetentionCommandInput>): Promise<PutObjectRetentionCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutObjectRetentionCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectTagging'*/
export const sdkS3PutObjectTagging = (input: SdkIntegrationTask<PutObjectTaggingCommandInput>): Promise<PutObjectTaggingCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutObjectTaggingCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putPublicAccessBlock'*/
export const sdkS3PutPublicAccessBlock = (input: SdkIntegrationTask<PutPublicAccessBlockCommandInput>): Promise<PutPublicAccessBlockCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new PutPublicAccessBlockCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:restoreObject'*/
export const sdkS3RestoreObject = (input: SdkIntegrationTask<RestoreObjectCommandInput>): Promise<RestoreObjectCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new RestoreObjectCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:uploadPart'*/
export const sdkS3UploadPart = (input: SdkIntegrationTask<UploadPartCommandInput>): Promise<UploadPartCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new UploadPartCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:uploadPartCopy'*/
export const sdkS3UploadPartCopy = (input: SdkIntegrationTask<UploadPartCopyCommandInput>): Promise<UploadPartCopyCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new UploadPartCopyCommand(input.parameters);
    return s3.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:writeGetObjectResponse'*/
export const sdkS3WriteGetObjectResponse = (input: SdkIntegrationTask<WriteGetObjectResponseCommandInput>): Promise<WriteGetObjectResponseCommandOutput> => {
    const s3 = new S3Client(clientConfig);
    const command = new WriteGetObjectResponseCommand(input.parameters);
    return s3.send(command);
};

