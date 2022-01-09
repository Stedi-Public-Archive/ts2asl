import * as ts from 'typescript';
import { ParserError } from '../../ParserError';
import { convertToBlock } from './block-utility';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples:
- if (age == 24) or if (age >= 18)
- if (name == "Sven") or if (name != "Sven")
- if (likesTennis) or if (!likesBaseball)
- if (name == anotherName) or if (name != anotherName)`

export const ifStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isIfStatement(node)) {

      let choiceRhs: string;
      let choiceVariable: string;
      let choiceOperator: string;
      let choiceNot = false;

      if (ts.isPrefixUnaryExpression(node.expression)) {
        throw new Error("if statement with prefix unary expression not supported");
      } else if (ts.isBinaryExpression(node.expression)) {

        if (!(ts.isIdentifier(node.expression.left) || ts.isPropertyAccessExpression(node.expression.left))) throw new ParserError("if statement with left hand side of binary expression must be identifier or property access", node.expression.left);
        if (!(ts.isIdentifier(node.expression.right) || ts.isLiteralExpression(node.expression.right) || ts.SyntaxKind.FalseKeyword === node.expression.right.kind || ts.SyntaxKind.TrueKeyword === node.expression.right.kind)) throw new Error("if statement with right hand side of binary expression must be identifier or literal");
        let postFix: "Path" | "" = ts.isIdentifier(node.expression.right) ? "Path" : ""
        let operator: "Equals" | "GreaterThan" | "GreaterThanEquals" | "LessThan" | "LessThanEquals" | undefined;
        let type: "Numeric" | "String" | "Timestamp" | "Boolean" | undefined = "String"; //lame default

        switch (node.expression.operatorToken.kind) {
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
            const typescriptOp = ts.SyntaxKind[node.expression.operatorToken.kind];
            throw new Error("unexpected binary operator type " + typescriptOp);
        }

        if (ts.isLiteralExpression(node.expression.right)) {
          switch (node.expression.right.kind) {
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

        choiceVariable = '$.' + node.expression.left.getText();
        choiceRhs = (ts.isLiteralExpression(node.expression.right)) ? node.expression.right.text : '$.' + node.expression.right.getText();
        choiceOperator = `${type}${operator}${postFix}`;
      }

      /*
        ASL.Choice({
          Type: "Choice",
          Choices: [
            { Variable: "$.name", StringEquals: "henk", NextInvoke: () => { / statements / ; } }
            { Variable: "$.name", Not: { StringEquals: "henk" }, NextInvoke: () => { / statements / ; } }
          ]
        })
      */

      let choiceAssignment: ts.PropertyAssignment = factory.createPropertyAssignment(
        factory.createIdentifier(choiceOperator),
        factory.createStringLiteral(choiceRhs)
      );
      if (choiceNot) {
        choiceAssignment = factory.createPropertyAssignment(
          factory.createIdentifier("Not"),
          factory.createObjectLiteralExpression(
            [choiceAssignment]
          )
        );
      }
      node = factory.createExpressionStatement(factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("ASL"),
          factory.createIdentifier("Choice")
        ),
        undefined,
        [factory.createObjectLiteralExpression(
          [
            factory.createPropertyAssignment(
              factory.createIdentifier("Choices"),
              factory.createArrayLiteralExpression(
                [factory.createObjectLiteralExpression(
                  [
                    factory.createPropertyAssignment(
                      factory.createIdentifier("Variable"),
                      factory.createStringLiteral(choiceVariable)
                    ),
                    choiceAssignment,
                    factory.createPropertyAssignment(
                      factory.createIdentifier("NextInvoke"),
                      factory.createArrowFunction(
                        undefined,
                        undefined,
                        [],
                        undefined,
                        factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                        convertToBlock(node.thenStatement)
                      )
                    )
                  ],
                  true
                )],
                true
              )
            ),

            ...(!node.elseStatement ? [] : [
              factory.createPropertyAssignment(
                factory.createIdentifier("DefaultInvoke"),
                factory.createArrowFunction(
                  undefined,
                  undefined,
                  [],
                  undefined,
                  factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                  convertToBlock(node.elseStatement)
                )
              ),
            ])
          ],
          true
        )]
      )
      );

    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};
