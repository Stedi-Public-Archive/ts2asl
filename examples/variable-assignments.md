
## literals
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgc3RyID0gInN0cmluZyI7CiAgbGV0IG51bSA9IDQyOwogIGxldCBib29sID0gdHJ1ZSB8fCBmYWxzZTsKICBsZXQgb2JqZWN0ID0geyBzdHIsIG51bSwgYm9vbCB9OwogIGxldCBvYmplY3QyID0geyBzdHI6ICJzdHJpbmciLCBudW06IDMzLCBpbm5lcjogb2JqZWN0IH07CiAgbGV0IGFycmF5T2ZOdW1iZXJzID0gWzEsIDIsIDMsIDQsIDVdOwogIGxldCBhcnJheU9mT2JqZWN0cyA9IFt7IGxlZnQ6IDEsIHJpZ2h0OiAyIH0sIHsgbGVmdDogMywgcmlnaHQ6IDQgfSwgeyBsZWZ0OiA1LCByaWdodDogNiB9XTsKICByZXR1cm4geyBhcnJheU9mTnVtYmVycywgYXJyYXlPZk9iamVjdHMsIG9iamVjdDIgfTsKfSk7Cgo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let str = "string";
  let num = 42;
  let bool = true || false;
  let object = { str, num, bool };
  let object2 = { str: "string", num: 33, inner: object };
  let arrayOfNumbers = [1, 2, 3, 4, 5];
  let arrayOfObjects = [{ left: 1, right: 2 }, { left: 3, right: 4 }, { left: 5, right: 6 }];
  return { arrayOfNumbers, arrayOfObjects, object2 };
});


```


## array with identifiers
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgc3RyID0gInN0cmluZyI7CiAgbGV0IG51bSA9IDQyOwogIGxldCBib29sID0gdHJ1ZSB8fCBmYWxzZTsKICBsZXQgb2JqZWN0ID0geyBzdHIsIG51bSwgYm9vbCB9OwogIGxldCBhcnJheSA9IFtzdHIsIG51bSwgYm9vbCwgb2JqZWN0XTsKICByZXR1cm4gYXJyYXk7Cn0pOwoK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let str = "string";
  let num = 42;
  let bool = true || false;
  let object = { str, num, bool };
  let array = [str, num, bool, object];
  return array;
});


```


## unassigned variable
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgYXJyOiBbXTsKICBsZXQgdHdvOiBzdHJpbmc7CiAgcmV0dXJuIHR3bzsKfSk7Cgo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let arr: [];
  let two: string;
  return two;
});


```


## assignment to undefined
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgX3VuZGVmaW5lZCA9IHVuZGVmaW5lZDsKfSk7Cgo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let _undefined = undefined;
});


```


## assignment to null
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgX251bGwgPSBudWxsOwp9KTsKCg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let _null = null;
});


```


## array indexer
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgYXJyID0gWzEsIDIsIDMsIDQsIDVdCiAgbGV0IHR3byA9IGFyclsxXTsKICBhcnJbMV0gPSBhcnJbM107CiAgYXJyWzNdID0gdHdvOwogIHJldHVybiBhcnI7IC8vcmV0dXJucyBbMSwgNCwgMywgMiwgNV0gCn0pOwoK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let arr = [1, 2, 3, 4, 5]
  let two = arr[1];
  arr[1] = arr[3];
  arr[3] = two;
  return arr; //returns [1, 4, 3, 2, 5] 
});


```


## functions
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgc3RyID0gYXNsLnN0YXRlcy5mb3JtYXQoImhlbGxvIHt9IiwgIndvcmxkIikKICBsZXQgbnVtID0gYXNsLnN0YXRlcy5mb3JtYXQoImFuc3dlciBpcyB7fSIsIDQyKTsKICBsZXQgY29tYmluZWQgPSBhc2wuc3RhdGVzLmZvcm1hdCgiMToge31cbiAyOiB7fSIsIHN0ciwgbnVtKTsKICBsZXQgYXJyID0gYXNsLnN0YXRlcy5hcnJheShzdHIsIG51bSwgY29tYmluZWQpOwogIHJldHVybiBhcnI7Cn0pOwoK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let str = asl.states.format("hello {}", "world")
  let num = asl.states.format("answer is {}", 42);
  let combined = asl.states.format("1: {}\n 2: {}", str, num);
  let arr = asl.states.array(str, num, combined);
  return arr;
});


```


