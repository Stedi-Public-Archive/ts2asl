import ts from "typescript";
import { transformCode } from "../../lang-support";
import { transpile } from "../../transpile";

describe("when converting examples", () => {
  it("then conversion works", () => {
    const printer: ts.Printer = ts.createPrinter();

    const example = `
    try { doWork(); } catch { revert(); }
`;

    const aslLibCode = transformCode(example);
    const printedAslLibCode = printer.printFile(aslLibCode);

    console.log(printedAslLibCode);
    expect(printedAslLibCode).toMatchInlineSnapshot(`
      "ASL.Parallel({
          Branches: [
              {
                  BlockInvoke: () => { ASL.Task({
                      TypescriptInvoke: doWork
                  }); }
              }
          ],
          Catch: [
              {
                  ErrorEquals: [
                      \\"States.All\\"
                  ],
                  NextInvoke: () => { ASL.Task({
                      TypescriptInvoke: revert
                  }); }
              }
          ]
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
                    "End": true,
                    "Resource": "typescript:doWork",
                    "Type": "Task",
                  },
                },
              },
            ],
            "Catch": Array [
              Object {
                "ErrorEquals": Array [
                  "States.All",
                ],
                "Next": "Task",
              },
            ],
            "End": true,
            "Type": "Parallel",
          },
          "Task": Object {
            "End": true,
            "Resource": "typescript:revert",
            "Type": "Task",
          },
        },
      }
    `);
  });
});
