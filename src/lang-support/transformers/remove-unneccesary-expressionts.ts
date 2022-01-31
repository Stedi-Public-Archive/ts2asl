import exp = require('constants');
import * as ts from 'typescript';
import factory = ts.factory;

export const removeUnnecessaryExpressionsTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isAsExpression(node)) {
      return node.expression;
    }

    // x || [] => x
    if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.BarBarToken && (ts.isArrayLiteralExpression(node.right) && node.right.elements.length === 0)) {
      return node.left;
    }

    // ((x)) => (x)
    if (ts.isParenthesizedExpression(node) && ts.isParenthesizedExpression(node.expression)) {
      return node.expression;
    }

    return node;
  }
  return ts.visitNode(rootNode, visit);
};
