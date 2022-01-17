import * as ts from "typescript"
export const convertToDollarSyntax = (expression: ts.PropertyAccessExpression | ts.Identifier): string => {

  if (ts.isIdentifier(expression)) {
    return `$.${expression.text}`
  }

  let path: string[] = [];
  let contextual = expression.expression;
  while (contextual) {
    if (ts.isIdentifier(contextual)) {
      path.push(contextual.text);
      contextual = undefined;
    } else if (ts.isPropertyAccessExpression(contextual)) {
      path.push(contextual.name.text);
      contextual = contextual.expression;
    }
  }
  const pathAsString = path.reverse().join(".")
  return `$.${pathAsString}.${expression.name.text}`;
}