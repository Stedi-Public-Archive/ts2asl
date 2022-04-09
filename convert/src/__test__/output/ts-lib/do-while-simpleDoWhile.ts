import * as asl from "@ts2asl/asl-lib"

export const simpleDoWhile = asl.deploy.asStateMachine(async () =>{
    let counter = asl.pass({
        name: "Assign counter",
        parameters: () => "",
        comment: "counter = \"\""
    });
    asl.typescriptDoWhile({
        name: "Do While (counter != \"aaaaa\")",
        condition: () => counter != "aaaaa",
        block: async () => {
            counter = asl.states.format("{}a", counter);
        }
    })
    return counter; //returns "aaaaa"
});

export const doWhileWithBreak = asl.deploy.asStateMachine(async () => {
  let counter = ""
  do {
    counter = `${counter}a`;
    if (counter == "aa") {
      break;
    }
  } while (counter != "aaaaa");
  return counter; //returns "aa"
});

export const doWhileWithEarlyReturn = asl.deploy.asStateMachine(async () => {
  let counter = ""
  do {
    counter = `${counter}a`;
    if (counter == "aa") {
      return counter; //returns "aa"
    }
  } while (counter != "aaaaa")
  throw new Error("this should not happen");
});


export const doWhileWithContinue = asl.deploy.asStateMachine(async () => {
  let counter = ""
  let result = "";
  do {
    counter = `${counter}a`;
    if (counter == "aa") {
      continue;
    }
    result = `${result}b`;
  } while (counter != "aaaaa")
  return result; //returns "bbbb"
});
