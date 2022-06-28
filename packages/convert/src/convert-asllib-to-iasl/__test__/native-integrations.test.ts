import { testConvertToIntermediaryAst } from "./test-convert";

describe("when converting sdk integration statements to iasl", () => {
  it("then sdk integrations get converted to task states", () => {
    const code = `
    import * as asl from 'asl-lib';

    const aaaa = asl.sdkDynamoDBGetItem({ 
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
              "catch": undefined,
              "parameters": Object {
                "_syntaxKind": "literal-object",
                "properties": Object {},
              },
              "resource": "arn:aws:states:::aws-sdk:dynamodb:getItem",
              "retry": undefined,
              "source": undefined,
              "stateName": "GetItem",
            },
            "name": Object {
              "_syntaxKind": "identifier",
              "identifier": "aaaa",
              "type": "unknown",
            },
            "source": "aaaa = asl.sdkDynamoDBGetItem({ 
              TableName: \\"mytable\\", 
              Key: { \\"pk\\": { S: \\"something\\"}, \\"sk\\": { S: \\"something\\"} } 
          })",
            "stateName": "Assign aaaa",
          },
        ],
      }
    `);
  });
});
