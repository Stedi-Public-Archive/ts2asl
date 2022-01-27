import * as ts from 'typescript';
import { convertToBlock } from './block-utility';
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

export const promiseAllStatementTransformer = <T extends ts.Node>(context: ts.TransformationContext) => (rootNode: T) => {
  function visit(node: ts.Node): ts.Node {
    node = ts.visitEachChild(node, visit, context);

    if (ts.isCallExpression(node)) {
      if (ts.isPropertyAccessExpression(node.expression) && "all" === node.expression.name.escapedText && ts.isIdentifier(node.expression.expression) && node.expression.expression.escapedText === "Promise") {


        if (1 !== node.arguments.length) throw new Error("promise.all statement must have 1 argument");
        const arg = node.arguments[0];

        if (!ts.isArrayLiteralExpression(arg)) throw new Error("promise.all statement must have array literal expression as argument");
        const blocks = arg.elements.map(x => convertToBlock(x));


        /*
           ASL.Parallel({
               Branches: [{ Invoke: () => { console.log(); } }, { Invoke: () => { console.log(); } }],
           })
         */

        const branches = blocks.map(block =>
          factory.createArrowFunction(
            undefined,
            undefined,
            [],
            undefined,
            factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            block
          )
        );

        node =
          factory.createCallExpression(
            factory.createPropertyAccessExpression(
              factory.createIdentifier("asl"),
              factory.createIdentifier("parallel")
            ),
            undefined,
            [factory.createObjectLiteralExpression(
              [factory.createPropertyAssignment(
                factory.createIdentifier("branches"),
                factory.createArrayLiteralExpression(
                  branches,
                  true
                )
              )],
              true
            )]
          );
      }
    }
    return node;
  }

  return ts.visitNode(rootNode, visit);
};



