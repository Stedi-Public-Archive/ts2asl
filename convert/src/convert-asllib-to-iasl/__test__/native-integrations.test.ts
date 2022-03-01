import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting native integration statements to iasl", () => {
  it("then native integrations get converted to task states", () => {
    const code = `
    import * as asl from 'asl-lib';

    const aaaa = asl.nativeDynamoDBGetItem({ 
        TableName: "mytable", 
        Key: { "pk": { S: "something"}, "sk": { S: "something"} } 
    });`;
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
              "_syntaxKind": "asl-task-state",
              "parameters": Object {
                "_syntaxKind": "literal-object",
                "properties": Object {
                  "Key": Object {
                    "_syntaxKind": "literal-object",
                    "properties": Object {
                      "pk": Object {
                        "_syntaxKind": "literal-object",
                        "properties": Object {
                          "S": Object {
                            "_syntaxKind": "literal",
                            "type": "string",
                            "value": "something",
                          },
                        },
                      },
                      "sk": Object {
                        "_syntaxKind": "literal-object",
                        "properties": Object {
                          "S": Object {
                            "_syntaxKind": "literal",
                            "type": "string",
                            "value": "something",
                          },
                        },
                      },
                    },
                  },
                  "TableName": Object {
                    "_syntaxKind": "literal",
                    "type": "string",
                    "value": "mytable",
                  },
                },
              },
              "resource": "arn:aws:states:::aws-sdk:dynamodb:getItem",
              "source": undefined,
              "stateName": "GetItem",
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
