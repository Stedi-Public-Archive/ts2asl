import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
    const numbers = asl.pass({
        parameters: () => [0, 1, 2, 3],
        comment: "numbers = [0, 1, 2, 3]"
    });
    const letters = asl.pass({
        parameters: () => ["a", "b", "c", "d"],
        comment: "letters = [\"a\", \"b\", \"c\", \"d\"]"
    });
    const global = asl.pass({
        parameters: () => "prefix",
        comment: "global = \"prefix\""
    });
    const outer = asl.pass({
        parameters: () => ({ middle: { inner: 3 } }),
        comment: "outer = { middle: { inner: 3 } }"
    });
    asl.map({
        name: "For number Of numbers",
        items: () => numbers,
        iterator: number => {
            asl.map({
                name: "For letter Of letters",
                items: () => letters,
                iterator: letter => {
                    const combined = asl.pass({
                        parameters: () => ({ number, letter, global, inner: outer.middle.inner }),
                        comment: "combined = { number, letter, global, inner: outer.middle.inner }"
                    });
                    asl.typescriptInvoke({
                        name: "doSomething(combined)",
                        target: doSomething,
                        parameters: () => combined,
                        comment: "doSomething(combined)"
                    });
                }
            })
        }
    })
});



export const doSomething = asl.deploy.asLambda(x => { })