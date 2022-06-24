
import * as asl from "asl-types";
import { convertBlock } from ".";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { AslWriter } from "./asl-writer";
import { AslFactory } from "./aslfactory";
import { createParameters } from "./parameters";

export class AslParallelFactory {
  static appendIaslParallel(expression: iasl.AslParallelState, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
    
    const branches = expression.branches.map(x => convertBlock(x, scopes, context.createChildContext())!);
    const parameters = createParameters(scopes, expression.branches);
    
    this.appendAsl(
      {
        Branches: branches,
        ResultPath: resultPath as any,
        ...parameters,
        Comment: expression.source,
      },
      expression.catch,
      expression.retry,
      scopes,
      context,
      nameSuggestion ?? "Parallel");
  }

  static appendAsl(parallel: Omit<asl.Parallel, "Type">, catchConfiguration: iasl.CatchConfiguration | undefined, retryConfiguration: iasl.RetryConfiguration | undefined, scopes: Record<string, iasl.Scope>, context: AslWriter, nameSuggestion: string) {
    const { trailingStates } = AslFactory.appendCatchConfiguration([parallel as asl.Parallel], catchConfiguration, scopes, context);
    AslFactory.appendRetryConfiguration(parallel as asl.Parallel, retryConfiguration);

    context.appendNextState(
      {
        Type: "Parallel",
        ...parallel,
      }, nameSuggestion);
    
    context.appendTails(trailingStates);
  }
}