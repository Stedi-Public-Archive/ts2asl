import * as asl from "@ts2asl/asl-lib";
import { handler as ReplayPrefixerHandler } from "../../functions/replay/prefixer";

const replayPrefixer = asl.deploy.asLambda((input: StateMachineInput) => { return [""] });

//option 1: native typescript
// export const main = asl.deploy.asStateMachine(async (input: StateMachineInput) => {
//   const result = await replayPrefixer(input);
//   for (const prefix of result) {
//     await asl.nativeSfnStartExecution({
//       parameters: {
//         input: asl.states.format("{}", prefix),
//         stateMachineArn: asl.deploy.getParameter("stateMachineArn"),
//       },
//     });
//   }
// });

//option 2: asl lib typescript
export const main = asl.deploy.asStateMachine(async (input: StateMachineInput) =>{
    const result = asl.typescriptInvoke({
        name: "22: replayPrefixer(input)",
        resource: replayPrefixer,
        parameters: () => input,
        comment: "replayPrefixer(input)"
    });
    asl.map({
        maxConcurrency: 5,
        items: result,
        iterator: (prefix) => {
            asl.nativeSfnStartExecution({
                parameters: {
                    input: asl.states.format("{}", prefix),
                    stateMachineArn: asl.deploy.getParameter("stateMachineArn"),
                },
            });
        },
    });
});

interface StateMachineInput {
  startDate: string;
  endDate?: string;
}
