import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
import { TransformUtil } from './transform-utility';
import factory = ts.factory;

export const switchStatementTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function removeBreakStatements(node: ts.Node): ts.Node | undefined {
    if (ts.isBreakStatement(node)) {
      return undefined;

    }
    return node;
  }
  function visit(node: ts.Node): ts.Node | undefined {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isSwitchStatement(node)) {

      if (!ts.isIdentifier(node.expression)) throw new Error("switch statement must have identifier as expression");

      if (!node.caseBlock || !node.caseBlock.clauses) throw new Error("switch statement must have case clauses");

      const defaultCase = node.caseBlock.clauses.find(x => ts.isDefaultClause(x))
      const defaultCaseWithoutBreaks = ts.visitEachChild(defaultCase, removeBreakStatements, context) as ts.DefaultClause;
      const default_ = TransformUtil.createNamedBlock("default", defaultCaseWithoutBreaks ? factory.createBlock(defaultCaseWithoutBreaks.statements, true) : undefined)

      const choiceCases = node.caseBlock.clauses.filter(x => !ts.isDefaultClause(x))
      const choiceCasesWithoutBreaks = choiceCases.map(x => ts.visitEachChild(x, removeBreakStatements, context) as ts.CaseClause)
      const choices_ = choiceCasesWithoutBreaks.map(x => {
        return [
          TransformUtil.createNamedBlock("block", factory.createBlock(x.statements, true)),
          TransformUtil.createWrappedExpression("condition", (x as ts.CaseClause).expression)
        ]
      })
      const choices = TransformUtil.createArrayOfObjects("choices", choices_)
      const comment = TransformUtil.createComment(node);
      const name = TransformUtil.createNamePropertyAssignment(converterOptions, node, "Switch (%s)", node.expression);

      const assignments: ts.PropertyAssignment[] = []
      for (const assignment of [name, choices, default_, comment]) {
        if (assignment) {
          assignments.push(assignment);
        }
      }

      node = TransformUtil.createAslInvoke("choice", assignments);
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};


