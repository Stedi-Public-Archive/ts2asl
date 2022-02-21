import * as asl from "@cloudscript/asl-lib"
interface Result {
  Authorized: boolean;
}

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
    let result: Result = await asl.task({ resource: "check-password", parameters: {} });
    asl.typescriptWhile({
        condition: () => true,
        block: async () => {
            asl.typescriptIf({
                condition: () => result.Authorized,
                then: async () => {
                    break;
                },
                comment: "if (result.Authorized) {\n      break;\n    }"
            })
            await asl.wait({ seconds: 1 });
            result = await asl.task({ resource: "check-password", parameters: {} });
        }
    })
});
