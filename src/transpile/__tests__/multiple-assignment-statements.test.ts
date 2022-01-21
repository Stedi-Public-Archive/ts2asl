import { testTranspile } from "./test-transpile";

describe("when transpiling simple statements", () => {
  it("then single statement result is startAt and End", () => {
    const code = `const aaaa = ASL.Pass({ Result: 'hello' }); aaaa = ASL.Pass({ Result: 'hello' });`;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Assign_aaaa",
        "States": Object {
          "Assign_aaaa": Object {
            "Next": "Assign_aaaa_1",
            "Result": "hello",
            "ResultPath": "$.aaaa",
            "Type": "Pass",
          },
          "Assign_aaaa_1": Object {
            "End": true,
            "Result": "hello",
            "ResultPath": "$.aaaa",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
