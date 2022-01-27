import ts from "typescript";
import { transformCode } from "../../lang-support";
import { transpile } from "../../transpile";

describe("when converting examples", () => {
  const printer: ts.Printer = ts.createPrinter();
  const example = `
  for(const element of result.list) { 
    process(element);
  }`;
  let aslLibCode: ts.SourceFile;

  beforeAll(() => {
    aslLibCode = transformCode(example);
  });

  it("then converts to ASL Lib works", () => {
    const printedAslLibCode = printer.printFile(aslLibCode);
    console.log(printedAslLibCode);
    expect(printedAslLibCode).toMatchInlineSnapshot(`
      "ASL.Map({
          ItemsPath: result.list,
          Iterator: element => {
              ASL.Task({
                  TypescriptInvoke: process,
                  Input: element
              });
          }
      })
      "
    `);
  });

  it("then converts to ASL", () => {
    const asl = transpile(aslLibCode);
    console.log(JSON.stringify(asl, null, 2));
    expect(asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Map",
        "States": Object {
          "Map": Object {
            "End": true,
            "ItemsPath": "$.result.list",
            "Iterator": Object {
              "StartAt": "Task",
              "States": Object {
                "Task": Object {
                  "End": true,
                  "Resource": "typescript:process",
                  "Type": "Task",
                },
              },
            },
            "Type": "Map",
          },
        },
      }
    `);
  });
});
