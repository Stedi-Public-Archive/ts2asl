
import * as asl from "@ts2asl/asl-lib"
import { StateMachineContext } from "@ts2asl/asl-lib";

export const main = asl.deploy.asStateMachine(async (input: IInput, context: StateMachineContext<IInput>) =>{
    asl.typescriptIf({
        name: "6: If (typeof input.name !== ...",
        condition: () => typeof input.name !== "string",
        then: async () => {
            input.name = "fred";
        },
        comment: "if (typeof input.name !== \"string\") {\n    input.name = \"fred\";\n  }"
    })
    const x = asl.pass({
        name: "11: Assign x",
        parameters: () => ({
            name: input.name,
            executionId: context.execution.id
        }),
        comment: "x = {\n    name: input.name,\n    executionId: context.execution.id\n  }"
    });
    const y = asl.pass({
        name: "16: Assign y",
        parameters: () => ({
            x,
            somethingLiteral: ["one", 2, "three"],
            startTime: context.execution.startTime,
            func: asl.states.jsonToString(x),
            number: asl.states.stringToJson("123"),
            arr: asl.states.array(1, 2, 3, 4, 5, 6),
        })
    });
    return y;
});


interface IInput {
  name: string;
  totalDue: number;
  orders: [{ orderId: string, date: Date }];
}
