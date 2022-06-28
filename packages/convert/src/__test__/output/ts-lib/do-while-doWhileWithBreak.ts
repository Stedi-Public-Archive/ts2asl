import * as asl from "@ts2asl/asl-lib"

export const simpleDoWhile = asl.deploy.asStateMachine(async () => {
  let counter = ""
  do {
    counter = `${counter}a`;
  }
  while (counter != "aaaaa")
  return counter; //returns "aaaaa"
});

export const simpleDoAlwaysFalse = asl.deploy.asStateMachine(async () => {
  let counter = ""
  do {
    counter = `${counter}a`;
  }
  while (false)
  return counter; //returns "1"
});

export const doWhileWithBreak = asl.deploy.asStateMachine(async () =>{
    let counter = "";
    asl.typescriptDoWhile({
        name: "Do While (counter != \"aaaaa\")",
        condition: () => counter != "aaaaa",
        block: async () => {
            counter = asl.states.format("{}a", counter);
            asl.typescriptIf({
                name: "If (counter == \"aa\")",
                condition: () => counter == "aa",
                then: async () => {
                    break;
                },
                comment: "if (counter == \"aa\") {\n      break;\n    }"
            })
        },
        comment: "do {\n    counter = `${counter}a`;\n    if (counter == \"aa\") {\n      break;\n    }\n  } while (counter != \"aaaaa\");"
    })
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
