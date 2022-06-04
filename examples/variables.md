
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZSgKICBhc3luYyAoaW5wdXQ6IElJbnB1dCwgY29udGV4dDogU3RhdGVNYWNoaW5lQ29udGV4dDxJSW5wdXQ+KSA9PiB7CiAgICBpZiAodHlwZW9mIGlucHV0Lm5hbWUgIT09ICJzdHJpbmciKSB7CiAgICAgIGlucHV0Lm5hbWUgPSAiZnJlZCI7CiAgICB9CiAgICBjb25zdCB4ID0gewogICAgICBuYW1lOiBpbnB1dC5uYW1lLAogICAgICBleGVjdXRpb25JZDogY29udGV4dC5leGVjdXRpb24uaWQsCiAgICB9OwogICAgY29uc3QgeSA9IHsKICAgICAgeCwKICAgICAgc29tZXRoaW5nTGl0ZXJhbDogWyJvbmUiLCAyLCAidGhyZWUiXSwKICAgICAgc3RhcnRUaW1lOiBjb250ZXh0LmV4ZWN1dGlvbi5zdGFydFRpbWUsCiAgICAgIGZ1bmM6IGFzbC5zdGF0ZXMuanNvblRvU3RyaW5nKHgpLAogICAgICBmbXQ6IGFzbC5zdGF0ZXMuZm9ybWF0KCJoZWxsbyB7fSIsIHgpLAogICAgICBudW1iZXI6IGFzbC5zdGF0ZXMuc3RyaW5nVG9Kc29uKCIxMjMiKSBhcyBudW1iZXIsCiAgICAgIGFycjogYXNsLnN0YXRlcy5hcnJheSgxLCAyLCAzLCA0LCA1LCA2KSwKICAgIH07CiAgICByZXR1cm4geTsKICB9Cik7CgppbnRlcmZhY2UgSUlucHV0IHsKICBuYW1lOiBzdHJpbmc7CiAgdG90YWxEdWU6IG51bWJlcjsKICBvcmRlcnM6IFsKICAgIHsKICAgICAgb3JkZXJJZDogc3RyaW5nOwogICAgICBkYXRlOiBEYXRlOwogICAgfQogIF07Cn0K)

``` typescript
export const main = asl.deploy.asStateMachine(
  async (input: IInput, context: StateMachineContext<IInput>) => {
    if (typeof input.name !== "string") {
      input.name = "fred";
    }
    const x = {
      name: input.name,
      executionId: context.execution.id,
    };
    const y = {
      x,
      somethingLiteral: ["one", 2, "three"],
      startTime: context.execution.startTime,
      func: asl.states.jsonToString(x),
      fmt: asl.states.format("hello {}", x),
      number: asl.states.stringToJson("123") as number,
      arr: asl.states.array(1, 2, 3, 4, 5, 6),
    };
    return y;
  }
);

interface IInput {
  name: string;
  totalDue: number;
  orders: [
    {
      orderId: string;
      date: Date;
    }
  ];
}

```


