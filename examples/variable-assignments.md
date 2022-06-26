
## literals
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHN0ciA9ICJzdHJpbmciOwogIGxldCBudW0gPSA0MjsKICBsZXQgYm9vbCA9IHRydWUgfHwgZmFsc2U7CiAgbGV0IG9iamVjdCA9IHsgc3RyLCBudW0sIGJvb2wgfTsKICBsZXQgb2JqZWN0MiA9IHsgc3RyOiAic3RyaW5nIiwgbnVtOiAzMywgaW5uZXI6IG9iamVjdCB9OwogIGxldCBhcnJheU9mTnVtYmVycyA9IFsxLCAyLCAzLCA0LCA1XTsKICBsZXQgYXJyYXlPZk9iamVjdHMgPSBbCiAgICB7IGxlZnQ6IDEsIHJpZ2h0OiAyIH0sCiAgICB7IGxlZnQ6IDMsIHJpZ2h0OiA0IH0sCiAgICB7IGxlZnQ6IDUsIHJpZ2h0OiA2IH0sCiAgXTsKICByZXR1cm4geyBhcnJheU9mTnVtYmVycywgYXJyYXlPZk9iamVjdHMsIG9iamVjdDIgfTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let str = "string";
  let num = 42;
  let bool = true || false;
  let object = { str, num, bool };
  let object2 = { str: "string", num: 33, inner: object };
  let arrayOfNumbers = [1, 2, 3, 4, 5];
  let arrayOfObjects = [
    { left: 1, right: 2 },
    { left: 3, right: 4 },
    { left: 5, right: 6 },
  ];
  return { arrayOfNumbers, arrayOfObjects, object2 };
});

```


## type of expressions
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHN0ciA9IHR5cGVvZiAiYWJjZGVmIjsKICBsZXQgbnVtID0gdHlwZW9mIDEyMzsKICBsZXQgYm9vbCA9IHR5cGVvZiB0cnVlOwogIGxldCBvYmplY3QgPSB0eXBlb2YgeyBzdHIsIG51bSwgYm9vbCB9OwogIGxldCB1bmRlZiA9IHR5cGVvZiB1bmRlZmluZWQ7CiAgbGV0IF9udWxsID0gdHlwZW9mIG51bGw7CgogIGlmICgKICAgIHN0ciA9PT0gInN0cmluZyIgJiYKICAgIG51bSA9PT0gIm51bWJlciIgJiYKICAgIGJvb2wgPT09ICJib29sZWFuIiAmJgogICAgb2JqZWN0ID09PSAib2JqZWN0IiAmJgogICAgdW5kZWYgPT09ICJ1bmRlZmluZWQiICYmCiAgICBfbnVsbCA9PT0gInVuZGVmaW5lZCIKICApIHsKICAgIHJldHVybiAib2siOwogIH0KCiAgcmV0dXJuICJub3Qgb2siOwp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let str = typeof "abcdef";
  let num = typeof 123;
  let bool = typeof true;
  let object = typeof { str, num, bool };
  let undef = typeof undefined;
  let _null = typeof null;

  if (
    str === "string" &&
    num === "number" &&
    bool === "boolean" &&
    object === "object" &&
    undef === "undefined" &&
    _null === "undefined"
  ) {
    return "ok";
  }

  return "not ok";
});

```


## array with identifiers
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHN0ciA9ICJzdHJpbmciOwogIGxldCBudW0gPSA0MjsKICBsZXQgYm9vbCA9IHRydWUgfHwgZmFsc2U7CiAgbGV0IG9iamVjdCA9IHsgc3RyLCBudW0sIGJvb2wgfTsKICBsZXQgYXJyYXkgPSBbc3RyLCBudW0sIGJvb2wsIG9iamVjdF07CiAgcmV0dXJuIGFycmF5Owp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let str = "string";
  let num = 42;
  let bool = true || false;
  let object = { str, num, bool };
  let array = [str, num, bool, object];
  return array;
});

```


## unassigned variable
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IGFycjogW107CiAgbGV0IHR3bzogc3RyaW5nOwogIHJldHVybiAib2siOwp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let arr: [];
  let two: string;
  return "ok";
});

```


## assignment to undefined
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IF91bmRlZmluZWQgPSB1bmRlZmluZWQ7CiAgcmV0dXJuICJvayI7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let _undefined = undefined;
  return "ok";
});

```


## assignment to null
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IF9udWxsID0gbnVsbDsKICByZXR1cm4gIm9rIjsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let _null = null;
  return "ok";
});

```


## array indexer
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IGFyciA9IFsxLCAyLCAzLCA0LCA1XTsKICBsZXQgdHdvID0gYXJyWzFdOwogIGFyclsxXSA9IGFyclszXTsKICBhcnJbM10gPSB0d287CiAgcmV0dXJuIGFycjsgLy9yZXR1cm5zIFsxLCA0LCAzLCAyLCA1XQp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let arr = [1, 2, 3, 4, 5];
  let two = arr[1];
  arr[1] = arr[3];
  arr[3] = two;
  return arr; //returns [1, 4, 3, 2, 5]
});

```


## functions
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IHN0ciA9IGFzbC5zdGF0ZXMuZm9ybWF0KCJoZWxsbyB7fSIsICJ3b3JsZCIpOwogIGxldCBudW0gPSBhc2wuc3RhdGVzLmZvcm1hdCgiYW5zd2VyIGlzIHt9IiwgNDIpOwogIGxldCBjb21iaW5lZCA9IGFzbC5zdGF0ZXMuZm9ybWF0KCIxOiB7fVxuIDI6IHt9Iiwgc3RyLCBudW0pOwogIGxldCBhcnIgPSBhc2wuc3RhdGVzLmFycmF5KHN0ciwgbnVtLCBjb21iaW5lZCk7CiAgcmV0dXJuIGFycjsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let str = asl.states.format("hello {}", "world");
  let num = asl.states.format("answer is {}", 42);
  let combined = asl.states.format("1: {}\n 2: {}", str, num);
  let arr = asl.states.array(str, num, combined);
  return arr;
});

```


