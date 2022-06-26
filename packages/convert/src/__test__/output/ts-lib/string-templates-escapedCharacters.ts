import * as asl from "@ts2asl/asl-lib"

export const stringTemplates = asl.deploy.asStateMachine(async () => {
  let variable = "some var";

  return {
    hello: `hello ${variable}`,
  };
});

export const escapedCharacters = asl.deploy.asStateMachine(async () =>{
    let variable = "some var";
    return {
        hello: asl.states.format("hello {}", variable),
        singleQuote: asl.states.format("hello \\' + {}", variable),
        curlyBrace: asl.states.format("hello \\}\\{\\} + {}", variable),
        backSlash: asl.states.format("hello \\\\ + {}", variable),
        emoji: asl.states.format("hello \uD83D\uDE42 + {}", variable),
    };
});

