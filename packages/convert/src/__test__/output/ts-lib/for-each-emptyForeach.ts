import * as asl from "@ts2asl/asl-lib"

export const simpleForeach = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    if (result === "") { //first element should not be prefixed with a comma
      result = asl.convert.numberToString(item);
    } else {
      result = `${result}, ${item}`;
    }
  }
  return result;
});

export const foreachWithBreak = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    if (result === "") { //first element should not be prefixed with a comma
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

export const foreachWithContinue = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";
  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    if (item === 2) {
      continue; // this break will prevent 2 from being added to the string
    }
    if (result === "") { //first element should not be prefixed with a comma
      result = asl.convert.numberToString(item);
    } else {
      result = `${result}, ${item}`;
    }
  }
  return result; //returns "1, 3"
});


export const foreachEarlyReturn = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  for (const item of arr) {
    if (item === 2) {
      return `found ${item}!`; //returns "found 2!"
    }
  }
  throw new Error("should not get here");
});

export const nestedForeach = asl.deploy.asStateMachine(async () => {
  const numbers = [0, 1, 2, 3];
  const letters = ["a", "b", "c", "d"];
  const global = "prefix";
  const outer = { middle: { inner: 3 } }
  let result = ``;
  for (const number of numbers) {
    for (const letter of letters) {
      const combined = { number, letter, global, inner: outer.middle.inner };
      result = `${result}, ${asl.states.jsonToString(combined)}`;
    };
  };
  return result;
});

export const emptyForeach = asl.deploy.asStateMachine(async () =>{
    const numbers = [0, 1, 2, 3];
    asl.typescriptForeach({
        name: "For _number Of numbers",
        items: () => numbers,
        iterator: _number => {
        },
        comment: "for (const _number of numbers) {\n\n  }"
    })
    ;
    return "ok";
});