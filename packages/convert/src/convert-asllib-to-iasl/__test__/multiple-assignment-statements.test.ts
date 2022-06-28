import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting pass statements to iasl", () => {
  it("then statements object literal expressions get converted", () => {
    const code = `
    import * as asl from "@ts2asl/asl-lib";

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
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "aaaa",
              "type": "string",
            },
            "source": "aaaa = asl.pass({ parameters: 'hello', comment: 'some random comment' })",
            "stateName": "Assign aaaa",
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
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "aaaa",
              "type": "unknown",
            },
            "stateName": "Assign aaaa",
          },
        ],
      }
    `);
  });

  it("then statements object literal expressions that contain identifiers get converted well", () => {
    const code = `
    import * as asl from "@ts2asl/asl-lib";
    const aaaa = asl.pass({ parameters: { field: xxx, another: 'literal', third: 23 }}); 
    aaaa = asl.pass({ parameters: {field: xxx.elements[0], fn: asl.states.format('Hello, my name is {}.', name)    } });`;
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
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "aaaa",
              "type": "object",
            },
            "source": "aaaa = asl.pass({ parameters: { field: xxx, another: 'literal', third: 23 }})",
            "stateName": "Assign aaaa",
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
                    "identifier": "",
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
                    "type": "unknown",
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
                    "function": "asl.states.format",
                    "type": "string",
                  },
                },
              },
              "source": undefined,
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "aaaa",
              "type": "unknown",
            },
            "stateName": "Assign aaaa",
          },
        ],
      }
    `);
  });

  it("then statements object literal expressions that contain identifiers get converted well", () => {
    const code = `
import * as asl from "@ts2asl/asl-lib";

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
              "stateName": undefined,
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "aaaa",
              "type": "unknown",
            },
            "source": "aaaa = asl.pass({ parameters: arg })",
            "stateName": "Assign aaaa",
          },
        ],
      }
    `);
  });
});
