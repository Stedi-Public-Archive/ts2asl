import { CatchConfiguration, RetryConfiguration } from "./asl";

export namespace optimized {
  //https://docs.aws.amazon.com/step-functions/latest/dg/connect-api-gateway.html
  export const apiGatewayInvoke = (_input: OptimizedIntegration<ApiGatewayInvokeInput>): Promise<ApiGatewayInvokeOutput> => {
    throw new Error("not implemented")
  }
}

interface ApiGatewayInvokeInput {
  apiEndpoint: string;
  method: "GET"| "POST"| "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTION";
  headers?: Record<string, string>;
  queryParameters?: Record<string, string>;
  requestBody?: {} | string;
  stage?: string;
  path?: string;
  allowNullValues?: boolean;
  authType?: "NO_AUTH"| "IAM_ROLE" | "RESOURCE_POLICY";
}
interface ApiGatewayInvokeOutput {
  responseBody: {},
  headers: Record<string, string>;
  statusCode: number;
  statusText: string;
}

type OptimizedIntegration<T> = {
  parameters: T;
  name?: string;
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  timeoutSeconds?: number;
  heartbeatSeconds?: number;
}