import { testTransform } from "../../__tests__/test-transform";
import { ifStatementTransformer } from "../if-statement";
import { throwStatementTransformer } from "../throw-statement";

describe("when converting if with throw statements", () => {
  it("then both get converted", () => {
    expect(
      testTransform("if (optIn === false) throw new NotOptedInError('oops');", [
        ifStatementTransformer({}),
        throwStatementTransformer({})
      ])
    ).toMatchInlineSnapshot(`
      "asl.typescriptIf({
          name: \\"If (optIn === false)\\",
          condition: () => optIn === false,
          then: async () => { asl.fail({
              name: \\"Throw NotOptedInError\\",
              error: \\"NotOptedInError\\",
              cause: \\"oops\\",
              comment: \\"throw new NotOptedInError('oops');\\"
          }) },
          comment: \\"if (optIn === false) throw new NotOptedInError('oops');\\"
      })"
    `);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
