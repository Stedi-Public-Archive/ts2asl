
import * as ts from "typescript";
import * as iasl from "./ast"
import { ParserError } from "../ParserError";
import { convertToIdentifier } from "./helper";
import { removeSyntaxTransformer } from "./remove-syntax-transformer";
import { isAslCallExpression } from "../convert-ts-to-asllib/transformers/node-utility";
import { ensureNamedPropertiesTransformer } from "./ensure-named-properties";
import { createName } from "../create-name";
import { ConverterOptions } from "../convert";
import { resolveExpressionsTransformer } from "./resolve-constant-expressions-transformer";
const factory = ts.factory;

export interface ConverterContext {
  inputArgumentName?: string;
  contextArgumentName?: string;
  typeChecker: ts.TypeChecker;
  converterOptions: ConverterOptions;
}

export const convertToIntermediaryAsl = (body: ts.Block | ts.ConciseBody | ts.SourceFile, context: ConverterContext): iasl.StateMachine => {
  const result: iasl.Expression[] = [];

  const transformed = ts.transform<ts.Block | ts.ConciseBody | ts.SourceFile>(body, [removeSyntaxTransformer, ensureNamedPropertiesTransformer, resolveExpressionsTransformer(context.converterOptions)]).transformed[0];
  ts.forEachChild(transformed, toplevel => {
    const converted = convertNodeToIntermediaryAst(toplevel, context);
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

  return {
    inputArgumentName: context.inputArgumentName ? { identifier: context.inputArgumentName, _syntaxKind: iasl.SyntaxKind.Identifier } as iasl.Identifier : undefined,
    contextArgumentName: context.contextArgumentName ? { identifier: context.contextArgumentName, _syntaxKind: iasl.SyntaxKind.Identifier } as iasl.Identifier : undefined,
    statements: result,
    _syntaxKind: iasl.SyntaxKind.StateMachine
  }
}
export const convertNodeToIntermediaryAst = (toplevel: ts.Node, context: ConverterContext): iasl.Expression[] | iasl.Expression | undefined => {
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
    if (node.expression && ts.isCallExpression(node.expression)) {
      const callExpression = convertNodeToIntermediaryAst(node.expression, context);
      return [
        {
          name: {
            identifier: "return_var",
            compilerGenerated: true,
            _syntaxKind: iasl.SyntaxKind.Identifier,
            type: "unknown"
          },
          expression: callExpression,
          _syntaxKind: iasl.SyntaxKind.VariableAssignmentStatement
        } as iasl.VariableAssignmentStatement,
        {
          expression: {
            identifier: "return_var",
            compilerGenerated: true,
            _syntaxKind: iasl.SyntaxKind.Identifier,
            type: "unknown"
          },
          _syntaxKind: iasl.SyntaxKind.ReturnStatement,
        } as iasl.ReturnStatement,
      ]
    }
    else {
      const identifier = node.expression ? convertExpressionToLiteralOrIdentifier(node.expression, {}, context) : undefined;
      const expression = identifier == undefined ? convertExpression(node.expression, context) : identifier;

      return {
        expression,
        _syntaxKind: "return",
        stateName: node.expression ? createName(context.converterOptions, node, `Return %s`, node.expression) : createName(context.converterOptions, node, `Return`)
      } as iasl.ReturnStatement;
    }
  }

  if (ts.isVariableStatement(node)) {
    if (node.declarationList.declarations.length !== 1) throw new ParserError("Variable statement must have declaration list of 1", node);
    const decl = node.declarationList.declarations[0];

    // decl.type
    const identifier = convertToIdentifier(decl.name, context);
    if (!identifier) throw new ParserError("unable to convert declaration name to identifier string", node);

    let expression = convertExpression(decl.initializer, context);
    if (expression === undefined) expression = convertExpressionToLiteralOrIdentifier(decl.initializer, {}, context);
    if (!expression) throw new ParserError("unable to convert declaration initializer to expression", node);
    return {
      name: identifier,
      expression: expression,
      stateName: createName(context.converterOptions, node, `Assign %s`, decl.name),
      _syntaxKind: iasl.SyntaxKind.VariableAssignmentStatement
    } as iasl.VariableAssignmentStatement
  }

  if ((ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.EqualsToken)) {
    const identifier = convertToIdentifier(node.left, context);
    if (!identifier) throw new ParserError("unable to convert lhs of assignment to identifier string", node);


    let expression = convertExpression(node.right, context);
    if (expression === undefined) expression = convertExpressionToLiteralOrIdentifier(node.right, {}, context);
    if (!expression) throw new ParserError("unable to convert rhs of assignment to expression", node);

    return {
      name: identifier,
      expression: expression,
      stateName: createName(context.converterOptions, node, `Assign %s`, node.left),
      _syntaxKind: iasl.SyntaxKind.VariableAssignmentStatement
    } as iasl.VariableAssignmentStatement
  }

  if (node && ts.isAwaitExpression(node)) {
    node = node.expression;
  }

  if (ts.isReturnStatement(node)) {
    return {
      stateName: createName(context.converterOptions, node, "Return %s", node.expression!),
      expression: convertExpression(node.expression, context),
      _syntaxKind: iasl.SyntaxKind.ReturnStatement
    } as iasl.ReturnStatement
  }

  if (ts.isBreakStatement(node)) {
    return {
      stateName: createName(context.converterOptions, node, "Break"),
      _syntaxKind: iasl.SyntaxKind.AslSucceedState
    } as iasl.SucceedState
  }

  const result = convertExpression(node as ts.Expression, context);
  if (!result) {
    throw new ParserError("unknown expression type", node);
  }
  return result;
}

export const convertSingleExpression = (expression: ts.Expression | undefined, context: ConverterContext): iasl.Expression | undefined => {
  const result = convertExpression(expression, context);
  if (!result) return undefined;
  if (!Array.isArray(result)) return result;
  if (result.length != 1) {
    throw new Error("expected single expression");
  }
  return result[0];
}

export const convertExpression = (expression: ts.Expression | undefined, context: ConverterContext): iasl.Expression[] | iasl.Expression | undefined => {
  if (!expression) return undefined;

  if (ts.isCallExpression(expression)) {
    let type = isAslCallExpression(expression);
    if (!type) throw new Error("Call expression expected to be on asl module");

    if (type.startsWith("states.") || type.startsWith("jsonPath")) {
      return convertExpressionToLiteralOrIdentifier(expression, {}, context);
    }

    // if (type === "deploy.getParameter") {
    //   if (!ts.isStringLiteral(expression.arguments[0])) throw new Error(`first argument to asl.deploy.getParameter must be a literal (not a variable)`);
    //   const paramName = expression.arguments[0].text;
    //   const val = context.converterOptions.getParameter ? context.converterOptions.getParameter(paramName) : "unresolved parameter: " + paramName;
    //   return {
    //     value: val,
    //     type: typeof val,
    //     _syntaxKind: iasl.SyntaxKind.Literal
    //   } as iasl.LiteralExpression
    // }

    let argument = factory.createObjectLiteralExpression([], false);

    if (expression.arguments.length !== 0) {
      if (expression.arguments.length > 1) throw new Error("Call expression expected to have single argument");
      if (!ts.isObjectLiteralExpression(expression.arguments[0])) {
        throw new Error("Call expression expected to have object literal expression as argument");
      }
      argument = expression.arguments[0];
    };

    const convertedArgs = convertObjectLiteralExpression(argument, context);

    switch (type) {
      case "typescriptInvoke": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const comment = unpackAsLiteral(convertedArgs, "comment");
        const resource = unpackAsIdentifier(convertedArgs, "resource");
        const parameters = convertedArgs["parameters"];
        const retryConfiguration = unpackArray(convertedArgs, "retry", element => unpackLiteralValue(element));
        const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));

        let invokeType: "lambda" | "statemachine" = "lambda";
        switch (resource?.type) {
          case "callable-lambda":
            break;
          case "callable-statemachine":
            invokeType = "statemachine";
            break;
          default:
            if (!context.converterOptions.skipCheckCallables) {
              throw new Error("unsure how to typescriptInvoke a " + resource?.type);
            }
            break;
        }

        if (invokeType === "lambda") {
          return {
            stateName: name ?? "Invoke " + resource?.identifier,
            resource: "lambda:" + resource?.identifier,
            retry: retryConfiguration ?? context.converterOptions.defaultRetry,
            catch: catchConfiguration,
            parameters,
            source: comment,
            _syntaxKind: iasl.SyntaxKind.AslTaskState
          } as iasl.TaskState;
        } else {
          if (iasl.Check.isLiteralObject(parameters)) {
            parameters.properties["AWS_STEP_FUNCTIONS_STARTED_BY_EXECUTION_ID"] = {
              identifier: "$$.Execution.Id",
              _syntaxKind: iasl.SyntaxKind.Identifier,
              type: "unknown"
            };
          }
          return [
            {
              name: {
                identifier: "sfn_input",
                compilerGenerated: true,
                _syntaxKind: iasl.SyntaxKind.Identifier,
                type: "unknown"
              },
              expression: parameters,
              _syntaxKind: iasl.SyntaxKind.VariableAssignmentStatement
            } as iasl.VariableAssignmentStatement,
            {
              stateName: name ?? "Invoke " + resource?.identifier,
              resource: "arn:aws:states:::aws-sdk:sfn:startExecution",
              retry: retryConfiguration ?? context.converterOptions.defaultRetry,
              catch: catchConfiguration,
              parameters: {
                properties: {
                  Input: {
                    arguments: [
                      {
                        identifier: "sfn_input",
                        compilerGenerated: true,
                        _syntaxKind: iasl.SyntaxKind.Identifier,
                        type: "unknown"
                      },
                    ],
                    function: "asl.states.jsonToString",
                    _syntaxKind: iasl.SyntaxKind.AslIntrinsicFunction
                  },
                  StateMachineArn: {
                    value: "statemachine:" + resource?.identifier,
                    type: "string",
                    _syntaxKind: iasl.SyntaxKind.Literal,
                  }
                },
                _syntaxKind: iasl.SyntaxKind.LiteralObject
              } as iasl.LiteralObjectExpression,
              source: comment,
              _syntaxKind: iasl.SyntaxKind.AslTaskState
            } as iasl.TaskState,
          ];
        }
      };

      case "typescriptTry": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const try_ = unpackBlock(convertedArgs, "try");
        const finally_ = unpackBlock(convertedArgs, "finally");
        const retryConfiguration = unpackArray(convertedArgs, "retry", element => unpackLiteralValue(element));
        const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          stateName: name,
          try: try_,
          finally: finally_,
          catch: catchConfiguration,
          retry: retryConfiguration,
          source: comment,
          _syntaxKind: iasl.SyntaxKind.TryStatement
        } as iasl.TryStatement;
      };

      case "typescriptWhile": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const condition = unpackAsBinaryExpression(convertedArgs, "condition");
        const while_ = unpackBlock(convertedArgs, "block");
        const comment = unpackAsLiteral(convertedArgs, "comment");
        return {
          stateName: name,
          condition,
          while: while_,
          source: comment,
          _syntaxKind: iasl.SyntaxKind.WhileStatement
        } as iasl.WhileStatement;
      }

      case "typescriptDoWhile": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const condition = unpackAsBinaryExpression(convertedArgs, "condition");
        const while_ = unpackBlock(convertedArgs, "block");
        const comment = unpackAsLiteral(convertedArgs, "comment");
        return {
          stateName: name,
          condition,
          while: while_,
          source: comment,
          _syntaxKind: iasl.SyntaxKind.DoWhileStatement
        } as iasl.DoWhileStatement;
      }

      case "typescriptIf": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const condition = unpackAsBinaryExpression(convertedArgs, "condition");
        const then = unpackBlock(convertedArgs, "then");
        const else_ = unpackBlock(convertedArgs, "else");
        const comment = unpackAsLiteral(convertedArgs, "comment");
        return {
          stateName: name,
          condition,
          then,
          else: else_,
          source: comment,
          _syntaxKind: iasl.SyntaxKind.IfStatement
        } as iasl.IfExpression;
      };

      case "task": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const parameters = convertedArgs["parameters"];
        const resource = unpackAsLiteral(convertedArgs, "resource");
        const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));
        const retryConfiguration = unpackArray(convertedArgs, "retry", element => unpackLiteralValue(element));
        const timeoutSeconds = unpackAsLiteral(convertedArgs, "timeoutSeconds");
        const heartbeatSeconds = unpackAsLiteral(convertedArgs, "heartbeatSeconds");
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          stateName: name,
          resource: resource,
          parameters: parameters,
          catch: catchConfiguration,
          retry: retryConfiguration,
          timeoutSeconds,
          heartbeatSeconds,
          source: comment,
          _syntaxKind: iasl.SyntaxKind.AslTaskState
        } as iasl.TaskState;
      };

      case "wait": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const seconds = convertedArgs["seconds"];
        const timestamp = convertedArgs["timestamp"];
        const comment = unpackAsLiteral(convertedArgs, "comment");
        return {
          stateName: name,
          seconds,
          timestamp,
          source: comment,
          _syntaxKind: iasl.SyntaxKind.AslWaitState
        } as iasl.WaitState;
      };

      case "parallel": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const branches = unpackArray(convertedArgs, "branches", element => unpackLiteralValue(element));
        const retryConfiguration = unpackArray(convertedArgs, "retry", element => unpackLiteralValue(element));
        const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          stateName: name,
          branches,
          catch: catchConfiguration,
          retry: retryConfiguration,
          source: comment,
          _syntaxKind: iasl.SyntaxKind.AslParallelState
        } as iasl.ParallelState;
      };

      case "choice": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const choices = unpackArray(convertedArgs, "choices",
          (element) => {
            const x = element as iasl.LiteralObjectExpression;
            return {
              condition: unpackAsBinaryExpression(x.properties, "condition"),
              block: unpackBlock(x.properties, "block")
            };
          }
        );
        const _default = unpackBlock(convertedArgs, "default");
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          stateName: name,
          choices: choices,
          default: _default,
          source: comment,
          _syntaxKind: iasl.SyntaxKind.AslChoiceState
        } as iasl.ChoiceState;
      };

      case "map": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const maxConcurrency = unpackAsLiteral(convertedArgs, "maxConcurrency");
        const items = unpackAsIdentifier(convertedArgs, "items");
        const iterator = unpackBlock(convertedArgs, "iterator");
        const retryConfiguration = unpackArray(convertedArgs, "retry", element => unpackLiteralValue(element));
        const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          stateName: name,
          items,
          catch: catchConfiguration,
          retry: retryConfiguration,
          iterator,
          source: comment,
          maxConcurrency,
          _syntaxKind: iasl.SyntaxKind.AslMapState
        } as iasl.MapState;
      };

      case "pass": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const parameters = convertedArgs["parameters"];
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          stateName: name,
          parameters,
          source: comment,
          _syntaxKind: iasl.SyntaxKind.AslPassState
        } as iasl.PassState;
      };

      case "succeed": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          stateName: name,
          source: comment,
          _syntaxKind: "asl-succeed-state"
        } as iasl.SucceedState;
      };

      case "fail": {
        const name = unpackAsLiteral(convertedArgs, "name");
        const cause = unpackAsLiteral(convertedArgs, "cause");
        const error = unpackAsLiteral(convertedArgs, "error");
        const comment = unpackAsLiteral(convertedArgs, "comment");

        return {
          stateName: name,
          cause,
          error,
          source: comment,
          _syntaxKind: iasl.SyntaxKind.AslFailState
        } as iasl.FailState;
      };

    }

    if (type.startsWith("native")) {
      let remainder = type.substring(6);
      let resource = 'arn:aws:states:::aws-sdk:'; //dynamodb:getItem'
      let foundService = false;
      const servicesNames = ["DynamoDB", "EventBridge", "ECS", "Lambda", "Sfn", "S3", "SES", "SQS", "SNS", "SSM", "Textract", "APIGateway", "Organizations"];
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


      const caseConvertedArgs = {
        ...convertedArgs,
        parameters: {
          properties: {},
          _syntaxKind: iasl.SyntaxKind.LiteralObject
        } as iasl.LiteralObjectExpression
      }


      const parameters = convertedArgs.parameters as iasl.LiteralObjectExpression;
      if (parameters) {
        for (const [key, val] of Object.entries(parameters.properties ?? {})) {
          const keyCaseConverted = key[0].toUpperCase() + key.substring(1);
          caseConvertedArgs.parameters.properties[keyCaseConverted] = val;
        }
      }

      return {
        stateName: remainder,
        resource,
        ...caseConvertedArgs,
        source: undefined,
        _syntaxKind: iasl.SyntaxKind.AslTaskState
      } as iasl.TaskState;
    }

    else {
      throw new ParserError(`unknown asl lib function: asl.${type}`, expression);
    }
  }
}


export const convertObjectLiteralExpression = (expr: ts.ObjectLiteralExpression, context: ConverterContext): Record<string, iasl.Expression | iasl.Identifier> => {
  const result: Record<string, iasl.Expression | iasl.Identifier> = {};
  for (const property of expr.properties) {
    if (!property || !property.name) throw new Error('property literal expression has property without name');
    if (!ts.isPropertyAssignment(property)) throw new Error('property literal expression has property without assignment expression');
    let propertyName: string | undefined = undefined;
    if (ts.isIdentifier(property.name) || ts.isLiteralExpression(property.name)) {
      propertyName = property.name.text;
    }
    if (!propertyName) throw new ParserError("unable to extract property name for property assignment", expr);

    const initializer = convertExpressionToLiteralOrIdentifier(property.initializer, { block: ["block", "default"].includes(propertyName) }, context);
    if (initializer === undefined) continue;
    result[propertyName] = initializer
  }
  return result
}

export const convertExpressionToLiteralOrIdentifier = (original: ts.Expression | undefined, hints: { block?: boolean }, context: ConverterContext): iasl.Identifier | iasl.LiteralExpressionLike | iasl.AslIntrinsicFunction | iasl.TypeOfExpression | iasl.BinaryExpression | iasl.Expression | undefined => {
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
      properties: convertObjectLiteralExpression(expr, context),
      _syntaxKind: iasl.SyntaxKind.LiteralObject,
    } as iasl.LiteralObjectExpression;
  } else if (ts.isArrayLiteralExpression(expr)) {
    return {
      elements: expr.elements.map(x => convertExpressionToLiteralOrIdentifier(x, {}, context)),
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
  } else if (ts.isArrowFunction(original) && (hints.block || ts.isBlock(expr))) {
    let block: ts.Node = expr;
    if (!ts.isBlock(expr)) {
      block = factory.createBlock([expr as unknown as ts.Statement]);
    }
    let argName: undefined | string = undefined;
    if (original.parameters.length >= 1) {
      const identifier = (original.parameters[0].name) as ts.Identifier;
      argName = identifier.text;
      if (original.parameters.length >= 2) {
        throw new Error("Iterator block must not have more than 1 parameter");
      }
    }
    const fn = convertToIntermediaryAsl(block as ts.Block, { ...context, inputArgumentName: argName });
    delete fn.contextArgumentName;
    if (!fn.inputArgumentName) delete fn.inputArgumentName;
    (fn as iasl.Function)._syntaxKind = iasl.SyntaxKind.Function;
    return fn;
  }
  else if (ts.isCallExpression(expr)) {
    const expressionType = isAslCallExpression(expr);
    if (expressionType?.startsWith("states.")) {

      if (expr.arguments.some(x => ts.isObjectLiteralExpression(x))) {
        throw new ParserError("asl intrinsic function must not take literal objects as arguments (for now), use variables instead", expr);
      }
      const _arguments = expr.arguments.map(x => convertExpressionToLiteralOrIdentifier(x, {}, context));
      const functionName = convertToIdentifier(expr.expression, context);

      if (!(functionName?.identifier) || functionName.indexExpression || functionName.lhs) {
        throw new Error("call expression must be simple identifier")
      }
      return {
        arguments: _arguments,
        function: functionName.identifier,
        _syntaxKind: iasl.SyntaxKind.AslIntrinsicFunction
      } as iasl.AslIntrinsicFunction;

    } else if (expressionType?.startsWith("jsonPath")) {
      switch (expressionType) {
        case "jsonPathFilter":
          {
            if (expr.arguments.length !== 2) throw new Error("asl.jsonPathFilter must have 2 arguments");
            const lhs = convertToIdentifier(expr.arguments[0], context);
            if (!lhs) throw new Error("asl.jsonPathFilter first arg must be identifier");

            const expression = expr.arguments[1];
            if (!ts.isArrowFunction(expression)) throw new Error("asl.jsonPathFilter must have arrow func as 2nd arg");
            if (expression.parameters.length !== 1) throw new Error("asl.jsonPathFilter filter func must have 1 param");

            return {
              ...lhs,
              filterExpression: {
                argument: convertToIdentifier(expression.parameters[0].name, context),
                expression: convertExpressionToLiteralOrIdentifier(expression, {}, context)
              }
            } as iasl.Identifier;
          }
        case "jsonPathLength":
          {
            if (expr.arguments.length !== 1) throw new Error("asl.jsonPathLength must have 1 arguments");
            const lhs = convertToIdentifier(expr.arguments[0], context);
            if (!lhs) throw new Error("asl.jsonPathExpression 1st arg must be identifier");

            return {
              ...lhs,
              jsonPathExpression: ".length()"
            } as iasl.Identifier;
          }
          break;
        case "jsonPathExpression":
          {
            if (expr.arguments.length !== 2) throw new Error("asl.jsonPathExpression must have 2 arguments");
            const lhs = convertToIdentifier(expr.arguments[0], context);
            if (!lhs) throw new Error("asl.jsonPathExpression 1st arg must be identifier");

            const expression = expr.arguments[1];
            if (!ts.isStringLiteral(expression)) throw new Error("asl.jsonPathExpression 2nd arg must be string literal");

            return {
              ...lhs,
              jsonPathExpression: expression.text
            } as iasl.Identifier;
          }

        case "jsonPathSlice":
          {
            if (expr.arguments.length <= 2) throw new Error("asl.jsonPathSlice must have at least 2 arguments");
            if (expr.arguments.length > 4) throw new Error("asl.jsonPathSlice must have at most 4 arguments");
            const lhs = convertToIdentifier(expr.arguments[0], context);
            if (!lhs) throw new Error("asl.jsonPathExpression 1st arg must be identifier");


            const startArg = expr.arguments[1];
            if (!ts.isNumericLiteral(startArg)) throw new Error("asl.jsonPathExpression 2nd arg must be number literal");
            const sliceExpression = {
              start: Number(startArg.text),
            } as { start: number, end: number | undefined, step: number | undefined };

            if (expr.arguments.length > 2) {
              const endArg = expr.arguments[2];
              if (!ts.isNumericLiteral(endArg)) throw new Error("asl.jsonPathExpression 3rd arg must be number literal");
              sliceExpression.end = Number(endArg.text);
            }

            if (expr.arguments.length > 3) {
              const stepArg = expr.arguments[3];
              if (!ts.isNumericLiteral(stepArg)) throw new Error("asl.jsonPathExpression 4th arg must be number literal");
              sliceExpression.step = Number(stepArg.text);
            }
            return {
              ...lhs,
              sliceExpression,
            } as iasl.Identifier;
          }
      }
    }
  } else if (ts.isTypeOfExpression(expr)) {
    let expression = {
      operand: convertExpressionToLiteralOrIdentifier(expr.expression, {}, context),
      _syntaxKind: iasl.SyntaxKind.TypeOfExpression
    } as iasl.TypeOfExpression;
    return expression;
  } else if (ts.isBinaryExpression(expr)) {
    const convertedOperator = convertBinaryOperatorToken(expr.operatorToken)
    let expression = {
      lhs: convertExpressionToLiteralOrIdentifier(expr.left, {}, context),
      operator: convertedOperator.op,
      rhs: convertExpressionToLiteralOrIdentifier(expr.right, {}, context),
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
      if (ts.isPrefixUnaryExpression(expr.operand) && expr.operand.operator === ts.SyntaxKind.ExclamationToken) {
        return convertExpressionToLiteralOrIdentifier(expr.operand, {}, context);
      }
      return {
        operator: "not",
        rhs: {
          operator: "is-present",
          rhs: convertExpressionToLiteralOrIdentifier(expr.operand, {}, context),
          _syntaxKind: iasl.SyntaxKind.BinaryExpression
        } as iasl.BinaryExpression,
        _syntaxKind: iasl.SyntaxKind.BinaryExpression
      } as iasl.BinaryExpression;
    }
    //
  }

  const converted = convertExpression(expr, context)
  if (converted) {
    if (Array.isArray(converted)) {
      return {
        statements: converted,
        _syntaxKind: iasl.SyntaxKind.Block,
      } as iasl.Block;
    }
    return converted;
  }
  //not a literal, try identifier
  const identifier = convertToIdentifier(expr, context);
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

const unpackAsBinaryExpression = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): iasl.BinaryExpression | iasl.LiteralExpression | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (iasl.Check.isIdentifier(propValue)) {
    return {
      operator: "is-present",
      rhs: propValue,
      _syntaxKind: iasl.SyntaxKind.BinaryExpression,
    } as iasl.BinaryExpression;
  }
  if (iasl.Check.isLiteral(propValue)) {
    return {
      type: "boolean",
      value: !!(propValue.value),
      _syntaxKind: iasl.SyntaxKind.Literal
    } as iasl.LiteralExpression;
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
  } else if (iasl.Check.isStateMachine(val)) {
    return val;
  }

  return val;
}

const unpackArray = <TElement>(args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string, unpackElement: (element: iasl.Expression | iasl.Identifier) => TElement): TElement[] | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!iasl.Check.isLiteralArray(propValue)) {
    throw new Error(`property ${propertyName} must be array`);
  }

  return propValue.elements.map(x => unpackElement(x));
}


const unpackBlock = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): iasl.Block | undefined => {
  let propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!(iasl.Check.isBlock(propValue) || iasl.Check.isFunction(propValue))) {

    if (iasl.Check.isAslFailState(propValue) || iasl.Check.isAslSucceedState(propValue)) {
      return {
        statements: [
          {
            expression: propValue,
            _syntaxKind: iasl.SyntaxKind.ReturnStatement,
          } as iasl.ReturnStatement
        ],
        _syntaxKind: iasl.SyntaxKind.Block,
      } as iasl.Block;
    } else {
      return {
        statements: [
          {
            name: {
              identifier: "return_var",
              compilerGenerated: true,
              _syntaxKind: iasl.SyntaxKind.Identifier,
              type: "unknown"
            },
            expression: propValue,
            _syntaxKind: iasl.SyntaxKind.VariableAssignmentStatement
          } as iasl.VariableAssignmentStatement,
          {
            expression: {
              identifier: "return_var",
              compilerGenerated: true,
              _syntaxKind: iasl.SyntaxKind.Identifier,
              type: "unknown"
            },
            _syntaxKind: iasl.SyntaxKind.ReturnStatement,
          } as iasl.ReturnStatement,
        ],
        _syntaxKind: iasl.SyntaxKind.Block,
      } as iasl.Block;

    }
  }
  return propValue as unknown as iasl.Block;
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