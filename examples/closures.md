
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoX2lucHV0OiB7fSwgX2NvbnRleHQ6IGFzbC5TdGF0ZU1hY2hpbmVDb250ZXh0PHt9PikgPT4gCiB7CiAgY29uc3QgbnVtYmVycyA9IFswLCAxLCAyLCAzXTsKICBjb25zdCBsZXR0ZXJzID0gWyJhIiwgImIiLCAiYyIsICJkIl07CiAgY29uc3QgZ2xvYmFsID0gInByZWZpeCI7CiAgY29uc3Qgb3V0ZXIgPSB7IG1pZGRsZTogeyBpbm5lcjogMyB9IH0KICBmb3IgKGNvbnN0IG51bWJlciBvZiBudW1iZXJzKSB7CiAgICBmb3IgKGNvbnN0IGxldHRlciBvZiBsZXR0ZXJzKSB7CiAgICAgIGNvbnN0IGNvbWJpbmVkID0geyBudW1iZXIsIGxldHRlciwgZ2xvYmFsLCBpbm5lcjogb3V0ZXIubWlkZGxlLmlubmVyIH07CiAgICAgIGRvU29tZXRoaW5nKGNvbWJpbmVkKTsKICAgIH0KICB9Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) => 
 {
  const numbers = [0, 1, 2, 3];
  const letters = ["a", "b", "c", "d"];
  const global = "prefix";
  const outer = { middle: { inner: 3 } }
  for (const number of numbers) {
    for (const letter of letters) {
      const combined = { number, letter, global, inner: outer.middle.inner };
      doSomething(combined);
    }
  }
});
```


