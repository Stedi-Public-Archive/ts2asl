import * as asl from "asl-types";
import * as iasl from "../convert-asllib-to-iasl/ast"
import { ConversionContext, convertBlock } from ".";
import { createChoiceOperator } from "./choice-utility";
import { createParameters, createParametersForMap } from "./parameters";
import { createFilterExpression } from "./jsonpath-filter";
import { createSingleOrParallel } from "./blocks";

export class AslFactory {
  static append(expression: iasl.Expression, scopes: Record<string, iasl.Scope>, context: ConversionContext) {
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
          ResultPath: "$.lastResult",
          Parameters: {
            "value.$": parameters.path
          },
          Comment: "result of an expression cannot be placed in InputPath, therefore copying it around a little",
        } as asl.Pass, nameSuggestion);
        context.appendNextState({
          Type: "Pass",
          ResultPath: "$.lastResult",
          ...properties,
          InputPath: "$.lastResult.value",
          Comment: expression.source,
        } as asl.Pass, nameSuggestion);
      } else {
        context.appendNextState({
          Type: "Pass",
          ResultPath: "$.lastResult",
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
        ...(discardResult ? { ResultPath: "$.tmp.lastResult" } : {}),
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
      const contextForBranch = context.createChildContext();

      for (const statement of expression.while.statements) {
        AslFactory.append(statement, scopes, contextForBranch);
      }
      const whileConditionOperator = createChoiceOperator(expression.condition);
      whileConditionOperator.Next = contextForBranch.startAt ?? "XXXX";
      const whileCondition = { Type: "Choice", Choices: [whileConditionOperator] } as asl.Choice
      contextForBranch.appendNextState(whileCondition, "_WhileCondition");
      const whileExitName = contextForBranch.appendState({ Type: "Succeed" } as asl.Succeed, "_WhileExit");
      whileCondition.Default = whileExitName;

      const stateMachine = contextForBranch.finalize();

      context.appendNextState({
        Type: "Parallel",
        ...properties,
        ...(discardResult ? { ResultPath: "$.tmp.lastResult" } : {}),
        ...createParameters(scopes, [expression.while]),
        Branches: [stateMachine],
        Comment: expression.source,
      } as asl.Parallel, expression.stateName);
    } else if (iasl.Check.isIfExpression(expression)) {
      const choiceOperator = createChoiceOperator(expression.condition);
      const choiceState = {
        Type: "Choice",
        ...properties,
        Choices: [choiceOperator],
        Comment: expression.source
      } as asl.Choice;
      context.appendNextState(choiceState, expression.stateName ?? "If");

      const thenState = createSingleOrParallel(expression.then, scopes, context);
      const thenStateName = context.appendState(thenState.state, thenState.stateName ?? "Then");
      choiceOperator.Next = thenStateName;

      if (expression.else) {
        const elseState = createSingleOrParallel(expression.else, scopes, context);
        context.appendNextState(elseState.state, elseState.stateName ?? "Else")
      }

      context.appendTails(thenState.state);
    } else if (iasl.Check.isAslChoiceState(expression)) {
      const choiceState = {
        Type: "Choice",
        ...properties,
        Choices: [],
        Comment: expression.source
      } as asl.Choice;

      context.appendNextState(choiceState, expression.stateName ?? "Choice");
      const trailingStates: asl.State[] = [];
      for (const choice of (expression.choices || [])) {
        const choiceOperator = createChoiceOperator(choice.condition);
        const thenState = createSingleOrParallel(choice.block, scopes, context);
        const thenStateName = context.appendState(thenState.state, thenState.stateName ?? "Then");
        choiceOperator.Next = thenStateName;
        choiceState.Choices.push(choiceOperator);
        trailingStates.push(thenState.state);
      }

      if (expression.default) {
        const defaultState = createSingleOrParallel(expression.default, scopes, context);
        context.appendNextState(defaultState.state, defaultState.stateName ?? "Default")
      } else {
        context.appendNextState({ Type: "Pass" } as asl.Pass, "EmptyDefault")
      }
      for (const state of trailingStates) {
        context.trailingStates.push(state);
      }
    } else if (iasl.Check.isWhileStatement(expression)) {

      const whileConditionOperator = createChoiceOperator(expression.condition);
      const contextForBranch = context.createChildContext();
      const whileCondition = { Type: "Choice", Choices: [whileConditionOperator] } as asl.Choice
      const whileConditionName = contextForBranch.appendState(whileCondition, "_WhileCondition");

      for (const statement of expression.while.statements) {
        AslFactory.append(statement, scopes, contextForBranch);
      }

      whileConditionOperator.Next = contextForBranch.startAt;
      contextForBranch.startAt = whileConditionName;

      const whileExitName = contextForBranch.appendNextState({ Type: "Succeed" } as asl.Succeed, "_WhileExit");
      whileCondition.Default = whileExitName;
      contextForBranch.trailingStates = [];

      const stateMachine = contextForBranch.finalize();

      context.appendNextState({
        Type: "Parallel",
        ...properties,
        ...(discardResult ? { ResultPath: "$.tmp.lastResult" } : {}),
        ...createParameters(scopes, [expression.while]),
        Branches: [stateMachine],
        Comment: expression.source,
      } as asl.Parallel, expression.stateName);
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
        ...(discardResult ? { ResultPath: "$.tmp.lastResult" } : {}),
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
        ...(discardResult ? { ResultPath: "$.tmp.lastResult" } : {}),
        Iterator: iterator,
        ItemsPath: items.path,
        MaxConcurrency: expression.maxConcurrency,
        Comment: expression.source,
        ...createParametersForMap(scopes, expression.iterator, expression.iterator.inputArgumentName),
      } as asl.Map;
      context.appendNextState(mapState, nameSuggestion);
      this.appendCatchConfiguration(mapState, expression.catch, scopes, context);
      this.appendRetryConfiguration(mapState, expression.retry);

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
        });
      }
    } else if (iasl.Check.isTryExpression(expression)) {
      const tryState = createSingleOrParallel(expression.try, scopes, context, { alwaysWrapFailState: true });
      context.appendNextState(tryState.state, tryState.stateName);
      if (["Map", "Parallel", "Task"].includes(tryState.state.Type) && expression.catch?.length) {
        this.appendCatchConfiguration(tryState.state as (asl.Map | asl.Parallel | asl.Task), expression.catch, scopes, context);
      }
      if (expression.finally) {
        const finallyState = createSingleOrParallel(expression.finally, scopes, context);
        context.appendNextState(finallyState.state, finallyState.stateName);
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

  private static appendCatchConfiguration(task: asl.Task | asl.Parallel | asl.Map, catchConfiguration: iasl.CatchConfiguration | undefined, scopes: Record<string, iasl.Scope>, context: ConversionContext) {
    if (catchConfiguration?.length) {
      const resultingCatchConfiguration = [] as Array<{ ErrorEquals: string[]; Next: string; }>;
      for (const catchClause of catchConfiguration) {
        const catchState = createSingleOrParallel(catchClause.block, scopes, context);
        const name = context.appendAdditionalTail(catchState.state, catchState.stateName);
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