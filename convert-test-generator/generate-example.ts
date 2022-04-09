import * as ts from "typescript";
import factory = ts.factory;
import { existsSync, writeFileSync } from "fs";
import { enumTests, TestCase } from "./enum-tests";
import { capitalCase } from "change-case"
import { FunctionDeclaration } from "../convert/src/convert/list-function-declarations";

const explanations: Record<string, string> = {
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
}
const regen = process.env.REGEN == "true";
const fixtures = enumTests();
for (const fixture of fixtures) {
  const exampleFilePath = "../examples/" + fixture.fixtureName + ".md";
  if (regen || !existsSync(exampleFilePath)) {
    const tests = fixture.enumTestCases();
    if (tests.length > 0) {
      createExamples(exampleFilePath, fixture.fixtureName, tests)
    }
  }
}

function createExamples(path: string, filename: string, tests: TestCase[]) {
  let contents = "";
  for (const test of tests) {

    const code = printFunction(test.decl);
    let buff = Buffer.from("import * as asl from \"@ts2asl/asl-lib\"\n\n" + code);
    let base64data = buff.toString('base64');

    const title = capitalCase(test.testName).toLowerCase();
    contents += "\n" + "## " + title + "\n";
    const explanationKey = test.fixtureName + "/" + test.testName;
    const explanation = explanations[explanationKey];
    if (explanation) {
      contents += explanation + "\n";
    } else {
      console.debug("explanation not found for key: " + explanationKey);
    }
    contents += `[Open in playground](https://asl-editor-spike-ts-stedi.vercel.app/?${base64data})\n\n`;
    contents += "``` typescript\n";
    contents += code;
    contents += "\n```\n\n";
  }
  contents += "\n";

  writeFileSync(path, contents);
}


function printFunction(decl: FunctionDeclaration) {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const sourceFile = ts.createSourceFile("./x.ts", "", ts.ScriptTarget.Latest);

  const node = factory.createVariableStatement(
    [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [factory.createVariableDeclaration(
        factory.createIdentifier("main"),
        undefined,
        undefined,
        factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createPropertyAccessExpression(
              factory.createIdentifier("asl"),
              factory.createIdentifier("deploy")
            ),
            factory.createIdentifier("asStateMachine")
          ),
          undefined,
          [factory.createArrowFunction(
            [factory.createModifier(ts.SyntaxKind.AsyncKeyword)],
            undefined,
            decl.parameters ?? [],
            undefined,
            factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken),
            factory.createBlock([]),
          )]
        )
      )],
      ts.NodeFlags.Const
    )
  );

  const code = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
  return code.replace("=> { }", "=> \n" + decl.body!.getFullText() + "");
}