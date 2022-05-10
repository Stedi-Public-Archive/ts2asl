
## conditional
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJnczogewogICAgbmFtZT86IHN0cmluZzsKfSkgPT4gCiB7CiAgcmV0dXJuIGFyZ3M/Lm5hbWUgPyBhcmdzPy5uYW1lIDogImppbSI7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async (args: {
    name?: string;
}) => 
 {
  return args?.name ? args?.name : "jim";
});
```


## conditional with literal
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICByZXR1cm4gZmFsc2UgPyAiamltIiA6ICJqYW1lcyI7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  return false ? "jim" : "james";
});
```


## conditional within expression
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJnczogewogICAgbmFtZT86IHN0cmluZzsKfSkgPT4gCiB7CiAgcmV0dXJuICJoZWxsbyIgKyBhcmdzPy5uYW1lID8gYXJncz8ubmFtZSA6ICJ3b3JsZCI7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async (args: {
    name?: string;
}) => 
 {
  return "hello" + args?.name ? args?.name : "world";
});
```


## nested conditional
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJnczogewogICAgbmFtZT86IHN0cmluZzsKfSkgPT4gCiB7CiAgcmV0dXJuIG51bGwgPyAiZG9lc24ndCBoYXBwZW4iIDogYXJncz8ubmFtZSA/PyAid29ybGQiOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async (args: {
    name?: string;
}) => 
 {
  return null ? "doesn't happen" : args?.name ?? "world";
});
```


## conditional within string format
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJnczogewogICAgbmFtZT86IHN0cmluZzsKfSkgPT4gCiB7CiAgcmV0dXJuIGBoZWxsbzogJHthcmdzID8gYXJncyA6ICJqaW0ifWA7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async (args: {
    name?: string;
}) => 
 {
  return `hello: ${args ? args : "jim"}`;
});
```


