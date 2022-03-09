import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
    const numbers = asl.pass({
        name: "5: Assign numbers",
        parameters: () => [0, 1, 2, 3],
        comment: "numbers = [0, 1, 2, 3]"
    });
    const letters = asl.pass({
        name: "6: Assign letters",
        parameters: () => ["a", "b", "c", "d"],
        comment: "letters = [\"a\", \"b\", \"c\", \"d\"]"
    });
    const global = asl.pass({
        name: "7: Assign global",
        parameters: () => "prefix",
        comment: "global = \"prefix\""
    });
    const outer = asl.pass({
        name: "8: Assign outer",
        parameters: () => ({ middle: { inner: 3 } }),
        comment: "outer = { middle: { inner: 3 } }"
    });
    asl.map({
        name: "8: For number Of numbers",
        items: () => numbers,
        iterator: number => {
            asl.map({
                name: "9: For letter Of letters",
                items: () => letters,
                iterator: letter => {
                    const combined = asl.pass({
                        name: "11: Assign combined",
                        parameters: () => ({ number, letter, global, inner: outer.middle.inner }),
                        comment: "combined = { number, letter, global, inner: outer.middle.inner }"
                    });
                    asl.typescriptInvoke({
                        name: "11: doSomething(combined)",
                        resource: doSomething,
                        parameters: () => combined,
                        comment: "doSomething(combined)"
                    });
                }
            })
        }
    })
});



export const doSomething = asl.deploy.asLambda(x => { })