import ts from "typescript";
import { transformCode } from "../../lang-support";
import { transpile } from "../../transpile";

describe("when converting examples", () => {
  const printer: ts.Printer = ts.createPrinter();
  const example = `
if (password !== 'pwd') throw new Error('wrong password');
if (age < 18) throw new Error('minor'); else proceed();`;
  let aslLibCode: ts.SourceFile;

  beforeAll(() => {
    aslLibCode = transformCode(example);
  });

  it("then converts to ASL Lib works", () => {
    const printedAslLibCode = printer.printFile(aslLibCode);
    console.log(printedAslLibCode);
    expect(printedAslLibCode).toMatchInlineSnapshot(`
      "ASL.Choice({
          Choices: [
              {
                  Variable: password,
                  Not: { StringEquals: 'pwd' },
                  NextInvoke: () => { ASL.Fail({ Error: 'Error', Cause: 'wrong password' }) }
              }
          ]
      });
      ASL.Choice({
          Choices: [
              {
                  Variable: age,
                  NumericLessThan: 18,
                  NextInvoke: () => { ASL.Fail({ Error: 'Error', Cause: 'minor' }) }
              }
          ],
          DefaultInvoke: () => { ASL.Task({
              TypescriptInvoke: proceed
          }); }
      });
      "
    `);
  });

  it("then converts to ASL", () => {
    const asl = transpile(aslLibCode);
    console.log(JSON.stringify(asl, null, 2));
    expect(asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Choice",
        "States": Object {
          "Choice": Object {
            "Choices": Array [
              Object {
                "Next": "Fail",
                "Not": Object {
                  "StringEquals": "pwd",
                },
                "Variable": "$.password",
              },
            ],
            "Default": "Choice_1",
            "Next": "Choice_1",
            "Type": "Choice",
          },
          "Choice_1": Object {
            "Choices": Array [
              Object {
                "Next": "Fail_1",
                "NumericLessThan": 18,
                "Variable": "$.age",
              },
            ],
            "Default": "Task",
            "End": true,
            "Type": "Choice",
          },
          "Fail": Object {
            "Cause": "wrong password",
            "Error": "Error",
            "Type": "Fail",
          },
          "Fail_1": Object {
            "Cause": "minor",
            "Error": "Error",
            "Type": "Fail",
          },
          "Task": Object {
            "End": true,
            "Resource": "typescript:proceed",
            "Type": "Task",
          },
        },
      }
    `);
  });
});
