import * as ts from 'typescript';
import { convertToBlock } from './block-utility';
import factory = ts.factory;
import { TransformUtil } from './transform-utility';
import { ensureBooleanExpression } from './node-utility';
import { ConverterOptions } from '../../convert';


export const ifStatementTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isIfStatement(node)) {

      const condition = TransformUtil.createWrappedExpression("condition", ensureBooleanExpression(node.expression))
      const then = TransformUtil.createNamedBlock("then", convertToBlock(node.thenStatement));
      const else_ = TransformUtil.createNamedBlock("else", node.elseStatement ? convertToBlock(node.elseStatement) : undefined);
      const comment = TransformUtil.createCommentPropertyAssignment(node);
      const name = TransformUtil.createNamePropertyAssignment(converterOptions, node, "If (%s)", node.expression);

      const assignments: ts.PropertyAssignment[] = []
      for (const assignment of [name, condition, then, else_, comment]) {
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
