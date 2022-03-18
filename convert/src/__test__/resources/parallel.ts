import * as asl from "@ts2asl/asl-lib";

export const worker = asl.deploy.asLambda((input?: { something: string }) => { return (input?.something ?? "") + "xxx" });

export const simple = asl.deploy.asStateMachine(async (input: {}) => {
  return await Promise.all([worker(), worker()]);
});

export const enclosedVariables = asl.deploy.asStateMachine(async (input: {}) => {
  const enclosedVar1 = { something: "left" };
  const enclosedVar2 = { something: "right" };
  return await Promise.all([
    async () => {
      await worker(enclosedVar1);
    },
    async () => {
      await worker(enclosedVar2);
    },
  ]);
});