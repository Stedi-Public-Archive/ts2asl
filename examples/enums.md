
## compare enum
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgeCA9IEV4YW1wbGVFbnVtLkE7CiAgaWYgKHggPT09IEV4YW1wbGVFbnVtLkEpIHsKICAgIHJldHVybiAic3VjY2VzcyI7CiAgfQogIHJldHVybiAiZmFpbCI7Cn0pOwoKZW51bSBFeGFtcGxlRW51bSB7CiAgIkEiLAogICJCIiwKfQoKZW51bSBFeGFtcGxlRW51bVN0cmluZyB7CiAgIkEiID0gImEiLAogICJCIiA9ICJiIiwKfQo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const x = ExampleEnum.A;
  if (x === ExampleEnum.A) {
    return "success";
  }
  return "fail";
});

enum ExampleEnum {
  "A",
  "B",
}

enum ExampleEnumString {
  "A" = "a",
  "B" = "b",
}

```


## compare string enum
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgeCA9IEV4YW1wbGVFbnVtU3RyaW5nLkE7CiAgaWYgKHggPT09IEV4YW1wbGVFbnVtU3RyaW5nLkEpIHsKICAgIHJldHVybiAic3VjY2VzcyI7CiAgfQogIHJldHVybiAiZmFpbCI7Cn0pOwoKZW51bSBFeGFtcGxlRW51bSB7CiAgIkEiLAogICJCIiwKfQoKZW51bSBFeGFtcGxlRW51bVN0cmluZyB7CiAgIkEiID0gImEiLAogICJCIiA9ICJiIiwKfQo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const x = ExampleEnumString.A;
  if (x === ExampleEnumString.A) {
    return "success";
  }
  return "fail";
});

enum ExampleEnum {
  "A",
  "B",
}

enum ExampleEnumString {
  "A" = "a",
  "B" = "b",
}

```


