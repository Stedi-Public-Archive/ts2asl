import * as asl from "asl-types";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslWriter } from "./asl-writer";
import { AslRhsFactory, PathExpressionOrLiteral } from "./aslfactory.rhs";

export class AslPassFactory {
  static appendIaslPass(expression: iasl.AslPassState, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
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

  static appendAsl(pass: Omit<asl.Pass, "Type">, result: PathExpressionOrLiteral, context: AslWriter, nameSuggestion: string) {
    context.appendNextState(
      {
        Type: "Pass",
        ...(result.path !== undefined ? { InputPath: result.path } : result.valueContainsReplacements ? { Parameters: result.value } : { Result: result.value }),
        ...pass,
      }, nameSuggestion);
  }
}