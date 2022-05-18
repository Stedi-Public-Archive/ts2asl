import * as ts from "typescript";
import factory = ts.factory;
import { existsSync, writeFileSync } from "fs";
import { enumTests } from "./enum-tests";


const regen = process.env.REGEN == "true";
const fixtures = enumTests();
for (const fixture of fixtures) {
  const testFilePath = fixture.path + "/../tests/" + fixture.fixtureName + ".test.ts";
  if (regen || !existsSync(testFilePath)) {
    const tests = fixture.enumTestCases();
    if (tests.length > 0) {
      createUnitTestFile(testFilePath, fixture.fixtureName, tests.map(x => x.testName))
    }
  }
}

function createUnitTestFile(path: string, filename: string, tests: string[]) {
  const importDecl = factory.createImportDeclaration(
    undefined,
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([factory.createImportSpecifier(
        false,
        undefined,
        factory.createIdentifier("runConvertForTest")
      )])
    ),
    factory.createStringLiteral("../utility"),
    undefined
  )

  const testFunctions = tests.map(test => factory.createExpressionStatement(factory.createCallExpression(
    factory.createIdentifier("it"),
    undefined,
    [
      factory.createStringLiteral(`then ${test} can be converted to asl`),
      factory.createArrowFunction(
        [factory.createModifier(ts.SyntaxKind.AsyncKeyword)],
        undefined,
        [],
        undefined,
        factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
        factory.createBlock(
          [factory.createExpressionStatement(factory.createCallExpression(
            factory.createPropertyAccessExpression(
              factory.createCallExpression(
                factory.createIdentifier("expect"),
                undefined,
                [factory.createPropertyAccessExpression(
                  factory.createPropertyAccessExpression(
                    factory.createIdentifier("converted"),
                    factory.createIdentifier(test)
                  ),
                  factory.createIdentifier("asl")
                )]
              ),
              factory.createIdentifier("toMatchInlineSnapshot")
            ),
            undefined,
            []
          ))],
          true
        )
      )
    ]
  ))
  )

  const describe = factory.createExpressionStatement(factory.createCallExpression(
    factory.createIdentifier("describe"),
    undefined,
    [
      factory.createStringLiteral("when converting " + filename),
      factory.createArrowFunction(
        undefined,
        undefined,
        [],
        undefined,
        factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
        factory.createBlock(
          [
            factory.createVariableStatement(
              undefined,
              factory.createVariableDeclarationList(
                [factory.createVariableDeclaration(
                  factory.createIdentifier("converted"),
                  undefined,
                  undefined,
                  undefined
                )],
                ts.NodeFlags.Let
              )
            ),
            factory.createExpressionStatement(factory.createCallExpression(
              factory.createIdentifier("beforeAll"),
              undefined,
              [factory.createArrowFunction(
                undefined,
                undefined,
                [],
                undefined,
                factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
                factory.createBlock(
                  [factory.createExpressionStatement(factory.createBinaryExpression(
                    factory.createIdentifier("converted"),
                    factory.createToken(ts.SyntaxKind.EqualsToken),
                    factory.createCallExpression(
                      factory.createIdentifier("runConvertForTest"),
                      undefined,
                      [factory.createStringLiteral(filename)]
                    )
                  ))],
                  true
                )
              )]
            )),
            ...testFunctions
          ],
          true
        )
      )
    ]
  ));


  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const sourceFile = ts.createSourceFile(path, "", ts.ScriptTarget.Latest);

  let contents = "";
  contents += printer.printNode(ts.EmitHint.Unspecified, importDecl, sourceFile);
  contents += "\n";
  contents += printer.printNode(ts.EmitHint.Unspecified, describe, sourceFile);

  writeFileSync(path, contents);
}

