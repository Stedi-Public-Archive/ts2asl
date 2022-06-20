import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting typescript invoke to iasl", () => {
  it("then call get converted to task states", () => {
    const code = `
    import * as asl from 'asl-lib';
  
    asl.typescriptInvoke({
      resource: SayHello,
      parameters: () => arg.xxx,
      comment: "SayHello(arg.xxx)"
  });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "asl-task-state",
            "parameters": Object {
              "_syntaxKind": "identifier",
              "identifier": "arg.xxx",
              "type": "unknown",
            },
            "resource": "[!lambda[SayHello]arn]",
            "source": "SayHello(arg.xxx)",
            "stateName": "Invoke SayHello",
          },
        ],
      }
    `);
  });
  it("when passing input to task states", () => {
    const code = `
    import * as asl from 'asl-lib';
  
    asl.typescriptInvoke({
      resource: SayHello,
      parameters: () => input,

  });`;
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
            "_syntaxKind": "asl-task-state",
            "parameters": Object {
              "_syntaxKind": "identifier",
              "identifier": "input",
              "type": "unknown",
            },
            "resource": "[!lambda[SayHello]arn]",
            "stateName": "Invoke SayHello",
          },
        ],
      }
    `);
  });
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
            "_syntaxKind": "asl-map-state",
            "items": Object {
              "_syntaxKind": "identifier",
              "identifier": "result",
              "type": "unknown",
            },
            "iterator": Object {
              "_syntaxKind": "function",
              "inputArgumentName": Object {
                "_syntaxKind": "identifier",
                "identifier": "prefix",
                "type": "object",
              },
              "statements": Array [
                Object {
                  "_syntaxKind": "asl-task-state",
                  "parameters": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "input",
                    "type": "unknown",
                  },
                  "resource": "[!lambda[SayHello]arn]",
                  "stateName": "Invoke SayHello",
                },
              ],
            },
            "maxConcurrency": 5,
          },
        ],
      }
    `);
  });
});
