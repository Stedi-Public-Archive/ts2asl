import { runConvertForTest } from "../utility";
describe("when converting string-templates", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("string-templates");
  });
  it("then stringTemplates can be converted to asl", async () => {
    expect(converted.stringTemplates.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign variable": Object {
            "Comment": "source: variable = \\"some var\\"",
            "Next": "Return { hello: \`hell ...",
            "Result": "some var",
            "ResultPath": "$.vars.variable",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign variable",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return { hello: \`hell ...": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "hello.$": "States.Format('hello {}', $.vars.variable)",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then escapedCharacters can be converted to asl", async () => {
    expect(converted.escapedCharacters.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign variable": Object {
            "Comment": "source: variable = \\"some var\\"",
            "Next": "Return { hello: \`hell ...",
            "Result": "some var",
            "ResultPath": "$.vars.variable",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign variable",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return { hello: \`hell ...": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "backSlash.$": "States.Format('hello \\\\\\\\ + {}', $.vars.variable)",
              "curlyBrace.$": "States.Format('hello \\\\}\\\\{\\\\} + {}', $.vars.variable)",
              "emoji.$": "States.Format('hello 🙂 + {}', $.vars.variable)",
              "hello.$": "States.Format('hello {}', $.vars.variable)",
              "singleQuote.$": "States.Format('hello \\\\' + {}', $.vars.variable)",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
