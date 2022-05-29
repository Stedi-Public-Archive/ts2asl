
## call state machine with await
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBuYW1lID0gYXdhaXQgY2hpbGRTdGF0ZU1hY2hpbmUoe2ZpcnN0TmFtZTogIlNhbnRhIiwgbGFzdE5hbWU6ICJDbGF1cyIgfSk7CiAgcmV0dXJuIG5hbWU7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const name = await childStateMachine({firstName: "Santa", lastName: "Claus" });
  return name;
});
```


## call state machine pass reference
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBhcmdzID0ge2ZpcnN0TmFtZTogIlNhbnRhIiwgbGFzdE5hbWU6ICJDbGF1cyIgfTsKICBjb25zdCBuYW1lID0gYXdhaXQgY2hpbGRTdGF0ZU1hY2hpbmUoYXJncyk7CiAgcmV0dXJuIG5hbWU7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const args = {firstName: "Santa", lastName: "Claus" };
  const name = await childStateMachine(args);
  return name;
});
```


## call state machine no await
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjaGlsZFN0YXRlTWFjaGluZSh7Zmlyc3ROYW1lOiAiU2FudGEiLCBsYXN0TmFtZTogIkNsYXVzIiB9KTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  childStateMachine({firstName: "Santa", lastName: "Claus" });
});
```


## call lambda with await
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBuYW1lID0gYXdhaXQgY2hpbGRMYW1iZGEoe2ZpcnN0TmFtZTogIlNhbnRhIiwgbGFzdE5hbWU6ICJDbGF1cyIgfSk7CiAgcmV0dXJuIG5hbWU7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const name = await childLambda({firstName: "Santa", lastName: "Claus" });
  return name;
});
```


## not awaited void expression
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICB2b2lkIGNoaWxkU3RhdGVNYWNoaW5lKHtmaXJzdE5hbWU6ICJTYW50YSIsIGxhc3ROYW1lOiAiQ2xhdXMiIH0pOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  void childStateMachine({firstName: "Santa", lastName: "Claus" });
});
```


## child state machine

