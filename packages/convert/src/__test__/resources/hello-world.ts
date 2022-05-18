import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (input: IInput) => {
  if (typeof input.name !== "string") {
    input.name = "World";
  }
  const rnd = await random();
  return {
    greeting: `Hello ${input.name}`,
    luckyNumber: rnd
  }
});

export const random = asl.deploy.asLambda(async (input: { min?: number; max?: number } = {}) => {
  const min = input.min ?? 0;
  const max = input.max ?? 100;
  return Math.round(Math.random() * (max - min) + min);
});

interface IInput {
  name: string;
}
