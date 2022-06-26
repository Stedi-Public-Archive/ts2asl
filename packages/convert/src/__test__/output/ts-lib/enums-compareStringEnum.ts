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

export const compareStringEnum = asl.deploy.asStateMachine(async () =>{
    const x = "a";
    asl.typescriptIf({
        name: "If (x === ExampleEnumStri ...",
        condition: () => x === "a",
        then: async () => {
            return "success";
        },
        comment: "if (x === ExampleEnumString.A) {\n    return \"success\"\n  }"
    })
    return "fail";
});