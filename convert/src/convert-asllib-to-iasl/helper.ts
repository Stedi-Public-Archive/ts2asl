import * as ts from "typescript"
import { convertExpressionToLiteralOrIdentifier } from ".";
import * as iasl from "./ast"

export const convertToIdentifier = (expression: ts.Expression | ts.BindingName, typeChecker: ts.TypeChecker): iasl.Identifier | undefined => {

  if (ts.isIdentifier(expression)) {

    const type = typeChecker.getTypeAtLocation(expression);
    const iaslType = convertType(type);
    return { identifier: expression.text, _syntaxKind: iasl.SyntaxKind.Identifier, type: iaslType } as iasl.Identifier;
  }


  let path: string[] = [];
  let contextual: ts.Expression | undefined = (expression as ts.PropertyAccessExpression | ts.ElementAccessExpression).expression;
  while (contextual) {
    if (ts.isIdentifier(contextual)) {
      if (contextual.text) {
        path.push(contextual.text);
      }
      contextual = undefined;
    } else if (ts.isPropertyAccessExpression(contextual)) {
      path.push(contextual.name.text);
      contextual = contextual.expression;
    } else if (ts.isElementAccessExpression(contextual)) {
      if (ts.isPropertyAccessExpression(expression)) {
        path.push(expression.name.text);
      }
      expression = contextual;
      break;

    } else {
      return undefined;
    }
  }

  let pathAsString = path.reverse().join(".")
  if (ts.isPropertyAccessExpression(expression)) {
    const type = typeChecker.getTypeAtLocation(expression);
    const iaslType = convertType(type);
    return { identifier: `${pathAsString}.${expression.name.text}`, type: iaslType, _syntaxKind: iasl.SyntaxKind.Identifier } as iasl.Identifier;
  } else if (ts.isElementAccessExpression(expression)) {
    const convertedIndexExpression = convertExpressionToLiteralOrIdentifier(expression.argumentExpression, typeChecker);
    return {
      identifier: pathAsString,
      indexExpression: convertedIndexExpression,
      lhs: convertToIdentifier(expression.expression, typeChecker),
      _syntaxKind: iasl.SyntaxKind.Identifier,
    } as iasl.Identifier
  }
  return undefined;
}


function convertType(type: ts.Type): iasl.Type {
  if (hasFlag(type, ts.TypeFlags.Object)) {
    return "object"
  }

  if (hasFlag(type, ts.TypeFlags.String)) {
    return "string"
  }

  if (hasFlag(type, ts.TypeFlags.Number)) {
    return "numeric"
  }

  if (hasFlag(type, ts.TypeFlags.Boolean)) {
    return "boolean"
  }
  return "unknown";
  return (type as unknown as {intrinsicName: string}).intrinsicName as iasl.Type;

}
function hasFlag(type: ts.Type, flag: ts.TypeFlags) {
  return (type.flags & flag) === flag;
}
// export const convertToLiteralOrIdentifierString = (expression: ts.Expression | ts.BindingName): string | undefined => {
//   if (ts.isLiteralExpression(expression)) {
//     return expression.text;
//   }
//   return convertToIdentifierString(expression);
// }