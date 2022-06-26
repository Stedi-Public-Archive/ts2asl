import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
import { ParserError } from '../../ParserError';
import { TransformUtil } from './transform-utility';
import factory = ts.factory;

type Case = { label?: string | number, block: ts.Block | undefined };

export type Switch = {
  expression: ts.Expression;
  cases: Case[];
  name?: string;
};






export const switchStatementTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node | undefined {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isSwitchStatement(node)) {
      if (!node.caseBlock || !node.caseBlock.clauses) throw new Error("switch statement must have case clauses");

      const _switch: Switch = {
        expression: node.expression,
        cases: [],
      };
      for (const clause of node.caseBlock.clauses) {
        let label: string | number | undefined;
        if (!ts.isDefaultClause(clause)) {
          if (!ts.isStringLiteral(clause.expression) && !ts.isNumericLiteral(clause.expression)) {
            throw new ParserError("switch case statement must have literal string or literal number for label", clause);
          }
          label = ts.isStringLiteral(clause.expression) ? clause.expression.text : Number(clause.expression.text);
        }
        const caseClause = {
          label,
          block: clause.statements !== undefined && clause.statements.length > 0 ? factory.createBlock(clause.statements, true) : undefined,
        };
        _switch.cases.push(caseClause);
      }


      const getCaseProperties = (x: Case): Array<ts.PropertyAssignment> => {
        const result: Array<ts.PropertyAssignment> = [];
        if (x.label !== undefined) {
          result.push(
            TransformUtil.createLiteral("label", x.label)!
          );
        }
        if (x.block !== undefined) {
          result.push(
            TransformUtil.createNamedBlock("block", x.block)!
          );
        }

        return result;
      };


      const expression = TransformUtil.createWrappedExpression("expression", _switch.expression);

      const caseProperties = _switch.cases.map(x => getCaseProperties(x));
      const cases_ = TransformUtil.createArrayOfObjects("cases", caseProperties);
      const comment = TransformUtil.createCommentPropertyAssignment(node);
      const name = TransformUtil.createNamePropertyAssignment(converterOptions, node, "Switch (%s)", node.expression);

      const assignments: ts.PropertyAssignment[] = []
      for (const assignment of [name, expression, cases_, comment]) {
        if (assignment) {
          assignments.push(assignment);
        }
      }

      node = TransformUtil.createAslInvoke("typescriptSwitch", assignments);
    }
    return node;
  }

  return ts.visitNode(rootNode, visit);

};


