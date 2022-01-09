import ts, { transform } from "typescript";
import { transformCode } from "../lang-support";
import { transformers } from "../lang-support/transformers";
import { testTransform } from "../lang-support/__tests__/test-transform";
import { transpile } from "../transpile";

describe("when converting examples", () => {
  it("then conversion works", () => {
    const printer: ts.Printer = ts.createPrinter();

    const example = `
      let abc = 'hello';
      let abc = 43;
      let abc = { number: 43; text: 'hello' };`;

    const aslLibCode = transformCode(example);
    const asl = transpile(aslLibCode);
    const printedAslLibCode = printer.printFile(aslLibCode);

    console.log(printedAslLibCode);
    expect(printedAslLibCode).toMatchInlineSnapshot(`
      "let abc = ASL.Pass({ Result: 'hello' });
      let abc = ASL.Pass({ Result: 43 });
      let abc = ASL.Pass({ Result: { number: 43, text: 'hello' } });
      "
    `);

    console.log(JSON.stringify(asl, null, 2));
    expect(asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Assign_abc",
        "States": Object {
          "Assign_abc": Object {
            "Result": "hello",
            "ResultPath": "$.abc",
            "Type": "Pass",
          },
          "Assign_abc_1": Object {
            "Result": 43,
            "ResultPath": "$.abc",
            "Type": "Pass",
          },
          "Assign_abc_2": Object {
            "Result": Object {
              "number": 43,
              "text": "hello",
            },
            "ResultPath": "$.abc",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
