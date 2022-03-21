
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElucHV0KSA9PiAKIHsKICBpZiAodHlwZW9mIGlucHV0LmRlbGF5SW5TZWNvbmRzICE9PSAibnVtYmVyIikgewogICAgaW5wdXQuZGVsYXlJblNlY29uZHMgPSA1OwogIH0KCiAgaWYgKGlucHV0LmRlbGF5SW5TZWNvbmRzID4gMTAgfHwgaW5wdXQuZGVsYXlJblNlY29uZHMgPCAxKSB7CiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKCJkZWxheSBpbiBzZWNvbmRzIG11c3QgYmUgbnVtZXJpYyB2YWx1ZSBubyBncmVhdGVyIHRoYW4gMTAgYW5kIG5vIHNtYWxsZXIgdGhhbiAxIikKICB9CgogIGF3YWl0IGFzbC53YWl0KHsgc2Vjb25kczogaW5wdXQuZGVsYXlJblNlY29uZHMgfSk7CiAgcmV0dXJuIGlucHV0LmRlbGF5SW5TZWNvbmRzOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: Input) => 
 {
  if (typeof input.delayInSeconds !== "number") {
    input.delayInSeconds = 5;
  }

  if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {
    throw new ValidationError("delay in seconds must be numeric value no greater than 10 and no smaller than 1")
  }

  await asl.wait({ seconds: input.delayInSeconds });
  return input.delayInSeconds;
});
```


