import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
import { ParserError } from '../../ParserError';
import { convertToBlock } from './block-utility';
import { isIdentifier } from './node-utility';
import { TransformUtil } from './transform-utility';

export const forOfStatementTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (node && ts.isForOfStatement(node)) {
      //if (!isIdentifier(node.expression)) throw new ParserError('for-of expression must be identifier', node);
      if (!ts.isVariableDeclarationList(node.initializer)) throw new ParserError('for-of expression must be initialized using decl list', node);
      if (node.initializer.declarations.length !== 1) throw new ParserError('for-of expression must be initialized single declaration', node);

      const decl = node.initializer.declarations[0];
      const items = TransformUtil.createWrappedExpression("items", node.expression);
      const iterator = TransformUtil.createFunction("iterator", (decl.name as ts.Identifier).text, convertToBlock(node.statement));
      const comment = TransformUtil.createCommentPropertyAssignment(node);
      const name = TransformUtil.createNamePropertyAssignment(converterOptions, node, "For %s Of %s", decl.name, node.expression);

      const assignments: ts.PropertyAssignment[] = []
      for (const assignment of [name, items, iterator, comment]) {
        if (assignment) {
          assignments.push(assignment);
        }
      }
      node = TransformUtil.createAslInvoke("typescriptForeach", assignments);
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
