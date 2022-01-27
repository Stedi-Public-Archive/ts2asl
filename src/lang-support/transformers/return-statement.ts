import * as ts from 'typescript';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples: return;`

export const returnStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isReturnStatement(node)) {

      const assignments: ts.PropertyAssignment[] = []

      if (node.expression) {
        assignments.push(factory.createPropertyAssignment(
          factory.createIdentifier("result"),
          node.expression
        ))
      }

      return factory.createExpressionStatement(
        factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("asl"),
            factory.createIdentifier("succeed")
          ),
          undefined,
          [factory.createObjectLiteralExpression(
            assignments,
            true)]
        ));
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
