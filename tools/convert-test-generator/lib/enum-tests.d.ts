import { FunctionDeclaration } from "@ts2asl/convert/src/convert/list-function-declarations";
export declare const enumTests: () => TestFixture[];
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
export {};
