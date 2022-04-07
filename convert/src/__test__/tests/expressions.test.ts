import { runConvertForTest } from "../utility";
describe("when converting expressions", () => {
  let converted;
  beforeAll(() => {
    converted = runConvertForTest("expressions");
  });
  it("then concatStrings can be converted to asl", async () => {
    expect(converted.concatStrings.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.28.",
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Return",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return": Object {
            "Comment": undefined,
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
  it("then numbers can be converted to asl", async () => {
    expect(converted.numbers.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.28.",
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Return { a: 10 + 10, ...",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return { a: 10 + 10, ...": Object {
            "Comment": undefined,
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
  it("then booleans can be converted to asl", async () => {
    expect(converted.booleans.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.28.",
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Return { a: true, ...",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return { a: true, ...": Object {
            "Comment": undefined,
            "End": true,
            "Result": Object {
              "a": true,
              "b": false,
              "c": true,
              "d": false,
              "e": false,
              "f": true,
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then parameters can be converted to asl", async () => {
    expect(converted.parameters.asl).toMatchInlineSnapshot(`
      Object {
        "Comment": "ASL Generated using ts2asl version 0.1.28.",
        "StartAt": "Initialize",
        "States": Object {
          "Initialize": Object {
            "Next": "Return",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
          "Return": Object {
            "Comment": undefined,
            "End": true,
            "Result": Object {
              "a": "[!parameter[bucketName]]",
              "b": "s3:::arn:[!parameter[bucketName]]",
              "c": "value -> [!parameter[bucketName]] <- value",
            },
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
