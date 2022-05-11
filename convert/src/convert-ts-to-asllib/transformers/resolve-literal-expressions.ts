import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import factory = ts.factory;
import { literalExpressionToValue, valueToLiteralExpression } from '../../util';

export const literalExpressionTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isBinaryExpression(node)) {
      const left = literalExpressionToValue(node.left) as number;
      const right = literalExpressionToValue(node.right) as number;

      if (ts.isStringLiteralLike(node.left) && node.operatorToken.kind === ts.SyntaxKind.PlusToken && !ts.isLiteralExpression(node.right)) {
        return factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createPropertyAccessExpression(
              factory.createIdentifier("asl"),
              factory.createIdentifier("states")
            ),
            factory.createIdentifier("format")
          ),
          undefined,
          [
            factory.createStringLiteral(node.left.text + "{}"),
            node.right,
          ]
        );
      }

      if (ts.isStringLiteralLike(node.right) && node.operatorToken.kind === ts.SyntaxKind.PlusToken && !ts.isLiteralExpression(node.left)) {
        return factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createPropertyAccessExpression(
              factory.createIdentifier("asl"),
              factory.createIdentifier("states")
            ),
            factory.createIdentifier("format")
          ),
          undefined,
          [
            factory.createStringLiteral("{}" + node.right.text),
            node.left,
          ]
        );
      }

      if (left === undefined || right === undefined) {
        if ([ts.SyntaxKind.PlusToken, ts.SyntaxKind.MinusToken, ts.SyntaxKind.AsteriskToken, ts.SyntaxKind.SlashToken].includes(node.operatorToken.kind)) {
          throw new ParserError("unable to resolve binary expression", node);
        } else {
          return node;
        }
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
