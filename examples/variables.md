
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZSgKICBhc3luYyAoaW5wdXQ6IElJbnB1dCwgY29udGV4dDogU3RhdGVNYWNoaW5lQ29udGV4dDxJSW5wdXQ+KSA9PiB7CiAgICBpZiAodHlwZW9mIGlucHV0Lm5hbWUgIT09ICJzdHJpbmciKSB7CiAgICAgIGlucHV0Lm5hbWUgPSAiZnJlZCI7CiAgICB9CiAgICBjb25zdCB4ID0gewogICAgICBuYW1lOiBpbnB1dC5uYW1lLAogICAgICBleGVjdXRpb25JZDogY29udGV4dC5leGVjdXRpb24uaWQsCiAgICB9OwogICAgY29uc3QgeSA9IHsKICAgICAgeCwKICAgICAgc29tZXRoaW5nTGl0ZXJhbDogWyJvbmUiLCAyLCAidGhyZWUiXSwKICAgICAgc3RhcnRUaW1lOiBjb250ZXh0LmV4ZWN1dGlvbi5zdGFydFRpbWUsCiAgICAgIGZ1bmM6IGFzbC5zdGF0ZXMuanNvblRvU3RyaW5nKHgpLAogICAgICBmdW5jMjogYXNsLnN0YXRlcy5qc29uVG9TdHJpbmcoeyBmaWVsZDogInZhbCIgfSksCiAgICAgIGZtdDogYXNsLnN0YXRlcy5mb3JtYXQoImhlbGxvIHt9IiwgeCksCiAgICAgIG51bWJlcjogYXNsLnN0YXRlcy5zdHJpbmdUb0pzb24oIjEyMyIpIGFzIG51bWJlciwKICAgICAgYXJyOiBhc2wuc3RhdGVzLmFycmF5KDEsIDIsIDMsIDQsIDUsIDYpLAogICAgfTsKICAgIHJldHVybiB5OwogIH0KKTsKCmludGVyZmFjZSBJSW5wdXQgewogIG5hbWU6IHN0cmluZzsKICB0b3RhbER1ZTogbnVtYmVyOwogIG9yZGVyczogWwogICAgewogICAgICBvcmRlcklkOiBzdHJpbmc7CiAgICAgIGRhdGU6IERhdGU7CiAgICB9CiAgXTsKfQo=)

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
      func2: asl.states.jsonToString({ field: "val" }),
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


