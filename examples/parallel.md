
## simple
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IHt9KSA9PiB7CiAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKFt3b3JrZXIoKSwgd29ya2VyKCldKTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: {}) => {
  return await Promise.all([worker(), worker()]);
});

```


## enclosed variables
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IHt9KSA9PiB7CiAgY29uc3QgZW5jbG9zZWRWYXIxID0geyBzb21ldGhpbmc6ICJsZWZ0IiB9OwogIGNvbnN0IGVuY2xvc2VkVmFyMiA9IHsgc29tZXRoaW5nOiAicmlnaHQiIH07CiAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKFt3b3JrZXIoZW5jbG9zZWRWYXIxKSwgd29ya2VyKGVuY2xvc2VkVmFyMildKTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: {}) => {
  const enclosedVar1 = { something: "left" };
  const enclosedVar2 = { something: "right" };
  return await Promise.all([worker(enclosedVar1), worker(enclosedVar2)]);
});

```


