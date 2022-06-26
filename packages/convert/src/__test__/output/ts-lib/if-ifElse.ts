
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

export const ifElse = asl.deploy.asStateMachine(async () =>{
    let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
    val.a = "before";
    asl.typescriptIf({
        name: "If (true)",
        condition: () => true,
        then: async () => {
            val.b = "true_1";
            val.c = "true_2";
        },
        else: async () => {
            val.b = "false_1";
            val.c = "false_2";
        },
        comment: "if (true) {\n    val.b = \"true_1\";\n    val.c = \"true_2\";\n  } else {\n    val.b = \"false_1\";\n    val.c = \"false_2\";\n  }"
    })
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
  return enclosedVar;
});
