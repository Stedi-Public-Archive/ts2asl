import { testTranspile } from "./test-transpile";

describe("when transpiling block statements", () => {
  it("then single statement in block will be single state", () => {
    const code = `
    ASL.Multiple([
      ASL.Pass({ Result: 12, ResultPath: "$" }),
      ASL.Succeed({})
  ]);
  `;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Pass",
        "States": Object {
          "Pass": Object {
            "End": true,
            "Result": 12,
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Succeed": Object {
            "Type": "Succeed",
          },
        },
      }
    `);
  });
});
