import * as ts from 'typescript';
import { TransformUtil } from './transform-utility';
import { ParserError } from '../../ParserError';
import factory = ts.factory;

export const tryStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isTryStatement(node)) {
      if (node.catchClause && node.catchClause.variableDeclaration) throw new ParserError("variable declaration in catch clause is not supported (yet)", node)

      const try_ = TransformUtil.createNamedBlock("try", node.tryBlock);
      const catch_ = TransformUtil.createCatchAllBlock(node.catchClause?.block);
      const finally_ = TransformUtil.createNamedBlock("finally", node.finallyBlock);
      const comment = TransformUtil.createComment(node);

      const assignments: ts.PropertyAssignment[] = []
      for (const assignment of [try_, catch_, finally_, comment]) {
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
