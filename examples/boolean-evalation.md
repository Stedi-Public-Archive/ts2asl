
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBkYXRhID0gewogICAgbnVtOiA0MiwKICAgIHRleHQ6ICJ0ZXh0IiwKICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkLAogICAgbnVsbDogbnVsbCwKICAgIHRpbWVzdGFtcDogIjIwMTYtMDMtMTRUMDE6NTk6MDBaIgogIH07CgogIGlmICh0eXBlb2YgZGF0YS5udW0gIT09ICJudW1iZXIiKSB7CiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKCJudW0gZXhwZWN0ZWQgdG8gYmUgbnVtYmVyIik7CiAgfQoKICBpZiAoZGF0YS5udW0gIT09IDQyKSB7CiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKCJudW0gZXhwZWN0ZWQgdG8gYmUgNDIiKTsKICB9CgogIGlmICh0eXBlb2YgZGF0YS50ZXh0ICE9PSAic3RyaW5nIikgewogICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcigidGV4dCBleHBlY3RlZCB0byBiZSBzdHJpbmciKTsKICB9CgogIGlmIChkYXRhLnRleHQgIT09ICJ0ZXh0IikgewogICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcigidGV4dCBleHBlY3RlZCB0byBiZSAndGV4dCciKTsKICB9CgogIGlmIChkYXRhLnVuZGVmaW5lZCkgewogICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcigidW5kZWZpbmVkIGV4cGVjdGVkIHRvIGJlIG5vbi10cnV0aHknIik7CiAgfQoKICBpZiAoZGF0YS5udWxsKSB7CiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKCJudWxsIGV4cGVjdGVkIHRvIGJlIG5vbi10cnV0aHknIik7CiAgfQoKICBpZiAodHlwZW9mIGRhdGEudGltZXN0YW1wICE9PSAic3RyaW5nIikgewogICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcigidGltZXN0YW1wIGV4cGVjdGVkIHRvIGJlIHN0cmluZyciKTsKICB9CiAgcmV0dXJuICJzdWNjZXNzIjsKfSk7CgpjbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgICAgICBzdXBlcihtZXNzYWdlKTsKICAgIH0KfQ==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const data = {
    num: 42,
    text: "text",
    undefined: undefined,
    null: null,
    timestamp: "2016-03-14T01:59:00Z"
  };

  if (typeof data.num !== "number") {
    throw new ValidationError("num expected to be number");
  }

  if (data.num !== 42) {
    throw new ValidationError("num expected to be 42");
  }

  if (typeof data.text !== "string") {
    throw new ValidationError("text expected to be string");
  }

  if (data.text !== "text") {
    throw new ValidationError("text expected to be 'text'");
  }

  if (data.undefined) {
    throw new ValidationError("undefined expected to be non-truthy'");
  }

  if (data.null) {
    throw new ValidationError("null expected to be non-truthy'");
  }

  if (typeof data.timestamp !== "string") {
    throw new ValidationError("timestamp expected to be string'");
  }
  return "success";
});

class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}
```


## numeric comparison
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBjb25kaXRpb24gPSA0MjsKICBjb25zdCBpdGVtcyA9IFsyLCA0MiwgM107CiAgY29uc3QgbGlzdFdpdGhSZXR1cm5lZCA9IGl0ZW1zLm1hcChpdGVtID0+IHsKICAgIGlmIChpdGVtID09PSBjb25kaXRpb24pIHsKICAgICAgcmV0dXJuIHsgcmV0dXJuZWQ6IGl0ZW0gfTsKICAgIH0KICAgIHJldHVybiB7fTsKICB9KTsKICBjb25zdCBpdGVtID0gbGlzdFdpdGhSZXR1cm5lZC5maWx0ZXIoeCA9PiB4LnJldHVybmVkKTsKICByZXR1cm4gaXRlbTsKfSk7CgpjbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgICAgICBzdXBlcihtZXNzYWdlKTsKICAgIH0KfQ==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const condition = 42;
  const items = [2, 42, 3];
  const listWithReturned = items.map(item => {
    if (item === condition) {
      return { returned: item };
    }
    return {};
  });
  const item = listWithReturned.filter(x => x.returned);
  return item;
});

class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}
```


