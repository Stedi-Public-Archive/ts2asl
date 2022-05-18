
import * as asl from "@ts2asl/asl-lib"

export const lambda = asl.deploy.asLambda(() => { return ["succeeded"] });

export const convertStringToNumber = asl.deploy.asStateMachine(async () =>{
    const num = asl.states.stringToJson("42");
    asl.typescriptIf({
        name: "If (num === 42)",
        condition: () => num === 42,
        then: async () => {
            const str = asl.states.format("{}", num);
            asl.typescriptIf({
                name: "If (str === \"42\")",
                condition: () => str === "42",
                then: async () => {
                    return "succeeded";
                },
                comment: "if (str === \"42\") {\n      return \"succeeded\";\n    }"
            })
        },
        comment: "if (num === 42) {\n    const str = asl.convert.numberToString(num);\n    if (str === \"42\") {\n      return \"succeeded\";\n    }\n  }"
    })
    asl.fail({
        name: "Throw Error",
        error: "Error",
        cause: "failed",
        comment: "throw new Error(\"failed\");"
    })
});

export const convertStringToBoolean = asl.deploy.asStateMachine(async () => {
  const bool = asl.convert.stringToBoolean("true");
  if (bool === true) {
    const str = asl.convert.booleanToString(bool);
    if (str === "true") {
      return "succeeded";
    }
  }
  throw new Error("failed");
});