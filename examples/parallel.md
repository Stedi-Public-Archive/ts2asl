
## simple
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IHt9KSA9PiAKIHsKICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoW3dvcmtlcigpLCB3b3JrZXIoKV0pOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: {}) => 
 {
  return await Promise.all([worker(), worker()]);
});
```


## enclosed variables
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IHt9KSA9PiAKIHsKICBjb25zdCBlbmNsb3NlZFZhcjEgPSB7IHNvbWV0aGluZzogImxlZnQiIH07CiAgY29uc3QgZW5jbG9zZWRWYXIyID0geyBzb21ldGhpbmc6ICJyaWdodCIgfTsKICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoWwogICAgYXN5bmMgKCkgPT4gewogICAgICBhd2FpdCB3b3JrZXIoZW5jbG9zZWRWYXIxKTsKICAgIH0sCiAgICBhc3luYyAoKSA9PiB7CiAgICAgIGF3YWl0IHdvcmtlcihlbmNsb3NlZFZhcjIpOwogICAgfSwKICBdKTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: {}) => 
 {
  const enclosedVar1 = { something: "left" };
  const enclosedVar2 = { something: "right" };
  return await Promise.all([
    async () => {
      await worker(enclosedVar1);
    },
    async () => {
      await worker(enclosedVar2);
    },
  ]);
});
```


