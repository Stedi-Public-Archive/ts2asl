import * as ts from 'typescript';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples:
- throw new Error() 
- throw new Error("cause")
- throw new SpecialError("cause")`

export const throwStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isThrowStatement(node)) {
      if (!ts.isNewExpression(node.expression)) throw new Error(`throw statement must have new expression, ${validExamples}`);
      if (2 <= node.expression.arguments.length) throw new Error(`error thrown must not have 2 or more arguments, ${validExamples}`);
      if (node.expression.arguments.length === 1 && !ts.isStringLiteral(node.expression.arguments[0])) throw new Error(`error thrown must have string literal as argument, ${validExamples}`);

      const error = node.expression.expression.getText();
      let cause = undefined;

      if (node.expression.arguments.length === 1) {
        const causeLiteral = node.expression.arguments[0] as ts.StringLiteral;
        cause = causeLiteral.text;
      }

      const objectLiteralExpressions: ts.ObjectLiteralElementLike[] = [factory.createPropertyAssignment(
        factory.createIdentifier("Error"),
        factory.createStringLiteral(error, SingleQuote)
      )];

      if (cause) {
        objectLiteralExpressions.push(factory.createPropertyAssignment(
          factory.createIdentifier("Cause"),
          factory.createStringLiteral(cause, SingleQuote)
        ))
      }

      node = factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("ASL"),
          factory.createIdentifier("Failed")
        ),
        undefined,
        [factory.createObjectLiteralExpression(objectLiteralExpressions)]
      );

    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
