import { ASL } from "../../../lib/ASL";

export const main = ASL.AsStateMachine((input: { password: string }) => {
  if (input.password === "password") {
    return;
  } else {
    throw new Error("invalid password")
  }
});