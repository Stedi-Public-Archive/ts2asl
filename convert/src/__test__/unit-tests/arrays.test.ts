import { runConvertForTest } from "../utility";
describe("when converting arrays", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("arrays");
  });
  it("then mapArraySimple can be converted to asl", async () => {
    expect(converted.mapArraySimple.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign ages": Object {
            "Comment": "source: mappedArray.map(x => x.age)",
            "ItemsPath": "$.vars.mappedArray",
            "Iterator": Object {
              "StartAt": "Assign ???",
              "States": Object {
                "Assign ???": Object {
                  "Comment": undefined,
                  "InputPath": "$.vars.x.age",
                  "Next": "Pass",
                  "ResultPath": "$.vars.return_var",
                  "Type": "Pass",
                },
                "Pass": Object {
                  "Comment": undefined,
                  "End": true,
                  "InputPath": "$.vars.return_var",
                  "Type": "Pass",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Assign species",
            "Parameters": Object {
              "vars": Object {
                "x.$": "$$.Map.Item.Value",
              },
            },
            "ResultPath": "$.vars.ages",
            "Type": "Map",
          },
          "Assign mappedArray": Object {
            "Comment": "source: mappedArray = [{ age: 1, species: \\"dog\\" }, { a ...",
            "Next": "Assign ages",
            "Result": Array [
              Object {
                "age": 1,
                "species": "dog",
              },
              Object {
                "age": 2,
                "species": "cat",
              },
              Object {
                "age": 3,
                "species": "dog",
              },
              Object {
                "age": 4,
                "species": "cat",
              },
              Object {
                "age": 11,
                "species": "dog",
              },
              Object {
                "age": 12,
                "species": "car",
              },
              Object {
                "age": 13,
                "species": "dog",
              },
              Object {
                "age": 14,
                "species": "cat",
              },
            ],
            "ResultPath": "$.vars.mappedArray",
            "Type": "Pass",
          },
          "Assign species": Object {
            "Comment": "source: mappedArray.map(x => x.species)",
            "ItemsPath": "$.vars.mappedArray",
            "Iterator": Object {
              "StartAt": "Assign ???_1",
              "States": Object {
                "Assign ???_1": Object {
                  "Comment": undefined,
                  "InputPath": "$.vars.x.species",
                  "Next": "Pass_1",
                  "ResultPath": "$.vars.return_var",
                  "Type": "Pass",
                },
                "Pass_1": Object {
                  "Comment": undefined,
                  "End": true,
                  "InputPath": "$.vars.return_var",
                  "Type": "Pass",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Next": "Pass_2",
            "Parameters": Object {
              "vars": Object {
                "x.$": "$$.Map.Item.Value",
              },
            },
            "ResultPath": "$.vars.species",
            "Type": "Map",
          },
          "Initialize": Object {
            "Next": "Assign mappedArray",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass_2": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "ages.$": "$.vars.ages",
              "species.$": "$.vars.species",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
