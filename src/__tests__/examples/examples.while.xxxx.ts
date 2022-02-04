import ts, { transform } from "typescript";
import { transformCode } from "../../lang-support";
import { transpile } from "../../transpile";

describe("when converting examples", () => {
  it("then conversion works", () => {
    const printer: ts.Printer = ts.createPrinter();

    const example = `
    let page = getPage();
    while(page.nextPageToken) {
      page = getPage();
    }`;

    const aslLibCode = transformCode(example);
    const printedAslLibCode = printer.printFile(aslLibCode);

    console.log(printedAslLibCode);
    expect(printedAslLibCode).toMatchInlineSnapshot(`
      "let page = ASL.Task({
          TypescriptInvoke: getPage
      });
      asl.whileLoop({
          condition: () => page.nextPageToken,
          block: () => {
              page = ASL.Task({
                  TypescriptInvoke: getPage
              });
          }
      })
      "
    `);
    const asl = transpile(aslLibCode);

    console.log(JSON.stringify(asl, null, 2));
    expect(asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Assign_page",
        "States": Object {
          "Assign_page": Object {
            "Next": "While",
            "Resource": "typescript:getPage",
            "ResultPath": "$.page",
            "Type": "Task",
          },
          "While": Object {
            "Branches": Array [
              Object {
                "StartAt": "_WhileCondition",
                "States": Object {
                  "Assign_page": Object {
                    "Next": "_WhileCondition",
                    "Resource": "typescript:getPage",
                    "ResultPath": "$.page",
                    "Type": "Task",
                  },
                  "_WhileCondition": Object {
                    "Choices": Array [
                      Object {
                        "IsPresent": true,
                        "Next": "Assign_page",
                        "Variable": "$.page.nextPageToken",
                      },
                    ],
                    "Default": "_WhileExit",
                    "Type": "Choice",
                  },
                  "_WhileExit": Object {
                    "Type": "Succeed",
                  },
                },
              },
            ],
            "End": true,
            "Type": "Parallel",
          },
        },
      }
    `);
  });
});
