import * as asl from "asl-types";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslPassStateFactory, LiteralFactory, ReturnStatementFactory, VariableAssignmentFactory } from "../convert-asllib-to-iasl/iaslfactory";
import { AslWriter } from "./asl-writer";
import { AslPassFactory } from "./aslfactory.pass";
import { createChoiceOperator } from "./choice-utility";

export class BinaryExpressionFactory {
  static appendBinaryExpression(
    expression: iasl.BinaryExpression,
    scopes: Record<string, iasl.Scope>,
    context: AslWriter,
    resultPath: string | null,
    nameSuggestion: string | undefined,
  ) {
   
    // const childContext = context.createChildContext();
    const choiceState = {
      Type: "Choice",
      Choices: [],
      Comment: expression.source
    } as asl.Choice;
    context.appendNextState(choiceState, nameSuggestion);
    
    const choiceOperator = createChoiceOperator(expression, scopes, context);
    const trueBranch = context.appendChoiceOperator(choiceOperator);
    AslPassFactory.appendIaslPass(AslPassStateFactory.create({ parameters: LiteralFactory.createFromRuntime(true), stateName: 'Evaluate to true'}), scopes, trueBranch, resultPath)
    const falseBranch = context.appendChoiceDefault();
    AslPassFactory.appendIaslPass(AslPassStateFactory.create({ parameters: LiteralFactory.createFromRuntime(false), stateName:  'Evaluate to false'}), scopes, falseBranch, resultPath)
    context.finalizeChoiceState();
  }
  
}
