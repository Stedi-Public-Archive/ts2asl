import * as ts from 'typescript';

import factory = ts.factory;

export class TransformUtil {
  static createLiteral(propertyName: string, val: string | number) {
    if (typeof val === "string") {
      return factory.createPropertyAssignment(
        factory.createIdentifier(propertyName),
        factory.createStringLiteral(val, false)
      )
    } else {
      return factory.createPropertyAssignment(
        factory.createIdentifier(propertyName),
        factory.createNumericLiteral(val)
      )
    }
  }
  static createIdentifier(propertyName: string, expression: ts.Expression) {
    return factory.createPropertyAssignment(
      factory.createIdentifier(propertyName),
      expression
    );
  }
  static createNamedBlock(propertyName: string, block?: ts.Block) {
    if (!block) return undefined;
    return factory.createPropertyAssignment(
      factory.createIdentifier(propertyName),
      factory.createArrowFunction(
        [factory.createModifier(ts.SyntaxKind.AsyncKeyword)],
        undefined,
        [],
        undefined,
        factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
        block
      )
    );
  }

  static createNamedBlockArray(propertyName: string, blocks: ts.Block[]) {
    return factory.createPropertyAssignment(
      factory.createIdentifier(propertyName),
      factory.createArrayLiteralExpression(
        blocks.map(block =>
          factory.createArrowFunction(
            undefined,
            undefined,
            [],
            undefined,
            factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            block
          )
        ),
        true
      )
    );
  }


  static createArrayOfObjects(propertyName: string, objectsWithAssignments: Array<Array<ts.PropertyAssignment | undefined>>) {
    const objects: Array<ts.ObjectLiteralExpression> = [];
    for (const propertyAssignments of objectsWithAssignments) {
      const properties = propertyAssignments.filter(x => x) as Array<ts.PropertyAssignment>;
      objects.push(factory.createObjectLiteralExpression(properties, true));
    }

    return factory.createPropertyAssignment(
      factory.createIdentifier(propertyName),
      factory.createArrayLiteralExpression(objects, true)
    );
  }

  static createFunction(propertyName: string, argName?: string, block?: ts.Block) {
    if (!block) return undefined;
    return factory.createPropertyAssignment(
      factory.createIdentifier(propertyName),
      factory.createArrowFunction(
        undefined,
        undefined,
        [
          ...(argName ? [
            factory.createParameterDeclaration(
              undefined,
              undefined,
              undefined,
              factory.createIdentifier(argName),
              undefined,
              undefined,
              undefined)
          ] : [])
        ],
        undefined,
        factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
        block
      )
    );
  }

  static createWrappedExpression(propertyName: string, expression?: ts.Expression) {
    if (!expression) return undefined;
    return factory.createPropertyAssignment(
      factory.createIdentifier(propertyName),
      factory.createArrowFunction(
        undefined,
        undefined,
        [],
        undefined,
        factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
        expression
      )
    )
  }

  static createCatchAllBlock(block?: ts.Block) {
    if (!block) return undefined;
    return factory.createPropertyAssignment(
      factory.createIdentifier("catch"),
      factory.createArrayLiteralExpression(
        [factory.createObjectLiteralExpression(
          [
            factory.createPropertyAssignment(
              factory.createIdentifier("errorFilter"),
              factory.createArrayLiteralExpression(
                [factory.createStringLiteral("States.All")],
                true
              )
            ),
            factory.createPropertyAssignment(
              factory.createIdentifier("block"),
              factory.createArrowFunction(
                undefined,
                undefined,
                [],
                undefined,
                factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                block
              )
            )
          ],
          true
        )],
        true
      )
    );
  }

  static createComment(node: ts.Node) {
    let comment: string | undefined = undefined;
    try {
      comment = node.getText();
    } catch { }
    if (!comment) return undefined;

    return factory.createPropertyAssignment(
      factory.createIdentifier("comment"),
      factory.createStringLiteral(comment)
    );
  }

  static createName(format: string, ...nodes: ts.Node[]) {
    let texts: string[] = [];
    for (const node of nodes) {
      try {
        const text = node.getText();
        texts.push(text);
      } catch {
        const text = "???";
        texts.push(text);
      }
    }
    let name = sprintf(format, texts);
    if (name.length > 29) {
      name = name.substring(0, 25) + " ...";
    }
    return factory.createPropertyAssignment(
      factory.createIdentifier("name"),
      factory.createStringLiteral(name)
    );
  }


  static createAslInvoke(operationName: string, assignments: ts.PropertyAssignment[]) {
    return factory.createCallExpression(
      factory.createPropertyAccessExpression(
        factory.createIdentifier("asl"),
        factory.createIdentifier(operationName)
      ),
      undefined,
      [factory.createObjectLiteralExpression(
        assignments,
        true
      )]
    );
  }
}


function sprintf(fmt: string, args: string[]) {
  var i = 0;
  return fmt.replace(/%((%)|s|d)/g, (m: string) => {
    let val: string = "";
    val = args[i];
    i++;
    return val;
  });
}
