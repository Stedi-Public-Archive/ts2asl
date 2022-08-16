import { CatchConfiguration, RetryConfiguration } from "./asl";

export namespace optimized {
  //https://docs.aws.amazon.com/step-functions/latest/dg/connect-api-gateway.html
  export const apiGatewayInvoke = (_input: OptimizedIntegration<ApiGatewayInvokeInput, IntegrationType>): Promise<ApiGatewayInvokeOutput> => {
    throw new Error("not implemented")
  }
  
  //https://docs.aws.amazon.com/step-functions/latest/dg/connect-lambda.html
  export const lambdaInvoke = (_input: OptimizedIntegration<LambdaInvokeInput, IntegrationType>): Promise<LambdaInvokeOutput> => {
    throw new Error("not implemented")
  }


  //https://docs.aws.amazon.com/step-functions/latest/dg/connect-sns.html
  export const snsPublish = (_input: OptimizedIntegration<SNSPublishInput, IntegrationType>): Promise<SNSPublishOutput> => {
    throw new Error("not implemented")
  }

  //https://docs.aws.amazon.com/step-functions/latest/dg/connect-sqs.html
  export const sqsSend = (_input: OptimizedIntegration<SQSSendInput, IntegrationType>): Promise<SQSSendOutput> => {
    throw new Error("not implemented")
  }
}

/////
// API GW 
/////

interface ApiGatewayInvokeInput {
  ApiEndpoint: string;
  Method: "GET"| "POST"| "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTION";
  Headers?: Record<string, string>;
  QueryParameters?: Record<string, string>;
  RequestBody?: {} | string;
  Stage?: string;
  Path?: string;
  AllowNullValues?: boolean;
  AuthType?: "NO_AUTH"| "IAM_ROLE" | "RESOURCE_POLICY";
}

interface ApiGatewayInvokeOutput {
  ResponseBody: {},
  Headers: Record<string, string>;
  StatusCode: number;
  StatusText: string;
}


/////
// Lambda
/////

interface LambdaInvokeInput {
  ClientContext?: string;
  FunctionName: string;
  InvocationType?: "Event" | "RequestResponse" | "DryRun";
  Qualifier?: string;
  Payload?: Record<string, unknown>
}

interface LambdaInvokeOutput {
  ExecutedVersion: string;
  Payload: string;
  SdkHttpMetadata: { HttpHeaders: Record<string, string>, HttpStatusCode: number };
  SdkResponseMetadata: { RequestId: string };
  StatusCode: number;
}

/////
// SNS
/////

interface SNSPublishInput {
  Message?: string;
  MessageAttributes?: Record<string, string>;
  MessageStructure?: string;
  PhoneNumber? :string;
  Subject?: string;
  TargetArn? :string;
  TopicArn?: string;
}
interface SNSPublishOutput {
  MessageId: string;
  SequenceNumber: string;
}

/////
// SQS
/////

interface SQSSendInput {
  DelaySeconds?:  number
  MessageAttribute?: Record<string, string>;
  MessageBody: string; 
  MessageDeduplicationId?:  string;
  MessageGroupId?: string;
  QueueUrl?: string;
}
interface SQSSendOutput {
  MessageId: string;
  SequenceNumber: string;
}





type OptimizedIntegration<T, TInvocationType> = {
  parameters: T;
  integrationType?: TInvocationType;
  name?: string;
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  timeoutSeconds?: number;
  heartbeatSeconds?: number;
}


type IntegrationType = "RequestResponse" | "WaitForTaskToken"