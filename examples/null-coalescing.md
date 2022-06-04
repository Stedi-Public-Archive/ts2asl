
## null coalescing
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3Qgb2JqID0geyBuYW1lOiB1bmRlZmluZWQgYXMgc3RyaW5nIHwgdW5kZWZpbmVkIH07CiAgbGV0IHJlc3VsdDogeyBhPzogc3RyaW5nOyBiPzogc3RyaW5nIH0gPSB7fTsKICByZXN1bHQuYSA9IG9iai5uYW1lID8/ICJqaW0iOwoKICBvYmoubmFtZSA9ICJqYWNrIjsKICByZXN1bHQuYiA9IG9iai5uYW1lID8/ICJqaW0iOwoKICByZXR1cm4gcmVzdWx0Owp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const obj = { name: undefined as string | undefined };
  let result: { a?: string; b?: string } = {};
  result.a = obj.name ?? "jim";

  obj.name = "jack";
  result.b = obj.name ?? "jim";

  return result;
});

```


## null coalescing with literal
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgcmV0dXJuIG51bGwgPz8gImppbSI7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  return null ?? "jim";
});

```


## null coalescing within expression
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3Qgb2JqID0geyBuYW1lOiAid29ybGQiIH07CiAgcmV0dXJuICJoZWxsbyAiICsgb2JqLm5hbWUgPz8gInlvdSI7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const obj = { name: "world" };
  return "hello " + obj.name ?? "you";
});

```


## nested null coalescing
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3Qgb2JqID0geyBuYW1lOiB1bmRlZmluZWQgfTsKCiAgcmV0dXJuIG51bGwgPz8gb2JqLm5hbWUgPz8gIndvcmxkIjsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const obj = { name: undefined };

  return null ?? obj.name ?? "world";
});

```


## null coalescing within string format
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3Qgb2JqID0geyBuYW1lOiB1bmRlZmluZWQgYXMgc3RyaW5nIHwgdW5kZWZpbmVkIH07CgogIGxldCByZXN1bHQ6IHsgYT86IHN0cmluZzsgYj86IHN0cmluZyB9ID0ge307CiAgcmVzdWx0LmEgPSBgaGVsbG86ICR7b2JqLm5hbWUgPz8gImppbSJ9YDsKCiAgb2JqLm5hbWUgPSAiamFjayI7CiAgcmVzdWx0LmIgPSBgaGVsbG86ICR7b2JqLm5hbWUgPz8gImppbSJ9YDsKCiAgcmV0dXJuIHJlc3VsdDsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const obj = { name: undefined as string | undefined };

  let result: { a?: string; b?: string } = {};
  result.a = `hello: ${obj.name ?? "jim"}`;

  obj.name = "jack";
  result.b = `hello: ${obj.name ?? "jim"}`;

  return result;
});

```


