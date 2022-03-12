import * as asl from "@ts2asl/asl-lib"
interface Result {
  Authorized: boolean;
}

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
    let result: Result = asl.task({ resource: "check-password", parameters: {} });
    asl.typescriptWhile({
        name: "While (true)",
        condition: () => true,
        block: async () => {
            asl.typescriptIf({
                name: "If (result.Authorized)",
                condition: () => result.Authorized,
                then: async () => {
                    break;
                },
                comment: "if (result.Authorized) {\n      break;\n    }"
            })
            asl.wait({ seconds: 1 });
            result = asl.task({ resource: "check-password", parameters: {} });
        }
    })
});
