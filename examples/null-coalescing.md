
## null coalescing
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBvYmogPSB7IG5hbWU6IHVuZGVmaW5lZCBhcyBzdHJpbmcgfCB1bmRlZmluZWQgfTsKICBsZXQgcmVzdWx0OiB7IGE/OiBzdHJpbmcsIGI/OiBzdHJpbmc7IH0gPSB7fTsKICByZXN1bHQuYSA9IG9iai5uYW1lID8/ICJqaW0iOwoKICBvYmoubmFtZSA9ICJqYWNrIjsKICByZXN1bHQuYiA9IG9iai5uYW1lID8/ICJqaW0iOwoKICByZXR1cm4gcmVzdWx0Owp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const obj = { name: undefined as string | undefined };
  let result: { a?: string, b?: string; } = {};
  result.a = obj.name ?? "jim";

  obj.name = "jack";
  result.b = obj.name ?? "jim";

  return result;
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBvYmogPSB7IG5hbWU6ICJ3b3JsZCIgfTsKICByZXR1cm4gImhlbGxvICIgKyBvYmoubmFtZSA/PyAieW91IjsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const obj = { name: "world" };
  return "hello " + obj.name ?? "you";
});
```


## nested null coalescing
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBvYmogPSB7IG5hbWU6IHVuZGVmaW5lZCB9OwoKICByZXR1cm4gbnVsbCA/PyBvYmoubmFtZSA/PyAid29ybGQiOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const obj = { name: undefined };

  return null ?? obj.name ?? "world";
});
```


## null coalescing within string format
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBvYmogPSB7IG5hbWU6IHVuZGVmaW5lZCBhcyBzdHJpbmcgfCB1bmRlZmluZWQgfTsKCiAgbGV0IHJlc3VsdDogeyBhPzogc3RyaW5nLCBiPzogc3RyaW5nOyB9ID0ge307CiAgcmVzdWx0LmEgPSBgaGVsbG86ICR7b2JqLm5hbWUgPz8gImppbSJ9YDsKCiAgb2JqLm5hbWUgPSAiamFjayI7CiAgcmVzdWx0LmIgPSBgaGVsbG86ICR7b2JqLm5hbWUgPz8gImppbSJ9YDsKCiAgcmV0dXJuIHJlc3VsdDsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const obj = { name: undefined as string | undefined };

  let result: { a?: string, b?: string; } = {};
  result.a = `hello: ${obj.name ?? "jim"}`;

  obj.name = "jack";
  result.b = `hello: ${obj.name ?? "jim"}`;

  return result;
});
```


