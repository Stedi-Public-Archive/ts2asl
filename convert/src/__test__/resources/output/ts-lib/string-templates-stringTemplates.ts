import * as asl from "@ts2asl/asl-lib"

export const stringTemplates = asl.deploy.asStateMachine(async () =>{
    let variable = asl.pass({
        name: "Assign variable",
        parameters: () => "some var",
        comment: "variable = \"some var\""
    });
    asl.pass({
        parameters: () => ({
            b: `hello ${variable}`,
        }),
        comment: "console.log({\n    b: `hello ${variable}`,\n  })"
    });
});

