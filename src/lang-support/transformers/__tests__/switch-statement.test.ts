import { testTransform } from "../../__tests__/test-transform";
import { switchStatementTransformer } from "../switch-statement";

describe("when converting switch statements", () => {
  it("then result is a choice", () => {
    expect(
      testTransform(
        `switch (color) {
          case "red":
            console.log("red")
            break;
        
          default:
            console.log("not-red")
            break;
        }`,
        switchStatementTransformer
      )
    ).toMatchInlineSnapshot(`
      "ASL.Choice({ Choices: [{ Variable: \\"$.color\\", StringEquals: \\"red\\", NextInvoke: () => {
                      console.log(\\"red\\");
                  } }], DefaultInvoke: () => {
              console.log(\\"not-red\\");
          } })"
    `);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
