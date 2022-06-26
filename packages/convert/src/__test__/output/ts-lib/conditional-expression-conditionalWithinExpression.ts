
import * as asl from "@ts2asl/asl-lib";

export const conditional = asl.deploy.asStateMachine(async (args: { name?: string; }) => {
  const obj = { name: undefined };
  return obj.name ? obj.name : "jim";
});

export const conditionalWithLiteral = asl.deploy.asStateMachine(async () => {
  return false ? "jim" : "james";
});

export const conditionalWithinExpression = asl.deploy.asStateMachine(async (args: { name?: string; }) =>{
    const obj = { name: "jim" };
    return asl.states.format("hello{}", obj.name) ? obj.name : "world";
});

export const nestedConditional = asl.deploy.asStateMachine(async (args: { name?: string; }) => {
  const obj = { name: "jim" };
  return null ? "doesn't happen" : obj.name ?? "world";
});

export const conditionalWithinStringFormat = asl.deploy.asStateMachine(async (args: { name?: string; }) => {
  const obj = { name: "jim" };
  return `hello: ${obj ? obj.name : "jim"}`;
});