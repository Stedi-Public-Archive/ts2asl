import * as asl from "@ts2asl/asl-lib"
interface Result {
  Authorized: boolean;
}

export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) => {
  let result: Result = await asl.task({ resource: "check-password", parameters: {} });
  do {
    await asl.wait({ seconds: 1 });
    result = await asl.task({ resource: "check-password", parameters: {} });
  } while (!result.Authorized)
});
