import * as asl from "@ts2asl/asl-lib"
import { Organizations } from "@aws-sdk/client-organizations"

export const simpleSwitch = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      case 1:
        result = `${result}one`;
        break;
      case 2:
        result = `${result}two`;
        break;
      default:
        result = `${result}three`;
        break;
    }
  }
  return result;
});
export const switchCaseFallsThrough = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      case 1:
      case 2:
        result = `${result}not-three`;
        break;
      default:
        result = `${result}three`;
        break;
    }
  }
  return result;
});
export const switchCaseNonEmptyFallThrough = asl.deploy.asStateMachine(async () =>{
    const arr = [1, 2, 3];
    let result = "";
    asl.typescriptForeach({
        name: "For item Of arr",
        items: () => arr,
        iterator: item => {
            asl.typescriptSwitch({
                name: "Switch (item)",
                expression: () => item,
                cases: [
                    {
                        label: 1,
                        block: async () => {
                            result = asl.states.format("{}1", result);
                        }
                    },
                    {
                        label: 2,
                        block: async () => {
                            result = asl.states.format("{}1or2", result);
                        }
                    },
                    {
                        block: async () => {
                            result = asl.states.format("{}1or2or3", result);
                        }
                    }
                ],
                comment: "switch (item) {\n      case 1:\n        result = `${result}1`;\n      case 2:\n        result = `${result}1or2`;\n      default:\n        result = `${result}1or2or3`;\n    }"
            })
            result = asl.states.format("{}|", result);
        },
        comment: "for (const item of arr) {\n    switch (item) {\n      case 1:\n        result = `${result}1`;\n      case 2:\n        result = `${result}1or2`;\n      default:\n        result = `${result}1or2or3`;\n    }\n    result = `${result}|`\n  }"
    })
    return result;
});
export const switchCaseFallsThroughToDefault = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      case 1:
        result = `${result}one`;
        break;
      case 2:
      default:
        result = `${result}not-one`;
        break;
    }
  }
  return result;
});
export const switchDefaultFallsThrough = asl.deploy.asStateMachine(async () => {
  const arr = [1, 2, 3];
  let result = "";

  // use a for loop to append all numbers to a single string
  for (const item of arr) {
    switch (item) {
      default:
      case 1:
        result = `${result}not-three`;
        break;
      case 3:
        result = `${result}three`;
        break;
    }
  }
  return result;
});


export const createAwsAccount = asl.deploy.asStateMachine(async () => {
  const createAccount = await asl.sdk(Organizations).createAccount({ parameters: { AccountName: "test", Email: "something@email.com" } });
  let creationStatus: string | undefined = undefined;
  do {
    const describeResult = await asl.sdk(Organizations).describeCreateAccountStatus({ parameters: { CreateAccountRequestId: createAccount.CreateAccountStatus!.Id } });
    creationStatus = describeResult.CreateAccountStatus?.State;
    switch (creationStatus) {
      case "FAILED": throw new Error("account creation failed");
      case "IN_PROGRESS": await asl.wait({ seconds: 1 });
    }
  } while (creationStatus !== "SUCCEEDED");

  console.log(createAccount.CreateAccountStatus?.AccountId);
  return createAccount.CreateAccountStatus?.AccountId;
});
