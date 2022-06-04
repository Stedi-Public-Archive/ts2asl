
## try catch
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElucHV0KSA9PiAKIHsKICB0cnkgewogICAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkKCJub3QgaW1wbGVtZW50ZWQiKQogIH0gY2F0Y2ggKGVycikgewogICAgaWYgKGVyci5DYXVzZSA9PT0gIk5vdEltcGxlbWVudGVkIikgewogICAgICByZXR1cm4gIlRvZG8iCiAgICB9CiAgfQp9KTsKCmNsYXNzIFVuZXhwZWN0ZWRFcnJvciBleHRlbmRzIEVycm9yIHsKICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykgewogICAgICAgIHN1cGVyKG1lc3NhZ2UpOwogICAgfQp9Y2xhc3MgUmV0cnlhYmxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgICAgICBzdXBlcihtZXNzYWdlKTsKICAgIH0KfWNsYXNzIE5vdEltcGxlbWVudGVkIGV4dGVuZHMgRXJyb3IgewogICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7CiAgICAgICAgc3VwZXIobWVzc2FnZSk7CiAgICB9Cn1jbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgICAgICBzdXBlcihtZXNzYWdlKTsKICAgIH0KfWludGVyZmFjZSBJbnB1dCB7CiAgICBkZWxheUluU2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkOwp9)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: Input) => 
 {
  try {
    throw new NotImplemented("not implemented")
  } catch (err) {
    if (err.Cause === "NotImplemented") {
      return "Todo"
    }
  }
});

class UnexpectedError extends Error {
    constructor(message: string) {
        super(message);
    }
}class RetryableError extends Error {
    constructor(message: string) {
        super(message);
    }
}class NotImplemented extends Error {
    constructor(message: string) {
        super(message);
    }
}class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}interface Input {
    delayInSeconds: number | undefined;
}
```


## throw errors
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IElucHV0KSA9PiAKIHsKICBpZiAoaW5wdXQuZGVsYXlJblNlY29uZHMgPiAxMCB8fCBpbnB1dC5kZWxheUluU2Vjb25kcyA8IDEpIHsKICAgIHRocm93IG5ldyBWYWxpZGF0aW9uRXJyb3IoImRlbGF5IGluIHNlY29uZHMgbXVzdCBiZSBudW1lcmljIHZhbHVlIG5vIGdyZWF0ZXIgdGhhbiAxMCBhbmQgbm8gc21hbGxlciB0aGFuIDEiKQogIH0KCiAgdGhyb3cgbmV3IE5vdEltcGxlbWVudGVkKCJub3QgaW1wbGVtZW50ZWQiKQp9KTsKCmNsYXNzIFVuZXhwZWN0ZWRFcnJvciBleHRlbmRzIEVycm9yIHsKICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykgewogICAgICAgIHN1cGVyKG1lc3NhZ2UpOwogICAgfQp9Y2xhc3MgUmV0cnlhYmxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgICAgICBzdXBlcihtZXNzYWdlKTsKICAgIH0KfWNsYXNzIE5vdEltcGxlbWVudGVkIGV4dGVuZHMgRXJyb3IgewogICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7CiAgICAgICAgc3VwZXIobWVzc2FnZSk7CiAgICB9Cn1jbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgICAgICBzdXBlcihtZXNzYWdlKTsKICAgIH0KfWludGVyZmFjZSBJbnB1dCB7CiAgICBkZWxheUluU2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkOwp9)

``` typescript
export const main = asl.deploy.asStateMachine(async (input: Input) => 
 {
  if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {
    throw new ValidationError("delay in seconds must be numeric value no greater than 10 and no smaller than 1")
  }

  throw new NotImplemented("not implemented")
});

class UnexpectedError extends Error {
    constructor(message: string) {
        super(message);
    }
}class RetryableError extends Error {
    constructor(message: string) {
        super(message);
    }
}class NotImplemented extends Error {
    constructor(message: string) {
        super(message);
    }
}class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}interface Input {
    delayInSeconds: number | undefined;
}
```


## retry errors
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBhc2wucGFyYWxsZWwoewogICAgYnJhbmNoZXM6IFsoKSA9PiB7CiAgICAgIHRocm93IG5ldyBSZXRyeWFibGVFcnJvcigicmV0cnkgbWUiKQogICAgfV0sCiAgICByZXRyeTogW3sKICAgICAgZXJyb3JFcXVhbHM6IFsiUmV0cnlhYmxlRXJyb3IiXSwKICAgICAgYmFja29mZlJhdGU6IDEuNSwKICAgICAgaW50ZXJ2YWxTZWNvbmRzOiAzLAogICAgICBtYXhBdHRlbXB0czogMgogICAgfV0KICB9KQp9KTsKCmNsYXNzIFVuZXhwZWN0ZWRFcnJvciBleHRlbmRzIEVycm9yIHsKICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykgewogICAgICAgIHN1cGVyKG1lc3NhZ2UpOwogICAgfQp9Y2xhc3MgUmV0cnlhYmxlRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgICAgICBzdXBlcihtZXNzYWdlKTsKICAgIH0KfWNsYXNzIE5vdEltcGxlbWVudGVkIGV4dGVuZHMgRXJyb3IgewogICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7CiAgICAgICAgc3VwZXIobWVzc2FnZSk7CiAgICB9Cn1jbGFzcyBWYWxpZGF0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7CiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgICAgICBzdXBlcihtZXNzYWdlKTsKICAgIH0KfWludGVyZmFjZSBJbnB1dCB7CiAgICBkZWxheUluU2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkOwp9)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  asl.parallel({
    branches: [() => {
      throw new RetryableError("retry me")
    }],
    retry: [{
      errorEquals: ["RetryableError"],
      backoffRate: 1.5,
      intervalSeconds: 3,
      maxAttempts: 2
    }]
  })
});

class UnexpectedError extends Error {
    constructor(message: string) {
        super(message);
    }
}class RetryableError extends Error {
    constructor(message: string) {
        super(message);
    }
}class NotImplemented extends Error {
    constructor(message: string) {
        super(message);
    }
}class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}interface Input {
    delayInSeconds: number | undefined;
}
```


## catch errors
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBhc2wucGFyYWxsZWwoewogICAgYnJhbmNoZXM6IFsoKSA9PiB7CiAgICAgIHRocm93IG5ldyBVbmV4cGVjdGVkRXJyb3IoImJhZCBsdWNrISIpCiAgICB9XSwKICAgIHJldHJ5OiBbewogICAgICBlcnJvckVxdWFsczogWyJSZXRyeWFibGVFcnJvciJdLAogICAgICBiYWNrb2ZmUmF0ZTogMS41LAogICAgICBpbnRlcnZhbFNlY29uZHM6IDMsCiAgICAgIG1heEF0dGVtcHRzOiAyCiAgICB9XSwKICAgIGNhdGNoOiBbewogICAgICBlcnJvckVxdWFsczogWyJVbmV4cGVjdGVkRXJyb3IiXSwKICAgICAgYmxvY2s6IChlcnJvcikgPT4gewogICAgICAgIGNvbnNvbGUubG9nKGBjYXVzZSAke2Vycm9yLkNhdXNlfWApCiAgICAgICAgY29uc29sZS5sb2coYG1lc3NhZ2UgJHtlcnJvci5FcnJvcn1gKQogICAgICB9CiAgICB9XQogIH0pCn0pOwoKY2xhc3MgVW5leHBlY3RlZEVycm9yIGV4dGVuZHMgRXJyb3IgewogICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7CiAgICAgICAgc3VwZXIobWVzc2FnZSk7CiAgICB9Cn1jbGFzcyBSZXRyeWFibGVFcnJvciBleHRlbmRzIEVycm9yIHsKICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykgewogICAgICAgIHN1cGVyKG1lc3NhZ2UpOwogICAgfQp9Y2xhc3MgTm90SW1wbGVtZW50ZWQgZXh0ZW5kcyBFcnJvciB7CiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlOiBzdHJpbmcpIHsKICAgICAgICBzdXBlcihtZXNzYWdlKTsKICAgIH0KfWNsYXNzIFZhbGlkYXRpb25FcnJvciBleHRlbmRzIEVycm9yIHsKICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykgewogICAgICAgIHN1cGVyKG1lc3NhZ2UpOwogICAgfQp9aW50ZXJmYWNlIElucHV0IHsKICAgIGRlbGF5SW5TZWNvbmRzOiBudW1iZXIgfCB1bmRlZmluZWQ7Cn0=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  asl.parallel({
    branches: [() => {
      throw new UnexpectedError("bad luck!")
    }],
    retry: [{
      errorEquals: ["RetryableError"],
      backoffRate: 1.5,
      intervalSeconds: 3,
      maxAttempts: 2
    }],
    catch: [{
      errorEquals: ["UnexpectedError"],
      block: (error) => {
        console.log(`cause ${error.Cause}`)
        console.log(`message ${error.Error}`)
      }
    }]
  })
});

class UnexpectedError extends Error {
    constructor(message: string) {
        super(message);
    }
}class RetryableError extends Error {
    constructor(message: string) {
        super(message);
    }
}class NotImplemented extends Error {
    constructor(message: string) {
        super(message);
    }
}class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}interface Input {
    delayInSeconds: number | undefined;
}
```


