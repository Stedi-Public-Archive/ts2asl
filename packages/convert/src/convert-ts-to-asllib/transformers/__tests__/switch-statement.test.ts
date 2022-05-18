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
      "asl.typescriptSwitch({
          name: \\"Switch (color)\\",
          expression: () => color,
          cases: [
              {
                  label: \\"red\\",
                  block: async () => {
                      console.log(\\"red\\");
                      break;
                  }
              },
              {
                  block: async () => {
                      console.log(\\"not-red\\");
                      break;
                  }
              }
          ],
          comment: \\"switch (color) {\\\\n          case \\\\\\"red\\\\\\":\\\\n            console.log(\\\\\\"red\\\\\\")\\\\n            break;\\\\n        \\\\n          default:\\\\n            console.log(\\\\\\"not-red\\\\\\")\\\\n            break;\\\\n        }\\"
      })"
    `);
  });
  it("when labels fall through", () => {
    expect(
      testTransform(
        `switch (color) {
          case "orange":
            console.log("red");
          case "red":
            console.log("red");
            break;
        
          default:
            console.log("not-red")
            break;
        }`,
        switchStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptSwitch({
          name: \\"Switch (color)\\",
          expression: () => color,
          cases: [
              {
                  label: \\"orange\\",
                  block: async () => {
                      console.log(\\"red\\");
                  }
              },
              {
                  label: \\"red\\",
                  block: async () => {
                      console.log(\\"red\\");
                      break;
                  }
              },
              {
                  block: async () => {
                      console.log(\\"not-red\\");
                      break;
                  }
              }
          ],
          comment: \\"switch (color) {\\\\n          case \\\\\\"orange\\\\\\":\\\\n            console.log(\\\\\\"red\\\\\\");\\\\n          case \\\\\\"red\\\\\\":\\\\n            console.log(\\\\\\"red\\\\\\");\\\\n            break;\\\\n        \\\\n          default:\\\\n            console.log(\\\\\\"not-red\\\\\\")\\\\n            break;\\\\n        }\\"
      })"
    `);
  });
  it("when labels fall to default", () => {
    expect(
      testTransform(
        `switch (color) {
          case "orange":
          default:
            console.log("any color")
            break;
        }`,
        switchStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptSwitch({
          name: \\"Switch (color)\\",
          expression: () => color,
          cases: [
              {
                  label: \\"orange\\"
              },
              {
                  block: async () => {
                      console.log(\\"any color\\");
                      break;
                  }
              }
          ],
          comment: \\"switch (color) {\\\\n          case \\\\\\"orange\\\\\\":\\\\n          default:\\\\n            console.log(\\\\\\"any color\\\\\\")\\\\n            break;\\\\n        }\\"
      })"
    `);
  });
  it("when default falls through to label", () => {
    expect(
      testTransform(
        `switch (color) {
          default:
          case "orange":
            console.log("not red")
            break;
          case "red":
            console.log("red")
            break;
        }`,
        switchStatementTransformer({})
      )
    ).toMatchInlineSnapshot(`
      "asl.typescriptSwitch({
          name: \\"Switch (color)\\",
          expression: () => color,
          cases: [
              {},
              {
                  label: \\"orange\\",
                  block: async () => {
                      console.log(\\"not red\\");
                      break;
                  }
              },
              {
                  label: \\"red\\",
                  block: async () => {
                      console.log(\\"red\\");
                      break;
                  }
              }
          ],
          comment: \\"switch (color) {\\\\n          default:\\\\n          case \\\\\\"orange\\\\\\":\\\\n            console.log(\\\\\\"not red\\\\\\")\\\\n            break;\\\\n          case \\\\\\"red\\\\\\":\\\\n            console.log(\\\\\\"red\\\\\\")\\\\n            break;\\\\n        }\\"
      })"
    `);
  });
});
