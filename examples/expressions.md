
## concat strings
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgcmV0dXJuIHsKICAgIGE6ICJoZWxsbyIgKyAiIHdvcmxkICIsCiAgICBiOiAiYSIgKyAiYiIgKyAiYyIsCiAgICBjOiBgYSR7ImIifWNgLAogICAgZDogYG49JHs0Mn07YCwKICB9Owp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  return {
    a: "hello" + " world ",
    b: "a" + "b" + "c",
    c: `a${"b"}c`,
    d: `n=${42};`,
  };
});

```


## numbers
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgcmV0dXJuIHsKICAgIGE6IDEwICsgMTAsCiAgICBiOiAzMCAtIDEwLAogICAgYzogMTAgKiAyLAogICAgZDogNDAgLyAyLAogICAgZTogMiAqICg0ICsgNCAqIDQpLAogIH07Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  return {
    a: 10 + 10,
    b: 30 - 10,
    c: 10 * 2,
    d: 40 / 2,
    e: 2 * (4 + 4 * 4),
  };
});

```


## booleans
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgcmV0dXJuIHsKICAgIGE6IHRydWUsCiAgICBiOiBmYWxzZSwKICAgIGM6IHRydWUgfHwgZmFsc2UsCiAgICBkOiB0cnVlICYmIGZhbHNlLAogICAgZTogdHJ1ZSAmJiAoZmFsc2UgfHwgZmFsc2UpLAogICAgZjogKHRydWUgJiYgZmFsc2UpIHx8IGZhbHNlIHx8IHRydWUsCiAgfTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  return {
    a: true,
    b: false,
    c: true || false,
    d: true && false,
    e: true && (false || false),
    f: (true && false) || false || true,
  };
});

```


## parameters
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgcmV0dXJuIHsKICAgIGE6IGFzbC5kZXBsb3kuZ2V0UGFyYW1ldGVyKCJidWNrZXROYW1lIiksCiAgICBiOiAiczM6Ojphcm46IiArIGFzbC5kZXBsb3kuZ2V0UGFyYW1ldGVyKCJidWNrZXROYW1lIiksCiAgICBjOiBgdmFsdWUgLT4gJHthc2wuZGVwbG95LmdldFBhcmFtZXRlcigiYnVja2V0TmFtZSIpfSA8LSB2YWx1ZWAsCiAgfTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  return {
    a: asl.deploy.getParameter("bucketName"),
    b: "s3:::arn:" + asl.deploy.getParameter("bucketName"),
    c: `value -> ${asl.deploy.getParameter("bucketName")} <- value`,
  };
});

```


