import * as ts from 'typescript';
import { isAslCallExpression } from './node-utility';
const factory = ts.factory;


export const stringConversionTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isCallExpression(node)) {
      const aslCall = isAslCallExpression(node);
      if (aslCall === "convert.stringToNumber" || aslCall === "convert.stringToBoolean") {
        return factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("asl"),
            factory.createIdentifier("states.stringToJson")
          ),
          undefined,
          node.arguments
        )
      } else if (aslCall === "convert.numberToString" || aslCall === "convert.booleanToString") {
        return factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("asl"),
            factory.createIdentifier("states.format")
          ),
          undefined,
          [
            factory.createStringLiteral("{}"),
            ...node.arguments
          ]
        )
      }
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
