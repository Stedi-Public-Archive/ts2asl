import * as ts from "typescript";
import factory = ts.factory;
import { existsSync, writeFileSync } from "fs";
import { enumTests } from "./enum-tests";


const regen = process.env.REGEN == "true";
const fixtures = enumTests();

interface TestMetadata {
  skip?: boolean;
}
const exampleMetadata: Record<string, TestMetadata> = {
  "arrays/jsonPathExpressions": { skip:  true}, //asl-lib doesnt implement pathExpressions (yet)
}


for (const fixture of fixtures) {
  const testFilePath = fixture.path + "/../integration-tests/" + fixture.fixtureName + ".integration.ts";
  if (true || !existsSync(testFilePath)) {
    const tests = fixture.enumTestCases();
    if (tests.length > 0) {
      createIntegrationTestFile(testFilePath, fixture.fixtureName, tests.map(x => x.testName));
    }
  }
}

function createIntegrationTestFile(path: string, filename: string, tests: string[]) {


  tests = tests.filter(x=> !exampleMetadata[`${filename}/${x}`]?.skip);

  const importDecl = factory.createImportDeclaration(
    undefined,
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamedImports([factory.createImportSpecifier(
        false,
        undefined,
        factory.createIdentifier("convertDeployExecute")
      )])
    ),
    factory.createStringLiteral("../utility"),
    undefined
  );
  const importDecl2 = factory.createImportDeclaration(
    undefined,
    undefined,
    factory.createImportClause(
      false,
      undefined,
      factory.createNamespaceImport(factory.createIdentifier("asl"))
    ),
    factory.createStringLiteral("@ts2asl/asl-lib"),
    undefined
  )
  const jestTimeout = factory.createExpressionStatement(factory.createCallExpression(
    factory.createPropertyAccessExpression(
      factory.createIdentifier("jest"),
      factory.createIdentifier("setTimeout")
    ),
    undefined,
    [factory.createNumericLiteral("99999999")]
  ));

  const bindingsForRequire = tests.map(test => factory.createBindingElement(
    undefined,
    undefined,
    factory.createIdentifier(test),
    undefined
  ));

  const requireStatement = factory.createVariableStatement(
    undefined,
    factory.createVariableDeclarationList(
      [factory.createVariableDeclaration(
        factory.createObjectBindingPattern(bindingsForRequire),
        undefined,
        undefined,
        factory.createCallExpression(
          factory.createIdentifier("require"),
          undefined,
          [factory.createStringLiteral("../resources/" + filename)]
        )
      )],
      ts.NodeFlags.Const | ts.NodeFlags.AwaitContext | ts.NodeFlags.ContextFlags | ts.NodeFlags.TypeExcludesFlags
    )
  );
  
  const testFunctions = tests.map(test => factory.createExpressionStatement(factory.createCallExpression(
    factory.createIdentifier("it"),
    undefined,
    [
      factory.createStringLiteral(`will execute ${test} as if it were node`),
      factory.createArrowFunction(
        [factory.createModifier(ts.SyntaxKind.AsyncKeyword)],
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
                  factory.createIdentifier("resultFromSfn"),
                  undefined,
                  undefined,
                  factory.createAwaitExpression(factory.createCallExpression(
                    factory.createIdentifier("convertDeployExecute"),
                    undefined,
                    [
                      factory.createStringLiteral(filename),
                      factory.createStringLiteral(test)
                    ]
                  ))
                )],
                ts.NodeFlags.Const | ts.NodeFlags.AwaitContext | ts.NodeFlags.ContextFlags | ts.NodeFlags.TypeExcludesFlags
              )
            ),
            factory.createVariableStatement(
              undefined,
              factory.createVariableDeclarationList(
                [factory.createVariableDeclaration(
                  factory.createIdentifier("resultFromNode"),
                  undefined,
                  undefined,
                  factory.createAwaitExpression(factory.createCallExpression(
                    factory.createIdentifier(test),
                    undefined,
                    [
                      factory.createObjectLiteralExpression(
                        [],
                        false
                      ),
                      factory.createCallExpression(
                        factory.createPropertyAccessExpression(
                          factory.createPropertyAccessExpression(
                            factory.createIdentifier("asl"),
                            factory.createIdentifier("testing")
                          ),
                          factory.createIdentifier("createTestContext")
                        ),
                        undefined,
                        [factory.createObjectLiteralExpression(
                          [],
                          false
                        )]
                      )
                    ]
                  ))
                )],
                ts.NodeFlags.Const | ts.NodeFlags.AwaitContext | ts.NodeFlags.ContextFlags | ts.NodeFlags.TypeExcludesFlags
              )
            ),
            factory.createExpressionStatement(factory.createCallExpression(
              factory.createPropertyAccessExpression(
                factory.createCallExpression(
                  factory.createIdentifier("expect"),
                  undefined,
                  [factory.createIdentifier("resultFromSfn")]
                ),
                factory.createIdentifier("toEqual")
              ),
              undefined,
              [factory.createIdentifier("resultFromNode")]
            ))
          ],
          true
        )
      )
    ]
  ))
  );

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
  contents += printer.printNode(ts.EmitHint.Unspecified, importDecl2, sourceFile);
  contents += "\n";
  contents += printer.printNode(ts.EmitHint.Unspecified, importDecl, sourceFile);
  contents += "\n";
  contents += printer.printNode(ts.EmitHint.Unspecified, requireStatement, sourceFile);
  contents += "\n";
  contents += printer.printNode(ts.EmitHint.Unspecified, jestTimeout, sourceFile);
  contents += "\n";
  contents += "\n";
  contents += printer.printNode(ts.EmitHint.Unspecified, describe, sourceFile);

  writeFileSync(path, contents);
}

