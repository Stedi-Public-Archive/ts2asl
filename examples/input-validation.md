
## check argument type
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElucHV0KSA9PiB7CiAgaWYgKHR5cGVvZiBpbnB1dC5kZWxheUluU2Vjb25kcyAhPT0gIm51bWJlciIpIHsKICAgIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IoImRlbGF5SW5TZWNvbmRzIG11c3QgYmUgYSBudW1iZXIiKTsKICB9CiAgYXdhaXQgYXNsLndhaXQoeyBzZWNvbmRzOiBpbnB1dC5kZWxheUluU2Vjb25kcyB9KTsKfSk7CgppbnRlcmZhY2UgSW5wdXQgewogIGRlbGF5SW5TZWNvbmRzOiBudW1iZXIgfCB1bmRlZmluZWQ7Cn0KY2xhc3MgVmFsaWRhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3IgewogIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykgewogICAgc3VwZXIobWVzc2FnZSk7CiAgfQp9Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: Input) => {
  if (typeof input.delayInSeconds !== "number") {
    throw new ValidationError("delayInSeconds must be a number");
  }
  await asl.wait({ seconds: input.delayInSeconds });
});

interface Input {
  delayInSeconds: number | undefined;
}
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

```


## check argument type provide default
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElucHV0KSA9PiB7CiAgaWYgKHR5cGVvZiBpbnB1dC5kZWxheUluU2Vjb25kcyAhPT0gIm51bWJlciIpIHsKICAgIGlucHV0LmRlbGF5SW5TZWNvbmRzID0gNTsKICB9CiAgYXdhaXQgYXNsLndhaXQoeyBzZWNvbmRzOiBpbnB1dC5kZWxheUluU2Vjb25kcyB9KTsKICByZXR1cm4gaW5wdXQuZGVsYXlJblNlY29uZHM7Cn0pOwoKaW50ZXJmYWNlIElucHV0IHsKICBkZWxheUluU2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkOwp9CmNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQo=)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: Input) => {
  if (typeof input.delayInSeconds !== "number") {
    input.delayInSeconds = 5;
  }
  await asl.wait({ seconds: input.delayInSeconds });
  return input.delayInSeconds;
});

interface Input {
  delayInSeconds: number | undefined;
}
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

```


## check argument range
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElucHV0KSA9PiB7CiAgaWYgKHR5cGVvZiBpbnB1dC5kZWxheUluU2Vjb25kcyAhPT0gIm51bWJlciIpIHsKICAgIGlucHV0LmRlbGF5SW5TZWNvbmRzID0gNTsKICB9CgogIGlmIChpbnB1dC5kZWxheUluU2Vjb25kcyA+IDEwIHx8IGlucHV0LmRlbGF5SW5TZWNvbmRzIDwgMSkgewogICAgdGhyb3cgbmV3IFZhbGlkYXRpb25FcnJvcigKICAgICAgImRlbGF5IGluIHNlY29uZHMgbXVzdCBiZSBudW1lcmljIHZhbHVlIG5vIGdyZWF0ZXIgdGhhbiAxMCBhbmQgbm8gc21hbGxlciB0aGFuIDEiCiAgICApOwogIH0KCiAgYXdhaXQgYXNsLndhaXQoeyBzZWNvbmRzOiBpbnB1dC5kZWxheUluU2Vjb25kcyB9KTsKICByZXR1cm4gaW5wdXQuZGVsYXlJblNlY29uZHM7Cn0pOwoKaW50ZXJmYWNlIElucHV0IHsKICBkZWxheUluU2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkOwp9CmNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQo=)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: Input) => {
  if (typeof input.delayInSeconds !== "number") {
    input.delayInSeconds = 5;
  }

  if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {
    throw new ValidationError(
      "delay in seconds must be numeric value no greater than 10 and no smaller than 1"
    );
  }

  await asl.wait({ seconds: input.delayInSeconds });
  return input.delayInSeconds;
});

interface Input {
  delayInSeconds: number | undefined;
}
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}

```


