
## simple foreach
This example demonstrates a simple `for-each` (or: `for ... of`) statement. It converts an array of numbers to a single string. in order to ensure there is no leading `,` a local variable is used to treat the first element in the array differently. This function returns `1, 2, 3.`.
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgYXJyID0gWzEsIDIsIDNdOwogIGxldCByZXN1bHQgPSAiIjsKCiAgLy8gdXNlIGEgZm9yIGxvb3AgdG8gYXBwZW5kIGFsbCBudW1iZXJzIHRvIGEgc2luZ2xlIHN0cmluZwogIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHsKICAgIGlmIChyZXN1bHQgPT09ICIiKSB7CiAgICAgIC8vZmlyc3QgZWxlbWVudCBzaG91bGQgbm90IGJlIHByZWZpeGVkIHdpdGggYSBjb21tYQogICAgICByZXN1bHQgPSBhc2wuY29udmVydC5udW1iZXJUb1N0cmluZyhpdGVtKTsKICAgIH0gZWxzZSB7CiAgICAgIHJlc3VsdCA9IGAke3Jlc3VsdH0sICR7aXRlbX1gOwogICAgfQogIH0KICByZXR1cm4gcmVzdWx0Owp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    if (result === "") {
      //first element should not be prefixed with a comma
      result = asl.convert.numberToString(item);
    } else {
      result = `${result}, ${item}`;
    }
  }
  return result;
});

```


## foreach with break
This example demonstrates a `break` statement within a `for-each` statement. The break statements exists the loop after number `2` was added to the list. this function returns  `1, 2`.
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgYXJyID0gWzEsIDIsIDNdOwogIGxldCByZXN1bHQgPSAiIjsKCiAgLy8gdXNlIGEgZm9yIGxvb3AgdG8gYXBwZW5kIGFsbCBudW1iZXJzIHRvIGEgc2luZ2xlIHN0cmluZwogIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHsKICAgIGlmIChyZXN1bHQgPT09ICIiKSB7CiAgICAgIC8vZmlyc3QgZWxlbWVudCBzaG91bGQgbm90IGJlIHByZWZpeGVkIHdpdGggYSBjb21tYQogICAgICByZXN1bHQgPSBhc2wuY29udmVydC5udW1iZXJUb1N0cmluZyhpdGVtKTsKICAgIH0gZWxzZSB7CiAgICAgIHJlc3VsdCA9IGAke3Jlc3VsdH0sICR7aXRlbX1gOwogICAgfQogICAgaWYgKGl0ZW0gPT09IDIpIHsKICAgICAgYnJlYWs7IC8vIHRoaXMgYnJlYWsgd2lsbCBwcmV2ZW50IDMgZnJvbSBiZWluZyBhZGRlZCB0byB0aGUgc3RyaW5nCiAgICB9CiAgfQogIHJldHVybiByZXN1bHQ7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    if (result === "") {
      //first element should not be prefixed with a comma
      result = asl.convert.numberToString(item);
    } else {
      result = `${result}, ${item}`;
    }
    if (item === 2) {
      break; // this break will prevent 3 from being added to the string
    }
  }
  return result;
});

```


## foreach with continue
This example demonstrates a `continue` statement within a `for-each` statement. The `continue` statements prevents number `2` from being added to the list. this function returns  `1, 3`.
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgYXJyID0gWzEsIDIsIDNdOwogIGxldCByZXN1bHQgPSAiIjsKICAvLyB1c2UgYSBmb3IgbG9vcCB0byBhcHBlbmQgYWxsIG51bWJlcnMgdG8gYSBzaW5nbGUgc3RyaW5nCiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikgewogICAgaWYgKGl0ZW0gPT09IDIpIHsKICAgICAgY29udGludWU7IC8vIHRoaXMgYnJlYWsgd2lsbCBwcmV2ZW50IDIgZnJvbSBiZWluZyBhZGRlZCB0byB0aGUgc3RyaW5nCiAgICB9CiAgICBpZiAocmVzdWx0ID09PSAiIikgewogICAgICAvL2ZpcnN0IGVsZW1lbnQgc2hvdWxkIG5vdCBiZSBwcmVmaXhlZCB3aXRoIGEgY29tbWEKICAgICAgcmVzdWx0ID0gYXNsLmNvbnZlcnQubnVtYmVyVG9TdHJpbmcoaXRlbSk7CiAgICB9IGVsc2UgewogICAgICByZXN1bHQgPSBgJHtyZXN1bHR9LCAke2l0ZW19YDsKICAgIH0KICB9CiAgcmV0dXJuIHJlc3VsdDsgLy9yZXR1cm5zICIxLCAzIgp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";
  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    if (item === 2) {
      continue; // this break will prevent 2 from being added to the string
    }
    if (result === "") {
      //first element should not be prefixed with a comma
      result = asl.convert.numberToString(item);
    } else {
      result = `${result}, ${item}`;
    }
  }
  return result; //returns "1, 3"
});

```


## foreach early return
This example demonstrates a `return` statement within a `for-each` statement. The `return` prevents the loop from processing, and the function returns `found 2!`.
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgYXJyID0gWzEsIDIsIDNdOwogIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHsKICAgIGlmIChpdGVtID09PSAyKSB7CiAgICAgIHJldHVybiBgZm91bmQgJHtpdGVtfSFgOyAvL3JldHVybnMgImZvdW5kIDIhIgogICAgfQogIH0KICB0aHJvdyBuZXcgRXJyb3IoInNob3VsZCBub3QgZ2V0IGhlcmUiKTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  for (const item of arr) {
    if (item === 2) {
      return `found ${item}!`; //returns "found 2!"
    }
  }
  throw new Error("should not get here");
});

```


## nested foreach
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgbnVtYmVycyA9IFswLCAxLCAyLCAzXTsKICBjb25zdCBsZXR0ZXJzID0gWyJhIiwgImIiLCAiYyIsICJkIl07CiAgY29uc3QgZ2xvYmFsID0gInByZWZpeCI7CiAgY29uc3Qgb3V0ZXIgPSB7IG1pZGRsZTogeyBpbm5lcjogMyB9IH07CiAgbGV0IHJlc3VsdCA9IGBgOwogIGZvciAoY29uc3QgbnVtYmVyIG9mIG51bWJlcnMpIHsKICAgIGZvciAoY29uc3QgbGV0dGVyIG9mIGxldHRlcnMpIHsKICAgICAgY29uc3QgY29tYmluZWQgPSB7IG51bWJlciwgbGV0dGVyLCBnbG9iYWwsIGlubmVyOiBvdXRlci5taWRkbGUuaW5uZXIgfTsKICAgICAgcmVzdWx0ID0gYCR7cmVzdWx0fSwgJHthc2wuc3RhdGVzLmpzb25Ub1N0cmluZyhjb21iaW5lZCl9YDsKICAgIH0KICB9CiAgcmV0dXJuIHJlc3VsdDsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const numbers = [0, 1, 2, 3];
  const letters = ["a", "b", "c", "d"];
  const global = "prefix";
  const outer = { middle: { inner: 3 } };
  let result = ``;
  for (const number of numbers) {
    for (const letter of letters) {
      const combined = { number, letter, global, inner: outer.middle.inner };
      result = `${result}, ${asl.states.jsonToString(combined)}`;
    }
  }
  return result;
});

```


## empty foreach
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgbnVtYmVycyA9IFswLCAxLCAyLCAzXTsKICBmb3IgKGNvbnN0IF9udW1iZXIgb2YgbnVtYmVycykgewogIH0KICByZXR1cm4gIm9rIjsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const numbers = [0, 1, 2, 3];
  for (const _number of numbers) {
  }
  return "ok";
});

```


