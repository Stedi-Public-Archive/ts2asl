import * as asl from "@ts2asl/asl-lib";

export const checkArgumentType = asl.deploy.asStateMachine(async (input: Input) => {
  if (typeof input.delayInSeconds !== "number") {
    throw new ValidationError("delayInSeconds must be a number");
  }
  await asl.wait({ seconds: input.delayInSeconds });
});

export const checkArgumentTypeProvideDefault = asl.deploy.asStateMachine(async (input: Input) => {
  if (typeof input.delayInSeconds !== "number") {
    input.delayInSeconds = 5;
  }
  await asl.wait({ seconds: input.delayInSeconds });
  return input.delayInSeconds;
});

export const checkArgumentRange = asl.deploy.asStateMachine(async (input: Input) =>{
    asl.typescriptIf({
        name: "If (typeof input.delayInS ...",
        condition: () => typeof input.delayInSeconds !== "number",
        then: async () => {
            input.delayInSeconds = 5;
        },
        comment: "if (typeof input.delayInSeconds !== \"number\") {\n    input.delayInSeconds = 5;\n  }"
    })
    asl.typescriptIf({
        name: "If (input.delayInSeconds ...",
        condition: () => input.delayInSeconds > 10 || input.delayInSeconds < 1,
        then: async () => {
            asl.fail({
                name: "Throw ValidationError",
                error: "ValidationError",
                cause: "delay in seconds must be numeric value no greater than 10 and no smaller than 1",
                comment: "throw new ValidationError(\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\");"
            })
        },
        comment: "if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {\n    throw new ValidationError(\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\");\n  }"
    })
    await asl.wait({ seconds: input.delayInSeconds });
    return input.delayInSeconds;
});

interface Input {
  delayInSeconds: number | undefined;
}

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}