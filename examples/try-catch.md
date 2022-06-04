
## simple try
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHJlc3VsdCA9ICIiOwogIHRyeSB7CiAgICByZXN1bHQgPSAic3VjY2VlZGVkIjsKICAgIHRocm93IG5ldyBFcnJvcigiZmFpbCIpOwogIH0gY2F0Y2ggewogICAgcmVzdWx0ID0gImZhaWxlZCI7CiAgfQogIHJldHVybiByZXN1bHQ7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let result = "";
  try {
    result = "succeeded";
    throw new Error("fail");
  } catch {
    result = "failed";
  }
  return result;
});

```


## reference error
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHJlc3VsdCA9ICIiOwogIHRyeSB7CiAgICByZXN1bHQgPSAic3VjY2VlZGVkIjsKCiAgICAvL2FzbC5jcmVhdGVFcnJvciB3aWxsIGNyZWF0ZSBhbiBub2RlIGVycm9yIHdpdGggRXJyb3IgYW5kIENhdXNlIHByb3BlcnRpZXMKICAgIHRocm93IGFzbC5ydW50aW1lLmNyZWF0ZUVycm9yKCJUZXN0IEVycm9yIiwgIkZhaWxlZCBvbiBwdXJwb3NlIik7CiAgfSBjYXRjaCAoZXJyKSB7CiAgICByZXN1bHQgPSBgZmFpbGVkICR7KGVyciBhcyBhc2wuQXNsRXJyb3IpLkVycm9yfSAoJHsKICAgICAgKGVyciBhcyBhc2wuQXNsRXJyb3IpLkNhdXNlCiAgICB9KWA7CiAgfQogIHJldHVybiByZXN1bHQ7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let result = "";
  try {
    result = "succeeded";

    //asl.createError will create an node error with Error and Cause properties
    throw asl.runtime.createError("Test Error", "Failed on purpose");
  } catch (err) {
    result = `failed ${(err as asl.AslError).Error} (${
      (err as asl.AslError).Cause
    })`;
  }
  return result;
});

```


## simple multiple statements
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgdHJ5IHsKICAgIGNvbnN0IGFyciA9IFsxXTsKICAgIGNvbnN0IHdpdGhpblRyeSA9IGFyci5tYXAoKHgpID0+ICJzdWNjZWVkZWQiKTsKICAgIHJldHVybiB3aXRoaW5UcnlbMF07CiAgfSBjYXRjaCB7CiAgICByZXR1cm4gIml0IGZhaWxlZCI7CiAgfQp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  try {
    const arr = [1];
    const withinTry = arr.map((x) => "succeeded");
    return withinTry[0];
  } catch {
    return "it failed";
  }
});

```


## try around pass state
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgdHJ5IHsKICAgIHJldHVybiAidGhpcyBjYW5ub3QgZmFpbCI7CiAgfSBjYXRjaCB7CiAgICByZXR1cm4gInRoaXMgbmV2ZXIgaGFwcGVucyI7CiAgfQp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  try {
    return "this cannot fail";
  } catch {
    return "this never happens";
  }
});

```


## try finally
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgdHJ5IHsKICAgIGF3YWl0IFByb21pc2UuYWxsKFsoKSA9PiAic3VjY2VlZGVkIl0pOwogIH0gZmluYWxseSB7CiAgICByZXR1cm4gImZpbmFsbHkiOwogIH0KfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  try {
    await Promise.all([() => "succeeded"]);
  } finally {
    return "finally";
  }
});

```


## try catch finally
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHJlc3VsdCA9ICIiOwogIHRyeSB7CiAgICByZXN1bHQgPSAidHJ5IjsKICB9IGNhdGNoIHsKICAgIHJlc3VsdCA9ICJjYXRjaCI7CiAgfSBmaW5hbGx5IHsKICAgIHJlc3VsdCA9ICJmaW5hbGx5IjsKICB9CiAgcmV0dXJuIHJlc3VsdDsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let result = "";
  try {
    result = "try";
  } catch {
    result = "catch";
  } finally {
    result = "finally";
  }
  return result;
});

```


## try catch fail state
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgdHJ5IHsKICAgIHJldHVybiBhc2wuZmFpbCh7CiAgICAgIGVycm9yOiAiSW50ZXJuYWxGYWlsdXJlIiwKICAgICAgY2F1c2U6ICJiYWQgbHVjayIsCiAgICB9KTsKICB9IGNhdGNoIChlKSB7CiAgICBjb25zdCBhc2xFcnJvciA9IGUgYXMgYXNsLkFzbEVycm9yOwogICAgaWYgKCJFcnJvciIgaW4gYXNsRXJyb3IgJiYgIkNhdXNlIiBpbiBhc2xFcnJvcikgewogICAgICByZXR1cm4gYCR7YXNsRXJyb3IuRXJyb3J9ICgke2FzbEVycm9yLkNhdXNlfSlgOwogICAgfQogIH0KICByZXR1cm4gInRoaXMgc2hvdWxkIG5vdCBoYXBwZW4iOwp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  try {
    return asl.fail({
      error: "InternalFailure",
      cause: "bad luck",
    });
  } catch (e) {
    const aslError = e as asl.AslError;
    if ("Error" in aslError && "Cause" in aslError) {
      return `${aslError.Error} (${aslError.Cause})`;
    }
  }
  return "this should not happen";
});

```


