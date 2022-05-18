import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
import { isLiteral } from '../../util';
const factory = ts.factory;


export const resolveExpressionsTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isVariableDeclaration(node) && node.initializer) {
      if (ts.isArrayLiteralExpression(node.initializer)) {
        if (!isLiteral(node.initializer, true)) {
          return factory.createVariableDeclaration(node.name, node.exclamationToken, node.type,
            factory.createCallExpression(
              factory.createPropertyAccessExpression(
                factory.createPropertyAccessExpression(
                  factory.createIdentifier("asl"),
                  factory.createIdentifier("states")
                ),
                factory.createIdentifier("array")
              ),
              undefined,
              node.initializer.elements
            )
          );
        }
      }
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
