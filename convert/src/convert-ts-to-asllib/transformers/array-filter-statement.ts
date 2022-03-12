import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
import { ParserError } from '../../ParserError';
import { ensureBooleanExpression } from './node-utility';
const factory = ts.factory;

export const arrayFilterTransformer = (converterOptions: ConverterOptions) => <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isCallExpression(node)) {
      if (ts.isPropertyAccessExpression(node.expression) && node.expression.name.text === "filter") {
        if (node.arguments.length !== 1) throw new ParserError("<array>.filter expression must have 1 argument", node);
        const arg = node.arguments[0];
        if (!ts.isArrowFunction(arg)) throw new ParserError("<array>.filter expression must have arrow function as argument", node);
        if (arg.parameters.length !== 1) throw new ParserError("<array>.filter argument must be arrow function with 1 parameter", node);

        if (!ts.isPropertyAccessExpression(arg.body) && !ts.isBinaryExpression(arg.body) && !ts.isPrefixUnaryExpression(arg.body)) {
          throw new ParserError("<array>.filter argument must be simple expression (property access, binary or prefix-unary)", node);
        }
        const wrappedExpression = factory.createArrowFunction(
          undefined,
          undefined,
          arg.parameters,
          undefined,
          factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
          ensureBooleanExpression(arg.body)
        )
        node = factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createIdentifier("asl"),
            factory.createIdentifier("jsonPathFilter")
          ),
          undefined,
          [node.expression.expression, wrappedExpression]
        );

      }
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
