import { testTransform } from "../../__tests__/test-transform";
import { ifStatementTransformer } from "../if-statement";
import { throwStatementTransformer } from "../throw-statement";

describe("when converting if statements", () => {
  it("then if statement will become ASL.Choice", () => {
    expect(
      testTransform(
        "if (password === 'pwd') throw new Error('wrong password');",
        [ifStatementTransformer, throwStatementTransformer]
      )
    ).toMatchInlineSnapshot(`
      "ASL.Choice({
          Choices: [
              {
                  Variable: \\"$.password\\",
                  StringEquals: \\"pwd\\",
                  NextInvoke: () => { ASL.Failed({ Error: 'Error', Cause: 'wrong password' }) }
              }
          ]
      });"
    `);
  });

  it("then if statement with block is supported", () => {
    expect(
      testTransform(
        "if (password === 'pwd') { throw new Error('wrong password'); }",
        [ifStatementTransformer, throwStatementTransformer]
      )
    ).toMatchInlineSnapshot(`
      "ASL.Choice({
          Choices: [
              {
                  Variable: \\"$.password\\",
                  StringEquals: \\"pwd\\",
                  NextInvoke: () => { ASL.Failed({ Error: 'Error', Cause: 'wrong password' }) }
              }
          ]
      });"
    `);
  });

  it("then if statement with not is supported", () => {
    expect(
      testTransform(
        "if (password !== 'pwd') { throw new Error('wrong password'); }",
        [ifStatementTransformer, throwStatementTransformer]
      )
    ).toMatchInlineSnapshot(`
      "ASL.Choice({
          Choices: [
              {
                  Variable: \\"$.password\\",
                  Not: { StringEquals: \\"pwd\\" },
                  NextInvoke: () => { ASL.Failed({ Error: 'Error', Cause: 'wrong password' }) }
              }
          ]
      });"
    `);
  });

  it("then greater than is supported on numeric ", () => {
    expect(
      testTransform("if (age > 18) console.log();", [
        ifStatementTransformer,
        throwStatementTransformer
      ])
    ).toMatchInlineSnapshot(`
      "ASL.Choice({
          Choices: [
              {
                  Variable: \\"$.age\\",
                  NumericGreaterThan: \\"18\\",
                  NextInvoke: () => { console.log(); }
              }
          ]
      });"
    `);
  });

  it("then equals is supported on boolean ", () => {
    expect(
      testTransform(
        "if (optIn === true) console.log();",
        ifStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "ASL.Choice({
          Choices: [
              {
                  Variable: \\"$.optIn\\",
                  StringEquals: \\"$.true\\",
                  NextInvoke: () => { console.log(); }
              }
          ]
      });"
    `);
  });

  //this still assumes string! could be improved by testing against different types
  it("then comparison against identifier becomes path", () => {
    expect(
      testTransform("if (lhs === rhs) console.log();", ifStatementTransformer)
    ).toMatchInlineSnapshot(`
      "ASL.Choice({
          Choices: [
              {
                  Variable: \\"$.lhs\\",
                  StringEqualsPath: \\"$.rhs\\",
                  NextInvoke: () => { console.log(); }
              }
          ]
      });"
    `);
  });

  it("then else block is supported", () => {
    expect(
      testTransform(
        "if (lhs === rhs) console.log(); else console.log();",
        ifStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "ASL.Choice({
          Choices: [
              {
                  Variable: \\"$.lhs\\",
                  StringEqualsPath: \\"$.rhs\\",
                  NextInvoke: () => { console.log(); }
              }
          ],
          DefaultInvoke: () => { console.log(); }
      });"
    `);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
