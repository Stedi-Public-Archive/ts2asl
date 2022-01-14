import ts, { transform } from "typescript";
import { transformCode } from "../lang-support";
import { transformers } from "../lang-support/transformers";
import { testTransform } from "../lang-support/__tests__/test-transform";
import { transpile } from "../transpile";

describe("when converting examples", () => {
  it("then conversion works", () => {
    const printer: ts.Printer = ts.createPrinter();

    const example = `
    switch (color) {
      case "red": 
        doRed();
        break;
    
      default:
        somethingElse();
        break;
    }`;

    const aslLibCode = transformCode(example);
    const printedAslLibCode = printer.printFile(aslLibCode);

    console.log(printedAslLibCode);
    expect(printedAslLibCode).toMatchInlineSnapshot(`
      "ASL.Choice({ Choices: [{ Variable: \\"$.color\\", StringEquals: \\"red\\", NextInvoke: () => {
                      ASL.Task({
                          TypescriptInvoke: doRed
                      });
                  } }], DefaultInvoke: () => {
              ASL.Task({
                  TypescriptInvoke: somethingElse
              });
          } })
      "
    `);

    const asl = transpile(aslLibCode);
    console.log(JSON.stringify(asl, null, 2));
    expect(asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Choice",
        "States": Object {
          "Choice": Object {
            "Choices": Array [
              Object {
                "Next": "Task",
                "StringEquals": "red",
                "Variable": "$.color",
              },
            ],
            "Default": "Task_1",
            "Type": "Choice",
          },
          "Task": Object {
            "End": true,
            "Resource": "typescript:doRed",
            "Type": "Task",
          },
          "Task_1": Object {
            "End": true,
            "Resource": "typescript:somethingElse",
            "Type": "Task",
          },
        },
      }
    `);
  });
});
