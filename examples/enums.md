
## compare enum
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCB4ID0gRXhhbXBsZUVudW0uQTsKICBpZiAoeCA9PT0gRXhhbXBsZUVudW0uQSkgewogICAgcmV0dXJuICJzdWNjZXNzIgogIH0KICByZXR1cm4gImZhaWwiCn0pOwoKCgplbnVtIEV4YW1wbGVFbnVtIHsKICAiQSIsCiAgIkIiCn0KCmVudW0gRXhhbXBsZUVudW1TdHJpbmcgewogICJBIiA9ICJhIiwKICAiQiIgPSAiYiIKfQ==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const x = ExampleEnum.A;
  if (x === ExampleEnum.A) {
    return "success"
  }
  return "fail"
});



enum ExampleEnum {
  "A",
  "B"
}

enum ExampleEnumString {
  "A" = "a",
  "B" = "b"
}
```


## compare string enum
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCB4ID0gRXhhbXBsZUVudW1TdHJpbmcuQTsKICBpZiAoeCA9PT0gRXhhbXBsZUVudW1TdHJpbmcuQSkgewogICAgcmV0dXJuICJzdWNjZXNzIgogIH0KICByZXR1cm4gImZhaWwiCn0pOwoKCgplbnVtIEV4YW1wbGVFbnVtIHsKICAiQSIsCiAgIkIiCn0KCmVudW0gRXhhbXBsZUVudW1TdHJpbmcgewogICJBIiA9ICJhIiwKICAiQiIgPSAiYiIKfQ==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const x = ExampleEnumString.A;
  if (x === ExampleEnumString.A) {
    return "success"
  }
  return "fail"
});



enum ExampleEnum {
  "A",
  "B"
}

enum ExampleEnumString {
  "A" = "a",
  "B" = "b"
}
```


