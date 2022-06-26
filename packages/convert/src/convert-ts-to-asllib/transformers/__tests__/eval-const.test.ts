import { testTransform } from "../../__tests__/test-transform";

describe("when evaluating const", () => {
  it("then call gets replaced with numeric value", () => {
    const code = `
      const num = 42;
      const x = asl.deploy.evalConst(num);
      `;
    const result = testTransform(code);
    expect(result).toMatchInlineSnapshot(`
      "const num = 42;
      const x = 42;"
    `);
  });
  it("then call gets replaced with string value", () => {
    const code = `
      const str = "abc";
      const x = asl.deploy.evalConst(str);
      `;
    const result = testTransform(code);
    expect(result).toMatchInlineSnapshot(`
      "const str = \\"abc\\";
      const x = \\"abc\\";"
    `);
  });
  it("then call gets replaced with bool value", () => {
    const code = `
      const b = true;
      const x = asl.deploy.evalConst(b);
      `;
    const result = testTransform(code);
    expect(result).toMatchInlineSnapshot(`
      "const b = true;
      const x = true;"
    `);
  });
  it("then call gets replaced with object value", () => {
    const code = `
      const o = {bool: true, str: "abc", num: 42};
      const x = asl.deploy.evalConst(o);
      `;
    const result = testTransform(code);
    expect(result).toMatchInlineSnapshot(`
      "const o = { bool: true, str: \\"abc\\", num: 42 };
      const x = { bool: true, str: \\"abc\\", num: 42 };"
    `);
  });

  it("then call gets replaced with array value", () => {
    const code = `
      const arr = [1, 2, 3, 4];
      const x = asl.deploy.evalConst(arr);
      `;
    const result = testTransform(code);
    expect(result).toMatchInlineSnapshot(`
      "const arr = [1, 2, 3, 4];
      const x = [1, 2, 3, 4];"
    `);
  });
});
