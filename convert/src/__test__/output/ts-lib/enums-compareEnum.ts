import * as asl from "@ts2asl/asl-lib"

enum ExampleEnum {
  "A",
  "B"
}

export const compareEnum = asl.deploy.asStateMachine(async () =>{
    const x = asl.pass({
        name: "Assign x",
        parameters: () => 0
    });
    asl.typescriptIf({
        name: "If (x === ExampleEnum.A)",
        condition: () => x === 0,
        then: async () => {
            return "success";
        }
    })
    return "fail";
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