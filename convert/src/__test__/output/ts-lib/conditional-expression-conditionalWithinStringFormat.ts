
import * as asl from "@ts2asl/asl-lib";

export const conditional = asl.deploy.asStateMachine(async (args: { name?: string; }) => {
  return args?.name ? args?.name : "jim";
});

export const conditionalWithLiteral = asl.deploy.asStateMachine(async () => {
  return false ? "jim" : "james";
});

export const conditionalWithinExpression = asl.deploy.asStateMachine(async (args: { name?: string; }) => {
  return "hello" + args?.name ? args?.name : "world";
});

export const nestedConditional = asl.deploy.asStateMachine(async (args: { name?: string; }) => {
  return null ? "doesn't happen" : args?.name ?? "world";
});

export const conditionalWithinStringFormat = asl.deploy.asStateMachine(async (args: { name?: string; }) =>{
    return asl.states.format("hello: {}", args ? args : "jim");
});