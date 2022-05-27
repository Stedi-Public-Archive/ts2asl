import * as ts from 'typescript';
import { valueToLiteralExpression } from '../../util';
import factory = ts.factory;

export const enumValueTransformer = (typeChecker: ts.TypeChecker) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isPropertyAccessExpression(node)) {

      const type = typeChecker.getTypeAtLocation(node);
      if (hasFlag(type, ts.TypeFlags.EnumLiteral)) {
        const litType = type as ts.LiteralType;
        if (litType.value !== undefined) {
          return valueToLiteralExpression(litType.value as string | number);
        }
      }
      return node;
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
function hasFlag(type: ts.Type, flag: ts.TypeFlags) {
  return (type.flags & flag) === flag;
}