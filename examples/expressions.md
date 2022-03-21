
## concat strings
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICByZXR1cm4gewogICAgYTogImhlbGxvIiArICIgd29ybGQgIiwKICAgIGI6ICJhIiArICJiIiArICJjIiwKICAgIGM6IGBhJHsiYiJ9Y2AsCiAgICBkOiBgbj0kezQyfTtgCiAgfTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  return {
    a: "hello" + " world ",
    b: "a" + "b" + "c",
    c: `a${"b"}c`,
    d: `n=${42};`
  };
});
```


## numbers
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICByZXR1cm4gewogICAgYTogMTAgKyAxMCwKICAgIGI6IDMwIC0gMTAsCiAgICBjOiAxMCAqIDIsCiAgICBkOiA0MCAvIDIsCiAgICBlOiAyICogKDQgKyA0ICogNCksCiAgfTsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICByZXR1cm4gewogICAgYTogdHJ1ZSwKICAgIGI6IGZhbHNlLAogICAgYzogdHJ1ZSB8fCBmYWxzZSwKICAgIGQ6IHRydWUgJiYgZmFsc2UsCiAgICBlOiB0cnVlICYmIChmYWxzZSB8fCBmYWxzZSksCiAgICBmOiAoKHRydWUgJiYgZmFsc2UpIHx8IGZhbHNlKSB8fCB0cnVlLAogIH07Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  return {
    a: true,
    b: false,
    c: true || false,
    d: true && false,
    e: true && (false || false),
    f: ((true && false) || false) || true,
  };
});
```


## parameters
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICByZXR1cm4gewogICAgYTogYXNsLmRlcGxveS5nZXRQYXJhbWV0ZXIoImJ1Y2tldE5hbWUiKSwKICAgIGI6ICJzMzo6OmFybjoiICsgYXNsLmRlcGxveS5nZXRQYXJhbWV0ZXIoImJ1Y2tldE5hbWUiKSwKICAgIGM6IGB2YWx1ZSAtPiAke2FzbC5kZXBsb3kuZ2V0UGFyYW1ldGVyKCJidWNrZXROYW1lIil9IDwtIHZhbHVlYCwKICB9Owp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  return {
    a: asl.deploy.getParameter("bucketName"),
    b: "s3:::arn:" + asl.deploy.getParameter("bucketName"),
    c: `value -> ${asl.deploy.getParameter("bucketName")} <- value`,
  };
});
```


