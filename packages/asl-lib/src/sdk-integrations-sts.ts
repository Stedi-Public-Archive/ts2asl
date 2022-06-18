import { STSClient } from "@aws-sdk/client-sts";
import { clientConfig } from ".";
import { SdkIntegrationTask } from "./asl";
import { DecodeAuthorizationMessageCommandInput, DecodeAuthorizationMessageCommandOutput, DecodeAuthorizationMessageCommand } from "@aws-sdk/client-sts";
import { GetAccessKeyInfoCommandInput, GetAccessKeyInfoCommandOutput, GetAccessKeyInfoCommand } from "@aws-sdk/client-sts";
import { GetCallerIdentityCommandInput, GetCallerIdentityCommandOutput, GetCallerIdentityCommand } from "@aws-sdk/client-sts";
import { GetFederationTokenCommandInput, GetFederationTokenCommandOutput, GetFederationTokenCommand } from "@aws-sdk/client-sts";
import { GetSessionTokenCommandInput, GetSessionTokenCommandOutput, GetSessionTokenCommand } from "@aws-sdk/client-sts";


/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sts:decodeAuthorizationMessage'*/
export const sdkSTSDecodeAuthorizationMessage = (input: SdkIntegrationTask<DecodeAuthorizationMessageCommandInput>): Promise<DecodeAuthorizationMessageCommandOutput> => {
    const sts = new STSClient(clientConfig);
    const command = new DecodeAuthorizationMessageCommand(input.parameters);
    return sts.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sts:getAccessKeyInfo'*/
export const sdkSTSGetAccessKeyInfo = (input: SdkIntegrationTask<GetAccessKeyInfoCommandInput>): Promise<GetAccessKeyInfoCommandOutput> => {
    const sts = new STSClient(clientConfig);
    const command = new GetAccessKeyInfoCommand(input.parameters);
    return sts.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sts:getCallerIdentity'*/
export const sdkSTSGetCallerIdentity = (input: SdkIntegrationTask<GetCallerIdentityCommandInput>): Promise<GetCallerIdentityCommandOutput> => {
    const sts = new STSClient(clientConfig);
    const command = new GetCallerIdentityCommand(input.parameters);
    return sts.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sts:getFederationToken'*/
export const sdkSTSGetFederationToken = (input: SdkIntegrationTask<GetFederationTokenCommandInput>): Promise<GetFederationTokenCommandOutput> => {
    const sts = new STSClient(clientConfig);
    const command = new GetFederationTokenCommand(input.parameters);
    return sts.send(command);
};

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:sts:getSessionToken'*/
export const sdkSTSGetSessionToken = (input: SdkIntegrationTask<GetSessionTokenCommandInput>): Promise<GetSessionTokenCommandOutput> => {
    const sts = new STSClient(clientConfig);
    const command = new GetSessionTokenCommand(input.parameters);
    return sts.send(command);
};

