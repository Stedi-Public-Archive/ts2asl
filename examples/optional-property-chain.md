
## return optional chain
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJncz86IHsKICAgIG5hbWU6IHN0cmluZzsKfSkgPT4gCiB7CiAgcmV0dXJuIGFyZ3M/Lm5hbWU7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async (args?: {
    name: string;
}) => 
 {
  return args?.name;
});
```


## assign optional chain
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJncz86IHsKICAgIG5hbWU/OiBzdHJpbmc7Cn0pID0+IAogewogIGNvbnN0IG5hbWUgPSBhcmdzPy5uYW1lOwogIHJldHVybiBuYW1lOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async (args?: {
    name?: string;
}) => 
 {
  const name = args?.name;
  return name;
});
```


