import * as asl from "@ts2asl/asl-lib"

export const simpleWhile = asl.deploy.asStateMachine(async () =>{
    let counter = asl.pass({
        name: "Assign counter",
        parameters: () => "",
        comment: "counter = \"\""
    });
    asl.typescriptWhile({
        name: "While (counter != \"aaaaa\")",
        condition: () => counter != "aaaaa",
        block: async () => {
            counter = asl.states.format("{}a", counter);
        },
        comment: "while (counter != \"aaaaa\") {\n    counter = `${counter}a`;\n  }"
    })
    return counter;
    ; //returns "aaaaa"
});

export const whileWithBreak = asl.deploy.asStateMachine(async () => {
  let counter = ""
  while (counter != "aaaaa") {
    counter = `${counter}a`;
    if (counter == "aa") {
      break;
    }
  }
  return counter;; //returns "aa"
});

export const whileWithEarlyReturn = asl.deploy.asStateMachine(async () => {
  let counter = ""
  while (counter != "aaaaa") {
    counter = `${counter}a`;
    if (counter == "aa") {
      return counter; //returns "aa"
    }
  }
  throw new Error("this should not happen");
});


export const whileWithContinue = asl.deploy.asStateMachine(async () => {
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
