
import * as asl from "@ts2asl/asl-lib";

export const choice = asl.deploy.asStateMachine(async (input: { condition?: any } = {}) => {
  let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
  val.a = "before choice";

  asl.choice({
    choices: [
      {
        condition: () => input.condition,
        block: () => {
          val.b = "val is not an empty string";
          val.c = "val is also not false or 0";
        }
      }, {
        condition: () => !input.condition,
        block: () => {
          val.d = "val is empty string";
          val.e = "or false or 0";
        }
      }
    ],
    default: () => {
      val.f = "this should not happen";
    }
  });
  val.g = "after choice";
  return val;
});

export const choiceWithSingleStatements = asl.deploy.asStateMachine(async (input: { condition?: any } = {}) => {
  let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
  asl.choice({
    choices: [
      {
        condition: () => !!input.condition,
        block: () => {
          val.a = "val is truthy";
        }
      }, {
        condition: () => !input.condition,
        block: () => {
          val.b = "val is falsy";
        }
      }
    ],
    default: () => {
      val.c = "val is not truthy and not falsy";
    }
  });
  return val;
});

export const choiceWithShorthand = asl.deploy.asStateMachine(async (input: { condition?: any } = {}) => {
  let val = { a: "", b: "", c: "", d: "", e: "", f: "", g: "" };
  asl.choice({
    choices: [
      {
        condition: () => !!input.condition,
        block: () => val.a = "val is truthy",
      }, {
        condition: () => !input.condition,
        block: () => val.b = "val is falsy",
      }
    ],
    default: () => val.c = "val is not truthy and not falsy",
  }
  );
  return val;
});
