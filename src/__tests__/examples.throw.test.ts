import ts, { transform } from "typescript";
import { transformCode } from "../lang-support";
import { transformers } from "../lang-support/transformers";
import { testTransform } from "../lang-support/__tests__/test-transform";
import { transpile } from "../transpile";

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
      "ASL.Failed({ Error: 'Error' })
      ASL.Failed({ Error: 'Error', Cause: 'bad luck' })
      ASL.Failed({ Error: 'SpecialError', Cause: 'bad luck' })
      "
    `);

    console.log(JSON.stringify(asl, null, 2));
    expect(asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Failed",
        "States": Object {
          "Failed": Object {
            "Error": "Error",
            "Type": "Failed",
          },
          "Failed_1": Object {
            "Cause": "bad luck",
            "Error": "Error",
            "Type": "Failed",
          },
          "Failed_2": Object {
            "Cause": "bad luck",
            "Error": "SpecialError",
            "Type": "Failed",
          },
        },
      }
    `);
  });
});
