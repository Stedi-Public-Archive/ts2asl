import * as ts from 'typescript';
import { convertToBlock } from './block-utility';
import factory = ts.factory;
import { TransformUtil } from './transform-utility';


export const ifStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isIfStatement(node)) {

      const when = TransformUtil.createWrappedExpression("when", node.expression)
      const then = TransformUtil.createNamedBlock("then", convertToBlock(node.thenStatement));
      const else_ = TransformUtil.createNamedBlock("else", node.elseStatement ? convertToBlock(node.elseStatement) : undefined);
      const comment = TransformUtil.createComment(node);

      const assignments: ts.PropertyAssignment[] = []
      for (const assignment of [when, then, else_, comment]) {
        if (assignment) {
          assignments.push(assignment);
        }
      }

      node = TransformUtil.createAslInvoke("typescriptIf", assignments);
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
