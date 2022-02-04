import { testTransform } from "../../__tests__/test-transform";
import { variableStatementTransformer } from "../variable-statement";
import { whileStatementTransformer } from "../while-statement";

describe("when converting while statements", () => {
  it("then while statement becomes while in ASL", () => {
    expect(
      testTransform(
        "while(code === 'continue') { console.log(); ASL.Wait({Seconds: 2})}",
        whileStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptWhile({
          condition: () => code === 'continue',
          block: async () => { console.log(); ASL.Wait({ Seconds: 2 }); },
          comment: \\"while(code === 'continue') { console.log(); ASL.Wait({Seconds: 2})}\\"
      })"
    `);
  });
});
