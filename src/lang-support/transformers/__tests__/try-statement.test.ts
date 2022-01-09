import { testTransform } from "../../__tests__/test-transform";
import { tryStatementTransformer } from "../try-statement";

describe("when converting try statements", () => {
  it("then both get converted", () => {
    expect(
      testTransform(
        "try { console.log('yay!'); } catch { console.log('nay'); }",
        tryStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "ASL.Parallel({
          Branches: [
              {
                  BlockInvoke: () => { console.log('yay!'); }
              }
          ],
          Catch: [
              {
                  ErrorEquals: [
                      \\"States.All\\"
                  ],
                  NextInvoke: () => { console.log('nay'); }
              }
          ]
      });"
    `);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
