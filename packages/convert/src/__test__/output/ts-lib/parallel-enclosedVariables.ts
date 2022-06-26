import * as asl from "@ts2asl/asl-lib";

export const worker = asl.deploy.asLambda(async (input?: { something: string }) => {   
  return "received " + input?.something ?? "<null>";
});

export const simple = asl.deploy.asStateMachine(async (input: {}) => {
  return await Promise.all([worker(), worker()]);
});

export const enclosedVariables = asl.deploy.asStateMachine(async (input: {}) =>{
    const enclosedVar1 = { something: "left" };
    const enclosedVar2 = { something: "right" };
    return await asl.parallel({
        branches: [
            () => { let return_var = asl.typescriptInvoke({
                name: "worker(enclosedVar1)",
                resource: worker,
                parameters: () => enclosedVar1,
                comment: "worker(enclosedVar1)"
            }); return return_var; },
            () => { let return_var = asl.typescriptInvoke({
                name: "worker(enclosedVar2)",
                resource: worker,
                parameters: () => enclosedVar2,
                comment: "worker(enclosedVar2)"
            }); return return_var; }
        ],
        comment: "Promise.all([\n    worker(enclosedVar1),\n    worker(enclosedVar2),\n  ])"
    });
});