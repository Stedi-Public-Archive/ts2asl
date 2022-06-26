
import * as asl from "@ts2asl/asl-lib"

export const literals = asl.deploy.asStateMachine(async () => {
  let str = "string";
  let num = 42;
  let bool = true || false;
  let object = { str, num, bool };
  let object2 = { str: "string", num: 33, inner: object };
  let arrayOfNumbers = [1, 2, 3, 4, 5];
  let arrayOfObjects = [{ left: 1, right: 2 }, { left: 3, right: 4 }, { left: 5, right: 6 }];
  return { arrayOfNumbers, arrayOfObjects, object2 };
});

export const typeOfExpressions = asl.deploy.asStateMachine(async () => {
  let str = typeof "abcdef";
  let num = typeof 123;
  let bool = typeof true;
  let object = typeof { str, num, bool };
  let undef = typeof undefined;
  let _null = typeof null;
  
  if (str === "string" && 
      num === "number" && 
      bool === "boolean" && 
      object === "object" && 
      undef === "undefined" && 
      _null === "object") {
        return "ok"
      }

  return "not ok";
});

export const binaryExpression = asl.deploy.asStateMachine(async () => {
  let str = "abcdef";
  let num = 123;
  let expr1 = str === "123";
  let expr2 = num === 456;
  let expr3 = expr1 === expr2;
  
  if (expr3) {
    return "ok"
  }
  return "not ok";
});



export const arrayWithIdentifiers = asl.deploy.asStateMachine(async () => {
  let str = "string";
  let num = 42;
  let bool = true || false;
  let object = { str, num, bool };
  let array = [str, num, bool, object];
  return array;
});

export const unassignedVariable = asl.deploy.asStateMachine(async () => {
  let arr: [];
  let two: string;
  return "ok"
});

export const assignmentToUndefined = asl.deploy.asStateMachine(async () => {
  let _undefined = undefined;
  return "ok"
});

export const assignmentToNull = asl.deploy.asStateMachine(async () => {
  let _null = null;
  return "ok"
});

export const arrayIndexer = asl.deploy.asStateMachine(async () => {
  let arr = [1, 2, 3, 4, 5]
  let two = arr[1];
  arr[1] = arr[3];
  arr[3] = two;
  return arr; //returns [1, 4, 3, 2, 5] 
});

export const functions = asl.deploy.asStateMachine(async () => {
  let str = asl.states.format("hello {}", "world")
  let num = asl.states.format("answer is {}", 42);
  let combined = asl.states.format("1: {}\n 2: {}", str, num);
  let arr = asl.states.array(str, num, combined);
  return arr;
});
