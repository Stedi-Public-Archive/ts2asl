import * as ts from 'typescript';

export const findParent = (node: ts.Node, predicate: (node: ts.Node) => boolean) => {
  let contextual = node.parent;
  while (contextual && !predicate(contextual)) {
    if (ts.isBlock(contextual)) return undefined;
    contextual = contextual.parent;
  }

  return contextual;
}

export const isLiteralOrIdentifier = (node?: ts.Node): node is ts.LiteralExpression | ts.PropertyAccessExpression | ts.LiteralExpression | ts.ObjectLiteralExpression | ts.ArrayLiteralExpression => {
  return (node !== undefined && (ts.isIdentifier(node) || ts.isPropertyAccessExpression(node) || ts.isLiteralExpression(node) || ts.isObjectLiteralExpression(node) || node.kind === ts.SyntaxKind.TrueKeyword || node.kind === ts.SyntaxKind.FalseKeyword || ts.isArrayLiteralExpression(node)))

}