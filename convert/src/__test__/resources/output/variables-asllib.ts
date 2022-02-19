
import * as asl from "@cloudscript/asl-lib"
import { StateMachineContext } from "@cloudscript/asl-lib";
import { DateTime } from "aws-sdk/clients/devicefarm";

export const main = asl.deploy.asStateMachine(async (input: IInput, context: StateMachineContext<IInput>) =>{
    const x = asl.pass({
        parameters: () => ({
            name: input.name,
            execution: context.execution.id
        }),
        comment: "x = {\n    name: input.name,\n    execution: context.execution.id\n  }"
    });
    asl.typescriptInvoke({
        target: consoleLog,
        parameters: () => x,
        comment: "consoleLog(x)"
    });
});


interface IInput {
  name: string;
  totalDue: number;
  orders: [{ orderId: string, date: DateTime }];
}

function consoleLog(x: { name: string; execution: string; }) {
  throw new Error("Function not implemented.");
}
