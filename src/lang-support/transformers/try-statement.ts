import * as ts from 'typescript';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples:
- try { console.log('worked'); } catch { console.log('any error'); }
`

export const tryStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isTryStatement(node)) {

      let comment: string | undefined = undefined;
      try {
        comment = node.getText();
      } catch { }

      const assignments: ts.PropertyAssignment[] = []
      assignments.push(
        factory.createPropertyAssignment(
          factory.createIdentifier("try"),
          factory.createArrowFunction(
            undefined,
            undefined,
            [],
            undefined,
            factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            node.tryBlock
          )
        ));

      if (node.catchClause?.block) {
        if (node.catchClause.variableDeclaration) throw new Error("variable declaration in catch clause is not supported (yet)")
        assignments.push(
          factory.createPropertyAssignment(
            factory.createIdentifier("catch"),
            factory.createArrayLiteralExpression(
              [factory.createObjectLiteralExpression(
                [
                  factory.createPropertyAssignment(
                    factory.createIdentifier("errorFilter"),
                    factory.createArrayLiteralExpression(
                      [factory.createStringLiteral("States.All")],
                      true
                    )
                  ),
                  factory.createPropertyAssignment(
                    factory.createIdentifier("block"),
                    factory.createArrowFunction(
                      undefined,
                      undefined,
                      [],
                      undefined,
                      factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                      node.catchClause.block
                    )
                  )
                ],
                true
              )],
              true
            )
          ));
      }

      if (node.finallyBlock) {
        assignments.push(
          factory.createPropertyAssignment(
            factory.createIdentifier("finally"),
            factory.createArrowFunction(
              undefined,
              undefined,
              [],
              undefined,
              factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
              node.finallyBlock
            )
          ));
      }
      if (comment) {
        assignments.push(
          factory.createPropertyAssignment(
            factory.createIdentifier("comment"),
            factory.createStringLiteral(comment)
          ));
      }

      node = factory.createExpressionStatement(factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("asl"),
          factory.createIdentifier("tryExpression")
        ),
        undefined,
        [factory.createObjectLiteralExpression(
          assignments,
          true
        )]
      ))

    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
