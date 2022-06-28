
import * as asl from "@ts2asl/asl-lib";

export const justIf = asl.deploy.asStateMachine(async () => {
  let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
  val.a = "before";
  if (true) {
    val.b = "true_1";
    val.c = "true_2";
  }
  val.d = "after";
  return val;
});

export const ifElse = asl.deploy.asStateMachine(async () => {
  let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
  val.a = "before";
  if (true) {
    val.b = "true_1";
    val.c = "true_2";
  } else {
    val.b = "false_1";
    val.c = "false_2";
  }
  val.d = "after";
  return val;
});

export const nestedIfs = asl.deploy.asStateMachine(async () => {
  let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
  val.a = "before";
  if (true) {
    val.b = "outer_1";
    val.c = "outer_2";
    if (true) {
      val.d = "inner_1";
      val.e = "inner_2";
    } else {
      val.e = "inner_else_2";
    }
  } else {
    val.f = "outer_else_2";
  }
  val.g = "after";
  return val;
});

export const enclosedVars = asl.deploy.asStateMachine(async () =>{
    let enclosedVar = "before";
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
        },
        comment: "if (true) {\n    enclosedVar = \"outer if\";\n    if (true) {\n      enclosedVar = \"inner if\";\n    } else {\n      enclosedVar = \"else if\";\n    }\n  } else {\n    enclosedVar = \"outer else if\";\n  }"
    })
    return enclosedVar;
});
