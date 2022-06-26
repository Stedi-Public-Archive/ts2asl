import * as asl from "@ts2asl/asl-lib"

export const simpleWhile = asl.deploy.asStateMachine(async () => {
  let counter = ""
  while (counter != "aaaaa") {
    counter = `${counter}a`;
  }
  return counter;; //returns "aaaaa"
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


export const whileWithContinue = asl.deploy.asStateMachine(async () =>{
    let counter = "";
    let result = "";
    asl.typescriptWhile({
        name: "While (counter != \"aaaaa\")",
        condition: () => counter != "aaaaa",
        block: async () => {
            counter = asl.states.format("{}a", counter);
            asl.typescriptIf({
                name: "If (counter == \"aa\")",
                condition: () => counter == "aa",
                then: async () => {
                    continue;
                },
                comment: "if (counter == \"aa\") {\n      continue;\n    }"
            })
            result = asl.states.format("{}b", result);
        },
        comment: "while (counter != \"aaaaa\") {\n    counter = `${counter}a`;\n    if (counter == \"aa\") {\n      continue;\n    }\n    result = `${result}b`;\n  }"
    })
    return result; //returns "bbbb"
});
