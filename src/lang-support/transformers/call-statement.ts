import * as ts from 'typescript';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples:
- await SayHello() 
- SayHello(arg)
- const response = SayHello()`

export const callStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isCallExpression(node)) {

      if (ts.isPropertyAccessExpression(node.expression) && ts.isIdentifier(node.expression.expression) && node.expression.expression.text === "ASL") return node;

      if (1 < node.arguments.length) throw new Error(`call expression must have 0 or 1 arguments, ${validExamples}`);
      if (!ts.isIdentifier(node.expression)) throw new Error(`call expression must be on identifier, ${validExamples}`);
      if (node.arguments.length === 1) {
        if (!ts.isIdentifier(node.arguments[0])) throw new Error(`call expression must have argument that is identifier, ${validExamples}`);
      }


      const target = node.expression.getText();

      node = factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("ASL"),
          factory.createIdentifier("Task")
        ),
        undefined,
        [factory.createObjectLiteralExpression(
          [
            factory.createPropertyAssignment(
              factory.createIdentifier("TypescriptInvoke"),
              factory.createIdentifier(target)
            ),
            ...(node.arguments.length === 0 ? [] : [factory.createPropertyAssignment(
              factory.createIdentifier("InputPath"),
              factory.createStringLiteral("$." + (node.arguments[0] as ts.Identifier).getText())
            )])
          ],
          true
        )]
      );
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
