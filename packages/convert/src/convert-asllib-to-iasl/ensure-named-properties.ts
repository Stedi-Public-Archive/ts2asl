import * as ts from 'typescript';
import factory = ts.factory;

export const ensureNamedPropertiesTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    // {a, b, c} => {a:a, b:b, c:c}
    if (ts.isShorthandPropertyAssignment(node)) {
      return factory.createPropertyAssignment(node.name, node.name);
    }

    return node;
  }
  return ts.visitNode(rootNode, visit);
};
