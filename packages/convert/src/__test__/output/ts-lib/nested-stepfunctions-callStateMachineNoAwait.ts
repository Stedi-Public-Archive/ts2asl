import * as asl from "@ts2asl/asl-lib";

export const callStateMachineWithAwait = asl.deploy.asStateMachine(async () => {
  const name = await childStateMachine({firstName: "Santa", lastName: "Claus" });
  return name;
});

export const callStateMachinePassReference = asl.deploy.asStateMachine(async () => {
  const args = {firstName: "Santa", lastName: "Claus" };
  const name = await childStateMachine(args);
  return name;
});


export const callStateMachineNoAwait = asl.deploy.asStateMachine(async () =>{
    asl.typescriptInvoke({
        name: "childStateMachine({firstN ...",
        resource: childStateMachine,
        parameters: () => ({ firstName: "Santa", lastName: "Claus" }),
        comment: "childStateMachine({firstName: \"Santa\", lastName: \"Claus\" })"
    });
});


export const callLambdaWithAwait = asl.deploy.asStateMachine(async () => {
  const name = await childLambda({firstName: "Santa", lastName: "Claus" });
  return name;
});


export const notAwaitedVoidExpression = asl.deploy.asStateMachine(async () => {
  void childStateMachine({firstName: "Santa", lastName: "Claus" });
});


export const childStateMachine = asl.deploy.asStateMachine(async (input: Arguments) => {
  return `${input.firstName} ${input.lastName}`
});

export const childLambda = asl.deploy.asLambda(async (input: Arguments) => {
  return `${input.firstName} ${input.lastName}`
});

interface Arguments { 
  firstName: string; 
  lastName: string;
}