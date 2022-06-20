import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting input parameter reference to iasl", () => {
  it("then input parameter is identifier", () => {
    const code = `
    asl.pass({parameters: input})`;
    const result = testConvertToIntermediaryAst(code, "input");
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": Object {
          "_syntaxKind": "identifier",
          "identifier": "input",
          "type": "object",
        },
        "statements": Array [
          Object {
            "_syntaxKind": "asl-pass-state",
            "parameters": Object {
              "_syntaxKind": "identifier",
              "identifier": "input",
              "type": "unknown",
            },
          },
        ],
      }
    `);
  });
});
