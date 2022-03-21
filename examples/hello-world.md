
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElJbnB1dCkgPT4gCiB7CiAgaWYgKHR5cGVvZiBpbnB1dC5uYW1lICE9PSAic3RyaW5nIikgewogICAgaW5wdXQubmFtZSA9ICJXb3JsZCI7CiAgfQogIGNvbnN0IHJuZCA9IGF3YWl0IHJhbmRvbSgpOwogIHJldHVybiB7CiAgICBncmVldGluZzogYXNsLnN0YXRlcy5mb3JtYXQoIkhlbGxvIHt9IiwgaW5wdXQubmFtZSksCiAgICBsdWNreU51bWJlcjogcm5kCiAgfQp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: IInput) => 
 {
  if (typeof input.name !== "string") {
    input.name = "World";
  }
  const rnd = await random();
  return {
    greeting: asl.states.format("Hello {}", input.name),
    luckyNumber: rnd
  }
});
```


