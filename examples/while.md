
## simple while
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgY291bnRlciA9ICIiCiAgd2hpbGUgKGNvdW50ZXIgIT0gImFhYWFhIikgewogICAgY291bnRlciA9IGAke2NvdW50ZXJ9YWA7CiAgfQogIHJldHVybiBjb3VudGVyOzsgLy9yZXR1cm5zICJhYWFhYSIKfSk7Cgo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let counter = ""
  while (counter != "aaaaa") {
    counter = `${counter}a`;
  }
  return counter;; //returns "aaaaa"
});


```


## while with break
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgY291bnRlciA9ICIiCiAgd2hpbGUgKGNvdW50ZXIgIT0gImFhYWFhIikgewogICAgY291bnRlciA9IGAke2NvdW50ZXJ9YWA7CiAgICBpZiAoY291bnRlciA9PSAiYWEiKSB7CiAgICAgIGJyZWFrOwogICAgfQogIH0KICByZXR1cm4gY291bnRlcjs7IC8vcmV0dXJucyAiYWEiCn0pOwoK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let counter = ""
  while (counter != "aaaaa") {
    counter = `${counter}a`;
    if (counter == "aa") {
      break;
    }
  }
  return counter;; //returns "aa"
});


```


## while with early return
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgY291bnRlciA9ICIiCiAgd2hpbGUgKGNvdW50ZXIgIT0gImFhYWFhIikgewogICAgY291bnRlciA9IGAke2NvdW50ZXJ9YWA7CiAgICBpZiAoY291bnRlciA9PSAiYWEiKSB7CiAgICAgIHJldHVybiBjb3VudGVyOyAvL3JldHVybnMgImFhIgogICAgfQogIH0KICB0aHJvdyBuZXcgRXJyb3IoInRoaXMgc2hvdWxkIG5vdCBoYXBwZW4iKTsKfSk7Cgo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let counter = ""
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgY291bnRlciA9ICIiCiAgbGV0IHJlc3VsdCA9ICIiOwogIHdoaWxlIChjb3VudGVyICE9ICJhYWFhYSIpIHsKICAgIGNvdW50ZXIgPSBgJHtjb3VudGVyfWFgOwogICAgaWYgKGNvdW50ZXIgPT0gImFhIikgewogICAgICBjb250aW51ZTsKICAgIH0KICAgIHJlc3VsdCA9IGAke3Jlc3VsdH1iYDsKICB9CiAgcmV0dXJuIHJlc3VsdDsgLy9yZXR1cm5zICJiYmJiIgp9KTsKCg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let counter = ""
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


