import * as ts from 'typescript';
import factory = ts.factory;


export const convertToBlock = (node: ts.Node): ts.Block => {

  let context = node;
  if (ts.isArrowFunction(node)) {
    if (node.parameters.length !== 0) throw new Error(`cannot convert arrow function to block, arrow function must not have parameters`);
    context = node.body;
  }

  if (ts.isLiteralExpression(context) || ts.isObjectLiteralExpression(context) || ts.isArrayLiteralExpression(context)) return factory.createBlock([factory.createReturnStatement(context)]);
  if (ts.isParenthesizedExpression(context) && (ts.isLiteralExpression(context.expression) || ts.isObjectLiteralExpression(context.expression) || ts.isArrayLiteralExpression(context.expression))) return factory.createBlock([factory.createReturnStatement(context)]);
  if (ts.isBlock(context)) return context;

  return factory.createBlock([context as ts.Statement])
};