
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
export const tryAroundPassState = asl.deploy.asStateMachine(async () =>{
    asl.typescriptTry({
        name: "Try Catch",
        try: async () => {
            asl.pass({
                parameters: () => "this cannot fail",
                comment: "console.log(\"this cannot fail\")"
            });
        },
        catch: [
            {
                errorFilter: [
                    "States.All"
                ],
                block: () => {
                    asl.pass({
                        parameters: () => "this never happens",
                        comment: "console.log(\"this never happens\")"
                    });
                }
            }
        ],
        comment: "try {\n    console.log(\"this cannot fail\");\n  } catch {\n    console.log(\"this never happens\");\n  }"
    })
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

