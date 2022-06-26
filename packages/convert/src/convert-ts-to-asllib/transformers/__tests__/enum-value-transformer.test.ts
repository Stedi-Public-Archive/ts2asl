import { testTransform } from "../../__tests__/test-transform";
import { arrayFilterTransformer } from "../array-filter-statement";
import { enumValueTransformer } from "../enum-values";
import { consoleLogStatementTransformer } from "../log-statement";

describe("when converting enum literal statements", () => {
  it("enum is converted to underlying value", () => {
    const code = `

enum ExampleEnum {
  "A",
  "B"
}

const x = ExampleEnum.A;
    `;

    expect(testTransform(code)).toMatchInlineSnapshot(`
      "enum ExampleEnum {
          \\"A\\",
          \\"B\\"
      }
      const x = 0;"
    `);
  });

  it("string enum is converted to underlying value", () => {
    const code = `

enum ExampleEnum {
  "A" = "real a",
  "B = "real b"
}

const x = ExampleEnum.A;
    `;

    expect(testTransform(code)).toMatchInlineSnapshot(`
      "enum ExampleEnum {
          \\"A\\" = \\"real a\\",
          \\"B = \\",
          real,
          b,
          \\"
      }
      const x = \\"real a\\";"
    `);
  });
  it("enum is returned by property access expression", () => {
    const code = `

enum ExampleEnum {
  "A",
  "B"
}

const x = (Something.Leaf as {A: ExampleEnum}).A;
    `;

    expect(testTransform(code)).toMatchInlineSnapshot(`
      "enum ExampleEnum {
          \\"A\\",
          \\"B\\"
      }
      const x = Something.Leaf.A;"
    `);
  });
});
