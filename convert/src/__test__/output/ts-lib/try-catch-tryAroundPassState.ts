
import * as asl from "@ts2asl/asl-lib"

export const lambda = asl.deploy.asLambda(() => { return ["succeeded"] });

export const simpleTry = asl.deploy.asStateMachine(async () => {
  try {
    lambda();
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
export const tryAroundPassState = asl.deploy.asStateMachine(async () =>{
    asl.typescriptTry({
        name: "Try Catch",
        try: async () => {
            return "this cannot fail";
        },
        catch: [
            {
                errorFilter: [
                    "States.All"
                ],
                block: () => {
                    return "this never happens";
                }
            }
        ],
        comment: "try {\n    return \"this cannot fail\";\n  } catch {\n    return \"this never happens\";\n  }"
    })
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

