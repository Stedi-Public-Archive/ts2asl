export namespace deploy {
  export const asStateMachine = <T>(fn: T): T => { return fn; }
  export const asLambda = <T>(fn: T): T => { return fn; }
  export const getParameter = (parameterName: string): string => {
    return `[!parameter[${parameterName}]]`;
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
  // export const evaluate = <T>(identifier: T): T => {
  //   return identifier;
  // }
}

const parameters: Record<string, unknown> = {};
