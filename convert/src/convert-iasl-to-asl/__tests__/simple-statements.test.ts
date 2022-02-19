import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";

describe("when transpiling simple statements", () => {
  it("then assignment ends up in result path", () => {
    const iasl = testConvertToIntermediaryAst("let result = 'hello';");
    const result = convert(iasl);
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign Result": Object {
            "Comment": undefined,
            "End": true,
            "Result": "hello",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign Result",
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
        "StartAt": "Initialize",
        "States": Object {
          "Assign ComplexVariableAssignment": Object {
            "Comment": undefined,
            "InputPath": "$.vars.anotherVar.path[$.vars.something.pointer]leaf",
            "Next": "Assign LiteralArrayAccessExpression",
            "ResultPath": "$.vars.complexVariableAssignment",
            "Type": "Pass",
          },
          "Assign LiteralArrayAccessExpression": Object {
            "Comment": undefined,
            "InputPath": "$.vars.anotherVar.path[0]leaf",
            "Next": "Assign ObjectLiteral",
            "ResultPath": "$.vars.literalArrayAccessExpression",
            "Type": "Pass",
          },
          "Assign LiteralNum": Object {
            "Comment": undefined,
            "Next": "Assign VariableAssignment",
            "Result": 42,
            "ResultPath": "$.vars.literalNum",
            "Type": "Pass",
          },
          "Assign LiteralString": Object {
            "Comment": undefined,
            "Next": "Assign LiteralNum",
            "Result": "hello",
            "ResultPath": "$.vars.literalString",
            "Type": "Pass",
          },
          "Assign ObjectLiteral": Object {
            "Comment": undefined,
            "Next": "Assign ObjectLiteralWithVariableAssignment",
            "Result": Object {
              "name": "literal",
              "num": 42,
            },
            "ResultPath": "$.vars.objectLiteral",
            "Type": "Pass",
          },
          "Assign ObjectLiteralWithVariableAssignment": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "age.$": "$.vars.anotherVar",
              "name": "literal",
            },
            "ResultPath": "$.vars.objectLiteralWithVariableAssignment",
            "Type": "Pass",
          },
          "Assign VariableAssignment": Object {
            "Comment": undefined,
            "InputPath": "$.vars.anotherVar",
            "Next": "Assign ComplexVariableAssignment",
            "ResultPath": "$.vars.variableAssignment",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign LiteralString",
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
