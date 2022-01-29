import * as ts from 'typescript';
import { TransformUtil } from './transform-utility';
import factory = ts.factory;

export const variableStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isVariableDeclaration(node)) {

      const result = TransformUtil.createWrappedExpression("result", node.initializer);
      const comment = TransformUtil.createComment(node);

      const assignments: ts.PropertyAssignment[] = []
      for (const assignment of [result, comment]) {
        if (assignment) {
          assignments.push(assignment);
        }
      }

      node = factory.createVariableDeclaration(
        node.name,
        undefined,
        undefined,
        TransformUtil.createAslInvoke("pass", assignments)
      );

      return node;
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
