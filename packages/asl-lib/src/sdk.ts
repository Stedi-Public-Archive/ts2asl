import { clientConfig } from '.';
import { CatchConfiguration, RetryConfiguration } from './asl';

type ClassType<T> = {
  prototype: T;
};

type SdkIntegration<T> = {
  parameters: T;
  name?: string;
  catch?: CatchConfiguration;
  retry?: RetryConfiguration;
  timeoutSeconds?: number;
  heartbeatSeconds?: number;
}

type SdkIntegrationClient<T> = {
  [K in keyof T]: T[K] extends (input: infer Input, options: any, cb: (err: any, data?: infer TOutput) => void) => Promise<infer _X> ?  (input: SdkIntegration<Input>/*, options?: HttpHandlerOptions | undefined*/) => Promise<TOutput> : never;
};
export const sdk = <TClient>(
  client: ClassType<TClient> & {new(config:{}): TClient},
): SdkIntegrationClient<TClient> => {
  const sdkClient: any = new client({...clientConfig});
  return new Proxy(sdkClient, {
    get: function (target: TClient, name: string) {
        return (input: SdkIntegration<{}>, options?: any) => {
          const originalFunction = (target as any as Record<string, Function>)[name];
          return originalFunction.apply(sdkClient, [input.parameters, options]);
        };
    }
    }) as unknown as SdkIntegrationClient<TClient>;
}
