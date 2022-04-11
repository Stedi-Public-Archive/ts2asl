import * as asl from "@ts2asl/asl-lib"

export const tryCatch = asl.deploy.asStateMachine(async (input: Input) => {
  try {
    throw new NotImplemented("not implemented")
  } catch (err) {
    if (err.Cause === "NotImplemented") {
      return "Todo"
    }
  }
});

export const throwErrors = asl.deploy.asStateMachine(async (input: Input) => {
  if (input.delayInSeconds > 10 || input.delayInSeconds < 1) {
    throw new ValidationError("delay in seconds must be numeric value no greater than 10 and no smaller than 1")
  }

  throw new NotImplemented("not implemented")
});


export const RetryErrors = asl.deploy.asStateMachine(async () => {
  asl.parallel({
    branches: [() => {
      throw new RetryableError("retry me")
    }],
    retry: [{
      errorEquals: ["RetryableError"],
      backoffRate: 1.5,
      intervalSeconds: 3,
      maxAttempts: 2
    }]
  })
});

export const CatchErrors = asl.deploy.asStateMachine(async () => {
  asl.parallel({
    branches: [() => {
      throw new UnexpectedError("bad luck!")
    }],
    retry: [{
      errorEquals: ["RetryableError"],
      backoffRate: 1.5,
      intervalSeconds: 3,
      maxAttempts: 2
    }],
    catch: [{
      errorEquals: ["UnexpectedError"],
      block: (error) => {
        console.log(`cause ${error.Cause}`)
        console.log(`message ${error.Error}`)
      }
    }]
  })
});

// https://github.com/Stedi/ts2asl/issues/31
// export const rethrowErrors = asl.deploy.asStateMachine(async (input: Input) => {
//   try {
//     throw new Error("bad luck");
//   } catch (err) {
//     if (err.reason === "bad luck") {
//       throw err;
//     }
//   }
// });

class UnexpectedError extends Error {
  constructor(message: string) {
    super(message);
  }
}


class RetryableError extends Error {
  constructor(message: string) {
    super(message);
  }
}

class NotImplemented extends Error {
  constructor(message: string) {
    super(message);
  }
}
class ValidationError extends Error {
  constructor(message: string) {
    super(message);
  }
}
interface Input {
  delayInSeconds: number | undefined;
}
