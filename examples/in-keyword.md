
## if statement with in keyword
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgdmFsID0geyBncmVldGluZzogImhlbGxvIiB9OwogIGlmICgiZ3JlZXRpbmciIGluIHZhbCAmJiAhKCJzb21ldGhpbmdFbHNlIiBpbiB2YWwpKSB7CiAgICByZXR1cm4gInN1Y2Nlc3MiOwogIH0KICByZXR1cm4gImZhaWx1cmUiOzsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let val = { greeting: "hello" };
  if ("greeting" in val && !("somethingElse" in val)) {
    return "success";
  }
  return "failure";;
});
```


