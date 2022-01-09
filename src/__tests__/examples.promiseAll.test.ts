import ts from "typescript";
import { transformCode } from "../lang-support";
import { transpile } from "../transpile";

describe("when converting examples", () => {
  it("then conversion works", () => {
    const printer: ts.Printer = ts.createPrinter();

    const example = `
    await Promise.all([
      () => { spinLeft(); },
      () => { spinRight(); }
    ]);`;

    const aslLibCode = transformCode(example);
    const printedAslLibCode = printer.printFile(aslLibCode);

    console.log(printedAslLibCode);
    expect(printedAslLibCode).toMatchInlineSnapshot(`
      "await ASL.Parallel({
          Branches: [{
                  BlockInvoke: () => { ASL.Task({
                      TypescriptInvoke: spinLeft
                  }); }
              }, {
                  BlockInvoke: () => { ASL.Task({
                      TypescriptInvoke: spinRight
                  }); }
              }]
      });
      "
    `);

    const asl = transpile(aslLibCode);
    console.log(JSON.stringify(asl, null, 2));
    expect(asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Parallel",
        "States": Object {
          "Parallel": Object {
            "Branches": Array [
              Object {
                "StartAt": "Task",
                "States": Object {
                  "Task": Object {
                    "Resource": "typescript:spinLeft",
                    "Type": "Task",
                  },
                },
              },
              Object {
                "StartAt": "Task",
                "States": Object {
                  "Task": Object {
                    "Resource": "typescript:spinRight",
                    "Type": "Task",
                  },
                },
              },
            ],
            "Type": "Parallel",
          },
        },
      }
    `);
  });
});
