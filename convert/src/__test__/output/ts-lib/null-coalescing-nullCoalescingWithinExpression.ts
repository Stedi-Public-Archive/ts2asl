
import * as asl from "@ts2asl/asl-lib";

export const nullCoalescing = asl.deploy.asStateMachine(async () => {
  const obj = { name: undefined };
  let result: { a?: string, b?: string; } = {};
  result.a = obj.name ?? "jim";

  obj.name = "jack";
  result.b = obj.name ?? "jim";

  return result;
});

export const nullCoalescingWithLiteral = asl.deploy.asStateMachine(async () => {
  return null ?? "jim";
});

export const nullCoalescingWithinExpression = asl.deploy.asStateMachine(async (args: { name?: string; }) =>{
    const obj = asl.pass({
        name: "Assign obj",
        parameters: () => ({ name: undefined }),
        comment: "obj = { name: undefined }"
    });
    return asl.states.format("hello{}", args.name) ? asl.states.format("hello{}", args.name) : "world";
});

export const nestedNullCoalescing = asl.deploy.asStateMachine(async (args: { name: string; }) => {
  const obj = { name: undefined };

  return null ?? obj.name ?? "world";
});

export const nullCoalescingWithinStringFormat = asl.deploy.asStateMachine(async (args: { name?: string; }) => {
  const obj = { name: undefined };

  let result: { a?: string, b?: string; } = {};
  result.a = `hello: ${args.name ?? "jim"}`;

  obj.name = "jack";
  result.b = `hello: ${args.name ?? "jim"}`;

  return result;
});