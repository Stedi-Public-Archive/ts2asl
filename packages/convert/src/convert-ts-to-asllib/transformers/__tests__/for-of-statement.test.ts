import { testTransform } from "../../__tests__/test-transform";
import { forOfStatementTransformer } from "../for-of-statement";

describe("when converting switch statements", () => {
  it("then result is a map", () => {
    expect(
      testTransform(
        `for(const element of collection) { 
          console.log(element) 
        }`,
        forOfStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptForeach({
          name: \\"For element Of collection\\",
          items: () => collection,
          iterator: element => {
              console.log(element);
          },
          comment: \\"for(const element of collection) { \\\\n          console.log(element) \\\\n        }\\"
      })"
    `);
  });

  it("then property access expression can be used", () => {
    expect(
      testTransform(
        `for(const element of result.list) { 
          console.log(element) 
        }`,
        forOfStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptForeach({
          name: \\"For element Of result.list\\",
          items: () => result.list,
          iterator: element => {
              console.log(element);
          },
          comment: \\"for(const element of result.list) { \\\\n          console.log(element) \\\\n        }\\"
      })"
    `);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
