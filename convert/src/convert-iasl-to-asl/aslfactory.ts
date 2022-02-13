import * as asl from "asl-types";
import * as iasl from "../convert-asllib-to-iasl/ast"
import { ConversionContext, convertToASl, isNonTerminalState } from ".";
import { createChoiceOperator } from "./choice-utility";

export class AslFactory {
  static append(expression: iasl.Expression, context: ConversionContext) {
    let nameSuggestion: string | undefined = undefined;
    let properties = {};
    if (iasl.Check.isVariableAssignment(expression)) {
      properties["ResultPath"] = `$.` + expression.name.identifier;
      nameSuggestion = `Assign ${expression.name.identifier}`;
      if (!iasl.Check.isIdentifier(expression.expression) && !iasl.Check.isLiteral(expression.expression) && !iasl.Check.isLiteralObject(expression.expression) && !iasl.Check.isLiteralArray(expression.expression)) {
        expression = expression.expression;
      } else {
        expression = { parameters: expression.expression, comment: expression.comment, _syntaxKind: iasl.SyntaxKind.AslPassState } as iasl.PassState;
      }
    }


    if (iasl.Check.isAslPassState(expression)) {
      const parameters = convertExpressionToAsl(expression.parameters);
      context.appendNextState({
        Type: "Pass",
        ...properties,
        ...(parameters.path !== undefined ? { InputPath: parameters.path } : parameters.valueContainsReplacements ? { Parameters: parameters.value } : { Result: parameters.value }),
        Comment: expression.comment,
      } as asl.Pass, nameSuggestion);

    } else if (iasl.Check.isAslTaskState(expression)) {
      const parameters = expression.parameters ? convertExpressionToAsl(expression.parameters) : undefined;

      context.appendNextState({
        Type: "Task",
        ...properties,
        Resource: expression.resource,
        ...(parameters && parameters.path !== undefined ? { InputPath: parameters.path } : parameters ? { Parameters: parameters.value } : {}),
        Catch: expression.catch,
        Retry: expression.retry,
        TimeoutSeconds: expression.timeoutSeconds,
        HeartbeatSeconds: expression.heartbeatSeconds,
        Comment: expression.comment,
      } as asl.Task, nameSuggestion);
    } else if (iasl.Check.isDoWhileStatement(expression)) {
      const contextForBranch = context.createChildContext();

      for (const statement of expression.while.statements) {
        AslFactory.append(statement, contextForBranch);
      }
      const whileConditionOperator = createChoiceOperator(expression.condition);
      whileConditionOperator.Next = contextForBranch.startAt ?? "XXXX";
      const whileCondition = { Type: "Choice", Choices: [whileConditionOperator] } as asl.Choice
      contextForBranch.appendNextState(whileCondition, "_WhileCondition");
      const whileExitName = contextForBranch.appendState({ Type: "Succeed" } as asl.Succeed, "_WhileExit");
      whileCondition.Default = whileExitName;

      context.appendNextState({
        Type: "Parallel",
        ...properties,
        Branches: [contextForBranch.finalize()],
        Comment: expression.comment,
      } as asl.Parallel, 'DoWhile');
    } else if (iasl.Check.isIfExpression(expression)) {

      const choiceOperator = createChoiceOperator(expression.condition);

      const choiceState = {
        Type: "Choice",
        ...properties,
        Choices: [choiceOperator],
        Comment: expression.comment
      } as asl.Choice;
      context.appendNextState(choiceState, nameSuggestion ?? "If");

      const contextForThen = context.createChildContext();
      for (const statement of expression.then.statements) {
        AslFactory.append(statement, contextForThen);
      }
      const statemachineForThen = contextForThen.finalize();

      choiceOperator.Next = contextForThen.startAt;
      for (const [name, statement] of Object.entries(statemachineForThen?.States!)) {
        context.states[name] = statement;
        if (isNonTerminalState(statement) && statement.End) {
          delete statement.End;
          context.trailingStates.push(statement);
        }
      }

      if (expression.else) {
        const contextForElse = context.createChildContext();
        for (const statement of expression.else.statements) {
          AslFactory.append(statement, contextForElse);
        }
        const statemachineForElse = contextForThen.finalize();
        choiceState.Default = statemachineForElse?.StartAt;
        for (const [name, statement] of Object.entries(statemachineForThen?.States!)) {
          context.states[name] = statement;
          if (isNonTerminalState(statement) && statement.End) {
            delete statement.End;
            context.trailingStates.push(statement);
          }
        }
      }
    } else if (iasl.Check.isWhileStatement(expression)) {
      const whileConditionOperator = createChoiceOperator(expression.condition);

      const contextForBranch = context.createChildContext();
      const whileCondition = { Type: "Choice", Choices: [whileConditionOperator] } as asl.Choice
      const whileConditionName = contextForBranch.appendState(whileCondition, "_WhileCondition");

      for (const statement of expression.while.statements) {
        AslFactory.append(statement, contextForBranch);
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
        Branches: [stateMachine],
        Comment: expression.comment,
      } as asl.Parallel, 'While');
    } else if (iasl.Check.isAslWaitState(expression)) {
      const seconds = expression.seconds !== undefined ? convertExpressionToAsl(expression.seconds) : undefined;
      const timestamp = expression.timestamp !== undefined ? convertExpressionToAsl(expression.timestamp) : undefined;

      context.appendNextState({
        Type: "Wait",
        ...properties,
        ...(seconds && seconds.path !== undefined ? { SecondsPath: seconds.path } : seconds ? { Seconds: seconds.value } : {}),
        ...(timestamp && timestamp.path !== undefined ? { TimestampPath: timestamp.path } : timestamp ? { Timestamp: timestamp.value } : {}),
        Comment: expression.comment,
      } as asl.Wait, nameSuggestion);
    } else if (iasl.Check.isAslParallelState(expression)) {
      const branches = expression.branches.map(x => convertToASl(x.statements, context.createChildContext()));

      context.appendNextState({
        Branches: branches,
        ...properties,
        Type: "Parallel",
        Catch: expression.catch,
        Retry: expression.retry,
        Comment: expression.comment,
      } as asl.Parallel, nameSuggestion);
    } else if (iasl.Check.isAslMapState(expression)) {
      const iterator = convertToASl(expression.iterator.statements, context.createChildContext())
      const items = convertExpressionToAsl(expression.items);

      context.appendNextState({
        Type: "Map",
        ...properties,
        Iterator: iterator,
        ItemsPath: items.path,
        MaxConcurrency: expression.maxConcurrency,
        Comment: expression.comment,
      } as asl.Map, nameSuggestion);
    } else if (iasl.Check.isAslFailState(expression)) {
      context.appendNextState({
        Type: "Fail",
        ...properties,
        Error: expression.error,
        Cause: expression.cause,
        Comment: expression.comment
      } as asl.Fail, nameSuggestion);
    } else if (iasl.Check.isAslSucceedState(expression)) {
      context.appendNextState({
        Type: "Succeed",
        ...properties,
        Comment: expression.comment
      } as asl.Succeed, nameSuggestion);
    } else if (iasl.Check.isReturnStatement(expression)) {
      if (expression.expression) {
        const parameters = convertExpressionToAsl(expression.expression);
        context.appendNextState({
          Type: "Pass",
          ...properties,
          ...(parameters.path !== undefined ? { InputPath: parameters.path } : parameters.valueContainsReplacements ? { Parameters: parameters.value } : { Result: parameters.value }),
        });
      }

      context.appendNextState({
        Type: "Succeed",
        Comment: expression.comment
      } as asl.Succeed, nameSuggestion);
    } else {
      throw new Error(`syntax type ${expression._syntaxKind} cannot be converted to ASL`);

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
    return {
      value: convertedElements.map(x => x.value),
      type: "array",
      valueContainsReplacements: convertedElements.findIndex(x => x.path || x.valueContainsReplacements === true) !== -1
    }
  } else if (iasl.Check.isAslIntrinsicFunction(expr)) {
    let args: string[] = [];
    for (const arg of expr.arguments) {
      const convertedArg = convertExpressionToAsl(arg);
      if (convertedArg.path) {
        args.push('$.' + convertedArg.path);
      } else if (typeof convertedArg.value === "string") {
        if (convertedArg.value.includes("'")) throw new Error("todo implement escaping of string literals passed to intrinsic function args")
        args.push(`'${convertedArg.value}'`);
      } else {
        args.push(`${convertedArg.value}`);
      }
    }
    let intrinsicFunctionName = expr.function;
    if (intrinsicFunctionName.startsWith("asl.states.")) {
      const firstCharFunctionName = intrinsicFunctionName[11].toUpperCase();
      intrinsicFunctionName = "States." + firstCharFunctionName + intrinsicFunctionName.substring(12);
    }

    return {
      value: `${intrinsicFunctionName}(${args.join(', ')})`,
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
        value[propName + ".$"] = "$." + result.path;
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
      return lhs + "[$." + indexExpr.path + "]" + expr.identifier;
    } else {
      return lhs + "[" + indexExpr.value + "]" + expr.identifier;
    }
  }
  if (expr.identifier) {
    if (!lhs) {
      return expr.identifier;
    }
    return lhs + "." + expr.identifier;

  } else {
    return lhs;
  }
}
