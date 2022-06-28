
import * as asl from "@ts2asl/asl-lib";

export const nullCoalescing = asl.deploy.asStateMachine(async () => {
  const obj = { name: undefined as string | undefined };
  let result: { a?: string, b?: string; } = {};
  result.a = obj.name ?? "jim";

  obj.name = "jack";
  result.b = obj.name ?? "jim";

  return result;
});

export const nullCoalescingWithLiteral = asl.deploy.asStateMachine(async () => {
  return null ?? "jim";
});

export const nullCoalescingWithinExpression = asl.deploy.asStateMachine(async () => {
  const obj = { name: "world" };
  return "hello " + obj.name ?? "you";
});

export const nestedNullCoalescing = asl.deploy.asStateMachine(async () => {
  const obj = { name: undefined };

  return null ?? obj.name ?? "world";
});

export const nullCoalescingWithinStringFormat = asl.deploy.asStateMachine(async () =>{
    const obj = { name: undefined };
    let result: {
        a?: string;
        b?: string;
    } = {};
    result.a = asl.states.format("hello: {}", obj.name ? obj.name : "jim");
    obj.name = "jack";
    result.b = asl.states.format("hello: {}", obj.name ? obj.name : "jim");
    return result;
});