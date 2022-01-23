import * as ts from 'typescript';
import { ASL } from '../../lib/ASL';
import { ParserError } from '../../ParserError';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples: return;`

export const returnStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isReturnStatement(node)) {

      if (!node.expression) {
        node = factory.createExpressionStatement(
          factory.createCallExpression(
            factory.createPropertyAccessExpression(
              factory.createIdentifier("ASL"),
              factory.createIdentifier("Succeed")
            ),
            undefined,
            []
          ));
      } else {

        // ASL.Multiple([
        //   ASL.Pass({ Result: "node.expression", ...{ ResultPath: "$" } }),
        //   ASL.Succeed({})
        // ])

        [
          node = factory.createExpressionStatement(factory.createCallExpression(
            factory.createPropertyAccessExpression(
              factory.createIdentifier("ASL"),
              factory.createIdentifier("Multiple")
            ),
            undefined,
            [factory.createArrayLiteralExpression(
              [
                factory.createCallExpression(
                  factory.createPropertyAccessExpression(
                    factory.createIdentifier("ASL"),
                    factory.createIdentifier("Pass")
                  ),
                  undefined,
                  [factory.createObjectLiteralExpression(
                    [
                      factory.createPropertyAssignment(
                        factory.createIdentifier("Result"),
                        node.expression
                      ),
                      factory.createPropertyAssignment(
                        factory.createIdentifier("ResultPath"),
                        factory.createStringLiteral("$")
                      )
                    ],
                    false
                  )]
                ),
                factory.createCallExpression(
                  factory.createPropertyAccessExpression(
                    factory.createIdentifier("ASL"),
                    factory.createIdentifier("Succeed")
                  ),
                  undefined,
                  [factory.createObjectLiteralExpression(
                    [],
                    false
                  )]
                )
              ],
              true
            )]
          ))
        ];

      }
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
