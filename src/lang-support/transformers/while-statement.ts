import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import { convertToBlock } from './block-utility';
import { createChoice } from './choice-utility';
import { findParent } from './node-utility';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples:
- while(variable === "val") { variable = GetNext(); }`

export const whileStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isWhileStatement(node)) {

      var { variableAssignment, choiceAssignment } = createChoice(factory, node.expression);
      var block = convertToBlock(node.statement);

      node = factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("ASL"),
          factory.createIdentifier("While")
        ),
        undefined,
        [factory.createObjectLiteralExpression(
          [
            factory.createPropertyAssignment(
              factory.createIdentifier("Condition"),
              factory.createObjectLiteralExpression(
                [
                  variableAssignment,
                  choiceAssignment
                ],
                true
              )
            ),
            factory.createPropertyAssignment(
              factory.createIdentifier("WhileInvoke"),
              factory.createArrowFunction(
                undefined,
                undefined,
                [],
                undefined,
                factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                block
              )
            )
          ],
          true
        )]
      );
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
