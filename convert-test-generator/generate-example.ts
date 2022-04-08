import * as ts from "typescript";
import factory = ts.factory;
import { existsSync, writeFileSync } from "fs";
import { enumTests, TestCase } from "./enum-tests";
import { capitalCase } from "change-case"
import { FunctionDeclaration } from "../convert/src/convert/list-function-declarations";

const explanations: Record<string, string> = {
  "arrays/serializeArray": "This example shows how to serialize and deserialize an array."
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