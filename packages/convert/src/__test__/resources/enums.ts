import * as asl from "@ts2asl/asl-lib"

enum ExampleEnum {
  "A",
  "B"
}

export const compareEnum = asl.deploy.asStateMachine(async () => {
  const x = ExampleEnum.A;
  if (x === ExampleEnum.A) {
    return "success"
  }
  return "fail"
});

enum ExampleEnumString {
  "A" = "a",
  "B" = "b"
}

export const compareStringEnum = asl.deploy.asStateMachine(async () => {
  const x = ExampleEnumString.A;
  if (x === ExampleEnumString.A) {
    return "success"
  }
  return "fail"
});