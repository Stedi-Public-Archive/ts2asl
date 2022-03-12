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
        switchStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.choice({
          name: \\"Switch (color)\\",
          choices: [
              {
                  block: async () => {
                      console.log(\\"red\\");
                  },
                  condition: () => \\"red\\"
              }
          ],
          default: async () => {
              console.log(\\"not-red\\");
          },
          comment: \\"switch (color) {\\\\n          case \\\\\\"red\\\\\\":\\\\n            console.log(\\\\\\"red\\\\\\")\\\\n            break;\\\\n        \\\\n          default:\\\\n            console.log(\\\\\\"not-red\\\\\\")\\\\n            break;\\\\n        }\\"
      })"
    `);
  });

  // it("then equals is supported on boolean ", () => {
  //   expect(testTransform("if (optIn === true) console.log();", ifStatementTransformer)).toMatchInlineSnapshot();
  // });
});
