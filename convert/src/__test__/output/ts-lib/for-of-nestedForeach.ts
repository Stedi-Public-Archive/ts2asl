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

export const nestedForeach = asl.deploy.asStateMachine(async () =>{
    const numbers = asl.pass({
        name: "Assign numbers",
        parameters: () => [0, 1, 2, 3],
        comment: "numbers = [0, 1, 2, 3]"
    });
    const letters = asl.pass({
        name: "Assign letters",
        parameters: () => ["a", "b", "c", "d"],
        comment: "letters = [\"a\", \"b\", \"c\", \"d\"]"
    });
    const global = asl.pass({
        name: "Assign global",
        parameters: () => "prefix",
        comment: "global = \"prefix\""
    });
    const outer = asl.pass({
        name: "Assign outer",
        parameters: () => ({ middle: { inner: 3 } }),
        comment: "outer = { middle: { inner: 3 } }"
    });
    asl.typescriptForeach({
        name: "For number Of numbers",
        items: () => numbers,
        iterator: number => {
            asl.typescriptForeach({
                name: "For letter Of letters",
                items: () => letters,
                iterator: letter => {
                    const combined = asl.pass({
                        name: "Assign combined",
                        parameters: () => ({ number, letter, global, inner: outer.middle.inner }),
                        comment: "combined = { number, letter, global, inner: outer.middle.inner }"
                    });
                    asl.pass({
                        name: "Log (combined)",
                        parameters: () => combined,
                        comment: "console.log(combined)"
                    });
                }
            })
            ;
        }
    })
    ;
});

