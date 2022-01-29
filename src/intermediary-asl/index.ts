
import * as ts from "typescript";
import * as iast from "./ast"
import { ParserError } from "../ParserError";
import { convertToIdentifierString } from "./helper";
const factory = ts.factory;

export const convertToIntermediaryAsl = (body: ts.Block | ts.ConciseBody | ts.SourceFile, argName: string = "context"): iast.Expression[] => {
  const result: iast.Expression[] = [];
  ts.forEachChild(body, toplevel => {
    const converted = convertNodeToIntermediaryAst(toplevel);
    if (!converted) return;
    if (Array.isArray(converted)) {
      result.push(...converted);
      return;
    }
    result.push(converted);
  });

  for (const node of result) {
    for (const [prop, val] of Object.entries(node)) {
      if (val === undefined || val === null) {
        delete node[prop];
      }
    }
  }

  return result;
}
export const convertNodeToIntermediaryAst = (toplevel: ts.Node): iast.Expression[] | iast.Expression | undefined => {
  let node: ts.Node | undefined = toplevel;

  if (ts.isEmptyStatement(node) || node.kind === ts.SyntaxKind.EndOfFileToken) {
    return;
  }

  if (ts.isExpressionStatement(node)) {
    node = node.expression;
  }

  if (ts.isReturnStatement(node)) {


    const expression = convertExpression(node.expression);

    return {
      expression,
      _syntaxKind: "return",
    } as iast.Return;
  }

  if (ts.isVariableStatement(node)) {
    if (node.declarationList.declarations.length !== 1) throw new ParserError("Variable statement must have declaration list of 1", node);
    const decl = node.declarationList.declarations[0];

    const identifierString = convertToIdentifierString(decl.name);
    if (!identifierString) throw new ParserError("unable to convert declaration name to identifier string", node);

    const expression = convertExpression(decl.initializer);
    if (!expression) throw new ParserError("unable to convert declaration initializer to expression", node);
    return {
      name: { identifier: identifierString, _syntaxKind: "identifier" },
      expression: expression,
      _syntaxKind: "assignment",
    } as iast.VariableAssignment
  }

  if ((ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.EqualsToken)) {
    const identifierString = convertToIdentifierString(node.left);
    if (!identifierString) throw new ParserError("unable to convert lhs of assignment to identifier string", node);

    const expression = convertExpression(node.right);
    if (!expression) throw new ParserError("unable to convert rhs of assignment to expression", node);

    return {
      name: { identifier: identifierString, _syntaxKind: "identifier" },
      expression: expression,
      _syntaxKind: "assignment",
    } as iast.VariableAssignment
  }

  if (node && ts.isAwaitExpression(node)) {
    node = node.expression;
  }

  const result = convertExpression(node as ts.Expression);
  if (!result) {
    throw new ParserError("unknown expression type", node);
  }
  return result;
}

export const convertSingleExpression = (expression?: ts.Expression): iast.Expression | undefined => {
  const result = convertExpression(expression);
  if (!result) return undefined;
  if (!Array.isArray(result)) return result;
  if (result.length != 1) {
    throw new Error("expected single expression");
  }
  return result[0];
}

export const convertExpression = (expression?: ts.Expression): iast.Expression[] | iast.Expression | undefined => {
  if (!expression) return undefined;

  if (ts.isCallExpression(expression)) {
    if (!ts.isPropertyAccessExpression(expression.expression)) throw new Error("Call expression expected to have Property access expression");
    if (!ts.isIdentifier(expression.expression.expression)) throw new Error("Call expression expected to have Property access expression");
    const ASL = expression.expression.expression.text.toLowerCase();
    if (ASL !== "asl") throw new Error("Call expression expected to be on ASL method");

    let type = expression.expression.name.text;
    let argument = factory.createObjectLiteralExpression([], false);

    if (expression.arguments.length !== 0) {
      if (expression.arguments.length > 1) throw new Error("Call expression expected to have single argument");
      if (!ts.isObjectLiteralExpression(expression.arguments[0])) throw new Error("Call expression expected to have object literal expression as argument");
      argument = expression.arguments[0];
    };

    const convertedArgs = convertObjectLiteralExpression(argument);
    switch (type) {
      case "typescriptInvoke": {
        const comment = unpackAsLiteral(convertedArgs, "comment");
        const target = unpackAsIdentifier(convertedArgs, "target");
        const parameters = convertedArgs["parameters"];

        return {
          resource: "typeof:" + target?.identifier,
          parameters,
          comment,
          _syntaxKind: "asl-task-state"
        } as iast.TaskState;
      };

      case "typescriptTry": {
        const try_ = unpackFunctionBlock(convertedArgs, "try");
        const finally_ = unpackFunctionBlock(convertedArgs, "finally");
        const retryConfiguration = unpackArray(convertedArgs, "retry", element => unpackLiteralValue(element));
        const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          try: try_,
          finally: finally_,
          catch: catchConfiguration,
          retry: retryConfiguration,
          comment,
          _syntaxKind: "try"
        } as iast.TryExpression;
      };

      case "typescriptWhile": {
        const condition = unpackAsBinaryExpression(convertedArgs, "condition");
        const while_ = unpackFunctionBlock(convertedArgs, "block");
        const comment = unpackAsLiteral(convertedArgs, "comment");
        return {
          condition,
          while: while_,
          comment,
          _syntaxKind: "while"
        } as iast.WhileExpression;
      }

      case "typescriptIf": {
        const when = unpackAsBinaryExpression(convertedArgs, "when");
        const then = unpackFunctionBlock(convertedArgs, "then");
        const else_ = unpackFunctionBlock(convertedArgs, "else");
        const comment = unpackAsLiteral(convertedArgs, "comment");
        return {
          condition: when,
          then,
          else: else_,
          comment,
          _syntaxKind: "if"
        } as iast.IfExpression;
      };

      case "task": {
        const parameters = convertedArgs["parameters"];
        const resource = unpackAsLiteral(convertedArgs, "resource");
        const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));
        const retryConfiguration = unpackArray(convertedArgs, "retry", element => unpackLiteralValue(element));
        const timeoutSeconds = unpackAsLiteral(convertedArgs, "timeoutSeconds");
        const heartbeatSeconds = unpackAsLiteral(convertedArgs, "heartbeatSeconds");
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          resource: resource,
          parameters: parameters,
          catch: catchConfiguration,
          retry: retryConfiguration,
          timeoutSeconds,
          heartbeatSeconds,
          comment,
          _syntaxKind: "asl-task-state"
        } as iast.TaskState;
      };

      case "wait": {
        const seconds = convertedArgs["seconds"];
        const timestamp = convertedArgs["timestamp"];
        const comment = unpackAsLiteral(convertedArgs, "comment");
        return {
          seconds,
          timestamp,
          comment,
          _syntaxKind: "asl-wait-state",
        } as iast.WaitState;
      };

      case "parallel": {
        const branches = unpackArray(convertedArgs, "branches", element => unpackLiteralValue(element));
        const retryConfiguration = unpackArray(convertedArgs, "retry", element => unpackLiteralValue(element));
        const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          branches,
          catch: catchConfiguration,
          retry: retryConfiguration,
          comment,
          _syntaxKind: "asl-parallel-state"
        } as iast.ParallelState;
      };

      case "choice": {
        const choices = unpackArray(convertedArgs, "choices", element => unpackLiteralValue(element));
        const _default = unpackFunctionBlock(convertedArgs, "default");
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          choices: choices,
          default: _default,
          comment,
          _syntaxKind: "asl-choice-state"
        } as iast.ChoiceState;
      };

      case "map": {
        const items = unpackAsIdentifier(convertedArgs, "items");
        const iterator = unpackFunctionBlock(convertedArgs, "iterator");
        const retryConfiguration = unpackArray(convertedArgs, "retry", element => unpackLiteralValue(element));
        const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          items,
          catch: catchConfiguration,
          retry: retryConfiguration,
          iterator,
          comment,
          _syntaxKind: "asl-map-state"
        } as iast.MapState;
      };

      case "pass": {
        const parameters = convertedArgs["parameters"];
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          parameters,
          comment,
          _syntaxKind: "asl-pass-state"
        } as iast.PassState;
      };

      case "succeed": {
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          comment,
          _syntaxKind: "asl-succeed-state"
        } as iast.SucceedState;
      };

      case "fail": {
        const cause = unpackAsLiteral(convertedArgs, "cause");
        const error = unpackAsLiteral(convertedArgs, "error");
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          cause,
          error,
          comment,
          _syntaxKind: "asl-fail-state"
        } as iast.FailState;
      };

    }

    if (type.startsWith("native")) {
      let remainder = type.substring(6);
      let resource = 'arn:aws:states:::aws-sdk:'; //dynamodb:getItem'
      let foundService = false;
      const servicesNames = ["DynamoDB"];
      for (const serviceName of servicesNames) {
        if (remainder.startsWith(serviceName)) {
          resource += serviceName.toLowerCase() + ':';
          remainder = remainder.substring(serviceName.length);
          foundService = true;
          break;
        }
      }
      if (!foundService) {
        throw new Error(`unable to find service of native integration ${type} `);
      }
      resource += remainder[0].toLowerCase() + remainder.substring(1);
      const parameters: iast.LiteralObjectExpression = { _syntaxKind: iast.SyntaxKind.LiteralObject, properties: {} };
      for (const [propName, propVal] of Object.entries(convertedArgs)) {
        parameters.properties[propName] = propVal;
      }

      return {
        resource,
        parameters,
        comment: undefined,
        _syntaxKind: "asl-task-state"
      } as iast.TaskState;
    }

    else {
      throw new ParserError(`unknown asl lib function: asl.${type}`, expression);
    }
  }
}


export const convertObjectLiteralExpression = (expr: ts.ObjectLiteralExpression): Record<string, iast.Expression | iast.Identifier> => {
  const result: Record<string, iast.Expression | iast.Identifier> = {};
  for (const property of expr.properties) {
    if (!property || !property.name) throw new Error('property literal expression has property without name');
    if (!ts.isPropertyAssignment(property)) throw new Error('property literal expression has property without assignment expression');
    let propertyName: string | undefined = undefined;
    if (ts.isIdentifier(property.name) || ts.isLiteralExpression(property.name)) {
      propertyName = property.name.text;
    }
    if (!propertyName) throw new ParserError("unable to extract property name for property assignment", expr);

    const initializer = convertExpressionToLiteralOrIdentifier(property.initializer);
    result[propertyName] = initializer
  }
  return result
}

export const convertExpressionToLiteralOrIdentifier = (original: ts.Expression): iast.Identifier | iast.LiteralExpressionLike | iast.AslIntrinsicFunction | iast.BinaryExpression => {
  let expr = original;
  if (ts.isArrowFunction(original)) {
    expr = original.body as ts.Expression;
  }
  if (ts.isLiteralExpression(expr)) {
    if (ts.isNumericLiteral(expr)) {
      return {
        value: new Number(expr.text).valueOf(),
        type: "numeric",
        _syntaxKind: iast.SyntaxKind.Literal,
      } as iast.LiteralExpression;
    } else if (ts.isStringLiteral(expr)) {
      return {
        value: expr.text,
        type: "string",
        _syntaxKind: iast.SyntaxKind.Literal,
      } as iast.LiteralExpression;
    }
  }
  else if (ts.isObjectLiteralExpression(expr)) {
    return {
      properties: convertObjectLiteralExpression(expr),
      _syntaxKind: iast.SyntaxKind.LiteralObject,
    } as iast.LiteralObjectExpression;
  } else if (ts.isArrayLiteralExpression(expr)) {
    return {
      elements: expr.elements.map(x => convertExpressionToLiteralOrIdentifier(x)),
      _syntaxKind: iast.SyntaxKind.LiteralArray,
    } as iast.LiteralArrayExpression;
  } else if (expr.kind === ts.SyntaxKind.TrueKeyword) {
    return {
      value: true,
      type: "boolean",
      _syntaxKind: iast.SyntaxKind.Literal,
    } as iast.LiteralExpression;
  } else if (expr.kind === ts.SyntaxKind.FalseKeyword) {
    return {
      value: false,
      type: "boolean",
      _syntaxKind: iast.SyntaxKind.Literal,
    } as iast.LiteralExpression;
  } else if (expr.kind === ts.SyntaxKind.UndefinedKeyword || expr.kind === ts.SyntaxKind.NullKeyword) {
    return {
      value: null,
      type: "null",
      _syntaxKind: iast.SyntaxKind.Literal,
    } as iast.LiteralExpression;
  } else if (ts.isArrowFunction(original) && ts.isBlock(expr)) {
    let argName: undefined | string = undefined;
    if (original.parameters.length >= 1) {
      const identifier = (original.parameters[0].name) as ts.Identifier;
      argName = identifier.text;
      if (original.parameters.length >= 2) {
        throw new Error("Iterator block must not have more than 1 parameter");
      }
    }
    return {
      argName,
      block: {
        expressions: convertToIntermediaryAsl(expr)
      },
      _syntaxKind: iast.SyntaxKind.Function,
    } as iast.Function;
  }
  else if (ts.isCallExpression(expr)) {
    const _arguments = expr.arguments.map(x => convertExpressionToLiteralOrIdentifier(x));

    return {
      arguments: _arguments,
      function: convertToIdentifierString(expr.expression),
      _syntaxKind: "asl-intrinsic-function"
    } as iast.AslIntrinsicFunction;
  } else if (ts.isBinaryExpression(expr)) {

    const convertedOperator = convertBinaryOperatorToken(expr.operatorToken)
    let expression = {
      lhs: convertExpressionToLiteralOrIdentifier(expr.left),
      operator: convertedOperator.op,
      rhs: convertExpressionToLiteralOrIdentifier(expr.right),
      _syntaxKind: iast.SyntaxKind.BinaryExpression
    } as iast.BinaryExpression;

    if (convertedOperator.not) {
      expression = {
        operator: "not",
        rhs: expression,
        _syntaxKind: iast.SyntaxKind.BinaryExpression
      } as iast.BinaryExpression;
    }
    return expression;
  }


  //not a literal, try identifier
  const identifierString = convertToIdentifierString(expr);
  if (identifierString) {
    return { identifier: identifierString, _syntaxKind: "identifier" } as iast.Identifier;
  }
  throw new ParserError("unable to unpack expression ", expr);
}

const unpackAsLiteral = (args: Record<string, iast.Expression | iast.Identifier>, propertyName: string): string | boolean | number | null | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!iast.Check.isLiteral(propValue)) {
    throw new Error(`property ${propertyName} must be literal`);
  }
  return propValue.value;
}

const unpackAsBinaryExpression = (args: Record<string, iast.Expression | iast.Identifier>, propertyName: string): iast.BinaryExpression | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!iast.Check.isBinaryExpression(propValue)) {
    throw new Error(`property ${propertyName} must be binary expression`);
  }
  return propValue;
}


const unpackLiteralValue = (val: iast.Expression | iast.Identifier) => {

  if (iast.Check.isLiteral(val)) {
    return val.value;
  } else if (iast.Check.isLiteralArray(val)) {
    return val.elements.map(x => unpackLiteralValue(x));
  } else if (iast.Check.isLiteralObject(val)) {
    let result: Record<string, string | boolean | number | null | [] | {}> = {};
    for (const [propName, propVal] of Object.entries(val.properties)) {
      result[propName] = unpackLiteralValue(propVal);
    }
    return result;
  } else if (iast.Check.isFunction(val)) {

    if (val.argName) {
      //todo: visit all identifiers and strip of `propValue.argName`
    }
    return val.block;
  }

  return val;
}

const unpackAsLiteralLike = (args: Record<string, iast.Expression | iast.Identifier>, propertyName: string): string | boolean | number | null | [] | {} | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;
  return unpackLiteralValue(propValue);
}


const unpackArray = <TElement>(args: Record<string, iast.Expression | iast.Identifier>, propertyName: string, unpackElement: (element: iast.Expression | iast.Identifier) => TElement): TElement[] => {
  const propValue = args[propertyName];
  if (propValue === undefined) return [];

  if (!iast.Check.isLiteralArray(propValue)) {
    throw new Error(`property ${propertyName} must be array`);
  }

  return propValue.elements.map(x => unpackElement(x));
}

const unpackFunctionBlock = (args: Record<string, iast.Expression | iast.Identifier>, propertyName: string): iast.Block | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!iast.Check.isFunction(propValue)) {
    throw new Error(`property ${propertyName} must be function`);
  }

  if (propValue.argName) {
    //todo: visit all identifiers and strip of `propValue.argName`
  }
  return propValue.block;
}


const unpackAsIdentifier = (args: Record<string, iast.Expression | iast.Identifier>, propertyName: string): iast.Identifier | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!iast.Check.isIdentifier(propValue)) {
    throw new Error(`property ${propertyName} must be identifier`);
  }
  return propValue;
}


const convertBinaryOperatorToken = (operator: ts.BinaryOperatorToken): { op: "eq" | "gt" | "gte" | "lt" | "lte", not: boolean } => {
  switch (operator.kind) {
    case ts.SyntaxKind.EqualsEqualsEqualsToken:
    case ts.SyntaxKind.EqualsEqualsToken:
      return { op: "eq", not: false };

    case ts.SyntaxKind.ExclamationEqualsEqualsToken:
    case ts.SyntaxKind.ExclamationEqualsEqualsToken:
      return { op: "eq", not: true };

    case ts.SyntaxKind.GreaterThanEqualsToken:
      return { op: "gte", not: false };

    case ts.SyntaxKind.GreaterThanToken:
      return { op: "gt", not: false };

    case ts.SyntaxKind.LessThanEqualsToken:
      return { op: "lte", not: false };

    case ts.SyntaxKind.LessThanToken:
      return { op: "lt", not: false };

    default:
      const typescriptOp = ts.SyntaxKind[operator.kind];
      throw new Error("unexpected binary operator type " + typescriptOp);
  }
}