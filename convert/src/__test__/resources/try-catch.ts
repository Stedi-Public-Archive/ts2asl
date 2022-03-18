
import * as asl from "@ts2asl/asl-lib"

export const lambda = asl.deploy.asLambda(() => { return ["succeeded"] });

export const simpleTry = asl.deploy.asStateMachine(async () => {
  try {
    return lambda();
  } catch {
    return "it failed";
  }
});
export const simpleMultipleStatements = asl.deploy.asStateMachine(async () => {
  try {
    const withinTry = lambda();
    return withinTry;
  } catch {
    return "it failed";
  }
});
export const tryAroundPassState = asl.deploy.asStateMachine(async () => {
  try {
    return "this cannot fail";
  } catch {
    return "this never happens";
  }
});
export const tryFinally = asl.deploy.asStateMachine(async () => {
  try {
    lambda();
  } finally {
    return "finally";
  }
});
export const tryCatchFinally = asl.deploy.asStateMachine(async () => {
  try {
    lambda();
  } catch {
    console.log("failed")
  } finally {
    return "finally";
  }
});

