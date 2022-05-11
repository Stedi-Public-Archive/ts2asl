
## return optional chain
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBvYmogPSB7IG5hbWU6ICJqaW0iIH07CiAgcmV0dXJuIG9iaj8ubmFtZTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const obj = { name: "jim" };
  return obj?.name;
});
```


## return longer chain
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBvYmogPSB7IGlubmVyOiB7IG5hbWU6ICJqaW0iIH0gfTsKICByZXR1cm4gb2JqPy5pbm5lcj8ubmFtZTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const obj = { inner: { name: "jim" } };
  return obj?.inner?.name;
});
```


## assign optional chain
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBvYmogPSB7IG5hbWU6ICJqaW0iIH07CiAgY29uc3QgbmFtZSA9IG9iaj8ubmFtZTsKICByZXR1cm4gbmFtZTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const obj = { name: "jim" };
  const name = obj?.name;
  return name;
});
```


