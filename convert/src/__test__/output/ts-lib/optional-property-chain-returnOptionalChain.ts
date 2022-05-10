
import * as asl from "@ts2asl/asl-lib";

export const returnOptionalChain = asl.deploy.asStateMachine(async (args?: { name: string; }) =>{
    return args?.name;
});

export const returnLongerChain = asl.deploy.asStateMachine(async (args?: { inner?: { name: string; }; }) => {
  return args?.inner?.name;
});

export const assignOptionalChain = asl.deploy.asStateMachine(async (args?: { name: string; }) => {
  const name = args?.name;
  return name;
});
