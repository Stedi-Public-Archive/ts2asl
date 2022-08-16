
import * as asl from "@ts2asl/asl-lib";

export const dateTimeNow = asl.deploy.asStateMachine(async () => {
  return asl.jsonPath("$$.State.EnteredTime");
});

export const dateTimeUsingJsonPath = asl.deploy.asStateMachine(async () => {
  return new Date().toISOString();
});