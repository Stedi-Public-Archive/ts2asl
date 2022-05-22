import * as ts from 'typescript';

export const removeSyntaxTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isParenthesizedExpression(node) && ts.isIdentifier(node.expression)) {
      return node.expression;
    }

    // if (ts.isAwaitExpression(node)) {
    //   return node.expression;
    // }

    if (ts.isAsExpression(node)) {
      return node.expression;
    }

    return node;
  }
  return ts.visitNode(rootNode, visit);
};
