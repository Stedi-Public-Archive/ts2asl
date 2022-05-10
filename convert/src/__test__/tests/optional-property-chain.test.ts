import { runConvertForTest } from "../utility";
describe("when converting optional-property-chain", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("optional-property-chain");
  });
  it("then returnOptionalChain can be converted to asl", async () => {
    expect(converted.returnOptionalChain.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Conditional False": Object {
            "InputPath": "$._undefined",
            "Next": "Return args?.name",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.name",
            "Next": "Return args?.name",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Eval Conditional": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Eval Conditional",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return args?.name": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.tmp.var",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then assignOptionalChain can be converted to asl", async () => {
    expect(converted.assignOptionalChain.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign name": Object {
            "Comment": "source: name = args?.name",
            "InputPath": "$.tmp.var",
            "Next": "Return name",
            "ResultPath": "$.vars.name",
            "Type": "Pass",
          },
          "Conditional False": Object {
            "InputPath": "$._undefined",
            "Next": "Assign name",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.name",
            "Next": "Assign name",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Eval Conditional": Object {
            "Choices": Array [
              Object {
                "Next": "Conditional True",
                "Not": Object {
                  "Or": Array [
                    Object {
                      "IsPresent": false,
                      "Variable": "$.vars",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars",
                    },
                  ],
                },
              },
            ],
            "Comment": undefined,
            "Default": "Conditional False",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Eval Conditional",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return name": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.name",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
