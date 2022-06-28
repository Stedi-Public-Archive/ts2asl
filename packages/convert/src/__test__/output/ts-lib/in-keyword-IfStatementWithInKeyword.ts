
import * as asl from "@ts2asl/asl-lib";

export const IfStatementWithInKeyword = asl.deploy.asStateMachine(async () =>{
    let val = { greeting: "hello" };
    asl.typescriptIf({
        name: "If (\"greeting\" in val && ...",
        condition: () => "greeting" in val && !("somethingElse" in val),
        then: async () => {
            return "success";
        },
        comment: "if (\"greeting\" in val && !(\"somethingElse\" in val)) {\n    return \"success\";\n  }"
    })
    return "failure";
    ;
});