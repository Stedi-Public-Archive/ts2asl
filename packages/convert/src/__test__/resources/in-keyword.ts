
import * as asl from "@ts2asl/asl-lib";

export const IfStatementWithInKeyword = asl.deploy.asStateMachine(async () => {
  let val = { greeting: "hello" };
  if ("greeting" in val && !("somethingElse" in val)) {
    return "success";
  }
  return "failure";;
});