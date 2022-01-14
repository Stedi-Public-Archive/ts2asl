import { testTranspile } from "./test-transpile";

describe("when transpiling simple statements", () => {
  it("then single statement result is startAt and End", () => {
    const code = `ASL.Pass({ Result: 'hello' });`;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Pass",
        "States": Object {
          "Pass": Object {
            "End": true,
            "Result": "hello",
            "Type": "Pass",
          },
        },
      }
    `);
  });

  it("then two statements result is startAt, Next and End", () => {
    const code = `ASL.Pass({ Result: 'hello' }); ASL.Pass({ Result: 'hello' });`;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Pass",
        "States": Object {
          "Pass": Object {
            "Next": "Pass_1",
            "Result": "hello",
            "Type": "Pass",
          },
          "Pass_1": Object {
            "End": true,
            "Result": "hello",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
