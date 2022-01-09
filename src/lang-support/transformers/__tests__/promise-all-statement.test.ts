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
        promiseAllStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "await ASL.Parallel({
          Branches: [{
                  BlockInvoke: () => { turnLeft() }
              }, {
                  BlockInvoke: () => { turnRight() }
              }]
      });"
    `);
  });

  it("then result is a Parallel anonymous methods", () => {
    expect(
      testTransform(
        `await Promise.all(
            [
              () => { console.log('a'); },
              () => { console.log('b'); }
            ]);`,
        promiseAllStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "await ASL.Parallel({
          Branches: [{
                  BlockInvoke: () => { console.log('a'); }
              }, {
                  BlockInvoke: () => { console.log('b'); }
              }]
      });"
    `);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
