
## convert string to number
This example demonstrates how to convert to number to a string (and string to a number). The function will return "succeeded" and both if-statements will use the inferred type in their comparison.
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBudW0gPSBhc2wuY29udmVydC5zdHJpbmdUb051bWJlcigiNDIiKTsKICBpZiAobnVtID09PSA0MikgewogICAgY29uc3Qgc3RyID0gYXNsLmNvbnZlcnQubnVtYmVyVG9TdHJpbmcobnVtKTsKICAgIGlmIChzdHIgPT09ICI0MiIpIHsKICAgICAgcmV0dXJuICJzdWNjZWVkZWQiOwogICAgfQogIH0KICB0aHJvdyBuZXcgRXJyb3IoImZhaWxlZCIpOwp9KTsKCg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBib29sID0gYXNsLmNvbnZlcnQuc3RyaW5nVG9Cb29sZWFuKCJ0cnVlIik7CiAgaWYgKGJvb2wgPT09IHRydWUpIHsKICAgIGNvbnN0IHN0ciA9IGFzbC5jb252ZXJ0LmJvb2xlYW5Ub1N0cmluZyhib29sKTsKICAgIGlmIChzdHIgPT09ICJ0cnVlIikgewogICAgICByZXR1cm4gInN1Y2NlZWRlZCI7CiAgICB9CiAgfQogIHRocm93IG5ldyBFcnJvcigiZmFpbGVkIik7Cn0pOwoK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
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


