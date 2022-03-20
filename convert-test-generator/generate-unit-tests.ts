import * as ts from "typescript";
import factory = ts.factory;
import { existsSync, readdirSync, statSync, writeFileSync } from "fs";
import { createCompilerHostFromFile } from "../convert/lib"
import { listFunctionDeclarations } from "../convert/src/convert/list-function-declarations"

const path = "../convert/src/__test__/resources";
const files = readdirSync(path);
for (const fileName of files) {
  const filePath = path + "/" + fileName;
  if (statSync(filePath).isDirectory()) continue;
  const testFilePath = path + "/../tests/" + fileName.replace(".ts", ".test.ts");
  if (!existsSync(testFilePath)) {
    try {
      const host = createCompilerHostFromFile(filePath, "../convert");
      const tests = [];
      const fnDecls = listFunctionDeclarations(host.sourceFile, host.typeChecker)
      for (const decl of fnDecls) {
        if (decl.kind !== "asl") continue;
        tests.push(decl.name);
      }

      createUnitTestFile(testFilePath, fileName.replace(".ts", ""), tests);
    } catch {
    }
  }
  const integrationTestFilePath = path + "/../integration-tests/" + fileName.replace(".ts", ".integration.ts");
  if (!existsSync(integrationTestFilePath)) {
    try {
      const host = createCompilerHostFromFile(filePath, "../convert");
      const tests = [];
      const fnDecls = listFunctionDeclarations(host.sourceFile, host.typeChecker)
      for (const decl of fnDecls) {
        if (decl.kind !== "asl") continue;
        tests.push(decl.name);
      }

      createIntegrationTestFile(integrationTestFilePath, fileName.replace(".ts", ""), tests);
    } catch {
    }
  }
}


function createIntegrationTestFile(path: string, filename: string, tests: string[]) {
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
  )

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
                  factory.createObjectBindingPattern([factory.createBindingElement(
                    undefined,
                    undefined,
                    factory.createIdentifier(test),
                    undefined
                  )]),
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
                    []
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

