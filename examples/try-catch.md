
## simple try
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICB0cnkgewogICAgbGFtYmRhKCk7CiAgfSBjYXRjaCB7CiAgICByZXR1cm4gIml0IGZhaWxlZCI7CiAgfQp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  try {
    lambda();
  } catch {
    return "it failed";
  }
});
```


## simple multiple statements
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICB0cnkgewogICAgY29uc3Qgd2l0aGluVHJ5ID0gbGFtYmRhKCk7CiAgICByZXR1cm4gd2l0aGluVHJ5OwogIH0gY2F0Y2ggewogICAgcmV0dXJuICJpdCBmYWlsZWQiOwogIH0KfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  try {
    const withinTry = lambda();
    return withinTry;
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICB0cnkgewogICAgbGFtYmRhKCk7CiAgfSBmaW5hbGx5IHsKICAgIHJldHVybiAiZmluYWxseSI7CiAgfQp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  try {
    lambda();
  } finally {
    return "finally";
  }
});
```


## try catch finally
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICB0cnkgewogICAgbGFtYmRhKCk7CiAgfSBjYXRjaCB7CiAgICBjb25zb2xlLmxvZygiZmFpbGVkIikKICB9IGZpbmFsbHkgewogICAgcmV0dXJuICJmaW5hbGx5IjsKICB9Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  try {
    lambda();
  } catch {
    console.log("failed")
  } finally {
    return "finally";
  }
});
```


