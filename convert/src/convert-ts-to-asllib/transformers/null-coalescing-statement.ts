import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
import factory = ts.factory;


export const nullCoalescingStatementTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isBinaryExpression(node)) {
      if (node.operatorToken.kind === ts.SyntaxKind.QuestionQuestionToken) {
        return factory.createConditionalExpression(
          node.left,
          factory.createToken(ts.SyntaxKind.QuestionToken),
          node.left,
          factory.createToken(ts.SyntaxKind.ColonToken),
          node.right
        );
      }
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
