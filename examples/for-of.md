
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoX2lucHV0OiB7fSwgX2NvbnRleHQ6IGFzbC5TdGF0ZU1hY2hpbmVDb250ZXh0PHt9PikgPT4gCiB7CiAgY29uc3QgYXJyID0gWzEsIDIsIDNdCiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikgewogICAgY29uc29sZS5sb2coaXRlbSk7CiAgfQogIGNvbnNvbGUubG9nKCJkb25lIik7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) => 
 {
  const arr = [1, 2, 3]
  for (const item of arr) {
    console.log(item);
  }
  console.log("done");
});
```


## foreach with break
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoX2lucHV0OiB7fSwgX2NvbnRleHQ6IGFzbC5TdGF0ZU1hY2hpbmVDb250ZXh0PHt9PikgPT4gCiB7CiAgY29uc3QgYXJyID0gWzEsIDIsIDNdCiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikgewogICAgaWYgKGl0ZW0gPT09IDEpIHsgYnJlYWs7IH0KICAgIGNvbnNvbGUubG9nKGl0ZW0pOwogIH0KICBjb25zb2xlLmxvZygiZG9uZSIpOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) => 
 {
  const arr = [1, 2, 3]
  for (const item of arr) {
    if (item === 1) { break; }
    console.log(item);
  }
  console.log("done");
});
```


