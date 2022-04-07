
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoX2lucHV0OiB7fSwgX2NvbnRleHQ6IGFzbC5TdGF0ZU1hY2hpbmVDb250ZXh0PHt9PikgPT4gCiB7CiAgbGV0IHJlc3VsdDogUmVzdWx0ID0gYXdhaXQgYXNsLnRhc2soeyByZXNvdXJjZTogImNoZWNrLXBhc3N3b3JkIiwgcGFyYW1ldGVyczoge30gfSk7CiAgZG8gewogICAgYXdhaXQgYXNsLndhaXQoeyBzZWNvbmRzOiAxIH0pOwogICAgcmVzdWx0ID0gYXdhaXQgYXNsLnRhc2soeyByZXNvdXJjZTogImNoZWNrLXBhc3N3b3JkIiwgcGFyYW1ldGVyczoge30gfSk7CiAgfSB3aGlsZSAoIXJlc3VsdC5BdXRob3JpemVkKQp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async (_input: {}, _context: asl.StateMachineContext<{}>) => 
 {
  let result: Result = await asl.task({ resource: "check-password", parameters: {} });
  do {
    await asl.wait({ seconds: 1 });
    result = await asl.task({ resource: "check-password", parameters: {} });
  } while (!result.Authorized)
});
```


