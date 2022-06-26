import { convert } from "..";
import { testConvertToIntermediaryAst } from "../../convert-asllib-to-iasl/__test__/test-convert";

describe("when transpiling simple statements", () => {
  it("then assignment ends up in result path", () => {
    const iasl = testConvertToIntermediaryAst("let result = 'hello';");
    const result = convert(iasl, { skipVersionComment: true });
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign result": Object {
            "Comment": "source: result = 'hello'",
            "End": true,
            "Result": "hello",
            "ResultPath": "$.vars.result",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign result",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
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
      let array = anotherVar.path[pointer]; 
      complexVariableAssignment = anotherVar.path[something.pointer].leaf;
      literalArrayAccessExpression = anotherVar.path[0].leaf; 
      objectLiteral = { name: 'literal', num: 42}; 
      objectLiteralWithVariableAssignment = { name: 'literal', age: anotherVar}; 
      
      //result = asl.stringToJson('something')`
    );
    const result = convert(iasl, { skipVersionComment: true });
    expect(result).toMatchInlineSnapshot(`
      Object {
        "StartAt": "Initialize",
        "States": Object {
          "Assign array": Object {
            "Comment": "source: array = anotherVar.path[pointer]",
            "InputPath": "$.vars.anotherVar.path[$.vars.pointer]",
            "Next": "Assign complexVariableAss ...",
            "ResultPath": "$.vars.array",
            "Type": "Pass",
          },
          "Assign complexVariableAss ...": Object {
            "Comment": undefined,
            "InputPath": "$.vars.anotherVar.path[$.vars.something.pointer]leaf",
            "Next": "Assign literalArrayAccess ...",
            "ResultPath": "$.vars.complexVariableAssignment",
            "Type": "Pass",
          },
          "Assign literalArrayAccess ...": Object {
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
            "Comment": "source: literalString = 'hello'",
            "Next": "Assign literalNum",
            "Result": "hello",
            "ResultPath": "$.vars.literalString",
            "Type": "Pass",
          },
          "Assign objectLiteral": Object {
            "Comment": undefined,
            "Next": "Assign objectLiteralWithV ...",
            "Result": Object {
              "name": "literal",
              "num": 42,
            },
            "ResultPath": "$.vars.objectLiteral",
            "Type": "Pass",
          },
          "Assign objectLiteralWithV ...": Object {
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
            "Next": "Assign array",
            "ResultPath": "$.vars.variableAssignment",
            "Type": "Pass",
          },
          "Initialize": Object {
            "Next": "Assign literalString",
            "Parameters": Object {
              "_null": null,
              "_undefined": null,
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
