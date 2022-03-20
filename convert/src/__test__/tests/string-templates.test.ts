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
