import * as asl from "@ts2asl/asl-lib"

export const throwDifferentErrors = asl.deploy.asStateMachine(async (input: Input) =>{
    asl.typescriptIf({
        name: "If (input.delayInSeconds ...",
        condition: () => input.delayInSeconds > 10 || input.delayInSeconds < 1,
        then: async () => {
            asl.fail({
                name: "Throw ValidationError",
                error: "ValidationError",
                cause: "delay in seconds must be numeric value no greater than 10 and no smaller than 1",
                comment: "throw new ValidationError(\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\")"
            })
        },
        comment: "if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {\n    throw new ValidationError(\"delay in seconds must be numeric value no greater than 10 and no smaller than 1\")\n  }"
    })
    asl.fail({
        name: "Throw NotImplemented",
        error: "NotImplemented",
        cause: "not implemented",
        comment: "throw new NotImplemented(\"not implemented\")"
    })
});


class NotImplemented extends Error {
  constructor(message: string) {
    super(message);
  }
}
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
interface Input {
  delayInSeconds: number | undefined;
}
