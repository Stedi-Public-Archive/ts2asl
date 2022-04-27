import { testTransform } from "../../__tests__/test-transform";

describe("when evaluating const", () => {
  it("then call gets replaced with numeric value", () => {
    const code = `
      const num = 42;
      const x = asl.deploy.evalConst(num);
      `;
    const result = testTransform(code);
    expect(result).toMatchInlineSnapshot(`
      "const num = asl.pass({
          name: \\"Assign num\\",
          parameters: () => 42,
          comment: \\"num = 42\\"
      });
      const x = asl.pass({
          name: \\"Assign x\\",
          parameters: () => 42
      });"
    `);
  });
  it("then call gets replaced with string value", () => {
    const code = `
      const str = "abc";
      const x = asl.deploy.evalConst(str);
      `;
    const result = testTransform(code);
    expect(result).toMatchInlineSnapshot(`
      "const str = asl.pass({
          name: \\"Assign str\\",
          parameters: () => \\"abc\\",
          comment: \\"str = \\\\\\"abc\\\\\\"\\"
      });
      const x = asl.pass({
          name: \\"Assign x\\",
          parameters: () => \\"abc\\"
      });"
    `);
  });
  it("then call gets replaced with bool value", () => {
    const code = `
      const b = true;
      const x = asl.deploy.evalConst(b);
      `;
    const result = testTransform(code);
    expect(result).toMatchInlineSnapshot(`
      "const b = asl.pass({
          name: \\"Assign b\\",
          parameters: () => true,
          comment: \\"b = true\\"
      });
      const x = asl.pass({
          name: \\"Assign x\\",
          parameters: () => true
      });"
    `);
  });
  it("then call gets replaced with object value", () => {
    const code = `
      const o = {bool: true, str: "abc", num: 42};
      const x = asl.deploy.evalConst(o);
      `;
    const result = testTransform(code);
    expect(result).toMatchInlineSnapshot(`
      "const o = asl.pass({
          name: \\"Assign o\\",
          parameters: () => ({ bool: true, str: \\"abc\\", num: 42 }),
          comment: \\"o = {bool: true, str: \\\\\\"abc\\\\\\", num: 42}\\"
      });
      const x = asl.pass({
          name: \\"Assign x\\",
          parameters: () => ({ bool: true, str: \\"abc\\", num: 42 })
      });"
    `);
  });

  it("then call gets replaced with array value", () => {
    const code = `
      const arr = [1, 2, 3, 4];
      const x = asl.deploy.evalConst(arr);
      `;
    const result = testTransform(code);
    expect(result).toMatchInlineSnapshot(`
      "const arr = asl.pass({
          name: \\"Assign arr\\",
          parameters: () => [1, 2, 3, 4],
          comment: \\"arr = [1, 2, 3, 4]\\"
      });
      const x = asl.pass({
          name: \\"Assign x\\",
          parameters: () => [1, 2, 3, 4]
      });"
    `);
  });
});
