
## serialize array
This example shows how to serialize and deserialize an array.
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgbXlBcnJheSA9IGFzbC5zdGF0ZXMuYXJyYXkoMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTApIGFzIG51bWJlcltdOwogIGxldCBteVNlcmlhbGl6ZWRBcnJheSA9IGFzbC5zdGF0ZXMuanNvblRvU3RyaW5nKG15QXJyYXkpOwogIG15QXJyYXkgPSBhc2wuc3RhdGVzLnN0cmluZ1RvSnNvbihteVNlcmlhbGl6ZWRBcnJheSkgYXMgbnVtYmVyW107CiAgcmV0dXJuIG15QXJyYXk7Cn0pOwoK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) as number[];
  let mySerializedArray = asl.states.jsonToString(myArray);
  myArray = asl.states.stringToJson(mySerializedArray) as number[];
  return myArray;
});


```


## map array
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBsZXQgbXlBcnJheSA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF0KICByZXR1cm4gbXlBcnJheS5tYXAoeCA9PiB7CiAgICBpZiAoeCA9PT0gMSB8fCB4ID09PSAzIHx8IHggPT09IDUgfHwgeCA9PT0gNyB8fCB4ID09IDkpIHsKICAgICAgcmV0dXJuIHsKICAgICAgICBhZ2U6IHgsCiAgICAgICAgc3BlY2llczogImRvZyIsCiAgICAgIH0KICAgIH0gZWxzZSB7CiAgICAgIHJldHVybiB7CiAgICAgICAgYWdlOiB4LAogICAgICAgIHNwZWNpZXM6ICJjYXQiLAogICAgICB9CiAgICB9CiAgfSk7Cn0pOwoK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  return myArray.map(x => {
    if (x === 1 || x === 3 || x === 5 || x === 7 || x == 9) {
      return {
        age: x,
        species: "dog",
      }
    } else {
      return {
        age: x,
        species: "cat",
      }
    }
  });
});


```


## map array simple
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBtYXBwZWRBcnJheSA9IFt7IGFnZTogMSwgc3BlY2llczogImRvZyIgfSwgeyBhZ2U6IDIsIHNwZWNpZXM6ICJjYXQiIH0sIHsgYWdlOiAzLCBzcGVjaWVzOiAiZG9nIiB9LCB7IGFnZTogNCwgc3BlY2llczogImNhdCIgfSwgeyBhZ2U6IDExLCBzcGVjaWVzOiAiZG9nIiB9LCB7IGFnZTogMTIsIHNwZWNpZXM6ICJjYXIiIH0sIHsgYWdlOiAxMywgc3BlY2llczogImRvZyIgfSwgeyBhZ2U6IDE0LCBzcGVjaWVzOiAiY2F0IiB9XQogIGNvbnN0IGFnZXMgPSBtYXBwZWRBcnJheS5tYXAoeCA9PiB4LmFnZSk7CiAgY29uc3Qgc3BlY2llcyA9IG1hcHBlZEFycmF5Lm1hcCh4ID0+IHguc3BlY2llcyk7CiAgcmV0dXJuIHsKICAgIGFnZXMsIHNwZWNpZXMKICB9Cn0pOwoK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const mappedArray = [{ age: 1, species: "dog" }, { age: 2, species: "cat" }, { age: 3, species: "dog" }, { age: 4, species: "cat" }, { age: 11, species: "dog" }, { age: 12, species: "car" }, { age: 13, species: "dog" }, { age: 14, species: "cat" }]
  const ages = mappedArray.map(x => x.age);
  const species = mappedArray.map(x => x.species);
  return {
    ages, species
  }
});


```


## map array nested property access
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBzb3VyY2UgPSBbeyBvYmo6IHsgbnVtOiAyMywgc3RyOiAic3RyIiB9IH1dCiAgY29uc3QgbnVtID0gc291cmNlLm1hcCh4ID0+IHgub2JqLm51bSk7CiAgY29uc3Qgc3RyID0gc291cmNlLm1hcCh4ID0+IHgub2JqLnN0cik7CiAgcmV0dXJuIHsKICAgIG51bSwgc3RyCiAgfQp9KTsKCg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const source = [{ obj: { num: 23, str: "str" } }]
  const num = source.map(x => x.obj.num);
  const str = source.map(x => x.obj.str);
  return {
    num, str
  }
});


```


## filter array
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBtYXBwZWRBcnJheSA9IFt7IGFnZTogMSwgc3BlY2llczogImRvZyIgfSwgeyBhZ2U6IDIsIHNwZWNpZXM6ICJjYXQiIH0sIHsgYWdlOiAzLCBzcGVjaWVzOiAiZG9nIiB9LCB7IGFnZTogNCwgc3BlY2llczogImNhdCIgfSwgeyBhZ2U6IDExLCBzcGVjaWVzOiAiZG9nIiB9LCB7IGFnZTogMTIsIHNwZWNpZXM6ICJjYXIiIH0sIHsgYWdlOiAxMywgc3BlY2llczogImRvZyIgfSwgeyBhZ2U6IDE0LCBzcGVjaWVzOiAiY2F0IiB9XQogIGNvbnN0IGZpbHRlckFycmF5ID0gewogICAgY2F0czogewogICAgICB5b3VuZzogbWFwcGVkQXJyYXkuZmlsdGVyKHggPT4geC5zcGVjaWVzID09PSAiY2F0IiAmJiB4LmFnZSA8IDUpLAogICAgICBvbGQ6IG1hcHBlZEFycmF5LmZpbHRlcih4ID0+IHguc3BlY2llcyA9PT0gImNhdCIgJiYgeC5hZ2UgPj0gNSksCiAgICB9LAogICAgZG9nczogewogICAgICB5b3VuZzogbWFwcGVkQXJyYXkuZmlsdGVyKHggPT4geC5zcGVjaWVzID09PSAiZG9nIiAmJiB4LmFnZSA8IDUpLAogICAgICBvbGQ6IG1hcHBlZEFycmF5LmZpbHRlcih4ID0+IHguc3BlY2llcyA9PT0gImRvZyIgJiYgeC5hZ2UgPj0gNSksCiAgICB9CiAgfQogIHJldHVybiBmaWx0ZXJBcnJheTsKfSk7Cgo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const mappedArray = [{ age: 1, species: "dog" }, { age: 2, species: "cat" }, { age: 3, species: "dog" }, { age: 4, species: "cat" }, { age: 11, species: "dog" }, { age: 12, species: "car" }, { age: 13, species: "dog" }, { age: 14, species: "cat" }]
  const filterArray = {
    cats: {
      young: mappedArray.filter(x => x.species === "cat" && x.age < 5),
      old: mappedArray.filter(x => x.species === "cat" && x.age >= 5),
    },
    dogs: {
      young: mappedArray.filter(x => x.species === "dog" && x.age < 5),
      old: mappedArray.filter(x => x.species === "dog" && x.age >= 5),
    }
  }
  return filterArray;
});


```


## json path expressions
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiAKIHsKICBjb25zdCBmaWx0ZXJBcnJheSA9IHsKICAgIGNhdHM6IHsKICAgICAgeW91bmc6IFt7IGFnZTogMiwgc3BlY2llczogImNhdCIgfSwgeyBhZ2U6IDQsIHNwZWNpZXM6ICJjYXQiIH1dLAogICAgICBvbGQ6IFt7IGFnZTogMTIsIHNwZWNpZXM6ICJjYXQiIH0sIHsgYWdlOiAxNCwgc3BlY2llczogImNhdCIgfV0sCiAgICB9LAogICAgZG9nczogewogICAgICB5b3VuZzogW3sgYWdlOiAxLCBzcGVjaWVzOiAiZG9nIiB9LCB7IGFnZTogMywgc3BlY2llczogImRvZyIgfV0sCiAgICAgIG9sZDogW3sgYWdlOiAxMSwgc3BlY2llczogImRvZyIgfSwgeyBhZ2U6IDEzLCBzcGVjaWVzOiAiZG9nIiB9XQogICAgfQogIH0KICAvL0FkZCBhcnJheSBvZiB1bmlxdWUgYWdlcyB1c2luZyBKU09OUGF0aCBFeHByZXNzaW9uCiAgbGV0IGFnZXMgPSBhc2wuanNvblBhdGhFeHByZXNzaW9uKGZpbHRlckFycmF5LCAiLi5hZ2UiKTsKICBsZXQgZmxhdHRlbmVkUGV0cyA9IGFzbC5qc29uUGF0aEV4cHJlc3Npb24oZmlsdGVyQXJyYXksICJbKl1bKl1bKl0iKQogIGxldCBzbGljZWRBcnIgPSBhc2wuanNvblBhdGhTbGljZShmaWx0ZXJBcnJheS5jYXRzLnlvdW5nLCAxLCAxKQoKICByZXR1cm4gewogICAgYWdlcywKICAgIGZsYXR0ZW5lZFBldHMsCiAgICBzbGljZWRBcnIKICB9Cn0pOwoK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => 
 {
  const filterArray = {
    cats: {
      young: [{ age: 2, species: "cat" }, { age: 4, species: "cat" }],
      old: [{ age: 12, species: "cat" }, { age: 14, species: "cat" }],
    },
    dogs: {
      young: [{ age: 1, species: "dog" }, { age: 3, species: "dog" }],
      old: [{ age: 11, species: "dog" }, { age: 13, species: "dog" }]
    }
  }
  //Add array of unique ages using JSONPath Expression
  let ages = asl.jsonPathExpression(filterArray, "..age");
  let flattenedPets = asl.jsonPathExpression(filterArray, "[*][*][*]")
  let slicedArr = asl.jsonPathSlice(filterArray.cats.young, 1, 1)

  return {
    ages,
    flattenedPets,
    slicedArr
  }
});


```


