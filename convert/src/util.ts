import ts from "typescript"


export const valueToLiteralExpression = (value: number | string): ts.LiteralExpression | ts.TrueLiteral | ts.FalseLiteral => {
  switch (typeof value) {
    case "boolean":
      return value ? ts.factory.createTrue() : ts.factory.createFalse();
    case "string":
      return ts.factory.createStringLiteral(value);
    case "number":
      return ts.factory.createNumericLiteral(value);
  }
  throw new Error("unable to convert value to literal expression");
}


export const literalExpressionToValue = (expression: ts.Expression): number | string | boolean | null | undefined => {
  if (ts.isParenthesizedExpression(expression)) {
    return literalExpressionToValue(expression.expression as ts.LiteralExpression);
  }
  if (ts.isLiteralExpression(expression)) {
    if (expression.kind === ts.SyntaxKind.StringLiteral) {
      return expression.text;
    }

    if (expression.kind === ts.SyntaxKind.NumericLiteral) {
      return Number(expression.text);
    }
  }
  if (expression.kind === ts.SyntaxKind.TrueKeyword) {
    return true;
  }
  if (expression.kind === ts.SyntaxKind.NullKeyword) {
    return null;
  }

  if (expression.kind === ts.SyntaxKind.FalseKeyword) {
    return false;
  }

  return undefined;
}

export const isLiteral = (node: ts.Node, recurse: boolean): boolean => {
  if (ts.isLiteralExpression(node)) {
    return true;
  }
  if (node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword || node.kind === ts.SyntaxKind.NullKeyword) {
    return true;
  }
  if (ts.isObjectLiteralExpression(node)) {
    if (!recurse) {
      return true;
    }

    for (const prop of node.properties) {
      if (ts.isPropertyAssignment(prop)) {
        if (!isLiteral(prop.initializer, recurse)) {
          return false;
        }
      }
      if (ts.isShorthandPropertyAssignment(prop)) {
        return false;
      }
      if (ts.isSpreadAssignment(prop)) {
        if (!isLiteral(prop.expression, recurse)) {
          return false;
        }
      }
    }
    return true;
  }
  if (ts.isArrayLiteralExpression(node)) {
    return !recurse || node.elements.every(x => isLiteral(x, recurse));
  }
  return false;
}