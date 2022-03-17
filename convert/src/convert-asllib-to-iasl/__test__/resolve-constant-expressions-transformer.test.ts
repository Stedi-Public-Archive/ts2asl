import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";
import { resolveExpressionsTransformer } from "../resolve-constant-expressions-transformer";

const parameters = { param: "value" };

describe("when converting constant expressions", () => {
  it("then simple binary expressions get converted", () => {
    expect(
      testTransform(
        `
      const a = 'one' + 'two';
      const b = 'one' + 2;
      const c = 1 + 2;`,
        resolveExpressionsTransformer({ getParameter: key => parameters[key] })
      )
    ).toMatchInlineSnapshot(`
      "const a = \\"onetwo\\";
      const b = \\"one2\\";
      const c = 3;"
    `);
  });
  it("then simple template expressions get converted", () => {
    expect(
      testTransform(
        'const a = { attrib : `a${"b"} ${"b"} c` };' +
          "const b = { attrib : `a${6} c` };" +
          "const c = { attrib : `a${6 + 2 + 4} c` };",
        resolveExpressionsTransformer({ getParameter: key => parameters[key] })
      )
    ).toMatchInlineSnapshot(`
      "const a = { attrib: \\"ab b c\\" };
      const b = { attrib: \\"a6 c\\" };
      const c = { attrib: \\"a12 c\\" };"
    `);
  });
  it("then getParameter calls get converted ", () => {
    expect(
      testTransform(
        'const a = { attrib : "abc" + asl.deploy.getParameter("param") };' +
          'const b = { attrib : `a${asl.deploy.getParameter("param")} c` };',

        resolveExpressionsTransformer({ getParameter: key => parameters[key] })
      )
    ).toMatchInlineSnapshot(`
      "const a = { attrib: \\"abcvalue\\" };
      const b = { attrib: \\"avalue c\\" };"
    `);
  });
});
