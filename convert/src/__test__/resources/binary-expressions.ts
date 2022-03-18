import * as asl from "@ts2asl/asl-lib"

export const concatStrings = asl.deploy.asStateMachine(async () => {
  return {
    a: "hello" + " world ",
    b: "a" + "b" + "c",
    c: `a${"b"}c`,
    d: `n=${42};`
  };
});

export const numbers = asl.deploy.asStateMachine(async () => {
  return {
    a: 10 + 10,
    b: 30 - 10,
    c: 10 * 2,
    d: 40 / 2,
    e: 2 * (4 + 4 * 4),
  };
});

export const booleans = asl.deploy.asStateMachine(async () => {
  return {
    a: true,
    b: false,
    c: true || false,
    d: true && false,
    e: true && (false || false),
    f: ((true && false) || false) || true,
  };
});

export const parameters = asl.deploy.asStateMachine(async () => {
  return {
    a: asl.deploy.getParameter("bucketName"),
    b: "s3:::arn:" + asl.deploy.getParameter("bucketName"),
    c: `value -> ${asl.deploy.getParameter("bucketName")} <- value`,
  };
});

// not supported yet
// 
// export const simpleMath = asl.deploy.asStateMachine(async () => {
//   console.log({
//     a: Math.round(3 / 2) * 2,
//     b: Math.floor(3 / 2) + 1,
//   });
// });
