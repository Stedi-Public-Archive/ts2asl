import * as ts from 'typescript';
import { TransformUtil } from './transform-utility';
import factory = ts.factory;

export const consoleLogStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);
    if (ts.isCallExpression(node) && ts.isPropertyAccessExpression(node.expression) && node.expression.name.text === "log") {

      const parameters = TransformUtil.createWrappedExpression("parameters", node.arguments[0]);
      const comment = TransformUtil.createComment(node);

      const assignments: ts.PropertyAssignment[] = []
      for (const assignment of [parameters, comment]) {
        if (assignment) {
          assignments.push(assignment);
        }
      }
      node = TransformUtil.createAslInvoke("pass", assignments)
      return node;
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
