import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting pass statements to iasl", () => {
  it("then statements object literal expressions get converted", () => {
    const code = `const aaaa = asl.pass({ parameters: 'hello', comment: 'some random comment' }); aaaa = asl.pass({ parameters: 'hello' });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "_syntaxKind": "assignment",
          "expression": Object {
            "_syntaxKind": "asl-pass-state",
            "comment": "some random comment",
            "parameters": Object {
              "_syntaxKind": "literal",
              "type": "string",
              "value": "hello",
            },
          },
          "name": Object {
            "_syntaxKind": "identifier",
            "identifier": "aaaa",
          },
        },
        Object {
          "_syntaxKind": "assignment",
          "expression": Object {
            "_syntaxKind": "asl-pass-state",
            "comment": undefined,
            "parameters": Object {
              "_syntaxKind": "literal",
              "type": "string",
              "value": "hello",
            },
          },
          "name": Object {
            "_syntaxKind": "identifier",
            "identifier": "aaaa",
          },
        },
      ]
    `);
  });

  it("then statements object literal expressions that contain identifiers get converted well", () => {
    const code = `const aaaa = ASL.pass({ parameters: { field: xxx, another: 'literal', third: 23 }}); aaaa = ASL.pass({ parameters: {field: xxx.elements[0], fn: states.format('Hello, my name is {}.', name)    } });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "_syntaxKind": "assignment",
          "expression": Object {
            "_syntaxKind": "asl-pass-state",
            "comment": undefined,
            "parameters": Object {
              "_syntaxKind": "literal-object",
              "properties": Object {
                "another": Object {
                  "_syntaxKind": "literal",
                  "type": "string",
                  "value": "literal",
                },
                "field": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "xxx",
                },
                "third": Object {
                  "_syntaxKind": "literal",
                  "type": "numeric",
                  "value": 23,
                },
              },
            },
          },
          "name": Object {
            "_syntaxKind": "identifier",
            "identifier": "aaaa",
          },
        },
        Object {
          "_syntaxKind": "assignment",
          "expression": Object {
            "_syntaxKind": "asl-pass-state",
            "comment": undefined,
            "parameters": Object {
              "_syntaxKind": "literal-object",
              "properties": Object {
                "field": Object {
                  "_syntaxKind": "identifier",
                  "identifier": "xxx.elements",
                  "indexExpression": Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 0,
                  },
                  "lhs": Object {
                    "_syntaxKind": "identifier",
                    "identifier": "xxx.elements",
                  },
                },
                "fn": Object {
                  "_syntaxKind": "asl-intrinsic-function",
                  "arguments": Array [
                    Object {
                      "_syntaxKind": "literal",
                      "type": "string",
                      "value": "Hello, my name is {}.",
                    },
                    Object {
                      "_syntaxKind": "identifier",
                      "identifier": "name",
                    },
                  ],
                  "function": "states.format",
                },
              },
            },
          },
          "name": Object {
            "_syntaxKind": "identifier",
            "identifier": "aaaa",
          },
        },
      ]
    `);
  });

  it("then statements object literal expressions that contain identifiers get converted well", () => {
    const code = `const aaaa = ASL.pass({ parameters: arg }); `;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Array [
        Object {
          "_syntaxKind": "assignment",
          "expression": Object {
            "_syntaxKind": "asl-pass-state",
            "comment": undefined,
            "parameters": Object {
              "_syntaxKind": "identifier",
              "identifier": "arg",
            },
          },
          "name": Object {
            "_syntaxKind": "identifier",
            "identifier": "aaaa",
          },
        },
      ]
    `);
  });
});
