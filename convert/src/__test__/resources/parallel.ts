import * as asl from "@ts2asl/asl-lib";

export const worker = asl.deploy.asLambda((input: { something: string }) => { return input.something + "else" });

export const main = asl.deploy.asStateMachine(async (input: {}) => {
  const enclosedVar1 = { something: "here" };
  const enclosedVar2 = { something: "there" };
  await Promise.all([
    async () => {
      await worker(enclosedVar1);
    },
    async () => {
      await worker(enclosedVar2);
    },
  ]);
});