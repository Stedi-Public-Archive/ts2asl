import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import { TransformUtil } from './transform-utility';
import factory = ts.factory;


export const throwStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (node && ts.isThrowStatement(node)) {
      if (!ts.isNewExpression(node.expression)) throw new ParserError(`throw statement must have new expression`, node);
      if (node.expression.arguments && 2 <= node.expression.arguments.length) throw new ParserError(`error thrown must not have 2 or more arguments`, node);
      if (node.expression.arguments && node.expression.arguments.length === 1 && !ts.isStringLiteral(node.expression.arguments[0])) throw new ParserError(`error thrown must have string literal as argument`, node);


      const error = TransformUtil.createLiteral("error", node.expression.expression.getText());
      const comment = TransformUtil.createComment(node);
      let cause: ts.PropertyAssignment | undefined;
      const assignments: ts.PropertyAssignment[] = []

      if (node.expression.arguments && node.expression.arguments.length === 1) {
        const causeLiteral = node.expression.arguments[0] as ts.StringLiteral;
        cause = TransformUtil.createLiteral("cause", causeLiteral.text);
      }

      for (const assignment of [error, cause, comment]) {
        if (assignment) {
          assignments.push(assignment);
        }
      }

      node = TransformUtil.createAslInvoke("fail", assignments);
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};