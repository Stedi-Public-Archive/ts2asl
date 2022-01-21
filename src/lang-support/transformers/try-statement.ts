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
      if (node.finallyBlock) throw new Error(`try statement must not have finally block, ${validExamples} `);

      if (!node.catchClause?.block) throw new Error(`try statement must not have catch block, ${validExamples} `);
      if (!ts.isBlock(node.catchClause.block)) throw new Error(`try statement must not have catch block, ${validExamples} `);
      /*
        ASL.Parallel({
            Branches: [{ BlockInvoke: () => { console.log(); } }],
            Catch: [{ ErrorEquals: ["States.All"], BlockInvoke: () => { console.log(); } }];
        })
      */

      node = factory.createExpressionStatement(factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("ASL"),
          factory.createIdentifier("Parallel")
        ),
        undefined,
        [factory.createObjectLiteralExpression(
          [
            factory.createPropertyAssignment(
              factory.createIdentifier("Branches"),
              factory.createArrayLiteralExpression(
                [factory.createObjectLiteralExpression(
                  [factory.createPropertyAssignment(
                    factory.createIdentifier("BlockInvoke"),
                    factory.createArrowFunction(
                      undefined,
                      undefined,
                      [],
                      undefined,
                      factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                      node.tryBlock
                    )
                  )],
                  true
                )],
                true
              )
            ),
            factory.createPropertyAssignment(
              factory.createIdentifier("Catch"),
              factory.createArrayLiteralExpression(
                [factory.createObjectLiteralExpression(
                  [
                    factory.createPropertyAssignment(
                      factory.createIdentifier("ErrorEquals"),
                      factory.createArrayLiteralExpression(
                        [factory.createStringLiteral("States.All")],
                        true
                      )
                    ),
                    factory.createPropertyAssignment(
                      factory.createIdentifier("NextInvoke"),
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
            )
          ],
          true
        )]
      ))

    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
