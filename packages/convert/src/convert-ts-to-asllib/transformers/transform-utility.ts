import * as ts from 'typescript';
import { ConverterOptions } from '../../convert';
import { createName } from '../../create-name';

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
  static createObject(propertyName: string, properties: Array<ts.PropertyAssignment>) {
    return factory.createPropertyAssignment(
      factory.createIdentifier(propertyName),
      factory.createObjectLiteralExpression(properties, true)
    );
  }

  static createBoolean(propertyName: string, val: Boolean) {
    return factory.createPropertyAssignment(
      factory.createIdentifier(propertyName),
      val ? factory.createTrue() : factory.createFalse()
    );
  }

  static createIdentifier(propertyName: string, expression: ts.Identifier) {
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

  static createCatchAllBlock(tryBlock: ts.Block, block?: ts.Block, argument?: ts.Identifier) {
    if (!block) return undefined;

    const parameterDecls: ts.ParameterDeclaration[] = [];
    if (argument) {
      parameterDecls.push(factory.createParameterDeclaration(
        undefined,
        undefined,
        undefined,
        argument,
        undefined,
        undefined,
        undefined
      ))
    }

    const errors: string[] = ["States.ALL"]

    return factory.createPropertyAssignment(
      factory.createIdentifier("catch"),
      factory.createArrayLiteralExpression(
        [factory.createObjectLiteralExpression(
          [
            factory.createPropertyAssignment(
              factory.createIdentifier("errorEquals"),
              factory.createArrayLiteralExpression(
                errors.map(x => factory.createStringLiteral(x)),
                true
              )
            ),
            factory.createPropertyAssignment(
              factory.createIdentifier("block"),
              factory.createArrowFunction(
                undefined,
                undefined,
                parameterDecls,
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
  let original = node;
  while((original as any).original) {original = (original as any).original as ts.Node};
  if (original && original.pos !== -1) {
    try {
      comment = original.getText();
    } catch { }
  }
  if (comment === undefined  && node.pos !== -1) {
    try {
      comment = node.getText();
    } catch { }
  }
  if (!comment) return undefined;
  return comment;
}

  static createCommentPropertyAssignment(node: ts.Node) {
    let comment = TransformUtil.createComment(node);
    if (comment === undefined) {
      return undefined;
    }
    return factory.createPropertyAssignment(
      factory.createIdentifier("comment"),
      factory.createStringLiteral(comment)
    );
  }

  static createNamePropertyAssignment(converterOptions: ConverterOptions, mainNode: ts.Node, format: string, ...nodes: ts.Node[]) {
    const name = createName(converterOptions, mainNode, format, ...nodes);
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
