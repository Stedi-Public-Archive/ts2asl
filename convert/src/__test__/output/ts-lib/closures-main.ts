import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
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
    asl.map({
        name: "numbers.map => number",
        items: () => numbers,
        iterator: number => {
            asl.map({
                name: "letters.map => letter",
                items: () => letters,
                iterator: letter => {
                    const combined = asl.pass({
                        name: "Assign combined",
                        parameters: () => ({ number, letter, global, inner: outer.middle.inner }),
                        comment: "combined = { number, letter, global, inner: outer.middle.inner }"
                    });
                    asl.typescriptInvoke({
                        name: "doSomething(combined)",
                        resource: doSomething,
                        parameters: () => combined,
                        comment: "doSomething(combined)"
                    });
                },
                comment: "letters.map(letter => {\n      const combined = { number, letter, global, inner: outer.middle.inner };\n      doSomething(combined);\n    })"
            });
        }
    });
});



export const doSomething = asl.deploy.asLambda(x => { })