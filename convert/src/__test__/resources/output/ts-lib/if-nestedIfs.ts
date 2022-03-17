
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

export const nestedIfs = asl.deploy.asStateMachine(async () =>{
    let before_nested = asl.pass({
        name: "Assign before_nested",
        parameters: () => true,
        comment: "before_nested = true"
    });
    asl.typescriptIf({
        name: "If (true)",
        condition: () => true,
        then: async () => {
            let outer_1 = asl.pass({
                name: "Assign outer_1",
                parameters: () => true,
                comment: "outer_1 = true"
            });
            let outer_2 = asl.pass({
                name: "Assign outer_2",
                parameters: () => true,
                comment: "outer_2 = true"
            });
            asl.typescriptIf({
                name: "If (true)",
                condition: () => true,
                then: async () => {
                    let inner_1 = asl.pass({
                        name: "Assign inner_1",
                        parameters: () => true,
                        comment: "inner_1 = true"
                    });
                    let inner_2 = asl.pass({
                        name: "Assign inner_2",
                        parameters: () => true,
                        comment: "inner_2 = true"
                    });
                },
                else: async () => {
                    let inner_else = asl.pass({
                        name: "Assign inner_else",
                        parameters: () => true,
                        comment: "inner_else = true"
                    });
                },
                comment: "if (true) {\n      let inner_1 = true;\n      let inner_2 = true;\n    } else {\n      let inner_else = true;\n    }"
            })
        },
        else: async () => {
            let outer_else = asl.pass({
                name: "Assign outer_else",
                parameters: () => true,
                comment: "outer_else = true"
            });
        }
    })
    let after_all = asl.pass({
        name: "Assign after_all",
        parameters: () => true,
        comment: "after_all = true"
    });
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



