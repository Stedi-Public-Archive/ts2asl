import { runConvertForTest } from "../utility";
describe("when converting enums", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("enums");
  });
  it("then compareEnum can be converted to asl", async () => {
    expect(converted.compareEnum.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign x": Object {
            "Comment": "source: x = ExampleEnum.A",
            "Next": "If (x === ExampleEnum.A)",
            "Result": 0,
            "ResultPath": "$.vars.x",
            "Type": "Pass",
          },
          "If (x === ExampleEnum.A)": Object {
            "Choices": Array [
              Object {
                "Next": "Return \\"success\\"",
                "NumericEquals": 0,
                "Variable": "$.vars.x",
              },
            ],
            "Comment": "source: if (x === ExampleEnum.A) { return \\"success\\" }",
            "Default": "Return \\"fail\\"",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign x",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"fail\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "fail",
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
  it("then compareStringEnum can be converted to asl", async () => {
    expect(converted.compareStringEnum.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign x": Object {
            "Comment": "source: x = ExampleEnumString.A",
            "Next": "If (x === ExampleEnumStri ...",
            "Result": "a",
            "ResultPath": "$.vars.x",
            "Type": "Pass",
          },
          "If (x === ExampleEnumStri ...": Object {
            "Choices": Array [
              Object {
                "Next": "Return \\"success\\"",
                "StringEquals": "a",
                "Variable": "$.vars.x",
              },
            ],
            "Comment": "source: if (x === ExampleEnumString.A) { return \\"succe ...",
            "Default": "Return \\"fail\\"",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign x",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return \\"fail\\"": Object {
            "Comment": undefined,
            "End": true,
            "Result": "fail",
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
