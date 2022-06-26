import * as asl from "@ts2asl/asl-lib";

export const main = asl.deploy.asStateMachine(async () => {
  const data = {
    num: 42,
    text: "text",
    undefined: undefined,
    null: null,
    timestamp: "2016-03-14T01:59:00Z"
  };

  if (typeof data.num !== "number") {
    throw new ValidationError("num expected to be number");
  }

  if (data.num !== 42) {
    throw new ValidationError("num expected to be 42");
  }

  if (typeof data.text !== "string") {
    throw new ValidationError("text expected to be string");
  }

  if (data.text !== "text") {
    throw new ValidationError("text expected to be 'text'");
  }

  if (data.undefined) {
    throw new ValidationError("undefined expected to be non-truthy'");
  }

  if (data.null) {
    throw new ValidationError("null expected to be non-truthy'");
  }

  if (typeof data.timestamp !== "string") {
    throw new ValidationError("timestamp expected to be string'");
  }
  return "success";
});

export const numericComparison = asl.deploy.asStateMachine(async () =>{
    const condition = 42;
    const items = [2, 42, 3];
    const listWithReturned = asl.map({
        name: "items.map => item",
        items: () => items,
        iterator: item => {
            asl.typescriptIf({
                name: "If (item === condition)",
                condition: () => item === condition,
                then: async () => {
                    return { returned: item };
                },
                comment: "if (item === condition) {\n      return { returned: item };\n    }"
            })
            return {};
        },
        comment: "items.map(item => {\n    if (item === condition) {\n      return { returned: item };\n    }\n    return {};\n  })"
    });
    const item = asl.jsonPathFilter(listWithReturned, (x) => x.returned);
    return item;
});

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}