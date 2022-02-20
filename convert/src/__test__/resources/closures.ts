import * as asl from "@cloudscript/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) => {
  const numbers = [0, 1, 2, 3];
  const letters = ["a", "b", "c", "d"];
  const global = "prefix";
  for (const number of numbers) {
    for (const letter of letters) {
      const combined = { number, letter, global };
      doSomething(combined);
    }
  }
});


export const doSomething = asl.deploy.asLambda(x => { })