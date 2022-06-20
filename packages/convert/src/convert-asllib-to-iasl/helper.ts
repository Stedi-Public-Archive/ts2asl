import * as ts from "typescript";
import { ConverterContext, convertExpressionToLiteralOrIdentifier } from ".";
import { aslStyleCallExpression } from "../convert/list-function-declarations";
import * as iasl from "./ast";
import { IdentifierFactory } from "./iaslfactory";

export const inferIaslType = (expression: ts.Expression, context: ConverterContext): iasl.Type => {
  const { typeChecker } = context;
  const type = typeChecker.getTypeAtLocation(expression);
  const symbol = typeChecker.getSymbolAtLocation(expression);
  return convertType(type, symbol);
}

export const convertToIdentifier = (expression: ts.Expression | ts.BindingName, context: ConverterContext): iasl.Identifier | undefined => {
  
  if (ts.isIdentifier(expression)) {
    const iaslType = inferIaslType(expression, context);
    const identifier = IdentifierFactory.create({ identifier: expression.text, type: iaslType });
    return identifier;
  }

  let path: string[] = [];
  let contextual: ts.Expression | undefined = (expression as ts.PropertyAccessExpression | ts.ElementAccessExpression).expression;
  if (!ts.isElementAccessExpression(expression)) {
    while (contextual) {
      if (ts.isIdentifier(contextual)) {
        if (contextual.text) {
          path.push(contextual.text);
        }
        contextual = undefined;
      } else if (ts.isElementAccessExpression(contextual)) {
        if (ts.isPropertyAccessExpression(expression)) {
          path.push(expression.name.text);
        }
        expression = contextual;
        break;
      } else if (ts.isPropertyAccessExpression(contextual)) {
        path.push(contextual.name.text);
        contextual = contextual.expression;
      } else {
        return undefined;
      }
    }
  }
  let pathAsString = path.reverse().join(".");
  if (ts.isPropertyAccessExpression(expression)) {
    const iaslType = inferIaslType(expression, context);
    return IdentifierFactory.create({ identifier: `${pathAsString}.${expression.name.text}`, type: iaslType});
  } else if (ts.isElementAccessExpression(expression)) {
    const convertedIndexExpression = convertExpressionToLiteralOrIdentifier(expression.argumentExpression, {}, context);
    const iaslType = inferIaslType(expression, context);
    return IdentifierFactory.create({
      identifier: pathAsString,
      indexExpression: convertedIndexExpression,
      lhs: convertToIdentifier(expression.expression, context),
      type: iaslType
    });
  }
  return undefined;
};

export function convertType(type: ts.Type, symbol?: ts.Symbol): iasl.Type {
  
  if (hasFlag(type, ts.TypeFlags.Object) || type.flags === 1) {
    const callSignatures = type.getCallSignatures();
    if (callSignatures.length > 0 || type.flags === 1) {
      if (symbol?.valueDeclaration && ts.isVariableDeclaration(symbol.valueDeclaration) 
          && symbol.valueDeclaration.initializer && ts.isCallExpression(symbol.valueDeclaration.initializer)) {
        const result = aslStyleCallExpression(symbol.valueDeclaration.initializer);
        
        if (result?.operation === "asLambda") {
          return "callable-lambda";
        }
        if (result?.operation === "asStateMachine") {
          return "callable-statemachine";
        }
      }
      if (type.flags === 1) {
        return "unknown";
      }
      return "callable";
    }
    return "object";
  }

  if (hasFlag(type, ts.TypeFlags.String) || hasFlag(type, ts.TypeFlags.StringLiteral)) {
    return "string";
  }

  if (hasFlag(type, ts.TypeFlags.Number) || hasFlag(type, ts.TypeFlags.NumberLiteral)) {
    return "numeric";
  }

  if (hasFlag(type, ts.TypeFlags.Boolean) || hasFlag(type, ts.TypeFlags.BooleanLiteral)) {
    return "boolean";
  }
  return "unknown";
}
function hasFlag(type: ts.Type, flag: ts.TypeFlags) {
  return (type.flags & flag) === flag;
}