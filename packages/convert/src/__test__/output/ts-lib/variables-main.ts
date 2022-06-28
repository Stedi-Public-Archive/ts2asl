
import * as asl from "@ts2asl/asl-lib"
import { StateMachineContext } from "@ts2asl/asl-lib";

export const main = asl.deploy.asStateMachine(async (input: IInput, context: StateMachineContext<IInput>) =>{
    asl.typescriptIf({
        name: "If (typeof input.name !== ...",
        condition: () => typeof input.name !== "string",
        then: async () => {
            input.name = "fred";
        },
        comment: "if (typeof input.name !== \"string\") {\n    input.name = \"fred\";\n  }"
    })
    const x = {
        name: input.name,
        executionId: context.execution.id
    };
    const y = {
        x,
        somethingLiteral: ["one", 2, "three"],
        startTime: context.execution.startTime,
        func: asl.states.jsonToString(x),
        func2: asl.states.jsonToString({ field: 'val' }),
        fmt: asl.states.format("hello {}", x),
        number: asl.states.stringToJson("123"),
        arr: asl.states.array(1, 2, 3, 4, 5, 6),
    };
    return y;
});


interface IInput {
  name: string;
  totalDue: number;
  orders: [{ orderId: string, date: Date }];
}
