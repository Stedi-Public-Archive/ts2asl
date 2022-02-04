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
      "ASL.fail({
          error: 'Error',
          comment: 'throw new Error();'
      })
      ASL.fail({
          error: 'Error',
          cause: 'bad luck',
          comment: 'throw new Error(\\"bad luck\\");'
      })
      ASL.fail({
          error: 'SpecialError',
          cause: 'bad luck',
          comment: 'throw new SpecialError(\\"bad luck\\");'
      })
      "
    `);

    console.log(JSON.stringify(asl, null, 2));
    expect(asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "fail",
        "States": Object {
          "fail": Object {
            "Next": "fail_1",
            "Type": "fail",
            "comment": "throw new Error();",
            "error": "Error",
          },
          "fail_1": Object {
            "Next": "fail_2",
            "Type": "fail",
            "cause": "bad luck",
            "comment": "throw new Error(\\"bad luck\\");",
            "error": "Error",
          },
          "fail_2": Object {
            "End": true,
            "Type": "fail",
            "cause": "bad luck",
            "comment": "throw new SpecialError(\\"bad luck\\");",
            "error": "SpecialError",
          },
        },
      }
    `);
  });
});
