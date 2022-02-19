import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";

describe("when transpiling simple statements", () => {
  it("then assignment ends up in result path", () => {
    const iasl = testConvertToIntermediaryAst("let result = 'hello';");
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize Vars",
        "States": Object {
          "Assign result": Object {
            "Comment": undefined,
            "End": true,
            "Result": "hello",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Initialize Vars": Object {
            "Next": "Assign result",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
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
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize Vars",
        "States": Object {
          "Assign complexVariableAssignment": Object {
            "Comment": undefined,
            "InputPath": "$.vars.anotherVar.path[$.vars.something.pointer]leaf",
            "Next": "Assign literalArrayAccessExpression",
            "ResultPath": "$.vars.complexVariableAssignment",
            "Type": "Pass",
          },
          "Assign literalArrayAccessExpression": Object {
            "Comment": undefined,
            "InputPath": "$.vars.anotherVar.path[0]leaf",
            "Next": "Assign objectLiteral",
            "ResultPath": "$.vars.literalArrayAccessExpression",
            "Type": "Pass",
          },
          "Assign literalNum": Object {
            "Comment": undefined,
            "Next": "Assign variableAssignment",
            "Result": 42,
            "ResultPath": "$.vars.literalNum",
            "Type": "Pass",
          },
          "Assign literalString": Object {
            "Comment": undefined,
            "Next": "Assign literalNum",
            "Result": "hello",
            "ResultPath": "$.vars.literalString",
            "Type": "Pass",
          },
          "Assign objectLiteral": Object {
            "Comment": undefined,
            "Next": "Assign objectLiteralWithVariableAssignment",
            "Result": Object {
              "name": "literal",
              "num": 42,
            },
            "ResultPath": "$.vars.objectLiteral",
            "Type": "Pass",
          },
          "Assign objectLiteralWithVariableAssignment": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "age.$": "$.vars.anotherVar",
              "name": "literal",
            },
            "ResultPath": "$.vars.objectLiteralWithVariableAssignment",
            "Type": "Pass",
          },
          "Assign variableAssignment": Object {
            "Comment": undefined,
            "InputPath": "$.vars.anotherVar",
            "Next": "Assign complexVariableAssignment",
            "ResultPath": "$.vars.variableAssignment",
            "Type": "Pass",
          },
          "Initialize Vars": Object {
            "Next": "Assign literalString",
            "Parameters": Object {
              "vars.$": "$$.Execution.Input",
            },
            "ResultPath": "$",
            "Type": "Pass",
          },
        },
      }
    `);
  });
});
