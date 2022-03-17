
import * as asl from "@ts2asl/asl-lib";

export const justIf = asl.deploy.asStateMachine(async () => {
  let before = true;
  if (true) {
    let true_1 = true;
    let true_2 = true;
  }
  let after = true;
});

export const ifElse = asl.deploy.asStateMachine(async () => {
  let before = true;
  if (true) {
    let true_1 = true;
    let true_2 = true;
  } else {
    let false_1 = true;
    let false_2 = true;
  }
  let after = true;
});

export const nestedIfs = asl.deploy.asStateMachine(async () => {
  let before_nested = true;
  if (true) {
    let outer_1 = true;
    let outer_2 = true;
    if (true) {
      let inner_1 = true;
      let inner_2 = true;
    } else {
      let inner_else = true;
    }
  } else {
    let outer_else = true;
  }
  let after_all = true;
});

export const enclosedVars = asl.deploy.asStateMachine(async () =>{
    let enclosedVar = asl.pass({
        name: "Assign enclosedVar",
        parameters: () => "before",
        comment: "enclosedVar = \"before\""
    });
    asl.typescriptIf({
        name: "If (true)",
        condition: () => true,
        then: async () => {
            enclosedVar = "outer if";
            asl.typescriptIf({
                name: "If (true)",
                condition: () => true,
                then: async () => {
                    enclosedVar = "inner if";
                },
                else: async () => {
                    enclosedVar = "else if";
                },
                comment: "if (true) {\n      enclosedVar = \"inner if\";\n    } else {\n      enclosedVar = \"else if\";\n    }"
            })
        },
        else: async () => {
            enclosedVar = "outer else if";
        }
    })
    enclosedVar = "after if";
});



