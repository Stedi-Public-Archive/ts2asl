import * as ts from "typescript"
export const convertToDollarSyntax = (expression: ts.PropertyAccessExpression | ts.PropertyAccessExpression | ts.Identifier): string => {

  if (ts.isIdentifier(expression)) {
    return `$.${expression.text}`
  }

  let path: string[] = [];
  let contextual: ts.Expression | undefined = expression.expression;
  while (contextual) {
    if (ts.isIdentifier(contextual)) {
      path.push('.' + contextual.text);
      contextual = undefined;
    } else if (ts.isPropertyAccessExpression(contextual)) {
      path.push('.' + contextual.name.text);
      contextual = contextual.expression;
    } else if (ts.isElementAccessExpression(contextual)) {
      if (!ts.isLiteralExpression(contextual.argumentExpression)) throw new Error("element access argument expression must be literal ")
      path.push('[' + contextual.argumentExpression.text + ']');
      contextual = contextual.expression;
    }
  }
  const pathAsString = path.reverse().join("")
  return `$${pathAsString}.${expression.name.text}`;
}