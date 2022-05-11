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
          "Assign obj": Object {
            "Comment": "source: obj = { name: \\"jim\\" }",
            "Next": "Eval Conditional",
            "Result": Object {
              "name": "jim",
            },
            "ResultPath": "$.vars.obj",
            "Type": "Pass",
          },
          "Conditional False": Object {
            "InputPath": "$._undefined",
            "Next": "Return obj?.name",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.obj.name",
            "Next": "Return obj?.name",
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
                      "Variable": "$.vars.obj",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.obj",
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
            "Next": "Assign obj",
            "Parameters": Object {
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return obj?.name": Object {
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
            "Comment": "source: name = obj?.name",
            "InputPath": "$.tmp.var",
            "Next": "Return name",
            "ResultPath": "$.vars.name",
            "Type": "Pass",
          },
          "Assign obj": Object {
            "Comment": "source: obj = { name: \\"jim\\" }",
            "Next": "Eval Conditional",
            "Result": Object {
              "name": "jim",
            },
            "ResultPath": "$.vars.obj",
            "Type": "Pass",
          },
          "Conditional False": Object {
            "InputPath": "$._undefined",
            "Next": "Assign name",
            "ResultPath": "$.tmp.var",
            "Type": "Pass",
          },
          "Conditional True": Object {
            "InputPath": "$.vars.obj.name",
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
                      "Variable": "$.vars.obj",
                    },
                    Object {
                      "IsNull": true,
                      "Variable": "$.vars.obj",
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
            "Next": "Assign obj",
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
