"use strict";
exports.__esModule = true;
exports.ASL = void 0;
var client_s3_1 = require("@aws-sdk/client-s3");
var client_s3_2 = require("@aws-sdk/client-s3");
var client_s3_3 = require("@aws-sdk/client-s3");
var client_s3_4 = require("@aws-sdk/client-s3");
var client_s3_5 = require("@aws-sdk/client-s3");
var client_s3_6 = require("@aws-sdk/client-s3");
var client_s3_7 = require("@aws-sdk/client-s3");
var client_s3_8 = require("@aws-sdk/client-s3");
var client_s3_9 = require("@aws-sdk/client-s3");
var client_s3_10 = require("@aws-sdk/client-s3");
var client_s3_11 = require("@aws-sdk/client-s3");
var client_s3_12 = require("@aws-sdk/client-s3");
var client_s3_13 = require("@aws-sdk/client-s3");
var client_s3_14 = require("@aws-sdk/client-s3");
var client_s3_15 = require("@aws-sdk/client-s3");
var client_s3_16 = require("@aws-sdk/client-s3");
var client_s3_17 = require("@aws-sdk/client-s3");
var client_s3_18 = require("@aws-sdk/client-s3");
var client_s3_19 = require("@aws-sdk/client-s3");
var client_s3_20 = require("@aws-sdk/client-s3");
var client_s3_21 = require("@aws-sdk/client-s3");
var client_s3_22 = require("@aws-sdk/client-s3");
var client_s3_23 = require("@aws-sdk/client-s3");
var client_s3_24 = require("@aws-sdk/client-s3");
var client_s3_25 = require("@aws-sdk/client-s3");
var client_s3_26 = require("@aws-sdk/client-s3");
var client_s3_27 = require("@aws-sdk/client-s3");
var client_s3_28 = require("@aws-sdk/client-s3");
var client_s3_29 = require("@aws-sdk/client-s3");
var client_s3_30 = require("@aws-sdk/client-s3");
var client_s3_31 = require("@aws-sdk/client-s3");
var client_s3_32 = require("@aws-sdk/client-s3");
var client_s3_33 = require("@aws-sdk/client-s3");
var client_s3_34 = require("@aws-sdk/client-s3");
var client_s3_35 = require("@aws-sdk/client-s3");
var client_s3_36 = require("@aws-sdk/client-s3");
var client_s3_37 = require("@aws-sdk/client-s3");
var client_s3_38 = require("@aws-sdk/client-s3");
var client_s3_39 = require("@aws-sdk/client-s3");
var client_s3_40 = require("@aws-sdk/client-s3");
var client_s3_41 = require("@aws-sdk/client-s3");
var client_s3_42 = require("@aws-sdk/client-s3");
var client_s3_43 = require("@aws-sdk/client-s3");
var client_s3_44 = require("@aws-sdk/client-s3");
var client_s3_45 = require("@aws-sdk/client-s3");
var client_s3_46 = require("@aws-sdk/client-s3");
var client_s3_47 = require("@aws-sdk/client-s3");
var client_s3_48 = require("@aws-sdk/client-s3");
var client_s3_49 = require("@aws-sdk/client-s3");
var client_s3_50 = require("@aws-sdk/client-s3");
var client_s3_51 = require("@aws-sdk/client-s3");
var client_s3_52 = require("@aws-sdk/client-s3");
var client_s3_53 = require("@aws-sdk/client-s3");
var client_s3_54 = require("@aws-sdk/client-s3");
var client_s3_55 = require("@aws-sdk/client-s3");
var client_s3_56 = require("@aws-sdk/client-s3");
var client_s3_57 = require("@aws-sdk/client-s3");
var client_s3_58 = require("@aws-sdk/client-s3");
var client_s3_59 = require("@aws-sdk/client-s3");
var client_s3_60 = require("@aws-sdk/client-s3");
var client_s3_61 = require("@aws-sdk/client-s3");
var client_s3_62 = require("@aws-sdk/client-s3");
var client_s3_63 = require("@aws-sdk/client-s3");
var client_s3_64 = require("@aws-sdk/client-s3");
var client_s3_65 = require("@aws-sdk/client-s3");
var client_s3_66 = require("@aws-sdk/client-s3");
var client_s3_67 = require("@aws-sdk/client-s3");
var client_s3_68 = require("@aws-sdk/client-s3");
var client_s3_69 = require("@aws-sdk/client-s3");
var client_s3_70 = require("@aws-sdk/client-s3");
var client_s3_71 = require("@aws-sdk/client-s3");
var client_s3_72 = require("@aws-sdk/client-s3");
var client_s3_73 = require("@aws-sdk/client-s3");
var client_s3_74 = require("@aws-sdk/client-s3");
var client_s3_75 = require("@aws-sdk/client-s3");
var client_s3_76 = require("@aws-sdk/client-s3");
var client_s3_77 = require("@aws-sdk/client-s3");
var client_s3_78 = require("@aws-sdk/client-s3");
var client_s3_79 = require("@aws-sdk/client-s3");
var client_s3_80 = require("@aws-sdk/client-s3");
var client_s3_81 = require("@aws-sdk/client-s3");
var client_s3_82 = require("@aws-sdk/client-s3");
var client_s3_83 = require("@aws-sdk/client-s3");
var client_s3_84 = require("@aws-sdk/client-s3");
var client_s3_85 = require("@aws-sdk/client-s3");
var client_s3_86 = require("@aws-sdk/client-s3");
var client_s3_87 = require("@aws-sdk/client-s3");
var client_s3_88 = require("@aws-sdk/client-s3");
var client_s3_89 = require("@aws-sdk/client-s3");
var client_s3_90 = require("@aws-sdk/client-s3");
var client_s3_91 = require("@aws-sdk/client-s3");
var client_s3_92 = require("@aws-sdk/client-s3");
var ASL;
(function (ASL) {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:abortMultipartUpload'*/
    ASL.nativeS3AbortMultipartUpload = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_2.AbortMultipartUploadCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:completeMultipartUpload'*/
    ASL.nativeS3CompleteMultipartUpload = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_3.CompleteMultipartUploadCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:copyObject'*/
    ASL.nativeS3CopyObject = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_4.CopyObjectCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:createBucket'*/
    ASL.nativeS3CreateBucket = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_5.CreateBucketCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:createMultipartUpload'*/
    ASL.nativeS3CreateMultipartUpload = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_6.CreateMultipartUploadCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucket'*/
    ASL.nativeS3DeleteBucket = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_7.DeleteBucketCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketAnalyticsConfiguration'*/
    ASL.nativeS3DeleteBucketAnalyticsConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_8.DeleteBucketAnalyticsConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketCors'*/
    ASL.nativeS3DeleteBucketCors = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_9.DeleteBucketCorsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketEncryption'*/
    ASL.nativeS3DeleteBucketEncryption = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_10.DeleteBucketEncryptionCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketIntelligentTieringConfiguration'*/
    ASL.nativeS3DeleteBucketIntelligentTieringConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_11.DeleteBucketIntelligentTieringConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketInventoryConfiguration'*/
    ASL.nativeS3DeleteBucketInventoryConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_12.DeleteBucketInventoryConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketLifecycle'*/
    ASL.nativeS3DeleteBucketLifecycle = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_13.DeleteBucketLifecycleCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketMetricsConfiguration'*/
    ASL.nativeS3DeleteBucketMetricsConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_14.DeleteBucketMetricsConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketOwnershipControls'*/
    ASL.nativeS3DeleteBucketOwnershipControls = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_15.DeleteBucketOwnershipControlsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketPolicy'*/
    ASL.nativeS3DeleteBucketPolicy = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_16.DeleteBucketPolicyCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketReplication'*/
    ASL.nativeS3DeleteBucketReplication = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_17.DeleteBucketReplicationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketTagging'*/
    ASL.nativeS3DeleteBucketTagging = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_18.DeleteBucketTaggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteBucketWebsite'*/
    ASL.nativeS3DeleteBucketWebsite = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_19.DeleteBucketWebsiteCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteObject'*/
    ASL.nativeS3DeleteObject = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_20.DeleteObjectCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteObjectTagging'*/
    ASL.nativeS3DeleteObjectTagging = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_21.DeleteObjectTaggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deleteObjects'*/
    ASL.nativeS3DeleteObjects = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_22.DeleteObjectsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:deletePublicAccessBlock'*/
    ASL.nativeS3DeletePublicAccessBlock = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_23.DeletePublicAccessBlockCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketAccelerateConfiguration'*/
    ASL.nativeS3GetBucketAccelerateConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_24.GetBucketAccelerateConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketAcl'*/
    ASL.nativeS3GetBucketAcl = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_25.GetBucketAclCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketAnalyticsConfiguration'*/
    ASL.nativeS3GetBucketAnalyticsConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_26.GetBucketAnalyticsConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketCors'*/
    ASL.nativeS3GetBucketCors = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_27.GetBucketCorsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketEncryption'*/
    ASL.nativeS3GetBucketEncryption = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_28.GetBucketEncryptionCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketIntelligentTieringConfiguration'*/
    ASL.nativeS3GetBucketIntelligentTieringConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_29.GetBucketIntelligentTieringConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketInventoryConfiguration'*/
    ASL.nativeS3GetBucketInventoryConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_30.GetBucketInventoryConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketLifecycleConfiguration'*/
    ASL.nativeS3GetBucketLifecycleConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_31.GetBucketLifecycleConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketLocation'*/
    ASL.nativeS3GetBucketLocation = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_32.GetBucketLocationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketLogging'*/
    ASL.nativeS3GetBucketLogging = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_33.GetBucketLoggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketMetricsConfiguration'*/
    ASL.nativeS3GetBucketMetricsConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_34.GetBucketMetricsConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketNotificationConfiguration'*/
    ASL.nativeS3GetBucketNotificationConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_35.GetBucketNotificationConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketOwnershipControls'*/
    ASL.nativeS3GetBucketOwnershipControls = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_36.GetBucketOwnershipControlsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketPolicy'*/
    ASL.nativeS3GetBucketPolicy = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_37.GetBucketPolicyCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketPolicyStatus'*/
    ASL.nativeS3GetBucketPolicyStatus = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_38.GetBucketPolicyStatusCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketReplication'*/
    ASL.nativeS3GetBucketReplication = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_39.GetBucketReplicationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketRequestPayment'*/
    ASL.nativeS3GetBucketRequestPayment = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_40.GetBucketRequestPaymentCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketTagging'*/
    ASL.nativeS3GetBucketTagging = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_41.GetBucketTaggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketVersioning'*/
    ASL.nativeS3GetBucketVersioning = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_42.GetBucketVersioningCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getBucketWebsite'*/
    ASL.nativeS3GetBucketWebsite = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_43.GetBucketWebsiteCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObject'*/
    ASL.nativeS3GetObject = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_44.GetObjectCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectAcl'*/
    ASL.nativeS3GetObjectAcl = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_45.GetObjectAclCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectLegalHold'*/
    ASL.nativeS3GetObjectLegalHold = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_46.GetObjectLegalHoldCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectLockConfiguration'*/
    ASL.nativeS3GetObjectLockConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_47.GetObjectLockConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectRetention'*/
    ASL.nativeS3GetObjectRetention = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_48.GetObjectRetentionCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectTagging'*/
    ASL.nativeS3GetObjectTagging = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_49.GetObjectTaggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getObjectTorrent'*/
    ASL.nativeS3GetObjectTorrent = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_50.GetObjectTorrentCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:getPublicAccessBlock'*/
    ASL.nativeS3GetPublicAccessBlock = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_51.GetPublicAccessBlockCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:headBucket'*/
    ASL.nativeS3HeadBucket = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_52.HeadBucketCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:headObject'*/
    ASL.nativeS3HeadObject = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_53.HeadObjectCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBucketAnalyticsConfigurations'*/
    ASL.nativeS3ListBucketAnalyticsConfigurations = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_54.ListBucketAnalyticsConfigurationsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBucketIntelligentTieringConfigurations'*/
    ASL.nativeS3ListBucketIntelligentTieringConfigurations = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_55.ListBucketIntelligentTieringConfigurationsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBucketInventoryConfigurations'*/
    ASL.nativeS3ListBucketInventoryConfigurations = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_56.ListBucketInventoryConfigurationsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBucketMetricsConfigurations'*/
    ASL.nativeS3ListBucketMetricsConfigurations = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_57.ListBucketMetricsConfigurationsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listBuckets'*/
    ASL.nativeS3ListBuckets = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_58.ListBucketsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listMultipartUploads'*/
    ASL.nativeS3ListMultipartUploads = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_59.ListMultipartUploadsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listObjectVersions'*/
    ASL.nativeS3ListObjectVersions = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_60.ListObjectVersionsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listObjects'*/
    ASL.nativeS3ListObjects = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_61.ListObjectsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listObjectsV2'*/
    ASL.nativeS3ListObjectsV2 = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_62.ListObjectsV2Command(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:listParts'*/
    ASL.nativeS3ListParts = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_63.ListPartsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketAccelerateConfiguration'*/
    ASL.nativeS3PutBucketAccelerateConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_64.PutBucketAccelerateConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketAcl'*/
    ASL.nativeS3PutBucketAcl = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_65.PutBucketAclCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketAnalyticsConfiguration'*/
    ASL.nativeS3PutBucketAnalyticsConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_66.PutBucketAnalyticsConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketCors'*/
    ASL.nativeS3PutBucketCors = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_67.PutBucketCorsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketEncryption'*/
    ASL.nativeS3PutBucketEncryption = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_68.PutBucketEncryptionCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketIntelligentTieringConfiguration'*/
    ASL.nativeS3PutBucketIntelligentTieringConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_69.PutBucketIntelligentTieringConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketInventoryConfiguration'*/
    ASL.nativeS3PutBucketInventoryConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_70.PutBucketInventoryConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketLifecycleConfiguration'*/
    ASL.nativeS3PutBucketLifecycleConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_71.PutBucketLifecycleConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketLogging'*/
    ASL.nativeS3PutBucketLogging = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_72.PutBucketLoggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketMetricsConfiguration'*/
    ASL.nativeS3PutBucketMetricsConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_73.PutBucketMetricsConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketNotificationConfiguration'*/
    ASL.nativeS3PutBucketNotificationConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_74.PutBucketNotificationConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketOwnershipControls'*/
    ASL.nativeS3PutBucketOwnershipControls = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_75.PutBucketOwnershipControlsCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketPolicy'*/
    ASL.nativeS3PutBucketPolicy = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_76.PutBucketPolicyCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketReplication'*/
    ASL.nativeS3PutBucketReplication = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_77.PutBucketReplicationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketRequestPayment'*/
    ASL.nativeS3PutBucketRequestPayment = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_78.PutBucketRequestPaymentCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketTagging'*/
    ASL.nativeS3PutBucketTagging = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_79.PutBucketTaggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketVersioning'*/
    ASL.nativeS3PutBucketVersioning = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_80.PutBucketVersioningCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putBucketWebsite'*/
    ASL.nativeS3PutBucketWebsite = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_81.PutBucketWebsiteCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObject'*/
    ASL.nativeS3PutObject = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_82.PutObjectCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectAcl'*/
    ASL.nativeS3PutObjectAcl = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_83.PutObjectAclCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectLegalHold'*/
    ASL.nativeS3PutObjectLegalHold = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_84.PutObjectLegalHoldCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectLockConfiguration'*/
    ASL.nativeS3PutObjectLockConfiguration = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_85.PutObjectLockConfigurationCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectRetention'*/
    ASL.nativeS3PutObjectRetention = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_86.PutObjectRetentionCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putObjectTagging'*/
    ASL.nativeS3PutObjectTagging = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_87.PutObjectTaggingCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:putPublicAccessBlock'*/
    ASL.nativeS3PutPublicAccessBlock = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_88.PutPublicAccessBlockCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:restoreObject'*/
    ASL.nativeS3RestoreObject = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_89.RestoreObjectCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:uploadPart'*/
    ASL.nativeS3UploadPart = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_90.UploadPartCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:uploadPartCopy'*/
    ASL.nativeS3UploadPartCopy = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_91.UploadPartCopyCommand(input);
        return s3.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:s3:writeGetObjectResponse'*/
    ASL.nativeS3WriteGetObjectResponse = function (input) {
        var s3 = new client_s3_1.S3Client({});
        var command = new client_s3_92.WriteGetObjectResponseCommand(input);
        return s3.send(command);
    };
})(ASL = exports.ASL || (exports.ASL = {}));
