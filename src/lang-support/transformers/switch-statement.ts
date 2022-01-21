import * as ts from 'typescript';
import factory = ts.factory;


const SingleQuote = true;

const validExamples = `valid examples:
- switch (color) {
  case "red":
    console.log("red")
    break;

  default:
    console.log("not-red")
    break;
}
`;

export const switchStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function removeBreakStatements(node: ts.Node): ts.Node | undefined {
    if (ts.isBreakStatement(node)) { return undefined; }
    return node;
  }
  function visit(node: ts.Node): ts.Node | undefined {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isSwitchStatement(node)) {
      let choiceVariable: string;
      if (!ts.isIdentifier(node.expression)) throw new Error("switch statement must have identifier as expression");
      choiceVariable = '$.' + node.expression.getText();

      if (!node.caseBlock || !node.caseBlock.clauses) throw new Error("switch statement must have case clauses");

      const choices: ts.ObjectLiteralExpression[] = [];


      let defaultClause: ts.DefaultClause | undefined;
      for (const clause of node.caseBlock.clauses) {
        if (ts.isDefaultClause(clause)) {
          defaultClause = ts.visitEachChild(clause, removeBreakStatements, context);
          //defaultClause = clause;
        } else {
          if (!ts.isLiteralExpression(clause.expression)) throw new Error("switch statement must have case clauses with literal values");
          let choiceRhs = clause.expression.text;
          let choiceOperator = clause.expression.kind === ts.SyntaxKind.StringLiteral ? "StringEquals" : "NumericEquals";

          const caseClause = ts.visitEachChild(clause, removeBreakStatements, context);

          const choice = factory.createObjectLiteralExpression(
            [
              factory.createPropertyAssignment(
                factory.createIdentifier("Variable"),
                factory.createStringLiteral(choiceVariable)
              ),
              factory.createPropertyAssignment(
                factory.createIdentifier(choiceOperator),
                factory.createStringLiteral(choiceRhs)
              ),
              factory.createPropertyAssignment(
                factory.createIdentifier("NextInvoke"),
                factory.createArrowFunction(
                  undefined,
                  undefined,
                  [],
                  undefined,
                  factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                  factory.createBlock(caseClause.statements, true)
                )
              )]
          );
          choices.push(choice);
        }
      }


      return node = factory.createCallExpression(
        factory.createPropertyAccessExpression(
          factory.createIdentifier("ASL"),
          factory.createIdentifier("Choice")
        ),
        undefined,
        [factory.createObjectLiteralExpression(
          [
            factory.createPropertyAssignment(
              factory.createIdentifier("Choices"),
              factory.createArrayLiteralExpression(choices)
            ),

            ...(!defaultClause ? [] : [
              factory.createPropertyAssignment(
                factory.createIdentifier("DefaultInvoke"),
                factory.createArrowFunction(
                  undefined,
                  undefined,
                  [],
                  undefined,
                  factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                  factory.createBlock(defaultClause.statements, true)
                )
              ),
            ])
          ]
        )]
      );
    }
    return node;
  }
  return ts.visitNode(rootNode, visit);
};


