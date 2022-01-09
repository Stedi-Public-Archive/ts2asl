import ts from "typescript";
import { transformCode } from "../lang-support";
import { transpile } from "../transpile";

describe("when converting examples", () => {
  it("then conversion works", () => {
    const printer: ts.Printer = ts.createPrinter();

    const example = `
return;`;

    const aslLibCode = transformCode(example);
    const asl = transpile(aslLibCode);
    const printedAslLibCode = printer.printFile(aslLibCode);

    console.log(printedAslLibCode);
    expect(printedAslLibCode).toMatchInlineSnapshot(`
      "ASL.Succeed();
      "
    `);

    console.log(JSON.stringify(asl, null, 2));
    expect(asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Succeed",
        "States": Object {
          "Succeed": Object {
            "Type": "Succeed",
          },
        },
      }
    `);
  });
});
