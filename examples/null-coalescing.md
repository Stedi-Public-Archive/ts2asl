
## null coalescing
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJnczogewogICAgbmFtZT86IHN0cmluZzsKfSkgPT4gCiB7CiAgcmV0dXJuIGFyZ3MubmFtZSA/PyAiamltIjsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async (args: {
    name?: string;
}) => 
 {
  return args.name ?? "jim";
});
```


## null coalescing with literal
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICByZXR1cm4gbnVsbCA/PyAiamltIjsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  return null ?? "jim";
});
```


## null coalescing within expression
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJnczogewogICAgbmFtZT86IHN0cmluZzsKfSkgPT4gCiB7CiAgcmV0dXJuICJoZWxsbyIgKyBhcmdzLm5hbWUgPz8gIndvcmxkIjsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async (args: {
    name?: string;
}) => 
 {
  return "hello" + args.name ?? "world";
});
```


## nested null coalescing
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJnczogewogICAgbmFtZT86IHN0cmluZzsKfSkgPT4gCiB7CiAgcmV0dXJuIG51bGwgPz8gYXJncy5uYW1lID8/ICJ3b3JsZCI7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async (args: {
    name?: string;
}) => 
 {
  return null ?? args.name ?? "world";
});
```


## null coalescing within string format
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJnczogewogICAgbmFtZT86IHN0cmluZzsKfSkgPT4gCiB7CiAgcmV0dXJuIGBoZWxsbzogJHthcmdzLm5hbWUgPz8gImppbSJ9YDsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async (args: {
    name?: string;
}) => 
 {
  return `hello: ${args.name ?? "jim"}`;
});
```


