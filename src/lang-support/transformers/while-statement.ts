import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import { convertToBlock } from './block-utility';
import { createChoice } from './choice-utility';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples:
- while(variable === "val") { variable = GetNext(); }`

export const whileStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isWhileStatement(node)) {


      var block = convertToBlock(node.statement);

      node = factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("asl"),
          factory.createIdentifier("whileLoop")
        ),
        undefined,
        [factory.createObjectLiteralExpression(
          [
            factory.createPropertyAssignment(
              factory.createIdentifier("condition"),
              factory.createArrowFunction(
                undefined,
                undefined,
                [],
                undefined,
                factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                node.expression
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
