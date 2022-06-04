
## if statement with in keyword
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHZhbCA9IHsgZ3JlZXRpbmc6ICJoZWxsbyIgfTsKICBpZiAoImdyZWV0aW5nIiBpbiB2YWwgJiYgISgic29tZXRoaW5nRWxzZSIgaW4gdmFsKSkgewogICAgcmV0dXJuICJzdWNjZXNzIjsKICB9CiAgcmV0dXJuICJmYWlsdXJlIjsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let val = { greeting: "hello" };
  if ("greeting" in val && !("somethingElse" in val)) {
    return "success";
  }
  return "failure";
});

```


