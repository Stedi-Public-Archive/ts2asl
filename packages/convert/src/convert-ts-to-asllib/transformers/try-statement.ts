import * as ts from 'typescript';
import { TransformUtil } from './transform-utility';
import { ParserError } from '../../ParserError';
import factory = ts.factory;
import { ConverterOptions } from '../../convert';

export const tryStatementTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isTryStatement(node)) {
      const try_ = TransformUtil.createNamedBlock("try", node.tryBlock);
      const catch_ = TransformUtil.createCatchAllBlock(node.tryBlock, node.catchClause?.block, node.catchClause?.variableDeclaration?.name as ts.Identifier);
      const finally_ = TransformUtil.createNamedBlock("finally", node.finallyBlock);
      const comment = TransformUtil.createCommentPropertyAssignment(node);
      let nameTemplate = "Try" + (catch_ ? " Catch" : "") + (finally_ ? " Finally" : "");
      const name = TransformUtil.createNamePropertyAssignment(converterOptions, node, nameTemplate);

      const assignments: ts.PropertyAssignment[] = []
      for (const assignment of [name, try_, catch_, finally_, comment]) {
        if (assignment) {
          assignments.push(assignment);
        }
      }

      node = TransformUtil.createAslInvoke("typescriptTry", assignments);
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
