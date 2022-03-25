import { runConvertForTest } from "../utility";
describe("when converting closures", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("closures");
  });
  it("then main can be converted to asl", async () => {
    expect(converted.main.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign global": Object {
            "Comment": "source: global = \\"prefix\\"",
            "Next": "Assign outer",
            "Result": "prefix",
            "ResultPath": "$.vars.global",
            "Type": "Pass",
          },
          "Assign letters": Object {
            "Comment": "source: letters = [\\"a\\", \\"b\\", \\"c\\", \\"d\\"]",
            "Next": "Assign global",
            "Result": Array [
              "a",
              "b",
              "c",
              "d",
            ],
            "ResultPath": "$.vars.letters",
            "Type": "Pass",
          },
          "Assign numbers": Object {
            "Comment": "source: numbers = [0, 1, 2, 3]",
            "Next": "Assign letters",
            "Result": Array [
              0,
              1,
              2,
              3,
            ],
            "ResultPath": "$.vars.numbers",
            "Type": "Pass",
          },
          "Assign outer": Object {
            "Comment": "source: outer = { middle: { inner: 3 } }",
            "Next": "For number Of numbers",
            "Result": Object {
              "middle": Object {
                "inner": 3,
              },
            },
            "ResultPath": "$.vars.outer",
            "Type": "Pass",
          },
          "For number Of numbers": Object {
            "Comment": undefined,
            "End": true,
            "ItemsPath": "$.vars.numbers",
            "Iterator": Object {
              "StartAt": "For letter Of letters",
              "States": Object {
                "For letter Of letters": Object {
                  "Comment": undefined,
                  "End": true,
                  "ItemsPath": "$.vars.letters",
                  "Iterator": Object {
                    "StartAt": "Assign combined",
                    "States": Object {
                      "Assign combined": Object {
                        "Comment": "source: combined = { number, letter, global, inner: ou ...",
                        "Next": "doSomething(combined)",
                        "Parameters": Object {
                          "global.$": "$.vars.global",
                          "inner.$": "$.vars.outer.middle.inner",
                          "letter.$": "$.vars.letter",
                          "number.$": "$.vars.number",
                        },
                        "ResultPath": "$.vars.combined",
                        "Type": "Pass",
                      },
                      "doSomething(combined)": Object {
                        "Comment": "source: doSomething(combined)",
                        "End": true,
                        "HeartbeatSeconds": undefined,
                        "InputPath": "$.vars.combined",
                        "Resource": "[!lambda[doSomething]arn]",
                        "Retry": Array [
                          Object {
                            "BackoffRate": 2,
                            "ErrorEquals": Array [
                              "Lambda.ServiceException",
                              "Lambda.AWSLambdaException",
                              "Lambda.SdkClientException",
                            ],
                            "IntervalSeconds": 2,
                            "MaxAttempts": 6,
                          },
                        ],
                        "TimeoutSeconds": undefined,
                        "Type": "Task",
                      },
                    },
                  },
                  "MaxConcurrency": undefined,
                  "Parameters": Object {
                    "vars": Object {
                      "global.$": "$.vars.global",
                      "letter.$": "$$.Map.Item.Value",
                      "number.$": "$.vars.number",
                      "outer.$": "$.vars.outer",
                    },
                  },
                  "ResultPath": "$.tmp.lastResult",
                  "Type": "Map",
                },
              },
            },
            "MaxConcurrency": undefined,
            "Parameters": Object {
              "vars": Object {
                "global.$": "$.vars.global",
                "letters.$": "$.vars.letters",
                "number.$": "$$.Map.Item.Value",
                "outer.$": "$.vars.outer",
              },
            },
            "ResultPath": "$.tmp.lastResult",
            "Type": "Map",
          },
          "Initialize": Object {
            "Next": "Assign numbers",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
