
import * as ts from "typescript";
import * as iasl from "./ast"
import { ParserError } from "../ParserError";
import { convertToIdentifier } from "./helper";
import { removeSyntaxTransformer } from "./remove-syntax-transformer";
import { isAslCallExpression } from "../convert-ts-to-asllib/transformers/node-utility";
const factory = ts.factory;

export const convertToIntermediaryAsl = (body: ts.Block | ts.ConciseBody | ts.SourceFile, typeChecker: ts.TypeChecker, argName: string = "context"): iasl.Expression[] => {
  const result: iasl.Expression[] = [];

  const transformed = ts.transform<ts.Block | ts.ConciseBody | ts.SourceFile>(body, [removeSyntaxTransformer]).transformed[0];
  ts.forEachChild(transformed, toplevel => {
    const converted = convertNodeToIntermediaryAst(toplevel, typeChecker);
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
export const convertNodeToIntermediaryAst = (toplevel: ts.Node, typeChecker: ts.TypeChecker): iasl.Expression[] | iasl.Expression | undefined => {
  let node: ts.Node | undefined = toplevel;

  if (ts.isEmptyStatement(node) || node.kind === ts.SyntaxKind.EndOfFileToken) {
    return;
  }

  if (ts.isImportDeclaration(node)) {
    return;
  }

  if (ts.isExpressionStatement(node)) {
    node = node.expression;
  }

  if (ts.isReturnStatement(node)) {
    const expression = convertExpression(node.expression, typeChecker);

    return {
      expression,
      _syntaxKind: "return",
    } as iasl.ReturnStatement;
  }

  if (ts.isVariableStatement(node)) {
    if (node.declarationList.declarations.length !== 1) throw new ParserError("Variable statement must have declaration list of 1", node);
    const decl = node.declarationList.declarations[0];

    // decl.type
    const identifier = convertToIdentifier(decl.name, typeChecker);
    if (!identifier) throw new ParserError("unable to convert declaration name to identifier string", node);

    let expression = convertExpression(decl.initializer, typeChecker);
    if (expression === undefined) expression = convertExpressionToLiteralOrIdentifier(decl.initializer, typeChecker);
    if (!expression) throw new ParserError("unable to convert declaration initializer to expression", node);
    return {
      name: identifier,
      expression: expression,
      _syntaxKind: iasl.SyntaxKind.VariableAssignmentStatement
    } as iasl.VariableAssignmentStatement
  }

  if ((ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.EqualsToken)) {
    const identifier = convertToIdentifier(node.left, typeChecker);
    if (!identifier) throw new ParserError("unable to convert lhs of assignment to identifier string", node);


    let expression = convertExpression(node.right, typeChecker);
    if (expression === undefined) expression = convertExpressionToLiteralOrIdentifier(node.right, typeChecker);
    if (!expression) throw new ParserError("unable to convert rhs of assignment to expression", node);

    return {
      name: identifier,
      expression: expression,
      _syntaxKind: iasl.SyntaxKind.VariableAssignmentStatement
    } as iasl.VariableAssignmentStatement
  }

  if (node && ts.isAwaitExpression(node)) {
    node = node.expression;
  }

  const result = convertExpression(node as ts.Expression, typeChecker);
  if (!result) {
    throw new ParserError("unknown expression type", node);
  }
  return result;
}

export const convertSingleExpression = (expression: ts.Expression | undefined, typeChecker: ts.TypeChecker): iasl.Expression | undefined => {
  const result = convertExpression(expression, typeChecker);
  if (!result) return undefined;
  if (!Array.isArray(result)) return result;
  if (result.length != 1) {
    throw new Error("expected single expression");
  }
  return result[0];
}

export const convertExpression = (expression: ts.Expression | undefined, typeChecker: ts.TypeChecker): iasl.Expression[] | iasl.Expression | undefined => {
  if (!expression) return undefined;


  if (ts.isCallExpression(expression)) {
    let type = isAslCallExpression(expression);
    if (!type) throw new Error("Call expression expected to be on asl module");

    if (type.startsWith("states.")) {
      return convertExpressionToLiteralOrIdentifier(expression, typeChecker);
    }
    let argument = factory.createObjectLiteralExpression([], false);

    if (expression.arguments.length !== 0) {
      if (expression.arguments.length > 1) throw new Error("Call expression expected to have single argument");
      if (!ts.isObjectLiteralExpression(expression.arguments[0])) {
        throw new Error("Call expression expected to have object literal expression as argument");
      }
      argument = expression.arguments[0];
    };

    const convertedArgs = convertObjectLiteralExpression(argument, typeChecker);
    switch (type) {
      case "typescriptInvoke": {
        const comment = unpackAsLiteral(convertedArgs, "comment");
        const target = unpackAsIdentifier(convertedArgs, "target");
        const parameters = convertedArgs["parameters"];

        return {
          resource: "typeof:" + target?.identifier,
          parameters,
          comment,
          _syntaxKind: iasl.SyntaxKind.AslTaskState
        } as iasl.TaskState;
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
          _syntaxKind: iasl.SyntaxKind.TryStatement
        } as iasl.TryStatement;
      };

      case "typescriptWhile": {
        const condition = unpackAsBinaryExpression(convertedArgs, "condition");
        const while_ = unpackFunctionBlock(convertedArgs, "block");
        const comment = unpackAsLiteral(convertedArgs, "comment");
        return {
          condition,
          while: while_,
          comment,
          _syntaxKind: iasl.SyntaxKind.WhileStatement
        } as iasl.WhileStatement;
      }

      case "typescriptDoWhile": {
        const condition = unpackAsBinaryExpression(convertedArgs, "condition");
        const while_ = unpackFunctionBlock(convertedArgs, "block");
        const comment = unpackAsLiteral(convertedArgs, "comment");
        return {
          condition,
          while: while_,
          comment,
          _syntaxKind: iasl.SyntaxKind.DoWhileStatement
        } as iasl.DoWhileStatement;
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
          _syntaxKind: iasl.SyntaxKind.IfStatement
        } as iasl.IfExpression;
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
          _syntaxKind: iasl.SyntaxKind.AslTaskState
        } as iasl.TaskState;
      };

      case "wait": {
        const seconds = convertedArgs["seconds"];
        const timestamp = convertedArgs["timestamp"];
        const comment = unpackAsLiteral(convertedArgs, "comment");
        return {
          seconds,
          timestamp,
          comment,
          _syntaxKind: iasl.SyntaxKind.AslWaitState
        } as iasl.WaitState;
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
          _syntaxKind: iasl.SyntaxKind.AslParallelState
        } as iasl.ParallelState;
      };

      case "choice": {
        const choices = unpackArray(convertedArgs, "choices", element => unpackLiteralValue(element));
        const _default = unpackFunctionBlock(convertedArgs, "default");
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          choices: choices,
          default: _default,
          comment,
          _syntaxKind: iasl.SyntaxKind.AslChoiceState
        } as iasl.ChoiceState;
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
          _syntaxKind: iasl.SyntaxKind.AslMapState
        } as iasl.MapState;
      };

      case "pass": {
        const parameters = convertedArgs["parameters"];
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          parameters,
          comment,
          _syntaxKind: iasl.SyntaxKind.AslPassState
        } as iasl.PassState;
      };

      case "succeed": {
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          comment,
          _syntaxKind: "asl-succeed-state"
        } as iasl.SucceedState;
      };

      case "fail": {
        const cause = unpackAsLiteral(convertedArgs, "cause");
        const error = unpackAsLiteral(convertedArgs, "error");
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          cause,
          error,
          comment,
          _syntaxKind: iasl.SyntaxKind.AslFailState
        } as iasl.FailState;
      };

    }

    if (type.startsWith("native")) {
      let remainder = type.substring(6);
      let resource = 'arn:aws:states:::aws-sdk:'; //dynamodb:getItem'
      let foundService = false;
      const servicesNames = ["DynamoDB", "EventBridge", "ECS", "Lambda", "S3", "SES", "SQS", "SNS", "SSM", "Textract"];
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
      const parameters: iasl.LiteralObjectExpression = { _syntaxKind: iasl.SyntaxKind.LiteralObject, properties: {} };
      for (const [propName, propVal] of Object.entries(convertedArgs)) {
        parameters.properties[propName] = propVal;
      }

      return {
        resource,
        parameters,
        comment: undefined,
        _syntaxKind: iasl.SyntaxKind.AslTaskState
      } as iasl.TaskState;
    }

    else {
      throw new ParserError(`unknown asl lib function: asl.${type}`, expression);
    }
  }
}


export const convertObjectLiteralExpression = (expr: ts.ObjectLiteralExpression, typeChecker: ts.TypeChecker): Record<string, iasl.Expression | iasl.Identifier> => {
  const result: Record<string, iasl.Expression | iasl.Identifier> = {};
  for (const property of expr.properties) {
    if (!property || !property.name) throw new Error('property literal expression has property without name');
    if (!ts.isPropertyAssignment(property)) throw new Error('property literal expression has property without assignment expression');
    let propertyName: string | undefined = undefined;
    if (ts.isIdentifier(property.name) || ts.isLiteralExpression(property.name)) {
      propertyName = property.name.text;
    }
    if (!propertyName) throw new ParserError("unable to extract property name for property assignment", expr);

    const initializer = convertExpressionToLiteralOrIdentifier(property.initializer, typeChecker);
    if (initializer === undefined) continue;
    result[propertyName] = initializer
  }
  return result
}

export const convertExpressionToLiteralOrIdentifier = (original: ts.Expression | undefined, typeChecker: ts.TypeChecker): iasl.Identifier | iasl.LiteralExpressionLike | iasl.AslIntrinsicFunction | iasl.BinaryExpression | undefined => {
  if (original === undefined) {
    return undefined;
  }
  let expr = original;
  if (ts.isArrowFunction(original)) {
    expr = original.body as ts.Expression;
  }
  if (ts.isParenthesizedExpression(expr)) {
    expr = expr.expression as ts.Expression;
  }
  if (ts.isIdentifier(expr) && expr.text === "undefined") {
    return {
      value: null,
      type: "null",
      _syntaxKind: iasl.SyntaxKind.Literal,
    } as iasl.LiteralExpression;
  } else if (ts.isLiteralExpression(expr)) {
    if (ts.isNumericLiteral(expr)) {
      return {
        value: new Number(expr.text).valueOf(),
        type: "numeric",
        _syntaxKind: iasl.SyntaxKind.Literal,
      } as iasl.LiteralExpression;
    } else if (ts.isStringLiteral(expr)) {
      return {
        value: expr.text,
        type: "string",
        _syntaxKind: iasl.SyntaxKind.Literal,
      } as iasl.LiteralExpression;
    }
  }
  else if (ts.isObjectLiteralExpression(expr)) {
    return {
      properties: convertObjectLiteralExpression(expr, typeChecker),
      _syntaxKind: iasl.SyntaxKind.LiteralObject,
    } as iasl.LiteralObjectExpression;
  } else if (ts.isArrayLiteralExpression(expr)) {
    return {
      elements: expr.elements.map(x => convertExpressionToLiteralOrIdentifier(x, typeChecker)),
      _syntaxKind: iasl.SyntaxKind.LiteralArray,
    } as iasl.LiteralArrayExpression;
  } else if (expr.kind === ts.SyntaxKind.TrueKeyword) {
    return {
      value: true,
      type: "boolean",
      _syntaxKind: iasl.SyntaxKind.Literal,
    } as iasl.LiteralExpression;
  } else if (expr.kind === ts.SyntaxKind.FalseKeyword) {
    return {
      value: false,
      type: "boolean",
      _syntaxKind: iasl.SyntaxKind.Literal,
    } as iasl.LiteralExpression;
  } else if (expr.kind === ts.SyntaxKind.UndefinedKeyword || expr.kind === ts.SyntaxKind.NullKeyword) {
    return {
      value: null,
      type: "null",
      _syntaxKind: iasl.SyntaxKind.Literal,
    } as iasl.LiteralExpression;
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
        statements: convertToIntermediaryAsl(expr, typeChecker)
      },
      _syntaxKind: iasl.SyntaxKind.Function,
    } as iasl.Function;
  }
  else if (ts.isCallExpression(expr)) {
    const _arguments = expr.arguments.map(x => convertExpressionToLiteralOrIdentifier(x, typeChecker));
    const functionName = convertToIdentifier(expr.expression, typeChecker);
    if (!(functionName?.identifier) || functionName.indexExpression || functionName.lhs) {
      throw new Error("call expression must be simple identifier")
    }
    return {
      arguments: _arguments,
      function: functionName.identifier,
      _syntaxKind: "asl-intrinsic-function"
    } as iasl.AslIntrinsicFunction;
  } else if (ts.isBinaryExpression(expr)) {
    const convertedOperator = convertBinaryOperatorToken(expr.operatorToken)
    let expression = {
      lhs: convertExpressionToLiteralOrIdentifier(expr.left, typeChecker),
      operator: convertedOperator.op,
      rhs: convertExpressionToLiteralOrIdentifier(expr.right, typeChecker),
      _syntaxKind: iasl.SyntaxKind.BinaryExpression
    } as iasl.BinaryExpression;

    if (convertedOperator.not) {
      expression = {
        operator: "not",
        rhs: expression,
        _syntaxKind: iasl.SyntaxKind.BinaryExpression
      } as iasl.BinaryExpression;
    }
    return expression;
  } else if (ts.isPrefixUnaryExpression(expr)) {
    if (expr.operator === ts.SyntaxKind.ExclamationToken) {
      return {
        operator: "not",
        rhs: {
          operator: "is-present",
          rhs: convertExpressionToLiteralOrIdentifier(expr.operand, typeChecker),
          _syntaxKind: iasl.SyntaxKind.BinaryExpression
        } as iasl.BinaryExpression,
        _syntaxKind: iasl.SyntaxKind.BinaryExpression
      } as iasl.BinaryExpression;
    }
    //
  }


  //not a literal, try identifier
  const identifier = convertToIdentifier(expr, typeChecker);
  if (identifier) {
    return identifier;
  }
  throw new ParserError("unable to unpack expression ", expr);
}

const unpackAsLiteral = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): string | boolean | number | null | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!iasl.Check.isLiteral(propValue)) {
    throw new Error(`property ${propertyName} must be literal`);
  }
  return propValue.value;
}

const unpackAsBinaryExpression = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): iasl.BinaryExpression | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (iasl.Check.isIdentifier(propValue)) {
    return {
      operator: "is-present",
      rhs: propValue,
    } as iasl.BinaryExpression;
  }
  if (!iasl.Check.isBinaryExpression(propValue)) {
    throw new Error(`property ${propertyName} must be binary expression`);
  }
  return propValue;
}


const unpackLiteralValue = (val: iasl.Expression | iasl.Identifier) => {

  if (iasl.Check.isLiteral(val)) {
    return val.value;
  } else if (iasl.Check.isLiteralArray(val)) {
    return val.elements.map(x => unpackLiteralValue(x));
  } else if (iasl.Check.isLiteralObject(val)) {
    let result: Record<string, string | boolean | number | null | [] | {}> = {};
    for (const [propName, propVal] of Object.entries(val.properties)) {
      result[propName] = unpackLiteralValue(propVal);
    }
    return result;
  } else if (iasl.Check.isFunction(val)) {

    if (val.argName) {
      //todo: visit all identifiers and strip of `propValue.argName`
    }
    return val.block;
  }

  return val;
}

const unpackAsLiteralLike = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): string | boolean | number | null | [] | {} | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;
  return unpackLiteralValue(propValue);
}


const unpackArray = <TElement>(args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string, unpackElement: (element: iasl.Expression | iasl.Identifier) => TElement): TElement[] => {
  const propValue = args[propertyName];
  if (propValue === undefined) return [];

  if (!iasl.Check.isLiteralArray(propValue)) {
    throw new Error(`property ${propertyName} must be array`);
  }

  return propValue.elements.map(x => unpackElement(x));
}

const unpackFunctionBlock = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): iasl.Block | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!iasl.Check.isFunction(propValue)) {
    throw new Error(`property ${propertyName} must be function`);
  }

  if (propValue.argName) {
    //todo: visit all identifiers and strip of `propValue.argName`
  }
  return propValue.block;
}


const unpackAsIdentifier = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): iasl.Identifier | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!iasl.Check.isIdentifier(propValue)) {
    throw new Error(`property ${propertyName} must be identifier`);
  }
  return propValue;
}


const convertBinaryOperatorToken = (operator: ts.BinaryOperatorToken): { op: iasl.BinaryOperator, not: boolean } => {
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

    case ts.SyntaxKind.BarBarToken:
      return { op: "or", not: false };

    case ts.SyntaxKind.AmpersandAmpersandToken:
      return { op: "and", not: false };

    default:
      const typescriptOp = ts.SyntaxKind[operator.kind];
      throw new Error("unexpected binary operator type " + typescriptOp);
  }
}