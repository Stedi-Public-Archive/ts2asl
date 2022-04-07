import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) => {
  const arr = [1, 2, 3]
  for (const item of arr) {
    console.log(item);
  }
  console.log("done");
});

export const foreachWithBreak = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) => {
  const arr = [1, 2, 3]
  for (const item of arr) {
    if (item === 1) { break; }
    console.log(item);
  }
  console.log("done");
});
