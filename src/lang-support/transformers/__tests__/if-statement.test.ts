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
      "asl.typescriptIf({
          when: () => password === 'pwd',
          then: () => { asl.fail({
              error: \\"Error\\",
              cause: \\"wrong password\\",
              comment: \\"throw new Error('wrong password');\\"
          }) },
          comment: \\"if (password === 'pwd') throw new Error('wrong password');\\"
      })"
    `);
  });

  it("then if statement with block is supported", () => {
    expect(
      testTransform(
        "if (password === 'pwd') { throw new Error('wrong password'); }",
        [ifStatementTransformer, throwStatementTransformer]
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          when: () => password === 'pwd',
          then: () => { asl.fail({
              error: \\"Error\\",
              cause: \\"wrong password\\",
              comment: \\"throw new Error('wrong password');\\"
          }) },
          comment: \\"if (password === 'pwd') { throw new Error('wrong password'); }\\"
      })"
    `);
  });

  it("then if statement with not is supported", () => {
    expect(
      testTransform(
        "if (password !== 'pwd') { throw new Error('wrong password'); }",
        [ifStatementTransformer, throwStatementTransformer]
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          when: () => password !== 'pwd',
          then: () => { asl.fail({
              error: \\"Error\\",
              cause: \\"wrong password\\",
              comment: \\"throw new Error('wrong password');\\"
          }) },
          comment: \\"if (password !== 'pwd') { throw new Error('wrong password'); }\\"
      })"
    `);
  });

  it("then greater than is supported on numeric ", () => {
    expect(
      testTransform("if (age > 18) console.log();", [
        ifStatementTransformer,
        throwStatementTransformer
      ])
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          when: () => age > 18,
          then: () => { console.log(); },
          comment: \\"if (age > 18) console.log();\\"
      })"
    `);
  });

  it("then equals is supported on boolean ", () => {
    expect(
      testTransform(
        "if (optIn === true) console.log();",
        ifStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          when: () => optIn === true,
          then: () => { console.log(); },
          comment: \\"if (optIn === true) console.log();\\"
      })"
    `);
  });

  //this still assumes string! could be improved by testing against different types
  it("then comparison against identifier becomes path", () => {
    expect(
      testTransform("if (lhs === rhs) console.log();", ifStatementTransformer)
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          when: () => lhs === rhs,
          then: () => { console.log(); },
          comment: \\"if (lhs === rhs) console.log();\\"
      })"
    `);
  });

  it("then else block is supported", () => {
    expect(
      testTransform(
        "if (lhs === rhs) console.log(); else console.log();",
        ifStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          when: () => lhs === rhs,
          then: () => { console.log(); },
          else: () => { console.log(); },
          comment: \\"if (lhs === rhs) console.log(); else console.log();\\"
      })"
    `);
  });

  it("then comparison against property expression is supported", () => {
    expect(
      testTransform(
        "if (lhs === rhs) console.log(); else console.log();",
        ifStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          when: () => lhs === rhs,
          then: () => { console.log(); },
          else: () => { console.log(); },
          comment: \\"if (lhs === rhs) console.log(); else console.log();\\"
      })"
    `);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
