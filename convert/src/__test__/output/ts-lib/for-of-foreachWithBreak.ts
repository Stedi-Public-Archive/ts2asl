import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) => {
  const arr = [1, 2, 3]
  for (const item of arr) {
    console.log(item);
  }
  console.log("done");
});

export const foreachWithBreak = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
    const arr = asl.pass({
        name: "Assign arr",
        parameters: () => [1, 2, 3],
        comment: "arr = [1, 2, 3]"
    });
    asl.typescriptForeach({
        name: "For item Of arr",
        items: () => arr,
        iterator: item => {
            asl.typescriptIf({
                name: "If (item === 1)",
                condition: () => item === 1,
                then: async () => { break; },
                comment: "if (item === 1) { break; }"
            })
            asl.pass({
                name: "Log (item)",
                parameters: () => item,
                comment: "console.log(item)"
            });
        }
    })
    asl.pass({
        name: "Log (\"done\")",
        parameters: () => "done",
        comment: "console.log(\"done\")"
    });
});

export const nestedForeach = asl.deploy.asStateMachine(async () => {
  const numbers = [0, 1, 2, 3];
  const letters = ["a", "b", "c", "d"];
  const global = "prefix";
  const outer = { middle: { inner: 3 } }
  for (const number of numbers) {
    for (const letter of letters) {
      const combined = { number, letter, global, inner: outer.middle.inner };
      console.log(combined);
    };
  };
});

