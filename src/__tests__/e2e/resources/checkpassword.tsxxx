import { Deploy } from "asl-lib/src/asl";

export const main = Deploy.asStateMachine((input: { password: string }) => {
  if (input.password === "password") {
    return;
  } else {
    throw new Error("invalid password")
  }
});