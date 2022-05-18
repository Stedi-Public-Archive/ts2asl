export namespace deploy {
  const explicitlySetParameters: Record<string, string> = {};
  export const asStateMachine = <T>(fn: T): T => { return fn; }
  export const asLambda = <T>(fn: T): T => { return fn; }
  export const getParameter = (parameterName: string): string => {
    if (explicitlySetParameters[parameterName] !== undefined) {
      return explicitlySetParameters[parameterName];
    }
    return `[!parameter[${parameterName}]]`;
  }
  export const setParameter = (parameterName: string, value: string): void => {
    explicitlySetParameters[parameterName] = value;
  }
  export const getLambdaName = (functionName: string | Function): string => {
    return `[!lambda[${functionName}]name]`;
  }
  export const getLambdaArn = (functionName: string | Function): string => {
    return `[!lambda[${functionName}]arn]`;
  }
  export const getStateMachineName = (functionName: string | Function): string => {
    return `[!state-machine[${functionName}]name]`;
  }
  export const getStateMachineArn = (functionName: string | Function): string => {
    return `[!state-machine[${functionName}]arn]`;
  }
  export const evalConst = <T>(identifier: T): T => {
    return identifier;
  }
}

const parameters: Record<string, unknown> = {};
