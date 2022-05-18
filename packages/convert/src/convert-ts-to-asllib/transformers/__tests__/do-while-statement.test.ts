import { testTransform } from "../../__tests__/test-transform";
import { doWhileStatementTransformer } from "../do-while-statement";

describe("when converting do-while statements", () => {
  it("then do-while statement becomes do-while in ASL", () => {
    expect(
      testTransform(
        "do{ console.log(); ASL.Wait({Seconds: 2})} while (code === 'continue');",
        doWhileStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptDoWhile({
          name: \\"Do While (code === 'conti ...\\",
          condition: () => code === 'continue',
          block: async () => { console.log(); ASL.Wait({ Seconds: 2 }); },
          comment: \\"do{ console.log(); ASL.Wait({Seconds: 2})} while (code === 'continue');\\"
      })"
    `);
  });
});
