import * as asl from "asl-types";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { appendBlock } from ".";
import { AslWriter } from "./asl-writer";
import { AslRhsFactory } from "./aslfactory.rhs";
import { AslPassFactory } from "./aslfactory.pass";
import { AslParallelFactory } from "./aslfactory.parallel";
import { AslTaskFactory } from "./aslfactory.task";
import { AslInvokeStateMachineFactory } from "./aslfactory.invoke-sm";
import { AslMapFactory } from "./aslfactory.map";
import { AslFailFactory } from "./aslfactory.fail";
import { AslSucceedFactory } from "./aslfactory.succeed";
import { AslChoiceFactory } from "./aslfactory.choice";
import { AslTryFactory } from "./aslfactory.try";
import { AslForeachFactory } from "./aslfactory.foreach";
import { AslWhileFactory } from "./aslfactory.while";

export class AslFactory {
  static append(expression: iasl.Expression, scopes: Record<string, iasl.Scope>, context: AslWriter) {
    let nameSuggestion: string | undefined = expression.stateName;

    let resultPath: string | null = null;
    if (iasl.Check.isVariableAssignment(expression)) {
      AslPassFactory.appendIaslVariableAssignment(expression, scopes, context, resultPath, nameSuggestion);
    } else if (iasl.Check.isAslPassState(expression)) {
      AslPassFactory.appendIaslPass(expression, scopes, context, resultPath, nameSuggestion);
    } else if (iasl.Check.isAslTaskState(expression)) {
      AslTaskFactory.appendIaslTask(expression, scopes, context, resultPath, expression.stateName);
    } else if (iasl.Check.isAslInvokeStateMachine(expression)) {
      AslInvokeStateMachineFactory.appendIaslInvoke(expression, scopes, context, resultPath, expression.stateName);
    } else if (iasl.Check.isDoWhile(expression)) {
      AslWhileFactory.appendIaslDoWhile(expression, scopes, context, resultPath, expression.stateName)
    } else if (iasl.Check.isIf(expression)) {
      AslChoiceFactory.appendIf(expression, scopes, context, resultPath, expression.stateName ?? nameSuggestion ?? "Choice");
    } else if (iasl.Check.isAslChoiceState(expression)) {
      AslChoiceFactory.appendIaslChoice(expression, scopes, context, resultPath, expression.stateName ?? nameSuggestion ?? "Choice");
    } else if (iasl.Check.isSwitch(expression)) {
      AslChoiceFactory.appendSwitchStatement(expression, scopes, context, resultPath, expression.stateName ?? nameSuggestion ?? "Switch")
    } else if (iasl.Check.isWhile(expression)) {
     AslWhileFactory.appendIaslWhile(expression, scopes, context, resultPath, expression.stateName)
    } else if (iasl.Check.isAslWaitState(expression)) {
      const seconds = expression.seconds !== undefined ? AslRhsFactory.appendIasl(expression.seconds, scopes, context) : undefined;
      const timestamp = expression.timestamp !== undefined ? AslRhsFactory.appendIasl(expression.timestamp, scopes, context) : undefined;

      context.appendNextState({
        Type: "Wait",
        ...(seconds && "path" in seconds ? { SecondsPath: seconds.path } : seconds ? { Seconds: seconds.value } : {}),
        ...(timestamp && "path" in timestamp ? { TimestampPath: timestamp.path } : timestamp ? { Timestamp: timestamp.value } : {}),
        Comment: expression.source,
      } as asl.Wait, expression.stateName);
    } else if (iasl.Check.isAslParallelState(expression)) {
      AslParallelFactory.appendIaslParallel(expression, scopes, context, resultPath, nameSuggestion);
    } else if (iasl.Check.isAslMapState(expression)) {
      AslMapFactory.appendIaslMap(expression, scopes, context, resultPath, nameSuggestion);
    } else if (iasl.Check.isForEach(expression)) {
      AslForeachFactory.appendIaslForeach(expression, scopes, context, resultPath, nameSuggestion);
    } else if (iasl.Check.isAslFailState(expression)) {
      AslFailFactory.appendIaslFail(expression, context, nameSuggestion);
    } else if (iasl.Check.isAslSucceedState(expression)) {
      AslSucceedFactory.appendIaslSucceed(expression, context, nameSuggestion);
    } else if (iasl.Check.isReturn(expression)) {
      AslPassFactory.appendIaslReturn(expression, scopes, context);
    } else if (iasl.Check.isBreak(expression)) {
      context.appendNextState({
        brand: "break",
        ResultPath: null,
        Type: "Pass",
        Comment: expression.source,
      }, expression.stateName ?? "Break");
    } else if (iasl.Check.isContinue(expression)) {
      context.appendNextState({
        brand: "continue",
        ResultPath: null,
        Type: "Pass",
        Comment: expression.source,
      }, expression.stateName ?? "Continue");

    } else if (iasl.Check.isTry(expression)) {
     AslTryFactory.appendIaslTry(expression, scopes, context, resultPath, nameSuggestion);
    } else {
      throw new Error(`syntax type ${expression._syntaxKind} cannot be converted to ASL`);
    }
  }

  public static appendRetryConfiguration(task: asl.Task | asl.Parallel | asl.Map, retryConfiguration: iasl.RetryConfiguration | undefined) {
    if (retryConfiguration?.length) {
      task.Retry = retryConfiguration.map(x => ({
        ErrorEquals: x.errorEquals,
        IntervalSeconds: x.intervalSeconds,
        MaxAttempts: x.maxAttempts,
        BackoffRate: x.backoffRate,
      }));
    }
  }

  public static appendCatchConfiguration(states: Array<asl.Task | asl.Parallel | asl.Map>, catchConfiguration: iasl.CatchConfiguration | undefined, scopes: Record<string, iasl.Scope>, context: AslWriter) {
    const appendedStates: asl.State[] = [];
    const trailingStates: asl.State[] = [];
    const startStates: string[] = [];
    for (const _catch of (catchConfiguration || [])) {
      let catchWriterStart: string | undefined;
      const catchWriter = context.createChildContext();
      if (_catch.block) {
        appendBlock(_catch.block, scopes, catchWriter);
        catchWriterStart = catchWriter.startAt;
      }
      if (catchWriterStart === undefined) {
        const emptyCatch = { Type: "Pass" };
        catchWriterStart = context.appendState(emptyCatch, "Empty Catch");;
        catchWriter.appendTails(emptyCatch);
      }
      startStates.push(catchWriterStart);
      for (const stateWithCatch of states) {
        if (stateWithCatch.Catch === undefined) {
          stateWithCatch.Catch = [];
        }
        stateWithCatch.Catch?.push({
          ErrorEquals: _catch.errorEquals,
          ResultPath: _catch.block.inputArgumentName ? "$.vars." + _catch.block.inputArgumentName.identifier : null,
          Next: catchWriterStart
        });
      }
      for (const [name, state] of Object.entries(catchWriter.states)) {
        context.states[name] = state;
        appendedStates.push(state);
      }
      trailingStates.push(...catchWriter.trailingStates);
    }
    return { startStates, appendedStates, trailingStates };
  }
}



export const nameSuggestionForAssignment = (id: iasl.Identifier, stateName: string | undefined): string => {
  if (stateName) return stateName;
  const nameParts = id.identifier.split(".");
  const lastPart = nameParts[nameParts.length - 1];
  const capitalized = lastPart[0].toUpperCase() + (lastPart.length > 1 ? lastPart.substring(1) : "");

  return `Assign ${capitalized}`;
};
