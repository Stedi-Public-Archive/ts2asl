
## simple foreach
This example demonstrates a simple `for-each` (or: `for ... of`) statement. It converts an array of numbers to a single string. in order to ensure there is no leading `,` a local variable is used to treat the first element in the array differently. This function returns `1, 2, 3.`.
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBhcnIgPSBbMSwgMiwgM107CiAgbGV0IHJlc3VsdCA9ICIiOwogIGxldCBmaXJzdCA9IHRydWU7CgogIC8vIHVzZSBhIGZvciBsb29wIHRvIGFwcGVuZCBhbGwgbnVtYmVycyB0byBhIHNpbmdsZSBzdHJpbmcKICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7CiAgICBpZiAoZmlyc3QpIHsgLy9maXJzdCBlbGVtZW50IHNob3VsZCBub3QgYmUgcHJlZml4ZWQgd2l0aCBhIGNvbW1hCiAgICAgIHJlc3VsdCA9IGFzbC5jb252ZXJ0Lm51bWJlclRvU3RyaW5nKGl0ZW0pOwogICAgICBmaXJzdCA9IGZhbHNlOwogICAgfSBlbHNlIHsKICAgICAgcmVzdWx0ID0gYCR7cmVzdWx0fSwgJHtpdGVtfWA7CiAgICB9CiAgfQogIHJldHVybiByZXN1bHQ7Cn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const arr = [1, 2, 3];
  let result = "";
  let first = true;

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    if (first) { //first element should not be prefixed with a comma
      result = asl.convert.numberToString(item);
      first = false;
    } else {
      result = `${result}, ${item}`;
    }
  }
  return result;
});
```


## foreach with break
This example demonstrates a `break` statement within a `for-each` statement. The break statements exists the loop after number `2` was added to the list. this function returns  `1, 2`.
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBhcnIgPSBbMSwgMiwgM107CiAgbGV0IHJlc3VsdCA9ICIiOwogIGxldCBmaXJzdCA9IHRydWU7CgogIC8vIHVzZSBhIGZvciBsb29wIHRvIGFwcGVuZCBhbGwgbnVtYmVycyB0byBhIHNpbmdsZSBzdHJpbmcKICBmb3IgKGNvbnN0IGl0ZW0gb2YgYXJyKSB7CiAgICBpZiAoZmlyc3QpIHsgLy9maXJzdCBlbGVtZW50IHNob3VsZCBub3QgYmUgcHJlZml4ZWQgd2l0aCBhIGNvbW1hCiAgICAgIHJlc3VsdCA9IGFzbC5jb252ZXJ0Lm51bWJlclRvU3RyaW5nKGl0ZW0pOwogICAgICBmaXJzdCA9IGZhbHNlOwogICAgfSBlbHNlIHsKICAgICAgcmVzdWx0ID0gYCR7cmVzdWx0fSwgJHtpdGVtfWA7CiAgICB9CiAgICBpZiAoaXRlbSA9PT0gMikgewogICAgICBicmVhazsgLy8gdGhpcyBicmVhayB3aWxsIHByZXZlbnQgMyBmcm9tIGJlaW5nIGFkZGVkIHRvIHRoZSBzdHJpbmcKICAgIH0KICB9CiAgcmV0dXJuIHJlc3VsdDsKfSk7)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const arr = [1, 2, 3];
  let result = "";
  let first = true;

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    if (first) { //first element should not be prefixed with a comma
      result = asl.convert.numberToString(item);
      first = false;
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBhcnIgPSBbMSwgMiwgM107CiAgbGV0IHJlc3VsdCA9ICIiOwogIGxldCBmaXJzdCA9IHRydWU7CiAgLy8gdXNlIGEgZm9yIGxvb3AgdG8gYXBwZW5kIGFsbCBudW1iZXJzIHRvIGEgc2luZ2xlIHN0cmluZwogIGZvciAoY29uc3QgaXRlbSBvZiBhcnIpIHsKICAgIGlmIChpdGVtID09PSAyKSB7CiAgICAgIGNvbnRpbnVlOyAvLyB0aGlzIGJyZWFrIHdpbGwgcHJldmVudCAyIGZyb20gYmVpbmcgYWRkZWQgdG8gdGhlIHN0cmluZwogICAgfQogICAgaWYgKGZpcnN0KSB7IC8vZmlyc3QgZWxlbWVudCBzaG91bGQgbm90IGJlIHByZWZpeGVkIHdpdGggYSBjb21tYQogICAgICByZXN1bHQgPSBhc2wuY29udmVydC5udW1iZXJUb1N0cmluZyhpdGVtKTsKICAgICAgZmlyc3QgPSBmYWxzZTsKICAgIH0gZWxzZSB7CiAgICAgIHJlc3VsdCA9IGAke3Jlc3VsdH0sICR7aXRlbX1gOwogICAgfQogIH0KICByZXR1cm4gcmVzdWx0OyAvL3JldHVybnMgIjEsIDMiCn0pOw==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const arr = [1, 2, 3];
  let result = "";
  let first = true;
  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    if (item === 2) {
      continue; // this break will prevent 2 from being added to the string
    }
    if (first) { //first element should not be prefixed with a comma
      result = asl.convert.numberToString(item);
      first = false;
    } else {
      result = `${result}, ${item}`;
    }
  }
  return result; //returns "1, 3"
});
```


## foreach early return
This example demonstrates a `return` statement within a `for-each` statement. The `return` prevents the loop from processing, and the function returns `found 2!`.
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBhcnIgPSBbMSwgMiwgM107CiAgZm9yIChjb25zdCBpdGVtIG9mIGFycikgewogICAgaWYgKGl0ZW0gPT09IDIpIHsKICAgICAgcmV0dXJuIGBmb3VuZCAke2l0ZW19IWA7IC8vcmV0dXJucyAiZm91bmQgMiEiCiAgICB9CiAgfQogIHRocm93IG5ldyBFcnJvcigic2hvdWxkIG5vdCBnZXQgaGVyZSIpOwp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
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
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBudW1iZXJzID0gWzAsIDEsIDIsIDNdOwogIGNvbnN0IGxldHRlcnMgPSBbImEiLCAiYiIsICJjIiwgImQiXTsKICBjb25zdCBnbG9iYWwgPSAicHJlZml4IjsKICBjb25zdCBvdXRlciA9IHsgbWlkZGxlOiB7IGlubmVyOiAzIH0gfQogIGZvciAoY29uc3QgbnVtYmVyIG9mIG51bWJlcnMpIHsKICAgIGZvciAoY29uc3QgbGV0dGVyIG9mIGxldHRlcnMpIHsKICAgICAgY29uc3QgY29tYmluZWQgPSB7IG51bWJlciwgbGV0dGVyLCBnbG9iYWwsIGlubmVyOiBvdXRlci5taWRkbGUuaW5uZXIgfTsKICAgICAgY29uc29sZS5sb2coY29tYmluZWQpOwogICAgfTsKICB9Owp9KTs=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const numbers = [0, 1, 2, 3];
  const letters = ["a", "b", "c", "d"];
  const global = "prefix";
  const outer = { middle: { inner: 3 } }
  for (const number of numbers) {
    for (const letter of letters) {
      const combined = { number, letter, global, inner: outer.middle.inner };
      console.log(combined);
    };
  };
});
```


