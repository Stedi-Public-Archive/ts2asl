import { testTranspile } from "./test-transpile";

describe("when transpiling wait state", () => {
  it("then literal seconds are passed to Seconds attribute", () => {
    const code = `ASL.Wait({ Seconds: 32 });`;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Wait",
        "States": Object {
          "Wait": Object {
            "End": true,
            "Seconds": 32,
            "Type": "Wait",
          },
        },
      }
    `);
  });

  it("then ref seconds are passed to Seconds attribute", () => {
    const code = `ASL.Wait({ Seconds: variableName });`;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Wait",
        "States": Object {
          "Wait": Object {
            "End": true,
            "SecondsPath": "$.variableName",
            "Type": "Wait",
          },
        },
      }
    `);
  });

  it("then literal timestamp is passed to Timestamp attribute", () => {
    const code = `ASL.Wait({ Timestamp: '20220909T22:33:00' });`;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Wait",
        "States": Object {
          "Wait": Object {
            "End": true,
            "Timestamp": "20220909T22:33:00",
            "Type": "Wait",
          },
        },
      }
    `);
  });

  it("then ref timestamp is passed to Timestamp attribute", () => {
    const code = `ASL.Wait({ Timestamp: variableName });`;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Wait",
        "States": Object {
          "Wait": Object {
            "End": true,
            "TimestampPath": "$.variableName",
            "Type": "Wait",
          },
        },
      }
    `);
  });
});
