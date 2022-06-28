import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
import { ParserError } from '../../ParserError';
import { convertToBlock } from './block-utility';
import { TransformUtil } from './transform-utility';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples:
 - await Promise.all(
    [
      () => { console.log('a'); },
      () => { console.log('b'); }
    ]);
  - const result = await Promise.all(
    [
      () => { return 'a' },
      () => { return 'b' }
    ]);
    `

export const promiseAllStatementTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isCallExpression(node)) {
      if (ts.isPropertyAccessExpression(node.expression) && "all" === node.expression.name.escapedText && ts.isIdentifier(node.expression.expression) && node.expression.expression.escapedText === "Promise") {

        if (1 !== node.arguments.length) throw new ParserError("promise.all statement must have 1 argument", node);
        const arg = node.arguments[0];

        if (!ts.isArrayLiteralExpression(arg)) throw new ParserError("promise.all statement must have array literal expression as argument", node);

        const blocks_ = arg.elements.map(x => convertToBlock(x, true));
        const branches = TransformUtil.createNamedBlockArray("branches", blocks_)
        const comment = TransformUtil.createCommentPropertyAssignment(node);

        const assignments: ts.PropertyAssignment[] = []
        for (const assignment of [branches, comment]) {
          if (assignment) {
            assignments.push(assignment);
          }
        }

        return TransformUtil.createAslInvoke("parallel", assignments);
      }
    }
    return node;
  }

  return ts.visitNode(rootNode, visit);
};



