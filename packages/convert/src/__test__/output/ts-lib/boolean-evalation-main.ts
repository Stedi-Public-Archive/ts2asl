import * as asl from "@ts2asl/asl-lib";

export const main = asl.deploy.asStateMachine(async () =>{
    const data = {
        num: 42,
        text: "text",
        undefined: undefined,
        null: null,
        timestamp: "2016-03-14T01:59:00Z"
    };
    asl.typescriptIf({
        name: "If (typeof data.num !== \" ...",
        condition: () => typeof data.num !== "number",
        then: async () => {
            asl.fail({
                name: "Throw ValidationError",
                error: "ValidationError",
                cause: "num expected to be number",
                comment: "throw new ValidationError(\"num expected to be number\");"
            })
        },
        comment: "if (typeof data.num !== \"number\") {\n    throw new ValidationError(\"num expected to be number\");\n  }"
    })
    asl.typescriptIf({
        name: "If (data.num !== 42)",
        condition: () => data.num !== 42,
        then: async () => {
            asl.fail({
                name: "Throw ValidationError",
                error: "ValidationError",
                cause: "num expected to be 42",
                comment: "throw new ValidationError(\"num expected to be 42\");"
            })
        },
        comment: "if (data.num !== 42) {\n    throw new ValidationError(\"num expected to be 42\");\n  }"
    })
    asl.typescriptIf({
        name: "If (typeof data.text !== ...",
        condition: () => typeof data.text !== "string",
        then: async () => {
            asl.fail({
                name: "Throw ValidationError",
                error: "ValidationError",
                cause: "text expected to be string",
                comment: "throw new ValidationError(\"text expected to be string\");"
            })
        },
        comment: "if (typeof data.text !== \"string\") {\n    throw new ValidationError(\"text expected to be string\");\n  }"
    })
    asl.typescriptIf({
        name: "If (data.text !== \"text\")",
        condition: () => data.text !== "text",
        then: async () => {
            asl.fail({
                name: "Throw ValidationError",
                error: "ValidationError",
                cause: "text expected to be 'text'",
                comment: "throw new ValidationError(\"text expected to be 'text'\");"
            })
        },
        comment: "if (data.text !== \"text\") {\n    throw new ValidationError(\"text expected to be 'text'\");\n  }"
    })
    asl.typescriptIf({
        name: "If (data.undefined)",
        condition: () => data.undefined,
        then: async () => {
            asl.fail({
                name: "Throw ValidationError",
                error: "ValidationError",
                cause: "undefined expected to be non-truthy'",
                comment: "throw new ValidationError(\"undefined expected to be non-truthy'\");"
            })
        },
        comment: "if (data.undefined) {\n    throw new ValidationError(\"undefined expected to be non-truthy'\");\n  }"
    })
    asl.typescriptIf({
        name: "If (data.null)",
        condition: () => data.null,
        then: async () => {
            asl.fail({
                name: "Throw ValidationError",
                error: "ValidationError",
                cause: "null expected to be non-truthy'",
                comment: "throw new ValidationError(\"null expected to be non-truthy'\");"
            })
        },
        comment: "if (data.null) {\n    throw new ValidationError(\"null expected to be non-truthy'\");\n  }"
    })
    asl.typescriptIf({
        name: "If (typeof data.timestamp ...",
        condition: () => typeof data.timestamp !== "string",
        then: async () => {
            asl.fail({
                name: "Throw ValidationError",
                error: "ValidationError",
                cause: "timestamp expected to be string'",
                comment: "throw new ValidationError(\"timestamp expected to be string'\");"
            })
        },
        comment: "if (typeof data.timestamp !== \"string\") {\n    throw new ValidationError(\"timestamp expected to be string'\");\n  }"
    })
    return "success";
});

export const numericComparison = asl.deploy.asStateMachine(async () => {
  const condition = 42;
  const items = [2, 42, 3];
  const listWithReturned = items.map(item => {
    if (item === condition) {
      return { returned: item };
    }
    return {};
  });
  const item = listWithReturned.filter(x => x.returned);
  return item;
});

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}