
## string templates
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgdmFyaWFibGUgPSAic29tZSB2YXIiOwoKICByZXR1cm4gewogICAgaGVsbG86IGBoZWxsbyAke3ZhcmlhYmxlfWAsCiAgfTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let variable = "some var";

  return {
    hello: `hello ${variable}`,
  };
});
```


## escaped characters
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgdmFyaWFibGUgPSAic29tZSB2YXIiOwoKICByZXR1cm4gewogICAgaGVsbG86IGBoZWxsbyAke3ZhcmlhYmxlfWAsCiAgICBzaW5nbGVRdW90ZTogYGhlbGxvICcgKyAke3ZhcmlhYmxlfWAsCiAgICBjdXJseUJyYWNlOiBgaGVsbG8gfXt9ICsgJHt2YXJpYWJsZX1gLAogICAgYmFja1NsYXNoOiBgaGVsbG8gXFwgKyAke3ZhcmlhYmxlfWAsCiAgICBlbW9qaTogYGhlbGxvIPCfmYIgKyAke3ZhcmlhYmxlfWAsCiAgfTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let variable = "some var";

  return {
    hello: `hello ${variable}`,
    singleQuote: `hello ' + ${variable}`,
    curlyBrace: `hello }{} + ${variable}`,
    backSlash: `hello \\ + ${variable}`,
    emoji: `hello 🙂 + ${variable}`,
  };
});
```


