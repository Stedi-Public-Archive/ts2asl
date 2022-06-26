import * as asl from "asl-types";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslWriter } from "./asl-writer";
import { AslParallelFactory } from "./aslfactory.parallel";
import { AslRhsFactory, convertIdentifierToPathExpression, PathExpression, PathExpressionOrLiteral } from "./aslfactory.rhs";
import { AslTaskFactory } from "./aslfactory.task";

export class AslPassFactory {
  static appendIaslVariableAssignment(expression: iasl.VariableAssignmentStatement, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion?: string) {
    resultPath = convertIdentifierToPathExpression(expression.name, scopes, context);
    if (iasl.Check.isAslPassState(expression.expression)) {
        AslPassFactory.appendIaslPass(expression.expression, scopes, context, resultPath, nameSuggestion);
    } else if (iasl.Check.isAslTaskState(expression.expression)) {
      AslTaskFactory.appendIaslTask(expression.expression, scopes, context, resultPath, nameSuggestion);
    } else if (iasl.Check.isAslParallelState(expression.expression)) {
      AslParallelFactory.appendIaslParallel(expression.expression, scopes, context, resultPath, nameSuggestion);
    } else {
      const rhs = AslRhsFactory.appendIasl(expression.expression, scopes, context, true);
      this.appendAsl(
        {
          ResultPath: resultPath as any,
          Comment: expression.source,
        },
        rhs,
        context,
        nameSuggestion ?? "Pass");
    }
  }
  static appendIaslPass(expression: iasl.AslPassState, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion?: string) {
    const rhs = AslRhsFactory.appendIasl(expression.parameters, scopes, context, true);

    this.appendAsl(
      {
        ResultPath: resultPath as any,
        Comment: expression.source,
      },
      rhs,
      context,
      nameSuggestion ?? "Pass");
  }

  static appendIaslReturn(expression: iasl.ReturnStatement, scopes: Record<string, iasl.Scope>, context: AslWriter) {
    const rhs = AslRhsFactory.appendIasl(expression.expression, scopes, context, true);

    this.appendAsl(
      {
        End: true,
        Comment: expression.source,
      },
      rhs,
      context,
      expression.stateName ?? "Return");
  }

  static append(leftHandSide: PathExpression | string, rightHandSide: PathExpressionOrLiteral, context: AslWriter, nameSuggestion: string) {
    const resultPath = typeof leftHandSide === "string" ? leftHandSide : leftHandSide.path;
    this.appendAsl({ResultPath: resultPath}, rightHandSide, context, nameSuggestion);
  }

  static appendAsl(pass: Omit<asl.Pass, "Type">, rightHandSide: PathExpressionOrLiteral, context: AslWriter, nameSuggestion: string) {
    context.appendNextState(
      {
        Type: "Pass",
        ...this.convertPathOrLiteralToParameters(rightHandSide),
        ...pass,
      }, nameSuggestion);
  }

  static convertPathOrLiteralToParameters(result: PathExpressionOrLiteral): { InputPath: string } | { Parameters: unknown } | { Result: unknown } {
      return ("path" in result ? { InputPath: result.path } : result.valueContainsReplacements ? { Parameters: result.value } : { Result: result.value });
  }
}