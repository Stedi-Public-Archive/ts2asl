
## convert string to number
This example demonstrates how to convert to number to a string (and string to a number). The function will return "succeeded" and both if-statements will use the inferred type in their comparison.
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgbnVtID0gYXNsLmNvbnZlcnQuc3RyaW5nVG9OdW1iZXIoIjQyIik7CiAgaWYgKG51bSA9PT0gNDIpIHsKICAgIGNvbnN0IHN0ciA9IGFzbC5jb252ZXJ0Lm51bWJlclRvU3RyaW5nKG51bSk7CiAgICBpZiAoc3RyID09PSAiNDIiKSB7CiAgICAgIHJldHVybiAic3VjY2VlZGVkIjsKICAgIH0KICB9CiAgdGhyb3cgbmV3IEVycm9yKCJmYWlsZWQiKTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const num = asl.convert.stringToNumber("42");
  if (num === 42) {
    const str = asl.convert.numberToString(num);
    if (str === "42") {
      return "succeeded";
    }
  }
  throw new Error("failed");
});

```


## convert string to boolean
This example demonstrates how to convert to boolean to a string (and string to a boolean). The function will return "succeeded" and both if-statements will use the inferred type in their comparison.
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgYm9vbCA9IGFzbC5jb252ZXJ0LnN0cmluZ1RvQm9vbGVhbigidHJ1ZSIpOwogIGlmIChib29sID09PSB0cnVlKSB7CiAgICBjb25zdCBzdHIgPSBhc2wuY29udmVydC5ib29sZWFuVG9TdHJpbmcoYm9vbCk7CiAgICBpZiAoc3RyID09PSAidHJ1ZSIpIHsKICAgICAgcmV0dXJuICJzdWNjZWVkZWQiOwogICAgfQogIH0KICB0aHJvdyBuZXcgRXJyb3IoImZhaWxlZCIpOwp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const bool = asl.convert.stringToBoolean("true");
  if (bool === true) {
    const str = asl.convert.booleanToString(bool);
    if (str === "true") {
      return "succeeded";
    }
  }
  throw new Error("failed");
});

```


