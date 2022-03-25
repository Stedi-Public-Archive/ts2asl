import * as asl from "@ts2asl/asl-lib"

export const stringTemplates = asl.deploy.asStateMachine(async () =>{
    let variable = asl.pass({
        name: "Assign variable",
        parameters: () => "some var",
        comment: "variable = \"some var\""
    });
    return {
        b: asl.states.format("hello {}", variable),
    };
});

