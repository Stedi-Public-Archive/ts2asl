import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
import { ParserError } from '../../ParserError';
import { TransformUtil } from './transform-utility';
import factory = ts.factory;


export const throwStatementTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isThrowStatement(node)) {
      if (!ts.isNewExpression(node.expression)) throw new ParserError(`throw statement must have new expression`, node);
      if (!ts.isIdentifier(node.expression.expression)) throw new ParserError(`throw statement must throw new type`, node);
      if (node.expression.arguments && 2 <= node.expression.arguments.length) throw new ParserError(`error thrown must not have 2 or more arguments`, node);
      if (node.expression.arguments && node.expression.arguments.length === 1 && !ts.isStringLiteral(node.expression.arguments[0])) throw new ParserError(`error thrown must have string literal as argument`, node);


      const errorName = node.expression.expression.escapedText.toString();
      const error = TransformUtil.createLiteral("error", errorName);
      const comment = TransformUtil.createCommentPropertyAssignment(node);
      let cause: ts.PropertyAssignment | undefined;
      const assignments: ts.PropertyAssignment[] = []

      if (node.expression.arguments && node.expression.arguments.length === 1) {
        const causeLiteral = node.expression.arguments[0] as ts.StringLiteral;
        cause = TransformUtil.createLiteral("cause", causeLiteral.text);
      }

      const name = TransformUtil.createNamePropertyAssignment(converterOptions, node, `Throw ${errorName}`);
      for (const assignment of [name, error, cause, comment]) {
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
