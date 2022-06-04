
## simple while
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IGNvdW50ZXIgPSAiIjsKICB3aGlsZSAoY291bnRlciAhPSAiYWFhYWEiKSB7CiAgICBjb3VudGVyID0gYCR7Y291bnRlcn1hYDsKICB9CiAgcmV0dXJuIGNvdW50ZXI7IC8vcmV0dXJucyAiYWFhYWEiCn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let counter = "";
  while (counter != "aaaaa") {
    counter = `${counter}a`;
  }
  return counter; //returns "aaaaa"
});

```


## while with break
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IGNvdW50ZXIgPSAiIjsKICB3aGlsZSAoY291bnRlciAhPSAiYWFhYWEiKSB7CiAgICBjb3VudGVyID0gYCR7Y291bnRlcn1hYDsKICAgIGlmIChjb3VudGVyID09ICJhYSIpIHsKICAgICAgYnJlYWs7CiAgICB9CiAgfQogIHJldHVybiBjb3VudGVyOyAvL3JldHVybnMgImFhIgp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let counter = "";
  while (counter != "aaaaa") {
    counter = `${counter}a`;
    if (counter == "aa") {
      break;
    }
  }
  return counter; //returns "aa"
});

```


## while with early return
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IGNvdW50ZXIgPSAiIjsKICB3aGlsZSAoY291bnRlciAhPSAiYWFhYWEiKSB7CiAgICBjb3VudGVyID0gYCR7Y291bnRlcn1hYDsKICAgIGlmIChjb3VudGVyID09ICJhYSIpIHsKICAgICAgcmV0dXJuIGNvdW50ZXI7IC8vcmV0dXJucyAiYWEiCiAgICB9CiAgfQogIHRocm93IG5ldyBFcnJvcigidGhpcyBzaG91bGQgbm90IGhhcHBlbiIpOwp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let counter = "";
  while (counter != "aaaaa") {
    counter = `${counter}a`;
    if (counter == "aa") {
      return counter; //returns "aa"
    }
  }
  throw new Error("this should not happen");
});

```


## while with continue
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IGNvdW50ZXIgPSAiIjsKICBsZXQgcmVzdWx0ID0gIiI7CiAgd2hpbGUgKGNvdW50ZXIgIT0gImFhYWFhIikgewogICAgY291bnRlciA9IGAke2NvdW50ZXJ9YWA7CiAgICBpZiAoY291bnRlciA9PSAiYWEiKSB7CiAgICAgIGNvbnRpbnVlOwogICAgfQogICAgcmVzdWx0ID0gYCR7cmVzdWx0fWJgOwogIH0KICByZXR1cm4gcmVzdWx0OyAvL3JldHVybnMgImJiYmIiCn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let counter = "";
  let result = "";
  while (counter != "aaaaa") {
    counter = `${counter}a`;
    if (counter == "aa") {
      continue;
    }
    result = `${result}b`;
  }
  return result; //returns "bbbb"
});

```


