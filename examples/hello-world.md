
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElJbnB1dCkgPT4gewogIGlmICh0eXBlb2YgaW5wdXQubmFtZSAhPT0gInN0cmluZyIpIHsKICAgIGlucHV0Lm5hbWUgPSAiV29ybGQiOwogIH0KICBjb25zdCBybmQgPSBhd2FpdCByYW5kb20oKTsKICByZXR1cm4gewogICAgZ3JlZXRpbmc6IGBIZWxsbyAke2lucHV0Lm5hbWV9YCwKICAgIGx1Y2t5TnVtYmVyOiBybmQsCiAgfTsKfSk7CgppbnRlcmZhY2UgSUlucHV0IHsKICBuYW1lOiBzdHJpbmc7Cn0K)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: IInput) => {
  if (typeof input.name !== "string") {
    input.name = "World";
  }
  const rnd = await random();
  return {
    greeting: `Hello ${input.name}`,
    luckyNumber: rnd,
  };
});

interface IInput {
  name: string;
}

```


