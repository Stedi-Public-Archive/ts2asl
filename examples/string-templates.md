
## string templates
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHZhcmlhYmxlID0gInNvbWUgdmFyIjsKCiAgcmV0dXJuIHsKICAgIGhlbGxvOiBgaGVsbG8gJHt2YXJpYWJsZX1gLAogIH07Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let variable = "some var";

  return {
    hello: `hello ${variable}`,
  };
});

```


## escaped characters
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHZhcmlhYmxlID0gInNvbWUgdmFyIjsKCiAgcmV0dXJuIHsKICAgIGhlbGxvOiBgaGVsbG8gJHt2YXJpYWJsZX1gLAogICAgc2luZ2xlUXVvdGU6IGBoZWxsbyAnICsgJHt2YXJpYWJsZX1gLAogICAgY3VybHlCcmFjZTogYGhlbGxvIH17fSArICR7dmFyaWFibGV9YCwKICAgIGJhY2tTbGFzaDogYGhlbGxvIFxcICsgJHt2YXJpYWJsZX1gLAogICAgZW1vamk6IGBoZWxsbyDwn5mCICsgJHt2YXJpYWJsZX1gLAogIH07Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
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


