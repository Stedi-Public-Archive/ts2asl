import * as ts from "typescript"

export const convertToIdentifierString = (expression: ts.Expression | ts.BindingName): string | undefined => {

  if (ts.isIdentifier(expression)) {
    return expression.text;
  }

  let path: string[] = [];
  let contextual: ts.Expression | undefined = (expression as ts.PropertyAccessExpression | ts.ElementAccessExpression).expression;
  while (contextual) {
    if (ts.isIdentifier(contextual)) {
      if (contextual.text) {
        path.push('.' + contextual.text);
      }
      contextual = undefined;
    } else if (ts.isPropertyAccessExpression(contextual)) {
      path.push('.' + contextual.name.text);
      contextual = contextual.expression;
    } else if (ts.isElementAccessExpression(contextual)) {
      path.push('[' + convertToLiteralOrIdentifierString(contextual.argumentExpression) + ']');
      contextual = contextual.expression;
    } else {
      return undefined;
    }
  }
  let pathAsString = path.reverse().join("")
  if (pathAsString.startsWith(".")) pathAsString = pathAsString.substring(1);
  if (ts.isPropertyAccessExpression(expression)) {
    return `${pathAsString}.${expression.name.text}`;
  } else if (ts.isElementAccessExpression(expression)) {
    return `${pathAsString}[${convertToLiteralOrIdentifierString(expression.argumentExpression)}]`;
  }
  return undefined;
}

export const convertToLiteralOrIdentifierString = (expression: ts.Expression | ts.BindingName): string | undefined => {
  if (ts.isLiteralExpression(expression)) {
    return expression.text;
  }
  return convertToIdentifierString(expression);
}