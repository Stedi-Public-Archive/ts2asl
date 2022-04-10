import { runConvertForTest } from "../utility";
describe("when converting string-templates", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("string-templates");
  });
  it("then stringTemplates can be converted to asl", async () => {
    expect(converted.stringTemplates.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.30.",
        "StartAt": "Initialize",
        "States": Object {
          "Assign variable": Object {
            "Comment": "source: variable = \\"some var\\"",
            "Next": "Return { b: \`hello \${ ...",
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
          "Return { b: \`hello \${ ...": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "b.$": "States.Format('hello {}', $.vars.variable)",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
