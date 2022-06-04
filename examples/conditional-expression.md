
## conditional
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJnczogewogICAgbmFtZT86IHN0cmluZzsKfSkgPT4gCiB7CiAgY29uc3Qgb2JqID0geyBuYW1lOiB1bmRlZmluZWQgfTsKICByZXR1cm4gb2JqLm5hbWUgPyBvYmoubmFtZSA6ICJqaW0iOwp9KTsKCg==)

``` typescript
export const main = asl.deploy.asStateMachine(async (args: {
    name?: string;
}) => 
 {
  const obj = { name: undefined };
  return obj.name ? obj.name : "jim";
});


```


## conditional with literal
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICByZXR1cm4gZmFsc2UgPyAiamltIiA6ICJqYW1lcyI7Cn0pOwoK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  return false ? "jim" : "james";
});


```


## conditional within expression
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJnczogewogICAgbmFtZT86IHN0cmluZzsKfSkgPT4gCiB7CiAgY29uc3Qgb2JqID0geyBuYW1lOiAiamltIiB9OwogIHJldHVybiAiaGVsbG8iICsgb2JqLm5hbWUgPyBvYmoubmFtZSA6ICJ3b3JsZCI7Cn0pOwoK)

``` typescript
export const main = asl.deploy.asStateMachine(async (args: {
    name?: string;
}) => 
 {
  const obj = { name: "jim" };
  return "hello" + obj.name ? obj.name : "world";
});


```


## nested conditional
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJnczogewogICAgbmFtZT86IHN0cmluZzsKfSkgPT4gCiB7CiAgY29uc3Qgb2JqID0geyBuYW1lOiAiamltIiB9OwogIHJldHVybiBudWxsID8gImRvZXNuJ3QgaGFwcGVuIiA6IG9iai5uYW1lID8/ICJ3b3JsZCI7Cn0pOwoK)

``` typescript
export const main = asl.deploy.asStateMachine(async (args: {
    name?: string;
}) => 
 {
  const obj = { name: "jim" };
  return null ? "doesn't happen" : obj.name ?? "world";
});


```


## conditional within string format
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoYXJnczogewogICAgbmFtZT86IHN0cmluZzsKfSkgPT4gCiB7CiAgY29uc3Qgb2JqID0geyBuYW1lOiAiamltIiB9OwogIHJldHVybiBgaGVsbG86ICR7b2JqID8gb2JqLm5hbWUgOiAiamltIn1gOwp9KTsKCg==)

``` typescript
export const main = asl.deploy.asStateMachine(async (args: {
    name?: string;
}) => 
 {
  const obj = { name: "jim" };
  return `hello: ${obj ? obj.name : "jim"}`;
});


```


