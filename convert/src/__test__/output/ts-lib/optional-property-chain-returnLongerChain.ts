
import * as asl from "@ts2asl/asl-lib";

export const returnOptionalChain = asl.deploy.asStateMachine(async () => {
  const obj = { name: "jim" };
  return obj?.name;
});

export const returnLongerChain = asl.deploy.asStateMachine(async () =>{
    const obj = asl.pass({
        name: "Assign obj",
        parameters: () => ({ inner: { name: "jim" } }),
        comment: "obj = { inner: { name: \"jim\" } }"
    });
    return obj?.inner?.name;
});

export const assignOptionalChain = asl.deploy.asStateMachine(async () => {
  const obj = { name: "jim" };
  const name = obj?.name;
  return name;
});
