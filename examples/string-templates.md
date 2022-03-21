
## string templates
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgdmFyaWFibGUgPSAic29tZSB2YXIiOwoKICByZXR1cm4gewogICAgYjogYGhlbGxvICR7dmFyaWFibGV9YCwKICB9Owp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let variable = "some var";

  return {
    b: `hello ${variable}`,
  };
});
```


