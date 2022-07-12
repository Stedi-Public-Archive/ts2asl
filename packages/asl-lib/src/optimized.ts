import { CatchConfiguration, RetryConfiguration } from "./asl";

export namespace optimized {
  //https://docs.aws.amazon.com/step-functions/latest/dg/connect-api-gateway.html
  export const apiGatewayInvoke = (_input: OptimizedIntegration<ApiGatewayInvokeInput>): Promise<ApiGatewayInvokeOutput> => {
    throw new Error("not implemented")
  }
}

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

type OptimizedIntegration<T> = {
  parameters: T;
  name?: string;
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  timeoutSeconds?: number;
  heartbeatSeconds?: number;
}