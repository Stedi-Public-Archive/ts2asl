import { testTransform } from "../../__tests__/test-transform";
import { arrayFilterTransformer } from "../array-filter-statement";
import { arrayMapTransformer } from "../array-map-statement";

describe("when converting array map statements", () => {
  it("simple return gets transformed", () => {
    expect(
      testTransform(
        'const x = items.map(x => return "something";);',
        arrayMapTransformer
      )
    ).toMatchInlineSnapshot(`
      "const x = asl.map({
          name: \\"For x Of items.map\\",
          items: () => items,
          iterator: x => { return \\"something\\"; },
          comment: \\"items.map(x => return \\\\\\"something\\\\\\";)\\"
      });"
    `);
  });

  it("function with body gets transformed", () => {
    expect(
      testTransform(
        `const x = items.map(x => { console.log(x); return asl.states.format("something {}", x); });`,
        arrayMapTransformer
      )
    ).toMatchInlineSnapshot(`
      "const x = asl.map({
          name: \\"For x Of items.map\\",
          items: () => items,
          iterator: x => { console.log(x); return asl.states.format(\\"something {}\\", x); },
          comment: \\"items.map(x => { console.log(x); return asl.states.format(\\\\\\"something {}\\\\\\", x); })\\"
      });"
    `);
  });
  it("parenthesized object literal gets transformed  ", () => {
    expect(
      testTransform(
        `const x = items.map(x => ({x: x, num: 32}));`,
        arrayMapTransformer
      )
    ).toMatchInlineSnapshot(`
      "const x = asl.map({
          name: \\"For x Of items.map\\",
          items: () => items,
          iterator: x => { return ({ x: x, num: 32 }); },
          comment: \\"items.map(x => ({x: x, num: 32}))\\"
      });"
    `);
  });
});
