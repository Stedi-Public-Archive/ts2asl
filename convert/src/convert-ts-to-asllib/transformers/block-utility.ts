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


  if (ts.isExpressionStatement(context)) {
    context = context.expression;
  }

  if (ts.isThrowStatement(context)) {
    return factory.createBlock([context]);
  }

  return factory.createBlock([factory.createVariableStatement(
    undefined,
    factory.createVariableDeclarationList(
      [factory.createVariableDeclaration(
        factory.createIdentifier("_var"),
        undefined,
        undefined,
        context as ts.Expression
      )],
      ts.NodeFlags.Let
    )
  ),
  factory.createReturnStatement(factory.createIdentifier("_var"))
  ])
};