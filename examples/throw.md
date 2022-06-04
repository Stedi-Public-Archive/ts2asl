
## try catch
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElucHV0KSA9PiB7CiAgdHJ5IHsKICAgIHRocm93IG5ldyBOb3RJbXBsZW1lbnRlZCgibm90IGltcGxlbWVudGVkIik7CiAgfSBjYXRjaCAoZXJyKSB7CiAgICBpZiAoZXJyLkNhdXNlID09PSAiTm90SW1wbGVtZW50ZWQiKSB7CiAgICAgIHJldHVybiAiVG9kbyI7CiAgICB9CiAgfQp9KTsKCmNsYXNzIFVuZXhwZWN0ZWRFcnJvciBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQpjbGFzcyBSZXRyeWFibGVFcnJvciBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQpjbGFzcyBOb3RJbXBsZW1lbnRlZCBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQpjbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7CiAgICBzdXBlcihtZXNzYWdlKTsKICB9Cn0KaW50ZXJmYWNlIElucHV0IHsKICBkZWxheUluU2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkOwp9Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: Input) => {
  try {
    throw new NotImplemented("not implemented");
  } catch (err) {
    if (err.Cause === "NotImplemented") {
      return "Todo";
    }
  }
});

class UnexpectedError extends Error {
  constructor(message: string) {
    super(message);
  }
}
class RetryableError extends Error {
  constructor(message: string) {
    super(message);
  }
}
class NotImplemented extends Error {
  constructor(message: string) {
    super(message);
  }
}
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
interface Input {
  delayInSeconds: number | undefined;
}

```


## throw errors
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElucHV0KSA9PiB7CiAgaWYgKGlucHV0LmRlbGF5SW5TZWNvbmRzID4gMTAgfHwgaW5wdXQuZGVsYXlJblNlY29uZHMgPCAxKSB7CiAgICB0aHJvdyBuZXcgVmFsaWRhdGlvbkVycm9yKAogICAgICAiZGVsYXkgaW4gc2Vjb25kcyBtdXN0IGJlIG51bWVyaWMgdmFsdWUgbm8gZ3JlYXRlciB0aGFuIDEwIGFuZCBubyBzbWFsbGVyIHRoYW4gMSIKICAgICk7CiAgfQoKICB0aHJvdyBuZXcgTm90SW1wbGVtZW50ZWQoIm5vdCBpbXBsZW1lbnRlZCIpOwp9KTsKCmNsYXNzIFVuZXhwZWN0ZWRFcnJvciBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQpjbGFzcyBSZXRyeWFibGVFcnJvciBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQpjbGFzcyBOb3RJbXBsZW1lbnRlZCBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQpjbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7CiAgICBzdXBlcihtZXNzYWdlKTsKICB9Cn0KaW50ZXJmYWNlIElucHV0IHsKICBkZWxheUluU2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkOwp9Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: Input) => {
  if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {
    throw new ValidationError(
      "delay in seconds must be numeric value no greater than 10 and no smaller than 1"
    );
  }

  throw new NotImplemented("not implemented");
});

class UnexpectedError extends Error {
  constructor(message: string) {
    super(message);
  }
}
class RetryableError extends Error {
  constructor(message: string) {
    super(message);
  }
}
class NotImplemented extends Error {
  constructor(message: string) {
    super(message);
  }
}
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
interface Input {
  delayInSeconds: number | undefined;
}

```


## retry errors
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgYXNsLnBhcmFsbGVsKHsKICAgIGJyYW5jaGVzOiBbCiAgICAgICgpID0+IHsKICAgICAgICB0aHJvdyBuZXcgUmV0cnlhYmxlRXJyb3IoInJldHJ5IG1lIik7CiAgICAgIH0sCiAgICBdLAogICAgcmV0cnk6IFsKICAgICAgewogICAgICAgIGVycm9yRXF1YWxzOiBbIlJldHJ5YWJsZUVycm9yIl0sCiAgICAgICAgYmFja29mZlJhdGU6IDEuNSwKICAgICAgICBpbnRlcnZhbFNlY29uZHM6IDMsCiAgICAgICAgbWF4QXR0ZW1wdHM6IDIsCiAgICAgIH0sCiAgICBdLAogIH0pOwp9KTsKCmNsYXNzIFVuZXhwZWN0ZWRFcnJvciBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQpjbGFzcyBSZXRyeWFibGVFcnJvciBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQpjbGFzcyBOb3RJbXBsZW1lbnRlZCBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQpjbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7CiAgICBzdXBlcihtZXNzYWdlKTsKICB9Cn0KaW50ZXJmYWNlIElucHV0IHsKICBkZWxheUluU2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkOwp9Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  asl.parallel({
    branches: [
      () => {
        throw new RetryableError("retry me");
      },
    ],
    retry: [
      {
        errorEquals: ["RetryableError"],
        backoffRate: 1.5,
        intervalSeconds: 3,
        maxAttempts: 2,
      },
    ],
  });
});

class UnexpectedError extends Error {
  constructor(message: string) {
    super(message);
  }
}
class RetryableError extends Error {
  constructor(message: string) {
    super(message);
  }
}
class NotImplemented extends Error {
  constructor(message: string) {
    super(message);
  }
}
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
interface Input {
  delayInSeconds: number | undefined;
}

```


## catch errors
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgYXNsLnBhcmFsbGVsKHsKICAgIGJyYW5jaGVzOiBbCiAgICAgICgpID0+IHsKICAgICAgICB0aHJvdyBuZXcgVW5leHBlY3RlZEVycm9yKCJiYWQgbHVjayEiKTsKICAgICAgfSwKICAgIF0sCiAgICByZXRyeTogWwogICAgICB7CiAgICAgICAgZXJyb3JFcXVhbHM6IFsiUmV0cnlhYmxlRXJyb3IiXSwKICAgICAgICBiYWNrb2ZmUmF0ZTogMS41LAogICAgICAgIGludGVydmFsU2Vjb25kczogMywKICAgICAgICBtYXhBdHRlbXB0czogMiwKICAgICAgfSwKICAgIF0sCiAgICBjYXRjaDogWwogICAgICB7CiAgICAgICAgZXJyb3JFcXVhbHM6IFsiVW5leHBlY3RlZEVycm9yIl0sCiAgICAgICAgYmxvY2s6IChlcnJvcikgPT4gewogICAgICAgICAgY29uc29sZS5sb2coYGNhdXNlICR7ZXJyb3IuQ2F1c2V9YCk7CiAgICAgICAgICBjb25zb2xlLmxvZyhgbWVzc2FnZSAke2Vycm9yLkVycm9yfWApOwogICAgICAgIH0sCiAgICAgIH0sCiAgICBdLAogIH0pOwp9KTsKCmNsYXNzIFVuZXhwZWN0ZWRFcnJvciBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQpjbGFzcyBSZXRyeWFibGVFcnJvciBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQpjbGFzcyBOb3RJbXBsZW1lbnRlZCBleHRlbmRzIEVycm9yIHsKICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgIHN1cGVyKG1lc3NhZ2UpOwogIH0KfQpjbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7CiAgICBzdXBlcihtZXNzYWdlKTsKICB9Cn0KaW50ZXJmYWNlIElucHV0IHsKICBkZWxheUluU2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkOwp9Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  asl.parallel({
    branches: [
      () => {
        throw new UnexpectedError("bad luck!");
      },
    ],
    retry: [
      {
        errorEquals: ["RetryableError"],
        backoffRate: 1.5,
        intervalSeconds: 3,
        maxAttempts: 2,
      },
    ],
    catch: [
      {
        errorEquals: ["UnexpectedError"],
        block: (error) => {
          console.log(`cause ${error.Cause}`);
          console.log(`message ${error.Error}`);
        },
      },
    ],
  });
});

class UnexpectedError extends Error {
  constructor(message: string) {
    super(message);
  }
}
class RetryableError extends Error {
  constructor(message: string) {
    super(message);
  }
}
class NotImplemented extends Error {
  constructor(message: string) {
    super(message);
  }
}
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
interface Input {
  delayInSeconds: number | undefined;
}

```


