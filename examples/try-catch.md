
## simple try
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgcmVzdWx0ID0gIiI7CiAgdHJ5IHsKICAgIHJlc3VsdCA9ICJzdWNjZWVkZWQiOwogICAgdGhyb3cgbmV3IEVycm9yKCJmYWlsIik7CiAgfSBjYXRjaCB7CiAgICByZXN1bHQgPSAiZmFpbGVkIjsKICB9CiAgcmV0dXJuIHJlc3VsdDsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let result = "";
  try {
    result = "succeeded";
    throw new Error("fail");
  } catch {
    result = "failed";
  }
  return result;
});
```


## reference error
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgcmVzdWx0ID0gIiI7CiAgdHJ5IHsKICAgIHJlc3VsdCA9ICJzdWNjZWVkZWQiOwoKICAgIC8vYXNsLmNyZWF0ZUVycm9yIHdpbGwgY3JlYXRlIGFuIG5vZGUgZXJyb3Igd2l0aCBFcnJvciBhbmQgQ2F1c2UgcHJvcGVydGllcwogICAgdGhyb3cgYXNsLnJ1bnRpbWUuY3JlYXRlRXJyb3IoIlRlc3QgRXJyb3IiLCAiRmFpbGVkIG9uIHB1cnBvc2UiKTsKICB9IGNhdGNoIChlcnIpIHsKICAgIHJlc3VsdCA9IGBmYWlsZWQgJHsoZXJyIGFzIGFzbC5Bc2xFcnJvcikuRXJyb3J9ICgkeyhlcnIgYXMgYXNsLkFzbEVycm9yKS5DYXVzZX0pYDsKICB9CiAgcmV0dXJuIHJlc3VsdDsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let result = "";
  try {
    result = "succeeded";

    //asl.createError will create an node error with Error and Cause properties
    throw asl.runtime.createError("Test Error", "Failed on purpose");
  } catch (err) {
    result = `failed ${(err as asl.AslError).Error} (${(err as asl.AslError).Cause})`;
  }
  return result;
});
```


## simple multiple statements
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICB0cnkgewogICAgY29uc3QgYXJyID0gWzFdCiAgICBjb25zdCB3aXRoaW5UcnkgPSBhcnIubWFwKHggPT4gInN1Y2NlZWRlZCIpOwogICAgcmV0dXJuIHdpdGhpblRyeVswXTsKICB9IGNhdGNoIHsKICAgIHJldHVybiAiaXQgZmFpbGVkIjsKICB9Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  try {
    const arr = [1]
    const withinTry = arr.map(x => "succeeded");
    return withinTry[0];
  } catch {
    return "it failed";
  }
});
```


## try around pass state
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICB0cnkgewogICAgcmV0dXJuICJ0aGlzIGNhbm5vdCBmYWlsIjsKICB9IGNhdGNoIHsKICAgIHJldHVybiAidGhpcyBuZXZlciBoYXBwZW5zIjsKICB9Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  try {
    return "this cannot fail";
  } catch {
    return "this never happens";
  }
});
```


## try finally
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICB0cnkgewogICAgYXdhaXQgUHJvbWlzZS5hbGwoWygpID0+ICJzdWNjZWVkZWQiXSk7CiAgfSBmaW5hbGx5IHsKICAgIHJldHVybiAiZmluYWxseSI7CiAgfQp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  try {
    await Promise.all([() => "succeeded"]);
  } finally {
    return "finally";
  }
});
```


## try catch finally
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgcmVzdWx0ID0gIiI7CiAgdHJ5IHsKICAgIHJlc3VsdCA9ICJ0cnkiCiAgfSBjYXRjaCB7CiAgICByZXN1bHQgPSAiY2F0Y2giCiAgfSBmaW5hbGx5IHsKICAgIHJlc3VsdCA9ICJmaW5hbGx5IgogIH0KICByZXR1cm4gcmVzdWx0Owp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let result = "";
  try {
    result = "try"
  } catch {
    result = "catch"
  } finally {
    result = "finally"
  }
  return result;
});
```


