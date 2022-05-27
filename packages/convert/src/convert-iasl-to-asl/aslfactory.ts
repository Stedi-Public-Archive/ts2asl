import * as asl from "asl-types";
import * as iasl from "../convert-asllib-to-iasl/ast";
import { appendBlock, convertBlock } from ".";
import { createChoiceOperator } from "./choice-utility";
import { createParameters, createParametersForMap } from "./parameters";
import { AslWriter, StateWithBrand } from "./asl-writer";
import { createReplacer, replaceIdentifiers } from "./identifiers";
import { Operator } from "asl-types/dist/choice";
import { AslRhsFactory, convertIdentifierToPathExpression } from "./aslfactory.rhs";
import { AslPassFactory } from "./aslfactory.pass";

export let foreachCounter = { value: 0 };

export class AslFactory {
  static append(expression: iasl.Expression, scopes: Record<string, iasl.Scope>, context: AslWriter) {
    let nameSuggestion: string | undefined = expression.stateName;

    let resultPath: string | null;
    if (iasl.Check.isVariableAssignment(expression)) {
      resultPath = convertIdentifierToPathExpression(expression.name, scopes, context);
      nameSuggestion = nameSuggestionForAssignment(expression.name, expression.stateName);
      if (!iasl.Check.isConditionalExpression(expression.expression) && !iasl.Check.isIdentifier(expression.expression) && !iasl.Check.isAslIntrinsicFunction(expression.expression) && !iasl.Check.isLiteral(expression.expression) && !iasl.Check.isLiteralObject(expression.expression) && !iasl.Check.isLiteralArray(expression.expression)) {
        expression = expression.expression;
      } else {
        expression = { parameters: expression.expression, source: expression.source, _syntaxKind: iasl.SyntaxKind.AslPassState } as iasl.PassState;
      }
    } else {
      resultPath = null;
    }

    if (iasl.Check.isAslPassState(expression)) {

      AslPassFactory.appendIaslPass(expression, scopes, context, resultPath, nameSuggestion);
    } else if (iasl.Check.isAslTaskState(expression)) {
      const parameters = expression.parameters ? AslRhsFactory.appendIasl(expression.parameters, scopes, context) : undefined;

      const task = {
        Type: "Task",
        ResultPath: resultPath,
        Resource: expression.resource,
        ...(parameters && parameters.path !== undefined ? { InputPath: parameters.path } : parameters ? { Parameters: parameters.value } : {}),
        Retry: expression.retry,
        TimeoutSeconds: expression.timeoutSeconds,
        HeartbeatSeconds: expression.heartbeatSeconds,
        Comment: expression.source,
      } as asl.Task;
      context.appendNextState(task, expression.stateName);
      this.appendCatchConfiguration([task], expression.catch, scopes, context);
      this.appendRetryConfiguration(task, expression.retry);

    } else if (iasl.Check.isDoWhileStatement(expression)) {
      if (expression.while.statements.length == 0) throw new Error("Do while must have at least one statement");
      const childContext = appendBlock(expression.while, scopes, context.createChildContext());

      if (childContext.startAt !== undefined) {
        const breakStates: StateWithBrand[] = [], continueStates: StateWithBrand[] = [];
        for (const [name, state] of Object.entries(childContext.states)) {
          if (state.brand === "break") {
            delete state.brand;
            breakStates.push(state);
          } else if (state.brand === "continue") {
            delete state.brand;
            continueStates.push(state);
          }
          context.states[name] = state;
        }
        context.joinTrailingStates(childContext.startAt);
        context.appendTails(childContext.trailingStates);
        const whileConditionOperator = createChoiceOperator(expression.condition, scopes, context);
        whileConditionOperator.Next = childContext.startAt;
        const whileCondition = { Type: "Choice", Choices: [whileConditionOperator] } as asl.Choice;
        const whileConditionName = context.appendNextState(whileCondition, "Do While Condition");
        context.finalizeChoiceState();

        for (const continueState of continueStates) {
          (continueState as asl.Pass).Next = whileConditionName;
        }

        context.joinTrailingStates(whileConditionName, whileCondition);
        context.appendTails(breakStates);
      }

    } else if (iasl.Check.isIfExpression(expression)) {
      const choiceState = {
        Type: "Choice",
        Choices: [],
        Comment: expression.source
      } as asl.Choice;
      context.appendNextState(choiceState, expression.stateName ?? "If");

      const choiceOperator = createChoiceOperator(expression.condition, scopes, context);
      const thenWriter = context.appendChoiceOperator(choiceOperator);
      appendBlock(expression.then, scopes, thenWriter);

      if (expression.else) {
        const defaultWriter = context.appendChoiceDefault();
        appendBlock(expression.else, scopes, defaultWriter);
      }

      const brandedStates = context.finalizeChoiceState();
      context.appendTails(brandedStates);
    } else if (iasl.Check.isAslChoiceState(expression)) {
      const choiceState = {
        Type: "Choice",
        Choices: [],
        Comment: expression.source
      } as asl.Choice;

      context.appendNextState(choiceState, expression.stateName ?? "Choice");
      for (const choice of (expression.choices || [])) {
        const choiceOperator = createChoiceOperator(choice.condition, scopes, context);
        const branch = context.appendChoiceOperator(choiceOperator);
        appendBlock(choice.block, scopes, branch);
      }

      if (expression.default) {
        const branch = context.appendChoiceDefault();
        appendBlock(expression.default, scopes, branch);
      }

      const breakStates = context.finalizeChoiceState();
      context.appendTails(breakStates);

    } else if (iasl.Check.isSwitch(expression)) {
      const choiceState = {
        Type: "Choice",
        Choices: [],
        Comment: expression.source
      } as asl.Choice;

      context.appendNextState(choiceState, expression.stateName ?? "Switch");
      let unjoinedBranches: { operator: Operator | undefined; branch: AslWriter; }[] = [];
      for (const _case of (expression.cases || [])) {
        let branch: AslWriter | undefined;
        let operator: Operator | undefined;
        if (_case.when) {
          operator = createChoiceOperator(_case.when, scopes, context);
          branch = context.appendChoiceOperator(operator);
        } else {
          branch = context.appendChoiceDefault();
        }
        if (_case.then) appendBlock(_case.then, scopes, branch);
        if (branch) {
          if (branch.startAt) {
            for (const unjoined of unjoinedBranches) {
              if (unjoined.branch.startAt === undefined) {
                if (unjoined.operator) {
                  unjoined.operator.Next = branch.startAt;
                } else {
                  choiceState.Default = branch.startAt;
                }
              } else {
                unjoined.branch.joinUnbrandedStates(branch.startAt);
              }
            }
            unjoinedBranches = [{ branch, operator }];
          }
          else {
            unjoinedBranches.push({ branch, operator });
          }
        }
      }

      const breakStates = context.finalizeChoiceState();
      for (const state of breakStates) {
        if (state.brand === "break") {
          context.removeState(state);
        } else {
          throw new Error(`${state.brand} statement is not supported inside switch`);
        }
      }
    } else if (iasl.Check.isWhileStatement(expression)) {
      if (expression.while.statements.length == 0) throw new Error("While must have at least one statement");
      const whileConditionName = context.appendNextState({ Type: "Choice", Choices: [] }, "While Condition");
      const whileConditionOperator = createChoiceOperator(expression.condition, scopes, context);
      const whileBodyBranch = context.appendChoiceOperator(whileConditionOperator);
      appendBlock(expression.while, scopes, whileBodyBranch);
      whileBodyBranch.joinTrailingStates(whileConditionName);

      const defaultWriter = context.appendChoiceDefault();
      const whileExitStateName = defaultWriter.appendNextState({ Type: "Pass", ResultPath: null }, "While Exit");

      const brandedStatements = context.finalizeChoiceState();
      for (const brandedStatement of brandedStatements) {
        if (brandedStatement.brand === "break") {
          delete brandedStatement.brand;
          (brandedStatement as asl.Pass).Next = whileExitStateName;
        } else if (brandedStatement.brand === "continue") {
          delete brandedStatement.brand;
          (brandedStatement as asl.Pass).Next = whileConditionName;
        }
      }
    } else if (iasl.Check.isAslWaitState(expression)) {
      const seconds = expression.seconds !== undefined ? AslRhsFactory.appendIasl(expression.seconds, scopes, context) : undefined;
      const timestamp = expression.timestamp !== undefined ? AslRhsFactory.appendIasl(expression.timestamp, scopes, context) : undefined;

      context.appendNextState({
        Type: "Wait",
        ...(seconds && seconds.path !== undefined ? { SecondsPath: seconds.path } : seconds ? { Seconds: seconds.value } : {}),
        ...(timestamp && timestamp.path !== undefined ? { TimestampPath: timestamp.path } : timestamp ? { Timestamp: timestamp.value } : {}),
        Comment: expression.source,
      } as asl.Wait, expression.stateName);
    } else if (iasl.Check.isAslParallelState(expression)) {
      const branches = expression.branches.map(x => convertBlock(x, scopes, context.createChildContext()));
      const parallelState = {
        Branches: branches,
        ResultPath: resultPath,
        Type: "Parallel",
        Retry: expression.retry,
        Comment: expression.source,
        ...createParameters(scopes, expression.branches),
      } as asl.Parallel;
      context.appendNextState(parallelState, nameSuggestion);
      this.appendCatchConfiguration([parallelState], expression.catch, scopes, context);
      this.appendRetryConfiguration(parallelState, expression.retry);
    } else if (iasl.Check.isAslMapState(expression)) {
      const iterator = convertBlock(expression.iterator, scopes, context.createChildContext());
      const items = AslRhsFactory.appendIasl(expression.items, scopes, context);

      const mapState = {
        Type: "Map",
        ResultPath: resultPath,
        Iterator: iterator,
        ItemsPath: items.path,
        MaxConcurrency: expression.maxConcurrency,
        Comment: expression.source,
        ...createParametersForMap(scopes, expression.iterator, expression.iterator.inputArgumentName),
      } as asl.Map;
      context.appendNextState(mapState, nameSuggestion);
      this.appendCatchConfiguration([mapState], expression.catch, scopes, context);
      this.appendRetryConfiguration(mapState, expression.retry);

    } else if (iasl.Check.isForEachStatement(expression)) {
      if (expression.iterator.statements.length == 0) return;
      const namespace = foreachCounter.value > 0 ? "foreach_" + (foreachCounter.value + 1) : "foreach";
      const namePostFix = foreachCounter.value > 0 ? " " + (foreachCounter.value + 1) : "";
      foreachCounter.value++;
      const foreachWriter = context.createChildContext();
      const items = AslRhsFactory.appendIasl(expression.items, scopes, context);
      foreachWriter.appendNextState({
        Type: "Pass",
        ResultPath: `$.${namespace}`,
        Parameters: {
          "items.$": items.path,
          "currentItem.$": `${items.path}[0]`,
        }
      }, "Foreach Initialize" + namePostFix);

      const checkDoneName = foreachWriter.appendNextState({
        Type: "Choice",
        Choices: [],
      }, "Foreach CheckDone" + namePostFix);

      const iteratorWriter = foreachWriter.appendChoiceOperator({ Variable: `$.${namespace}.items[0]`, IsPresent: true });
      let iterator = expression.iterator;
      if (expression.iterator.inputArgumentName) {
        const replacer = createReplacer(expression.iterator.inputArgumentName.identifier, `$.${namespace}.currentItem`);
        iterator = replaceIdentifiers(expression.iterator, [replacer]);
      }
      appendBlock(iterator, scopes, iteratorWriter);

      const defaultWriter = foreachWriter.appendChoiceDefault();
      const foreachExitState = {
        Type: "Pass",
        ResultPath: `$.${namespace}`,
        Result: {},
      };
      const exitStateName = defaultWriter.appendNextState(foreachExitState, "Foreach Exit" + namePostFix);

      const brandedStates = foreachWriter.finalizeChoiceState();
      const foreachNextSate = {
        Type: "Pass",
        ResultPath: `$.${namespace}`,
        Parameters: {
          "items.$": `$.${namespace}.items[1:]`,
          "currentItem.$": `$.${namespace}.items[1]`,
        }
      };
      const foreachNextName = foreachWriter.appendNextState(foreachNextSate, "Foreach Next" + namePostFix);

      for (const branded of brandedStates) {
        if (branded.brand === "continue") {
          (branded as asl.Pass).Next = foreachNextName;
        }
        if (branded.brand === "break") {
          (branded as asl.Pass).Next = exitStateName;
        }
        delete branded.brand;
      }

      foreachWriter.joinTrailingStates(foreachNextName, ...[foreachExitState]);
      (foreachNextSate as asl.Pass).Next = checkDoneName;
      for (const [name, state] of Object.entries(foreachWriter.states)) {
        context.states[name] = state;
      }
      context.joinTrailingStates(foreachWriter.startAt as string);
      delete (foreachExitState as asl.Pass).Next;
      context.appendTails(foreachExitState);

    } else if (iasl.Check.isAslFailState(expression)) {
      context.appendNextState({
        Type: "Fail",
        Error: expression.error,
        Cause: expression.cause,
        Comment: expression.source
      } as asl.Fail, nameSuggestion);
    } else if (iasl.Check.isAslSucceedState(expression)) {
      context.appendNextState({
        Type: "Succeed",
        Comment: expression.source
      } as asl.Succeed, nameSuggestion);
    } else if (iasl.Check.isReturnStatement(expression)) {
      AslPassFactory.appendIaslReturn(expression, scopes, context);
    } else if (iasl.Check.isBreakStatement(expression)) {
      context.appendNextState({
        brand: "break",
        ResultPath: null,
        Type: "Pass",
        Comment: expression.source,
      }, expression.stateName ?? "Break");
    } else if (iasl.Check.isContinueStatement(expression)) {
      context.appendNextState({
        brand: "continue",
        ResultPath: null,
        Type: "Pass",
        Comment: expression.source,
      }, expression.stateName ?? "Continue");

    } else if (iasl.Check.isTryExpression(expression)) {
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
        const { appendedStates } = this.appendCatchConfiguration(normalizedTryStatesWithCatchConfiguration, expression.catch, scopes, context);

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
        const result = this.appendCatchConfiguration(normalizedCatchStatesWithCatchConfiguration, catchConfiguration, scopes, context);
        const finallyStart = result.startStates[0];
        context.joinTrailingStates(finallyStart, ...result.appendedStates);
      }
    } else {
      throw new Error(`syntax type ${expression._syntaxKind} cannot be converted to ASL`);

    }
  }

  private static appendRetryConfiguration(task: asl.Task | asl.Parallel | asl.Map, retryConfiguration: iasl.RetryConfiguration | undefined) {
    if (retryConfiguration?.length) {
      task.Retry = retryConfiguration.map(x => ({
        ErrorEquals: x.errorEquals,
        IntervalSeconds: x.intervalSeconds,
        MaxAttempts: x.maxAttempts,
        BackoffRate: x.backoffRate,
      }));
    }
  }

  private static appendCatchConfiguration(states: Array<asl.Task | asl.Parallel | asl.Map>, catchConfiguration: iasl.CatchConfiguration | undefined, scopes: Record<string, iasl.Scope>, context: AslWriter) {
    const appendedStates: asl.State[] = [];
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
          ...(_catch.block.inputArgumentName ? { ResultPath: "$.vars." + _catch.block.inputArgumentName.identifier } : {}),
          Next: catchWriterStart
        });
      }
      for (const [name, state] of Object.entries(catchWriter.states)) {
        context.states[name] = state;
        appendedStates.push(state);
      }

      context.appendTails(catchWriter.trailingStates);
    }
    return { startStates, appendedStates };
  }
}



export const nameSuggestionForAssignment = (id: iasl.Identifier, stateName: string | undefined): string => {
  if (stateName) return stateName;
  const nameParts = id.identifier.split(".");
  const lastPart = nameParts[nameParts.length - 1];
  const capitalized = lastPart[0].toUpperCase() + (lastPart.length > 1 ? lastPart.substring(1) : "");

  return `Assign ${capitalized}`;
};