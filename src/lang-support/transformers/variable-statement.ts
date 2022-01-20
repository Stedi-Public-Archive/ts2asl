import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import { findParent, isLiteralOrIdentifier } from './node-utility';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples:
- const a = "hello" 
- const b = { member: "value"; number: 42}`

export const variableStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isVariableDeclaration(node) && (isLiteralOrIdentifier(node.initializer))) {

      node = factory.createVariableDeclaration(
        node.name,
        undefined,
        undefined,
        factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("ASL"),
            factory.createIdentifier("Pass")
          ),
          undefined,
          [factory.createObjectLiteralExpression(
            [factory.createPropertyAssignment(
              factory.createIdentifier("Result"),
              node.initializer
            )],
            false
          )]
        )
      );


      return node;
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
