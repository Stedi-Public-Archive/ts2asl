import * as asl from "@ts2asl/asl-lib"
interface Result {
  Authorized: boolean;
}

export const simpleWhile = asl.deploy.asStateMachine(async () => {
  let counter = ""
  while (counter != "aaaaa") {
    counter = `${counter}a`;
  }
  return counter;
});

export const whileWithBreak = asl.deploy.asStateMachine(async () => {
  let result: Result = await asl.task({ resource: "check-password", parameters: {} });
  while (true) {
    if (result.Authorized) {
      break;
    }
    await asl.wait({ seconds: 1 });
    result = await asl.task({ resource: "check-password", parameters: {} });
  }
});

export const retuningFromWhile = asl.deploy.asStateMachine(async () =>{
    let result: Result = await asl.task({ resource: "check-password", parameters: {} });
    asl.typescriptWhile({
        name: "While (true)",
        condition: () => true,
        block: async () => {
            asl.typescriptIf({
                name: "If (result.Authorized)",
                condition: () => result.Authorized,
                then: async () => {
                    return "ok";
                },
                comment: "if (result.Authorized) {\n      return \"ok\";\n    }"
            })
            await asl.wait({ seconds: 1 });
            result = await asl.task({ resource: "check-password", parameters: {} });
        }
    })
});
