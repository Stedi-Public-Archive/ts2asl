import { testTransform } from "../../__tests__/test-transform";
import { deployTimeStatementTransformer } from "../deploy-time-replacements";
import { throwStatementTransformer } from "../throw-statement";

describe("when converting throw statements", () => {
  it("then throw statement will become ASL.Fail", () => {
    expect(testTransform("throw new Error()", throwStatementTransformer({})))
      .toMatchInlineSnapshot(`
      "asl.fail({
          name: \\"Throw Error\\",
          error: \\"Error\\",
          comment: \\"throw new Error()\\"
      })"
    `);
  });

  it("then runtime.createError will become ASL.Fail", () => {
    expect(
      testTransform("throw asl.runtime.createError('error', 'reason here');", [
        deployTimeStatementTransformer,
        throwStatementTransformer({})
      ])
    ).toMatchInlineSnapshot(`
      "asl.fail({
          name: \\"Throw error\\",
          error: \\"error\\",
          cause: \\"reason here\\",
          comment: \\"throw asl.runtime.createError('error', 'reason here');\\"
      })"
    `);
  });

  it("then throw statement will become ASL.Fail with argument", () => {
    expect(
      testTransform(
        "throw new Error('bad luck')",
        throwStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.fail({
          name: \\"Throw Error\\",
          error: \\"Error\\",
          cause: \\"bad luck\\",
          comment: \\"throw new Error('bad luck')\\"
      })"
    `);
  });

  it("then throw statement will become ASL.Fail with argument", () => {
    expect(
      testTransform(
        'throw new Error("bad luck")',
        throwStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.fail({
          name: \\"Throw Error\\",
          error: \\"Error\\",
          cause: \\"bad luck\\",
          comment: \\"throw new Error(\\\\\\"bad luck\\\\\\")\\"
      })"
    `);
  });

  it("then throw statement will become ASL.Fail with argument", () => {
    expect(
      testTransform(
        'throw new SpecialError("bad luck")',
        throwStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.fail({
          name: \\"Throw SpecialError\\",
          error: \\"SpecialError\\",
          cause: \\"bad luck\\",
          comment: \\"throw new SpecialError(\\\\\\"bad luck\\\\\\")\\"
      })"
    `);
  });

  // it("then throw statement of something ", () => {
  //   expect(testTransform("throw new Error('bad luck')", throwStatementTransformer)).toBe("ASL.Fail('bad luck')");
  // });
});
