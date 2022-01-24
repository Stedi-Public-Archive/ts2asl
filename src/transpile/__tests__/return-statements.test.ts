import { testTranspile } from "./test-transpile";

describe("when transpiling block statements", () => {
  it("then single statement in block will be single state", () => {
    const code = `
    ASL.Multiple({
      First: ASL.Pass({ Result: 12, ResultPath: "$" }),
      Second: ASL.Succeed({})
  });
  `;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Pass",
        "States": Object {
          "Pass": Object {
            "End": true,
            "Next": "Succeed",
            "Result": 12,
            "ResultPath": "$",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
