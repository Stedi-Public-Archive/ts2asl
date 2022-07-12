import * as ts from 'typescript';
import factory = ts.factory;



export const convertToBlock = (node: ts.Node, implicitReturn = false): ts.Block => {

  let context = node;
  if (ts.isArrowFunction(node)) {
    if (node.parameters.length !== 0) throw new Error(`cannot convert arrow function to block, arrow function must not have parameters`);
    context = node.body;
  }

  if (ts.isLiteralExpression(context) || ts.isObjectLiteralExpression(context) || ts.isArrayLiteralExpression(context)) return factory.createBlock([factory.createReturnStatement(context)]);
  if (ts.isParenthesizedExpression(context) && (ts.isLiteralExpression(context.expression) || ts.isObjectLiteralExpression(context.expression) || ts.isArrayLiteralExpression(context.expression))) return factory.createBlock([factory.createReturnStatement(context)]);
  if (ts.isBlock(context)) return context;

  if (ts.isCaseOrDefaultClause(node)) {
    if (node.statements === undefined) return factory.createBlock([]);
    if (node.statements.length === 0) return factory.createBlock([]);
    if (node.statements.length === 1 && ts.isBlock(node.statements[0])) return node.statements[0];
    return factory.createBlock(node.statements, true);
  }

  if (ts.isExpressionStatement(context)) {
    context = context.expression;
  }

  if (ts.isThrowStatement(context)) {
    return factory.createBlock([context]);
  }

  if (ts.isBreakOrContinueStatement(context)) {
    return factory.createBlock([context]);
  }

  if (implicitReturn) {
    return factory.createBlock([factory.createVariableStatement(
      undefined,
      factory.createVariableDeclarationList(
        [factory.createVariableDeclaration(
          factory.createIdentifier("return_var"),
          undefined,
          undefined,
          context as ts.Expression
        )],
        ts.NodeFlags.Let
      )
    ),
    factory.createReturnStatement(factory.createIdentifier("return_var"))
    ]);
  }

  return factory.createBlock([context as ts.Statement]);
};