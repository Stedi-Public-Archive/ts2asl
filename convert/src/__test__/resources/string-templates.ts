import * as asl from "@ts2asl/asl-lib"

export const stringTemplates = asl.deploy.asStateMachine(async () => {
  let variable = "some var";

  console.log({
    b: `hello ${variable}`,
  });
});

