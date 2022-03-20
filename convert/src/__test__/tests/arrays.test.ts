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
            "Comment": undefined,
            "InputPath": "$.vars.mappedArray..age",
            "Next": "Assign species",
            "ResultPath": "$.vars.ages",
            "Type": "Pass",
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
            "Comment": undefined,
            "InputPath": "$.vars.mappedArray..species",
            "Next": "Pass",
            "ResultPath": "$.vars.species",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign mappedArray",
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
