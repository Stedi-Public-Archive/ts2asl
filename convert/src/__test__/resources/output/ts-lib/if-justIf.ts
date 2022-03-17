
import * as asl from "@ts2asl/asl-lib";

export const justIf = asl.deploy.asStateMachine(async () =>{
    let before = asl.pass({
        name: "Assign before",
        parameters: () => true,
        comment: "before = true"
    });
    asl.typescriptIf({
        name: "If (true)",
        condition: () => true,
        then: async () => {
            let true_1 = asl.pass({
                name: "Assign true_1",
                parameters: () => true,
                comment: "true_1 = true"
            });
            let true_2 = asl.pass({
                name: "Assign true_2",
                parameters: () => true,
                comment: "true_2 = true"
            });
        },
        comment: "if (true) {\n    let true_1 = true;\n    let true_2 = true;\n  }"
    })
    let after = asl.pass({
        name: "Assign after",
        parameters: () => true,
        comment: "after = true"
    });
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

export const enclosedVars = asl.deploy.asStateMachine(async () => {
  let enclosedVar = "before";
  if (true) {
    enclosedVar = "outer if";
    if (true) {
      enclosedVar = "inner if";
    } else {
      enclosedVar = "else if";
    }
  } else {
    enclosedVar = "outer else if";
  }
  enclosedVar = "after if";
});



