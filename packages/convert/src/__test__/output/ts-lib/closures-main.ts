import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async () =>{
    const numbers = [0, 1, 2, 3];
    const letters = ["a", "b", "c", "d"];
    const global = "prefix";
    const outer = { middle: { inner: 3 } };
    asl.map({
        name: "numbers.map => number",
        items: () => numbers,
        iterator: number => {
            asl.map({
                name: "letters.map => letter",
                items: () => letters,
                iterator: letter => {
                    const combined = { number, letter, global, inner: outer.middle.inner };
                    asl.typescriptInvoke({
                        name: "doSomething(combined)",
                        resource: doSomething,
                        parameters: () => combined,
                        comment: "doSomething(combined)"
                    });
                },
                comment: "letters.map(letter => {\n      const combined = { number, letter, global, inner: outer.middle.inner };\n      doSomething(combined);\n    })"
            });
        },
        comment: "numbers.map(number => {\n    letters.map(letter => {\n      const combined = { number, letter, global, inner: outer.middle.inner };\n      doSomething(combined);\n    });\n  })"
    });
});



export const doSomething = asl.deploy.asLambda(x => { })