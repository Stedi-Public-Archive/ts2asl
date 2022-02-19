

import ts, { getDefaultLibFileName } from "typescript";

export const createCompilerHostFromSourceForWeb = (source: string) => {
  let compilerOptions = { strict: false, target: ts.ScriptTarget.Latest, allowJs: true, module: ts.ModuleKind.Node12 } as ts.CompilerOptions;
  const contents = source;
  const sourceFile = ts.createSourceFile("ad-hoc.ts", contents, ts.ScriptTarget.ES2015);
  const aslLibSource = ts.createSourceFile("asl-lib.ts", aslLibContents, ts.ScriptTarget.Latest)
  const host: ts.CompilerHost = {
    getSourceFile: function (fileName: string, languageVersion: ts.ScriptTarget, onError?: (message: string) => void, shouldCreateNewSourceFile?: boolean): SourceFile | undefined {
      const result = [sourceFile, aslLibSource].find(x => x.fileName === fileName);

      return result;
    },
    resolveModuleNames: (moduleNames: string[]): (ts.ResolvedModule | undefined)[] => {
      return moduleNames.map(x => (x === "@cloudscript/asl-lib") ? { resolvedFileName: "asl-lib.ts" } : undefined);
    },
    getDefaultLibFileName: function (options: ts.CompilerOptions): string {
      return getDefaultLibFileName(options)
    },
    writeFile: function (fileName: string, data: string, writeByteOrderMark: boolean, onError?: (message: string) => void, sourceFiles?: readonly ts.SourceFile[]): void {

    },
    getCurrentDirectory: function (): string {
      return "/"
    },
    getCanonicalFileName: function (fileName: string): string {
      return fileName;
    },
    useCaseSensitiveFileNames: function (): boolean {
      return true;
    },
    getNewLine: function (): string {
      return "\n";
    },
    fileExists: function (fileName: string): boolean {
      return [sourceFile, aslLibSource].find(x => x.fileName === fileName) !== undefined;
    },
    readFile: function (fileName: string): string | undefined {
      const file = [sourceFile, aslLibSource].find(x => x.fileName === fileName);
      return file?.getFullText();
    }
  };
  host.getCurrentDirectory = () => "/";

  const program = ts.createProgram(["ad-hoc.ts"], compilerOptions, host);
  const typeChecker = program.getTypeChecker();
  return { sourceFile, typeChecker, program };
}


const aslLibContents = `export interface AslResource {
}
export interface AslStateMachine extends AslResource {
}
export interface AslLambdaFunction extends AslResource {
}
export interface AslState {
}
export declare type While = {
    condition: () => boolean;
    block: Function;
};
export declare type DoWhile = {
    block: Function;
    condition: () => boolean;
};
export declare type If = {
    condition: boolean | (() => boolean);
    then: Function;
    else?: Function;
    comment?: string;
};
export declare type CatchConfiguration = Array<{
    errorFilter: string[];
    block: Function;
}>;
export declare type RetryConfiguration = Array<{
    errorFilter: string[];
    intervalSeconds?: number;
    maxAttempts?: number;
    backoffRate?: number;
}>;
export interface Wait {
    seconds?: number | (() => number);
    timestamp?: string | (() => string);
    comment?: string;
}
export interface Try {
    try: Function;
    catch?: CatchConfiguration;
    finally?: Function;
    comment?: string;
}
export interface Task {
    resource: string;
    parameters?: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
    catch?: CatchConfiguration;
    retry?: RetryConfiguration;
    timeoutSeconds?: number;
    heartbeatSeconds?: number;
}
export interface Pass<T> {
    parameters: T | (() => T) | (<U>(objectContext: StateMachineContext<U>) => T);
    comment?: string;
}
export interface Fail {
    error?: string;
    cause?: string;
    comment?: string;
}
export interface Map<T> {
    parameters?: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
    items: T[] | undefined | (() => T[]);
    iterator: <U>(item: T, objectContext: StateMachineContext<U>) => void | {};
    maxConcurrency?: number;
    comment?: string;
}
export interface Succeed {
    comment?: string;
}
export interface Parallel<T> {
    items?: T[] | undefined | (() => T[]);
    branches: ((item: T) => void | {})[];
    catch?: CatchConfiguration;
    retry?: RetryConfiguration;
    comment?: string;
}
export interface Invoke<P, R> {
    target: ((parameters?: P) => Promise<R>) | ((parameters?: P) => R);
    parameters?: P | (() => P);
    comment?: string;
}
export interface Choice {
    input: unknown | (() => unknown) | (<U>(objectContext: StateMachineContext<U>) => unknown);
    choices: Array<{
        condition: () => boolean;
        block: Function;
    }>;
    default: boolean | (() => boolean);
    comment?: string;
}
export interface StateMachineContext<TInput> {
    execution: {
        id: string;
        input: TInput;
        name: string;
        roleArn: string;
        startTime: string;
    };
    stateMachine: {
        id: string;
        name: string;
    };
    state: {
        name: string;
        enteredTime: string;
    };
}
export declare const typescriptInvoke: <P, R>(args: Invoke<P, R>) => Promise<R>;
export declare const typescriptTry: (args: Try) => Promise<AslState>;
export declare const typescriptDoWhile: (args: DoWhile) => Promise<AslState>;
export declare const typescriptWhile: (args: While) => Promise<AslState>;
export declare const typescriptIf: (args: If) => Promise<AslState>;
export declare const task: <TResult>(args: Task) => Promise<TResult>;
export declare const wait: (args: Wait) => Promise<void>;
export declare const parallel: <Item>(args: Parallel<Item>) => Promise<AslState>;
export declare const choice: (args: Choice) => Promise<AslState>;
export declare const map: <Item>(args: Map<Item>) => Promise<AslState>;
export declare const pass: <T>(args: Pass<T>) => T;
export declare const succeed: (x: Succeed) => AslState;
export declare const fail: (x: Fail) => never;
export declare namespace states {
    function format(format: string, ...args: unknown[]): unknown;
    function stringToJson(arg: string | undefined): unknown;
    function jsonToString(arg: unknown): string;
    function array(...args: unknown[]): unknown[];
}
`