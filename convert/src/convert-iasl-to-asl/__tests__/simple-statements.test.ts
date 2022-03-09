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
          "2: Assign result": Object {
            "Comment": undefined,
            "End": true,
            "Result": "hello",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "2: Assign result",
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
          "2: Assign literalString": Object {
            "Comment": undefined,
            "Next": "3: Assign literalNum",
            "Result": "hello",
            "ResultPath": "$.vars.literalString",
            "Type": "Pass",
          },
          "3: Assign literalNum": Object {
            "Comment": undefined,
            "Next": "4: Assign variableAssignment",
            "Result": 42,
            "ResultPath": "$.vars.literalNum",
            "Type": "Pass",
          },
          "4: Assign variableAssignment": Object {
            "Comment": undefined,
            "InputPath": "$.vars.anotherVar",
            "Next": "5: Assign complexVariableAss ...",
            "ResultPath": "$.vars.variableAssignment",
            "Type": "Pass",
          },
          "5: Assign complexVariableAss ...": Object {
            "Comment": undefined,
            "InputPath": "$.vars.anotherVar.path[$.vars.something.pointer]leaf",
            "Next": "6: Assign literalArrayAccess ...",
            "ResultPath": "$.vars.complexVariableAssignment",
            "Type": "Pass",
          },
          "6: Assign literalArrayAccess ...": Object {
            "Comment": undefined,
            "InputPath": "$.vars.anotherVar.path[0]leaf",
            "Next": "7: Assign objectLiteral",
            "ResultPath": "$.vars.literalArrayAccessExpression",
            "Type": "Pass",
          },
          "7: Assign objectLiteral": Object {
            "Comment": undefined,
            "Next": "8: Assign objectLiteralWithV ...",
            "Result": Object {
              "name": "literal",
              "num": 42,
            },
            "ResultPath": "$.vars.objectLiteral",
            "Type": "Pass",
          },
          "8: Assign objectLiteralWithV ...": Object {
            "Comment": undefined,
            "End": true,
            "Parameters": Object {
              "age.$": "$.vars.anotherVar",
              "name": "literal",
            },
            "ResultPath": "$.vars.objectLiteralWithVariableAssignment",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "2: Assign literalString",
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
