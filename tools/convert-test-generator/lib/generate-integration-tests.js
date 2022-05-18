"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ts = __importStar(require("typescript"));
var factory = ts.factory;
const fs_1 = require("fs");
const enum_tests_1 = require("./enum-tests");
const regen = process.env.REGEN == "true";
const fixtures = (0, enum_tests_1.enumTests)();
for (const fixture of fixtures) {
    const testFilePath = fixture.path + "/../integration-tests/" + fixture.fixtureName + ".integration.ts";
    if (regen || !(0, fs_1.existsSync)(testFilePath)) {
        const tests = fixture.enumTestCases();
        if (tests.length > 0) {
            createIntegrationTestFile(testFilePath, fixture.fixtureName, tests.map(x => x.testName));
        }
    }
}
function createIntegrationTestFile(path, filename, tests) {
    const importDecl = factory.createImportDeclaration(undefined, undefined, factory.createImportClause(false, undefined, factory.createNamedImports([factory.createImportSpecifier(false, undefined, factory.createIdentifier("convertDeployExecute"))])), factory.createStringLiteral("../utility"), undefined);
    const jestTimeout = factory.createExpressionStatement(factory.createCallExpression(factory.createPropertyAccessExpression(factory.createIdentifier("jest"), factory.createIdentifier("setTimeout")), undefined, [factory.createNumericLiteral("99999999")]));
    const testFunctions = tests.map(test => factory.createExpressionStatement(factory.createCallExpression(factory.createIdentifier("it"), undefined, [
        factory.createStringLiteral(`will execute ${test} as if it were node`),
        factory.createArrowFunction([factory.createModifier(ts.SyntaxKind.AsyncKeyword)], undefined, [], undefined, factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken), factory.createBlock([
            factory.createVariableStatement(undefined, factory.createVariableDeclarationList([factory.createVariableDeclaration(factory.createIdentifier("resultFromSfn"), undefined, undefined, factory.createAwaitExpression(factory.createCallExpression(factory.createIdentifier("convertDeployExecute"), undefined, [
                    factory.createStringLiteral(filename),
                    factory.createStringLiteral(test)
                ])))], ts.NodeFlags.Const | ts.NodeFlags.AwaitContext | ts.NodeFlags.ContextFlags | ts.NodeFlags.TypeExcludesFlags)),
            factory.createVariableStatement(undefined, factory.createVariableDeclarationList([factory.createVariableDeclaration(factory.createObjectBindingPattern([factory.createBindingElement(undefined, undefined, factory.createIdentifier(test), undefined)]), undefined, undefined, factory.createCallExpression(factory.createIdentifier("require"), undefined, [factory.createStringLiteral("../resources/" + filename)]))], ts.NodeFlags.Const | ts.NodeFlags.AwaitContext | ts.NodeFlags.ContextFlags | ts.NodeFlags.TypeExcludesFlags)),
            factory.createVariableStatement(undefined, factory.createVariableDeclarationList([factory.createVariableDeclaration(factory.createIdentifier("resultFromNode"), undefined, undefined, factory.createAwaitExpression(factory.createCallExpression(factory.createIdentifier(test), undefined, [
                    factory.createObjectLiteralExpression([], false)
                ])))], ts.NodeFlags.Const | ts.NodeFlags.AwaitContext | ts.NodeFlags.ContextFlags | ts.NodeFlags.TypeExcludesFlags)),
            factory.createExpressionStatement(factory.createCallExpression(factory.createPropertyAccessExpression(factory.createCallExpression(factory.createIdentifier("expect"), undefined, [factory.createIdentifier("resultFromSfn")]), factory.createIdentifier("toEqual")), undefined, [factory.createIdentifier("resultFromNode")]))
        ], true))
    ])));
    const describe = factory.createExpressionStatement(factory.createCallExpression(factory.createIdentifier("describe"), undefined, [
        factory.createStringLiteral("when converting " + filename),
        factory.createArrowFunction(undefined, undefined, [], undefined, factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken), factory.createBlock([
            ...testFunctions
        ], true))
    ]));
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    const sourceFile = ts.createSourceFile(path, "", ts.ScriptTarget.Latest);
    let contents = "";
    contents += printer.printNode(ts.EmitHint.Unspecified, importDecl, sourceFile);
    contents += "\n";
    contents += printer.printNode(ts.EmitHint.Unspecified, jestTimeout, sourceFile);
    contents += "\n";
    contents += "\n";
    contents += printer.printNode(ts.EmitHint.Unspecified, describe, sourceFile);
    (0, fs_1.writeFileSync)(path, contents);
}
