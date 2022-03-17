
import * as asl from "@ts2asl/asl-lib"

export const lambda = asl.deploy.asLambda(() => { return [""] });

export const simpleTry = asl.deploy.asStateMachine(async () => {
  try {
    const withoutTryCatch = lambda();
  } catch {
    console.log("it failed")
  }
});
export const simpleMultipleStatements = asl.deploy.asStateMachine(async () => {
  try {
    const withoutTryCatch = lambda();
    console.log("it succeeded");
  } catch {
    console.log("it failed");
  }
});
export const tryAroundPassState = asl.deploy.asStateMachine(async () => {
  try {
    console.log("this cannot fail");
  } catch {
    console.log("this never happens");
  }
});
export const tryFinally = asl.deploy.asStateMachine(async () => {
  try {
    lambda();
  } finally {
    console.log("finally")
  }
});
export const tryCatchFinally = asl.deploy.asStateMachine(async () => {
  try {
    lambda();
  } catch {
    console.log("failed")
  } finally {
    console.log("finally")
  }
});

