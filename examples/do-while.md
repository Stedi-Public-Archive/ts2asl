
## simple do while
This example demonstrates a simple `do-while` statement. This function will return `aaaaa`.

*note: as incrementing/decrementing numbers is not supported in ASL the examples uses a string (and string concatenation) as a counter.* 

[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IGNvdW50ZXIgPSAiIjsKICBkbyB7CiAgICBjb3VudGVyID0gYCR7Y291bnRlcn1hYDsKICB9IHdoaWxlIChjb3VudGVyICE9ICJhYWFhYSIpOwogIHJldHVybiBjb3VudGVyOyAvL3JldHVybnMgImFhYWFhIgp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let counter = "";
  do {
    counter = `${counter}a`;
  } while (counter != "aaaaa");
  return counter; //returns "aaaaa"
});

```


## simple do always false
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IGNvdW50ZXIgPSAiIjsKICBkbyB7CiAgICBjb3VudGVyID0gYCR7Y291bnRlcn1hYDsKICB9IHdoaWxlIChmYWxzZSk7CiAgcmV0dXJuIGNvdW50ZXI7IC8vcmV0dXJucyAiMSIKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let counter = "";
  do {
    counter = `${counter}a`;
  } while (false);
  return counter; //returns "1"
});

```


## do while with break
This example demonstrates a `do-while` statement with a `break` statement. The do-while statement will break once the container equals `aa`, this function will return `aa`.

*note: as incrementing/decrementing numbers is not supported in ASL the examples uses a string (and string concatenation) as a counter.* 

[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IGNvdW50ZXIgPSAiIjsKICBkbyB7CiAgICBjb3VudGVyID0gYCR7Y291bnRlcn1hYDsKICAgIGlmIChjb3VudGVyID09ICJhYSIpIHsKICAgICAgYnJlYWs7CiAgICB9CiAgfSB3aGlsZSAoY291bnRlciAhPSAiYWFhYWEiKTsKICByZXR1cm4gY291bnRlcjsgLy9yZXR1cm5zICJhYSIKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let counter = "";
  do {
    counter = `${counter}a`;
    if (counter == "aa") {
      break;
    }
  } while (counter != "aaaaa");
  return counter; //returns "aa"
});

```


## do while with early return
This example demonstrates a `do-while` statement with an early `return`. The function will return from within the do-while statement, this function will return `aa`.

*note: as incrementing/decrementing numbers is not supported in ASL the examples uses a string (and string concatenation) as a counter.* 

[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IGNvdW50ZXIgPSAiIjsKICBkbyB7CiAgICBjb3VudGVyID0gYCR7Y291bnRlcn1hYDsKICAgIGlmIChjb3VudGVyID09ICJhYSIpIHsKICAgICAgcmV0dXJuIGNvdW50ZXI7IC8vcmV0dXJucyAiYWEiCiAgICB9CiAgfSB3aGlsZSAoY291bnRlciAhPSAiYWFhYWEiKTsKICB0aHJvdyBuZXcgRXJyb3IoInRoaXMgc2hvdWxkIG5vdCBoYXBwZW4iKTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let counter = "";
  do {
    counter = `${counter}a`;
    if (counter == "aa") {
      return counter; //returns "aa"
    }
  } while (counter != "aaaaa");
  throw new Error("this should not happen");
});

```


## do while with continue
This example demonstrates a `do-while` statement with a `continue` statement. The function will not add `b` to result in one of the iterations, this function will therefore return `bbbb` (4 x `b` instead of 5 x `b`).

*note: as incrementing/decrementing numbers is not supported in ASL the examples uses a string (and string concatenation) as a counter.* 

[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IGNvdW50ZXIgPSAiIjsKICBsZXQgcmVzdWx0ID0gIiI7CiAgZG8gewogICAgY291bnRlciA9IGAke2NvdW50ZXJ9YWA7CiAgICBpZiAoY291bnRlciA9PSAiYWEiKSB7CiAgICAgIGNvbnRpbnVlOwogICAgfQogICAgcmVzdWx0ID0gYCR7cmVzdWx0fWJgOwogIH0gd2hpbGUgKGNvdW50ZXIgIT0gImFhYWFhIik7CiAgcmV0dXJuIHJlc3VsdDsgLy9yZXR1cm5zICJiYmJiIgp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let counter = "";
  let result = "";
  do {
    counter = `${counter}a`;
    if (counter == "aa") {
      continue;
    }
    result = `${result}b`;
  } while (counter != "aaaaa");
  return result; //returns "bbbb"
});

```


