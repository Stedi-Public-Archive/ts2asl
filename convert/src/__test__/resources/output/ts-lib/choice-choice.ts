
import * as asl from "@ts2asl/asl-lib";

export const choice = asl.deploy.asStateMachine(async () =>{
    let val = asl.pass({
        name: "Assign val",
        parameters: () => "",
        comment: "val = \"\""
    });
    asl.choice({
        choices: [
            {
                condition: () => !!val,
                block: () => {
                    asl.pass({
                        parameters: () => "val is not an empty string",
                        comment: "console.log(\"val is not an empty string\")"
                    });
                    asl.pass({
                        parameters: () => "val us also not false or 0",
                        comment: "console.log(\"val us also not false or 0\")"
                    });
                }
            }, {
                condition: () => !val,
                block: () => {
                    asl.pass({
                        parameters: () => "val is empty string",
                        comment: "console.log(\"val is empty string\")"
                    });
                    asl.pass({
                        parameters: () => "or false or 0",
                        comment: "console.log(\"or false or 0\")"
                    });
                }
            }
        ],
        default: () => {
            asl.pass({
                parameters: () => "this will not likely happen",
                comment: "console.log(\"this will not likely happen\")"
            });
        }
    });
    asl.pass({
        parameters: () => "after choice",
        comment: "console.log(\"after choice\")"
    });
});

export const choiceWithSingleStatements = asl.deploy.asStateMachine(async () => {
  let val = "";
  asl.choice({
    choices: [
      {
        condition: () => !!(val),
        block: () => {
          console.log("!! val");
        }
      }, {
        condition: () => !val,
        block: () => {
          console.log("val");
        }
      }
    ],
    default: () => {
      console.log("this will not likely happen");
    }
  });
});

// export const choiceWithSingleStatementsWithoutBlock = asl.deploy.asStateMachine(async () => {
//   let val = "";
//   asl.choice({
//     choices: [
//       {
//         condition: () => !!(val),
//         block: () => console.log("!! val"),
//       }, {
//         condition: () => !val,
//         block: () => console.log("val"),
//       }
//     ],
//     default: () => console.log("this will not likely happen"),
//   });
// });