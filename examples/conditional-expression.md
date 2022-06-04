
## conditional
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZSgKICBhc3luYyAoYXJnczogeyBuYW1lPzogc3RyaW5nIH0pID0+IHsKICAgIGNvbnN0IG9iaiA9IHsgbmFtZTogdW5kZWZpbmVkIH07CiAgICByZXR1cm4gb2JqLm5hbWUgPyBvYmoubmFtZSA6ICJqaW0iOwogIH0KKTsK)

``` typescript
export const main = asl.deploy.asStateMachine(
  async (args: { name?: string }) => {
    const obj = { name: undefined };
    return obj.name ? obj.name : "jim";
  }
);

```


## conditional with literal
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgcmV0dXJuIGZhbHNlID8gImppbSIgOiAiamFtZXMiOwp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  return false ? "jim" : "james";
});

```


## conditional within expression
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZSgKICBhc3luYyAoYXJnczogeyBuYW1lPzogc3RyaW5nIH0pID0+IHsKICAgIGNvbnN0IG9iaiA9IHsgbmFtZTogImppbSIgfTsKICAgIHJldHVybiAiaGVsbG8iICsgb2JqLm5hbWUgPyBvYmoubmFtZSA6ICJ3b3JsZCI7CiAgfQopOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(
  async (args: { name?: string }) => {
    const obj = { name: "jim" };
    return "hello" + obj.name ? obj.name : "world";
  }
);

```


## nested conditional
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZSgKICBhc3luYyAoYXJnczogeyBuYW1lPzogc3RyaW5nIH0pID0+IHsKICAgIGNvbnN0IG9iaiA9IHsgbmFtZTogImppbSIgfTsKICAgIHJldHVybiBudWxsID8gImRvZXNuJ3QgaGFwcGVuIiA6IG9iai5uYW1lID8/ICJ3b3JsZCI7CiAgfQopOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(
  async (args: { name?: string }) => {
    const obj = { name: "jim" };
    return null ? "doesn't happen" : obj.name ?? "world";
  }
);

```


## conditional within string format
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZSgKICBhc3luYyAoYXJnczogeyBuYW1lPzogc3RyaW5nIH0pID0+IHsKICAgIGNvbnN0IG9iaiA9IHsgbmFtZTogImppbSIgfTsKICAgIHJldHVybiBgaGVsbG86ICR7b2JqID8gb2JqLm5hbWUgOiAiamltIn1gOwogIH0KKTsK)

``` typescript
export const main = asl.deploy.asStateMachine(
  async (args: { name?: string }) => {
    const obj = { name: "jim" };
    return `hello: ${obj ? obj.name : "jim"}`;
  }
);

```


