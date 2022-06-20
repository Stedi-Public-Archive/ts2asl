import * as ts from "typescript";
import factory = ts.factory;
import { existsSync, writeFileSync } from "fs";
import { enumTests, TestCase } from "./enum-tests";
import { capitalCase } from "change-case";
import { FunctionDeclaration } from "@ts2asl/convert/src/convert/list-function-declarations";
import prettier from "prettier";

interface ExampleMetadata {
  description?: string;
  skip?: boolean;
  dependentTestCases?: string[];
}

const exampleMetadata: Record<string, ExampleMetadata> = {
  "arrays/serializeArray": { description:  "This example shows how to serialize and deserialize an array."},
  "ts-lib-convert/convertStringToNumber": { description:  "This example demonstrates how to convert to number to a string (and string to a number). The function will return \"succeeded\" and both if-statements will use the inferred type in their comparison."},
  "ts-lib-convert/convertStringToBoolean": { description:  "This example demonstrates how to convert to boolean to a string (and string to a boolean). The function will return \"succeeded\" and both if-statements will use the inferred type in their comparison."},
  "do-while/simpleDoWhile": { description:  "This example demonstrates a simple `do-while` statement. This function will return `aaaaa`.\n\n*note: as incrementing/decrementing numbers is not supported in ASL the examples uses a string (and string concatenation) as a counter.* \n"},
  "do-while/doWhileWithBreak": { description:  "This example demonstrates a `do-while` statement with a `break` statement. The do-while statement will break once the container equals `aa`, this function will return `aa`.\n\n*note: as incrementing/decrementing numbers is not supported in ASL the examples uses a string (and string concatenation) as a counter.* \n"},
  "do-while/doWhileWithEarlyReturn": { description:  "This example demonstrates a `do-while` statement with an early `return`. The function will return from within the do-while statement, this function will return `aa`.\n\n*note: as incrementing/decrementing numbers is not supported in ASL the examples uses a string (and string concatenation) as a counter.* \n"},
  "do-while/doWhileWithContinue": { description:  "This example demonstrates a `do-while` statement with a `continue` statement. The function will not add `b` to result in one of the iterations, this function will therefore return `bbbb` (4 x `b` instead of 5 x `b`).\n\n*note: as incrementing/decrementing numbers is not supported in ASL the examples uses a string (and string concatenation) as a counter.* \n"},
  "for-each/simpleForeach": { description:  "This example demonstrates a simple `for-each` (or: `for ... of`) statement. It converts an array of numbers to a single string. in order to ensure there is no leading `,` a local variable is used to treat the first element in the array differently. This function returns `1, 2, 3.`."},
  "for-each/foreachWithBreak": { description:  "This example demonstrates a `break` statement within a `for-each` statement. The break statements exists the loop after number `2` was added to the list. this function returns  `1, 2`."},
  "for-each/foreachWithContinue": { description:  "This example demonstrates a `continue` statement within a `for-each` statement. The `continue` statements prevents number `2` from being added to the list. this function returns  `1, 3`."},
  "for-each/foreachEarlyReturn": { description:  "This example demonstrates a `return` statement within a `for-each` statement. The `return` prevents the loop from processing, and the function returns `found 2!`."},
  "arrays/mapArray": { description:  ""},
  "arrays/mapArraySimple": { description:  ""},
  "arrays/mapArrayNestedPropertyAccess": { description:  ""},
  "arrays/filterArray": { description:  ""},
  "arrays/jsonPathExpressions": { description:  ""},
  "boolean-evalation/main": { description:  ""},
  "boolean-evalation/numericComparison": { description:  ""},
  "choice/choice": { description:  ""},
  "choice/choiceWithSingleStatements": { description:  ""},
  "choice/choiceWithShorthand": { description:  ""},
  "closures/main": { description:  ""},
  "expressions/concatStrings": { description:  ""},
  "expressions/numbers": { description:  ""},
  "expressions/booleans": { description:  ""},
  "expressions/parameters": { description:  ""},
  "for-each/nestedForeach": { description:  ""},
  "hello-world/main": { description:  ""},
  "if/justIf": { description:  ""},
  "if/ifElse": { description:  ""},
  "if/nestedIfs": { description:  ""},
  "if/enclosedVars": { description:  ""},
  "input-validation/main": { description:  ""},
  "input-validation/notEquals": { description:  ""},
  "kyc/main": { description:  ""},
  "map/main": { description:  ""},
  "pagination/doSomething": { skip: true},
  "pagination/listUsers": { dependentTestCases: ["doSomething"] },
  "nested-stepfunctions/childStateMachine": { skip: true},
  "nested-stepfunctions/callStateMachineNoAwait": {dependentTestCases: ["childStateMachine"]},
  "nested-stepfunctions/callStateMachineWithAwait": {dependentTestCases: ["childStateMachine"]},
  "nested-stepfunctions/callStateMachinePassReference": {dependentTestCases: ["childStateMachine"]},
  "nested-stepfunctions/notAwaitedVoidExpression": {dependentTestCases: ["childStateMachine"]},
  "parallel/simple": { description:  ""},
  "parallel/enclosedVariables": { description:  ""},
  "string-templates/stringTemplates": { description:  ""},
  "switch/main": { description:  ""},
  "tasks/countS3buckets": { description:  ""},
  "throw/tryCatch": { description:  ""},
  "throw/throwErrors": { description:  ""},
  "throw/RetryErrors": { description:  ""},
  "throw/CatchErrors": { description:  ""},
  "try-catch/simpleTry": { description:  ""},
  "try-catch/simpleMultipleStatements": { description:  ""},
  "try-catch/tryAroundPassState": { description:  ""},
  "try-catch/tryFinally": { description:  ""},
  "try-catch/tryCatchFinally": { description:  ""},
  "variable-assignments/literals": { description:  ""},
  "variable-assignments/arrayWithIdentifiers": { description:  ""},
  "variable-assignments/arrayIndexer": { description:  ""},
  "variable-assignments/functions": { description:  ""},
  "variables/main": { description:  ""},
  "while/simpleWhile": { description:  ""},
  "while/whileWithBreak": { description:  ""},
  "while/whileWithEarlyReturn": { description:  ""},
  "while/whileWithContinue": { description:  ""},
};

const regen = process.env.REGEN == "true";
const fixtures = enumTests();
for (const fixture of fixtures) {
  const exampleFilePath = "../../examples/" + fixture.fixtureName + ".md";
  if (regen || !existsSync(exampleFilePath)) {
    const tests = fixture.enumTestCases();
    if (tests.length > 0) {
      createExamples(exampleFilePath, fixture.fixtureName, tests);
    }
  }
}

function createExamples(path: string, filename: string, tests: TestCase[]) {
  let contents = "";
  for (const test of tests) {


    const explanationKey = test.fixtureName + "/" + test.testName;
    const metadata = exampleMetadata[explanationKey];


    let otherDecls: (ts.Node | TestCase)[] = test.otherDecls;
    if (metadata && metadata.dependentTestCases) {
      for(const dependentTestCase of metadata.dependentTestCases) {
        const other = tests.find(x=>x.testCase.name === dependentTestCase);
        if (!other) throw new Error("dependent test case not found: " + dependentTestCase);
        //const node = createNodeForTestCase(other.testCase, other.testCase.name);
        otherDecls = [other, ...otherDecls];
      }
    }

    const code = printFunction(test.testCase, otherDecls);

    let buff = Buffer.from("import * as asl from \"@ts2asl/asl-lib\"\n\n" + code);
    let base64data = buff.toString('base64');

    if (metadata?.skip) continue;
    const title = capitalCase(test.testName).toLowerCase();
    contents += "\n" + "## " + title + "\n";


    if (metadata?.description) {
      contents += metadata.description + "\n";
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


function printFunction(decl: FunctionDeclaration, otherDecls: (TestCase | ts.Node)[]) {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const sourceFile = ts.createSourceFile("./x.ts", "", ts.ScriptTarget.Latest);

  const node = createNodeForTestCase(decl, "main");
  let code = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
  code = code.replace("=> { }", "=> \n" + decl.body!.getFullText() + "");
  code += "\n\n";
  for(const node of otherDecls) {
    if ("fixtureName" in node) { 
      const dependentNode = createNodeForTestCase(node.testCase, node.testName);
      let dependentCode = printer.printNode(ts.EmitHint.Unspecified, dependentNode, sourceFile);
      dependentCode = dependentCode.replace("=> { }", "=> \n" + node.testCase.body!.getFullText() + "");
      code += dependentCode + "\n\n";
    } else  if (ts.isEnumDeclaration(node)) {
      code += node.getFullText();
    } else { 
      code += printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
    }
  }

  return prettier.format(code.trim(), {parser: "typescript"});
}


function createNodeForTestCase(decl: FunctionDeclaration, name: string): ts.Node {
  return factory.createVariableStatement(
    [factory.createModifier(ts.SyntaxKind.ExportKeyword)],
    factory.createVariableDeclarationList(
      [factory.createVariableDeclaration(
        factory.createIdentifier(name),
        undefined,
        undefined,
        factory.createCallExpression(
          factory.createPropertyAccessExpression(
            factory.createPropertyAccessExpression(
              factory.createIdentifier("asl"),
              factory.createIdentifier("deploy")
            ),
            factory.createIdentifier(decl.kind === "asl" ? "asStateMachine" : "asLambda")
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
}


