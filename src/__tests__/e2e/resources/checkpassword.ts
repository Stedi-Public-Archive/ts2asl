import { Deploy } from "asl-lib/src/asl";

export const main = Deploy.AsStateMachine((input: { password: string }) => {
  if (input.password === "password") {
    return;
  } else {
    throw new Error("invalid password")
  }
});