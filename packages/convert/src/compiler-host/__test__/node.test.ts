import { readFileSync } from "fs";
import ts from "typescript";
import { convertType } from "../../convert-asllib-to-iasl/helper";
import { createCompilerHostFromFile, createCompilerHostFromSource } from "../node";
import { createCompilerHostFromSourceForWeb } from "../web";

const filePath = "./src/compiler-host/__test__/resources/lib-test.ts";
const source = readFileSync(filePath).toString("utf-8");
const hostFromFile = createCompilerHostFromFile("./src/compiler-host/__test__/resources/lib-test.ts");
const hostFromSource = createCompilerHostFromSource(source);
const hostForWeb = createCompilerHostFromSourceForWeb(source);


const getTypeOfStatement = (host : {sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker}, line: number) => {
  try {
    const variableStatement = host.sourceFile.statements[line];
    if (!ts.isVariableStatement(variableStatement)) return ""
    const decl = variableStatement.declarationList.declarations[0];
    if (!ts.isVariableDeclaration(decl)) return ""
    const type = host.typeChecker.getTypeAtLocation(decl.name);
    const symbol = host.typeChecker.getSymbolAtLocation(decl.name);
    const iaslType = convertType(type, symbol);
    return iaslType;
  } catch(err) {
    return err;
  }
}

describe("when creating host based on string", () => {
  test("then asl-lib resolves in host from file", () => {
    const host = hostFromFile;
    const types = [getTypeOfStatement(host, 2),getTypeOfStatement(host, 3), getTypeOfStatement(host, 4), getTypeOfStatement(host, 5), getTypeOfStatement(host, 6)];
    expect(types).toEqual(["numeric", "string", "callable-statemachine", "callable-lambda", "numeric"]);
  });

  test("then asl-lib resolves in host from source", () => {
    const host = hostFromSource;
    expect(host.sourceFile).toBeDefined();
    const types = [getTypeOfStatement(host, 2),getTypeOfStatement(host, 3), getTypeOfStatement(host, 4), getTypeOfStatement(host, 5)];
    expect(types).toEqual(["numeric", "string", "callable-statemachine", "callable-lambda"]);
  });

  test("then asl-lib resolves in host from source for web", () => {
    const host = hostForWeb;
    expect(host.sourceFile).toBeDefined();
    const types = [getTypeOfStatement(host, 2),getTypeOfStatement(host, 3), getTypeOfStatement(host, 4), getTypeOfStatement(host, 5)];
    expect(types).toEqual(["numeric", "string", "callable-statemachine", "callable-lambda"]);
  });
});