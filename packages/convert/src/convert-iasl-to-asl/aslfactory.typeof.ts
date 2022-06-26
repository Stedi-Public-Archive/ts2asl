import * as asl from "asl-types";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { ReturnStatementFactory } from "../convert-asllib-to-iasl/iaslfactory";
import { AslWriter } from "./asl-writer";
import { AslParallelFactory } from "./aslfactory.parallel";
import { AslPassFactory } from "./aslfactory.pass";
import { AslRhsFactory } from "./aslfactory.rhs";

export class AslTypeofFactory {
  static appendIaslTypeof(
    expression: iasl.TypeOfExpression,
    scopes: Record<string, iasl.Scope>,
    context: AslWriter,
    resultPath: string | null,
    nameSuggestion: string | undefined,
  ) {
    let rhs = AslRhsFactory.appendIasl(expression.operand, scopes, context, true);
    rhs = AslRhsFactory.convertToPath(rhs, context);

    
    const childContext = context.createChildContext();
    const choiceState = {
      Type: "Choice",
      Choices: [],
      Comment: expression.source
    } as asl.Choice;
    childContext.appendNextState(choiceState, nameSuggestion);
    
    const pathForComparison = (rhs.path === "$._undefined") ? "$._doesntexist" : rhs.path;
    const undefinedBlock = childContext.appendChoiceOperator({Variable: pathForComparison, IsPresent: false});
    AslPassFactory.appendIaslReturn(ReturnStatementFactory.createReturnLiteral("undefined", 'Evaluate to "undefined"'), scopes, undefinedBlock)
    const nullBlock = childContext.appendChoiceOperator({Variable: pathForComparison, IsNull: true});
    AslPassFactory.appendIaslReturn(ReturnStatementFactory.createReturnLiteral("object", 'Evaluate to "object"'), scopes, nullBlock)
    const numberBlock = childContext.appendChoiceOperator({Variable: pathForComparison, IsNumeric: true});
    AslPassFactory.appendIaslReturn(ReturnStatementFactory.createReturnLiteral("number", 'Evaluate to "number"'), scopes, numberBlock)
    const stringBlock = childContext.appendChoiceOperator({Variable: pathForComparison, IsString: true});
    AslPassFactory.appendIaslReturn(ReturnStatementFactory.createReturnLiteral("string", 'Evaluate to "string"'), scopes, stringBlock)
    const booleanBlock = childContext.appendChoiceOperator({Variable: pathForComparison, IsBoolean: true});
    AslPassFactory.appendIaslReturn(ReturnStatementFactory.createReturnLiteral("boolean", 'Evaluate to "boolean"'), scopes, booleanBlock)
    const deafultBlock = childContext.appendChoiceDefault();
    AslPassFactory.appendIaslReturn(ReturnStatementFactory.createReturnLiteral("object", 'Evaluate to "object"'), scopes, deafultBlock)
    childContext.finalizeChoiceState();
    const branch = childContext.finalize()!;

    AslParallelFactory.appendAsl(
      {
        Branches: [branch],
        ResultPath: resultPath as any,
        InputPath: "$",
        Comment: expression.source,
    }, undefined, undefined, scopes, context, "Typeof");

  }
  
}
