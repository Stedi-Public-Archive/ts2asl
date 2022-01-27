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
      "asl.tryExpression({
          try: () => { console.log('yay!'); },
          catch: [
              {
                  errorFilter: [
                      \\"States.All\\"
                  ],
                  block: () => { console.log('nay'); }
              }
          ],
          comment: \\"try { console.log('yay!'); } catch { console.log('nay'); }\\"
      });"
    `);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
