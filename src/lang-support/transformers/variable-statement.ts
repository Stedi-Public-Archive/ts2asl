import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import { findParent } from './node-utility';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples:
- const a = "hello" 
- const b = { member: "value"; number: 42}`

export const variableStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isLiteralExpression(node) || ts.isObjectLiteralExpression(node) || ts.isArrayLiteralExpression(node)) {
      const variableStatement = findParent(node, x => ts.isVariableStatement(x)) as ts.VariableStatement;
      if (!variableStatement) return node;

      const outerObjectLiteralExpression = findParent(node, x => ts.isObjectLiteralExpression(x)) as ts.VariableStatement;
      if (outerObjectLiteralExpression) return node;

      if (1 != variableStatement.declarationList.declarations.length) throw new ParserError(`variable statement must have 1 declaration, found ${variableStatement.declarationList.declarations.length}, ${validExamples}`, variableStatement.declarationList);

      node = factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("ASL"),
          factory.createIdentifier("Pass")
        ),
        undefined,
        [factory.createObjectLiteralExpression(
          [factory.createPropertyAssignment(
            factory.createIdentifier("Result"),
            node
          )],
          false
        )]
      );
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
