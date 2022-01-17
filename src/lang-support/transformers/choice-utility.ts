import * as ts from 'typescript';
import { ParserError } from '../../ParserError';

export function createChoice(factory: ts.NodeFactory, expression: ts.Expression) {
  let choiceRhs: ts.Expression;
  let choiceExpression: ts.Expression;
  let choiceOperator: string;
  let choiceNot = false;

  if (ts.isPrefixUnaryExpression(expression)) {
    throw new Error("if statement with prefix unary expression not supported");
  } else if (ts.isBinaryExpression(expression)) {

    if (!(ts.isIdentifier(expression.left) || ts.isPropertyAccessExpression(expression.left)))
      throw new ParserError("if statement with left hand side of binary expression must be identifier or property access", expression.left);
    if (!(ts.isIdentifier(expression.right) || ts.isPropertyAccessExpression(expression.right) || ts.isLiteralExpression(expression.right) || ts.SyntaxKind.FalseKeyword === expression.right.kind || ts.SyntaxKind.TrueKeyword === expression.right.kind))
      throw new Error("if statement with right hand side of binary expression must be identifier or literal");
    let operator: "Equals" | "GreaterThan" | "GreaterThanEquals" | "LessThan" | "LessThanEquals" | undefined;
    let type: "Numeric" | "String" | "Timestamp" | "Boolean" | undefined = "String"; //lame default

    switch (expression.operatorToken.kind) {
      case ts.SyntaxKind.EqualsEqualsEqualsToken:
      case ts.SyntaxKind.EqualsEqualsToken:
        operator = "Equals";
        break;


      case ts.SyntaxKind.ExclamationEqualsEqualsToken:
      case ts.SyntaxKind.ExclamationEqualsEqualsToken:
        operator = "Equals";
        choiceNot = true;
        break;


      case ts.SyntaxKind.GreaterThanEqualsToken:
        operator = "GreaterThanEquals";
        break;

      case ts.SyntaxKind.GreaterThanToken:
        operator = "GreaterThan";
        break;

      case ts.SyntaxKind.LessThanEqualsToken:
        operator = "LessThanEquals";
        break;


      case ts.SyntaxKind.LessThanToken:
        operator = "LessThan";
        break;

      default:
        const typescriptOp = ts.SyntaxKind[expression.operatorToken.kind];
        throw new Error("unexpected binary operator type " + typescriptOp);
    }

    if (ts.isLiteralExpression(expression.right)) {
      switch (expression.right.kind) {
        case ts.SyntaxKind.StringLiteral:
          type = "String";
          break;
        case ts.SyntaxKind.TrueKeyword:
        case ts.SyntaxKind.FalseKeyword:
          type = "Boolean";
          break;
        case ts.SyntaxKind.NumericLiteral:
          type = "Numeric";
          break;
      }
    }

    choiceExpression = expression.left;
    choiceRhs = expression.right;
    choiceOperator = `${type}${operator}`;
  } else if (ts.isPropertyAccessExpression(expression) || ts.isIdentifier(expression)) {
    choiceExpression = expression;
    choiceOperator = `IsPresent`;
    choiceRhs = factory.createTrue();
  }

  let choiceAssignment: ts.PropertyAssignment = factory.createPropertyAssignment(
    factory.createIdentifier(choiceOperator),
    choiceRhs
  );
  if (choiceNot) {
    choiceAssignment = factory.createPropertyAssignment(
      factory.createIdentifier("Not"),
      factory.createObjectLiteralExpression(
        [choiceAssignment]
      )
    );
  }

  const variableAssignment = factory.createPropertyAssignment(
    factory.createIdentifier("Variable"),
    choiceExpression
  );
  return { variableAssignment, choiceAssignment };
}

