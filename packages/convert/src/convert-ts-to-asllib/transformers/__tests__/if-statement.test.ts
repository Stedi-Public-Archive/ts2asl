import { testTransform } from "../../__tests__/test-transform";
import { ifStatementTransformer } from "../if-statement";
import { throwStatementTransformer } from "../throw-statement";

describe("when converting if statements", () => {
  it("then if statement will become ASL.Choice", () => {
    expect(
      testTransform(
        "if (password === 'pwd') throw new Error('wrong password');",
        [ifStatementTransformer({}), throwStatementTransformer({})]
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          name: \\"If (password === 'pwd')\\",
          condition: () => password === 'pwd',
          then: async () => { asl.fail({
              name: \\"Throw Error\\",
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
        [ifStatementTransformer({}), throwStatementTransformer({})]
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          name: \\"If (password === 'pwd')\\",
          condition: () => password === 'pwd',
          then: async () => { asl.fail({
              name: \\"Throw Error\\",
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
        [ifStatementTransformer({}), throwStatementTransformer({})]
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          name: \\"If (password !== 'pwd')\\",
          condition: () => password !== 'pwd',
          then: async () => { asl.fail({
              name: \\"Throw Error\\",
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
        ifStatementTransformer({}),
        throwStatementTransformer({})
      ])
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          name: \\"If (age > 18)\\",
          condition: () => age > 18,
          then: async () => { console.log() },
          comment: \\"if (age > 18) console.log();\\"
      })"
    `);
  });

  it("then equals is supported on boolean ", () => {
    expect(
      testTransform(
        "if (optIn === true) console.log();",
        ifStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          name: \\"If (optIn === true)\\",
          condition: () => optIn === true,
          then: async () => { console.log() },
          comment: \\"if (optIn === true) console.log();\\"
      })"
    `);
  });

  //this still assumes string! could be improved by testing against different types
  it("then comparison against identifier becomes path", () => {
    expect(
      testTransform(
        "if (lhs === rhs) console.log();",
        ifStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          name: \\"If (lhs === rhs)\\",
          condition: () => lhs === rhs,
          then: async () => { console.log() },
          comment: \\"if (lhs === rhs) console.log();\\"
      })"
    `);
  });

  it("then else block is supported", () => {
    expect(
      testTransform(
        "if (lhs === rhs) console.log(); else console.log();",
        ifStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          name: \\"If (lhs === rhs)\\",
          condition: () => lhs === rhs,
          then: async () => { console.log() },
          else: async () => { console.log() },
          comment: \\"if (lhs === rhs) console.log(); else console.log();\\"
      })"
    `);
  });

  it("then comparison against property expression is supported", () => {
    expect(
      testTransform(
        "if (lhs === rhs) console.log(); else console.log();",
        ifStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          name: \\"If (lhs === rhs)\\",
          condition: () => lhs === rhs,
          then: async () => { console.log() },
          else: async () => { console.log() },
          comment: \\"if (lhs === rhs) console.log(); else console.log();\\"
      })"
    `);
  });

  it("then else if is supported", () => {
    expect(
      testTransform(
        "if (lhs === rhs) console.log(); else if (1 === 2) console.log();",
        ifStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          name: \\"If (lhs === rhs)\\",
          condition: () => lhs === rhs,
          then: async () => { console.log() },
          else: async () => { asl.typescriptIf({
              name: \\"If (1 === 2)\\",
              condition: () => 1 === 2,
              then: async () => { console.log() },
              comment: \\"if (1 === 2) console.log();\\"
          }) },
          comment: \\"if (lhs === rhs) console.log(); else if (1 === 2) console.log();\\"
      })"
    `);
  });
});
