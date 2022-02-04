import { convertToASl } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";

describe("when transpiling simple statements", () => {
  it("then assignment ends up in result path", () => {
    const iasl = testConvertToIntermediaryAst("let result = 'hello';");
    const result = convertToASl(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Assign result",
        "States": Object {
          "Assign result": Object {
            "Comment": undefined,
            "End": true,
            "Result": "hello",
            "ResultPath": "$.result",
            "Type": "Pass",
          },
        },
      }
    `);
  });
  it("then multiple assignments can be chained", () => {
    const iasl = testConvertToIntermediaryAst(
      `
      let literalString = 'hello'; 
      literalNum = 42; 
      variableAssignment = anotherVar; 
      complexVariableAssignment = anotherVar.path[something.pointer].leaf; 
      literalArrayAccessExpression = anotherVar.path[0].leaf; 
      objectLiteral = { name: 'literal', num: 42}; 
      objectLiteralWithVariableAssignment = { name: 'literal', age: anotherVar}; 
      
      //result = asl.stringToJson('something')`
    );
    const result = convertToASl(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Assign literalString",
        "States": Object {
          "Assign complexVariableAssignment": Object {
            "Comment": undefined,
            "InputPath": "anotherVar.path[$.something.pointer]leaf",
            "Next": "Assign literalArrayAccessExpression",
            "ResultPath": "$.complexVariableAssignment",
            "Type": "Pass",
          },
          "Assign literalArrayAccessExpression": Object {
            "Comment": undefined,
            "InputPath": "anotherVar.path[0]leaf",
            "Next": "Assign objectLiteral",
            "ResultPath": "$.literalArrayAccessExpression",
            "Type": "Pass",
          },
          "Assign literalNum": Object {
            "Comment": undefined,
            "Next": "Assign variableAssignment",
            "Result": 42,
            "ResultPath": "$.literalNum",
            "Type": "Pass",
          },
          "Assign literalString": Object {
            "Comment": undefined,
            "Next": "Assign literalNum",
            "Result": "hello",
            "ResultPath": "$.literalString",
            "Type": "Pass",
          },
          "Assign objectLiteral": Object {
            "Comment": undefined,
            "Next": "Assign objectLiteralWithVariableAssignment",
            "Result": Object {
              "name": "literal",
              "num": 42,
            },
            "ResultPath": "$.objectLiteral",
            "Type": "Pass",
          },
          "Assign objectLiteralWithVariableAssignment": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "age.$": "$.anotherVar",
              "name": "literal",
            },
            "ResultPath": "$.objectLiteralWithVariableAssignment",
            "Type": "Pass",
          },
          "Assign variableAssignment": Object {
            "Comment": undefined,
            "InputPath": "anotherVar",
            "Next": "Assign complexVariableAssignment",
            "ResultPath": "$.variableAssignment",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
