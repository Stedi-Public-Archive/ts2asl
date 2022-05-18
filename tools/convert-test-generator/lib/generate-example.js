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
const change_case_1 = require("change-case");
const explanations = {
    "arrays/serializeArray": "This example shows how to serialize and deserialize an array.",
    "ts-lib-convert/convertStringToNumber": "This example demonstrates how to convert to number to a string (and string to a number). The function will return \"succeeded\" and both if-statements will use the inferred type in their comparison.",
    "ts-lib-convert/convertStringToBoolean": "This example demonstrates how to convert to boolean to a string (and string to a boolean). The function will return \"succeeded\" and both if-statements will use the inferred type in their comparison.",
    "do-while/simpleDoWhile": "This example demonstrates a simple `do-while` statement. This function will return `aaaaa`.\n\n*note: as incrementing/decrementing numbers is not supported in ASL the examples uses a string (and string concatenation) as a counter.* \n",
    "do-while/doWhileWithBreak": "This example demonstrates a `do-while` statement with a `break` statement. The do-while statement will break once the container equals `aa`, this function will return `aa`.\n\n*note: as incrementing/decrementing numbers is not supported in ASL the examples uses a string (and string concatenation) as a counter.* \n",
    "do-while/doWhileWithEarlyReturn": "This example demonstrates a `do-while` statement with an early `return`. The function will return from within the do-while statement, this function will return `aa`.\n\n*note: as incrementing/decrementing numbers is not supported in ASL the examples uses a string (and string concatenation) as a counter.* \n",
    "do-while/doWhileWithContinue": "This example demonstrates a `do-while` statement with a `continue` statement. The function will not add `b` to result in one of the iterations, this function will therefore return `bbbb` (4 x `b` instead of 5 x `b`).\n\n*note: as incrementing/decrementing numbers is not supported in ASL the examples uses a string (and string concatenation) as a counter.* \n",
    "for-each/simpleForeach": "This example demonstrates a simple `for-each` (or: `for ... of`) statement. It converts an array of numbers to a single string. in order to ensure there is no leading `,` a local variable is used to treat the first element in the array differently. This function returns `1, 2, 3.`.",
    "for-each/foreachWithBreak": "This example demonstrates a `break` statement within a `for-each` statement. The break statements exists the loop after number `2` was added to the list. this function returns  `1, 2`.",
    "for-each/foreachWithContinue": "This example demonstrates a `continue` statement within a `for-each` statement. The `continue` statements prevents number `2` from being added to the list. this function returns  `1, 3`.",
    "for-each/foreachEarlyReturn": "This example demonstrates a `return` statement within a `for-each` statement. The `return` prevents the loop from processing, and the function returns `found 2!`.",
    "arrays/mapArray": "",
    "arrays/mapArraySimple": "",
    "arrays/mapArrayNestedPropertyAccess": "",
    "arrays/filterArray": "",
    "arrays/jsonPathExpressions": "",
    "boolean-evalation/main": "",
    "boolean-evalation/numericComparison": "",
    "choice/choice": "",
    "choice/choiceWithSingleStatements": "",
    "choice/choiceWithShorthand": "",
    "closures/main": "",
    "expressions/concatStrings": "",
    "expressions/numbers": "",
    "expressions/booleans": "",
    "expressions/parameters": "",
    "for-each/nestedForeach": "",
    "hello-world/main": "",
    "if/justIf": "",
    "if/ifElse": "",
    "if/nestedIfs": "",
    "if/enclosedVars": "",
    "input-validation/main": "",
    "input-validation/notEquals": "",
    "kyc/main": "",
    "map/main": "",
    "parallel/simple": "",
    "parallel/enclosedVariables": "",
    "string-templates/stringTemplates": "",
    "switch/main": "",
    "tasks/countS3buckets": "",
    "throw/tryCatch": "",
    "throw/throwErrors": "",
    "throw/RetryErrors": "",
    "throw/CatchErrors": "",
    "try-catch/simpleTry": "",
    "try-catch/simpleMultipleStatements": "",
    "try-catch/tryAroundPassState": "",
    "try-catch/tryFinally": "",
    "try-catch/tryCatchFinally": "",
    "variable-assignments/literals": "",
    "variable-assignments/arrayWithIdentifiers": "",
    "variable-assignments/arrayIndexer": "",
    "variable-assignments/functions": "",
    "variables/main": "",
    "while/simpleWhile": "",
    "while/whileWithBreak": "",
    "while/whileWithEarlyReturn": "",
    "while/whileWithContinue": "",
};
const regen = process.env.REGEN == "true";
const fixtures = (0, enum_tests_1.enumTests)();
for (const fixture of fixtures) {
    const exampleFilePath = "../../examples/" + fixture.fixtureName + ".md";
    if (regen || !(0, fs_1.existsSync)(exampleFilePath)) {
        const tests = fixture.enumTestCases();
        if (tests.length > 0) {
            createExamples(exampleFilePath, fixture.fixtureName, tests);
        }
    }
}
function createExamples(path, filename, tests) {
    let contents = "";
    for (const test of tests) {
        const code = printFunction(test.decl);
        let buff = Buffer.from("import * as asl from \"@ts2asl/asl-lib\"\n\n" + code);
        let base64data = buff.toString('base64');
        const title = (0, change_case_1.capitalCase)(test.testName).toLowerCase();
        contents += "\n" + "## " + title + "\n";
        const explanationKey = test.fixtureName + "/" + test.testName;
        const explanation = explanations[explanationKey];
        if (explanation) {
            contents += explanation + "\n";
        }
        else {
            console.debug("explanation not found for key: " + explanationKey);
        }
        contents += `[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?${base64data})\n\n`;
        contents += "``` typescript\n";
        contents += code;
        contents += "\n```\n\n";
    }
    contents += "\n";
    (0, fs_1.writeFileSync)(path, contents);
}
function printFunction(decl) {
    var _a;
    const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
    const sourceFile = ts.createSourceFile("./x.ts", "", ts.ScriptTarget.Latest);
    const node = factory.createVariableStatement([factory.createModifier(ts.SyntaxKind.ExportKeyword)], factory.createVariableDeclarationList([factory.createVariableDeclaration(factory.createIdentifier("main"), undefined, undefined, factory.createCallExpression(factory.createPropertyAccessExpression(factory.createPropertyAccessExpression(factory.createIdentifier("asl"), factory.createIdentifier("deploy")), factory.createIdentifier("asStateMachine")), undefined, [factory.createArrowFunction([factory.createModifier(ts.SyntaxKind.AsyncKeyword)], undefined, (_a = decl.parameters) !== null && _a !== void 0 ? _a : [], undefined, factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken), factory.createBlock([]))]))], ts.NodeFlags.Const));
    const code = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
    return code.replace("=> { }", "=> \n" + decl.body.getFullText() + "");
}
