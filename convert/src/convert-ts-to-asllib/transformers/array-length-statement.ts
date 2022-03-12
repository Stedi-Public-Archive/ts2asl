import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
const factory = ts.factory;

export const arrayLengthTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isPropertyAccessExpression(node) && node.name.text === "length") {

      node = factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("asl"),
          factory.createIdentifier("jsonPathLength")
        ),
        undefined,
        [node.expression]
      );

    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
