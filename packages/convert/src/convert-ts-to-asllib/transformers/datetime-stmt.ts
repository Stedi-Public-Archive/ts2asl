import * as ts from 'typescript';
const factory = ts.factory;


export const newDateTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression) && ts.isNewExpression(node.expression.expression)) {
      if (ts.isIdentifier(node.expression.expression.expression) && node.expression.expression.expression.text === "Date") {
        if (ts.isIdentifier(node.expression.name) && node.expression.name.text === "toISOString") {
          node = factory.createCallExpression(
            factory.createPropertyAccessExpression(
              factory.createIdentifier("asl"),
              factory.createIdentifier("jsonPath")
            ),
            undefined,
            [factory.createStringLiteral("$$.State.EnteredTime")]
          );
        }
      }

    }

    return node;
  }
  return ts.visitNode(rootNode, visit);
};
