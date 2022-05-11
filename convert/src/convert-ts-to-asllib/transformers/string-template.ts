import * as ts from 'typescript';
import factory = ts.factory;
import { valueToLiteralExpression } from '../../util';

export const stringTemplateTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isNoSubstitutionTemplateLiteral(node)) {
      return factory.createStringLiteral(node.text);
    }
    if (ts.isTemplateExpression(node)) {
      let result = escapeText(node.head.text);
      let allLiterals = true;
      let args = [] as ts.Expression[];
      for (const span of node.templateSpans) {
        if (!ts.isLiteralExpression(span.expression)) {
          allLiterals = false;
          result = result + "{}";
          args.push(span.expression);
        } else {
          result = result + escapeText(span.expression.text);
        }
        result = result + escapeText(span.literal.text);
      }
      if (allLiterals) {
        return valueToLiteralExpression(result);
      } else {
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
            factory.createStringLiteral(result),
            ...args,
          ]
        );
      }
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};

const escapeText = (text: string): string => {
  if (!text) return text;
  return text.replace(/}|{|\'|\\/g, x => '\\' + x);
};