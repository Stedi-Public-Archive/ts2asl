import * as asl from "@ts2asl/asl-lib";

export const worker = asl.deploy.asLambda((input?: { something: string }) => { return (input?.something ?? "") + "xxx" });

export const simple = asl.deploy.asStateMachine(async (input: {}) => {
  return await Promise.all([worker(), worker()]);
});

export const enclosedVariables = asl.deploy.asStateMachine(async (input: {}) =>{
    const enclosedVar1 = asl.pass({
        name: "Assign enclosedVar1",
        parameters: () => ({ something: "left" }),
        comment: "enclosedVar1 = { something: \"left\" }"
    });
    const enclosedVar2 = asl.pass({
        name: "Assign enclosedVar2",
        parameters: () => ({ something: "right" }),
        comment: "enclosedVar2 = { something: \"right\" }"
    });
    return await asl.parallel({
        branches: [
            () => {
                await asl.typescriptInvoke({
                    name: "worker(enclosedVar1)",
                    resource: worker,
                    parameters: () => enclosedVar1,
                    comment: "worker(enclosedVar1)"
                });
            },
            () => {
                await asl.typescriptInvoke({
                    name: "worker(enclosedVar2)",
                    resource: worker,
                    parameters: () => enclosedVar2,
                    comment: "worker(enclosedVar2)"
                });
            }
        ],
        comment: "Promise.all([\n    async () => {\n      await worker(enclosedVar1);\n    },\n    async () => {\n      await worker(enclosedVar2);\n    },\n  ])"
    });
});