import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples: return;`

export const returnStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isReturnStatement(node)) {

      if (node.expression) throw new ParserError(`return statement must not have expression`, node.expression)

      node = factory.createExpressionStatement(
        factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("ASL"),
            factory.createIdentifier("Succeed")
          ),
          undefined,
          []
        ));
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
