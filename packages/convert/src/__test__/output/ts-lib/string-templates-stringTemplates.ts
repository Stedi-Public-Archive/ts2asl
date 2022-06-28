import * as asl from "@ts2asl/asl-lib"

export const stringTemplates = asl.deploy.asStateMachine(async () =>{
    let variable = "some var";
    return {
        hello: asl.states.format("hello {}", variable),
    };
});

export const escapedCharacters = asl.deploy.asStateMachine(async () => {
  let variable = "some var";

  return {
    hello: `hello ${variable}`,
    singleQuote: `hello ' + ${variable}`,
    curlyBrace: `hello }{} + ${variable}`,
    backSlash: `hello \\ + ${variable}`,
    emoji: `hello 🙂 + ${variable}`,
  };
});

