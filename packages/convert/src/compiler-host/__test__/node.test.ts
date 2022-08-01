import { readFileSync } from "fs";
import ts from "typescript";
import { convertType } from "../../convert-asllib-to-iasl/helper";
import { createCompilerHostFromFile, createCompilerHostFromSource } from "../node";
import { createCompilerHostFromSourceForWeb } from "../web";

const filePath = "./src/compiler-host/__test__/resources/lib-test.ts";
const source = readFileSync(filePath).toString("utf-8");
const hostFromFile = createCompilerHostFromFile("./src/compiler-host/__test__/resources/lib-test.ts");
const hostFromSource = createCompilerHostFromSource(source);
const hostForWeb = createCompilerHostFromSourceForWeb(source, {"client-sns": readFileSync("./src/compiler-host/__test__/resources/client-sns.d.ts").toString("utf-8") as string });


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


const getStatementTypes = (host : {sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker}) => {
  return {
    evalConstNum: getTypeOfStatement(host, 4),
    evalConstString: getTypeOfStatement(host, 5),
    deployAsStatemachine: getTypeOfStatement(host, 6),
    deployAsLambda: getTypeOfStatement(host, 7),
    statusCodeFromPromise: getTypeOfStatement( host, 8),
    messageIdFromPromise: getTypeOfStatement(host, 9),
    resultFromLambda: getTypeOfStatement(host, 10),
    asliasedImport: getTypeOfStatement(host, 11),
  }
}

describe("when creating host based on string", () => {
  test.only("then asl-lib resolves in host from file", () => {
    const host = hostFromFile;
    const types = getStatementTypes(host);
    expect(types).toMatchObject({ 
      evalConstNum: "numeric",
      evalConstString: "string",
      deployAsStatemachine: "callable-statemachine",
      deployAsLambda: "callable-lambda",
      statusCodeFromPromise: "numeric",
      messageIdFromPromise: "string",
      resultFromLambda: "numeric",
      asliasedImport: "object"
    });
  });

  test("then asl-lib resolves in host from source", () => {
    const host = hostFromSource;
    expect(host.sourceFile).toBeDefined();
    const types = getStatementTypes(host);
    expect(types).toMatchObject({ 
      evalConstNum: "numeric",
      evalConstString: "string",
      deployAsStatemachine: "callable-statemachine",
      deployAsLambda: "callable-lambda",
      //statusCodeFromPromise: "numeric", //does not have Libs
      //messageIdFromPromise: "string", //does not have Libs
    });
  });

  test("then asl-lib resolves in host from source for web", () => {
    const host = hostForWeb;
    expect(host.sourceFile).toBeDefined();
    const types = getStatementTypes(host);
    expect(types).toMatchObject({ 
      evalConstNum: "numeric",
      evalConstString: "string",
      deployAsStatemachine: "callable-statemachine",
      deployAsLambda: "callable-lambda",
      statusCodeFromPromise: "numeric",
      messageIdFromPromise: "string",
    });
  });
});