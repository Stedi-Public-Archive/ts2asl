
import * as iasl from "../convert-asllib-to-iasl/ast";
import * as asl from "asl-types"
import { AslWriter } from "./asl-writer";
import { appendBlock } from ".";
import { AslFactory } from "./aslfactory";

export class AslTryFactory {
  static appendIaslTry(expression: iasl.TryStatement, scopes: Record<string, iasl.Scope>, context: AslWriter, resultPath: string | null, nameSuggestion: string | undefined) {
    const tryWriter = context.createChildContext();
    appendBlock(expression.try, scopes, tryWriter);
    const tryStatesWithCatchConfiguration: Array<(asl.Map | asl.Parallel | asl.Task | asl.Fail)> = [];
    if (tryWriter.startAt) {
      context.joinTrailingStates(tryWriter.startAt);
      for (const [name, state] of Object.entries(tryWriter.states)) {
        context.states[name] = state;
        if (["Map", "Parallel", "Task", "Fail"].includes(state.Type)) {
          tryStatesWithCatchConfiguration.push(state as asl.Map | asl.Parallel | asl.Task | asl.Fail);
        }
      }
    }
    context.appendTails(tryWriter.trailingStates);

    const catchStatesWithCatchConfiguration: Array<(asl.Map | asl.Parallel | asl.Task | asl.Fail)> = [];
    if (tryStatesWithCatchConfiguration.length > 0 && expression.catch?.length) {
      const normalizedTryStatesWithCatchConfiguration: Array<(asl.Map | asl.Parallel | asl.Task)> = [];
      for (const stateWithCatch of tryStatesWithCatchConfiguration) {
        if (stateWithCatch.Type === "Fail") {
          const stateName = Object.entries(context.states).filter(x => stateWithCatch === x[1]).map(x => x[0]).find(x => true);
          if (stateName === undefined) throw new Error("unable to find fail state");
          const wrapped = {
            Type: "Parallel",
            Catch: [],
            End: true,
            Branches: [{
              StartAt: stateName,
              States: {
                [stateName]: stateWithCatch,
              }
            }],
          } as asl.Parallel;
          context.replaceState(stateName, "Fail State Wrapper", wrapped);
          normalizedTryStatesWithCatchConfiguration.push(wrapped);
        } else {
          const casted = stateWithCatch as asl.Map | asl.Parallel | asl.Task;
          normalizedTryStatesWithCatchConfiguration.push(casted);
        }
      }
      const { appendedStates, trailingStates } = AslFactory.appendCatchConfiguration(normalizedTryStatesWithCatchConfiguration, expression.catch, scopes, context);
      context.appendTails(trailingStates);

      for (const appendedState of appendedStates) {
        if (["Map", "Parallel", "Task", "Fail"].includes(appendedState.Type)) {
          catchStatesWithCatchConfiguration.push(appendedState as asl.Map | asl.Parallel | asl.Task | asl.Fail);
        }
      }
    }

    //join all end: true states from try and catch
    if (expression.finally) {
      const normalizedCatchStatesWithCatchConfiguration: Array<(asl.Map | asl.Parallel | asl.Task)> = [];
      for (const stateWithCatch of catchStatesWithCatchConfiguration) {
        if (stateWithCatch.Type === "Fail") {
          const stateName = Object.entries(context.states).filter(x => stateWithCatch === x[1]).map(x => x[0]).find(x => true);
          if (stateName === undefined) throw new Error("unable to find fail state");
          const wrapped = {
            Type: "Parallel",
            Catch: [],
            End: true,
            Branches: [{
              StartAt: stateName,
              States: {
                [stateName]: stateWithCatch,
              }
            }],
          } as asl.Parallel;
          context.replaceState(stateName, "Fail State Wrapper", wrapped);
          normalizedCatchStatesWithCatchConfiguration.push(wrapped);
        } else {
          const casted = stateWithCatch as asl.Map | asl.Parallel | asl.Task;
          if (casted.Catch === undefined) {
            casted.Catch = [];
          }
          normalizedCatchStatesWithCatchConfiguration.push(casted);
        }
      }

      const catchConfiguration: iasl.CatchConfiguration = [{
        errorEquals: ["States.All"],
        block: { ...expression.finally, _syntaxKind: iasl.SyntaxKind.Function } as iasl.Function,
      }];
      const result = AslFactory.appendCatchConfiguration(normalizedCatchStatesWithCatchConfiguration, catchConfiguration, scopes, context);
      const finallyStart = result.startStates[0];
      context.joinTrailingStates(finallyStart, ...result.appendedStates);
      context.appendTails(result.trailingStates);
    }
  }
};