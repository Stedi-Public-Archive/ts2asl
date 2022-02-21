import * as asl from "@cloudscript/asl-lib"

export const main = asl.deploy.asStateMachine(async (input: Input) => {
  asl.typescriptIf({
    condition: () => typeof input.delayInSeconds !== "number",
    then: async () => {
      input.delayInSeconds = 5;
    },
    comment: "if (typeof input.delayInSeconds !== \"number\") {\n    input.delayInSeconds = 5;\n  }"
  })
  asl.typescriptIf({
    condition: () => input.delayInSeconds! > 10 || input.delayInSeconds! < 1,
    then: async () => {
      asl.fail({
        error: "ValidationError",
        cause: "delay in seconds must be numeric value no greater than 10 and no smaller than 1",
        comment: "throw new ValidationError(\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\")"
      })
    },
    comment: "if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {\n    throw new ValidationError(\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\")\n  }"
  })
  await asl.wait({ seconds: input.delayInSeconds });
});

interface Input {
  delayInSeconds: number | undefined;
}

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}