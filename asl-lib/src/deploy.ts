export namespace deploy {
  export const asStateMachine = <T>(fn: T): T => { return fn; }
  export const asLambda = <T>(fn: T): T => { return fn; }
  export const getParameter = <T>(parameterName: string, defaultValue?: T): T => {
    const val = parameters[parameterName] as T;
    if (!val && !defaultValue) throw new Error(`deployment parameter with name ${parameterName} not found`);
    return val;
  }
  export const setParameter = <T>(parameterName: string, value: T) => {
    parameters[parameterName] = value;
  }
}

const parameters: Record<string, unknown> = {};
