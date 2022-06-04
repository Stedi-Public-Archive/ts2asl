
## check argument type
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElucHV0KSA9PiAKIHsKICBpZiAodHlwZW9mIGlucHV0LmRlbGF5SW5TZWNvbmRzICE9PSAibnVtYmVyIikgewogICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcigiZGVsYXlJblNlY29uZHMgbXVzdCBiZSBhIG51bWJlciIpOwogIH0KICBhd2FpdCBhc2wud2FpdCh7IHNlY29uZHM6IGlucHV0LmRlbGF5SW5TZWNvbmRzIH0pOwp9KTsKCmludGVyZmFjZSBJbnB1dCB7CiAgICBkZWxheUluU2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkOwp9Y2xhc3MgVmFsaWRhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3IgewogICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7CiAgICAgICAgc3VwZXIobWVzc2FnZSk7CiAgICB9Cn0=)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: Input) => 
 {
  if (typeof input.delayInSeconds !== "number") {
    throw new ValidationError("delayInSeconds must be a number");
  }
  await asl.wait({ seconds: input.delayInSeconds });
});

interface Input {
    delayInSeconds: number | undefined;
}class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}
```


## check argument type provide default
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElucHV0KSA9PiAKIHsKICBpZiAodHlwZW9mIGlucHV0LmRlbGF5SW5TZWNvbmRzICE9PSAibnVtYmVyIikgewogICAgaW5wdXQuZGVsYXlJblNlY29uZHMgPSA1OwogIH0KICBhd2FpdCBhc2wud2FpdCh7IHNlY29uZHM6IGlucHV0LmRlbGF5SW5TZWNvbmRzIH0pOwogIHJldHVybiBpbnB1dC5kZWxheUluU2Vjb25kczsKfSk7CgppbnRlcmZhY2UgSW5wdXQgewogICAgZGVsYXlJblNlY29uZHM6IG51bWJlciB8IHVuZGVmaW5lZDsKfWNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHsKICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykgewogICAgICAgIHN1cGVyKG1lc3NhZ2UpOwogICAgfQp9)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: Input) => 
 {
  if (typeof input.delayInSeconds !== "number") {
    input.delayInSeconds = 5;
  }
  await asl.wait({ seconds: input.delayInSeconds });
  return input.delayInSeconds;
});

interface Input {
    delayInSeconds: number | undefined;
}class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}
```


## check argument range
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElucHV0KSA9PiAKIHsKICBpZiAodHlwZW9mIGlucHV0LmRlbGF5SW5TZWNvbmRzICE9PSAibnVtYmVyIikgewogICAgaW5wdXQuZGVsYXlJblNlY29uZHMgPSA1OwogIH0KCiAgaWYgKGlucHV0LmRlbGF5SW5TZWNvbmRzID4gMTAgfHwgaW5wdXQuZGVsYXlJblNlY29uZHMgPCAxKSB7CiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKCJkZWxheSBpbiBzZWNvbmRzIG11c3QgYmUgbnVtZXJpYyB2YWx1ZSBubyBncmVhdGVyIHRoYW4gMTAgYW5kIG5vIHNtYWxsZXIgdGhhbiAxIik7CiAgfQoKICBhd2FpdCBhc2wud2FpdCh7IHNlY29uZHM6IGlucHV0LmRlbGF5SW5TZWNvbmRzIH0pOwogIHJldHVybiBpbnB1dC5kZWxheUluU2Vjb25kczsKfSk7CgppbnRlcmZhY2UgSW5wdXQgewogICAgZGVsYXlJblNlY29uZHM6IG51bWJlciB8IHVuZGVmaW5lZDsKfWNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHsKICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykgewogICAgICAgIHN1cGVyKG1lc3NhZ2UpOwogICAgfQp9)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: Input) => 
 {
  if (typeof input.delayInSeconds !== "number") {
    input.delayInSeconds = 5;
  }

  if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {
    throw new ValidationError("delay in seconds must be numeric value no greater than 10 and no smaller than 1");
  }

  await asl.wait({ seconds: input.delayInSeconds });
  return input.delayInSeconds;
});

interface Input {
    delayInSeconds: number | undefined;
}class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}
```


