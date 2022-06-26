import { runConvertForTest } from "../utility";
describe("when converting if", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("if");
  });
  it("then justIf can be converted to asl", async () => {
    expect(converted.justIf.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign val": Object {
            "Comment": "source: val = { a: \\"\\", b: \\"\\", c: \\"\\", d: \\"\\", e: \\"\\", f:  ...",
            "Next": "Assign val.a",
            "Result": Object {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
              "e": "",
              "f": "",
              "g": "",
            },
            "ResultPath": "$.vars.val",
            "Type": "Pass",
          },
          "Assign val.a": Object {
            "Comment": undefined,
            "Next": "If (true)",
            "Result": "before",
            "ResultPath": "$.vars.val.a",
            "Type": "Pass",
          },
          "Assign val.b": Object {
            "Comment": undefined,
            "Next": "Assign val.c",
            "Result": "true_1",
            "ResultPath": "$.vars.val.b",
            "Type": "Pass",
          },
          "Assign val.c": Object {
            "Comment": undefined,
            "Next": "Assign val.d",
            "Result": "true_2",
            "ResultPath": "$.vars.val.c",
            "Type": "Pass",
          },
          "Assign val.d": Object {
            "Comment": undefined,
            "Next": "Return val",
            "Result": "after",
            "ResultPath": "$.vars.val.d",
            "Type": "Pass",
          },
          "If (true)": Object {
            "Choices": Array [
              Object {
                "IsNull": false,
                "Next": "Assign val.b",
                "Variable": "$",
              },
            ],
            "Comment": "source: if (true) { val.b = \\"true_1\\"; val.c = \\"true_2\\"; }",
            "Default": "Assign val.d",
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
          "Return val": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.val",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then ifElse can be converted to asl", async () => {
    expect(converted.ifElse.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign val": Object {
            "Comment": "source: val = { a: \\"\\", b: \\"\\", c: \\"\\", d: \\"\\", e: \\"\\", f:  ...",
            "Next": "Assign val.a",
            "Result": Object {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
              "e": "",
              "f": "",
              "g": "",
            },
            "ResultPath": "$.vars.val",
            "Type": "Pass",
          },
          "Assign val.a": Object {
            "Comment": undefined,
            "Next": "If (true)",
            "Result": "before",
            "ResultPath": "$.vars.val.a",
            "Type": "Pass",
          },
          "Assign val.b": Object {
            "Comment": undefined,
            "Next": "Assign val.c",
            "Result": "true_1",
            "ResultPath": "$.vars.val.b",
            "Type": "Pass",
          },
          "Assign val.b_1": Object {
            "Comment": undefined,
            "Next": "Assign val.c_1",
            "Result": "false_1",
            "ResultPath": "$.vars.val.b",
            "Type": "Pass",
          },
          "Assign val.c": Object {
            "Comment": undefined,
            "Next": "Assign val.d",
            "Result": "true_2",
            "ResultPath": "$.vars.val.c",
            "Type": "Pass",
          },
          "Assign val.c_1": Object {
            "Comment": undefined,
            "Next": "Assign val.d",
            "Result": "false_2",
            "ResultPath": "$.vars.val.c",
            "Type": "Pass",
          },
          "Assign val.d": Object {
            "Comment": undefined,
            "Next": "Return val",
            "Result": "after",
            "ResultPath": "$.vars.val.d",
            "Type": "Pass",
          },
          "If (true)": Object {
            "Choices": Array [
              Object {
                "IsNull": false,
                "Next": "Assign val.b",
                "Variable": "$",
              },
            ],
            "Comment": "source: if (true) { val.b = \\"true_1\\"; val.c = \\"true_2\\" ...",
            "Default": "Assign val.b_1",
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
          "Return val": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.val",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then nestedIfs can be converted to asl", async () => {
    expect(converted.nestedIfs.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign val": Object {
            "Comment": "source: val = { a: \\"\\", b: \\"\\", c: \\"\\", d: \\"\\", e: \\"\\", f:  ...",
            "Next": "Assign val.a",
            "Result": Object {
              "a": "",
              "b": "",
              "c": "",
              "d": "",
              "e": "",
              "f": "",
              "g": "",
            },
            "ResultPath": "$.vars.val",
            "Type": "Pass",
          },
          "Assign val.a": Object {
            "Comment": undefined,
            "Next": "If (true)",
            "Result": "before",
            "ResultPath": "$.vars.val.a",
            "Type": "Pass",
          },
          "Assign val.b": Object {
            "Comment": undefined,
            "Next": "Assign val.c",
            "Result": "outer_1",
            "ResultPath": "$.vars.val.b",
            "Type": "Pass",
          },
          "Assign val.c": Object {
            "Comment": undefined,
            "Next": "If (true)_1",
            "Result": "outer_2",
            "ResultPath": "$.vars.val.c",
            "Type": "Pass",
          },
          "Assign val.d": Object {
            "Comment": undefined,
            "Next": "Assign val.e",
            "Result": "inner_1",
            "ResultPath": "$.vars.val.d",
            "Type": "Pass",
          },
          "Assign val.e": Object {
            "Comment": undefined,
            "Next": "Assign val.g",
            "Result": "inner_2",
            "ResultPath": "$.vars.val.e",
            "Type": "Pass",
          },
          "Assign val.e_1": Object {
            "Comment": undefined,
            "Next": "Assign val.g",
            "Result": "inner_else_2",
            "ResultPath": "$.vars.val.e",
            "Type": "Pass",
          },
          "Assign val.f": Object {
            "Comment": undefined,
            "Next": "Assign val.g",
            "Result": "outer_else_2",
            "ResultPath": "$.vars.val.f",
            "Type": "Pass",
          },
          "Assign val.g": Object {
            "Comment": undefined,
            "Next": "Return val",
            "Result": "after",
            "ResultPath": "$.vars.val.g",
            "Type": "Pass",
          },
          "If (true)": Object {
            "Choices": Array [
              Object {
                "IsNull": false,
                "Next": "Assign val.b",
                "Variable": "$",
              },
            ],
            "Comment": "source: if (true) { val.b = \\"outer_1\\"; val.c = \\"outer_ ...",
            "Default": "Assign val.f",
            "Type": "Choice",
          },
          "If (true)_1": Object {
            "Choices": Array [
              Object {
                "IsNull": false,
                "Next": "Assign val.d",
                "Variable": "$",
              },
            ],
            "Comment": "source: if (true) { val.d = \\"inner_1\\"; val.e = \\"inner_ ...",
            "Default": "Assign val.e_1",
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
          "Return val": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.val",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then enclosedVars can be converted to asl", async () => {
    expect(converted.enclosedVars.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign enclosedVar": Object {
            "Comment": "source: enclosedVar = \\"before\\"",
            "Next": "If (true)",
            "Result": "before",
            "ResultPath": "$.vars.enclosedVar",
            "Type": "Pass",
          },
          "Assign enclosedVar_1": Object {
            "Comment": undefined,
            "Next": "If (true)_1",
            "Result": "outer if",
            "ResultPath": "$.vars.enclosedVar",
            "Type": "Pass",
          },
          "Assign enclosedVar_2": Object {
            "Comment": undefined,
            "Next": "Return enclosedVar",
            "Result": "inner if",
            "ResultPath": "$.vars.enclosedVar",
            "Type": "Pass",
          },
          "Assign enclosedVar_3": Object {
            "Comment": undefined,
            "Next": "Return enclosedVar",
            "Result": "else if",
            "ResultPath": "$.vars.enclosedVar",
            "Type": "Pass",
          },
          "Assign enclosedVar_4": Object {
            "Comment": undefined,
            "Next": "Return enclosedVar",
            "Result": "outer else if",
            "ResultPath": "$.vars.enclosedVar",
            "Type": "Pass",
          },
          "If (true)": Object {
            "Choices": Array [
              Object {
                "IsNull": false,
                "Next": "Assign enclosedVar_1",
                "Variable": "$",
              },
            ],
            "Comment": "source: if (true) { enclosedVar = \\"outer if\\"; if (true ...",
            "Default": "Assign enclosedVar_4",
            "Type": "Choice",
          },
          "If (true)_1": Object {
            "Choices": Array [
              Object {
                "IsNull": false,
                "Next": "Assign enclosedVar_2",
                "Variable": "$",
              },
            ],
            "Comment": "source: if (true) { enclosedVar = \\"inner if\\"; } else { ...",
            "Default": "Assign enclosedVar_3",
            "Type": "Choice",
          },
          "Initialize": Object {
            "Next": "Assign enclosedVar",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return enclosedVar": Object {
            "Comment": undefined,
            "End": true,
            "InputPath": "$.vars.enclosedVar",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
