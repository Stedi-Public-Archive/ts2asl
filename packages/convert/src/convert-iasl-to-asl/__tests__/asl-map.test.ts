import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";
import { createTransformers } from "../../convert-ts-to-asllib/transformers";
import { testTransform } from "../../convert-ts-to-asllib/__tests__/test-transform";

describe("when transpiling simple statements", () => {
  it("then assignment ends up in result path (without block}", () => {
    const transformed = testTransform(
      `
      await asl.map({
        maxConcurrency: 5,
        items: array,
        iterator: (prefix) => worker({ prefix }),
      });
    `
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl, { skipVersionComment: true });
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Map",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Map": Object {
            "Comment": undefined,
            "End": true,
            "ItemsPath": "$.vars.array",
            "Iterator": Object {
              "StartAt": "worker({ prefix })",
              "States": Object {
                "worker({ prefix })": Object {
                  "Comment": "source: worker({ prefix })",
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "Parameters": Object {
                    "prefix.$": "$.vars.prefix",
                  },
                  "Resource": "[!lambda[worker]arn]",
                  "ResultPath": null,
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": 5,
            "Parameters": Object {
              "vars": Object {
                "prefix.$": "$$.Map.Item.Value",
              },
            },
            "ResultPath": null,
            "Type": "Map",
          },
        },
      }
    `);
  });
  it("then assignment ends up in result path (block)", () => {
    const transformed = testTransform(
      `
      await asl.map({
        maxConcurrency: 5,
        items: array,
        iterator: (prefix) => {void worker({ prefix });},
      });
    `
    );
    const iasl = testConvertToIntermediaryAst(transformed);
    const result = convert(iasl, { skipVersionComment: true });
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Map",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Map": Object {
            "Comment": undefined,
            "End": true,
            "ItemsPath": "$.vars.array",
            "Iterator": Object {
              "StartAt": "worker({ prefix })",
              "States": Object {
                "worker({ prefix })": Object {
                  "Comment": "source: worker({ prefix })",
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "Parameters": Object {
                    "prefix.$": "$.vars.prefix",
                  },
                  "Resource": "[!lambda[worker]arn]",
                  "ResultPath": null,
                  "TimeoutSeconds": undefined,
                  "Type": "Task",
                },
              },
            },
            "MaxConcurrency": 5,
            "Parameters": Object {
              "vars": Object {
                "prefix.$": "$$.Map.Item.Value",
              },
            },
            "ResultPath": null,
            "Type": "Map",
          },
        },
      }
    `);
  });
});
