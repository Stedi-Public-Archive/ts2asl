import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import { convertToBlock } from './block-utility';
import { isIdentifier } from './node-utility';
import factory = ts.factory;

const validExamples = `valid examples:
for(const element of collection) { 
  console.log(element) 
} `

export const forOfStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (node && ts.isForOfStatement(node)) {
      if (!isIdentifier(node.expression)) throw new ParserError('for-of expression must be identifier', node);
      if (!ts.isVariableDeclarationList(node.initializer)) throw new ParserError('for-of expression must be initialized using decl list', node);
      if (node.initializer.declarations.length !== 1) throw new ParserError('for-of expression must be initialized single declaration', node);
      const decl = node.initializer.declarations[0];


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
                [factory.createParameterDeclaration(
                  undefined,
                  undefined,
                  undefined,
                  decl.name as ts.Identifier,
                  undefined,
                  undefined,
                  undefined
                )],
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
