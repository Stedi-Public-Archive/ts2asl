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


export const foreachEarlyReturn = asl.deploy.asStateMachine(async () =>{
    const arr = [1, 2, 3];
    asl.typescriptForeach({
        name: "For item Of arr",
        items: () => arr,
        iterator: item => {
            asl.typescriptIf({
                name: "If (item === 2)",
                condition: () => item === 2,
                then: async () => {
                    return asl.states.format("found {}!", item); //returns "found 2!"
                },
                comment: "if (item === 2) {\n      return `found ${item}!`; //returns \"found 2!\"\n    }"
            })
        },
        comment: "for (const item of arr) {\n    if (item === 2) {\n      return `found ${item}!`; //returns \"found 2!\"\n    }\n  }"
    })
    asl.fail({
        name: "Throw Error",
        error: "Error",
        cause: "should not get here",
        comment: "throw new Error(\"should not get here\");"
    })
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

export const emptyForeach = asl.deploy.asStateMachine(async () => {
  const numbers = [0, 1, 2, 3];
  for (const _number of numbers) {

  };
  return "ok"
});