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
        const itemsNode = node.expression.expression;
        const argsIdentifier = (arg.parameters[0].name as ts.Identifier).text;
        const simplifiedExpression = tryConvertToSimpleExpression(itemsNode, argsIdentifier, arg);
        if (simplifiedExpression) {
          return simplifiedExpression
        }

        const items = TransformUtil.createWrappedExpression("items", itemsNode);
        const iterator = TransformUtil.createFunction("iterator", argsIdentifier, convertToBlock(arg.body, true));
        const comment = TransformUtil.createCommentPropertyAssignment(node);
        const name = TransformUtil.createNamePropertyAssignment(converterOptions, node, "%s => %s", node.expression, arg.parameters[0].name,);

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


const tryConvertToSimpleExpression = (arr: ts.Expression, argName: string, node: ts.ArrowFunction) => {
  let mapExpression = "";
  let propPath: string[] = [];
  let context: ts.Node = node.body;
  while (ts.isPropertyAccessExpression(context)) {
    propPath.push(context.name.text);
    context = context.expression;
  }
  if (ts.isIdentifier(context) && context.text === argName) {
    mapExpression = propPath.reverse().join(".");
  }

  if (mapExpression) {
    return factory.createCallExpression(
      factory.createPropertyAccessExpression(
        factory.createIdentifier("asl"),
        factory.createIdentifier("jsonPathMap")
      ),
      undefined,
      [arr, factory.createStringLiteral(mapExpression)]
    );
  }
  return undefined;
}