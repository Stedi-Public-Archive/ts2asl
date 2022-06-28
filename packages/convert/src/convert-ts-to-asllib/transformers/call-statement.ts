import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
import { ParserError } from '../../ParserError';
import { isAslCallExpression, isLiteralOrIdentifier, isMathExpression } from './node-utility';
import { TransformUtil } from './transform-utility';

export const callStatementTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isCallExpression(node)) {

      if (isAslCallExpression(node) || isMathExpression(node)) return node;

      if (1 < node.arguments.length) throw new ParserError(`call expression must have 0 or 1 arguments`, node);
      if (!ts.isIdentifier(node.expression)) {

        throw new ParserError(`call expression must be on identifier`, node);
      }
      if (node.arguments.length === 1) {
        if (!isLiteralOrIdentifier(node.arguments[0])) throw new ParserError(`call expression must have argument that is identifier or property access expression`, node);
      }

      const resource = TransformUtil.createIdentifier("resource", node.expression);
      const parameters = TransformUtil.createWrappedExpression("parameters", node.arguments.length === 1 ? node.arguments[0] : undefined);
      const comment = TransformUtil.createCommentPropertyAssignment(node);
      const name = TransformUtil.createNamePropertyAssignment(converterOptions, node, "%s", node);

      const assignments: ts.PropertyAssignment[] = []
      for (const assignment of [name, resource, parameters, comment]) {
        if (assignment) {
          assignments.push(assignment);
        }
      }

      node = TransformUtil.createAslInvoke("typescriptInvoke", assignments);
    }

    return node;
  }
  return ts.visitNode(rootNode, visit);
};
