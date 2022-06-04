
## call state machine with await
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgbmFtZSA9IGF3YWl0IGNoaWxkU3RhdGVNYWNoaW5lKHsKICAgIGZpcnN0TmFtZTogIlNhbnRhIiwKICAgIGxhc3ROYW1lOiAiQ2xhdXMiLAogIH0pOwogIHJldHVybiBuYW1lOwp9KTsKCmV4cG9ydCBjb25zdCBjaGlsZFN0YXRlTWFjaGluZSA9IGFzbC5kZXBsb3kuYXNTdGF0ZU1hY2hpbmUoCiAgYXN5bmMgKGlucHV0OiBBcmd1bWVudHMpID0+IHsKICAgIHJldHVybiBgJHtpbnB1dC5maXJzdE5hbWV9ICR7aW5wdXQubGFzdE5hbWV9YDsKICB9Cik7CgppbnRlcmZhY2UgQXJndW1lbnRzIHsKICBmaXJzdE5hbWU6IHN0cmluZzsKICBsYXN0TmFtZTogc3RyaW5nOwp9Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const name = await childStateMachine({
    firstName: "Santa",
    lastName: "Claus",
  });
  return name;
});

export const childStateMachine = asl.deploy.asStateMachine(
  async (input: Arguments) => {
    return `${input.firstName} ${input.lastName}`;
  }
);

interface Arguments {
  firstName: string;
  lastName: string;
}

```


## call state machine pass reference
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgYXJncyA9IHsgZmlyc3ROYW1lOiAiU2FudGEiLCBsYXN0TmFtZTogIkNsYXVzIiB9OwogIGNvbnN0IG5hbWUgPSBhd2FpdCBjaGlsZFN0YXRlTWFjaGluZShhcmdzKTsKICByZXR1cm4gbmFtZTsKfSk7CgpleHBvcnQgY29uc3QgY2hpbGRTdGF0ZU1hY2hpbmUgPSBhc2wuZGVwbG95LmFzU3RhdGVNYWNoaW5lKAogIGFzeW5jIChpbnB1dDogQXJndW1lbnRzKSA9PiB7CiAgICByZXR1cm4gYCR7aW5wdXQuZmlyc3ROYW1lfSAke2lucHV0Lmxhc3ROYW1lfWA7CiAgfQopOwoKaW50ZXJmYWNlIEFyZ3VtZW50cyB7CiAgZmlyc3ROYW1lOiBzdHJpbmc7CiAgbGFzdE5hbWU6IHN0cmluZzsKfQo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const args = { firstName: "Santa", lastName: "Claus" };
  const name = await childStateMachine(args);
  return name;
});

export const childStateMachine = asl.deploy.asStateMachine(
  async (input: Arguments) => {
    return `${input.firstName} ${input.lastName}`;
  }
);

interface Arguments {
  firstName: string;
  lastName: string;
}

```


## call state machine no await
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY2hpbGRTdGF0ZU1hY2hpbmUoeyBmaXJzdE5hbWU6ICJTYW50YSIsIGxhc3ROYW1lOiAiQ2xhdXMiIH0pOwp9KTsKCmV4cG9ydCBjb25zdCBjaGlsZFN0YXRlTWFjaGluZSA9IGFzbC5kZXBsb3kuYXNTdGF0ZU1hY2hpbmUoCiAgYXN5bmMgKGlucHV0OiBBcmd1bWVudHMpID0+IHsKICAgIHJldHVybiBgJHtpbnB1dC5maXJzdE5hbWV9ICR7aW5wdXQubGFzdE5hbWV9YDsKICB9Cik7CgppbnRlcmZhY2UgQXJndW1lbnRzIHsKICBmaXJzdE5hbWU6IHN0cmluZzsKICBsYXN0TmFtZTogc3RyaW5nOwp9Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  childStateMachine({ firstName: "Santa", lastName: "Claus" });
});

export const childStateMachine = asl.deploy.asStateMachine(
  async (input: Arguments) => {
    return `${input.firstName} ${input.lastName}`;
  }
);

interface Arguments {
  firstName: string;
  lastName: string;
}

```


## call lambda with await
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgbmFtZSA9IGF3YWl0IGNoaWxkTGFtYmRhKHsgZmlyc3ROYW1lOiAiU2FudGEiLCBsYXN0TmFtZTogIkNsYXVzIiB9KTsKICByZXR1cm4gbmFtZTsKfSk7CgppbnRlcmZhY2UgQXJndW1lbnRzIHsKICBmaXJzdE5hbWU6IHN0cmluZzsKICBsYXN0TmFtZTogc3RyaW5nOwp9Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const name = await childLambda({ firstName: "Santa", lastName: "Claus" });
  return name;
});

interface Arguments {
  firstName: string;
  lastName: string;
}

```


## not awaited void expression
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgdm9pZCBjaGlsZFN0YXRlTWFjaGluZSh7IGZpcnN0TmFtZTogIlNhbnRhIiwgbGFzdE5hbWU6ICJDbGF1cyIgfSk7Cn0pOwoKZXhwb3J0IGNvbnN0IGNoaWxkU3RhdGVNYWNoaW5lID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZSgKICBhc3luYyAoaW5wdXQ6IEFyZ3VtZW50cykgPT4gewogICAgcmV0dXJuIGAke2lucHV0LmZpcnN0TmFtZX0gJHtpbnB1dC5sYXN0TmFtZX1gOwogIH0KKTsKCmludGVyZmFjZSBBcmd1bWVudHMgewogIGZpcnN0TmFtZTogc3RyaW5nOwogIGxhc3ROYW1lOiBzdHJpbmc7Cn0K)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  void childStateMachine({ firstName: "Santa", lastName: "Claus" });
});

export const childStateMachine = asl.deploy.asStateMachine(
  async (input: Arguments) => {
    return `${input.firstName} ${input.lastName}`;
  }
);

interface Arguments {
  firstName: string;
  lastName: string;
}

```


