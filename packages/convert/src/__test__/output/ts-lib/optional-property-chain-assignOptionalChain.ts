
import * as asl from "@ts2asl/asl-lib";

export const returnOptionalChain = asl.deploy.asStateMachine(async () => {
  const obj = { name: "jim" };
  return obj?.name;
});

export const returnLongerChain = asl.deploy.asStateMachine(async () => {
  const obj = { inner: { name: "jim" } };
  return obj?.inner?.name;
});

export const assignOptionalChain = asl.deploy.asStateMachine(async () =>{
    const obj = asl.pass({
        name: "Assign obj",
        parameters: () => ({ name: "jim" }),
        comment: "obj = { name: \"jim\" }"
    });
    const name = asl.pass({
        name: "Assign name",
        parameters: () => obj?.name,
        comment: "name = obj?.name"
    });
    return name;
});
