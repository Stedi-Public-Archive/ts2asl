import { runConvertForTest } from "../utility";
describe("when converting in-keyword", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("in-keyword");
  });
  it("then IfStatementWithInKeyword can be converted to asl", async () => {
    expect(converted.IfStatementWithInKeyword.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign val": Object {
            "Comment": "source: val = { greeting: \\"hello\\" }",
            "Next": "If (\\"greeting\\" in val && ...",
            "Result": Object {
              "greeting": "hello",
            },
            "ResultPath": "$.vars.val",
            "Type": "Pass",
          },
          "If (\\"greeting\\" in val && ...": Object {
            "Choices": Array [
              Object {
                "And": Array [
                  Object {
                    "IsPresent": true,
                    "Variable": "$.vars.val.greeting",
                  },
                  Object {
                    "Not": Object {
                      "IsPresent": true,
                      "Variable": "$.vars.val.somethingElse",
                    },
                  },
                ],
                "Next": "Return \\"success\\"",
              },
            ],
            "Comment": "source: if (\\"greeting\\" in val && !(\\"somethingElse\\" in  ...",
            "Default": "Return \\"failure\\"",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign val",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"failure\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "failure",
            "Type": "Pass",
          },
          "Return \\"success\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "success",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
