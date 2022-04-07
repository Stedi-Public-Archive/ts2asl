import * as asl from "@ts2asl/asl-lib"
interface Result {
  Authorized: boolean;
}

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) =>{
    let result: Result = await asl.task({ resource: "check-password", parameters: {} });
    asl.typescriptDoWhile({
        name: "Do While (!result.Authorized)",
        condition: () => !result.Authorized,
        block: async () => {
            await asl.wait({ seconds: 1 });
            result = await asl.task({ resource: "check-password", parameters: {} });
        },
        comment: "do {\n    await asl.wait({ seconds: 1 });\n    result = await asl.task({ resource: \"check-password\", parameters: {} });\n  } while (!result.Authorized)"
    })
});
