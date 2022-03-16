import * as ts from 'typescript';
import { ConverterOptions } from '../convert';
import { isAslCallExpression } from '../convert-ts-to-asllib/transformers/node-utility';

export const resolveExpressionsTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isBinaryExpression(node) && ts.isLiteralExpression(node.left) && ts.isLiteralExpression(node.right)) {
      const left = literalExpressionToValue(node.left);
      const right = literalExpressionToValue(node.right);
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
      }
    }
    if (ts.isTemplateExpression(node)) {
      let result = node.head.text;
      let allLiterals = true;
      for (const span of node.templateSpans) {
        if (!ts.isLiteralExpression(span.expression)) {
          allLiterals = false;
          break;
        } else {
          result = result + span.expression.text;
        }
        result = result + span.literal.text
      }
      if (allLiterals) {
        return valueToLiteralExpression(result);
      }
    }
    if (ts.isCallExpression(node)) {
      let type = isAslCallExpression(node);

      if (type === "deploy.getParameter") {
        if (!ts.isStringLiteral(node.arguments[0])) throw new Error(`first argument to asl.deploy.getParameter must be a literal (not a variable)`);
        const paramName = node.arguments[0].text;
        const val = converterOptions.getParameter ? converterOptions.getParameter(paramName) : "unresolved parameter: " + paramName;

        return valueToLiteralExpression(val as any);
      }
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};

const valueToLiteralExpression = (value: number | string): ts.LiteralExpression => {
  switch (typeof value) {
    case "string":
      return ts.factory.createStringLiteral(value);
    case "number":
      return ts.factory.createNumericLiteral(value);
  }
  throw new Error("unable to convert value to literal expression");
}

const literalExpressionToValue = (expression: ts.LiteralExpression): number => {
  if (expression.kind === ts.SyntaxKind.StringLiteral) {
    return expression.text as any;
  }

  if (expression.kind === ts.SyntaxKind.NumericLiteral) {
    return Number(expression.text);
  }

  throw new Error("literal expression kind unknown");
}