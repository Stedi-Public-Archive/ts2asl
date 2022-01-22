import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import { convertToBlock } from './block-utility';
import factory = ts.factory;

const validExamples = `valid examples:
for(const element of collection) { 
  console.log(element) 
} `

export const forOfStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (node && ts.isForOfStatement(node)) {
      if (!ts.isIdentifier(node.expression)) throw new ParserError('for-of expression must be identifier', node);

      node =
        factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("ASL"),
            factory.createIdentifier("Map")
          ),
          undefined,
          [factory.createObjectLiteralExpression(
            [factory.createPropertyAssignment(
              factory.createIdentifier("ItemsPath"),
              node.expression,
            ),
            factory.createPropertyAssignment(
              factory.createIdentifier("Iterator"),
              factory.createArrowFunction(
                undefined,
                undefined,
                [],
                undefined,
                factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                convertToBlock(node.statement)
              )
            )],
            true
          )]
        );


    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
