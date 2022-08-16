
## date time now
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgcmV0dXJuIGFzbC5qc29uUGF0aCgiJC5TdGF0ZS5TdGFydFRpbWUiKTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  return asl.jsonPath("$.State.EnteredTime");
});

```


## date time using json path
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgcmV0dXJuIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  return new Date().toISOString();
});

```


