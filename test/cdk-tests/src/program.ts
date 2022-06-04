import * as asl from "@ts2asl/asl-lib"
import { lambdaImplementation } from "./lib/lambda";

export const main = asl.deploy.asStateMachine(async () => {
  const result = await lambda({num: 42, str: "hello"}) as {num: number};;
  const result2 = await lambda({num: 42, str: "hello"}) as {num: number};
  if (result.num === result2.num) {
    return "success"
  }
  return "failed";
});


export const lambda = asl.deploy.asLambda(lambdaImplementation);