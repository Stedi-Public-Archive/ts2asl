import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";

describe("when enclosing input", () => {
  it("when passing input to task states within map", () => {
    const code = `
    import * as asl from 'asl-lib';
    asl.map({
      maxConcurrency: 5,
      items: result,
      iterator: (prefix) =>
        asl.typescriptInvoke({
          resource: SayHello,
          parameters: () => input)};
  });`;
    const iasl = testConvertToIntermediaryAst(code, "input");
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
            "ItemsPath": "$.vars.result",
            "Iterator": Object {
              "StartAt": "Invoke SayHello",
              "States": Object {
                "Invoke SayHello": Object {
                  "Comment": undefined,
                  "End": true,
                  "HeartbeatSeconds": undefined,
                  "InputPath": "$.vars",
                  "Resource": "[!lambda[SayHello]arn]",
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
