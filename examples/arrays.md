
## serialize array
This example shows how to serialize and deserialize an array.
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IG15QXJyYXkgPSBhc2wuc3RhdGVzLmFycmF5KDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDksIDEwKSBhcyBudW1iZXJbXTsKICBsZXQgbXlTZXJpYWxpemVkQXJyYXkgPSBhc2wuc3RhdGVzLmpzb25Ub1N0cmluZyhteUFycmF5KTsKICBteUFycmF5ID0gYXNsLnN0YXRlcy5zdHJpbmdUb0pzb24obXlTZXJpYWxpemVkQXJyYXkpIGFzIG51bWJlcltdOwogIHJldHVybiBteUFycmF5Owp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let myArray = asl.states.array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) as number[];
  let mySerializedArray = asl.states.jsonToString(myArray);
  myArray = asl.states.stringToJson(mySerializedArray) as number[];
  return myArray;
});

```


## map array
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgbGV0IG15QXJyYXkgPSBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTBdOwogIHJldHVybiBteUFycmF5Lm1hcCgoeCkgPT4gewogICAgaWYgKHggPT09IDEgfHwgeCA9PT0gMyB8fCB4ID09PSA1IHx8IHggPT09IDcgfHwgeCA9PSA5KSB7CiAgICAgIHJldHVybiB7CiAgICAgICAgYWdlOiB4LAogICAgICAgIHNwZWNpZXM6ICJkb2ciLAogICAgICB9OwogICAgfSBlbHNlIHsKICAgICAgcmV0dXJuIHsKICAgICAgICBhZ2U6IHgsCiAgICAgICAgc3BlY2llczogImNhdCIsCiAgICAgIH07CiAgICB9CiAgfSk7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return myArray.map((x) => {
    if (x === 1 || x === 3 || x === 5 || x === 7 || x == 9) {
      return {
        age: x,
        species: "dog",
      };
    } else {
      return {
        age: x,
        species: "cat",
      };
    }
  });
});

```


## map array simple
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgbWFwcGVkQXJyYXkgPSBbCiAgICB7IGFnZTogMSwgc3BlY2llczogImRvZyIgfSwKICAgIHsgYWdlOiAyLCBzcGVjaWVzOiAiY2F0IiB9LAogICAgeyBhZ2U6IDMsIHNwZWNpZXM6ICJkb2ciIH0sCiAgICB7IGFnZTogNCwgc3BlY2llczogImNhdCIgfSwKICAgIHsgYWdlOiAxMSwgc3BlY2llczogImRvZyIgfSwKICAgIHsgYWdlOiAxMiwgc3BlY2llczogImNhciIgfSwKICAgIHsgYWdlOiAxMywgc3BlY2llczogImRvZyIgfSwKICAgIHsgYWdlOiAxNCwgc3BlY2llczogImNhdCIgfSwKICBdOwogIGNvbnN0IGFnZXMgPSBtYXBwZWRBcnJheS5tYXAoKHgpID0+IHguYWdlKTsKICBjb25zdCBzcGVjaWVzID0gbWFwcGVkQXJyYXkubWFwKCh4KSA9PiB4LnNwZWNpZXMpOwogIHJldHVybiB7CiAgICBhZ2VzLAogICAgc3BlY2llcywKICB9Owp9KTsK)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const mappedArray = [
    { age: 1, species: "dog" },
    { age: 2, species: "cat" },
    { age: 3, species: "dog" },
    { age: 4, species: "cat" },
    { age: 11, species: "dog" },
    { age: 12, species: "car" },
    { age: 13, species: "dog" },
    { age: 14, species: "cat" },
  ];
  const ages = mappedArray.map((x) => x.age);
  const species = mappedArray.map((x) => x.species);
  return {
    ages,
    species,
  };
});

```


## map array nested property access
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3Qgc291cmNlID0gW3sgb2JqOiB7IG51bTogMjMsIHN0cjogInN0ciIgfSB9XTsKICBjb25zdCBudW0gPSBzb3VyY2UubWFwKCh4KSA9PiB4Lm9iai5udW0pOwogIGNvbnN0IHN0ciA9IHNvdXJjZS5tYXAoKHgpID0+IHgub2JqLnN0cik7CiAgcmV0dXJuIHsKICAgIG51bTogbnVtWzBdLAogICAgc3RyOiBzdHJbMF0sCiAgfTsKfSk7Cg==)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const source = [{ obj: { num: 23, str: "str" } }];
  const num = source.map((x) => x.obj.num);
  const str = source.map((x) => x.obj.str);
  return {
    num: num[0],
    str: str[0],
  };
});

```


## filter array
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgbWFwcGVkQXJyYXkgPSBbCiAgICB7IGFnZTogMSwgc3BlY2llczogImRvZyIgfSwKICAgIHsgYWdlOiAyLCBzcGVjaWVzOiAiY2F0IiB9LAogICAgeyBhZ2U6IDMsIHNwZWNpZXM6ICJkb2ciIH0sCiAgICB7IGFnZTogNCwgc3BlY2llczogImNhdCIgfSwKICAgIHsgYWdlOiAxMSwgc3BlY2llczogImRvZyIgfSwKICAgIHsgYWdlOiAxMiwgc3BlY2llczogImNhciIgfSwKICAgIHsgYWdlOiAxMywgc3BlY2llczogImRvZyIgfSwKICAgIHsgYWdlOiAxNCwgc3BlY2llczogImNhdCIgfSwKICBdOwogIGNvbnN0IGZpbHRlckFycmF5ID0gewogICAgY2F0czogewogICAgICB5b3VuZzogbWFwcGVkQXJyYXkuZmlsdGVyKCh4KSA9PiB4LnNwZWNpZXMgPT09ICJjYXQiICYmIHguYWdlIDwgNSksCiAgICAgIG9sZDogbWFwcGVkQXJyYXkuZmlsdGVyKCh4KSA9PiB4LnNwZWNpZXMgPT09ICJjYXQiICYmIHguYWdlID49IDUpLAogICAgfSwKICAgIGRvZ3M6IHsKICAgICAgeW91bmc6IG1hcHBlZEFycmF5LmZpbHRlcigoeCkgPT4geC5zcGVjaWVzID09PSAiZG9nIiAmJiB4LmFnZSA8IDUpLAogICAgICBvbGQ6IG1hcHBlZEFycmF5LmZpbHRlcigoeCkgPT4geC5zcGVjaWVzID09PSAiZG9nIiAmJiB4LmFnZSA+PSA1KSwKICAgIH0sCiAgfTsKICByZXR1cm4gZmlsdGVyQXJyYXk7Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const mappedArray = [
    { age: 1, species: "dog" },
    { age: 2, species: "cat" },
    { age: 3, species: "dog" },
    { age: 4, species: "cat" },
    { age: 11, species: "dog" },
    { age: 12, species: "car" },
    { age: 13, species: "dog" },
    { age: 14, species: "cat" },
  ];
  const filterArray = {
    cats: {
      young: mappedArray.filter((x) => x.species === "cat" && x.age < 5),
      old: mappedArray.filter((x) => x.species === "cat" && x.age >= 5),
    },
    dogs: {
      young: mappedArray.filter((x) => x.species === "dog" && x.age < 5),
      old: mappedArray.filter((x) => x.species === "dog" && x.age >= 5),
    },
  };
  return filterArray;
});

```


## json path expressions
[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?aW1wb3J0ICogYXMgYXNsIGZyb20gIkB0czJhc2wvYXNsLWxpYiIKCmV4cG9ydCBjb25zdCBtYWluID0gYXNsLmRlcGxveS5hc1N0YXRlTWFjaGluZShhc3luYyAoKSA9PiB7CiAgY29uc3QgZmlsdGVyQXJyYXkgPSB7CiAgICBjYXRzOiB7CiAgICAgIHlvdW5nOiBbCiAgICAgICAgeyBhZ2U6IDIsIHNwZWNpZXM6ICJjYXQiIH0sCiAgICAgICAgeyBhZ2U6IDQsIHNwZWNpZXM6ICJjYXQiIH0sCiAgICAgIF0sCiAgICAgIG9sZDogWwogICAgICAgIHsgYWdlOiAxMiwgc3BlY2llczogImNhdCIgfSwKICAgICAgICB7IGFnZTogMTQsIHNwZWNpZXM6ICJjYXQiIH0sCiAgICAgIF0sCiAgICB9LAogICAgZG9nczogewogICAgICB5b3VuZzogWwogICAgICAgIHsgYWdlOiAxLCBzcGVjaWVzOiAiZG9nIiB9LAogICAgICAgIHsgYWdlOiAzLCBzcGVjaWVzOiAiZG9nIiB9LAogICAgICBdLAogICAgICBvbGQ6IFsKICAgICAgICB7IGFnZTogMTEsIHNwZWNpZXM6ICJkb2ciIH0sCiAgICAgICAgeyBhZ2U6IDEzLCBzcGVjaWVzOiAiZG9nIiB9LAogICAgICBdLAogICAgfSwKICB9OwogIC8vQWRkIGFycmF5IG9mIHVuaXF1ZSBhZ2VzIHVzaW5nIEpTT05QYXRoIEV4cHJlc3Npb24KICBsZXQgYWdlcyA9IGFzbC5qc29uUGF0aEV4cHJlc3Npb24oZmlsdGVyQXJyYXksICIuLmFnZSIpOwogIGxldCBmbGF0dGVuZWRQZXRzID0gYXNsLmpzb25QYXRoRXhwcmVzc2lvbihmaWx0ZXJBcnJheSwgIlsqXVsqXVsqXSIpOwogIGxldCBzbGljZWRBcnIgPSBhc2wuanNvblBhdGhTbGljZShmaWx0ZXJBcnJheS5jYXRzLnlvdW5nLCAxLCAxKTsKCiAgcmV0dXJuIHsKICAgIGFnZXMsCiAgICBmbGF0dGVuZWRQZXRzLAogICAgc2xpY2VkQXJyLAogIH07Cn0pOwo=)

``` typescript
export const main = asl.deploy.asStateMachine(async () => {
  const filterArray = {
    cats: {
      young: [
        { age: 2, species: "cat" },
        { age: 4, species: "cat" },
      ],
      old: [
        { age: 12, species: "cat" },
        { age: 14, species: "cat" },
      ],
    },
    dogs: {
      young: [
        { age: 1, species: "dog" },
        { age: 3, species: "dog" },
      ],
      old: [
        { age: 11, species: "dog" },
        { age: 13, species: "dog" },
      ],
    },
  };
  //Add array of unique ages using JSONPath Expression
  let ages = asl.jsonPathExpression(filterArray, "..age");
  let flattenedPets = asl.jsonPathExpression(filterArray, "[*][*][*]");
  let slicedArr = asl.jsonPathSlice(filterArray.cats.young, 1, 1);

  return {
    ages,
    flattenedPets,
    slicedArr,
  };
});

```


