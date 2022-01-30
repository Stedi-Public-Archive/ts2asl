import * as ts from "typescript"
import { convertExpressionToLiteralOrIdentifier } from ".";
import * as iast from "./ast"

export const convertToIdentifier = (expression: ts.Expression | ts.BindingName): iast.Identifier | undefined => {

  if (ts.isIdentifier(expression)) {
    return { identifier: expression.text, _syntaxKind: iast.SyntaxKind.Identifier } as iast.Identifier;
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
    return { identifier: `${pathAsString}.${expression.name.text}`, _syntaxKind: iast.SyntaxKind.Identifier } as iast.Identifier;
  } else if (ts.isElementAccessExpression(expression)) {
    const convertedIndexExpression = convertExpressionToLiteralOrIdentifier(expression.argumentExpression);
    return {
      identifier: pathAsString,
      indexExpression: convertedIndexExpression,
      lhs: convertToIdentifier(expression.expression),
      _syntaxKind: iast.SyntaxKind.Identifier,
    } as iast.Identifier
  }
  return undefined;
}

// export const convertToLiteralOrIdentifierString = (expression: ts.Expression | ts.BindingName): string | undefined => {
//   if (ts.isLiteralExpression(expression)) {
//     return expression.text;
//   }
//   return convertToIdentifierString(expression);
// }