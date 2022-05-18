import { StateMachineContext } from "./asl";

export namespace testing {
  export const createTestContext = <TInput>(input: TInput, context: Partial<StateMachineContext<TInput>> = {}): StateMachineContext<TInput> => {
    return {
      ...context,
      stateMachine: {
        id: "",
        name: "",
        ...("stateMachine" in context ? context.stateMachine : {}),
      },
      execution: {
        id: "",
        name: "",
        roleArn: "",
        startTime: new Date().toISOString(),
        ...("execution" in context ? context.stateMachine : {}),
        input: input
      },
      task: {
        name: "",
        token: "",
      },
      state: {
        name: "",
        enteredTime: new Date().toISOString(),
      }
    }
  }
}