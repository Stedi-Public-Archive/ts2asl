import * as asl from "@cloudscript/asl-lib"

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
    asl.map({
        name: "For number Of numbers",
        items: () => numbers,
        iterator: number => {
            asl.map({
                name: "For letter Of letters",
                items: () => letters,
                iterator: letter => {
                    const combined = asl.pass({
                        parameters: () => ({ number, letter, global }),
                        comment: "combined = { number, letter, global }"
                    });
                    asl.typescriptInvoke({
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