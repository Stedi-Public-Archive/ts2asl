
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