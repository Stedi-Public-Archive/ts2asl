
## call state machine with await
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBuYW1lID0gYXdhaXQgY2hpbGRTdGF0ZU1hY2hpbmUoe2ZpcnN0TmFtZTogIlNhbnRhIiwgbGFzdE5hbWU6ICJDbGF1cyIgfSk7CiAgcmV0dXJuIG5hbWU7Cn0pOwoKZXhwb3J0IGNvbnN0IG1haW4gPSBhc2wuZGVwbG95LmFzU3RhdGVNYWNoaW5lKGFzeW5jIChpbnB1dDogQXJndW1lbnRzKSA9PiAKIHsKICByZXR1cm4gYCR7aW5wdXQuZmlyc3ROYW1lfSAke2lucHV0Lmxhc3ROYW1lfWAKfSk7CgppbnRlcmZhY2UgQXJndW1lbnRzIHsKICAgIGZpcnN0TmFtZTogc3RyaW5nOwogICAgbGFzdE5hbWU6IHN0cmluZzsKfQ==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const name = await childStateMachine({firstName: "Santa", lastName: "Claus" });
  return name;
});

export const main = asl.deploy.asStateMachine(async (input: Arguments) => 
 {
  return `${input.firstName} ${input.lastName}`
});

interface Arguments {
    firstName: string;
    lastName: string;
}
```


## call state machine pass reference
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBhcmdzID0ge2ZpcnN0TmFtZTogIlNhbnRhIiwgbGFzdE5hbWU6ICJDbGF1cyIgfTsKICBjb25zdCBuYW1lID0gYXdhaXQgY2hpbGRTdGF0ZU1hY2hpbmUoYXJncyk7CiAgcmV0dXJuIG5hbWU7Cn0pOwoKZXhwb3J0IGNvbnN0IG1haW4gPSBhc2wuZGVwbG95LmFzU3RhdGVNYWNoaW5lKGFzeW5jIChpbnB1dDogQXJndW1lbnRzKSA9PiAKIHsKICByZXR1cm4gYCR7aW5wdXQuZmlyc3ROYW1lfSAke2lucHV0Lmxhc3ROYW1lfWAKfSk7CgppbnRlcmZhY2UgQXJndW1lbnRzIHsKICAgIGZpcnN0TmFtZTogc3RyaW5nOwogICAgbGFzdE5hbWU6IHN0cmluZzsKfQ==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const args = {firstName: "Santa", lastName: "Claus" };
  const name = await childStateMachine(args);
  return name;
});

export const main = asl.deploy.asStateMachine(async (input: Arguments) => 
 {
  return `${input.firstName} ${input.lastName}`
});

interface Arguments {
    firstName: string;
    lastName: string;
}
```


## call state machine no await
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjaGlsZFN0YXRlTWFjaGluZSh7Zmlyc3ROYW1lOiAiU2FudGEiLCBsYXN0TmFtZTogIkNsYXVzIiB9KTsKfSk7CgpleHBvcnQgY29uc3QgbWFpbiA9IGFzbC5kZXBsb3kuYXNTdGF0ZU1hY2hpbmUoYXN5bmMgKGlucHV0OiBBcmd1bWVudHMpID0+IAogewogIHJldHVybiBgJHtpbnB1dC5maXJzdE5hbWV9ICR7aW5wdXQubGFzdE5hbWV9YAp9KTsKCmludGVyZmFjZSBBcmd1bWVudHMgewogICAgZmlyc3ROYW1lOiBzdHJpbmc7CiAgICBsYXN0TmFtZTogc3RyaW5nOwp9)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  childStateMachine({firstName: "Santa", lastName: "Claus" });
});

export const main = asl.deploy.asStateMachine(async (input: Arguments) => 
 {
  return `${input.firstName} ${input.lastName}`
});

interface Arguments {
    firstName: string;
    lastName: string;
}
```


## call lambda with await
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBuYW1lID0gYXdhaXQgY2hpbGRMYW1iZGEoe2ZpcnN0TmFtZTogIlNhbnRhIiwgbGFzdE5hbWU6ICJDbGF1cyIgfSk7CiAgcmV0dXJuIG5hbWU7Cn0pOwoKaW50ZXJmYWNlIEFyZ3VtZW50cyB7CiAgICBmaXJzdE5hbWU6IHN0cmluZzsKICAgIGxhc3ROYW1lOiBzdHJpbmc7Cn0=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const name = await childLambda({firstName: "Santa", lastName: "Claus" });
  return name;
});

interface Arguments {
    firstName: string;
    lastName: string;
}
```


## not awaited void expression
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICB2b2lkIGNoaWxkU3RhdGVNYWNoaW5lKHtmaXJzdE5hbWU6ICJTYW50YSIsIGxhc3ROYW1lOiAiQ2xhdXMiIH0pOwp9KTsKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoaW5wdXQ6IEFyZ3VtZW50cykgPT4gCiB7CiAgcmV0dXJuIGAke2lucHV0LmZpcnN0TmFtZX0gJHtpbnB1dC5sYXN0TmFtZX1gCn0pOwoKaW50ZXJmYWNlIEFyZ3VtZW50cyB7CiAgICBmaXJzdE5hbWU6IHN0cmluZzsKICAgIGxhc3ROYW1lOiBzdHJpbmc7Cn0=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  void childStateMachine({firstName: "Santa", lastName: "Claus" });
});

export const main = asl.deploy.asStateMachine(async (input: Arguments) => 
 {
  return `${input.firstName} ${input.lastName}`
});

interface Arguments {
    firstName: string;
    lastName: string;
}
```


