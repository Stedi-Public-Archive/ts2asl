
import * as asl from "@ts2asl/asl-lib"

export const main = asl.deploy.asStateMachine(async (_input: {}, context: asl.StateMachineContext<{}>) =>{
    let str = asl.pass({
        name: "Assign str",
        parameters: () => "string",
        comment: "str = \"string\""
    });
    let num = asl.pass({
        name: "Assign num",
        parameters: () => 42,
        comment: "num = 42"
    });
    let bool = asl.pass({
        name: "Assign bool",
        parameters: () => true || false,
        comment: "bool = true || false"
    });
    let object = asl.pass({
        name: "Assign object",
        parameters: () => ({ str, num, bool }),
        comment: "object = { str, num, bool }"
    });
    let object2 = asl.pass({
        name: "Assign object2",
        parameters: () => ({ str: "string", num: 33, inner: object }),
        comment: "object2 = { str: \"string\", num: 33, inner: object }"
    });
    let array = asl.pass({
        name: "Assign array",
        parameters: () => [{ left: 1, right: 2 }, { left: 3, right: 4 }, { left: 5, right: 6 }],
        comment: "array = [{ left: 1, right: 2 }, { left: 3, right: 4 }, { left: 5, right: 6 }]"
    });
});
