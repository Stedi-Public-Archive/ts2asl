import { readdirSync, statSync } from "fs";
import { createCompilerHostFromFile } from "@ts2asl/convert";
import { FunctionDeclaration, listFunctionDeclarations } from "@ts2asl/convert/src/convert/list-function-declarations";
import ts from "typescript";

export const enumTests = (): TestFixture[] => {
  const result: TestFixture[] = [];
  const path = "../../packages/convert/src/__test__/resources";
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
        const fnDecls = listFunctionDeclarations(host.sourceFile, host.typeChecker);
        const otherDecls = listOtherDecls(host.sourceFile, host.typeChecker);
        for (const decl of fnDecls) {
          if (decl.kind !== "asl") continue;
          const testCase: TestCase = {
            fixtureName,
            testName: decl.name,
            testCase: decl,
            otherDecls,
          };

          tests.push(testCase);
        }
        testCaseCache[fixtureName] = tests;
        return tests;
      },
    } as TestFixture;
    result.push(fixture);
  };
  return result;
};


interface TestFixture {
  path: string;
  fixtureName: string;
  enumTestCases: () => TestCase[];
  GetDeclaration(name: string): ts.Node;
}


export interface TestCase {
  fixtureName: string;
  testName: string;
  testCase: FunctionDeclaration;
  otherDecls: ts.Node[];
}

export const listOtherDecls = (sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker) => {
  const result: ts.Node[] = [];
  ts.forEachChild(sourceFile, node => {
    if (ts.isEnumDeclaration(node)) {
      result.push(node);
    }
    if (ts.isInterfaceDeclaration(node)) {
      result.push(node);
    }
    if (ts.isClassDeclaration(node)) {
      result.push(node);
    }
  });
  return result;
}
