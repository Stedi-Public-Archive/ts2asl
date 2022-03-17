import * as asl from "@ts2asl/asl-lib"

export const concatStrings = asl.deploy.asStateMachine(async () => {
  console.log({
    a: "hello" + " world ",
    b: "a" + "b" + "c",
    c: `a${"b"}c`,
    d: `n=${42};`
  });
});

export const numbers = asl.deploy.asStateMachine(async () => {
  console.log({
    a: 10 + 10,
    b: 30 - 10,
    c: 10 * 2,
    d: 40 / 2,
    e: 2 * (4 + 4 * 4),
  });
});

export const parameters = asl.deploy.asStateMachine(async () => {
  console.log({
    a: asl.deploy.getParameter("bucketName"),
    b: "s3:::arn:" + asl.deploy.getParameter("bucketName"),
    c: `value -> ${asl.deploy.getParameter("bucketName")} <- value`,
  });
});

// export const simpleMath = asl.deploy.asStateMachine(async () => {
//   console.log({
//     a: Math.round(3 / 2) * 2,
//     b: Math.floor(3 / 2) + 1,
//   });
// });
