import ts, { transform } from "typescript";
import { transformCode } from "../../lang-support";
import { transpile } from "../../transpile";

describe("when converting examples", () => {
  it("then conversion works", () => {
    const printer: ts.Printer = ts.createPrinter();

    const example = `
    throw new Error();
    throw new Error("bad luck");
    throw new SpecialError("bad luck");`;

    const aslLibCode = transformCode(example);
    const asl = transpile(aslLibCode);
    const printedAslLibCode = printer.printFile(aslLibCode);

    console.log(printedAslLibCode);
    expect(printedAslLibCode).toMatchInlineSnapshot(`
      "ASL.Fail({ Error: 'Error' })
      ASL.Fail({ Error: 'Error', Cause: 'bad luck' })
      ASL.Fail({ Error: 'SpecialError', Cause: 'bad luck' })
      "
    `);

    console.log(JSON.stringify(asl, null, 2));
    expect(asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Fail",
        "States": Object {
          "Fail": Object {
            "Error": "Error",
            "Type": "Fail",
          },
          "Fail_1": Object {
            "Cause": "bad luck",
            "Error": "Error",
            "Type": "Fail",
          },
          "Fail_2": Object {
            "Cause": "bad luck",
            "Error": "SpecialError",
            "Type": "Fail",
          },
        },
      }
    `);
  });
});
