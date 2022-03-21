import { readdirSync, statSync } from "fs";
import { createCompilerHostFromFile } from "../convert/lib";
import { FunctionDeclaration, listFunctionDeclarations } from "../convert/src/convert/list-function-declarations";

export const enumTests = (): TestFixture[] => {
  const result: TestFixture[] = [];
  const path = "../convert/src/__test__/resources";
  const files = readdirSync(path);
  let testCaseCache: Record<string, TestCase[]> = {};
  for (const fileName of files) {
    const filePath = path + "/" + fileName;
    if (statSync(filePath).isDirectory()) continue;
    let fixtureName = fileName.substring(0, fileName.length - 3);
    let fixture = {
      fixtureName,
      path,
      enumTestCases: () => {
        if (testCaseCache[fixtureName]) {
          return testCaseCache[fixtureName];
        }
        const tests: TestCase[] = [];
        const host = createCompilerHostFromFile(filePath, "../convert");
        const fnDecls = listFunctionDeclarations(host.sourceFile, host.typeChecker)
        for (const decl of fnDecls) {
          if (decl.kind !== "asl") continue;
          const testCase: TestCase = {
            fixtureName,
            testName: decl.name,
            decl,
          };

          tests.push(testCase)
        }
        testCaseCache[fixtureName] = tests;
        return tests;
      },
    } as TestFixture;
    result.push(fixture)
  };
  return result;
}


interface TestFixture {
  path: string;
  fixtureName: string;
  enumTestCases: () => TestCase[];
}


export interface TestCase {
  fixtureName: string;
  testName: string;
  decl: FunctionDeclaration;
}