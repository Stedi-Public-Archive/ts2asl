
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElJbnB1dCwgY29udGV4dDogU3RhdGVNYWNoaW5lQ29udGV4dDxJSW5wdXQ+KSA9PiAKIHsKICBpZiAodHlwZW9mIGlucHV0Lm5hbWUgIT09ICJzdHJpbmciKSB7CiAgICBpbnB1dC5uYW1lID0gImZyZWQiOwogIH0KICBjb25zdCB4ID0gewogICAgbmFtZTogaW5wdXQubmFtZSwKICAgIGV4ZWN1dGlvbklkOiBjb250ZXh0LmV4ZWN1dGlvbi5pZAogIH0KICBjb25zdCB5ID0gewogICAgeCwKICAgIHNvbWV0aGluZ0xpdGVyYWw6IFsib25lIiwgMiwgInRocmVlIl0sCiAgICBzdGFydFRpbWU6IGNvbnRleHQuZXhlY3V0aW9uLnN0YXJ0VGltZSwKICAgIGZ1bmM6IGFzbC5zdGF0ZXMuanNvblRvU3RyaW5nKHgpLAogICAgZm10OiBhc2wuc3RhdGVzLmZvcm1hdCgiaGVsbG8ge30iLCB4KSwKICAgIG51bWJlcjogYXNsLnN0YXRlcy5zdHJpbmdUb0pzb24oIjEyMyIpIGFzIG51bWJlciwKICAgIGFycjogYXNsLnN0YXRlcy5hcnJheSgxLCAyLCAzLCA0LCA1LCA2KSwKICB9CiAgcmV0dXJuIHk7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: IInput, context: StateMachineContext<IInput>) => 
 {
  if (typeof input.name !== "string") {
    input.name = "fred";
  }
  const x = {
    name: input.name,
    executionId: context.execution.id
  }
  const y = {
    x,
    somethingLiteral: ["one", 2, "three"],
    startTime: context.execution.startTime,
    func: asl.states.jsonToString(x),
    fmt: asl.states.format("hello {}", x),
    number: asl.states.stringToJson("123") as number,
    arr: asl.states.array(1, 2, 3, 4, 5, 6),
  }
  return y;
});
```


