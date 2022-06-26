
import * as ts from "typescript";
import * as iasl from "./ast";
import { ParserError } from "../ParserError";
import { convertToIdentifier, inferIaslType } from "./helper";
import { removeSyntaxTransformer } from "./remove-syntax-transformer";
import { isAslCallExpression } from "../convert-ts-to-asllib/transformers/node-utility";
import { ensureNamedPropertiesTransformer } from "./ensure-named-properties";
import { createName } from "../create-name";
import { ConverterOptions } from "../convert";
import { AslChoiceStateFactory, AslFailStateFactory, AslIntrinsicFunctionFactory, AslInvokeStateMachineFactory, AslMapStateFactory, AslPassStateFactory, AslSucceedStateFactory, AslTaskStateFactory, AslWaitStateFactory, BinaryExpressionFactory, BreakFactory, ConditionalExpressionFactory, ContinueFactory, DoWhileStatementFactory, ForEachFactory, IdentifierFactory, IfFactory, LiteralArrayFactory, LiteralFactory, LiteralObjectFactory, ReturnStatementFactory, SwitchFactory, TryFactory, TypeOfFactory, VariableAssignmentFactory, WhileFactory } from "./iaslfactory";
import { TransformUtil } from "../convert-ts-to-asllib/transformers/transform-utility";
const factory = ts.factory;

export interface ConverterContext {
  inputArgumentName?: string;
  contextArgumentName?: string;
  typeChecker: ts.TypeChecker;
  converterOptions: ConverterOptions;
}

export const convertToIntermediaryAsl = (body: ts.Block | ts.ConciseBody | ts.SourceFile, context: ConverterContext): iasl.StateMachine => {
  const result: iasl.Expression[] = [];

  const transformed = ts.transform<ts.Block | ts.ConciseBody | ts.SourceFile>(body, [removeSyntaxTransformer, ensureNamedPropertiesTransformer]).transformed[0];
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
    inputArgumentName: context.inputArgumentName ? IdentifierFactory.create({ identifier: context.inputArgumentName, type: "object" }) : undefined,
    contextArgumentName: context.contextArgumentName ? IdentifierFactory.create({ identifier: context.contextArgumentName, type: "object" })  : undefined,
    statements: result,
    _syntaxKind: iasl.SyntaxKind.StateMachine
  };
};
export const convertNodeToIntermediaryAst = (toplevel: ts.Node, context: ConverterContext): iasl.Expression | undefined => {
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
      const identifier = node.expression ? convertExpressionToLiteralOrIdentifier(node.expression, {}, context) : undefined;
      const expression = identifier == undefined ? convertExpression(node.expression, context) : identifier;

      if (expression === undefined) {
        return ReturnStatementFactory.createReturnVoid();
      }

      return ReturnStatementFactory.create({
        stateName: createName(context.converterOptions, node, `Return %s`, node.expression),
        expression: expression
      });
    }

  if (ts.isVariableStatement(node)) {
    if (node.declarationList.declarations.length !== 1) throw new ParserError("Variable statement must have declaration list of 1", node);
    const decl = node.declarationList.declarations[0];

    // decl.type
    const identifier = convertToIdentifier(decl.name, context);
    if (!identifier) throw new ParserError("unable to convert declaration name to identifier string", node);

    const expression = convertExpressionToLiteralOrIdentifier(decl.initializer, {}, context); 
    const comment = TransformUtil.createComment(decl);
    if (!expression) throw new ParserError("unable to convert declaration initializer to expression", node);
    return VariableAssignmentFactory.create({
      stateName: createName(context.converterOptions, node, `Assign %s`, decl.name),
      name: identifier,
      source: comment,
      expression,
    });
  }

  if ((ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.EqualsToken)) {
    const identifier = convertToIdentifier(node.left, context);
    if (!identifier) throw new ParserError("unable to convert lhs of assignment to identifier string", node);


    let expression = convertExpression(node.right, context);
    if (expression === undefined) expression = convertExpressionToLiteralOrIdentifier(node.right, {}, context);
    if (!expression) throw new ParserError("unable to convert rhs of assignment to expression", node);

    return VariableAssignmentFactory.create({
      name: identifier,
      expression,
      stateName: createName(context.converterOptions, node, `Assign %s`, node.left),
    });
  }

  if (node && ts.isAwaitExpression(node)) {
    node = node.expression;
  }

  if (ts.isReturnStatement(node)) {

    const rhs = convertExpression(node.expression, context);

    if (rhs === undefined) {
      return ReturnStatementFactory.createReturnVoid();  
    }

    return ReturnStatementFactory.create({
      stateName: createName(context.converterOptions, node, "Return %s", node.expression),
      expression: rhs
    });
  }

  if (ts.isBreakStatement(node)) {
    return BreakFactory.create({
      stateName: createName(context.converterOptions, node, "Break")
    });
  }

  if (ts.isContinueStatement(node)) {
    return ContinueFactory.create({
      stateName: createName(context.converterOptions, node, "Continue"),
    });
  }

  const result = convertExpression(node as ts.Expression, context);
  if (!result) {
    throw new ParserError("unknown expression type", node);
  }
  return result;
};

export const convertSingleExpression = (expression: ts.Expression | undefined, context: ConverterContext): iasl.Expression | undefined => {
  const result = convertExpression(expression, context);
  if (!result) return undefined;
  if (!Array.isArray(result)) return result;
  if (result.length != 1) {
    throw new Error("expected single expression");
  }
  return result[0];
};

export const convertExpression = (expression: ts.Expression | undefined, context: ConverterContext): iasl.Expression | undefined => {
  if (!expression) return undefined;
  let isAwaited = false;

  if (ts.isAwaitExpression(expression)) {
    isAwaited = true;
    expression = expression.expression;
  }

  if (ts.isCallExpression(expression)) {
    let type = isAslCallExpression(expression);
    if (!type) throw new Error("Call expression expected to be on asl module");

    if (type.startsWith("states.") || type.startsWith("jsonPath")) {
      return convertExpressionToLiteralOrIdentifier(expression, {}, context);
    }

    let argument = factory.createObjectLiteralExpression([], false);

    if (expression.arguments.length !== 0) {
      if (expression.arguments.length > 1) throw new Error("Call expression expected to have single argument");
      if (!ts.isObjectLiteralExpression(expression.arguments[0])) {
        throw new Error("Call expression expected to have object literal expression as argument");
      }
      argument = expression.arguments[0];
    };

    switch (type) {
      case "typescriptInvoke": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const comment = unpackAsLiteralString(convertedArgs, "comment");
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
              throw new Error(`resource for target of invocation is expected to be "callable-lambda" or "callable-statemachine", found: ${resource?.type}.`);
            }
            break;
        }

        if (invokeType === "lambda") {
          return AslTaskStateFactory.create({
            stateName: name ?? "Invoke " + resource?.identifier,
            resource: `[!lambda[${resource?.identifier}]arn]`,
            retry: retryConfiguration ?? context.converterOptions.defaultRetry,
            catch: catchConfiguration,
            parameters,
            source: comment,
          });
        } else {
          return AslInvokeStateMachineFactory.create({
              stateName: name ?? "Invoke " + resource?.identifier,
              integrationPattern: isAwaited ? "sync" : undefined,
              stateMachineName: `[!state-machine[${resource?.identifier}]name]`,
              stateMachineArn: `[!state-machine[${resource?.identifier}]arn]`,
              parameters,
              retry: context.converterOptions.defaultRetry,
              source: comment
            });
        }
      };

      case "typescriptTry": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const try_ = unpackBlock(convertedArgs, "try")!;
        const finally_ = unpackBlock(convertedArgs, "finally");
        const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));
        const comment = unpackAsLiteralString(convertedArgs, "comment");

        return TryFactory.create({
          stateName: name,
          try: try_,
          finally: finally_,
          catch: catchConfiguration,
          source: comment,
        });
      };

      case "typescriptWhile": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const condition = unpackAsBinaryExpression(convertedArgs, "condition");
        const while_ = unpackBlock(convertedArgs, "block");
        const comment = unpackAsLiteralString(convertedArgs, "comment");
        
        if (!condition) throw new Error("While statement expected to have condition");

        return WhileFactory.create({
          stateName: name,
          condition,
          while: while_,
          source: comment
        });
      }

      case "typescriptDoWhile": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const condition = unpackAsBinaryExpression(convertedArgs, "condition");
        const while_ = unpackBlock(convertedArgs, "block");
        const comment = unpackAsLiteralString(convertedArgs, "comment");
        
        if (!condition) throw new Error("DoWhile statement expected to have condition");

        return DoWhileStatementFactory.create({
          stateName: name,
          condition,
          while: while_,
          source: comment
        });
      }

      case "typescriptIf": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const condition = unpackAsBinaryExpression(convertedArgs, "condition");
        const then = unpackBlock(convertedArgs, "then");
        const else_ = unpackBlock(convertedArgs, "else");
        const comment = unpackAsLiteralString(convertedArgs, "comment");

        if (!condition) throw new Error("If statement expected to have condition");

        return IfFactory.create({
          stateName: name,
          condition,
          then,
          else: else_,
          source: comment
        });
      };

      case "task": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const parameters = convertedArgs["parameters"];
        const resource = unpackAsLiteralString(convertedArgs, "resource");
        const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));
        const retryConfiguration = unpackArray(convertedArgs, "retry", element => unpackLiteralValue(element));
        const timeoutSeconds = unpackAsLiteralNumber(convertedArgs, "timeoutSeconds");
        const heartbeatSeconds = unpackAsLiteralNumber(convertedArgs, "heartbeatSeconds");
        const comment = unpackAsLiteralString(convertedArgs, "comment");

        if (resource === undefined) throw new Error("task is expected to have a resource");

        return AslTaskStateFactory.create({
          stateName: name,
          resource,
          parameters,
          catch: catchConfiguration,
          retry: retryConfiguration,
          timeoutSeconds,
          heartbeatSeconds,
          source: comment
        });
      };

      case "wait": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const seconds = convertedArgs["seconds"];
        const timestamp = convertedArgs["timestamp"];
        const comment = unpackAsLiteralString(convertedArgs, "comment");
        return AslWaitStateFactory.create({
          stateName: name,
          seconds,
          timestamp,
          source: comment,
        });
      };

      case "parallel": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
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
        } as iasl.AslParallelState;
      };

      case "choice": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const choices = unpackArray(convertedArgs, "choices",
          (element) => {
            const x = element as iasl.LiteralObjectExpression;
            const condition = unpackAsBinaryExpression(x.properties, "condition");

          if (!condition) throw new Error("Choice expected to have condition");
            return {
              condition,
              block: unpackBlock(x.properties, "block")
            };
          }
        );
        const _default = unpackBlock(convertedArgs, "default");
        const comment = unpackAsLiteralString(convertedArgs, "comment");

        return AslChoiceStateFactory.create({
          stateName: name,
          choices: choices,
          default: _default,
          source: comment
        });
      };

      case "map": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const maxConcurrency = unpackAsLiteralNumber(convertedArgs, "maxConcurrency");
        const items = unpackAsIdentifier(convertedArgs, "items");
        const iterator = unpackBlock(convertedArgs, "iterator");
        const retryConfiguration = unpackArray(convertedArgs, "retry", element => unpackLiteralValue(element));
        const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));
        const comment = unpackAsLiteralString(convertedArgs, "comment");
        if (items === undefined) throw new Error("map is expected to have items");

        return AslMapStateFactory.create({
          stateName: name,
          items,
          catch: catchConfiguration,
          retry: retryConfiguration,
          iterator,
          source: comment,
          maxConcurrency
        });
      };

      case "typescriptForeach": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const items = unpackAsIdentifier(convertedArgs, "items");
        const iterator = unpackBlock(convertedArgs, "iterator");
        const comment = unpackAsLiteralString(convertedArgs, "comment");
        if (items === undefined) throw new Error("foreach is expected to have items");
        if (iterator && !iasl.Check.isFunction(iterator)) throw new Error("foreach iterator must be function");

        return ForEachFactory.create({
          stateName: name,
          items,
          iterator,
          source: comment,
        });
      };
      case "typescriptSwitch": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const expression = unpackAsIdentifier(convertedArgs, "expression");
        const cases = unpackArray(convertedArgs, "cases", element => {
          const unpackedSimple = unpackLiteralValue(element) as { label: string | number | undefined, block: iasl.Block; };
          if (unpackedSimple.label !== undefined) {
            return {
              when: BinaryExpressionFactory.create({
                lhs: expression,
                operator: "eq",
                rhs: LiteralFactory.createFromRuntime(unpackedSimple.label),
              }),
              then: unpackedSimple.block,
            };
          } else {
            return {
              then: unpackedSimple.block,
            };
          }
        });
        const comment = unpackAsLiteralString(convertedArgs, "comment");

        return SwitchFactory.create({
          stateName: name,
          cases,
          source: comment,
        })
      };
      case "pass": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const parameters = convertedArgs["parameters"];
        const comment = unpackAsLiteralString(convertedArgs, "comment");

        return AslPassStateFactory.create( {
          stateName: name,
          parameters,
          source: comment,
        });
      };

      case "succeed": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const comment = unpackAsLiteralString(convertedArgs, "comment");

        return AslSucceedStateFactory.create({
          stateName: name,
          source: comment
        });
      };

      case "fail": {
        const convertedArgs = convertObjectLiteralExpression(argument, context);
        const name = unpackAsLiteralString(convertedArgs, "name");
        const cause = unpackAsLiteralString(convertedArgs, "cause");
        const error = unpackAsLiteralString(convertedArgs, "error");
        const comment = unpackAsLiteralString(convertedArgs, "comment");

        return AslFailStateFactory.create({
          stateName: name,
          cause,
          error,
          source: comment});
      };

    }

    if (type.startsWith("sdk")) {
      const convertedArgs = convertObjectLiteralExpression(argument, context);
      const name = unpackAsLiteralString(convertedArgs, "name");
      const retryConfiguration = unpackArray(convertedArgs, "retry", element => unpackLiteralValue(element));
      const catchConfiguration = unpackArray(convertedArgs, "catch", element => unpackLiteralValue(element));

      let remainder = type.substring(3);
      let resource = 'arn:aws:states:::aws-sdk:'; //dynamodb:getItem'
      let foundService = false;
      const servicesNames = ["Athena", "DynamoDB", "EventBridge", "ECS", "Lambda", "Sfn", "S3", "SES", "SQS", "SNS", "SSM", "Textract", "APIGateway", "Organizations", "CodeBuild", "CloudWatch", "STS", "IAM"];
      for (const serviceName of servicesNames) {
        if (remainder.startsWith(serviceName)) {
          resource += serviceName.toLowerCase() + ':';
          remainder = remainder.substring(serviceName.length);
          foundService = true;
          break;
        }
      }
      if (!foundService) {
        throw new Error(`unable to find service of sdk integration ${type} `);
      }

      resource += remainder[0].toLowerCase() + remainder.substring(1);
      const caseConvertedArgs = {
        ...convertedArgs,
        parameters: LiteralObjectFactory.create({
          properties: {}
        })
      };


      const parameters = convertedArgs.parameters as iasl.LiteralObjectExpression;
      if (parameters) {
        for (const [key, val] of Object.entries(parameters.properties ?? {})) {
          const keyCaseConverted = key[0].toUpperCase() + key.substring(1);
          caseConvertedArgs.parameters.properties[keyCaseConverted] = val;
        }
      }

      return AslTaskStateFactory.create({
        stateName: name ?? remainder,
        resource,
        parameters: caseConvertedArgs.parameters,
        catch: catchConfiguration,
        retry: retryConfiguration,
        source: undefined});
    }

    else {
      throw new ParserError(`unknown asl lib function: asl.${type}`, expression);
    }
  }
};


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

    const initializer = convertExpressionToLiteralOrIdentifier(property.initializer, { block: ["block", "default", "iterator"].includes(propertyName) }, context);
    if (initializer === undefined) continue;
    result[propertyName] = initializer;
  }
  return result;
};

export const convertExpressionToLiteralOrIdentifier = (original: ts.Expression | undefined, hints: { block?: boolean; }, context: ConverterContext): iasl.RightHandSideExpression | undefined => {
  if (original === undefined || original.kind === ts.SyntaxKind.FirstStatement) {
    return LiteralFactory.createFromRuntime(undefined);
  }
  let expr = original;
    
  if (ts.isArrowFunction(original)) {
    expr = original.body as ts.Expression;
  }
  if (ts.isParenthesizedExpression(expr)) {
    expr = expr.expression as ts.Expression;
  }
  if (ts.isIdentifier(expr) && expr.text === "undefined") {
    return LiteralFactory.createFromRuntime(undefined);
  } else if (ts.isLiteralExpression(expr)) {
    if (ts.isNumericLiteral(expr)) {
      const number = new Number(expr.text).valueOf();
      return LiteralFactory.createFromRuntime(number);
    } else if (ts.isStringLiteral(expr)) {
      return LiteralFactory.createFromRuntime(expr.text);
    }
  } else if (ts.isObjectLiteralExpression(expr)) {
    const properties = convertObjectLiteralExpression(expr, context);
    return LiteralObjectFactory.create({ properties });
  } else if (ts.isArrayLiteralExpression(expr)) {
    const elements = expr.elements.map(x => convertExpressionToLiteralOrIdentifier(x, {}, context)!);
    return LiteralArrayFactory.create({ elements });
  } else if (expr.kind === ts.SyntaxKind.TrueKeyword) {
    return LiteralFactory.createFromRuntime(true);
  } else if (expr.kind === ts.SyntaxKind.FalseKeyword) {
    return LiteralFactory.createFromRuntime(false);
  } else if (expr.kind === ts.SyntaxKind.UndefinedKeyword || expr.kind === ts.SyntaxKind.NullKeyword) {
    return LiteralFactory.createFromRuntime(null);
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
  } else if (ts.isCallExpression(expr)) {
    const expressionType = isAslCallExpression(expr);
    if (expressionType?.startsWith("states.")) {
      const _arguments = expr.arguments.map(x => convertExpressionToLiteralOrIdentifier(x, {}, context)!);
      const functionName = convertToIdentifier(expr.expression, context);
      const functionType = inferIaslType(expr, context);
      if (!(functionName?.identifier) || functionName.indexExpression || functionName.lhs) {
        throw new Error("call expression must be simple identifier");
      }
      return AslIntrinsicFunctionFactory.create({
        arguments: _arguments,
        type: functionType,
        function: functionName.identifier });

    } else if (expressionType?.startsWith("jsonPath")) {
      switch (expressionType) {
        case "jsonPathMap":
          {
            if (expr.arguments.length !== 2) throw new Error("asl.jsonPathMap must have 2 arguments");
            const lhs = convertToIdentifier(expr.arguments[0], context);
            if (!lhs) throw new Error("asl.jsonPathMap first arg must be identifier");

            const expression = expr.arguments[1];
            if (!ts.isStringLiteral(expression)) throw new Error("asl.jsonPathMap must have string literal as 2nd arg");

            return IdentifierFactory.create({
              ...lhs,
              mapExpression: expression.text,
            });
          }
        case "jsonPathFilter":
          {
            if (expr.arguments.length !== 2) throw new Error("asl.jsonPathFilter must have 2 arguments");
            const lhs = convertToIdentifier(expr.arguments[0], context);
            if (!lhs) throw new Error("asl.jsonPathFilter first arg must be identifier");

            const expression = expr.arguments[1];
            if (!ts.isArrowFunction(expression)) throw new Error("asl.jsonPathFilter must have arrow func as 2nd arg");
            if (expression.parameters.length !== 1) throw new Error("asl.jsonPathFilter filter func must have 1 param");

            return IdentifierFactory.create({
              ...lhs,
              filterExpression: {
                argument: convertToIdentifier(expression.parameters[0].name, context)!,
                expression: convertExpressionToLiteralOrIdentifier(expression, {}, context) as iasl.BinaryExpression //todo
              }
            });
          }
        case "jsonPathLength":
          {
            if (expr.arguments.length !== 1) throw new Error("asl.jsonPathLength must have 1 arguments");
            const lhs = convertToIdentifier(expr.arguments[0], context);
            if (!lhs) throw new Error("asl.jsonPathExpression 1st arg must be identifier");

            return IdentifierFactory.create({
              ...lhs,
              jsonPathExpression: ".length()"
            });
          }
          break;
        case "jsonPathExpression":
          {
            if (expr.arguments.length !== 2) throw new Error("asl.jsonPathExpression must have 2 arguments");
            const lhs = convertToIdentifier(expr.arguments[0], context);
            if (!lhs) throw new Error("asl.jsonPathExpression 1st arg must be identifier");

            const expression = expr.arguments[1];
            if (!ts.isStringLiteral(expression)) throw new Error("asl.jsonPathExpression 2nd arg must be string literal");

            return IdentifierFactory.create({
              ...lhs,
              jsonPathExpression: expression.text
            });
          }

        case "jsonPathSlice":
          {
            if (expr.arguments.length < 2) throw new Error("asl.jsonPathSlice must have at least 2 arguments");
            if (expr.arguments.length > 4) throw new Error("asl.jsonPathSlice must have at most 4 arguments");
            const lhs = convertToIdentifier(expr.arguments[0], context);
            if (!lhs) throw new Error("asl.jsonPathExpression 1st arg must be identifier");


            const startArg = expr.arguments[1];
            if (!ts.isNumericLiteral(startArg)) throw new Error("asl.jsonPathExpression 2nd arg must be number literal");
            const sliceExpression = {
              start: Number(startArg.text),
            } as { start: number, end: number | undefined, step: number | undefined; };

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
            
            return IdentifierFactory.create({
              ...lhs,
              sliceExpression,
            });
          }
      }
    }
  } else if (ts.isTypeOfExpression(expr)) {
    const operand = convertExpressionToLiteralOrIdentifier(expr.expression, {}, context);
    if (operand === undefined) throw new Error("typeof expression must have operand");
    return TypeOfFactory.create({
      operand
    });
  } else if (ts.isBinaryExpression(expr)) {
    const convertedOperator = convertBinaryOperatorToken(expr.operatorToken);
    let expression = BinaryExpressionFactory.create({
      lhs: convertExpressionToLiteralOrIdentifier(expr.left, {}, context),
      operator: convertedOperator.op,
      rhs: convertExpressionToLiteralOrIdentifier(expr.right, {}, context)!,
    });
    if (convertedOperator.not) {
      expression = BinaryExpressionFactory.create({
        operator: "not",
        rhs: expression,
      });
    }
    return expression;
  } else if (ts.isPrefixUnaryExpression(expr)) {
    if (expr.operator === ts.SyntaxKind.ExclamationToken) {
      return {
        operator: "not",
        rhs: convertExpressionToLiteralOrIdentifier(expr.operand, {}, context),
        _syntaxKind: iasl.SyntaxKind.BinaryExpression
      } as iasl.BinaryExpression;
    }
  } else if (ts.isConditionalExpression(expr)) {
    const condition = convertExpressionToLiteralOrIdentifier(expr.condition, {}, context);
    if (condition === undefined) throw new Error("conditional expression must have condition");
    return ConditionalExpressionFactory.create({
      condition: BinaryExpressionFactory.createIsTruthy(condition),
      whenTrue: convertExpressionToLiteralOrIdentifier(expr.whenTrue, {}, context)!,
      whenFalse: convertExpressionToLiteralOrIdentifier(expr.whenFalse, {}, context)!
    });

  } else if (ts.isPropertyAccessExpression(expr) && expr.questionDotToken?.kind === ts.SyntaxKind.QuestionDotToken) {
    const identifier = convertExpressionToLiteralOrIdentifier(expr.expression, {}, context) as iasl.Identifier;
    const property = factory.createPropertyAccessExpression(expr.expression, expr.name);
    return ConditionalExpressionFactory.create({
      condition: BinaryExpressionFactory.createIsTruthy(identifier),
      whenTrue: convertExpressionToLiteralOrIdentifier(property, {}, context)!,
      whenFalse: LiteralFactory.createFromRuntime(null),
    });

  } else if (ts.isReturnStatement(expr)) {
    return ReturnStatementFactory.createReturnVoid();
  } else if (ts.isContinueStatement(expr)) {
    return ContinueFactory.create({ });
  } else if (ts.isBreakStatement(expr)) {
    return BreakFactory.create({ });
  }
  const converted = convertExpression(expr, context);
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
};

const unpackAsLiteralNumber = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): number | undefined=> {
  const literal = unpackAsLiteral(args, propertyName);
  if (literal !== undefined && typeof literal !== "number") throw new Error("unpacked literal expected to be number");
  return literal;
}

const unpackAsLiteralString = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): string | undefined=> {
  const literal = unpackAsLiteral(args, propertyName);
  if (literal !== undefined && typeof literal !== "string") throw new Error("unpacked literal expected to be string");
  return literal;
}
const unpackAsLiteral = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): string | boolean | number | null | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!iasl.Check.isLiteral(propValue)) {
    throw new Error(`property ${propertyName} must be literal`);
  }
  return propValue.value;
};

const unpackAsBinaryExpression = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): iasl.BinaryExpression | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (iasl.Check.isIdentifier(propValue) || iasl.Check.isLiteralLike(propValue)) {
    return BinaryExpressionFactory.createIsTruthy(propValue);
  }
  if (!iasl.Check.isBinaryExpression(propValue)) {
    throw new Error(`property ${propertyName} must be binary expression`);
  }
  return propValue;
};

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
};

const unpackArray = <TElement>(args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string, unpackElement: (element: iasl.Expression | iasl.Identifier) => TElement): TElement[] | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!iasl.Check.isLiteralArray(propValue)) {
    throw new Error(`property ${propertyName} must be array`);
  }

  return propValue.elements.map(x => unpackElement(x));
};

const unpackBlock = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): iasl.Block | undefined => {
  let propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!(iasl.Check.isBlock(propValue) || iasl.Check.isFunction(propValue))) {
    if (iasl.Check.isAslFailState(propValue) || iasl.Check.isAslSucceedState(propValue)) {
      return {
        statements: [
          ReturnStatementFactory.create({
            expression: propValue,
          }),
        ],
        _syntaxKind: iasl.SyntaxKind.Block,
      } as iasl.Block;
    } else {
      return {
        statements: [
          VariableAssignmentFactory.create({
            name: IdentifierFactory.create({
              identifier: "result",
              compilerGenerated: true,
              type: "unknown"
            }),
            expression: propValue,
          }),
          ReturnStatementFactory.create({
            expression: IdentifierFactory.create({
              identifier: "result",
              compilerGenerated: true,
              type: "unknown"
            })
          }),
        ],
        _syntaxKind: iasl.SyntaxKind.Block,
      } as iasl.Block;

    }
  }
  return propValue as unknown as iasl.Block;
};


const unpackAsIdentifier = (args: Record<string, iasl.Expression | iasl.Identifier>, propertyName: string): iasl.Identifier | undefined => {
  const propValue = args[propertyName];
  if (propValue === undefined) return undefined;

  if (!iasl.Check.isIdentifier(propValue)) {
    throw new Error(`property ${propertyName} must be identifier`);
  }
  return propValue;
};


const convertBinaryOperatorToken = (operator: ts.BinaryOperatorToken): { op: iasl.BinaryOperator, not: boolean; } => {
  switch (operator.kind) {
    case ts.SyntaxKind.EqualsEqualsEqualsToken:
    case ts.SyntaxKind.EqualsEqualsToken:
      return { op: "eq", not: false };

    case ts.SyntaxKind.ExclamationEqualsEqualsToken:
    case ts.SyntaxKind.ExclamationEqualsToken:
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

    case ts.SyntaxKind.InKeyword:
      return { op: "exists-in", not: false };

    default:
      const typescriptOp = ts.SyntaxKind[operator.kind];
      throw new Error("unexpected binary operator type " + typescriptOp);
  }
};