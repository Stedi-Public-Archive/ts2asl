import { runConvertForTest } from "./utility";

describe("when converting binary-expressions", () => {
  let converted;

  beforeAll(() => {
    converted = runConvertForTest("binary-expressions");
  });

  it("then can convert concatStrings", async () => {
    expect(converted.concatStrings.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Pass",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": "source: console.log({ a: \\"hello\\" + \\" world \\", b: \\"a\\" + ...",
            "End": true,
            "Result": Object {
              "a": "hello world ",
              "b": "abc",
              "c": "abc",
              "d": "n=42;",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });

  it("then can convert numbers", async () => {
    expect(converted.numbers.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Pass",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": "source: console.log({ a: 10 + 10, b: 30 - 10, c: 10 *  ...",
            "End": true,
            "Result": Object {
              "a": 20,
              "b": 20,
              "c": 20,
              "d": 20,
              "e": 40,
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then can convert parameters", async () => {
    expect(converted.parameters.asl).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Pass",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Pass": Object {
            "Comment": "source: console.log({ a: asl.deploy.getParameter(\\"buck ...",
            "End": true,
            "Result": Object {
              "a": "bucketName",
              "b": "s3:::arn:bucketName",
              "c": "value -> bucketName <- value",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
