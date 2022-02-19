
import * as asl from "@cloudscript/asl-lib"
import { StateMachineContext } from "@cloudscript/asl-lib";
import { DateTime } from "aws-sdk/clients/devicefarm";

export const main = asl.deploy.asStateMachine(async (input: IInput, context: StateMachineContext<IInput>) => {
  const x = {
    name: input.name,
    execution: context.execution.id
  }
  consoleLog(x);
});


interface IInput {
  name: string;
  totalDue: number;
  orders: [{ orderId: string, date: DateTime }];
}

function consoleLog(x: { name: string; execution: string; }) {
  throw new Error("Function not implemented.");
}
