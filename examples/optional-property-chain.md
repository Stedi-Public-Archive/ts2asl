
## return optional chain
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3Qgb2JqID0geyBuYW1lOiAiamltIiB9OwogIHJldHVybiBvYmo/Lm5hbWU7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const obj = { name: "jim" };
  return obj?.name;
});

```


## return longer chain
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3Qgb2JqID0geyBpbm5lcjogeyBuYW1lOiAiamltIiB9IH07CiAgcmV0dXJuIG9iaj8uaW5uZXI/Lm5hbWU7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const obj = { inner: { name: "jim" } };
  return obj?.inner?.name;
});

```


## assign optional chain
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3Qgb2JqID0geyBuYW1lOiAiamltIiB9OwogIGNvbnN0IG5hbWUgPSBvYmo/Lm5hbWU7CiAgcmV0dXJuIG5hbWU7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const obj = { name: "jim" };
  const name = obj?.name;
  return name;
});

```


