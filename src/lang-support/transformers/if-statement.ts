import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import { convertToBlock } from './block-utility';
import { createChoice } from './choice-utility';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples:
- if (age == 24) or if (age >= 18)
- if (name == "Sven") or if (name != "Sven")
- if (likesTennis) or if (!likesBaseball)
- if (name == anotherName) or if (name != anotherName)`

export const ifStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isIfStatement(node)) {

      var { variableAssignment, choiceAssignment } = createChoice(factory, node.expression);

      /*
        ASL.Choice({
          Type: "Choice",
          Choices: [
            { Variable: "$.name", StringEquals: "henk", NextInvoke: () => { / statements / ; } }
            { Variable: "$.name", Not: { StringEquals: "henk" }, NextInvoke: () => { / statements / ; } }
          ]
        })
      */
      node = factory.createExpressionStatement(factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("ASL"),
          factory.createIdentifier("Choice")
        ),
        undefined,
        [factory.createObjectLiteralExpression(
          [
            factory.createPropertyAssignment(
              factory.createIdentifier("Choices"),
              factory.createArrayLiteralExpression(
                [factory.createObjectLiteralExpression(
                  [
                    variableAssignment,
                    choiceAssignment,
                    factory.createPropertyAssignment(
                      factory.createIdentifier("NextInvoke"),
                      factory.createArrowFunction(
                        undefined,
                        undefined,
                        [],
                        undefined,
                        factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                        convertToBlock(node.thenStatement)
                      )
                    )
                  ],
                  true
                )],
                true
              )
            ),

            ...(!node.elseStatement ? [] : [
              factory.createPropertyAssignment(
                factory.createIdentifier("DefaultInvoke"),
                factory.createArrowFunction(
                  undefined,
                  undefined,
                  [],
                  undefined,
                  factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                  convertToBlock(node.elseStatement)
                )
              ),
            ])
          ],
          true
        )]
      )
      );

    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
