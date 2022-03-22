import { S3ClientConfig } from "@aws-sdk/client-s3";
export type ClientConfig = S3ClientConfig;
export * from "./asl";
export * from "./native-integrations-ecs";
export * from "./native-integrations-dynamodb";
export * from "./native-integrations-eventbridge";
export * from "./native-integrations-lambda";
export * from "./native-integrations-s3";
export * from "./native-integrations-ses";
export * from "./native-integrations-sns";
export * from "./native-integrations-sqs";
export * from "./native-integrations-ssm";
export * from "./native-integrations-sfn";
export * from "./native-integrations-textract";
export * from "./native-integrations-organizations";
export * from "./native-integrations-codebuild";
export * from "./deploy"

/* Compiles to Task State with Resource = 'arn:aws:states:::aws-sdk:apigateway:invoke'*/
export const nativeAPIGatewayInvoke = (input: unknown): Promise<unknown> => {
  return Promise.resolve({});
};


export const clientConfig = {} as ClientConfig;