//source: https://github.com/aws-samples/aws-stepfunctions-examples/blob/main/sam/app-decompose-for-parallelism/statemachine/runner-simplewait.asl.json
import * as asl from "@cloudscript/asl-lib"

export const main = asl.deploy.asStateMachine(async (context: Input) =>{
    asl.typescriptIf({
        condition: () => typeof context.testInput.delayInSeconds !== "number",
        then: async () => {
            context.testInput.delayInSeconds = 5;
        },
        comment: "if (typeof context.testInput.delayInSeconds !== \"number\") {\n    context.testInput.delayInSeconds = 5;\n  }"
    })
    await asl.wait({ seconds: context.testInput.delayInSeconds });
});

interface Input {
  testInput: {
    delayInSeconds: number | undefined;
  } 
}