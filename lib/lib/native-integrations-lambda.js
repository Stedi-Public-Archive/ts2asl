"use strict";
exports.__esModule = true;
exports.ASL = void 0;
var client_lambda_1 = require("@aws-sdk/client-lambda");
var client_lambda_2 = require("@aws-sdk/client-lambda");
var client_lambda_3 = require("@aws-sdk/client-lambda");
var client_lambda_4 = require("@aws-sdk/client-lambda");
var client_lambda_5 = require("@aws-sdk/client-lambda");
var client_lambda_6 = require("@aws-sdk/client-lambda");
var client_lambda_7 = require("@aws-sdk/client-lambda");
var client_lambda_8 = require("@aws-sdk/client-lambda");
var client_lambda_9 = require("@aws-sdk/client-lambda");
var client_lambda_10 = require("@aws-sdk/client-lambda");
var client_lambda_11 = require("@aws-sdk/client-lambda");
var client_lambda_12 = require("@aws-sdk/client-lambda");
var client_lambda_13 = require("@aws-sdk/client-lambda");
var client_lambda_14 = require("@aws-sdk/client-lambda");
var client_lambda_15 = require("@aws-sdk/client-lambda");
var client_lambda_16 = require("@aws-sdk/client-lambda");
var client_lambda_17 = require("@aws-sdk/client-lambda");
var client_lambda_18 = require("@aws-sdk/client-lambda");
var client_lambda_19 = require("@aws-sdk/client-lambda");
var client_lambda_20 = require("@aws-sdk/client-lambda");
var client_lambda_21 = require("@aws-sdk/client-lambda");
var client_lambda_22 = require("@aws-sdk/client-lambda");
var client_lambda_23 = require("@aws-sdk/client-lambda");
var client_lambda_24 = require("@aws-sdk/client-lambda");
var client_lambda_25 = require("@aws-sdk/client-lambda");
var client_lambda_26 = require("@aws-sdk/client-lambda");
var client_lambda_27 = require("@aws-sdk/client-lambda");
var client_lambda_28 = require("@aws-sdk/client-lambda");
var client_lambda_29 = require("@aws-sdk/client-lambda");
var client_lambda_30 = require("@aws-sdk/client-lambda");
var client_lambda_31 = require("@aws-sdk/client-lambda");
var client_lambda_32 = require("@aws-sdk/client-lambda");
var client_lambda_33 = require("@aws-sdk/client-lambda");
var client_lambda_34 = require("@aws-sdk/client-lambda");
var client_lambda_35 = require("@aws-sdk/client-lambda");
var client_lambda_36 = require("@aws-sdk/client-lambda");
var client_lambda_37 = require("@aws-sdk/client-lambda");
var client_lambda_38 = require("@aws-sdk/client-lambda");
var client_lambda_39 = require("@aws-sdk/client-lambda");
var client_lambda_40 = require("@aws-sdk/client-lambda");
var client_lambda_41 = require("@aws-sdk/client-lambda");
var client_lambda_42 = require("@aws-sdk/client-lambda");
var client_lambda_43 = require("@aws-sdk/client-lambda");
var client_lambda_44 = require("@aws-sdk/client-lambda");
var client_lambda_45 = require("@aws-sdk/client-lambda");
var client_lambda_46 = require("@aws-sdk/client-lambda");
var client_lambda_47 = require("@aws-sdk/client-lambda");
var client_lambda_48 = require("@aws-sdk/client-lambda");
var client_lambda_49 = require("@aws-sdk/client-lambda");
var client_lambda_50 = require("@aws-sdk/client-lambda");
var client_lambda_51 = require("@aws-sdk/client-lambda");
var client_lambda_52 = require("@aws-sdk/client-lambda");
var client_lambda_53 = require("@aws-sdk/client-lambda");
var client_lambda_54 = require("@aws-sdk/client-lambda");
var client_lambda_55 = require("@aws-sdk/client-lambda");
var client_lambda_56 = require("@aws-sdk/client-lambda");
var client_lambda_57 = require("@aws-sdk/client-lambda");
var client_lambda_58 = require("@aws-sdk/client-lambda");
var ASL;
(function (ASL) {
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:addLayerVersionPermission'*/
    ASL.nativeLambdaAddLayerVersionPermission = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_2.AddLayerVersionPermissionCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:addPermission'*/
    ASL.nativeLambdaAddPermission = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_3.AddPermissionCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:createAlias'*/
    ASL.nativeLambdaCreateAlias = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_4.CreateAliasCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:createCodeSigningConfig'*/
    ASL.nativeLambdaCreateCodeSigningConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_5.CreateCodeSigningConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:createEventSourceMapping'*/
    ASL.nativeLambdaCreateEventSourceMapping = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_6.CreateEventSourceMappingCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:createFunction'*/
    ASL.nativeLambdaCreateFunction = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_7.CreateFunctionCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteAlias'*/
    ASL.nativeLambdaDeleteAlias = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_8.DeleteAliasCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteCodeSigningConfig'*/
    ASL.nativeLambdaDeleteCodeSigningConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_9.DeleteCodeSigningConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteEventSourceMapping'*/
    ASL.nativeLambdaDeleteEventSourceMapping = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_10.DeleteEventSourceMappingCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteFunction'*/
    ASL.nativeLambdaDeleteFunction = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_11.DeleteFunctionCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteFunctionCodeSigningConfig'*/
    ASL.nativeLambdaDeleteFunctionCodeSigningConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_12.DeleteFunctionCodeSigningConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteFunctionConcurrency'*/
    ASL.nativeLambdaDeleteFunctionConcurrency = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_13.DeleteFunctionConcurrencyCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteFunctionEventInvokeConfig'*/
    ASL.nativeLambdaDeleteFunctionEventInvokeConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_14.DeleteFunctionEventInvokeConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteLayerVersion'*/
    ASL.nativeLambdaDeleteLayerVersion = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_15.DeleteLayerVersionCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:deleteProvisionedConcurrencyConfig'*/
    ASL.nativeLambdaDeleteProvisionedConcurrencyConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_16.DeleteProvisionedConcurrencyConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getAccountSettings'*/
    ASL.nativeLambdaGetAccountSettings = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_17.GetAccountSettingsCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getAlias'*/
    ASL.nativeLambdaGetAlias = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_18.GetAliasCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getCodeSigningConfig'*/
    ASL.nativeLambdaGetCodeSigningConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_19.GetCodeSigningConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getEventSourceMapping'*/
    ASL.nativeLambdaGetEventSourceMapping = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_20.GetEventSourceMappingCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunction'*/
    ASL.nativeLambdaGetFunction = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_21.GetFunctionCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunctionCodeSigningConfig'*/
    ASL.nativeLambdaGetFunctionCodeSigningConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_22.GetFunctionCodeSigningConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunctionConcurrency'*/
    ASL.nativeLambdaGetFunctionConcurrency = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_23.GetFunctionConcurrencyCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunctionConfiguration'*/
    ASL.nativeLambdaGetFunctionConfiguration = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_24.GetFunctionConfigurationCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getFunctionEventInvokeConfig'*/
    ASL.nativeLambdaGetFunctionEventInvokeConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_25.GetFunctionEventInvokeConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getLayerVersion'*/
    ASL.nativeLambdaGetLayerVersion = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_26.GetLayerVersionCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getLayerVersionByArn'*/
    ASL.nativeLambdaGetLayerVersionByArn = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_27.GetLayerVersionByArnCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getLayerVersionPolicy'*/
    ASL.nativeLambdaGetLayerVersionPolicy = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_28.GetLayerVersionPolicyCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getPolicy'*/
    ASL.nativeLambdaGetPolicy = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_29.GetPolicyCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:getProvisionedConcurrencyConfig'*/
    ASL.nativeLambdaGetProvisionedConcurrencyConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_30.GetProvisionedConcurrencyConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:invoke'*/
    ASL.nativeLambdaInvoke = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_31.InvokeCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listAliases'*/
    ASL.nativeLambdaListAliases = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_32.ListAliasesCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listCodeSigningConfigs'*/
    ASL.nativeLambdaListCodeSigningConfigs = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_33.ListCodeSigningConfigsCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listEventSourceMappings'*/
    ASL.nativeLambdaListEventSourceMappings = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_34.ListEventSourceMappingsCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listFunctionEventInvokeConfigs'*/
    ASL.nativeLambdaListFunctionEventInvokeConfigs = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_35.ListFunctionEventInvokeConfigsCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listFunctions'*/
    ASL.nativeLambdaListFunctions = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_36.ListFunctionsCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listFunctionsByCodeSigningConfig'*/
    ASL.nativeLambdaListFunctionsByCodeSigningConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_37.ListFunctionsByCodeSigningConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listLayerVersions'*/
    ASL.nativeLambdaListLayerVersions = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_38.ListLayerVersionsCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listLayers'*/
    ASL.nativeLambdaListLayers = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_39.ListLayersCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listProvisionedConcurrencyConfigs'*/
    ASL.nativeLambdaListProvisionedConcurrencyConfigs = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_40.ListProvisionedConcurrencyConfigsCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listTags'*/
    ASL.nativeLambdaListTags = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_41.ListTagsCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:listVersionsByFunction'*/
    ASL.nativeLambdaListVersionsByFunction = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_42.ListVersionsByFunctionCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:publishLayerVersion'*/
    ASL.nativeLambdaPublishLayerVersion = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_43.PublishLayerVersionCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:publishVersion'*/
    ASL.nativeLambdaPublishVersion = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_44.PublishVersionCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:putFunctionCodeSigningConfig'*/
    ASL.nativeLambdaPutFunctionCodeSigningConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_45.PutFunctionCodeSigningConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:putFunctionConcurrency'*/
    ASL.nativeLambdaPutFunctionConcurrency = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_46.PutFunctionConcurrencyCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:putFunctionEventInvokeConfig'*/
    ASL.nativeLambdaPutFunctionEventInvokeConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_47.PutFunctionEventInvokeConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:putProvisionedConcurrencyConfig'*/
    ASL.nativeLambdaPutProvisionedConcurrencyConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_48.PutProvisionedConcurrencyConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:removeLayerVersionPermission'*/
    ASL.nativeLambdaRemoveLayerVersionPermission = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_49.RemoveLayerVersionPermissionCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:removePermission'*/
    ASL.nativeLambdaRemovePermission = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_50.RemovePermissionCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:tagResource'*/
    ASL.nativeLambdaTagResource = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_51.TagResourceCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:untagResource'*/
    ASL.nativeLambdaUntagResource = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_52.UntagResourceCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateAlias'*/
    ASL.nativeLambdaUpdateAlias = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_53.UpdateAliasCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateCodeSigningConfig'*/
    ASL.nativeLambdaUpdateCodeSigningConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_54.UpdateCodeSigningConfigCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateEventSourceMapping'*/
    ASL.nativeLambdaUpdateEventSourceMapping = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_55.UpdateEventSourceMappingCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateFunctionCode'*/
    ASL.nativeLambdaUpdateFunctionCode = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_56.UpdateFunctionCodeCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateFunctionConfiguration'*/
    ASL.nativeLambdaUpdateFunctionConfiguration = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_57.UpdateFunctionConfigurationCommand(input);
        return lambda.send(command);
    };
    /* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:lambda:updateFunctionEventInvokeConfig'*/
    ASL.nativeLambdaUpdateFunctionEventInvokeConfig = function (input) {
        var lambda = new client_lambda_1.LambdaClient({});
        var command = new client_lambda_58.UpdateFunctionEventInvokeConfigCommand(input);
        return lambda.send(command);
    };
})(ASL = exports.ASL || (exports.ASL = {}));
