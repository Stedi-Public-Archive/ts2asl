import { runConvertForTest } from "../utility";
describe("when converting variables", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("variables");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign input.name": Object {
            "Comment": undefined,
            "Next": "Assign x",
            "Result": "fred",
            "ResultPath": "$.vars.name",
            "Type": "Pass",
          },
          "Assign x": Object {
            "Comment": "source: x = { name: input.name, executionId: context.e ...",
            "Next": "Pass",
            "Parameters": Object {
              "executionId.$": "$$.Execution.Id",
              "name.$": "$.vars.name",
            },
            "ResultPath": "$.vars.x",
            "Type": "Pass",
          },
          "Assign y": Object {
            "Comment": "source: y = { x, somethingLiteral: [\\"one\\", 2, \\"three\\"] ...",
            "Next": "Return y",
            "Parameters": Object {
              "arr.$": "States.Array(1, 2, 3, 4, 5, 6)",
              "fmt.$": "States.Format('hello {}', $.vars.x)",
              "func.$": "States.JsonToString($.vars.x)",
              "func2.$": "States.JsonToString($.tmp.arg0)",
              "number.$": "States.StringToJson('123')",
              "somethingLiteral": Array [
                "one",
                2,
                "three",
              ],
              "startTime.$": "$$.Execution.StartTime",
              "x.$": "$.vars.x",
            },
            "ResultPath": "$.vars.y",
            "Type": "Pass",
          },
          "If (typeof input.name !== ...": Object {
            "Choices": Array [
              Object {
                "Next": "Assign input.name",
                "Not": Object {
                  "And": Array [
                    Object {
                      "IsPresent": true,
                      "Variable": "$.vars.name",
                    },
                    Object {
                      "IsString": true,
                      "Variable": "$.vars.name",
                    },
                  ],
                },
              },
            ],
            "Comment": "source: if (typeof input.name !== \\"string\\") { input.na ...",
            "Default": "Assign x",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "If (typeof input.name !== ...",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Next": "Assign y",
            "Parameters": Object {
              "field": "val",
            },
            "ResultPath": "$.tmp.arg0",
            "Type": "Pass",
          },
          "Return y": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.y",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
