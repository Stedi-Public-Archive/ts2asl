import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
import { isLiteral } from '../../util';
import { isAslCallExpression } from './node-utility';
const factory = ts.factory;


export const stringConversionTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isCallExpression(node)) {
      const aslCall = isAslCallExpression(node);
      if (aslCall === "stringToNumber" || aslCall === "stringToBoolean") {
        return factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("asl"),
            factory.createIdentifier("stringToJson")
          ),
          undefined,
          node.arguments
        )
      }
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
