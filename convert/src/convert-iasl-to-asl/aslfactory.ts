import * as asl from "asl-types";
import * as iasl from "../convert-asllib-to-iasl/ast"
import { appendBlock, convertBlock, isNonTerminalState } from ".";
import { createChoiceOperator } from "./choice-utility";
import { createParameters, createParametersForMap } from "./parameters";
import { createFilterExpression } from "./jsonpath-filter";
import { createSingleOrParallel } from "./blocks";
import { trimName } from "../create-name";
import { AslWriter } from "./asl-writer";
import { createReplacer, replaceIdentifiers } from "./identifiers";

let foreachCounter = 0;
export class AslFactory {
  static append(expression: iasl.Expression, scopes: Record<string, iasl.Scope>, context: AslWriter) {
    let nameSuggestion: string | undefined = expression.stateName;
    let properties = {};
    let discardResult = false;
    if (iasl.Check.isVariableAssignment(expression)) {
      properties["ResultPath"] = convertIdentifierToPathExpression(expression.name);
      nameSuggestion = nameSuggestionForAssignment(expression.name, expression.stateName);
      if (!iasl.Check.isIdentifier(expression.expression) && !iasl.Check.isAslIntrinsicFunction(expression.expression) && !iasl.Check.isLiteral(expression.expression) && !iasl.Check.isLiteralObject(expression.expression) && !iasl.Check.isLiteralArray(expression.expression)) {
        expression = expression.expression;
      } else {
        expression = { parameters: expression.expression, source: expression.source, _syntaxKind: iasl.SyntaxKind.AslPassState } as iasl.PassState;
      }
    } else {
      discardResult = true;
    }

    if (iasl.Check.isAslPassState(expression)) {
      const parameters = convertExpressionToAsl(expression.parameters);

      if (parameters.path && parameters.path.startsWith("States")) {
        context.appendNextState({
          Type: "Pass",
          ResultPath: "$.tmp.eval",
          Parameters: {
            "value.$": parameters.path
          },
          Comment: "result of an expression cannot be placed in InputPath, therefore copying it around a little",
        } as asl.Pass, trimName("Evaluate " + parameters.path));
        context.appendNextState({
          Type: "Pass",
          ResultPath: (null as any),
          ...properties,
          InputPath: "$.tmp.eval.value",
          Comment: expression.source,
        } as asl.Pass, nameSuggestion);
      } else {
        context.appendNextState({
          Type: "Pass",
          ResultPath: (null as any),
          ...properties,
          ...(parameters.path !== undefined ? { InputPath: parameters.path } : parameters.valueContainsReplacements ? { Parameters: parameters.value } : { Result: parameters.value }),
          Comment: expression.source,
        } as asl.Pass, nameSuggestion);
      }
    } else if (iasl.Check.isAslTaskState(expression)) {
      const parameters = expression.parameters ? convertExpressionToAsl(expression.parameters) : undefined;

      const task = {
        Type: "Task",
        ...properties,
        ...(discardResult ? { ResultPath: null } : {}),
        Resource: expression.resource,
        ...(parameters && parameters.path !== undefined ? { InputPath: parameters.path } : parameters ? { Parameters: parameters.value } : {}),
        Retry: expression.retry,
        TimeoutSeconds: expression.timeoutSeconds,
        HeartbeatSeconds: expression.heartbeatSeconds,
        Comment: expression.source,
      } as asl.Task;
      context.appendNextState(task, expression.stateName);
      this.appendCatchConfiguration(task, expression.catch, scopes, context);
      this.appendRetryConfiguration(task, expression.retry);

    } else if (iasl.Check.isDoWhileStatement(expression)) {

      let firstStatementName: string | undefined;
      context.registerCallNextStateCallBackOnce((stateName: string) => {
        if (firstStatementName === undefined) {
          firstStatementName = stateName;
        }
      });

      appendBlock(expression.while, scopes, context)

      if (firstStatementName !== undefined) {
        const whileConditionOperator = createChoiceOperator(expression.condition);
        whileConditionOperator.Next = firstStatementName;
        const whileCondition = { Type: "Choice", Choices: [whileConditionOperator] } as asl.Choice
        context.appendNextState(whileCondition, "_DoWhileCondition");
        context.finalizeChoiceState();
      }

    } else if (iasl.Check.isIfExpression(expression)) {
      const choiceState = {
        Type: "Choice",
        ...properties,
        Choices: [],
        Comment: expression.source
      } as asl.Choice;
      context.appendNextState(choiceState, expression.stateName ?? "If");

      const choiceOperator = createChoiceOperator(expression.condition);
      const thenWriter = context.appendChoiceOperator(choiceOperator);
      appendBlock(expression.then, scopes, thenWriter);

      if (expression.else) {
        const defaultWriter = context.appendChoiceDefault();
        appendBlock(expression.else, scopes, defaultWriter);
      }

      const breakStates = context.finalizeChoiceState();
      context.appendTails(breakStates);
    } else if (iasl.Check.isAslChoiceState(expression)) {
      const choiceState = {
        Type: "Choice",
        ...properties,
        Choices: [],
        Comment: expression.source
      } as asl.Choice;

      context.appendNextState(choiceState, expression.stateName ?? "Choice");
      for (const choice of (expression.choices || [])) {
        const choiceOperator = createChoiceOperator(choice.condition);
        const branch = context.appendChoiceOperator(choiceOperator);
        appendBlock(choice.block, scopes, branch);
      }

      if (expression.default) {
        const branch = context.appendChoiceDefault();
        appendBlock(expression.default, scopes, branch);
      }

      const breakStates = context.finalizeChoiceState();
      context.appendTails(breakStates);

    } else if (iasl.Check.isWhileStatement(expression)) {

      const whileConditionName = context.appendNextState({ Type: "Choice", Choices: [] }, "_WhileCondition");
      const whileConditionOperator = createChoiceOperator(expression.condition);
      const whileBodyBranch = context.appendChoiceOperator(whileConditionOperator);
      appendBlock(expression.while, scopes, whileBodyBranch);
      whileBodyBranch.joinTrailingStates(whileConditionName);

      const defaultWriter = context.appendChoiceDefault();
      const whileExitStateName = defaultWriter.appendNextState({ Type: "Pass", ResultPath: null }, "_WhileExit");

      const breakStates = context.finalizeChoiceState();
      for (const breakState of breakStates) {
        delete breakState.brand;
        (breakState as asl.Pass).Next = whileExitStateName;
      }
    } else if (iasl.Check.isAslWaitState(expression)) {
      const seconds = expression.seconds !== undefined ? convertExpressionToAsl(expression.seconds) : undefined;
      const timestamp = expression.timestamp !== undefined ? convertExpressionToAsl(expression.timestamp) : undefined;

      context.appendNextState({
        Type: "Wait",
        ...properties,
        ...(seconds && seconds.path !== undefined ? { SecondsPath: seconds.path } : seconds ? { Seconds: seconds.value } : {}),
        ...(timestamp && timestamp.path !== undefined ? { TimestampPath: timestamp.path } : timestamp ? { Timestamp: timestamp.value } : {}),
        Comment: expression.source,
      } as asl.Wait, expression.stateName);
    } else if (iasl.Check.isAslParallelState(expression)) {
      const branches = expression.branches.map(x => convertBlock(x, scopes, context.createChildContext()));
      const parallelState = {
        Branches: branches,
        ...properties,
        ...(discardResult ? { ResultPath: null } : {}),
        Type: "Parallel",
        Catch: expression.catch,
        Retry: expression.retry,
        Comment: expression.source,
        ...createParameters(scopes, expression.branches),
      } as asl.Parallel;
      context.appendNextState(parallelState, nameSuggestion);
      this.appendCatchConfiguration(parallelState, expression.catch, scopes, context);
      this.appendRetryConfiguration(parallelState, expression.retry);
    } else if (iasl.Check.isAslMapState(expression)) {
      const iterator = convertBlock(expression.iterator, scopes, context.createChildContext())
      const items = convertExpressionToAsl(expression.items);

      const mapState = {
        Type: "Map",
        ...properties,
        ...(discardResult ? { ResultPath: null } : {}),
        Iterator: iterator,
        ItemsPath: items.path,
        MaxConcurrency: expression.maxConcurrency,
        Comment: expression.source,
        ...createParametersForMap(scopes, expression.iterator, expression.iterator.inputArgumentName),
      } as asl.Map;
      context.appendNextState(mapState, nameSuggestion);
      this.appendCatchConfiguration(mapState, expression.catch, scopes, context);
      this.appendRetryConfiguration(mapState, expression.retry);

    } else if (iasl.Check.isForEachStatement(expression)) {

      const namespace = foreachCounter > 0 ? "foreach_" + (foreachCounter + 1) : "foreach";
      const namePostFix = foreachCounter > 0 ? " " + (foreachCounter + 1) : "";
      foreachCounter++;

      const items = convertExpressionToAsl(expression.items);
      context.appendNextState({
        Type: "Pass",
        ResultPath: `$.${namespace}`,
        Parameters: {
          "items.$": items.path,
          "currentItem.$": `${items.path}[0]`,
        }
      }, "Foreach Initialize" + namePostFix);

      const checkDoneName = context.appendNextState({
        Type: "Choice",
        Choices: [],
      }, "Foreach CheckDone" + namePostFix);

      const iteratorWriter = context.appendChoiceOperator({ Variable: `$.${namespace}.items[0]`, IsPresent: true });
      let iterator = expression.iterator;
      if (expression.iterator.inputArgumentName) {
        const replacer = createReplacer(expression.iterator.inputArgumentName.identifier, `$.${namespace}.currentItem`);
        iterator = replaceIdentifiers(expression.iterator, [replacer]);
      }
      appendBlock(iterator, scopes, iteratorWriter);

      const defaultWriter = context.appendChoiceDefault();
      const foreachExitState = {
        Type: "Pass",
        ResultPath: `$.${namespace}`,
        Result: {},
      };
      const exitStateName = defaultWriter.appendNextState(foreachExitState, "Foreach Exit" + namePostFix);

      const breakStates = context.finalizeChoiceState();
      for (const breakState of breakStates) {
        delete breakState.brand;
      }
      context.trailingStates = context.trailingStates.filter(x => x != foreachExitState);
      context.appendNextState({
        Type: "Pass",
        ResultPath: `$.${namespace}`,
        Parameters: {
          "items.$": `$.${namespace}.items[1:]`,
          "currentItem.$": `$.${namespace}.items[1]`,
        }
      }, "Foreach Next" + namePostFix);

      context.joinTrailingStates(checkDoneName);
      context.appendTails(breakStates);
      context.joinTrailingStates(exitStateName);
      context.trailingStates = [foreachExitState];
    } else if (iasl.Check.isAslFailState(expression)) {
      context.appendNextState({
        Type: "Fail",
        ...properties,
        Error: expression.error,
        Cause: expression.cause,
        Comment: expression.source
      } as asl.Fail, nameSuggestion);
    } else if (iasl.Check.isAslSucceedState(expression)) {
      context.appendNextState({
        Type: "Succeed",
        ...properties,
        Comment: expression.source
      } as asl.Succeed, nameSuggestion);
    } else if (iasl.Check.isReturnStatement(expression)) {
      if (expression.expression) {
        const parameters = convertExpressionToAsl(expression.expression);
        context.appendNextState({
          End: true,
          Type: "Pass",
          Comment: expression.source,
          ...properties,
          ...(parameters.path !== undefined ? { InputPath: parameters.path } : parameters.valueContainsReplacements ? { Parameters: parameters.value } : { Result: parameters.value }),
        }, expression.stateName ?? "Return");
      }
    } else if (iasl.Check.isBreakStatement(expression)) {
      context.appendNextState({
        brand: "break",
        ResultPath: null,
        Type: "Pass",
        Comment: expression.source,
      }, expression.stateName ?? "Break");

    } else if (iasl.Check.isTryExpression(expression)) {
      const tryState = createSingleOrParallel(expression.try, scopes, context, { alwaysWrapFailState: true });
      if (tryState.secondState) {
        context.appendNextState(tryState.secondState, tryState.secondStateName);
      }
      context.appendNextState(tryState.state, tryState.stateName);
      if (["Map", "Parallel", "Task"].includes(tryState.state.Type) && expression.catch?.length) {
        this.appendCatchConfiguration(tryState.state as (asl.Map | asl.Parallel | asl.Task), expression.catch, scopes, context);
      }
      if (expression.finally) {
        const finallyState = createSingleOrParallel(expression.finally, scopes, context);
        context.appendNextState(finallyState.state, finallyState.stateName);
        if (finallyState.secondState) {
          context.appendNextState(finallyState.secondState, finallyState.secondStateName);
        }
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

  private static appendCatchConfiguration(task: asl.Task | asl.Parallel | asl.Map, catchConfiguration: iasl.CatchConfiguration | undefined, scopes: Record<string, iasl.Scope>, context: AslWriter) {
    if (catchConfiguration?.length) {
      const resultingCatchConfiguration = [] as Array<{ ErrorEquals: string[]; Next: string; }>;
      for (const catchClause of catchConfiguration) {
        const catchState = createSingleOrParallel(catchClause.block, scopes, context);

        const name = context.appendState(catchState.state, catchState.stateName);
        if (catchState.secondState) {
          catchState.state["Next"] = context.appendState(catchState.secondState, catchState.secondStateName);
        }
        context.appendTails(catchState.secondState ?? catchState.state);

        const catchConfiguration = { Next: name, ErrorEquals: catchClause.errorEquals } as { Next: string, ErrorEquals: string[], ResultPath?: string };
        if (catchClause.block.inputArgumentName) {
          catchConfiguration.ResultPath = convertIdentifierToPathExpression(catchClause.block.inputArgumentName);
        }
        resultingCatchConfiguration.push(catchConfiguration);
      }
      task.Catch = resultingCatchConfiguration;
    }
  }
}

interface AslExpressionOrIdentifier {
  path?: string;
  value?: unknown;
  type: iasl.Type;
  valueContainsReplacements?: boolean;
};

export const convertExpressionToAsl = (expr: iasl.Identifier | iasl.Expression): AslExpressionOrIdentifier => {
  if (iasl.Check.isIdentifier(expr)) {
    return { path: convertIdentifierToPathExpression(expr), type: expr.type ?? "unknown" }
  } else if (iasl.Check.isLiteral(expr)) {
    return {
      value: expr.value,
      type: expr.type,
      valueContainsReplacements: false,
    }
  } else if (iasl.Check.isLiteralArray(expr)) {
    const convertedElements = expr.elements.map(x => convertExpressionToAsl(x));
    if (convertedElements.some(x => x.path)) {
      throw new Error("initializing an array with an identifier as one of the elements is not supported yet");
    }
    return {
      value: convertedElements.map(x => x.value),
      type: "array",
      valueContainsReplacements: convertedElements.findIndex(x => x.path || x.valueContainsReplacements === true) !== -1
    }
  } else if (iasl.Check.isAslIntrinsicFunction(expr)) {
    let args: string[] = [];
    for (const arg of expr.arguments) {
      const convertedArg = convertExpressionToAsl(arg);
      const convertedArgAsArray = convertedArg.type === "array" ? convertedArg.value as [] : [convertedArg]
      for (const argFromArray of convertedArgAsArray) {
        if (argFromArray.path) {
          args.push(argFromArray.path);
        } else if (typeof argFromArray.value === "string") {
          if (argFromArray.value.includes("'")) throw new Error("todo implement escaping of string literals passed to intrinsic function args")
          args.push(`'${argFromArray.value}'`);
        } else if (typeof argFromArray.value === "object") {
          args.push(`${JSON.stringify(argFromArray.value, null, 2)}`);
        } else {
          args.push(`${argFromArray.value}`);
        }
      }
    }
    let intrinsicFunctionName = expr.function;
    if (intrinsicFunctionName.startsWith("asl.states.")) {
      const firstCharFunctionName = intrinsicFunctionName[11].toUpperCase();
      intrinsicFunctionName = "States." + firstCharFunctionName + intrinsicFunctionName.substring(12);
    }

    return {
      path: `${intrinsicFunctionName}(${args.join(', ')})`,
      type: "unknown",
      valueContainsReplacements: true
    }
  } else if (iasl.Check.isLiteralObject(expr)) {
    const value: Record<string, unknown> = {};
    let valueContainsReplacements: boolean = false;
    for (const [propName, propValue] of Object.entries(expr.properties)) {
      const result = convertExpressionToAsl(propValue);
      if (result.path) {
        valueContainsReplacements = true;
        value[propName + ".$"] = result.path;
      } else {
        value[propName] = result.value;
        if (result.valueContainsReplacements) {
          valueContainsReplacements = true;
        }
      }
    }
    return {
      value,
      type: "object",
      valueContainsReplacements,
    }
  }
  throw new Error(`unable to convert iasl expression to asl SyntaxKind: ${expr._syntaxKind}`);
}

export const convertIdentifierToPathExpression = (expr: iasl.Identifier): string => {
  let lhs = "";
  if (expr.lhs) {
    lhs += convertIdentifierToPathExpression(expr.lhs);
  }
  if (expr.indexExpression) {
    const indexExpr = convertExpressionToAsl(expr.indexExpression);
    if (indexExpr.path) {
      return lhs + "[" + indexExpr.path + "]" + expr.identifier;
    } else {
      return lhs + "[" + indexExpr.value + "]" + expr.identifier;
    }
  }

  let trailing = "";
  if (expr.jsonPathExpression) {
    trailing = expr.jsonPathExpression;
  } else if (expr.sliceExpression) {
    let expression = expr.sliceExpression.start + ':';
    if (expr.sliceExpression.end) expression += expr.sliceExpression.end;
    if (expr.sliceExpression.step) expression += ":" + expr.sliceExpression.step;
    trailing = `[${expression}]`;
  } else if (expr.filterExpression) {
    const expression = createFilterExpression(expr.filterExpression.argument.identifier, expr.filterExpression.expression);
    trailing = `[?(${expression})]`;
  } else if (expr.mapExpression) {
    trailing = `..${expr.mapExpression}`;
  }

  if (expr.identifier) {
    if (expr.identifier.startsWith("$")) {
      return expr.identifier + trailing;
    }
    if (!lhs) {
      if (expr.objectContextExpression) {
        return "$$." + expr.identifier + trailing;
      }
      if (!expr.compilerGenerated) {
        return "$.vars." + expr.identifier + trailing;
      } else {
        return "$.tmp." + expr.identifier + trailing;
      }
    }
    return lhs + "." + expr.identifier + trailing;

  } else {
    return lhs + trailing;
  }
}

export const nameSuggestionForAssignment = (id: iasl.Identifier, stateName: string | undefined): string => {
  if (stateName) return stateName;
  const nameParts = id.identifier.split(".");
  const lastPart = nameParts[nameParts.length - 1];
  const capitalized = lastPart[0].toUpperCase() + (lastPart.length > 1 ? lastPart.substring(1) : "");

  return `Assign ${capitalized}`;
}