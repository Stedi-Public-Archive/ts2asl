import { testTransform } from "../../__tests__/test-transform";
import { promiseAllStatementTransformer } from "../promise-all-statement";

describe("when converting Promise.all statement", () => {
  it("then result is a Parallel", () => {
    expect(
      testTransform(
        `await Promise.all(
          [
            turnLeft(),
            turnRight()
          ]);`,
        promiseAllStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "await asl.parallel({
          branches: [
              () => { let return_var = turnLeft(); return return_var; },
              () => { let return_var = turnRight(); return return_var; }
          ],
          comment: \\"Promise.all(\\\\n          [\\\\n            turnLeft(),\\\\n            turnRight()\\\\n          ])\\"
      });"
    `);
  });

  it("then result is a Parallel anonymous methods", () => {
    expect(
      testTransform(
        `await Promise.all(
            [
              { val: "xyz"},
              { val: "xxx"}
            ]);`,
        promiseAllStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "await asl.parallel({
          branches: [
              () => { return { val: \\"xyz\\" }; },
              () => { return { val: \\"xxx\\" }; }
          ],
          comment: \\"Promise.all(\\\\n            [\\\\n              { val: \\\\\\"xyz\\\\\\"},\\\\n              { val: \\\\\\"xxx\\\\\\"}\\\\n            ])\\"
      });"
    `);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
