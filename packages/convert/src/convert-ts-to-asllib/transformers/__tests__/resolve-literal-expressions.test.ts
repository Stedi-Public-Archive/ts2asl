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
  it("doesnt throws for expressions with identifier", () => {
    expect(
      testTransform(
        `
      const a = 'one' + 'two';
      const b = 'one' + a;
      `,
        literalExpressionTransformer
      )
    ).toMatchInlineSnapshot(`
      "const a = \\"onetwo\\";
      const b = asl.states.format(\\"one{}\\", a);"
    `);

    expect(
      testTransform(
        `
      const a = 'one' + 'two';
      const b = a + 'three';
      `,
        literalExpressionTransformer
      )
    ).toMatchInlineSnapshot(`
      "const a = \\"onetwo\\";
      const b = asl.states.format(\\"{}three\\", a);"
    `);
    expect(
      testTransform(
        `
    const a = 'one' + 'two';
    const b = 'one' + (a);
    `,
        literalExpressionTransformer
      )
    ).toMatchInlineSnapshot(`
      "const a = \\"onetwo\\";
      const b = asl.states.format(\\"one{}\\", (a));"
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
          'const b = { attrib : `a${asl.deploy.getParameter("param")} c` };'
      )
    ).toMatchInlineSnapshot(`
      "const a = { attrib: \\"abc[!parameter[param]]\\" };
      const b = { attrib: \\"a[!parameter[param]] c\\" };"
    `);
  });
});
