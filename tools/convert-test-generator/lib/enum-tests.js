"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumTests = void 0;
const fs_1 = require("fs");
const convert_1 = require("@ts2asl/convert");
const list_function_declarations_1 = require("@ts2asl/convert/src/convert/list-function-declarations");
const enumTests = () => {
    const result = [];
    const path = "../../packages/convert/src/__test__/resources";
    const files = (0, fs_1.readdirSync)(path);
    let testCaseCache = {};
    for (const fileName of files) {
        const filePath = path + "/" + fileName;
        if ((0, fs_1.statSync)(filePath).isDirectory())
            continue;
        let fixtureName = fileName.substring(0, fileName.length - 3);
        let fixture = {
            fixtureName,
            path,
            enumTestCases: () => {
                if (testCaseCache[fixtureName]) {
                    return testCaseCache[fixtureName];
                }
                const tests = [];
                const host = (0, convert_1.createCompilerHostFromFile)(filePath, "../convert");
                const fnDecls = (0, list_function_declarations_1.listFunctionDeclarations)(host.sourceFile, host.typeChecker);
                for (const decl of fnDecls) {
                    if (decl.kind !== "asl")
                        continue;
                    const testCase = {
                        fixtureName,
                        testName: decl.name,
                        decl,
                    };
                    tests.push(testCase);
                }
                testCaseCache[fixtureName] = tests;
                return tests;
            },
        };
        result.push(fixture);
    }
    ;
    return result;
};
exports.enumTests = enumTests;
