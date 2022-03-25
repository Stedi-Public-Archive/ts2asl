import * as ts from 'typescript';
import { literalExpressionToValue, valueToLiteralExpression } from '../../util';

export const literalExpressionTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isBinaryExpression(node)) {
      const left = literalExpressionToValue(node.left) as number;
      const right = literalExpressionToValue(node.right) as number;

      if (left === undefined && right === undefined) {
        return node;
      }

      switch (node.operatorToken.kind) {
        case ts.SyntaxKind.PlusToken: {
          return valueToLiteralExpression(left + right);
        }
        case ts.SyntaxKind.MinusToken: {
          return valueToLiteralExpression(left - right);
        }
        case ts.SyntaxKind.AsteriskToken: {
          return valueToLiteralExpression(left * right);
        }
        case ts.SyntaxKind.SlashToken: {
          return valueToLiteralExpression(left / right);
        }
        case ts.SyntaxKind.BarBarToken: {
          return valueToLiteralExpression(left || right);
        }
        case ts.SyntaxKind.AmpersandAmpersandToken: {
          return valueToLiteralExpression(left && right);
        }
      }
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
