import { testTransform } from "../../__tests__/test-transform";
import { literalExpressionTransformer } from "../resolve-literal-expressions";


describe("when converting constant expressions", () => {
  it("then simple binary expressions get converted", () => {
    expect(
      testTransform(
        `
      const a = 'one' + 'two';
      const b = 'one' + 2;
      const c = 1 + 2;`,
        literalExpressionTransformer
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
        literalExpressionTransformer
      )
    ).toMatchInlineSnapshot(`
      "const a = { attrib: \`a\${\\"b\\"} \${\\"b\\"} c\` };
      const b = { attrib: \`a\${6} c\` };
      const c = { attrib: \`a\${12} c\` };"
    `);
  });
  it("then getParameter calls get converted ", () => {
    expect(
      testTransform(
        'const a = { attrib : "abc" + asl.deploy.getParameter("param") };' +
        'const b = { attrib : `a${asl.deploy.getParameter("param")} c` };',

        literalExpressionTransformer
      )
    ).toMatchInlineSnapshot(`
      "const a = { attrib: \\"abcundefined\\" };
      const b = { attrib: \`a\${asl.deploy.getParameter(\\"param\\")} c\` };"
    `);
  });
});
