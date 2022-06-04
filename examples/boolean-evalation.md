
## main
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgZGF0YSA9IHsKICAgIG51bTogNDIsCiAgICB0ZXh0OiAidGV4dCIsCiAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZCwKICAgIG51bGw6IG51bGwsCiAgICB0aW1lc3RhbXA6ICIyMDE2LTAzLTE0VDAxOjU5OjAwWiIsCiAgfTsKCiAgaWYgKHR5cGVvZiBkYXRhLm51bSAhPT0gIm51bWJlciIpIHsKICAgIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IoIm51bSBleHBlY3RlZCB0byBiZSBudW1iZXIiKTsKICB9CgogIGlmIChkYXRhLm51bSAhPT0gNDIpIHsKICAgIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IoIm51bSBleHBlY3RlZCB0byBiZSA0MiIpOwogIH0KCiAgaWYgKHR5cGVvZiBkYXRhLnRleHQgIT09ICJzdHJpbmciKSB7CiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKCJ0ZXh0IGV4cGVjdGVkIHRvIGJlIHN0cmluZyIpOwogIH0KCiAgaWYgKGRhdGEudGV4dCAhPT0gInRleHQiKSB7CiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKCJ0ZXh0IGV4cGVjdGVkIHRvIGJlICd0ZXh0JyIpOwogIH0KCiAgaWYgKGRhdGEudW5kZWZpbmVkKSB7CiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKCJ1bmRlZmluZWQgZXhwZWN0ZWQgdG8gYmUgbm9uLXRydXRoeSciKTsKICB9CgogIGlmIChkYXRhLm51bGwpIHsKICAgIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IoIm51bGwgZXhwZWN0ZWQgdG8gYmUgbm9uLXRydXRoeSciKTsKICB9CgogIGlmICh0eXBlb2YgZGF0YS50aW1lc3RhbXAgIT09ICJzdHJpbmciKSB7CiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKCJ0aW1lc3RhbXAgZXhwZWN0ZWQgdG8gYmUgc3RyaW5nJyIpOwogIH0KICByZXR1cm4gInN1Y2Nlc3MiOwp9KTsKCmNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const data = {
    num: 42,
    text: "text",
    undefined: undefined,
    null: null,
    timestamp: "2016-03-14T01:59:00Z",
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgY29uZGl0aW9uID0gNDI7CiAgY29uc3QgaXRlbXMgPSBbMiwgNDIsIDNdOwogIGNvbnN0IGxpc3RXaXRoUmV0dXJuZWQgPSBpdGVtcy5tYXAoKGl0ZW0pID0+IHsKICAgIGlmIChpdGVtID09PSBjb25kaXRpb24pIHsKICAgICAgcmV0dXJuIHsgcmV0dXJuZWQ6IGl0ZW0gfTsKICAgIH0KICAgIHJldHVybiB7fTsKICB9KTsKICBjb25zdCBpdGVtID0gbGlzdFdpdGhSZXR1cm5lZC5maWx0ZXIoKHgpID0+IHgucmV0dXJuZWQpOwogIHJldHVybiBpdGVtOwp9KTsKCmNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const condition = 42;
  const items = [2, 42, 3];
  const listWithReturned = items.map((item) => {
    if (item === condition) {
      return { returned: item };
    }
    return {};
  });
  const item = listWithReturned.filter((x) => x.returned);
  return item;
});

class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

```


