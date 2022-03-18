import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
import { ParserError } from '../../ParserError';
import { convertToBlock } from './block-utility';
import { TransformUtil } from './transform-utility';
const factory = ts.factory;

export const arrayMapTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isCallExpression(node)) {
      if (ts.isPropertyAccessExpression(node.expression) && node.expression.name.text === "map") {
        if (node.expression.expression.getText() === "asl") return node;

        if (node.arguments.length !== 1) throw new ParserError("<array>.map expression must have 1 argument", node);
        const arg = node.arguments[0];
        if (!ts.isArrowFunction(arg)) throw new ParserError("<array>.map expression must have arrow function as argument", node);
        if (arg.parameters.length !== 1) throw new ParserError("<array>.map argument must be arrow function with 1 parameter", node);

        const items = TransformUtil.createWrappedExpression("items", node.expression.expression);
        const iterator = TransformUtil.createFunction("iterator", (arg.parameters[0].name as ts.Identifier).text, convertToBlock(arg.body));
        const comment = TransformUtil.createComment(node);
        const name = TransformUtil.createNamePropertyAssignment(converterOptions, node, "For %s Of %s", arg.parameters[0].name, node.expression);

        const assignments: ts.PropertyAssignment[] = []
        for (const assignment of [name, items, iterator, comment]) {
          if (assignment) {
            assignments.push(assignment);
          }
        }
        node = TransformUtil.createAslInvoke("map", assignments);
      }
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
