import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () => {
  const numbers = [0, 1, 2, 3];
  const letters = ["a", "b", "c", "d"];
  const global = "prefix";
  const outer = { middle: { inner: 3 } }
  numbers.map(number => {
    letters.map(letter => {
      const combined = { number, letter, global, inner: outer.middle.inner };
      doSomething(combined);
    });
  });
});



export const doSomething = asl.deploy.asLambda(x => { })