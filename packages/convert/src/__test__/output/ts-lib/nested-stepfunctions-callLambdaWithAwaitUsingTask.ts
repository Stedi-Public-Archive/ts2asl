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


export const callLambdaWithAwaitUsingTask = asl.deploy.asStateMachine(async () =>{
    let name: any = await asl.sdkSfnStartSyncExecution({ parameters: {} });
    asl.typescriptSwitch({
        name: "Switch (result.Status)",
        expression: () => result.Status,
        cases: [
            {
                label: "SUCCEEDED",
                block: async () => {
                    result = asl.states.stringToJson(result.Output);
                    break;
                }
            },
            {
                label: "FAILED",
                block: async () => {
                    asl.fail({
                        name: "Throw Error",
                        error: "Error",
                        cause: "Invoking state machine XXXXX failed",
                        comment: "throw new Error(\"Invoking state machine XXXXX failed\");"
                    })
                }
            },
            {
                label: "TIMED_OUT",
                block: async () => {
                    asl.fail({
                        name: "Throw Error",
                        error: "Error",
                        cause: "Invoking state machine XXXXX timed out",
                        comment: "throw new Error(\"Invoking state machine XXXXX timed out\");"
                    })
                }
            }
        ],
        comment: "switch(result.Status) {\n    case \"SUCCEEDED\":\n      result = asl.states.stringToJson(result.Output);\n      break;\n    case \"FAILED\":\n      throw new Error(\"Invoking state machine XXXXX failed\");\n    case \"TIMED_OUT\":\n      throw new Error(\"Invoking state machine XXXXX timed out\");\n  }"
    })
    return name;
});


// this is not supported
// export const callLambdaNoAwait = asl.deploy.asStateMachine(async () => {
//   childLambda({firstName: "Santa", lastName: "Claus" });
// });

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