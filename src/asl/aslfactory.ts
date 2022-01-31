import * as iasl from "../intermediary-asl/ast"
import * as asl from "asl-types";
import { ConversionContext, convertToASl } from ".";

export class AslFactory {
  static append(expression: iasl.Expression, context: ConversionContext) {
    let nameSuggestion: string | undefined = undefined;
    let properties = {};
    if (iasl.Check.isVariableAssignment(expression)) {
      properties["ResultPath"] = `$.` + expression.name.identifier;
      nameSuggestion = `Assign ${expression.name.identifier}`;
      expression = { parameters: expression.expression, comment: expression.comment, _syntaxKind: iasl.SyntaxKind.AslPassState } as iasl.PassState;
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
      const parameters = convertExpressionToAsl(expression.parameters);

      context.appendNextState({
        Type: "Task",
        ...properties,
        ...(parameters.path !== undefined ? { InputPath: parameters.path } : { Parameters: parameters.value }),
        Catch: expression.catch,
        Retry: expression.retry,
        TimeoutSeconds: expression.timeoutSeconds,
        HeartbeatSeconds: expression.heartbeatSeconds,
        Comment: expression.comment,
      } as asl.Task, nameSuggestion);

    } else if (iasl.Check.isAslWaitState(expression)) {
      const seconds = convertExpressionToAsl(expression.seconds);
      const timestamp = convertExpressionToAsl(expression.timestamp);

      context.appendNextState({
        Type: "Wait",
        ...properties,
        ...(seconds.path !== undefined ? { SecondsPath: seconds.path } : { Seconds: seconds.value }),
        ...(timestamp.path !== undefined ? { TimestampPath: seconds.path } : { Timestamp: seconds.value }),
        Comment: expression.comment,
      } as asl.Wait, nameSuggestion);
    } else if (iasl.Check.isAslParallelState(expression)) {
      const branches = expression.branches.map(x => convertToASl(x.expressions, context.createChildContext()));

      context.appendNextState({
        Branches: branches,
        ...properties,
        Type: "Parallel",
        Catch: expression.catch,
        Retry: expression.retry,
        Comment: expression.comment,
      } as asl.Parallel, nameSuggestion);
    } else if (iasl.Check.isAslChoiceState(expression)) {
      throw new Error("todo");
    } else if (iasl.Check.isAslMapState(expression)) {
      const iterator = convertToASl(expression.iterator.expressions, context.createChildContext())
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
    }
  }
}

interface AslExpressionOrIdentifier {
  path?: string;
  value?: unknown;
  valueContainsReplacements?: boolean;
};

const convertExpressionToAsl = (expr: iasl.Identifier | iasl.Expression): AslExpressionOrIdentifier => {
  if (iasl.Check.isIdentifier(expr)) {
    return { path: convertIdentifierToPathExpression(expr) }
  } else if (iasl.Check.isLiteral(expr)) {
    return {
      value: expr.value,
      valueContainsReplacements: false,
    }
  } else if (iasl.Check.isLiteralArray(expr)) {
    const convertedElements = expr.elements.map(x => convertExpressionToAsl(x));
    return {
      value: convertedElements,
      valueContainsReplacements: convertedElements.findIndex(x => x.path || x.valueContainsReplacements === true) !== -1
    }
  } else if (iasl.Check.isAslIntrinsicFunction(expr)) {
    let args: string[] = [];
    for (const arg of expr.arguments) {
      const convertedArg = convertExpressionToAsl(arg);
      if (convertedArg.path) {
        args.push(convertedArg.path);
      } else if (typeof convertedArg.value === "string") {
        if (convertedArg.value.includes("'")) throw new Error("todo implement escaping of string literals passed to intrinsic function args")
        args.push(`'${convertedArg.value}'`);
      } else {
        args.push(`${convertedArg.value}`);
      }
    }
    return {
      value: `${expr.function}(${args.join(', ')})`,
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
      lhs += "[$." + indexExpr.path + "]";
    } else {
      lhs += "[" + indexExpr.value + "]";
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
