import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';

export const removeUnnecessaryExpressionsTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isParenthesizedExpression(node) && ts.isIdentifier(node.expression)) {
      return node.expression;
    }
    if (ts.isParenthesizedExpression(node) && ts.isAwaitExpression(node.expression)) {
      return node.expression;
    }

    if (ts.isAsExpression(node)) {
      return node.expression;
    }

    if (ts.isNonNullExpression(node)) {
      return node.expression;
    }

    if (ts.isVoidExpression(node)) {
      return node.expression;
    }
    // x || [] => x
    if (ts.isBinaryExpression(node) && node.operatorToken.kind === ts.SyntaxKind.BarBarToken && (ts.isArrayLiteralExpression(node.right) && node.right.elements.length === 0)) {
      return node.left;
    }
    // ("hello") => "hello"
    if (ts.isParenthesizedExpression(node) && ts.isLiteralExpression(node.expression)) {
      return node.expression;
    }

    // ((x)) => (x)
    if (ts.isParenthesizedExpression(node) && ts.isParenthesizedExpression(node.expression)) {
      return node.expression;
    }

    // (x) => x
    if (ts.isParenthesizedExpression(node) && ts.isIdentifier(node.expression)) {
      return node.expression;
    }

    // (x.y) => x.y
    if (ts.isParenthesizedExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
      return node.expression;
    }

    // Promise.resolve(x) => x
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
      if (node.expression.name.text === "resolve" && ts.isIdentifier(node.expression.expression) && node.expression.expression.text === "Promise") {
        if (node.arguments.length === 1) {
          return node.arguments[0];
        }
      }
    }

    // Promise.all(x) => x
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression)) {
      if (node.expression.name.text === "all" && ts.isIdentifier(node.expression.expression) && node.expression.expression.text === "Promise") {
        if (node.arguments.length === 1) {
          const arg = node.arguments[0];
          if (ts.isPropertyAccessExpression(arg) || ts.isCallExpression(arg) || ts.isIdentifier(arg)) {
            return node.arguments[0];
          }
        }
      }
    }

    return node;
  }
  return ts.visitNode(rootNode, visit);
};
