
import * as asl from "@ts2asl/asl-lib"

export const lambda = asl.deploy.asLambda(() => { return ["succeeded"] });

export const convertStringToNumber = asl.deploy.asStateMachine(async () => {
  const num = asl.convert.stringToNumber("42");
  if (num === 42) {
    const str = asl.convert.numberToString(num);
    if (str === "42") {
      return "succeeded";
    }
  }
  throw new Error("failed");
});

export const convertStringToBoolean = asl.deploy.asStateMachine(async () =>{
    const bool = asl.states.stringToJson("true");
    asl.typescriptIf({
        name: "If (bool === true)",
        condition: () => bool === true,
        then: async () => {
            const str = asl.states.format("{}", bool);
            asl.typescriptIf({
                name: "If (str === \"true\")",
                condition: () => str === "true",
                then: async () => {
                    return "succeeded";
                },
                comment: "if (str === \"true\") {\n      return \"succeeded\";\n    }"
            })
        },
        comment: "if (bool === true) {\n    const str = asl.convert.booleanToString(bool);\n    if (str === \"true\") {\n      return \"succeeded\";\n    }\n  }"
    })
    asl.fail({
        name: "Throw Error",
        error: "Error",
        cause: "failed",
        comment: "throw new Error(\"failed\");"
    })
});