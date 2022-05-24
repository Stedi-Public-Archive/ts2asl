import * as asl from "@ts2asl/asl-lib";

export const callStateMachineWithAwait = asl.deploy.asStateMachine(async () => {
  const name = await childStateMachine({firstName: "Santa", lastName: "Claus" });
  return name;
});

export const callStateMachineNoAwait = asl.deploy.asStateMachine(async () => {
  childStateMachine({firstName: "Santa", lastName: "Claus" });
});


export const callLambdaWithAwait = asl.deploy.asStateMachine(async () => {
  const name = await childLambda({firstName: "Santa", lastName: "Claus" });
  return name;
});


// export const callLambdaWithAwaitUsingTask = asl.deploy.asStateMachine(async () => {
//   let name: any = await asl.sdkSfnStartSyncExecution( { parameters: {} });
//   switch(result.Status) {
//     case "SUCCEEDED":
//       result = asl.states.stringToJson(result.Output);
//       break;
//     case "FAILED":
//       throw new Error("Invoking state machine XXXXX failed");
//     case "TIMED_OUT":
//       throw new Error("Invoking state machine XXXXX timed out");
//   }
//   return name;
// });


// this is not supported
// export const callLambdaNoAwait = asl.deploy.asStateMachine(async () => {
//   childLambda({firstName: "Santa", lastName: "Claus" });
// });

export const notAwaitedVoidExpression = asl.deploy.asStateMachine(async () => {
  void childStateMachine({firstName: "Santa", lastName: "Claus" });
});


export const childStateMachine = asl.deploy.asStateMachine(async (input: Arguments) =>{
    return asl.states.format("{} {}", input.firstName, input.lastName);
});

export const childLambda = asl.deploy.asLambda(async (input: Arguments) => {
  return `${input.firstName} ${input.lastName}`
});

interface Arguments { 
  firstName: string; 
  lastName: string;
}