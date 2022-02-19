import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting pass statements to iasl", () => {
  it("then statements object literal expressions get converted", () => {
    const code = `
    import * as asl from "@cloudscript/asl-lib";

    const aaaa = asl.pass({ parameters: 'hello', comment: 'some random comment' }); 
    aaaa = asl.pass({ parameters: 'hello' });`;

    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal",
                "type": "string",
                "value": "hello",
              },
              "source": "some random comment",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "aaaa",
              "type": "string",
            },
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "literal",
                "type": "string",
                "value": "hello",
              },
              "source": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "aaaa",
              "type": "unknown",
            },
          },
        ],
      }
    `);
  });

  it("then statements object literal expressions that contain identifiers get converted well", () => {
    const code = `
    import * as asl from "@cloudscript/asl-lib";
    const aaaa = asl.pass({ parameters: { field: xxx, another: 'literal', third: 23 }}); 
    aaaa = asl.pass({ parameters: {field: xxx.elements[0], fn: states.format('Hello, my name is {}.', name)    } });`;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
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
                    "type": "unknown",
                  },
                  "third": Object {
                    "_syntaxKind": "literal",
                    "type": "numeric",
                    "value": 23,
                  },
                },
              },
              "source": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "aaaa",
              "type": "object",
            },
          },
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
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
                      "type": "unknown",
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
                        "type": "unknown",
                      },
                    ],
                    "function": "states.format",
                  },
                },
              },
              "source": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "aaaa",
              "type": "unknown",
            },
          },
        ],
      }
    `);
  });

  it("then statements object literal expressions that contain identifiers get converted well", () => {
    const code = `
import * as asl from "@cloudscript/asl-lib";

const aaaa = asl.pass({ parameters: arg }); `;
    const result = testConvertToIntermediaryAst(code);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "_syntaxKind": "statemachine",
        "contextArgumentName": undefined,
        "inputArgumentName": undefined,
        "statements": Array [
          Object {
            "_syntaxKind": "variable-assignment",
            "expression": Object {
              "_syntaxKind": "asl-pass-state",
              "parameters": Object {
                "_syntaxKind": "identifier",
                "identifier": "arg",
                "type": "unknown",
              },
              "source": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "aaaa",
              "type": "unknown",
            },
          },
        ],
      }
    `);
  });
});
