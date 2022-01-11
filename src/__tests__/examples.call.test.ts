import ts from "typescript";
import { transformCode } from "../lang-support";
import { transpile } from "../transpile";

describe("when converting examples", () => {
  it("then conversion works", () => {
    const printer: ts.Printer = ts.createPrinter();

    const example = `
sayHello(arg);
await sayHello();
const z = await sayHello();`;

    const aslLibCode = transformCode(example);
    const asl = transpile(aslLibCode);
    const printedAslLibCode = printer.printFile(aslLibCode);

    console.log(printedAslLibCode);
    expect(printedAslLibCode).toMatchInlineSnapshot(`
      "ASL.Task({
          TypescriptInvoke: sayHello,
          InputPath: arg
      });
      await ASL.Task({
          TypescriptInvoke: sayHello
      });
      const z = await ASL.Task({
          TypescriptInvoke: sayHello
      });
      "
    `);

    console.log(JSON.stringify(asl, null, 2));
    expect(asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Task",
        "States": Object {
          "Assign_z": Object {
            "Resource": "typescript:sayHello",
            "ResultPath": "$.z",
            "Type": "Task",
          },
          "Task": Object {
            "InputPath": "$.arg",
            "Resource": "typescript:sayHello",
            "Type": "Task",
          },
          "Task_1": Object {
            "Resource": "typescript:sayHello",
            "Type": "Task",
          },
        },
      }
    `);
  });
});
