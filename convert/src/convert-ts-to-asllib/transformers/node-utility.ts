import * as ts from 'typescript';
const factory = ts.factory;

export const findParent = (node: ts.Node, predicate: (node: ts.Node) => boolean) => {
  let contextual = node.parent;
  while (contextual && !predicate(contextual)) {
    if (ts.isBlock(contextual)) return undefined;
    contextual = contextual.parent;
  }

  return contextual;
}

export const isLiteralOrIdentifier = (node?: ts.Node): node is ts.Identifier | ts.PropertyAccessExpression | ts.LiteralExpression | ts.ObjectLiteralExpression | ts.ArrayLiteralExpression => {
  return (node !== undefined && (ts.isIdentifier(node) || ts.isPropertyAccessExpression(node) || ts.isLiteralExpression(node) || ts.isObjectLiteralExpression(node) || node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword || ts.isArrayLiteralExpression(node)))
}

export const isIdentifier = (node?: ts.Node): node is ts.Identifier | ts.PropertyAccessExpression => {
  return (node !== undefined && ((ts.isIdentifier(node) || ts.isPropertyAccessExpression(node)) || ts.isParenthesizedExpression(node) && isIdentifier(node.expression) || (ts.isAsExpression(node) && isIdentifier(node.expression))));
}

export const isAslCallExpression = (node: ts.CallExpression) => {
  let parts: string[] = [];
  let context = node.expression;

  while (ts.isPropertyAccessExpression(context)) {
    parts.push(context.name.text);
    context = context.expression;
  }
  if (ts.isIdentifier(context) && context.text.toLowerCase() === "asl") {
    return parts.reverse().join(".");
  }
  return undefined;
}
export const isMathExpression = (node: ts.CallExpression) => {
  let parts: string[] = [];
  let context = node.expression;

  while (ts.isPropertyAccessExpression(context)) {
    parts.push(context.name.text);
    context = context.expression;
  }
  if (ts.isIdentifier(context) && context.text === "Math") {
    return parts.reverse().join(".");
  }
  return undefined;
}


export const ensureBooleanExpression = (node: ts.Expression) => {
  return node;
}