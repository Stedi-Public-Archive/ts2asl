import { runConvertForTest } from "./utility";

describe("when converting string-templates", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("string-templates");
  });

  it("then can convert stringTemplates", async () => {
    expect(converted.stringTemplates.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign variable": Object {
            "Comment": "source: variable = \\"some var\\"",
            "Next": "Pass",
            "Result": "some var",
            "ResultPath": "$.vars.variable",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign variable",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": "source: console.log({ b: \`hello \${variable}\`, })",
            "End": true,
            "Parameters": Object {
              "b.$": "States.Format('hello {}', [
        null
      ])",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
