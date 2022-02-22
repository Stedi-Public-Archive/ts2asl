
import * as asl from "@cloudscript/asl-lib"
import { StateMachineContext } from "@cloudscript/asl-lib";

export const main = asl.deploy.asStateMachine(async (input: IInput, context: StateMachineContext<IInput>) =>{
    asl.typescriptIf({
        name: "If (typeof input.name !== ...",
        condition: () => typeof input.name !== "string",
        then: async () => {
            input.name = "fred";
        },
        comment: "if (typeof input.name !== \"string\") {\n    input.name = \"fred\";\n  }"
    })
    const x = asl.pass({
        parameters: () => ({
            name: input.name,
            executionId: context.execution.id
        }),
        comment: "x = {\n    name: input.name,\n    executionId: context.execution.id\n  }"
    });
    const y = asl.pass({
        parameters: () => ({
            x,
            somethingLiteral: ["one", 2, "three"],
            startTime: context.execution.startTime,
            func: asl.states.jsonToString(x),
            number: asl.states.stringToJson("123") as number,
            arr: asl.states.array(1, 2, 3, 4, 5, 6),
        }),
        comment: "y = {\n    x,\n    somethingLiteral: [\"one\", 2, \"three\"],\n    startTime: context.execution.startTime,\n    func: asl.states.jsonToString(x),\n    number: asl.states.stringToJson(\"123\") as number,\n    arr: asl.states.array(1, 2, 3, 4, 5, 6),\n  }"
    });
    return y;
});


interface IInput {
  name: string;
  totalDue: number;
  orders: [{ orderId: string, date: Date }];
}
