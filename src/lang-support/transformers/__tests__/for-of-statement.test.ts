import { testTransform } from "../../__tests__/test-transform";
import { forOfStatementTransformer } from "../for-of-statement";

describe("when converting switch statements", () => {
  it("then result is a map", () => {
    expect(
      testTransform(
        `for(const element of collection) { 
          console.log(element) 
        }`,
        forOfStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "ASL.Map({
          ItemsPath: collection,
          Iterator: element => {
              console.log(element);
          }
      })"
    `);
  });

  it("then property access expression can be used", () => {
    expect(
      testTransform(
        `for(const element of result.list) { 
          console.log(element) 
        }`,
        forOfStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "ASL.Map({
          ItemsPath: result.list,
          Iterator: element => {
              console.log(element);
          }
      })"
    `);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
