import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (input: IInput) =>{
    asl.typescriptIf({
        name: "If (typeof input.name !== ...",
        condition: () => typeof input.name !== "string",
        then: async () => {
            input.name = "World";
        },
        comment: "if (typeof input.name !== \"string\") {\n    input.name = \"World\";\n  }"
    })
    const rnd = await asl.typescriptInvoke({
        name: "random()",
        resource: random,
        comment: "random()"
    });
    return {
        greeting: asl.states.format("Hello {}", input.name),
        luckyNumber: rnd
    };
});

export const random = asl.deploy.asLambda(async (input: { min?: number; max?: number } = {}) => {
  const min = input.min ?? 0;
  const max = input.max ?? 100;
  return Math.round(Math.random() * (max - min) + min);
});

interface IInput {
  name: string;
}
