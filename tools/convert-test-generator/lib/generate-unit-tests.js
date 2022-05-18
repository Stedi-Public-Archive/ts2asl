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
    const testFilePath = fixture.path + "/../tests/" + fixture.fixtureName + ".test.ts";
    if (regen || !(0, fs_1.existsSync)(testFilePath)) {
        const tests = fixture.enumTestCases();
        if (tests.length > 0) {
            createUnitTestFile(testFilePath, fixture.fixtureName, tests.map(x => x.testName));
        }
    }
}
function createUnitTestFile(path, filename, tests) {
    const importDecl = factory.createImportDeclaration(undefined, undefined, factory.createImportClause(false, undefined, factory.createNamedImports([factory.createImportSpecifier(false, undefined, factory.createIdentifier("runConvertForTest"))])), factory.createStringLiteral("../utility"), undefined);
    const testFunctions = tests.map(test => factory.createExpressionStatement(factory.createCallExpression(factory.createIdentifier("it"), undefined, [
        factory.createStringLiteral(`then ${test} can be converted to asl`),
        factory.createArrowFunction([factory.createModifier(ts.SyntaxKind.AsyncKeyword)], undefined, [], undefined, factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken), factory.createBlock([factory.createExpressionStatement(factory.createCallExpression(factory.createPropertyAccessExpression(factory.createCallExpression(factory.createIdentifier("expect"), undefined, [factory.createPropertyAccessExpression(factory.createPropertyAccessExpression(factory.createIdentifier("converted"), factory.createIdentifier(test)), factory.createIdentifier("asl"))]), factory.createIdentifier("toMatchInlineSnapshot")), undefined, []))], true))
    ])));
    const describe = factory.createExpressionStatement(factory.createCallExpression(factory.createIdentifier("describe"), undefined, [
        factory.createStringLiteral("when converting " + filename),
        factory.createArrowFunction(undefined, undefined, [], undefined, factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken), factory.createBlock([
            factory.createVariableStatement(undefined, factory.createVariableDeclarationList([factory.createVariableDeclaration(factory.createIdentifier("converted"), undefined, undefined, undefined)], ts.NodeFlags.Let)),
            factory.createExpressionStatement(factory.createCallExpression(factory.createIdentifier("beforeAll"), undefined, [factory.createArrowFunction(undefined, undefined, [], undefined, factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken), factory.createBlock([factory.createExpressionStatement(factory.createBinaryExpression(factory.createIdentifier("converted"), factory.createToken(ts.SyntaxKind.EqualsToken), factory.createCallExpression(factory.createIdentifier("runConvertForTest"), undefined, [factory.createStringLiteral(filename)])))], true))])),
            ...testFunctions
        ], true))
    ]));
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    const sourceFile = ts.createSourceFile(path, "", ts.ScriptTarget.Latest);
    let contents = "";
    contents += printer.printNode(ts.EmitHint.Unspecified, importDecl, sourceFile);
    contents += "\n";
    contents += printer.printNode(ts.EmitHint.Unspecified, describe, sourceFile);
    (0, fs_1.writeFileSync)(path, contents);
}
