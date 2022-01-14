import { testTranspile } from "./test-transpile";

describe("when transpiling variable assignments", () => {
  it("then variable ends up in result path", () => {
    const code = `const variableName = ASL.Pass({ Result: 'hello' });`;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Assign_variableName",
        "States": Object {
          "Assign_variableName": Object {
            "End": true,
            "Result": "hello",
            "ResultPath": "$.variableName",
            "Type": "Pass",
          },
        },
      }
    `);
  });

  it("then two variable assignments end up as is startAt, Next and End", () => {
    const code = `const variableName = ASL.Pass({ Result: 'hello' }); const anotherVar = ASL.Pass({ Result: 'hello' }); `;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Assign_variableName",
        "States": Object {
          "Assign_anotherVar": Object {
            "End": true,
            "Result": "hello",
            "ResultPath": "$.anotherVar",
            "Type": "Pass",
          },
          "Assign_variableName": Object {
            "Next": "Assign_anotherVar",
            "Result": "hello",
            "ResultPath": "$.variableName",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("variable can be number", () => {
    const code = `const variableName = ASL.Pass({ Result: 42 });`;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Assign_variableName",
        "States": Object {
          "Assign_variableName": Object {
            "End": true,
            "Result": 42,
            "ResultPath": "$.variableName",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("variable can be object", () => {
    const code = `const variableName = ASL.Pass({ Result: {field: 'value'; number: 42, bool: true} });`;
    const result = testTranspile(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Assign_variableName",
        "States": Object {
          "Assign_variableName": Object {
            "End": true,
            "Result": Object {
              "bool": true,
              "field": "value",
              "number": 42,
            },
            "ResultPath": "$.variableName",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
