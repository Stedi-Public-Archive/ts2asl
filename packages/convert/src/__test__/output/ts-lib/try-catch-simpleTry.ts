
import * as asl from "@ts2asl/asl-lib"

export const lambda = asl.deploy.asLambda(() => { return ["succeeded"] });

export const simpleTry = asl.deploy.asStateMachine(async () =>{
    let result = "";
    asl.typescriptTry({
        name: "Try Catch",
        try: async () => {
            result = "succeeded";
            asl.fail({
                name: "Throw Error",
                error: "Error",
                cause: "fail",
                comment: "throw new Error(\"fail\");"
            })
        },
        catch: [
            {
                errorEquals: [
                    "States.ALL"
                ],
                block: () => {
                    result = "failed";
                }
            }
        ],
        comment: "try {\n    result = \"succeeded\";\n    throw new Error(\"fail\");\n  } catch {\n    result = \"failed\";\n  }"
    })
    return result;
});

export const referenceError = asl.deploy.asStateMachine(async () => {
  let result = "";
  try {
    result = "succeeded";

    //asl.createError will create an node error with Error and Cause properties
    throw asl.runtime.createError("Test Error", "Failed on purpose");
  } catch (err) {
    result = `failed ${(err as asl.AslError).Error} (${(err as asl.AslError).Cause})`;
  }
  return result;
});


export const simpleMultipleStatements = asl.deploy.asStateMachine(async () => {
  try {
    const arr = [1]
    const withinTry = arr.map(x => "succeeded");
    return withinTry[0];
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
    await Promise.all([() => "succeeded"]);
  } finally {
    return "finally";
  }
});

export const tryCatchFinally = asl.deploy.asStateMachine(async () => {
  let result = "";
  try {
    result = "try"
  } catch {
    result = "catch"
  } finally {
    result = "finally"
  }
  return result;
});

export const tryCatchFailState = asl.deploy.asStateMachine(async () => {
  try {
    return asl.fail({
      error: "InternalFailure",
      cause: "bad luck"
    });
  } catch(e) {
    const aslError = e as asl.AslError
    if ("Error" in aslError && "Cause" in aslError) {
      return `${aslError.Error} (${aslError.Cause})`;
    }
  } 
  return "this should not happen";
});


